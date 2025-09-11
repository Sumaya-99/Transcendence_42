import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Use a simple counter instead of timestamps for match IDs
let matchIdSequence = 1;

export async function createMatch(player1Alias, player2Alias, customId = null) {
    // Use customId if provided, otherwise use sequence
    const matchId = customId || matchIdSequence++;
    
    const matchData = {
        // Don't set id here, let Prisma auto-generate the database ID
        tournamentId: null,
        roundNumber: 1,
        matchNumber: matchId, // Use our custom match number for reference
        status: 'PENDING',
        player1Alias,
        player2Alias,
    };

    const match = await prisma.match.create({
        data: matchData,
    });

    await prisma.matchPlayer.createMany({
        data: [
            { matchId: match.id, alias: player1Alias },
            { matchId: match.id, alias: player2Alias }
        ]
    });

    return match;
}

export async function startMatch(matchId) {
    const updatedMatch = await prisma.match.update({
        where: { id: matchId },
        data: {
            status: 'ONGOING',
            startedAt: new Date()
        }
    });
    
    return updatedMatch;
}

export async function completeMatch(matchId, winnerAlias, player1Score, player2Score) {
    const match = await prisma.match.findUnique({
        where: { id: matchId },
        include: { players: true }
    });

    if (!match)
        throw new Error(`Match ${matchId} not found`);

    // Update match status
    await prisma.match.update({
        where: { id: matchId },
        data: {
            status: 'FINISHED',
            winnerAlias,
            finishedAt: new Date()
        }
    });

    // Update winner's score and result
    const winnerScore = winnerAlias === match.player1Alias ? player1Score : player2Score;
    await prisma.matchPlayer.updateMany({
        where: {
            matchId: matchId,
            alias: winnerAlias
        },
        data: {
            score: winnerScore,
            result: 'WIN'
        }
    });

    // Update loser's score and result
    const loserScore = winnerAlias === match.player1Alias ? player2Score : player1Score;
    await prisma.matchPlayer.updateMany({
        where: {
            matchId: matchId,
            alias: { not: winnerAlias }
        },
        data: {
            score: loserScore,
            result: 'LOSS'
        }
    });

    return match;
}

// Helper function to get current match sequence (useful for debugging)
export function getCurrentMatchSequence() {
    return matchIdSequence;
}

// Function to reset sequence (useful for testing)
export function resetMatchSequence(newValue = 1) {
    matchIdSequence = newValue;
    return matchIdSequence;
}
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function recordLocalTournamentResult(request, reply)
{
    const { winner, loser, tournamentName = 'Local Tournament' } = request.body;

    if (!winner || !loser)
        return reply.status(400).send({ error: 'Winner and loser are required' });

    const winnerUser = await prisma.user.findFirst({
    where: { username: winner }
    });

    const loserUser = await prisma.user.findFirst({
    where: { username: loser }
    });

    const updates = [];

    if (winnerUser)
    {
        updates.push(
        prisma.user.update({
        where: { id: winnerUser.id },
        data: { 
        wins: { increment: 1 },
        totalGames: { increment: 1 }
                }
            })
        );
    }

    if (loserUser)
    {
        updates.push(
        prisma.user.update({
        where: { id: loserUser.id },
        data: { 
        losses: { increment: 1 },
        totalGames: { increment: 1 }
                }
            })
        );
    }

    if (updates.length > 0)
        await prisma.$transaction(updates);

    return reply.status(200).send({
    success: true,
    message: `Tournament result recorded: ${winner} beats ${loser}`,
    statsUpdated: updates.length > 0
    });
}
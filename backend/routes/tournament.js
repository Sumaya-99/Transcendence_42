import { recordLocalTournamentResult } from '../controller/tournamentController.js';
import { authenticate } from '../services/jwtService.js';
import { trackUserActivity } from '../services/lastSeenService.js';

async function tournamentRoutes(fastify, options) {
  fastify.post('/tournament/local-result', { preHandler: [authenticate, trackUserActivity]}, recordLocalTournamentResult);
}

export default tournamentRoutes;
import {
  registerUser,
  login,
  logout,
  setup2FA,
  refreshToken,
  verify2FA,
  getCurrentUser 
} from '../controller/authController.js';

import {
  handleGoogleAuth,
  handleGoogleCallback
} from '../services/googleAuthService.js';

import {
  registerUserOpts,
  loginOpts,
  logoutOpts,
} from '../schema/authSchema.js';

import { authenticate } from '../services/jwtService.js';
import { 
  loginRateLimit, 
  registerRateLimit, 
  withRateLimit 
} from '../config/rateLimitConfig.js';

export default function authRoutes(fastify, _opts, done) {
  
  // Routes with rate limiting
  fastify.post('/auth/registerUser', withRateLimit(registerUserOpts, registerRateLimit), registerUser);
  fastify.post('/auth/login', withRateLimit(loginOpts, loginRateLimit), login);
  
  // Regular routes without rate limiting
  fastify.post('/auth/logout', { preHandler: authenticate }, logout);
  fastify.post('/auth/refresh', { preHandler: authenticate }, refreshToken);
  fastify.get('/auth/getCurrentUser', { preHandler: authenticate }, getCurrentUser);
  
  // 2FA Routes
  fastify.post('/auth/setup-2fa', { preHandler: authenticate }, setup2FA);
  fastify.post('/auth/verify-2fa', { preHandler: authenticate }, verify2FA);

  // Google OAuth endpoints
  fastify.get('/auth/google', handleGoogleAuth);
  fastify.get('/auth/google/callback', handleGoogleCallback);

  done();
}
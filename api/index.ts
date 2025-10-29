import serverless from 'serverless-http';
import { server, createApp } from './src/main';

let isInitialized = false;

/**
 * Handler serverless compatível com Vercel.
 * Inicializa NestJS na primeira requisição.
 */
const handler = async (req: any, res: any) => {
  if (!isInitialized) {
    await createApp();
    isInitialized = true;
  }
  return serverless(server)(req, res);
};

export default handler;

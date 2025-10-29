// api/index.ts
import serverless from 'serverless-http';
import { server, createApp } from './src/main';

let initialized = false;

const handler = async (req: any, res: any) => {
  if (!initialized) {
    await createApp(); // Inicializa Nest na primeira requisição
    initialized = true;
  }
  return serverless(server)(req, res);
};

export default handler; // Export default obrigatório

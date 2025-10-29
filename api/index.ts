import serverless from 'serverless-http';
import { server, createApp } from './src/main';

let isInitialized = false;

const handler = async (req: any, res: any) => {
  if (!isInitialized) {
    await createApp(); // inicializa NestJS
    isInitialized = true;
  }
  return serverless(server)(req, res);
};

export default handler;

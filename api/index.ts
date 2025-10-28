import { bootstrap } from './src/main';

let serverPromise: Promise<any>;

export default async function handler(req: any, res: any) {
  if (!serverPromise) {
    serverPromise = bootstrap(true);
  }
  const server = await serverPromise;
  return server(req, res);
}

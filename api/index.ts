import { bootstrap } from './src/main';

export default async function handler(req: any, res: any) {
  const server = await bootstrap(true);
  return server(req, res);
}

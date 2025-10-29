import serverless from 'serverless-http';
import { server, createApp } from './src/main';

createApp().catch(console.error);  // inicializa o Nest

export default serverless(server);

import serverless from 'serverless-http';
import bootstrap from './src/main';

export default serverless(await bootstrap);

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import dotenv from 'dotenv';
import * as sapper from '@sapper/server';

import './styles/global.css';

dotenv.config();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

export default polka()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });

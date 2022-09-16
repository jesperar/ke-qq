import app from './libs/server';
import { init as corsInit } from '~/libs/cors';
import router from './routers/routers';

import koaStatic from 'koa-static';
import { staticRoot, enableCors } from '~/config/app';

//cors
if (enableCors) corsInit(app);

app.use(router);
app.use(koaStatic(staticRoot));

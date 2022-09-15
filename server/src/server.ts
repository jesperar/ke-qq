import app from './libs/server';
import router from './routers/routers'
import koaStatic from 'koa-static'
import {staticRoot} from './config/app'
import {init as corsInit, enableCors} from './libs/cors'

// cors
if (enableCors) corsInit(app)

app.use(router)
app.use(koaStatic(staticRoot))

import {getCategory} from './models/category'
getCategory()
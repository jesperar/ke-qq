import app from './libs/server';
import router from './routers/routers'
import koaStatic from 'koa-static'
import {staticRoot} from './config/app'

// 服务器添加跨域头 
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  await next()
})

app.use(router)
app.use(koaStatic(staticRoot))

// import { getAllBanner } from './models/banner';

// app.use(async ctx => {
//   let banners = await getAllBanner();

//   ctx.body = banners;
// });

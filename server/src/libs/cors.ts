import Koa from 'koa';

export function init(app: Koa) {
  app.use(async (ctx, next) => {
    //CORS-Cross-Orign Resurce Share
    ctx.set('Access-Control-Allow-Origin', '*');    //域
    ctx.set('Access-Control-Allow-Methods', '*');   //方法
    ctx.set('Access-Control-Allow-Headers', '*');   //头

    if (ctx.method == 'OPTIONS') {
      ctx.body = 'OK';
    } else {
      await next();
    }
  });
}
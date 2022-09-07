import Koa from 'Koa'

export function init (app: Koa) {
  // 服务器添加跨域头 
  app.use(async (ctx, next) => {
    // cors头 cross-origin-resource-share
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Methods', '*')
    ctx.set('Access-Control-Allow-Headers', '*')

    if (ctx.method === 'OPTIONS') {
      ctx.body = 'OK'
    } else {
      await next()
    }
  })
}

export const enableCors = true
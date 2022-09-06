import Router from '@koa/router'

let router = new Router()

router.prefix('/user')

router.get('/', async ctx => {
  ctx.body = 'users'
})

export default router.routes()
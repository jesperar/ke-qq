import Router from '@koa/router'

let router = new Router()

router.prefix('/course')

router.get('/', async ctx => {
  ctx.body = 'course'
})

export default router.routes()
import Router from '@koa/router'
import { getAllBanner } from '../../../models/banner'

let router = new Router()

router.prefix('/course')

router.get('/', async ctx => {
  ctx.body = 'course'
})

router.get('/getAllBanner', async ctx => {
  const data = await getAllBanner()
  ctx.body = data
})

export default router.routes()
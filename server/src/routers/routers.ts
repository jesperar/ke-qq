import Router from '@koa/router'
import apiRouter from './api/api'
import renderRouter from './render/render'

let router  = new Router()

router.use(apiRouter)
router.use(renderRouter)

export default router.routes()
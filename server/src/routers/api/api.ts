import Router from '@koa/router'
import user from './user/user'
import course from './course/course'

const router = new Router()
router.prefix('/api')

router.use(user)
router.use(course)

export default router.routes()
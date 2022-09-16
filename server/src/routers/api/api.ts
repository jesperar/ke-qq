import Router from '@koa/router';

import courseRouter from './course/course';
import userRouter from './user/user';
import siteRouter from './site/site';

let router = new Router();

router.prefix('/api');

router.use(courseRouter);
router.use(userRouter);
router.use(siteRouter);

export default router.routes();

// export function init(router: Router) {
//   router.use(courseRouter);
//   router.use(userRouter);
// }
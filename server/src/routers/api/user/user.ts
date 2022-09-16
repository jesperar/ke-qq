import Router from '@koa/router';

let router = new Router();

router.prefix('/user');

router.get('/', async ctx => {
  ctx.body = 'usersssssss';
});

export default router.routes();
import Router from '@koa/router';
import * as modelCategory from '~/models/category';

let router = new Router();

router.prefix('/site');

router.get('/categories', async ctx => {
  ctx.body = await modelCategory.getCategory();
});

export default router.routes();
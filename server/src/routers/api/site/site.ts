import Router from '@koa/router';
import * as modelCategory from '~/models/category';
import * as modelSearch from '~/models/search';

let router = new Router();

router.prefix('/site');

router.get('/categories', async ctx => {
  ctx.body = await modelCategory.getCategory();
});

router.get('/hot-keywords', async ctx => {
  ctx.body = await modelSearch.getSuggest('');
});

router.get('/suggest/:kw', async ctx => {
  const { kw } = ctx.params;
  ctx.body = await modelSearch.getSuggest(kw);
});

export default router.routes();
import Router from '@koa/router';

let router = new Router();

router.prefix('/course');

// router.get('/banners', async ctx => {
//   ctx.body = await modelBanner.getAllBanner();
// });

export default router.routes();
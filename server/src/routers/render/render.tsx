import Router from '@koa/router';
import fs from 'fs';
import path from 'path';
import { staticRoot } from '~/config/app';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '@/App';

import { getCategory } from '~/models/category';

let router = new Router();

if (process.env.NODE_ENV == 'production') {
  const index = fs.readFileSync(
    path.resolve(staticRoot, 'index.html')
  ).toString();

  router.get('/', async ctx => {
    let categories = await getCategory();

    let str = ReactDOMServer.renderToString(<App categories={categories} />);
    ctx.body = index.replace(
      '<div id="root"></div>',
      `
      <script>
      window.categories=${JSON.stringify(categories)};
      </script>
      <div id="root">${str}</div>
      `
    );
  });
} else {
  router.get('/', async ctx => {
    ctx.body = 'render disabled';
  });
}


export default router.routes();
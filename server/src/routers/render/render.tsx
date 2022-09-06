import Router from '@koa/router'
import fs from 'fs'
import path from 'path'
import {staticRoot} from '../../config/app'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '@/App'

const router = new Router()

const index = fs.readFileSync(path.resolve(staticRoot, 'index.html')).toString()
router.get('/', async (ctx) => {
  const str = ReactDOMServer.renderToString(<App />)
  ctx.body = index.replace('<div id="root"></div>', `<div id="root">${str}</div>`)
})

export default router.routes()
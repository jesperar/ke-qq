import Koa from 'koa';
import { serverPort } from '~/config/app';

const app = new Koa();

app.listen(serverPort, () => {
  console.log('============== server started');
});

export default app;
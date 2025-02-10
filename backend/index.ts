import Koa from 'koa';
import Router from '@koa/router';

const Koa = require('koa');
const app = new Koa();
const router = new Router();

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
    if (ctx.url === '/lorenzo') {
        ctx.body = 'Hello Lorenzo';
    }
    else {
        ctx.body = 'Hello World';
    }
});

router.get('/lorenzo', async ctx => {
  ctx.body = 'Hello Lorenzo!';
});

app.use(router.routes(      //connette app con router *//
    
));

app.listen(3000);
const Koa = require('koa');

const bodyParser   = require('koa-bodyparser');
const router       = require('koa-router')();
const serve        = require("koa-static");
const app          = new Koa();
const valiteCookie = require('./middleware/validate');
app.use(valiteCookie);
app.use(bodyParser());
app.use(router.routes());

// 配置静态资源
app.use(serve(__dirname + "/static", {
  extensions: ['html']
}));
router.get("/test", (ctx, next) => {
  debugger;
  ctx.body = "test";
})

//============路由配置================

router.get('/', async (ctx, next) => {
  ctx.redirect('/list');
});

router.post('/login', async (ctx, next) => {
  let   name     = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
  const result   = true;                             //TODO:做数据库验证
  if (name=== "koa" && password === "123") {
    ctx.cookies.set("LoginStatus", true);
  } else {
    ctx.body = "Login error"
  }
});


app.listen(3000, function () {
  console.log('链接上了');

})
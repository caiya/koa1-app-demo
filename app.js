var Koa = require('koa'),
    app = new Koa(),
    logger = require('koa-logger'),
    api = require("./routes/index"),
    router = require('koa-router')();

app.use(logger());

//注册各种路由
router.use('/api', api.routes(), api.allowedMethods());

//挂在中间件到app
app.use(router.routes(), router.allowedMethods());

//错误监听
app.on('error', function(err, ctx) {
    log.error('server error', err, ctx);
});

app.listen(3000);
/**
 * 注册各种路由
 */
const router = require('koa-router')();
const userRouter = require("./users"); //用户模块路由

router.use('/users', userRouter.routes(), userRouter.allowedMethods());

module.exports = router;
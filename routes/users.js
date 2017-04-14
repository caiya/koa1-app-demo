var router = require('koa-router')();

router.get('/', async function(ctx, next) {
    ctx.body = 'this is a users response!';
});

router.get('/bar', async function(ctx, next) {
    ctx.body = 'this is a users/bar response!';
});

module.exports = router;
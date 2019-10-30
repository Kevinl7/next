const Koa = require('koa')
const Router = require('koa-router')

const server = new Koa()
const router = new Router()

router.get('/', async ctx => {
  ctx.redirect('/b')
  ctx.status = 301

})



server.use(router.routes())

server.listen(3001, () => {
  console.log('Run 3000')
  
})
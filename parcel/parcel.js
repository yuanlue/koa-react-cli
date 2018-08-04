import { resolve } from 'path'
import Bundler from 'parcel-bundler'
import views from 'koa-views'
import serve from 'koa-static'

const r = path => resolve(__dirname, path)

const bundler = new Bundler(r('../src/index.html'), {
  publicUrl: '/',
  watch: true
})

module.exports = async app => {
  
  await bundler.bundle()
  console.log('编译成功')
  app.use(serve(r('../dist')))

  app.use(views(r('../dist'), {
    extension: 'html'
  }))
  
  //app.use(wx.auth)
  app.use(async (ctx,next) => {
     
     await ctx.render('index.html',{
         title:"123"
     })
    })

}

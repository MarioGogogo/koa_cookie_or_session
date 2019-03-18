// 写个校验函数
function validatcCookie(ctx,next) {
   console.log('重新登录走这里',
      ctx.url != "/login");
   if(!(ctx.cookies.get('LoginStatus')) && ctx.url != "/login"){
       //返回登录首页
       return ctx.redirect("/login");
   }else{
      return next();
   }
}

module.exports = validatcCookie;
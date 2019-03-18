// 写个校验函数
function validatcCookie(ctx,next) {
   console.log('重新登录走这里',
      ctx.url != "/login");
   if(!(ctx.cookies.get('LoginStatus')) && ctx.url != "/login"){
       return ctx.redirect("/login");
   }else{
      return next();
   }
}

module.exports = validatcCookie;
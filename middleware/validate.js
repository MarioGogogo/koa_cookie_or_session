// 写个校验函数
function validatcCookie(ctx,next) {
   console.log('每个请求走下这里');
   if(!(ctx.cookies.get('LoginStatus')) && ctx.url != "/login"){
       ctx.redirect("/login");
   }else{
      return next();
   }
}

module.exports = validatcCookie;
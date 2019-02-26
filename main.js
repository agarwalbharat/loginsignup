$(document).ready(function(){
  $("#signup_btn").click(function(){
    $("#main").animate({left:"22.5%"},450);
    $("#main").animate({left:"30%"},500);
    $("#loginform").css("visibility","hidden");
    $("#loginform").animate({left:"25%"},450);

    $("#signupform").animate({left:"17%"},450);
    $("#signupform").animate({left:"30%"},500);
    $("#signupform").css("visibility","visible");
  });

  $("#login_btn").click(function(){
    $("#main").animate({left:"77.5%"},450);
    $("#main").animate({left:"70%"},500);
    $("#signupform").css("visibility","hidden");
    $("#signupform").animate({left:"75%"},450);

    $("#loginform").animate({left:"83%"},450);
    $("#loginform").animate({left:"70%"},500);
    $("#loginform").css("visibility","visible");
  });
});

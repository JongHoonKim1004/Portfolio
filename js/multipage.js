// 각 프로젝트 멀티 페이지

$(function(){
  // 초기 설정
  $(".pg1div").hide();
  $(".pg1div").eq(0).show();
  $(".pg2div").hide();
  $(".pg2div").eq(1).show();
  $(".pg3div").hide();
  $(".pg3div").eq(1).show();
  $(".pg4div").hide();
  $(".pg4div").eq(2).show();
  $(".pg5div").hide();
  $(".pg5div").eq(0).show();
  $(".pg6div").hide();
  $(".pg6div").eq(1).show();

  $(".pg1").click(function(){
    $(this).siblings().removeClass("webpageSelected");
    $(this).addClass("webpageSelected");

    let i = $(this).index();
    
    $(".pg1div").hide();
    $(".pg1div").eq(i).fadeIn();
  });

  $(".pg2").click(function(){
    $(this).siblings().removeClass("webpageSelected");
    $(this).addClass("webpageSelected");

    let i = $(this).index();
    
    $(".pg2div").hide();
    $(".pg2div").eq(i).fadeIn(1000);
  });

  $(".pg3").click(function(){
    $(this).siblings().removeClass("webpageSelected");
    $(this).addClass("webpageSelected");

    let i = $(this).index();
    
    $(".pg3div").hide();
    $(".pg3div").eq(i).fadeIn(1000);
  });

  $(".pg4").click(function(){
    $(this).siblings().removeClass("webpageSelected");
    $(this).addClass("webpageSelected");

    let i = $(this).index();
    
    $(".pg4div").hide();
    $(".pg4div").eq(i).fadeIn(1000);
  });

  $(".pg5").click(function(){
    $(this).siblings().removeClass("webpageSelected");
    $(this).addClass("webpageSelected");

    let i = $(this).index();
    
    $(".pg5div").hide();
    $(".pg5div").eq(i).fadeIn(1000);
  });

  $(".pg6").click(function(){
    $(this).siblings().removeClass("webpageSelected");
    $(this).addClass("webpageSelected");

    let i = $(this).index();
    
    $(".pg6div").hide();
    $(".pg6div").eq(i).fadeIn(1000);
  });
});

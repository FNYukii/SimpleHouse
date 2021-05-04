$(function(){

  
  let isDarkTheme = 0; // 0 : light-theme, 1 : dark-theme.

  let isJustSwitched = 0;


  $('header .canvas-container .theme-switch').click(function(){

    isJustSwitched = 1;
    console.log("isJustSwitched : " + isJustSwitched);
    if(isJustSwitched){
      $(this).toggleClass('dark-theme-white');
      $('header .canvas-container .theme-switch i').toggleClass('dark-theme-white');
      isJustSwitched = 0;
      console.log("isJustSwitched : " + isJustSwitched);
    }

    $(this).mouseout(function () { 
      
    });


  

    // global-navのhover疑似クラスのために、ダークテーマかどうか判定できるようにしておく。
    isDarkTheme = 1 - isDarkTheme;
    console.log("isDarkTheme : " + isDarkTheme);

    // BODY
    $('body').toggleClass('dark-theme-333');

    // HEADER
    $('header .canvas-container .logo').toggleClass('dark-theme-white');

    // MAIN
    $('main .section .details-container').toggleClass('dark-theme-dimgray');
    $('main .section .details-container h1').toggleClass('dark-theme-white');
    $('main .section .details-container h2').toggleClass('dark-theme-white');

    // FOOTER
    $('footer').toggleClass('dark-theme-222');

  });


  // global-nav's hover state 
  $('header .canvas-container .global-nav li a').hover(
    function(){
      if(isDarkTheme){
        $(this).addClass('dark-theme-white')
      }
    },
    function(){
      $(this).removeClass('dark-theme-white');
    }
  );
  
  // theme-switch's hover state
  if(!isJustSwitched){

    $('header .canvas-container .theme-switch').hover(
      function(){
        if(isDarkTheme){
        $(this).addClass('dark-theme-white');
        $('header .canvas-container .theme-switch i').addClass('dark-theme-white');
      }
    },
    function(){
      $(this).removeClass('dark-theme-white');
      $('header .canvas-container .theme-switch i').removeClass('dark-theme-white');
    }
    );
  }



















});
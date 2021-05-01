$('header .canvas-container .theme-switch-button').click(function(){

  // body
  $('body').css('background-color','#333');

  // header logo
  $('header .canvas-container .logo').css('color','white');

  // global-nav items
  $('header .canvas-container .global-nav li a').css('color','#aaa');

  // global-nav's hover state 
  $('header .canvas-container .global-nav li a').hover(
    function(){
      $(this).css('color','white');
    },
    function(){
      $(this).css('color','#aaa');
    }
  );

  // theme-switch-button's hover state
  $('header .canvas-container .theme-switch-button').hover(
    function(){
      $(this).css('border-color','white');
      $('header .canvas-container .theme-switch-button i').css('color','white');
    },
    function(){
      $(this).css('border-color','#aaa');
      $('header .canvas-container .theme-switch-button i').css('color','#aaa');
    }
  );


  // main
  $('.section .details-container').css('border-color','#777');
  $('.section .details-container h1').css('color','white');
  $('.section .details-container h2').css('color','white');
  // footer
  $('footer').css('background-color','#222');

});
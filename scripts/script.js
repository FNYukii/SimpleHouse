$('body').css('background-color','#333');

$('header .canvas-container .logo').css('color','white');

$('header .canvas-container .global-nav li a').css('color','#aaa');
$('header .canvas-container .global-nav li a').hover(
  function(){
    $(this).css('color','white');
  },
  function(){
    $(this).css('color','#aaa');
  }
);

$('.section .details-container').css('border-color','#777');
$('.section .details-container h1').css('color','white');
$('.section .details-container h2').css('color','white');


$('footer').css('background-color','#222');
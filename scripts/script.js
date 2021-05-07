$(function(){



  // SET THE THEME WHEN PAGE LOADS
  console.log("isDarkTheme : " + localStorage.getItem('isDarkTheme'));
  if(localStorage.getItem('isDarkTheme') == "0"){
    console.log("light themeで開始");
  }else{
    // ダークテーマに切り替える。
    // BODY
    $('body').css('transition','0s');
    $('body').addClass('dark-theme-333');
    // HEADER
    $('header .canvas-container .logo').addClass('dark-theme-white');
    // MAIN
    $('main .section .details-container').addClass('dark-theme-dimgray');
    $('main .section .details-container h1').addClass('dark-theme-white');
    $('main .section .details-container h2').addClass('dark-theme-white');
    // FOOTER
    $('footer').addClass('dark-theme-222');

    // ログ出力
    console.log("dark themeで開始");
  }
  
  

  // SWITCH THE THEME
  let isJustSwitched = 0;
  $('.trigger-to-switch-theme').click(function(){
    // テーマ切り替え直後はマウスオーバー状態なので、theme-buttonを強調表示する。
    isJustSwitched = 1;
    if(isJustSwitched){
      $('header .canvas-container .theme-button').toggleClass('dark-theme-white');
      $('header .canvas-container .theme-button i').toggleClass('dark-theme-white');
      isJustSwitched = 0;
    }

    // BODY
    $('body').css('transition','0.8s');
    $('body').toggleClass('dark-theme-333');
    // HEADER
    $('header .canvas-container .logo').toggleClass('dark-theme-white');
    // MAIN
    $('main .section .details-container').toggleClass('dark-theme-dimgray');
    $('main .section .details-container h1').toggleClass('dark-theme-white');
    $('main .section .details-container h2').toggleClass('dark-theme-white');
    // FOOTER
    $('footer').toggleClass('dark-theme-222');

    // localStorageの値を更新する。
    if(localStorage.getItem('isDarkTheme') == "0"){
      localStorage.setItem('isDarkTheme',"1");
    }else{
      localStorage.setItem('isDarkTheme',"0");
    }

    // ログ出力
    console.log("isDarkTheme : " + localStorage.getItem('isDarkTheme'));
  });



  // HOVER STATE FOR DARK THEME
  // global-nav's hover state 
  $('header .canvas-container .global-nav li a').hover(
    function(){
      if(localStorage.getItem('isDarkTheme') == "1"){
        $(this).addClass('dark-theme-white')
      }
    },
    function(){
      $(this).removeClass('dark-theme-white');
    }
  );

  // theme-button's hover state
  if(!isJustSwitched){
    $('header .canvas-container .theme-button').hover(
      function(){
        if(localStorage.getItem('isDarkTheme') == "1"){
          $(this).addClass('dark-theme-white');
          $('header .canvas-container .theme-button i').addClass('dark-theme-white');
        }
      },
      function(){
        $(this).removeClass('dark-theme-white');
        $('header .canvas-container .theme-button i').removeClass('dark-theme-white');
      }
    );
  }



  // SWITCH HAMBURGER MENU
  $('.trigger-to-switch-hamburger-menu').click(function(){
    $('header .hamburger-menu').fadeToggle();
  });



  // POP UP PICTURE MODAL
  $('.trigger-to-popup-modal').click(function(){

    // 画像のパスをpopup-itemのsrc属性に設定する。
    var imageSource = $(this).attr('src');
    console.log("image source : " + imageSource);
    $('main .modal-item').attr('src', imageSource);

    // モーダルウィンドウをポップアップする。
    $('main .modal-shadow').fadeIn();
    $('main .modal-item').fadeIn();

  });



  // CLOSE PICTURE MODAL
  $('.trigger-to-close-modal').click(function(){

    $('main .modal-shadow').fadeOut();
    $('main .modal-item').fadeOut();

  });















});
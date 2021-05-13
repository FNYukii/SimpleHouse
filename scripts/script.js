$(function(){

  // variables
  let isJustSwitched = 0;
  let isOpenHamburgerMenu = 0;



  console.log("isDarkTheme : " + localStorage.getItem('isDarkTheme'));
  if(localStorage.getItem('isDarkTheme') == "0"){
    console.log("light themeで開始");
  }else{
    toggleTheme();
    console.log("dark themeで開始");
  }




  
  function toggleTheme(){

    // body
    $('body').toggleClass('dark-theme-333');
    // header
    $('header .large-container .logo').toggleClass('dark-theme-white');
    // main
    $('main .section > div:last-child').toggleClass('dark-theme-dimgray');
    $('main .section h1').toggleClass('dark-theme-white');
    $('main .section h2').toggleClass('dark-theme-white');
    // footer
    $('footer').toggleClass('dark-theme-222');

  }



  function switchTheme(){

    // テーマ切り替え直後はマウスオーバー状態なので、theme-buttonを強調表示する。
    isJustSwitched = 1;
    if(isJustSwitched){
      $('header .large-container .theme-button').toggleClass('dark-theme-white');
      $('header .large-container .theme-button i').toggleClass('dark-theme-white');
      isJustSwitched = 0;
    }

    // テーマ切り替え
    $('body').css('transition','0.8s');
    toggleTheme();

    // localStorageの値を更新する。
    if(localStorage.getItem('isDarkTheme') == "0"){
      localStorage.setItem('isDarkTheme',"1");
    }else{
      localStorage.setItem('isDarkTheme',"0");
    }

    // ログ出力
    console.log("isDarkTheme : " + localStorage.getItem('isDarkTheme'));

  }



  function switchHamburgerMenu(){

    if(!isOpenHamburgerMenu){
      $('header .hamburger-menu').fadeIn();
      $('body,html').css('overflow-y', 'hidden');
    }else{
      $('header .hamburger-menu').fadeOut();
      $('body,html').css('overflow-y', 'visible');
    }
    isOpenHamburgerMenu = 1 - isOpenHamburgerMenu;

  }



  function popupModal(imageSource){

    // 画像のパスをpopup-itemのsrc属性に設定する。
    $('main .modal-item').attr('src', imageSource);

    // モーダルウィンドウをポップアップする。
    $('main .modal-shadow').fadeIn();
    $('main .modal-close-button').fadeIn();
    $('main .modal-item').fadeIn();

    // 画面スクロールを無効化する。
    $('body,html').css('overflow-y', 'hidden');

  } 


  
  function closeModal(){
  
    // modalを閉じる。
    $('main .modal-shadow').fadeOut();
    $('main .modal-close-button').fadeOut();
    $('main .modal-item').fadeOut();

    // 画面スクロールを有効に戻す。
    $('body,html').css('overflow-y', 'visible');

  }
  



  // TRIGGERS
  // switch the theme
  $('.trigger-to-switch-theme').click(function(){
    switchTheme();
  });


  // switch the hamburger menu
  $('.trigger-to-switch-hamburger-menu').click(function(){
    switchHamburgerMenu();
  });


  // global-nav's hover state in the dark theme
  $('header .large-container .global-nav li a').hover(
    function(){
      if(localStorage.getItem('isDarkTheme') == "1"){
        $(this).addClass('dark-theme-white')
      }
    },
    function(){
      $(this).removeClass('dark-theme-white');
    }
  );


  // theme-button's hover state in the dark theme
  $('header .large-container .theme-button').hover(
    function(){
      if(localStorage.getItem('isDarkTheme') == "1"){
        $(this).addClass('dark-theme-white');
        $('header .large-container .theme-button i').addClass('dark-theme-white');
      }
    },
    function(){
      $(this).removeClass('dark-theme-white');
      $('header .large-container .theme-button i').removeClass('dark-theme-white');
    }
  );
  

  // popup picture modal
  $('.trigger-to-popup-modal').click(function(){
    var imageSource = $(this).attr('src');
    console.log("image source : " + imageSource);
    
    popupModal(imageSource);
  });


  // if you click modal shadow, modal fades out.
  $('.trigger-to-close-modal').click(function(){
    closeModal();
  });


  // if you push down esc key, modal fades out.
  $(window).keydown(function(e){
    if(e.keyCode === 27){
      closeModal();
    }
  });











});
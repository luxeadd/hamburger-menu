//JQ2 定型文
$(function() {
  //ドロワーメニュー===========================
 
  //ヘッダードロワーメニュー------------------
  var grayDisplay = $('#gray-display');
  grayDisplay.hide(); //展開時画面暗くする設定
  //＃w:100% h:100% fixed t:0 lf:0 bg:gray 0.8

  //ハンバーガーメニュークリックでイベント作動
  //ハンバーガーメニューにopenクラスがついていれば外す
  //   →×からハンバーガーにもどる
  //ドロワーメニュー閉じる  画面暗い解除
  $('.hamburger-menu').click( function() {
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $('.header-drawer').slideToggle();
      grayDisplay.hide();

  //ハンバーガーメニューにopenクラスがついていなければ追加
  //   →ハンバーガーから×に変形
  //ドロワーメニュー開く  画面暗くする展開
    }else{
      $('.header-drawer').slideToggle();
      grayDisplay.show(); 
      $(this).addClass('open');
    }
  });

  //グレイ部分のクリックで全て閉じる
 
  grayDisplay.click(function() {
    $(this).next().fadeOut(200,function() {
      grayDisplay.hide();
      $('.header-drawer').slideUp();
      $('.hamburger-menu').removeClass('open');
    });
  });

  //ドロワーメニュークリックで全て閉じる
   //×をハンバーガーに戻す
  $('.header-drawer li').click(function() {
      grayDisplay.hide();
      $('.header-drawer').hide();
      $('.hamburger-menu').removeClass('open');
  });


  //その他ドロワー---------------------------
  $('.drawer').click( function() {
    $('.drawer-corse').slideToggle();
  });

  $('.drawer-sp').click( function() {
    $('.header-drawer__item-corse').slideToggle();
  });

  //============================================


 // べージトップボタン=========================
  $('.page-top').click(function() {
    $('html,body').animate({scrollTop:0},'500');
  });
  // page-topクラスをクリックでイベント発火。html,bodyで全体の情報を取得しanimateメソッドで移動をかける。500ms（0.5秒）でTopまでスクロール

  $('.page-top').hide();
  // page-topクラスを消す
  $(window).scroll(function () {
    if($(window).scrollTop() > 80 ) {
      $('.page-top').slideDown(300);
    } else {
      $('.page-top').slideUp(300);
    }
  });
  // ウインドウをスクロールしてイベント発火
  // ウインドウを80px TopからスクロールしたらslideDownで表示。0.3秒で


  // モーダルJS================================
  var grayDisplay = $('#gray-display');
  var largeImage = $('#large-img');
  // モーダル表示要のIDは何度も取得するため、変数として格納しておく
  
  grayDisplay.hide();
  largeImage.hide();
// 最初は非表示に

  $('.corse-block li img').click(function() {
  
    const targetImg = $(this).attr('src');
    // クリックされた画像のsrc属性の値を取得して定数に格納

    grayDisplay.show();
    // 画面全体を暗くする

    largeImage.append(`<img src='${targetImg}'>`);
    largeImage.show();
    // 取得したsrc属性の値をlargeImageクラスに追加して、showメソッドで表示

    grayDisplay.click(function() {
      $(this).next().fadeOut(200,function() {
        grayDisplay.hide();
        largeImage.children().remove();
      });
    });
    // 画面の暗い部分をクリックすると、モーダル表示した画像と暗くなった部分をfadeOutメソッドで消す。
    return false;
  });
  //===========================================

});
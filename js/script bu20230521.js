
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  //ドロワーメニュー
  $(".js-drawer").click(function (event) {
    event.preventDefault(); // デフォルトのリンクの動作をキャンセル
    $(".js-drawer").toggleClass("js-drawer-active");
    $(".js-drawer-menu").toggleClass("js-drawer-menu-active");
  });

  // スクロールして表示領域に入ったらclass付与
  $(function () {
    $(".js-fadeUp").on("inview", function () {
      $(this).addClass("is-inview");
    });
  });

  // ロードアニメーションの設定
  $(function () {
    function end_loader() {
      $('.loader').fadeOut(800);
    }
    $(window).on('load', function () {
      setTimeout(function () {
        end_loader();
      }, 1000)
    })
  })

  // swiper-mvの設定
  var swiper = new Swiper('.swiper-mv', {
    slidesPerView: 1,
    // spaceBetween: 10,
    loop: true,
    effect: 'cube',
    cubeEffect: {
      shadow: false,
    },
    autoplay: {
      delay: 3000, // スライドが3秒ごとに切り替わる。
      disableOnInteraction: false, // ユーザーの操作でautoplayを停止しない。
    },
    speed: 1000, // 1枚の画像アニメーションを1秒掛けて表現する。
    simulateTouch: false,
    // 他のオプション設定
  });
  // /swiper-mvの設定

  // swiper-galleryの設定
  const swiperGalleryPhoto = new Swiper('.swiper.swiper-gallery-photo', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    loop: true,
    effect: 'cube',
    cubeEffect: {
      shadow: false,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    simulateTouch: false,
  });
  // /swiper-galleryの設定

  // ボタンをクリックしたらスクロールして上に戻る
  $('.top-button').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });
  // ボタンをクリックしたらスクロールして上に戻る


  // 
});


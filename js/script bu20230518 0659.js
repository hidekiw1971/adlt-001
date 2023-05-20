
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

  // load animationの設定
  $(window).on("load", function () {
    $(".js-loading").delay(0).fadeIn(900);
    $(".js-loading-img").delay(300).fadeIn(800);
    $(".js-loading").delay(3000).fadeOut(900);
    $("body")
      .delay(3000)
      .queue(function (next) {
        $(this).removeClass("fixed");
        next();
      });
  });

});

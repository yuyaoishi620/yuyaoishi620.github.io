$(function() {

  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top - 340;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  $(function() {
    $('.menu-bar').hide();
    $('.fa-times').hide();
  });

  $('.fa-bars').click(function() {
    $('.menu-bar').slideToggle();
    $('.fa-bars').toggle();
    $('.fa-times').toggle();
    return false;
  });

  $('.fa-times').click(function() {
    $('.menu-bar').slideToggle();
    $('.fa-bars').toggle();
    $('.fa-times').toggle();
    return false;
  });
});
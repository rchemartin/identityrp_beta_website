$(function(){

  var dataScroll = "";

  $('.link').on('click', function(){
    dataScroll = $(this).data('scroll');
    $('html,body').animate({
      scrollTop: $('.'+dataScroll+'').offset().top
    }, 1000)
  });
  $('.link-responsive').on('click', function(){
    dataScroll = $(this).data('scroll');
    $('.menu-responsive').slideUp("slow");
    $('.menu-responsive').removeClass('responsive-open');
    $('.nav-bar').removeClass('responsive-open');
    $('.bars').removeClass('txt-white');
    $('html,body').animate({
      scrollTop: $('.'+dataScroll+'').offset().top
    }, 1000)
  });


  var a = $("nav").offset().top;

  $(document).scroll(function(){
      if($(this).scrollTop() > (a/2))
      {
         $('nav').css({"background":"rgba(0,0,0,0.8)"});
         $('.bars').addClass('txt-white')
      } else {
         $('nav').css({"background":"rgba(0,0,0,0.2)"});
         $('.fa-bars').removeClass('txt-white')
      }
  });


});

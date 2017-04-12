$(function(){

  $(document).on("scroll", onScroll);

  $('.link').on('click', function(){
    dataScroll = $(this).data('scroll');
    $('html,body').animate({
      scrollTop: $('#'+dataScroll+'').offset().top
    }, 1000)
  });
  $('.link-responsive').on('click', function(){
    dataScroll = $(this).data('scroll');
    $('.menu-responsive').slideUp("slow");
    $('.menu-responsive').removeClass('responsive-open');
    $('.nav-bar').removeClass('responsive-open');
    $('html,body').animate({
      scrollTop: $('#'+dataScroll).offset().top
    }, 1000)
  });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu-responsive a:not(.ext)').each(function () {
        var currLink = $(this);
        var refElement = $('#'+currLink.data('scroll'));
        if (refElement.position().top <= scrollPos
         && refElement.position().top + refElement.height() > scrollPos) {
           if(currLink.data('scroll')=='beta'){
             $('nav').css({"background":"rgba(0,0,0,0.2)"});
             $('.brand > div').css({
               'background-image': 'url("img/logo.png")',
               'transition': 'background-image 0.3s ease-in'
             });
           }
        }
        else{
          if(currLink.data('scroll')=='beta'){
            $('nav').css({"background":"rgba(0,0,0,0.8)"});
            $('.brand > div').css({
              'background-image': 'url("img/logo_scroll.png")',
              'transition': 'background-image 0.3s ease-in'
            });
          }
        }
    });
}

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

  // Bouton scroll top lorsqu'on dépasse la premiere section :
$('body').append('<a class="top_link" title="Revenir en haut de page"><i class="fa fa-caret-up" aria-hidden="true"></i></a>');

$('.top_link').click(function(){
  $('html,body').animate({
    scrollTop: $('.header').offset().top
  }, 1000);
});

$('.top_link').css({
  'position'				:	'fixed',
  'right'					:	'20px',
  'bottom'				:	'20px',
  'display'				:	'none',
  'padding'				:	'10px',
  'padding-left'       : '15px',
  'padding-right'       : '15px',
  'background'			:	'#4c4c4c',
  '-moz-border-radius'	:	'40px',
  '-webkit-border-radius'	:	'40px',
  'border-radius'			:	'20px',
  'opacity'				:	'0.9',
  'z-index'				:	'2000',
  'cursor'        : 'pointer',
  'border'        : '1px solid #fff'
});

$('.fa-caret-up').css({
  'font-size' : "2em",
  'color' : '#E1672C'
})

$(window).scroll(function(){
  posScroll = $(document).scrollTop();
  if(posScroll >=($(window).height()/2))
    $('.top_link').fadeIn(600);
  else
    $('.top_link').fadeOut(600);
});

});

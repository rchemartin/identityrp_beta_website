$('.se-pre-con img').fadeIn(400);

var cnt = 0;
var pts = 0;
var i = 0;
setInterval(function(){
  cnt ==1 ? cnt=0:cnt++
  $('.se-pre-con img').fadeOut(400);
  $('.se-pre-con img:eq('+cnt+')').fadeIn(400)
},0);
$(function(){

  setTimeout(function(){
    $(".se-pre-con").fadeOut("slow"); }, 2000
  );

  $('.bars').on('click', function(){
    $('.menu-responsive').slideToggle("slow");
    $('.menu-responsive').toggleClass('responsive-open');
    $('.nav-bar').toggleClass('responsive-open');
  });
  $('.bars').css( 'cursor', 'pointer' );
  $('.vignette').css( 'cursor', 'pointer' );



  setTimeout(function(){
    $('.btn-rejoindre').slideDown("slow");
    $('.banner-content').slideDown("slow");
  },2000);




  $('.goToDevblog').on('click', function(){
    window.location.href = 'https://forum.identityrp.fr/viewforum.php?f=4&sid=f2d297b618593ac98115533cf3423d1b';
  })

  $('#background').mouseParallax({ moveFactor: 1 });
  $('#foreground').mouseParallax({ moveFactor: 1 });


});

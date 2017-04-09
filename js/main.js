$(function(){



  $('.bars').on('click', function(){
    $('.menu-responsive').slideToggle("slow");
    $('.menu-responsive').toggleClass('responsive-open');
    $('.nav-bar').toggleClass('responsive-open');
    $('.bars').toggleClass('txt-white');
  });
  $('.bars').css( 'cursor', 'pointer' );
  $('.vignette').css( 'cursor', 'pointer' );


  $('.goToDevblog').on('click', function(){
    window.location.href = 'https://forum.identityrp.fr/viewforum.php?f=4&sid=f2d297b618593ac98115533cf3423d1b';
  })


});

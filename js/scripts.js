$(document).ready(function() {
  var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  if (isiOS){
    $('div').removeClass('parallax').addClass('control');
    $('img').addClass('mini-pic');
    $('pre').removeClass('pre-parallax');
    $('#work-his').removeClass('mini-pic');
  }
  $('#prof-pic').on('mouseenter', function() {
    if ($('#prof-pic').hasClass('classy')) {
      $('#prof-pic').removeClass('classy')
      $('#prof-pic').addClass('goofy')
    } else {
      $('#prof-pic').removeClass('goofy')
      $('#prof-pic').addClass('classy')
    }
  })
  var lastScrollTop = 0;
  $(window).scroll(function(event) {
     var scroll = $(this).scrollTop();
     if (scroll > lastScrollTop){
       if ($('#navigation').hasClass('fly-up')) {
         $('#navigation').removeClass('fly-up')
         $('#navigation').addClass('fly-down')
       }
     } else {
       if ($('#navigation').hasClass('fly-down')) {
         $('#navigation').removeClass('fly-down')
         $('#navigation').addClass('fly-up')
       }
     }
     lastScrollTop = scroll;
  });
})

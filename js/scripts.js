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
})

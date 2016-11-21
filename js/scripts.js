$(document).ready(function() {
  var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  if (isiOS){
    $('div').removeClass('parallax').addClass('control');
    $('img').addClass('mini-pic');
  }
})

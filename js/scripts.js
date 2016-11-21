$(document).ready(function() {
  var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  if (isiOS){
    $('.parallax').removeClass('parallax').addClass('mini-pic');
  }
})

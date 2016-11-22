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
  $('.screen-shots').each(function() {
    var idName = $(this).attr('id').toString()
    var id = idName.charAt(idName.length - 1)
    var name = idName.slice(0, -2)
    $('#' + idName).on("click", function() {
      $('#' + name + '-display').html('<br><button id="close-' + name +'" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/' + name + id + '.png" class="display-shot" />')
      $('#close-' + name).on('click', function() {
        if (name === 'local') {
          $('#' + name + '-display').html('');
        } else {
          $('#' + name + '-display').html('<hr>');
        }
      })
    });
  })
})

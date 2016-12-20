$(document).ready(function() {
  var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
  if (isiOS){
    $('div').removeClass('parallax').addClass('control');
    $('img').addClass('mini-pic');
    $('pre').removeClass('pre-parallax');
    $('#work-his').removeClass('mini-pic');
  };
  $('.flexer').hide();
  $('.flexer2').hide();
  $('.footer').hide();
  $('.img-three').hide();
  $('#text-type').typeIt({
    strings: 'Patrick Lipscomb Web Developer',
    speed: 110,
    autoStart: true
  });
  $('#type-text2').typeIt({
    strings: 'searching for a challenging and fast-paced work environment.',
    speed: 70,
    autoStart: true
  });
  $('#fader').delay(4000).fadeIn(3000);
  $('.fading').delay(11000).fadeIn(5000);
  $('#show-button').delay(3000).fadeIn(3000).on('click', function() {
    $('.flexer').show("slow");
    $('.flexer2').show("slow");
  });
  $('#local, #weird, #image, #apoca').on('mouseenter', function() {
    idTag = $(this).attr('id');
    beginInterval(idTag);
  })
  $('#local, #weird, #image, #apoca').on('mouseleave', function() {
    intervalClear();
  })

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
  $('#nav-click').on('click', function(e) {
    $('#nav-click').hide("slow");
    $('#navigation').show("slow")
    e.stopPropagation();
    $(document).on('click', function() {
      $('#navigation').hide("slow");
      $('#nav-click').show("slow");
    });
  });
  $('#navigation').on('click', function(e) {
    e.stopPropagation();
  })

  // $(window).scroll(function(event) {
  //    var scroll = $(this).scrollTop();
  //    if (scroll > lastScrollTop){
  //      if ($('#navigation').hasClass('fly-up')) {
  //        $('#navigation').removeClass('fly-up')
  //        $('#navigation').addClass('fly-down')
  //      }
  //    } else {
  //      if ($('#navigation').hasClass('fly-down')) {
  //        $('#navigation').removeClass('fly-down')
  //        $('#navigation').addClass('fly-up')
  //      }
  //    }
  //    lastScrollTop = scroll;
  // });
  $('.screen-shots').each(function() {
    var idName = $(this).attr('id').toString()
    var id = idName.charAt(idName.length - 1)
    var name = idName.slice(0, -2)
    $('#' + idName).on("click", function() {
      $('#' + name + '-display').html('<br><button id="close-' + name +'" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/' + name + id + '.png" class="display-shot" /><br>')
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
var imgSwap;
function beginInterval(projectName) {
 imgSwap = window.setInterval( function() {swapImg(projectName)}, 2000);
}
function intervalClear() {
  window.clearInterval(imgSwap);
}

function swapImg(projectName) {
  var imgStr = $('#' + projectName).attr('src')
  var imgNum = imgStr.charAt(9);
  var newNum = parseInt(imgNum) + 1
  if (projectName === 'local' && newNum > 9) {
    newNum = 1
  } else if (projectName === 'image' && newNum > 6 ) {
    newNum = 1
  } else if (projectName === 'weird' && newNum > 6 ) {
    newNum = 1
  } else if (projectName === 'apoca' && newNum > 7 ) {
    newNum = 1
  }
  var path = "img/" + projectName + newNum.toString() + ".png"
  $('#' + projectName).attr('src', path);
}

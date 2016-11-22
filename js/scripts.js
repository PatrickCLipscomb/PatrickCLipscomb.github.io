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
  $('#local-1').on("click", function() {
    $('#local-display').html('<br><button id="close-local" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/local1.png" class="display-shot" />')
    $('#close-local').on('click', function() {
      $('#local-display').html('');
    })
  });
  $('#local-2').on("click", function() {
    $('#local-display').html('<br><button id="close-local" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/local2.png" class="display-shot" />')
    $('#close-local').on('click', function() {
      $('#local-display').html('');
    })
  });
  $('#local-3').on("click", function() {
    $('#local-display').html('<br><button id="close-local" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/local3.png" class="display-shot" />')
    $('#close-local').on('click', function() {
      $('#local-display').html('');
    })
  });
  $('#local-4').on("click", function() {
    $('#local-display').html('<br><button id="close-local" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/local4.png" class="display-shot" />')
    $('#close-local').on('click', function() {
      $('#local-display').html('');
    })
  });
  $('#local-5').on("click", function() {
    $('#local-display').html('<br><button id="close-local" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/local5.png" class="display-shot" />')
    $('#close-local').on('click', function() {
      $('#local-display').html('');
    })
  });
  $('#local-6').on("click", function() {
    $('#local-display').html('<br><button id="close-local" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/local6.png" class="display-shot" />')
    $('#close-local').on('click', function() {
      $('#local-display').html('');
    })
  });
  $('#local-7').on("click", function() {
    $('#local-display').html('<br><button id="close-local" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/local7.png" class="display-shot" />')
    $('#close-local').on('click', function() {
      $('#local-display').html('');
    })
  });
  $('#local-8').on("click", function() {
    $('#local-display').html('<br><button id="close-local" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/local8.png" class="display-shot" />')
    $('#close-local').on('click', function() {
      $('#local-display').html('');
    })
  });
  $('#image-1').on("click", function() {
    $('#image-display').html('<br><button id="close-image" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/image1.png" class="display-shot" />')
    $('#close-image').on('click', function() {
      $('#image-display').html('');
    })
  });
  $('#image-2').on("click", function() {
    $('#image-display').html('<br><button id="close-image" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/image2.png" class="display-shot" />')
    $('#close-image').on('click', function() {
      $('#image-display').html('');
    })
  });
  $('#image-3').on("click", function() {
    $('#image-display').html('<br><button id="close-image" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/image3.png" class="display-shot" />')
    $('#close-image').on('click', function() {
      $('#image-display').html('');
    })
  });
  $('#image-4').on("click", function() {
    $('#image-display').html('<br><button id="close-image" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/image4.png" class="display-shot" />')
    $('#close-image').on('click', function() {
      $('#image-display').html('');
    })
  });
  $('#image-5').on("click", function() {
    $('#image-display').html('<br><button id="close-image" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/image5.png" class="display-shot" />')
    $('#close-image').on('click', function() {
      $('#image-display').html('');
    })
  });
  $('#image-6').on("click", function() {
    $('#image-display').html('<br><button id="close-image" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/image6.png" class="display-shot" />')
    $('#close-image').on('click', function() {
      $('#image-display').html('');
    })
  });
  $('#image-7').on("click", function() {
    $('#image-display').html('<br><button id="close-image" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/image7.png" class="display-shot" />')
    $('#close-image').on('click', function() {
      $('#image-display').html('');
    })
  });
  $('#weird-1').on("click", function() {
    $('#weird-display').html('<br><button id="close-weird" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/weird1.png" class="display-shot" />')
    $('#close-weird').on('click', function() {
      $('#weird-display').html('');
    })
  });
  $('#weird-2').on("click", function() {
    $('#weird-display').html('<br><button id="close-weird" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/weird2.png" class="display-shot" />')
    $('#close-weird').on('click', function() {
      $('#weird-display').html('');
    })
  });
  $('#weird-3').on("click", function() {
    $('#weird-display').html('<br><button id="close-weird" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/weird3.png" class="display-shot" />')
    $('#close-weird').on('click', function() {
      $('#weird-display').html('');
    })
  });
  $('#weird-4').on("click", function() {
    $('#weird-display').html('<br><button id="close-weird" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/weird4.png" class="display-shot" />')
    $('#close-weird').on('click', function() {
      $('#weird-display').html('');
    })
  });
  $('#apocal-1').on("click", function() {
    $('#apocal-display').html('<br><button id="close-apocal" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/apocal1.png" class="display-shot" />')
    $('#close-apocal').on('click', function() {
      $('#apocal-display').html('');
    })
  });
  $('#apocal-2').on("click", function() {
    $('#apocal-display').html('<br><button id="close-apocal" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/apocal2.png" class="display-shot" />')
    $('#close-apocal').on('click', function() {
      $('#apocal-display').html('');
    })
  });
  $('#apocal-3').on("click", function() {
    $('#apocal-display').html('<br><button id="close-apocal" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/apocal3.png" class="display-shot" />')
    $('#close-apocal').on('click', function() {
      $('#apocal-display').html('');
    })
  });
  $('#apocal-4').on("click", function() {
    $('#apocal-display').html('<br><button id="close-apocal" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/apocal4.png" class="display-shot" />')
    $('#close-apocal').on('click', function() {
      $('#apocal-display').html('');
    })
  });
  $('#apocal-5').on("click", function() {
    $('#apocal-display').html('<br><button id="close-apocal" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/apocal5.png" class="display-shot" />')
    $('#close-apocal').on('click', function() {
      $('#apocal-display').html('');
    })
  });
  $('#apocal-6').on("click", function() {
    $('#apocal-display').html('<br><button id="close-apocal" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/apocal6.png" class="display-shot" />')
    $('#close-apocal').on('click', function() {
      $('#apocal-display').html('');
    })
  });
  $('#apocal-7').on("click", function() {
    $('#apocal-display').html('<br><button id="close-apocal" class="pull-right btn btn-danger glyphicon glyphicon-remove"></button><img src="img/apocal7.png" class="display-shot" />')
    $('#close-apocal').on('click', function() {
      $('#apocal-display').html('');
    })
  });

})

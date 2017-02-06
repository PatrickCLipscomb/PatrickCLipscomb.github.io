$(document).ready(function() {
  $('.flexer, .flexer2, .flexer2, .footer, .img-three').hide();
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
  $('.fading').delay(7000).fadeIn(3000);
  $('#show-button').delay(3000).fadeIn(3000).on('click', function() {
    $('.headIcon').fadeOut(2000);
    $.when($('.flexer, .flexer2, .footer-icons').show("slow")).done(function() {
      $('html,body').animate({
        scrollTop: $(".flexer").offset().top
      }, 'slow');
    });
  });
  $('#localD, #weirdD, #imageD, #apocaD').on('mouseenter', function() {
    var idTag = $(this).attr('id');
    idTag = idTag.slice(0, -1);
    $('#label-for-' + idTag).show();
    beginInterval(idTag);
  })
  $('#localD, #weirdD, #imageD, #apocaD').on('mouseleave', function() {
    var idTag = $(this).attr('id');
    idTag = idTag.slice(0, -1);
    $('#label-for-' + idTag).hide();
    intervalClear();
  })
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
  });
});
var imgSwap;
function beginInterval(projectName) {
 imgSwap = window.setInterval( function() {swapImg(projectName)}, 2000);
}
function intervalClear() {
  window.clearInterval(imgSwap);
};

function swapImg(projectName) {
  var imgStr = $('#' + projectName).attr('src');
  var imgNum = imgStr.charAt(9);
  var newNum = parseInt(imgNum) + 1
  if (projectName === 'local' && newNum > 9) {
    newNum = 1
  } else if (projectName === 'image' && newNum > 7 ) {
    newNum = 1
  } else if (projectName === 'weird' && newNum > 6 ) {
    newNum = 1
  } else if (projectName === 'apoca' && newNum > 6 ) {
    newNum = 1
  }
  var path = "img/" + projectName + newNum.toString() + ".png"
  $('#' + projectName).attr('src', path);
};

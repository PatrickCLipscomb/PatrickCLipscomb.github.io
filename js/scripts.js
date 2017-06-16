$(document).ready(function() {
  $('.flexer, .flexer2, .flexer2, .footer, .img-three').hide();
  $('#text-type').typeIt({
    strings: 'Patrick Lipscomb Web Developer',
    speed: 110,
    autoStart: true
  });
  $('#type-text2').typeIt({
    strings: 'with a good eye for design and the ability to communicate and work through probelms quickly.',
    speed: 50,
    autoStart: true
  });
  $('#multi-label').typeIt({
    strings: '',
    speed: 1,
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
    $('#web-build-title').show("slow");
    $('#personal-projects-title').show("slow");
    console.log('showing')
  });
  $('#localD, #weirdD, #imageD, #apocaD').on('mouseenter', function() {
    var idTag = $(this).attr('id');
    idTag = idTag.slice(0, -1);
    $('#label-for-' + idTag).show();
    findProjectName(idTag);
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

function findProjectName(name) {
  switch (name) {
    case 'local':
      typeProjectName('Local Swap Solo Project');
      $('#multi-label').css('width', '37%');
      break;
    case 'image':
      typeProjectName('Image Manager Solo Project');
      $('#multi-label').css('width', '45%');
      break;
    case 'weird':
      typeProjectName('Weird Map Solo Project');
      $('#multi-label').css('width', '37%');
      break;
    case 'apoca':
      typeProjectName('Apocalypse App Solo Project');
      $('#multi-label').css('width', '45%');
      break;
  }
}
function typeProjectName(name) {
  $('#multi-label').css('visibility', 'visible').typeIt({
    strings: name,
    speed: 30,
    autoStart: true
  });
}

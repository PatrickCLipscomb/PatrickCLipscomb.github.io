$(document).ready(function() {
  $(".project-images").each(function(index) {
    $(this).click(function() {
      $('#photo-display').remove();
      $(this).parent().prepend("<div id='photo-display'></div>");
      $('#photo-display').css({
        position:'absolute',
        top: $(window).scrollTop(),
        left: '50%',
        transform: 'translateX(-50%)',
        border: '2px solid grey',
        'width': '70%',
      });
      $("body").css("overflow", "hidden");
      var $img = $(this).clone().removeClass("project-images").addClass("current-image");
      $('#photo-display').html($img);

      $('#photo-display').click(function(event) {
        $("body").css("overflow", "");
        $("img").removeClass("current-image");
        $('#photo-display').html("").removeAttr('style');;

      })
    })
  })
});

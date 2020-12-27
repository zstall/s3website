// ****************************************************************************
// Slide in elements
// ****************************************************************************
$(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 1200) {
          $(this).addClass("slide");
        }
    });
  });

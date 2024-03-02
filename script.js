$(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
  });
  
  $(".step01").click(function () {
    $("#line-progress").css("width", "0%");
    $(".dig").addClass("active").siblings().removeClass("active");
  });
  
  $(".step02").click(function () {
    $("#line-progress").css("width", "25%");
    $(".grab").addClass("active").siblings().removeClass("active");
  });
  
  $(".step03").click(function () {
    $("#line-progress").css("width", "50%");
    $(".convey").addClass("active").siblings().removeClass("active");
  });
  
  $(".step04").click(function () {
    $("#line-progress").css("width", "75%");
    $(".cover").addClass("active").siblings().removeClass("active");
  });
  
  $(".step05").click(function () {
    $("#line-progress").css("width", "100%");
    $(".frame").addClass("active").siblings().removeClass("active");
  });
  // ======================================================================================
  $(document).ready(function() {
    $('#carouselId').carousel({
      interval: 2000 // Set the interval between slides (in milliseconds)
    });
  
    // Add click event to the carousel indicators
    $('.carousel-indicators li').click(function() {
      var index = $(this).data('slide-to');
      $('#carouselId').carousel(index);
    });
  
    // Add click event to the carousel controls
    $('.carousel-control-prev').click(function() {
      $('#carouselId').carousel('prev');
    });
  
    $('.carousel-control-next').click(function() {
      $('#carouselId').carousel('next');
    });
  });
  // ====================================================================
  $(document).ready(function () {
    // Grab the initial top offset of the navigation
    var stickyNavTop = $(".header").offset().top;
  
    // Our function that decides whether the navigation bar should have "fixed" css position or not.
    $(window).scroll(function () {
      if ($(window).scrollTop() >= stickyNavTop) {
        // If page is scrolled more than navbar offset, change its position to fixed to stick to top, restoring its original top offset
        $(".header").addClass("affix");
      } else {
        // Else, change the position back to "static"
        $(".header").removeClass("affix");
      }
    });
  });
  //===========================================================================================
  
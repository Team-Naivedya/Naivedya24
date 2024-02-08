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
          
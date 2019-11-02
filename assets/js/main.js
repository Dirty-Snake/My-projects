$(function() {
  var header = $('#header'),
      introH = $('#intro').innerHeight(),
      scrollOffset = $(window).scrollTop();
  // fixed header
  checkScroll(scrollOffset)

  $(window).on("scroll", function(){
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  })
  function checkScroll(scrollOffset) {
    if (scrollOffset>=introH){
      header.addClass("fixed");
    } else{
      header.removeClass("fixed");
    }
    // body...
  }
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();

  var $this = $(this),
      blockId = $(this).data('scroll'),
      blockOffset = $(blockId).offset().top;

  $("#nav a").removeClass("active");
  $this.addClass("active");
  $("html, body").animate({
    scrollTop: blockOffset
  }, 500)

  })
  // menu nav toggle
  $("#nav-toggle").on("click", function(event) {
  event.preventDefault();
  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
  })
// slider
  $("[data-slider]").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
  })
})
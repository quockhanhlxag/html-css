function addStickyBar() {
  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY;
    var navbar = $("#nav-bar")

    if (scrollY >= 100) {
      navbar.addClass("sticky-navbar");
    } else if (scrollY < 100) {
      navbar.removeClass("sticky-navbar");
    }
  });
}

function addRotateHambar() {
  document.getElementById("hambar").addEventListener("click", function () {
    var hambar = $("#hambar")
    hambar.toggleClass("active")
  })
}

function displaySidebar() {
  document.getElementById("hambar").addEventListener("click", function () {
    var sidebar = $("#sidebar")
    sidebar.toggleClass("menu-on")
  })
}

function playVideo() {

  // Gets the video src from the data-src on each button
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
  });
  
  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {


    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })


  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
  })
}

function numberCounter() {
  $('.counter').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {

      //change count up speed here
      duration: 4000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
}

function initSlider() {
  var slider = $('#slideshow')
  slider.slick({
    dots: false,
    speed: 1000,
    prevArrow: $('#testimonial-prev'),
    nextArrow: $('#testimonial-next')
  })
}

function showScrollUp() {
  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY;
    var scrollUp = $(".scrollUp")

    if (scrollY >= 400) {
      scrollUp.addClass("active");
    } else if (scrollY < 400) {
      scrollUp.removeClass("active");
    }
  });
}

function scrollAnimation() {
  $('.scrollUp').click(function () {
    var body = $("html, body");

    body.animate({
      scrollTop: 0
    }, 500, "linear")
  })

}

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  addStickyBar()
  addRotateHambar()
  displaySidebar()
  playVideo()
  numberCounter()
  initSlider()
  showScrollUp()
  scrollAnimation()
})
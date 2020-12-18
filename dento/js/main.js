function addStickyBar(){
  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY;
    // console.log(scrollY)
    var navbar = $("#nav-bar")
    
    // console.log('navbar', navbar)
    if (scrollY >= 100) {
      navbar.addClass("sticky-navbar");
    } else if (scrollY < 100) {
      navbar.removeClass("sticky-navbar");
    }
  });
}

function addRotateHambar() {
  document.getElementById("hambar").addEventListener("click", function(){
    var hambar = $("#hambar")
    hambar.toggleClass("active")
  })
}

function displaySidebar() {
  document.getElementById("hambar").addEventListener("click", function(){
    var sidebar = $("#sidebar")
    sidebar.toggleClass("menu-on")
  })
}

$('.counter').each(function () {
  $(this).prop('Counter',0).animate({
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

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  addStickyBar()
  addRotateHambar()
  displaySidebar()
})
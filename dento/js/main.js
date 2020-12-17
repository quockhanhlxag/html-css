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


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  addStickyBar()
  addRotateHambar()
  displaySidebar()
})
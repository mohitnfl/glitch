jQuery(function ($) {

  $(".sidebar-dropdown > a").click(function () {
    $(".sidebar-submenu").slideUp(200);
    if (
      $(this)
      .parent()
      .hasClass("active")
    ) {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .parent()
        .removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this)
        .next(".sidebar-submenu")
        .slideDown(200);
      $(this)
        .parent()
        .addClass("active");
    }
  });

  $("#toggle-square").click(function () {
    $(".page-wrapper").removeClass("toggled");
    $(".nav_expand").removeClass("nav-toggled");
  });

  $("#show-angle-sidebar1").click(function () {
    $(".page-wrapper").addClass("toggled");
    $(".nav_expand").addClass("nav-toggled");
  });


  $("#logoToggle1").click(function () {
    $(".right_bar").toggleClass("rightToggled");
  });
  $("#show-angle-sidebar").click(function () {
    $(".page-wrapper").addClass("toggled");
    $(".nav_expand").addClass("nav-toggled");
  });


  $("#logoToggle").click(function () {
    $(".right_bar").toggleClass("rightToggled");
  });
  $("#logoToggle2").click(function () {
    $(".right_bar").toggleClass("rightToggled");
  });



});
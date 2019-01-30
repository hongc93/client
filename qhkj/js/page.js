$(window).scroll(function () {
  var st = $(this).scrollTop();
  if (st > 100) {
    $(".logo img").attr("src", "../images/logo-1.png");
  } else {

    $(".logo img").attr("src", "../images/logo.png");
  }
});
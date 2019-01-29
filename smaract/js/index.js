
$('.header_menu .search_part .icon').on('click', function(e) {
	e.preventDefault();
	var SearchWrap = $('.search_wrap');
	if(SearchWrap.is(':visible')) {
		SearchWrap.fadeOut(300);
		setTimeout(function() {
			$('.search_wrap input').val('');
		}, 300);
	} else {
		SearchWrap.fadeIn(300);
		setTimeout(function() {
			$('.search_wrap input').focus();
			$("#container").bind("click", function(e) {
				if(!$(e.target).closest('.search_wrap').length) {
					SearchWrap.fadeOut(300);
					setTimeout(function() {
						$('.search_wrap input').val('');
					}, 300);
					$("#container").unbind("click");
				}
			});
		}, 300);
	}
});


 /** nav */
$(".header_nav .mobileMenuBtn").click(function () {
    $(".header_nav .mobileMenuBtn").toggleClass("active");
    $(".header_nav .header_menu").toggleClass("active");
    $(".header_nav .mobileMenuBtn_shad").toggleClass("active");
});
$(".header_nav .mobileMenuBtn_shad").click(function () {
    $(".header_nav .mobileMenuBtn").toggleClass("active");
    $(".header_nav .header_menu").toggleClass("active");
    $(".header_nav .mobileMenuBtn_shad").toggleClass("active");
});
    /**end nav */

  /** menu */
$(".subMenu li").hover(function () {
    $(this).find("ul.subMenu").css({left: $(this).width()});
});
$(".subMenu").parent('li').append("<i class='icon'></i>");

$('.menu>li').click(function () {
    if ($(window).width() < 767 && $(this).has('ul')) {
        $(this).children(".subMenu").show().css({'position':'static','background':'#373737'});
        $('.secondMenu>li').click(function () {
            $(this).children(".subMenu").show().css({'position':'static','background':'#373737'});
        });
    }
});
/**end menu */

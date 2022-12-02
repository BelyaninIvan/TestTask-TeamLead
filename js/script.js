$(document).ready(function(){
    $("#carousel-feedback").owlCarousel({
        items: 1,
        nav: true,
        navText: [],
        dots: false
    });
});

$(window).on('load', function () {
    $("a[rel='m_PageScroll2id']").mPageScroll2id();
});

$(function () {
	var lastSaleDay = new Date();
	lastSaleDay = new Date(2022, 12-1, 6);
	$('#defaultCountdown').countdown({until: lastSaleDay});
});
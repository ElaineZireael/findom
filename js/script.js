$(document).ready(function() {

	$(".search-block").click(function(e) {
		e.preventDefault();
		if ($(".search-collapse").css("display") == "none")
			$(".search-collapse").slideDown(350);
		else
			$(".search-collapse").slideUp(350);
	});

	$(window).resize(function() {
		if ($(this).width() > 991)
			$(".search-collapse").css("display", "none");

			var news_detail_pic_width = $(".news-detail .detail-picture").width();
			$(".news-detail .detail-picture").css("height", news_detail_pic_width / 1.6285);

	});


	$('.slider-main').slick({
		dots: true,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 1
	});


});

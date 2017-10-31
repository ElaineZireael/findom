$(document).ready(function() {

	var news_detail_pic_width = $(".news-detail .detail-picture").width();
	$(".news-detail .detail-picture").css("height", news_detail_pic_width / 1.6285);

	$(".search-block").click(function(e) {
		e.preventDefault();
		if ($(".search-collapse").css("display") == "none")
			$(".search-collapse").slideDown(350);
		else
			$(".search-collapse").slideUp(350);
	});

	$(".slide-contact").click(function(){
		var neighbour_children = $(this).next().find(".contact");
		if (neighbour_children.css("display") == "block") {
			neighbour_children.slideUp();
		} else
			neighbour_children.slideDown();
	});

	$(window).resize(function() {
		if ($(this).width() > 991)
			$(".search-collapse").css("display", "none");

		var news_detail_pic_width = $(".news-detail .detail-picture").width();
		$(".news-detail .detail-picture").css("height", news_detail_pic_width / 1.6285);

		if ($(this).width() > 767)
			$(".contact").css("display", "block");
		else
			$(".contact").css("display", "none");

	});


	$('.slider-main').slick({
		dots: true,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 1
	});


});

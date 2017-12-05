$(document).ready(function() {

	$.fn.equivalent = function () {
		var $blocks = $(this);
		maxH = $blocks.eq(0).height();
		
		$blocks.each(function(){
			maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
		});
		
		$blocks.height(maxH);
	}


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

	$(".prod-link, .ref-link, .exserv-link").click(function() {

		var clName;
		if ($(this).hasClass("prod-link"))
			clName = "prod";
		if ($(this).hasClass("ref-link"))
			clName = "ref";
		if ($(this).hasClass("exserv-link"))
			clName = "exserv";

/*		if ($("."+clName+"-descr."+$(this).data("target")).length != 0)
			$("div.content").height("");
		else 
			fix_footer();
		*/
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$("."+clName+"-descr."+$(this).data("target")).slideUp(1000, function() {fix_footer();});
		} else {
			$("."+clName+"-descr").css("display","none");
			$("."+clName+"-descr."+$(this).data("target")).slideDown(1000, function() {fix_footer();});
			$("."+clName+"-link").removeClass("active");
			$(this).addClass("active");

			if ($(window).width() < 768) {
				$('html, body').animate({
				    scrollTop: $("."+clName+"-descr."+$(this).data("target")).offset().top
				}, 1000);
			}
		}

	});

	$(".catalog-table-row-name").click(function() {
		if ($(window).width() < 768) {
			$("div.content").height("");
			if ($(this).parent().hasClass("active")) {
				$(this).parent().removeClass("active");
				$(this).parent().children().not(this).slideUp(1000, function() {fix_footer();});
			} else {
				$(this).parent().addClass("active");
				$(this).parent().children().not(this).slideDown(1000, function() {fix_footer();});
			}
		}
	});

	$(window).resize(function() {

		if ($(this).width() > 991)
			$(".search-collapse").css("display", "none");

		var news_detail_pic_width = $(".news-detail .detail-picture").width();
		$(".news-detail .detail-picture").css("height", news_detail_pic_width / 1.6285);

		if ($(this).width() > 767) {
			$(".contact").css("display", "block");
			$(".catalog-table-types .catalog-table-row > div").not(".catalog-table-row-name").css("display", "block");
		}
		else {
			$(".contact").css("display", "none");
			$(".catalog-table-types .catalog-table-row").not(".active").children().not(".catalog-table-row-name").css("display", "none");
		}

	});


	$('.slider-main').slick({
		dots: true,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 1
	});


	function fix_footer() {
		var footerH = document.getElementsByTagName("footer")[0].clientHeight;

		$("div.content").height("initial");

        if ($("header").height() + $("div.content").height() + footerH < $(window).height())
            $("div.content").height($(window).height() - ($("header").height() + footerH) );
    }

    fix_footer();

    $(window).resize(function() {
        fix_footer();
    });



});

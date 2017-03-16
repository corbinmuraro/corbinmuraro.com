var BASELINE = 8;

// Fits images into vertical rhythm of baseline grid
$(window).on("load", function() {
	$('img').each(function() {
		var image = $(this);
		var height = image.height();
		
		var overflow = height % BASELINE;
		var correction = Math.abs(overflow - BASELINE);

		if (correction !== BASELINE) {
			image.css({"margin-bottom" : correction });
		}

		// custom adjustments to fit image into the 8px grid
		image.parent().css({"margin-top" : "-2px"});
		image.parent().css({"margin-bottom" : "-2px"});
	});
});

$('.magnify').click(function() {
	$(this).toggleClass('magnified');
});

$("video").hover(function() {
    return $(this).css("opacity", "1"), this.play();
}, function() {
    return $(this).css("opacity", ".3"), this.pause();
});



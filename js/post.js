$(function() {

	$('.magnify').click(function() {
		$(this).toggleClass('magnified');
	});

    $("video").hover(function() {
        return $(this).css("opacity", "1"), this.play();
    }, function() {
        return $(this).css("opacity", ".3"), this.pause();
    });
});
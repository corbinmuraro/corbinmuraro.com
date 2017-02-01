$(function() {

	$('.magnify').click(function() {
		$(this).toggleClass('magnified');
	});

    // $('video').hover(function() {
    // 	$(this)[0].play();
    // 	$(this).css('opacity', '1');
    // }, function() {
    // 	$(this)[0].pause();
    // 	$(this)[0].currentTime = 0;
    // 	$(this).css('opacity', '0.3');
    // });
    //  $(window).scroll(function() {
    //     $('video').each(function(){
    //         if ($(this).is(":in-viewport")) {
    //             $(this)[0].play();
    //         } else {
    //             $(this)[0].pause();
    //         }
    //     });
    // });


});
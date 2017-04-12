var slideWidth = 300;
var sliderTimer;
var items = $('.slidewrapper').children().length;
var sliderCount = Math.ceil((items - 9) / 2);
$(function () {
	$('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);
	//                sliderTimer = setInterval(nextSlide, 9000);
	//                $('.viewport').hover(function() {
	//                    clearInterval(sliderTimer);
	//                }, function() {
	//                    sliderTimer = setInterval(nextSlide, 1000);
	//                });
	$('#next_slide').click(function () {
		clearInterval(sliderTimer);
		nextSlide();
		//                    sliderTimer = setInterval(nextSlide, 1000);
	});
	$('#prev_slide').click(function () {
		clearInterval(sliderTimer);
		prevSlide();
		//                    sliderTimer = setInterval(nextSlide, 1000);
	});
});

function nextSlide() {
	var currentSlide = parseInt($('.slidewrapper').data('current'));
	currentSlide++;
	if (currentSlide > sliderCount) {
		currentSlide = 0;
	}
	$('.slidewrapper').animate({
		left: -currentSlide * slideWidth
	}, 300).data('current', currentSlide);
}

function prevSlide() {
	var currentSlide = parseInt($('.slidewrapper').data('current'));
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = sliderCount;
	}
	$('.slidewrapper').animate({
		left: -currentSlide * slideWidth
	}, 300).data('current', currentSlide);
}
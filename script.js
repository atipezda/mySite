function bubblesAni() {
	$(".bubble:first-child").animate({
		top: '-10px',
		left: '210px'
	}, 1000, function () {});
	$(".bubble:nth-child(2)").animate({
		top: '-200px',
		left: '-200px'
	}, 1000, function () {});
	$(".bubble:nth-child(3)").animate({
		top: '-200px',
		left: '50px'
	}, 1000, function () {});
	$(".bubble:nth-child(4)").animate({
		top: '30px',
		left: '-50px'
	}, 1000, function () {});
	$(".bubble:nth-child(5)").animate({
		top: '-200px',
		left: '240px'
	}, 1000, function () {
		$('#bubbles p').fadeIn();
	});
}

$(document).scroll(() => {
	if($(window).scrollTop() > 20){
		waves(false);
		$('#bubLinks').fadeOut('slow');
	}else{
		waves(true);
		$('#bubLinks').fadeIn('slow');
	}
	var $doc = $(document);
	var $bubbles = $('#bubbles');
	var pageBott = $doc.scrollTop() + $(window).innerHeight();
	if (pageBott > $bubbles.offset().top) {
		bubblesAni();
	}

	$('.fade').each((el,elem)=>{
		if($(elem).offset().top < $(window).scrollTop() + $(window).innerHeight()-100){
			// $(elem).css('background-color','red');
			$(elem).transition({ x: 0 ,opacity: 1 });
		}
	})

});

if (window.innerWidth < 900) {
	window.location = '/mobile'
} else {
	$('.fade').each((el,elem)=>{
		$(elem).transition({ x: 200, opacity: 0.5 });
		if($(elem).offset().top < $(window).scrollTop() + $(window).innerHeight()-100){
			// $(elem).css('background-color','red');
			$(elem).transition({ x: 0 ,opacity: 1 });
		}
	})
	$('#load').fadeOut();
}
$(window).resize(()=>{
	if (window.innerWidth < 900) {
		window.location = '/mobile'
	} else {
		$('#load').fadeOut();
	}
});


function waves(isTop){
	var $wwav = $('#wWav');
	var $bwav = $('#blWav');
	if(isTop){
		$('#waves').fadeIn('slow');

		$bwav
			.fadeIn()
			.animate({right: '-50px'},1500)
			.animate({right: '-80px'},1500)
			.animate({right: '-50px'},1500)
			
		$wwav
			.fadeIn()
			.animate({right: '-50px'},1500)
			.animate({right: '-80px'},1500)
	}else{
		$('#waves').fadeOut('slow');
	}



}
// $(".up").animate({
// 	translateX: '20px'
// })
// .animate({
// 	translateX: '0'
// })
// $(".down").hide().fadeIn(1500);

waves(true);

$([document.documentElement, document.body]).animate({
	scrollTop: 0
}, 2000 ,()=>{
	
});
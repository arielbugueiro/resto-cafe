$(document).ready(function(){
	$(window).scroll(function(){
		var ventanaAncho = $(window).width();
		if (ventanaAncho > 800){
			var scroll = $(window).scrollTop();

			$('header .textos').css({
				'transform': 'translate(0px,' + scroll / 2 + '%)'
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -' + scroll / 4 + '%)'
			});
		}
	});

	$(window).resize(function(){
		var ventanaAncho = $(window).width();
		if (ventanaAncho < 800){
			$('.acerca-de article').css({
					'transform': 'translate(0px, 0px)'
			});
		}
	});
});
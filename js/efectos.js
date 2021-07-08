$(document).ready(function(){

    // Efecto/Animacion a los enlaces del Menu

    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top':'-200px'
        })
        
        $(this).animate({
            top: '0'
        }, 2000 + (index * 500)); //animacion, el primer arreglo va a ir 2s, el segundo 2500s (2000 + (1*500)), y asi sucesivamente 
    });

    // Efecto Header
	if ($(window).width() > 800){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		});
        
        $('header .textos').animate({
			opacity: 1,
			marginTop: '-52px'
		}, 1500);
    }    

    //Scroll Elementos Menu
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#platos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 380
		}, 500);
	});

    $('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu - 40
		}, 500);
	});

    $('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria - 40
		}, 500);
	});

    $('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion - 10
		}, 500);
	});
});
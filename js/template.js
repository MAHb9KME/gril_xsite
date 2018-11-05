// Получаем рандомное число

function getRandom(min, max) {
	var rand = Math.floor(Math.random() * (max - min + 1)) + min;
	return Math.floor(rand/min)*min;  
}
	
	
// Функция склонения слов после чисел
	
function declOfNum(number, titles) {  
	cases = [2, 0, 1, 1, 1, 2];  
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}  


jQuery(function($){
	
	// fancybox

	jQuery(".fancybox").fancybox(
	{
		'padding'			: 20,
		'width'				: 250,
		'height'			: "auto",
		'autoDimensions'	: false,
		'centerOnScroll'	: 'yes',
		'titleShow'			: false,
	}); 

    jQuery('.gallery-icon a').fancybox(
	{
		'overlayShow': true, 
		'hideOnContentClick': true, 
		'overlayOpacity': 0.85
	});


	// Маска для телефона
	
	if($('input.phone').length)
		$('input.phone').inputmask("+7 (999) 999-99-99");
	

	// Скролл к элементам с хэшем

	$('.hash').click(function(event){
		var mailTop = $($(this).attr('href')).offset();
		var height = parseInt(Math.round(mailTop.top));
		$('html, body').stop().animate({
			scrollTop: height
		}, 500, "linear");
		return false;
	});
	
	
	// Выдвигаем адаптивное меню
	
	$('header .buttonMenu').click(function(){
		var nav = $(this).parent('.menu');
		
		if(nav.hasClass('active'))
			nav.removeClass('active');
		else
			nav.addClass('active');
	});
	
	
	// Раскрываем меню 

	$('.xs_changer').click(function()
	{
		var block = $('#'+$(this).data('block'))
		
		if(block.is(':visible'))
		{
			block.removeClass('show').slideUp(300)
			$(this).removeClass('show')
		}
		else
		{
			block.addClass('show').slideDown(300)
			$(this).addClass('show')
		}
	})
	
	
	// Скрытие селектора при клике вне его
	
	$(document).mouseup(function (e)
	{
		var div = $(".hide_click_away")
		
		if (!div.is(e.target) && div.has(e.target).length === 0) 
			div.hide();
	});


	// слайдер на главной

	$('.wr_main_screen .wr_slider_1').slick({
		  infinite: true,
		  speed: 400,
		  slidesToShow: 1,
		  slidesToScroll: 1
	});

	$('.wr_main_screen .wr_slider_2').slick({
		  infinite: true,
		  dots: true,
		  speed: 400,
		  slidesToShow: 1,
		  slidesToScroll: 1
	});


	$('.wr_main_screen .wr_slider_1').on('afterChange', function(event, slick, currentSlide, nextSlide)
	{
		$('.wrap_btn_reas').attr('class', $('.wrap_btn_reas').attr('class').replace(/\d/, currentSlide))
	}) 


	// Слайдер новостей

	$('.wr_news .news').slick({
		  infinite: false,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});

	// menu fixed
	/*
		function scroll_menu(){
	        var xs_scroll_top = jQuery(window).scrollTop(),
	            xs_slider_height = 64
	        if (xs_scroll_top >= xs_slider_height)
	        {
	            jQuery('.wr_header').addClass('fix')
	        }
	        else
	        {
	            jQuery('.wr_header').removeClass('fix')
	        }
	    }

		jQuery(function($){

		// scroll menu
		    scroll_menu()
		    $(window).scroll(function(){
		        scroll_menu()        
		    })
		    $(window).resize(function(){
		        scroll_menu()        
		    })

		});
	*/

		// radio

	$('.wr_prodaction .title .radio_side ul li').click(function(){
		$('.wr_prodaction .title .radio_side ul li').removeClass('active');

		$(this).addClass('active');
	});


})
	

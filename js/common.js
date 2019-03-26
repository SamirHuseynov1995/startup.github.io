$(document).ready(function () {
	new WOW().init();
	
	$('.counta').each(function(){
		$(this).prop('Counter',0).animate({
			Counter: $(this).data('value')
		},{
			duration: 8000,
			easing: 'swing',
			step: function(now){
				$(this).text(this.Counter.toFixed(3));
			}
		});
	});
	$('.count').each(function(){
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		},{
			duration: 8000,
			easing: 'swing',
			step: function(now){
				$(this).text(Math.ceil(now));
			}
		});
	});

	$('.owl-carousel').owlCarousel({
		rtl: false,
		loop:true,
	    nav:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            rtl: false
	        },
	        600:{
	            items:1,
	            rtl: false
	        },
	        1000:{
	            items:1,
	            loop: false,
	            rtl: false
	        }
	    }
	});

	$('.btico').click(function(){
		var value = $(this).attr('data-filter');
		if(value=='all')
		{
			$('.filter').show('1000');
		}
		else{
			$('.filter').not('.'+value).hide('1000');
			$('.filter').filter('.'+value).show('1000');
		}

		$('ul .btico').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		})
	});


	
});






$(document).ready(function(){
	var headermenu = $('.header-menu');

	// header scroll (start)
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 1){
			headermenu.removeClass('header-menu-scroll');
			headermenu.addClass('header-menu')
		} else {
			headermenu.addClass('header-menu-scroll');
			headermenu.removeClass('header-menu')
		}
	});

	// header scroll (end)

	// Back to Top button (start)

	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {       
	        $('#back-to-top').fadeIn(200);   
	    } else {
	        $('#back-to-top').fadeOut(200);  
	    }
	});
	$('#back-to-top').click(function() {     
	    $('body,html').animate({
	        scrollTop : 0      
	    }, 900);
	});

	// Back to Top button (end)
	
	// nav click (start)

	$(document).ready(function(){
	  $(".link").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 900, function(){
	        window.location.hash = hash;
	      });
	    }
	  });
	});

	// nav click (end)
});
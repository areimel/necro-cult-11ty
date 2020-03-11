/********************************************

MODALS

	NOTES
	- 	Which modal is called is controlled by the data-modal attribute.
		A button with data-modal="thank_you" will open the corresponding 
		modal with data-modal="thank_you"

********************************************/
$(document).ready(function(){
	
	//MODALS

		//SUBMIT BUTTON
			$('form button.submit').click(function(e){
				$(this).siblings('input[type="submit"]').click();
			})

		//OPEN
			$('body').on('click','.modal_open',function(e) {
				e.preventDefault();
				var modal_get = $(this).data('modal');
				$('.modal_overlay').addClass('active');
				$('.modal[data-modal="'+modal_get+'"]').addClass('active');
			});

			$('body').on('click','.video_modal_open',function(e) {
				e.preventDefault();
				var video_id = $(this).data('video-id');
				$('.modal.video iframe').attr('src', 'https://www.youtube.com/embed/' + video_id + '?rel=0');
				$('.modal_overlay').addClass('active');
				$('.modal.video').addClass('active');
			});


		//CLOSE
			$('body').on('click','.modal_overlay',function(e) {
				e.preventDefault();
				$('.modal_overlay').removeClass('active');
				$('.modal').removeClass('active');

				//only affects video modals
				setTimeout(
					function() 
					{
						$('.modal.video iframe').attr('src', '');
					}, 500);
			});

			$('body').on('click','.modal_close',function(e) {
				e.preventDefault();
				$('.modal_overlay').removeClass('active');
				$('.modal').removeClass('active');
				setTimeout(
					function() 
					{
						$('.modal.video iframe').attr('src', '');
					}, 500);
			});

		//ESC Key Close
			var esc_key = 27;

			$(document).keyup(function(e) {
			  if (e.keyCode == esc_key && $('.modal_overlay').hasClass('active')){
			  	e.preventDefault();
			  	$('.modal_overlay').removeClass('active');
			  	$('.modal').removeClass('active');
			  	setTimeout(
			  		function() 
			  		{
			  			$('.modal.video iframe').attr('src', '');
			  		}, 500);
			  }
			});



		//Global offsite link modal - affects all links on site
			$('body').on('click','a',function(e) {
				if($(this).hasClass('offsite_send_cta')){
					$('.modal_overlay').removeClass('active');
			  		$('.modal').removeClass('active');
				}else{
					//console.log('link click');
		        	//e.preventDefault();
		        	var href = $(this).attr('href');
		        	//Update site var with new site's name
		        	var site = "http://framework.oxfordcommunications.com.php73-39.lan3-1.websitetestlink.com";
		        	console.log(href);
		        	if (href.indexOf("http") >= 0) {
		        		if(href.indexOf(site) >= 0 || href.indexOf("rackcdn.com") >= 0){
		        			console.log('onsite link');
		        		}else{
		        			console.log('offsite link');
		        			e.preventDefault();
		        			$('.offsite_send_cta').attr('href', href);

		        		}
		        	}
				}

	        	
	        });


		
	
});





/********************************************

NOTICES / BANNERS / WARNINGS

********************************************/
$(document).ready(function(){	
	/***** Cookie Notice *****/
		if($('#cookie_notice').length){
			if (sessionStorage.getItem("cookie_notice") != "set") {
				$('#cookie_notice').addClass('active');
			}

			$('#cookie_notice .close>i').click(function(){
				$('#cookie_notice').removeClass('active');
				sessionStorage.setItem("cookie_notice", "set");
			});
		}

});

/********************************************

LINK TARGET="_BLANK"

	- Scans page for links that lead outside the site and 
	automatically sets them to open in a new tab.

********************************************/
$(document).ready(function(){
	$('a[href]').each(function(){
		var href = $(this).attr('href');
		var target = $(this).attr('target');
		if (href.startsWith('/') || href.startsWith('#')) {
			
		} else {
			$(this).attr('target', '_blank');
			console.log('absolute link caught')
		}
	})
});

/********************************************

LINK REL="NOOPENER"

	- This code sets rel="noopener" for all links with target="_blank"
	This keeps the new page isolated from the first page, which is more secure
	and keeps resources freed up.  Works in conjunction with the TARGET code above.

********************************************/
$(document).ready(function(){
	$('a[target="_blank"]').attr('rel','noopener');
});


/********************************************

Scroll To

	- .scroll_buffer - autoscrolls user with 100px of space above target
	- .scroll_flush - autoscrolls user exactly to target

********************************************/
$(document).ready(function(){
	
	

	$('.scroll_buffer').click(function(e) {
		e.preventDefault();
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-100
				}, 1000);
				return false;
			}
		}
	});


	$('.scroll_flush').click(function(e) {
		e.preventDefault();
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});	
});



/********************************************

CUSTOM FORM ELEMENTS

********************************************/

$(document).ready(function(){
	
	$(".custom_select").click(function(){
		if($(this).children(".dropdown").hasClass('active')){
			console.log("off");
			$(this).children(".dropdown").removeClass("active");
		} else {
			console.log("on");
			$(this).children(".dropdown").addClass("active");
		}
	});

	$(".custom_select input[type='radio']").change(function(){
		$(this).parents(".dropdown").removeClass("active");
		
		var dropdown_content = $(this).siblings(".content").html();
		
		$(this).parents(".dropdown").siblings(".title").html(dropdown_content);
	});

});


/********************************************

GA EVENTS - MAIN 

Example:

data-event="GAEvent" data-category="Home" data-label="CTA" data-action="Click" data-value="undefined"

- 	The above code should be pasted into the opening tag, as data-attributes,
	of whatever element you want to put a click event on.
	The below codes then grabs the data attributes you've set,
	and pipes it through GTM and GA

********************************************/
$(document).ready(function(){

	$("[data-event='GAEvent']").click(function() {
		var evCat = 	$(this).attr('data-category') 	? $(this).attr('data-category') : '',
			evAct = 	$(this).attr('data-action') 		? $(this).attr('data-action') : '',
			evLab = 	$(this).attr('data-label') 		? $(this).attr('data-label') : '',
			evVal = 	$(this).attr('data-value') 		? $(this).attr('data-value') : '';

			try {

				window.dataLayer = window.dataLayer || [];
				dataLayer.push({
					'event': 'GAEvent',
					'eventCategory': evCat,
					'eventAction': evAct,
					'eventLabel': evLab,
					'eventValue': evVal,
				});
				console.log("GA Event fired - Event Category: ["+evCat+"], Event Label: ["+evLab+"], Event Action: ["+evAct+"]");

			} catch (e) {
				console.log("GA Event Error");
			}
	});
});



/********************************************

GA EVENTS - PRESETS 
	
	- These blocks of code allow you to set a full 
	GA Event with a single data-attribute.  This is useful
	when an event is often repeated, such as a commonly used CTA.

********************************************/
$(document).ready(function(){

	/***** Preset 1 *****/
		$("[GA-preset='preset-1']").click(function() {

			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'GAEvent',
				'eventCategory': 'Preset',
				'eventAction': 'Click',
				'eventLabel': 'Preset-Label-1',
				'eventValue': '',
			});

		});

	/***** Preset 2 *****/
		$("[GA-preset='preset-2']").click(function() {

			window.dataLayer = window.dataLayer || [];
			dataLayer.push({
				'event': 'GAEvent',
				'eventCategory': 'Preset',
				'eventAction': 'Click',
				'eventLabel': 'Preset-Label-2',
				'eventValue': '',
			});

		});
});




/********************************************

GA EVENTS - SCROLL 
	- Requires Scroll Magic JS

********************************************/
$(document).ready(function(){

	//HTML: <div class="gtm_scroll active" id="gtm_scroll_1" data-action="Scroll" data-category="News" data-event="GAEvent" data-label="scroll-test-1" data-value="undefined" data-offset="600">&nbsp;</div> 

	if($('.gtm_scroll').length){
		var controller = new ScrollMagic.Controller();

		$('.gtm_scroll').each(function(){
					
			var id = '#' + $(this).attr('id');
			var offset1 = $(this).data('offset');
			console.log(id);
			var scene = new ScrollMagic.Scene({triggerElement: id,triggerHook: 'onEnter', offset: offset1})
				.setClassToggle(id, "active")
				//.addIndicators({name: "" + id +" (offset: "+ offset1 +")"})
				.addTo(controller)

				.on("enter", function (e) {
					var evCat = $(id).attr('data-category') ? $(id).attr('data-category') : '',
						evAct = $(id).attr('data-action') ? $(id).attr('data-action') : '',
						evLab = $(id).attr('data-label') ? $(id).attr('data-label') : '',
						evVal = $(id).attr('data-value') ? $(id).attr('data-value') : '';

						try {
							console.log('gtm scroll success ' + evLab);
							window.dataLayer = window.dataLayer || [];
							dataLayer.push({
								'event': 'GAEvent',
								'eventCategory': evCat,
								'eventAction': evAct,
								'eventLabel': evLab,
								'eventValue': evVal,
							});
						} catch (e) {}
				})

				
		});
	}

	
});







//MAIN JS CODE

/*************************************
        Global Elements
*************************************/
  
  //NAV

    //HEADROOM - HEADER
    $(document).ready(function(){
      $("#header").headroom({
        "offset": 0,
        "tolerance": 25,
      });
    });
    
    //NAV BUTTONS
   $(document).ready(function(){

      $('.menu_button').click(function(){
          if($('.body_wrapper').hasClass('active')){
              $('.menu_button').removeClass('active');
              $('.body_wrapper').removeClass('active');
              $('#nav').removeClass('active');
              $('#nav_overlay').removeClass('active');
          }else{
              $('.menu_button').addClass('active');
              $('.body_wrapper').addClass('active');
              $('#nav').addClass('active');
              $('#nav_overlay').addClass('active');
          }
      });

      $('#nav_overlay').click(function(){
          if($('.body_wrapper').hasClass('active')){
              $('.menu_button').removeClass('active');
              $('.body_wrapper').removeClass('active');
              $('#nav').removeClass('active');
              $('#nav_overlay').removeClass('active');
          }else{
              $('.menu_button').addClass('active');
              $('.body_wrapper').addClass('active');
              $('#nav').addClass('active');
              $('#nav_overlay').addClass('active');
          }
      });

    });


//STICKY SIDEBAR
$(document).ready(function(){

    if($('.sticky_sidebar').length){
      console.log('sticky sidebar');
      
      /*$('.blog_get_results').click(function(e) {
        setTimeout(function(){
          sticky_sidebar.duration($('.blog_sidebar').height() - 420);
        }, 750);

      })*/
      
      var controller = new ScrollMagic.Controller();

      var sticky_sidebar = new ScrollMagic.Scene({
        triggerElement: ".sticky_sidebar",
        triggerHook: 'onLeave', 
        offset: -50,
        duration: $('.sticky_sidebar').height() - 750
        //loglevel: 3,
      })
        
        //.setClassToggle(".sticky_sidebar", "active") // trigger a TweenMax.to tween
        .setPin(".sticky_sidebar")
        .addTo(controller);
      
    }
});

$(document).ready(function(){

    //FULLSCREEN
      /* Get the documentElement (<html>) to display the page in fullscreen */
      var elem = document.documentElement;

      /* View in fullscreen */
      function openFullscreen() {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }

      /* Close fullscreen */
      function closeFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
          document.msExitFullscreen();
        }
      }

      $('#fullscreen_button').click(function(){
        if($(this).hasClass('active')){
          $(this).removeClass('active');
          closeFullscreen();
        }else{
          $(this).addClass('active');
          
          openFullscreen();
        }
      })
});



    //RANDOM QUOTE SELECTOR
      $(document).ready(function(){
        
        $(function() {
          var quotes = new Array(
            "The Past is Alive",
            "Death To False Metal",
            "Brothers of Steel"
            //add more quotes
          ),
          randno = quotes[Math.floor( Math.random() * quotes.length )];
          $('#nav_tagline').html( randno );
        });
      });
    

    //ALBUM ART CREDIT
      $(document).ready(function(){

      });


    //TYPEWRITER TEXT EFFECT
      $(document).ready(function(){

        const typing = document.querySelectorAll('.typewriter');

        function type(element) {
        
            function randomOpacity() {
                return (Math.floor(Math.random() * 80) + 70)/100;
            }
            function randomEms() {
              if (Math.random() > .8) {
                  return (Math.floor(Math.random() * 100) - 50)/800;
              }
              else {
                  return 0;
              }
            }
            function wrap(char) {
                return '<span style="opacity:' + randomOpacity() + '; text-shadow:' + randomEms() + 'em ' + randomEms() + 'em currentColor;">' + char + '</span>';
            }
            const wrappedText = Array.from(element.textContent).map(wrap);
            element.innerHTML = wrappedText.join('');
        }
        
        typing.forEach(type);
      });


    //BOILERPLATE SCROLLMAGIC CODE - GENERAL ACTIVE
      $(document).ready(function(){
        var basic_animations = new ScrollMagic.Controller();

        $('.animate_in').each(function(){
          
          var id = '#' + $(this).attr('id');
          console.log(id);
          var scene = new ScrollMagic.Scene({triggerElement: id,triggerHook: 'onEnter', offset: 200})
            .setClassToggle(id, "active") 
            //.setTween(id, 0.5, {opacity: "green", x: 50}) // trigger a TweenMax.to tween
            //.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
            .addTo(basic_animations);
        });

      });

  $(document).ready(function(){

        //ACHIEVEMENT CODE

            /****
             * Example HTML:
             * <a class="button achievement" data-title="Achievement Getter" data-description="You have unlocked you first achievement." data-icon='<i class="fas fa-ring"></i>'>Achievement Get</a>
             * 
             * Icons: https://fontawesome.com/icons?d=gallery&c=gaming-tabletop,halloween,music&m=free 
             * 
             */
            $('.achievement').click(function(){
                var title = $(this).data('title');
                var description = $(this).data('description');
                var icon = $(this).data('icon');
                
                $('#achievement_notification .title').text(title);
                $('#achievement_notification .description').text(description);
                $('#achievement_notification .icon>.inner').html(icon);
                
                $('#achievement_notification').addClass('active');
                setTimeout(function () { 
                        $('#achievement_notification').removeClass('active');
                }, 8000);
                 
            });





  });


/*************************************
        PAGES
*************************************/
  /*************************************
          HOME
  *************************************/

  
  //SLIDER
    $(document).ready(function(){
      
      var home_hero_swiper = new Swiper('.home_hero_slider', {
          spaceBetween: 200,
          loop: true,
          pagination: {
            el: '.home_hero_slider .swiper-pagination',
          },
          speed: 500,
          autoplay: {
              delay: 5000,
            },
      });
    
    });


  


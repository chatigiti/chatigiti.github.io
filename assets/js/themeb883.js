;(function($){
    "use strict";
	var nav_offset_top = $('header').height() + 50; 
	function parallaxEffect() {
    	$('.bg-parallax').parallax();
	}
	parallaxEffect();
    function testimonials_slider(){
        if ( $('.testi_slider').length ){
            $('.testi_slider').slick({
                infinite:true,
                slidesToShow: 3,
                slidesToScroll: 3,
                vertical: true,
                autoplay: true,
                verticalSwiping: true,
                dots: false,
                prevArrow: false,
                nextArrow: false,
                responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                      }
                    }]
            })
        }
    }
    testimonials_slider();
    function features_slider(){
        if ( $('.fetures_slide').length ){
            $('.fetures_slide').slick({
                infinite:true,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: true,
                autoplay: false,
                verticalSwiping: true,
                dots: true,
                prevArrow: false,
                nextArrow: false
            })
        }
    }
    features_slider();
})(jQuery);

var textSliderEng = $('#build');
if(textSliderEng.length){    
lottie.loadAnimation({
  container: document.getElementById('build'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/assets/js/slider-lottie-eng.json' // the path to the animation json
});
}

var textSliderRus = $('#buildrus');
if(textSliderRus.length){
lottie.loadAnimation({
  container: document.getElementById('buildrus'), // the dom element that will contain the animation
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/assets/js/slider-lottie-rus.json' // the path to the animation json
});

}

var textSliderAr = $('#buildar');
if(textSliderAr.length){
    lottie.loadAnimation({
      container: document.getElementById('buildar'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/js/slider-lottie-ar2.json' // the path to the animation json
    });
}

var textSliderFa = $('#buildfa');
if(textSliderFa.length){
    lottie.loadAnimation({
      container: document.getElementById('buildfa'), // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/assets/js/slider-lottie-fa.json' // the path to the animation json
    });
}
$(document).ready(function(){
	$('.menu-trigger').click(function(){
		$('nav ul').slideToggle(500);
			});//end slide toggle

	$(window).resize(function() {		
		if (  $(window).width() > 500 ){			
			$('nav ul').removeAttr('style');
		 }
	});//end resize
});//end ready

/*fixed menu*/
$(function($) {
            $(window).scroll(function(){
                if($(this).scrollTop()>140){
                    $('#menu').addClass('fixed');
                }
                else if ($(this).scrollTop()<140){
                    $('#menu').removeClass('fixed');
                }
            });
        });
/*//fixed mtnu*/

//popup
$('.cta_button').click(function(){
    $('.popup_fast').css({'top': $(window).scrollTop() +300}).addClass('active');
    $('.bg_popup').fadeIn();

    $('.bg_popup').click(function(){
        $('.popup_fast').removeClass('active');
        $('.bg_popup').fadeOut();
    });
});

    $(window).scroll(function(){
        $('.popup_fast').css({'top': $(window).scrollTop() +300})
    }).scroll();
//popup


















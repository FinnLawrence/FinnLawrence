$(document).ready(function() { 
   $('.parallax').parallax();
    aspect();
    
    $('a[href^=#]').click(function(){
        if ($.attr(this, 'href') === "#" || $(this).hasClass("ignore-scroll")) {
            if ($(this).data("target") != null) {
                var target = $( $(this).data("target") ).offset().top - $('.control-buttons').height();
                $('html, body').animate({
                    scrollTop: target
                }, 600);
                return false;
            } else {
                return true;
            }
        }
    });
});

$(window).load(function() {
    
});

$(window).resize(function() {
    aspect();
});

// Scrolling
$(window).scroll(function() {
    
});

function aspect() {
    var aspect = $(window).width() / $(window).height();

    if (aspect > 1) {
        $('.landscape').css("display","block");
        $('.portrait').css("display","none");
    } else {
        $('.landscape').css("display","none");
        $('.portrait').css("display","block");
    }
}
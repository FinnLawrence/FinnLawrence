$(document).ready(function() {
    
    // Fire up the parallax
   $('.parallax').parallax();
    
    // Display correct elements for current aspect ratio
    aspect();
    
    // Smooth scrolling
    $('a[href^=#]').click(function() {
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
    
    // ########
    // GA Hooks
    // ########
    
    // Open / close work experience sections
    $('#work-current').click(function() {
        ga('send', 'event', 'section', 'click', 'work-current');
    });
    $('#work-previous').click(function() {
        ga('send', 'event', 'section', 'click', 'work-previous');
    });
    
});

// Call aspect on window resize
$(window).resize(function() {
    aspect();
});

// Calculates the aspect ratio and hides/shows elements with .landscape / .portrait classes appropriately
function aspect() {
    
    // Calculate window aspect ratio
    var aspect = $(window).width() / $(window).height();

    if (aspect > 1) {
        // We're in landscape view
        $('.landscape').css("display","block");
        $('.portrait').css("display","none");
    } else {
        // We're in portrait view
        $('.landscape').css("display","none");
        $('.portrait').css("display","block");
    }
}
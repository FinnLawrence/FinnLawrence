$(document).ready(function() {
  // Parse any parameters
  parseParameters();

  // Fire up the parallax
  $(".parallax").parallax();

  // Display correct elements for current aspect ratio
  aspect();

  // Handlers
  $("#modal-message-submitted .modal-close").click(function() {
    history.pushState(
      null,
      null,
      window.location.href.substring(0, window.location.href.indexOf("?"))
    );
  });

  // Smooth scrolling
  $("a[href^=#]").click(function() {
    if ($.attr(this, "href") === "#" || $(this).hasClass("ignore-scroll")) {
      if ($(this).data("target") != null) {
        var current = $(window).scrollTop();
        var target = $($(this).data("target")).offset().top;
        var duration = Math.abs(target - current);
        $("html, body").animate(
          {
            scrollTop: target
          },
          duration
        );
        return false;
      } else {
        return true;
      }
    }
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
    $(".landscape").css("display", "block");
    $(".portrait").css("display", "none");
  } else {
    // We're in portrait view
    $(".landscape").css("display", "none");
    $(".portrait").css("display", "block");
  }
}

// Parses URL parameters and does stuff if they're there
function parseParameters() {
  var pageURL = window.location.href;
  var message = url("?message", pageURL);

  if (message == "submitted") {
    $("#modal-message-submitted").openModal();
  }
}

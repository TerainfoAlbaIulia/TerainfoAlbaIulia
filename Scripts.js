(function($) 
{
    "use strict"; 
  
    // Smooth scrolling
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() 
    {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) 
        {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) 
            {
                $('html, body').animate({
                scrollTop: (target.offset().top - 71)
            }, 1000, "easeInOutExpo");
            return false;
        }
    }
});
  
//Make scroll to top button appear
$(document).scroll(function() 
{
    var scrollDistance = $(this).scrollTop();
    
    if (scrollDistance > 100) 
    {
        $('.scroll-to-top').fadeIn();
    } 
    else 
    {
        $('.scroll-to-top').fadeOut();
    }
});
  
// Closes menu when a scroll trigger is clicked
$('.js-scroll-trigger').click(function() 
{
    $('.navbar-collapse').collapse('hide');
});
  
// Select active section in menu
$('body').scrollspy(
{
    target: '#TopNavigationBar',
    offset: 80
});
  
// Collapse PcMenu
var navbarCollapse = function() 
{
    if ($("#TopNavigationBar").offset().top > 100) 
    {
        $("#TopNavigationBar").addClass("navbar-shrink");
    } 
    else 
    {
        $("#TopNavigationBar").removeClass("navbar-shrink");
    }
};

// Collapse now if page is not at top
navbarCollapse();

// Collapse the Top bar when page is scrolled
$(window).scroll(navbarCollapse);
})(jQuery);

// Lazy loading images
document.addEventListener("DOMContentLoaded", function() 
{
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
  
    function lazyload()
    {
        if(lazyloadThrottleTimeout) 
        {
            clearTimeout(lazyloadThrottleTimeout);
        }    
    
        lazyloadThrottleTimeout = setTimeout(function() 
        {
            var scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function(img)
            {
                if(img.offsetTop < (window.innerHeight + scrollTop)) 
                {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                }
            });
        
            if(lazyloadImages.length == 0) 
            { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
            }
        }, 20);
    }
  
    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
});

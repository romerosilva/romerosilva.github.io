// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $('#icon-menu').click(function() {
        $('button>#icon-menu').addClass('hidden');
        
        $('#send-request').removeClass('visible-xs-inline-block');
        $('#send-request').addClass('hidden');
        
        $('#menu-close').removeClass('hidden');
        $('#menu-close').addClass('visible-xs-inline-block');
        
        $('#search-bar').removeClass('visible-xs-block');
        $('#search-bar').addClass('hidden');
        
        $('#login-bar').removeClass('hidden');
        $('#login-bar').addClass('visible-xs-block');
    });
    $('#menu-close').click(function() {
        $('button>#icon-menu').removeClass('hidden');
        
        $('#send-request').removeClass('hidden');
        $('#send-request').addClass('visible-xs-inline-block');
        
        $('#menu-close').removeClass('visible-xs-inline-block');
        $('#menu-close').addClass('hidden');
        
        $('#search-bar').removeClass('hidden');
        $('#search-bar').addClass('visible-xs-block');
        
        $('#login-bar').removeClass('visible-xs-block');
        $('#login-bar').addClass('hidden');

        $('.navbar-collapse').removeClass('in');
    });
    $(window).click(function() {
        if(!$('arrow-up').hasClass('hidden')) {
            $('.arrow-up').addClass('hidden');    
        }
    });
    $('.dropdown-toggle').click(function(evt) {
        $('.arrow-up').removeClass('hidden');
        //evt.stopPropagation();
    });

    var phoneMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
      onKeyPress: function(val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };

    $('#phone-mask').mask(phoneMaskBehavior, spOptions);
})(jQuery); // End of use strict

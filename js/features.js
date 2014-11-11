$(function(){
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        $('.chart-item').one('inview', function(isInView) {
            if (isInView) {
                easyPieChart();
            }
        });

        // Animate elements in Charts Section
        $('.chart-item').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });
    }
    else
    {
        easyPieChart();
    }
    
    function easyPieChart() {
        $('.chart.chart-style-one').easyPieChart({
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: 10,
            size: 210,
            animate: 3000,
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent) + '%');
            }
        });

        $('.chart.chart-style-two').easyPieChart({
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: 3,
            size: 210,
            animate: 3000,
            easing: 'easeOutBounce',
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent) + '%');
            }
        });
    }

   /* // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        // Animate elements in Content Boxes Section
        $('.content-box').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') ) ;
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated flipInY').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
    }

    // jQuery countdown
    var element = $('.countdown > .cd-content'),
    year = $(element).data('year'),
    month = $(element).data('month'),
    day = $(element).data('day');

    var newDate = new Date(year, month - 1, day);

    $(element).countdown({ 
        until: newDate,
        layout: '<div class="col-xs-6 col-sm-3 col-md-2 col-md-offset-2 not-right-column top-column"><div class="cd-element cd-days"><div class="cd-value">{dnn}</div><div class="cd-label">{dl}</div></div></div>' +
        '<div class="col-xs-6 col-sm-3 col-md-2 not-right-column top-column"><div class="cd-element cd-hours"><div class="cd-value">{hnn}</div><div class="cd-label">{hl}</div></div></div>' +
        '<div class="col-xs-6 col-sm-3 col-md-2 not-right-column"><div class="cd-element cd-minutes"><div class="cd-value">{mnn}</div><div class="cd-label">{ml}</div></div></div>' +
        '<div class="col-xs-6 col-sm-3 col-md-2"><div class="cd-element cd-seconds"><div class="cd-value">{snn}</div><div class="cd-label">{sl}</div></div></div>'
    });*/
    
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        // Animate elements in Countdown Section
        $('.countdown').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });
        
        $('.countdown-form').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp3').css('opacity', 1);}
        });
        
        $('.countdown-text').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp5').css('opacity', 1);}
        });
    }

    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        $('.counter-item > i').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
        });
        
        $('.counter-item > .inner-content').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp3').css('opacity', 1);}
        });
        
        $('.counter-item > p').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp5').css('opacity', 1);}
        });
        
        $('.counter-item').one('inview', function(isInView) {
            if (isInView) {
                $('.inner-content > .number').countTo();
            }
        });
    }
    else
    {
        $('.inner-content > .number').countTo();
    }

    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        // Animate elements in Funny Boxes
        $('.funny-box-text').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') ) ;
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * (i * 4));
                }
            });
        });
    }

     // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        // Animate elements in Meet The Team Section
        $('.team-item > .team-element').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') );
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
    }

     // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        $('.portfolio-item > .inner-content').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') );
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * i);
                }
            });
        });
    }

     // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        // Animate elements in Pricing Tables Section
        $('.pricing-table .pricing-wrapper').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') );
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated fadeInUp').css('opacity', 1);
                    } , itemsDelay * (i * 2));
                }
            });
        });
    }


    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        // Animate elements in Testimonials Section
        $('.testimonial-item').each(function(i)
        {            
            var element = $(this),
            itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay') );
            element.css('opacity', 0).one('inview', function(isInView) {
                if (isInView)
                {
                    setTimeout(function(){
                        element.addClass('animated fadeInLeft').css('opacity', 1);
                    } , itemsDelay * (i * 4));
                }
            });
        });
    }

    // Timeline tooltip
    $('.timeline .timeline-badge').tooltip();
    
    // Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) 
    {
        $('ul.timeline > li > .timeline-panel').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInLeft').css('opacity', 1);}
        });

        $('ul.timeline > li.timeline-inverted > .timeline-panel').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInRight').css('opacity', 1);}
        });
    }

});//Jquery End 
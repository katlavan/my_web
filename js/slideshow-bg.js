$(function(){
    
    // jQuery backstretch
    if (jQuery.browser.mobile === false) 
    {
        $.backstretch([
            "img/bg-intro-1.jpg", "img/bg-intro-2.jpg"
        ], {duration: 1500, fade: 3000 });
    }
});
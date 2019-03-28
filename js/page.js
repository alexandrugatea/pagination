jQuery(document).ready(function($){
    var itemToAnimate = $('.page .page-item');
    var itemTrigger = $('.page .page-number a');

    var animationLeftIn = 'fadeInLeft';
    var animationRightIn = 'fadeInRight';
    var animationLeftOut = 'fadeOutLeft';
    var animationRightOut = 'fadeOutRight';
    
    addItemDelay(itemToAnimate);
    setActivepageNumber();

    var urlParam = new URLSearchParams(window.location.search);
    var direction = urlParam.get('direction');
    if (direction == 'left') {
        animateIn(itemToAnimate, animationLeftIn);
    } else {
        animateIn(itemToAnimate, animationRightIn);
    }

    itemTrigger.on('click', function(e) {
        e.preventDefault();
        itemToAnimate.removeClass(animationLeftIn).removeClass(animationLeftIn);
        var direction = $(this).attr('href').split('=')[1];
        var toGo = $(this).attr('href');
        if (direction == 'left') {
            animateOut(itemToAnimate, animationRightOut);
        } else {
            animateOut(itemToAnimate, animationLeftOut);
        }

        setTimeout(function(){
            window.location.replace(toGo);
        }, 1500)
    });

    function addItemDelay(item) {
        if ($('.page').length > 0) {
    
            var delay = 100;
            item.each(function(){
                $(this).css({
                    animationDelay: delay + 'ms'
                }).addClass('animated');
                delay += 100;
            });
        }
    }
    
    function setActivepageNumber() {
        var currentNumber = parseInt(getCurrentPageNumber());
        $('.page li.page-number:nth-child(' + currentNumber + ')').addClass('active');
    }
    
    function getCurrentPageNumber() {
        var pageNumber;
        if (window.location.href.indexOf('/page/') > 0) {
            var url =  window.location.href;
            var current = url.split('/page/')[1];
             pageNumber = current.split('.')[0];
            }
        return pageNumber;
    }
    
    
    function animateIn(element, animation) {
        element.addClass(animation);
    }
    
    function animateOut(element, toAdd) {
        element.addClass(toAdd);
    }

});


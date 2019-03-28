jQuery(document).ready(function($){
    var itemToAnimate = $('.page .page-item');
    var itemTrigger = $('.page .page-number a');
    addItemDelay(itemToAnimate);
    setActivepageNumber();

    animateIn(itemToAnimate);

    navigate();

    itemTrigger.on('click', function(e){
        e.preventDefault();
        var toGo = $(this).attr('href');
        animateOut(itemToAnimate);

        setTimeout(function(){
            window.location.replace(toGo);
        }, 1500)
    });


});

function addItemDelay(item) {
    if ($('.page').length > 0) {

        var delay = 100;
        item.each(function(){
            $(this).css({
                animationDelay: delay + 'ms'
            });
            delay += 100;
        });
    }
}

function setActivepageNumber() {
    var currentNumber = getCurrentPageNumber();
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

function navigate() {
    var navTrigger = $('.page .page-numbers [data-target]');

    navTrigger.on('click', function(){

        var clicked = $(this).attr('data-target');
        var pn = parseInt(getCurrentPageNumber());

        if (clicked == "previous" && pn > 1) {
            var url = window.location.href.split(pn)[0];
            var urlExt = window.location.href.split(pn)[1];

            window.location.replace(url + (pn - 1) + urlExt);

        } else if (clicked == "next" && pn < 3) {
            var url = window.location.href.split(pn)[0];
            var urlExt = window.location.href.split(pn)[1];

            window.location.replace(url + (pn + 1) + urlExt);

        }
    })
}

function animateIn(element) {
    element.addClass('animated zoomIn');
}

function animateOut(element) {
    element.removeClass('zoomIn').addClass('zoomOut');
}
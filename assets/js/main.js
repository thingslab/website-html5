var main = function() {
    //initialize smoothscroll.js
    smoothScroll.init();

    //start the carousels

    $('.carousel').carousel();
    /*
    $('.owl-carousel').owlCarousel({
        singleItem: true
    });
     */

    //navigation hamburger icon
    $(".button-collapse").sideNav();
};

$(document).ready(main);
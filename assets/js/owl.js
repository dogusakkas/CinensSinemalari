$(document).ready(function() {
    $('.main-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        items: 1,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
    })
});

$(function() {

    const doticon = '<i class="fas fa-circle"></i>';

    $('.main-slider').owlCarousel({
        navText: [doticon]
    });
});
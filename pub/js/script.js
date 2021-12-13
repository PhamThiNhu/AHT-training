$(document).ready(function() {
    $('.content-image-item').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //menu-bar
    $('.menu-bar').click(function() {
        $('.header-menu').slideDown("slow");
    })
    $('.close-menu-top').click(function() {
        $('.header-menu').slideUp("slow");
    })
    $('.content-blg-post').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dotClass: false,
            responsive: {
                320: {
                    items: 1
                },
                375: {
                    items: 1
                },
                425: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1920: {
                    items: 3
                }
            }
        })
        // $(window).resize(function() {
        //     var width = $(window).width();
        //     if (width < 426) {
        //         $('.content-banner-top').slick({
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         })
        //     }
        // });
    $('.logo-brands').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dotClass: false,
        responsive: {
            320: {
                items: 3,
                margin: 0,
                with: 90
            },
            375: {
                items: 3
            },
            425: {
                items: 3
            },
            768: {
                items: 4

            },
            1024: {
                items: 6
            },
            1440: {
                items: 6
            },
            1920: {
                items: 6
            }
        }
    })

    //ACtion show 
    $('.icon-social-media-f').click(function() {
        $('.social-media').addClass('show-social');
        $('.icon-social-media-f').addClass('remove');
        $('.icon-social-media-r').addClass('show-ic-r');
    });
    //action hide
    $('.icon-social-media-r').click(function() {
        $('.social-media').removeClass('show-social');
        $('.icon-social-media-r').removeClass('show-ic-r');
        $('.icon-social-media-f').removeClass('remove');
    })

});
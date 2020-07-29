
$(document).ready( function(){

    $('.card-slider').slick({
        slidesToShow:5,
        slidesToScroll:1,
        autoplay: true,
        adaptiveHeight: false,
        dots: false,
        responsive:[
            {
                breakpoint: 800,
                settings: {
                slidesToShow: 3,
                slidesToScroll:1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                slidesToShow: 1,
                }
            },
            {
                breakpoint: 375,
                settings: {
                slidesToShow: 1,
                }
            }
        ]
    });
});


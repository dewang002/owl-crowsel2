$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center:true,
    // nav:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            
        }
    }
})
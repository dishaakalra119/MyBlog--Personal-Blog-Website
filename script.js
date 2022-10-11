
  $(function(){
    $('.feature-post-slider').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        nav:true,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });
});
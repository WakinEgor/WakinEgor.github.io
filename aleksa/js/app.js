document.addEventListener("DOMContentLoaded", function() {

	setTimeout(()=>{
        $('.owl-carousel').owlCarousel({
            margin: 20,
            autoWidth: true,
            nav: true,
            smartSpeed: 1000,
            navText: ['назад','вперед'],
            responsiveClass: true,
            dots: false,
            responsive: {
                0:{
                    items:1
                },
                800:{
                    items:2
                },
                1100:{
                    items:3
                }
            }
        });
    }, 100)
});

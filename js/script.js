'use strict'

$('#owl-carousel').owlCarousel({
    loop:true,   
    nav:false,   
    margin:20, 
    stagePadding:10,   
    responsive:{
        0:{
            items:2
        },
        900:{
            items:4
        }     
    }
});
$('#owl-carousel-last-order').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:2
        }    
    }
});

$('#owl-carousel-programm').owlCarousel({
    loop:true,   
    nav:false,   
    margin:20, 
    stagePadding:10,   
    responsive:{
        0:{
            items:2
        },
        900:{
            items:4
        }      
    }
});
$('#owl-carousel-comments').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3,  
            margin:80,                   
        }         
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        }
    }
});
$('#owl-carousel-public').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        }    
    }
});

if ($(window).width() < 900) {
    console.log('none')
 }
 else {
    $('#owl-carousel-public').owlCarousel('destroy'); 
    $('#owl-carousel-public').owlCarousel({touchDrag: false, mouseDrag: false});
 }


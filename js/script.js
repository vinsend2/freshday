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

$('#owl-carousel-public2').owlCarousel({
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

 if ($(window).width() < 900) {
    console.log('none')
 }
 else {
    $('#owl-carousel-public2').owlCarousel('destroy'); 
    $('#owl-carousel-public2').owlCarousel({touchDrag: false, mouseDrag: false});
 }

 
 window.addEventListener(`DOMContentLoaded`, () => {
    const tabs = document.querySelectorAll(`.public-content__btn`),
          tabsContent = document.querySelectorAll(`.public-content__slider-wrapper`),
          tabsParent = document.querySelector(`.public-content__btn-block`);

    
 function hideTabsContent () {
    tabsContent.forEach(item => {
        item.classList.add(`hide`);
        item.classList.remove(`show`, `fade`);
    });

    tabs.forEach(item => {
        item.classList.remove(`public-content__btn--activ`);
    });

 }

 function showTabContent (i = 0) {
    tabsContent[i].classList.add(`show`, `fade`);
    tabsContent[i].classList.remove(`hide`);
    tabs[i].classList.add(`public-content__btn--activ`);
 }

 hideTabsContent();
 showTabContent();


  tabsParent.addEventListener(`click`, (event) => {    
    const target = event.target;
    if (target && target.classList.contains(`public-content__btn`)) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabsContent();
                showTabContent(i);
            }
        });
    }
  });
});
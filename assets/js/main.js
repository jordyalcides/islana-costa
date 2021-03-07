// CORREÇOES PARA O MENU

let menuList = document.getElementById("menu-list")
let menuInput = document.getElementById("menu-checkbox")

menuList.addEventListener("touchstart", () => {
    if (menuInput.checked === true) menuInput.checked = false;
})

menuList.addEventListener("click", () => {
    if (menuInput.checked === true) menuInput.checked = false;
})

// CARROSSEL DE IMAGENS
$(document).ready(function() {
    $('.inicio-carrossel').slick({
        accessibility: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
        centerMode: true,
        centerPadding: '30%',
        cssEase: 'linear',
        dots: true,
        easing: 'linear',
        focusOnSelect: true,
        infinite: true,
        mobileFirst: false,
        slidesToScroll: 1,
        slidesToShow: 2,
        speed: 500,
        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false,
                autoplay: false,
                centerPadding: '12%',
                draggable: true,
                slidesToShow: 1,
                swipe: true,
                swipeToSlide: true,
                touchMove: true
            }
        }, {
            breakpoint: 768,
            settings: "unslick"
        }]
    })
})
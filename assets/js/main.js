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
        arrows: false,
        autoplay: false,
        centerMode: true,
        centerPadding: '20px',
        cssEase: 'cubic-bezier(0.33, 0.66, 0.96, 1.0)',
        dots: true,
        draggable: true,
        infinite: true,
        mobileFirst: true,
        speed: 1000,
        swipe: true,
        swipeToSlide: true,
        touchMove: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                autoplay: true,
                autoplaySpeed: 3800,
                centerPadding: '100px',
            }
        }, {
            breakpoint: 1080,
            settings: {
                accessibility: true,
                arrows: true,
                centerPadding: '120px',
                focusOnSelect: true,
                slidesToShow: 2,
            }
        }]
    })
})
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
        mobileFirst: false,
        responsive: [{
                breakpoint: 1080,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    draggable: true,
                    cssEase: 'linear',
                    slidesToShow: 1,
                    slidestoScroll: 1,
                    centerMode: true,
                    centerPadding: '10%'
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 4000,
                    draggable: true,
                    cssEase: 'linear',
                    slidesToShow: 1,
                    slidestoScroll: 1,
                    centerMode: true,
                    centerPadding: '10%'
                }
            }, {
                breakpoint: 620,
                settings: "unslick"
            }
        ]
    })
})
// CORREÇOES PARA O MENU

let menuList = document.getElementById("menu-list")
let menuInput = document.getElementById("menu-checkbox")
    // let carrossel = document.getElementById("carrossel")

menuList.addEventListener("touchstart", () => {
    if (menuInput.checked === true) menuInput.checked = false;
})

menuList.addEventListener("click", () => {
    if (menuInput.checked === true) menuInput.checked = false;
})

// menuInput.addEventListener("input", () => {
//     menuInput.checked == true ?
//         carrossel.style.visibility = 'hidden' :
//         carrossel.style.visibility = 'visible'
// })

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

// if (window.matchMedia("(min-width: 1080px)").matches) {
//     /* the viewport is less than 768 pixels wide */
//     $('.inicio-carrossel').slick();
// }
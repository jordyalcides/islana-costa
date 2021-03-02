// CORREÇOES PARA O MENU

const menuList = document.getElementById("menu-list")
let menuInput = document.getElementById("menu-checkbox")
let carrossel = document.getElementById("carrossel")

menuList.addEventListener("touchstart", () => {
    if (menuInput.checked == true) menuInput.checked = false;
})

menuInput.addEventListener("change", () => {
    menuInput.checked == true ?
        carrossel.style.visibility = 'hidden' :
        carrossel.style.visibility = 'visible'
})

// CARROSSEL DE IMAGENS

$('.inicio-carrossel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidestoScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    focusOnSelect: true,
    mobileFirst: true,
    zIndex: 0,
});



// const carrosselImagens = ["/assets/img/toa-heftiba-FV3GConVSss-unsplash.jpg", "/assets/img/rune-enstad-UXFJ-6Zj27M-unsplash.jpg", "/assets/img/roberto-nickson-tleCJiDOri0-unsplash.jpg"]
// let carrosselImagemPrincipal = document.getElementById('carrossel-imagem-principal')

// function carrossel(indexAtual) {
//     let index = ((indexAtual + 1) % 3)
//     carrosselImagemPrincipal.src = carrosselImagens[index]
//     setTimeout(`carrossel(${indexAtual+1})`, 3000)
// }

// carrossel(0);

// function comeco(){
// document.getElementById('carrossel-imagem-principal').src = array1[0]
// document.form.texto.value="0"
// }

// function mais(){
// document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 + 1)
// if (document.form.texto.value > 2)
// {document.form.texto.value = 0}
// }

// function menos(){
// document.form.texto.value = Math.floor (1+ 1 - 2 + (document.form.texto.value) * 1 -1)
// if (document.form.texto.value < 0)
// {document.form.texto.value = 2}
// }

// function regular(){
// document.getElementById('imgId').src = array1[document.form.texto.value];
// setTimeout("regular()", 1)
// }








// trafficButton.oninput = function() {
//     let index = Math.ceil(this.value/25)
//     viewsValue.innerHTML = valueToViews[index]
//     if(yearlyDiscount.checked == true) priceAmount.innerHTML = valueToPrice[index]*0.75
//     else priceAmount.innerHTML = valueToPrice[index]
// }

// trafficButton.addEventListener("touchmove", () => {
//     trafficButton.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + trafficButton.value + '%, hsl(224, 65%, 95%)' + trafficButton.value + '%)'
// })

// trafficButton.addEventListener("mousemove", () => {
//     trafficButton.style.background = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + trafficButton.value + '%, hsl(224, 65%, 95%)' + trafficButton.value + '%)'
// })

// yearlyDiscount.addEventListener("change", () => {
//     if(yearlyDiscount.checked == true) priceAmount.innerHTML = valueToPrice[Math.ceil(trafficButton.value/25)]*0.75
//     else priceAmount.innerHTML = valueToPrice[Math.ceil(trafficButton.value/25)]
// })
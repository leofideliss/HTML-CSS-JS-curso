/* PORTFOLIO SLIDER */

/** VARIAVEIS DO SLIDER */

var sliderContainer = document.querySelector('.jl-slider-container')
var sliderList = document.querySelector('.jl-slider-list')
var sliderItem = document.querySelectorAll('.jl-slider-item')
var sliderListWidth = null
var totalSliderItem = sliderItem.length
var currentSlide = document.querySelector('.jl-current-slide')
var totalSlide = document.querySelector('.jl-total-slide')
var prevItem = document.querySelector('.jl-item-prev')
var nextItem = document.querySelector('.jl-item-next')
var counterSlide = document.querySelector('.jl-navigator-counter span')
var sliderPos = 0
var counterCurrent = 1;
var navItens = document.querySelectorAll('.jl-item-navigator a');


// CAPTURANDO LARGURAS

var containerWidth = sliderContainer.parentElement.offsetWidth

// PASSANDO LARGURAS DINÂMICAS
sliderContainer.style.width = containerWidth + "px"

for (let p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + "px"

    sliderListWidth += sliderItem[p].offsetWidth
}

sliderList.style.width = sliderListWidth + "px"


// handlers


// add e remove counter 
var addCounter = () => {
    if (counterCurrent < totalSliderItem) {
        currentSlide.innerHTML = counterFormat(++counterCurrent)
        counterSlide.innerHTML = counterFormat(counterCurrent)
    }
}

var removeCounter = () => {
    if (counterCurrent > 1) {
        currentSlide.innerHTML = counterFormat(--counterCurrent)
        counterSlide.innerHTML = counterFormat(counterCurrent)
    }
}

// slider ativo
var setActiveSlider = () => {
    for (var nv = 0; nv < sliderItem.length; nv++) {
        let item = parseInt(sliderItem[nv].getAttribute('data-slider'))

        if (item == counterCurrent) {
            sliderItem[nv].classList.add('jl-slider-active')
            sliderItem[nv].querySelector('.jl-portfolio-item-box').classList.add('jl-scale-right')
            sliderItem[nv].querySelector('.jl-portfolio-item-thumb img').classList.add('jl-scale-up')
            sliderItem[nv].querySelector('.jl-portfolio-item-info').classList.add('jl-fade-from-left')
        }
    }
}
var removeActiveSlider = () => {
        for (var nv = 0; nv < sliderItem.length; nv++) {
            sliderItem[nv].classList.remove('jl-slider-active')
            sliderItem[nv].querySelector('.jl-portfolio-item-box').classList.remove('jl-scale-right')
            sliderItem[nv].querySelector('.jl-portfolio-item-thumb img').classList.remove('jl-scale-up')
            sliderItem[nv].querySelector('.jl-portfolio-item-info').classList.remove('jl-fade-from-left')

        }
    }
    // item ativo

var setActive = () => {
    for (var nv = 0; nv < navItens.length; nv++) {
        let item = parseInt(navItens[nv].getAttribute('data-nav'))

        if (item == counterCurrent) {
            navItens[nv].classList.add('jl-item-active')
            anime({
                targets: navItens[nv],
                width: 65
            });
        }
    }
}


var changeActive = () => {
        for (var nv = 0; nv < navItens.length; nv++) {
            navItens[nv].classList.remove('jl-item-active')
            anime({
                targets: navItens[nv],
                width: 20
            });
        }
        removeActiveSlider()
        setActive()
        setActiveSlider()
    }
    // formatar contador 
var counterFormat = (n) => {
        if (n < 10)
            return '0' + n
        else
            return n
    }
    // animações de botão

var nextSliderAnime = () => {
    var lastItem = sliderListWidth - containerWidth

    if ((-1 * sliderPos) === lastItem) {
        return
    }
    sliderPos -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: "cubicBezier(.14,.93,.45,.82)"
    });
}

var prevSliderAnime = () => {
    if ((-1 * sliderPos) === 0) {
        return
    }
    sliderPos += containerWidth
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: "cubicBezier(.14,.93,.45,.82)"
    });
}


nextItem.addEventListener('click', function() {
    nextSliderAnime()
    addCounter()
    changeActive()
})

prevItem.addEventListener('click', function() {
    prevSliderAnime()
    removeCounter()
    changeActive()
})

totalSlide.innerHTML = counterFormat(totalSliderItem)
currentSlide.innerHTML = counterFormat(counterCurrent)
counterSlide.innerHTML = counterFormat(counterCurrent)
    // Estados inicias
anime({
    targets: '.jl-item-active',
    width: 65
});
var btnContact = document.querySelector('.jl-btn-contact')
var toggleModal = document.querySelectorAll('.jl-toggle-modal')

// preloader imagem
window.addEventListener('load', function() {
    var pagePreloader = document.querySelector('.jl-preloader')
    pagePreloader.classList.add('jl-fade-out')
    this.setTimeout(function() {
        pagePreloader.style.display = 'none'
    }, 2000)

})

// botão de contato
btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.jl-contact-info')
    boxContact.classList.toggle('jl-is-open')
    this.classList.toggle('jl-change-icon')
})

// overlay e modal orçamento

for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener("click", function() {
        let overlay = document.querySelector('.jl-overlay')
        let modalOrcamento = document.querySelector('#jl-modal-orcamento')
        overlay.classList.toggle('jl-is-open')
        modalOrcamento.classList.toggle('jl-is-open')
        modalOrcamento.classList.toggle('jl-slide-top-in')

    })
}


// biblioteca waypoints para seta scroll down sumir
var myScrollDown = document.querySelector('.jl-scroll-down')
var waypoint = new Waypoint({
    element: myScrollDown,
    handler: function() {
        myScrollDown.classList.toggle('jl-fade-out')
    },
    offset: '80%'
})
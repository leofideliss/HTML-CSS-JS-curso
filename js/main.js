var btnContact = document.querySelector('.jl-btn-contact')

// preloader imagem
window.addEventListener('load', function() {
    var pagePreloader = document.querySelector('.jl-preloader');
    pagePreloader.classList.add('jl-fade-out')
    this.setTimeout(function() {
        pagePreloader.style.display = 'none';
    }, 2000)

})

// botão de contato
btnContact.addEventListener('click', function() {
    var boxContact = document.querySelector('.jl-contact-info')
    boxContact.classList.toggle('jl-is-open')
    this.classList.toggle('jl-change-icon')
})
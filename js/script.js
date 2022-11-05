const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        btnClose = document.querySelector('.menu__close')

hamburger.addEventListener('click', function () {
    menu.classList.add('active')
})

btnClose.addEventListener('click', function () {
    menu.classList.remove('active')
})

const counters = document.querySelectorAll('.skills__statistics-percent'),
    lines = document.querySelectorAll('.skills__statistics-scale span')

    counters.forEach((item, i)=>{
        lines[i].style.width = item.textContent
    })
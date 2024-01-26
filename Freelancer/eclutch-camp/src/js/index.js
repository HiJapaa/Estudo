/* =================================== toggle icon navBar =================================== */
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navBar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('ativo')
}


/* ================================ scroll sections active link ================================ */
let sessoes = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sessoes.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 200
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('ativo')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo')
            })
        }
    })

    /* =================================== sticky navBar =================================== */
    let header = document.querySelector('header')

    header.classList.toggle('stick', window.scrollY > 100)

    /* ============ remove toggle icon and navBar when click navBar link (scroll) ============ */
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('ativo')
}
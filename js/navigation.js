nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrolly> 223) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')


toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

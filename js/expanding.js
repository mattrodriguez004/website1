panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click' , () => {
        panel.classlist.add('active')
    })
})


function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

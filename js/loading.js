loadText = document.querySelector('.loading.text')
bg = document.querySelector('.bg')

load = 0


function blurring () {
    load = load + 1


    if(load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100

    bg.style.filter = `blur(${30 - (load/100)*30}px)`

}

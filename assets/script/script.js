const section = document.getElementsByClassName('section-img');
const footer = document.getElementsByClassName('carousel-footer');
const carousel = document.getElementsByClassName('carousel-content');
const arrowR = document.getElementsByClassName('arrow-right');
const arrowL = document.getElementsByClassName('arrow-left');
const tooltip = document.getElementsByClassName('tooltip');
const back = document.getElementsByClassName('back');
const arrow = [arrowR[0], arrowL[0]];
let move1 = 0;
let i = 0

move()

carousel[0].style.marginLeft = '0px'
let dis = (carousel[0].scrollWidth - carousel[0].clientWidth) / 2 + 10

if (carousel[0].scrollWidth == carousel[0].clientWidth) {
    setTimeout(() => {
        dis = (carousel[0].scrollWidth - carousel[0].clientWidth) / 2 + 10
    }, 500)
}

function move() {
    arrow[0].addEventListener ('click', () => {
        move1 = move1 - dis
        if (carousel[0].scrollWidth == carousel[0].clientWidth) {
            move1 = 0
        }
        
        carousel[0].style.marginLeft = move1 + 'px'
    })

    arrow[1].addEventListener ('click', () => {
        move1 = move1 + dis

        carousel[0].style.marginLeft = move1 + 'px'
    })
}

function openTooltip() {
    tooltip[0].style.animation = 'scale .35s'
    tooltip[0].children[0].children[0].src = this.src
    tooltip[0].children[1].children[1].innerText = this.parentElement.parentElement.children[1].innerText
    Array.from(tooltip[0].children[1].children[0].children).forEach(item => {
        item.children[0].innerText = this.parentElement.parentElement.children[2].children[i].innerText
        i = i + 1
    })
    i = 0
    Array.from(tooltip[0].children[1].children[1].children).forEach(item => {
        item.innerText = this.parentElement.parentElement.children[3].children[i].innerText
        i = i + 1
    })
    i = 0
    tooltip[0].children[1].children[3].innerText = this.parentElement.parentElement.children[3].innerText
    tooltip[0].style.display = 'block'
}

Array.from(section).forEach(item => {
    item.addEventListener('click', openTooltip)
})

back[0].addEventListener('click', () => {
    tooltip[0].style.animation = 'scale-out .25s'
    setTimeout(() => {
        tooltip[0].style.display = ''
    }, 200)
})
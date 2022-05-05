const section = document.getElementsByClassName('section-img');
const footer = document.getElementsByClassName('carousel-footer');
const carousel = document.getElementsByClassName('carousel-content');
const arrowR = document.getElementsByClassName('arrow-right');
const arrowL = document.getElementsByClassName('arrow-left');
const arrow = [arrowR[0], arrowL[0]];
let move1 = 0;

move()

carousel[0].style.marginLeft = '0px'
let dis = (carousel[0].scrollWidth - carousel[0].clientWidth) / 2 + 10

if (carousel[0].scrollWidth == carousel[0].clientWidth) {
    setTimeout(() => {
        dis = (carousel[0].scrollWidth - carousel[0].clientWidth) / 2 + 10
    }, 500)
}

function move(){
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

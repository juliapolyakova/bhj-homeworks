const reveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', toShow)

function toShow() {
    const viewportHeight = window.innerHeight;
    
    for (let element of reveal) {
        const revealTop = element.getBoundingClientRect().top;
        const revealBottom = element.getBoundingClientRect().bottom;
        if (revealTop < viewportHeight && revealBottom > 0) {
            element.classList.add('reveal_active')
        } else {
            element.classList.remove('reveal_active')
        }
    }
}

const rotator = Array.from(document.querySelectorAll('.rotator__case'));
const caseActive = document.querySelector('.rotator__case_active');
caseActive.style.color = caseActive.getAttribute('data-color');

let i = 0;
let interval = 1000;

function showNext(){
    rotator[i].classList.remove('rotator__case_active');
        
    i++;
    
    if (i === rotator.length) {
        i = 0;
    }
    
    rotator[i].classList.add('rotator__case_active');    
    const caseActive = document.querySelector('.rotator__case_active');
    caseActive.style.color = caseActive.getAttribute('data-color');
    interval = caseActive.getAttribute('data-speed');

    setTimeout(showNext, interval)
}


setTimeout(showNext, interval)


const rotator = Array.from(document.querySelectorAll('.rotator__case'));

let i = 0;
let interval = 1000;

function showNext(){
    const caseActive = document.querySelector('.rotator__case_active');
    caseActive.style.color = caseActive.getAttribute('data-color');
    
    interval = caseActive.getAttribute('data-speed');
    
    rotator[i].classList.toggle('rotator__case_active');
    i++;
    if (i === rotator.length) {
        i = 0;
    }

    rotator[i].classList.toggle('rotator__case_active');    
      
}


setInterval(showNext, interval)

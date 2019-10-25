const next = document.getElementsByClassName('slider__arrow_next')[0];
const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const slideItem = Array.from(document.getElementsByClassName('slider__item'));

let activeSlide = 0;

next.onclick = function() {
    activeSlide++;

    for (let slide of Array.from(slideItem)) {
        slide.className = 'slider__item';
    }

    if (activeSlide >= slideItem.length) {
        activeSlide = 0;
        slideItem[activeSlide].classList.add('slider__item_active');
    } 
    
    slideItem[activeSlide].classList.add('slider__item_active');
}

prev.onclick = function() {
    activeSlide--;

    for (let slide of Array.from(slideItem)) {
        slide.className = 'slider__item';
    }

    if (activeSlide < 0) {
        activeSlide = slideItem.length - 1;
        slideItem[activeSlide].classList.add('slider__item_active');
    }

    slideItem[activeSlide].classList.add('slider__item_active');
}
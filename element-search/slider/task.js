const next = document.getElementsByClassName('slider__arrow_next')[0];
const prev = document.getElementsByClassName('slider__arrow_prev')[0];
const slideItem = Array.from(document.getElementsByClassName('slider__item'));

let activeSlide = 0;

const dots = Array.from(document.getElementsByClassName('slider__dot'));
dots[activeSlide].classList.add('slider__dot_active');

next.onclick = function() {
    activeSlide++;

    for (let slide of Array.from(slideItem)) {
        slide.className = 'slider__item';
    }

    for (let dot of Array.from(dots)) {
        dot.className = 'slider__dot';
    }

    if (activeSlide >= slideItem.length) {
        activeSlide = 0;
        slideItem[activeSlide].classList.add('slider__item_active');
        dots[activeSlide].classList.add('slider__dot_active');
    } 
    
    slideItem[activeSlide].classList.add('slider__item_active');
    dots[activeSlide].classList.add('slider__dot_active');
}

prev.onclick = function() {
    activeSlide--;

    for (let slide of Array.from(slideItem)) {
        slide.className = 'slider__item';
    }

    for (let dot of Array.from(dots)) {
        dot.className = 'slider__dot';
    }

    if (activeSlide < 0) {
        activeSlide = slideItem.length - 1;
        slideItem[activeSlide].classList.add('slider__item_active');
        dots[activeSlide].classList.add('slider__dot_active');
    }

    slideItem[activeSlide].classList.add('slider__item_active');
    dots[activeSlide].classList.add('slider__dot_active');
}
let menuLinks = document.querySelectorAll('.menu__link');

// Вариант где открыты оба menuSub
for (let link of Array.from(menuLinks)) {
    let menuSub = link.parentElement;
    link.onclick = function() {
        if (menuSub.querySelector('ul.menu_sub').className === 'menu menu_sub') {
            menuSub.querySelector('ul.menu_sub').classList.add('menu_active');
        } else {
            menuSub.querySelector('ul.menu_sub').classList.remove('menu_active');
        }
        
        return false;
    }
}




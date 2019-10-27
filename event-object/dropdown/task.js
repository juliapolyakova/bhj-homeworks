const item = document.querySelectorAll('.dropdown__item');
const list = document.querySelector('.dropdown__list');
const value = document.querySelector('.dropdown__value');
const links = Array.from(document.querySelectorAll('.dropdown__link'));

value.addEventListener('click', function(){
    list.classList.toggle('dropdown__list_active');
});

for (let link of links) {
    link.addEventListener('click', toChange);
}

function toChange(event) {
    event.preventDefault();
    value.textContent = event.target.textContent;
    list.classList.remove('dropdown__list_active');
}
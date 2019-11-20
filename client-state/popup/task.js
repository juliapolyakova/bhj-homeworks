const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

document.addEventListener('DOMContentLoaded', () => {
    if (!getCookie('modal=closed')) {
        modal.classList.add('modal_active');
    }
});

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
            .pop()
            .split(";")
            .shift();
    }
}

modalClose.addEventListener('click', () => {
    document.cookie = 'modal=closed';
    modal.classList.remove('modal_active');
    
})
const modalMain = document.getElementById('modal_main');
const modalClose = Array.from(document.getElementsByClassName('modal__close_times'));
const showSuccess = document.getElementsByClassName('show-success');
const modalSuccess = document.getElementById('modal_success');

modalMain.classList.add('modal_active');

showSuccess[0].onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}

modalClose[0].onclick = function() {
    modalMain.classList.remove('modal_active');
}

modalClose[1].onclick = function() {
    modalSuccess.classList.remove('modal_active');
}
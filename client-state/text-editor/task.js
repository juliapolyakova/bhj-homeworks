const editor = document.getElementById('editor');
const clear = document.getElementById('clear');


editor.addEventListener('input', toSave);
document.addEventListener('load', printContent);
clear.addEventListener('click', toClear);

function toSave() {
    localStorage.content = editor.value;
}

function printContent() {
    if (localStorage.content) {
        editor.value = localStorage.content;
    }
}

function toClear() {
    localStorage.clear();
    editor.value = '';
}

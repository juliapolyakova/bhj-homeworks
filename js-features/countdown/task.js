const seconds = document.getElementById('timer');
const timer = function() {
    seconds.textContent--;
    if (seconds.textContent == 0) {
        alert('Вы победили в конкурсе');
        clearInterval(interval);
    }
}
let interval = setInterval(timer, 1000);



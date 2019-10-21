const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const speed = document.getElementById('speed');
let start = Date.now();
let end;
let difference;

cookie.onclick = function() {
    counter.textContent++;
    if (counter.textContent % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 300;
    }
    end = Date.now();
    difference = (1000 / (end - start));
    speed.textContent = difference;
}



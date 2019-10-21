const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const speed = document.getElementById('speed');
let start = 0;
let difference;

cookie.onclick = function() {
    let end = Date.now();
    counter.textContent++;
    if (counter.textContent % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 300;
    }
    
    difference = (1000 / (end - start));
    speed.textContent = difference;
    start = Date.now();
}



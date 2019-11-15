const loader = document.getElementById('loader');
const list = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        loader.classList.remove('loader_active');

        let data = JSON.parse(xhr.responseText);
        let valute = data.response.Valute;
        let output = '';
        for (let item in valute) {
            let content = `<div class="item">
            <div class="item__code">${valute[item].CharCode}</div>
            <div class="item__value">${valute[item].Value}</div>
            <div class="item__currency">руб.</div>
            </div>`;
            output += content;
        }
        list.insertAdjacentHTML('beforeend', output);

    }
})
xhr.send();
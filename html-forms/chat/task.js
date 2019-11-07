const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');

})

function randomMessages(){
    let phrases = [
        'Добрый день! До свидания!',
        'Кто тут?',
        'Где ваша совесть?',
        'Не пишите сюда больше',
        'Все операторы сейчас заняты',
        'Мы ничего не будем продавать',
        'У нас все хорошо, а у вас?'
    ];
    let random = Math.floor(Math.random() * phrases.length);
    return phrases[random];
} 

input.addEventListener('keyup', sendMessage);

function sendMessage(event) {
    if (event.keyCode === 13 && input.value != '') {
        const time = new Date().getHours() + ':' + new Date().getMinutes();
        messages.innerHTML += `
          <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${input.value}</div>
          </div>
          <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">${randomMessages()}</div>
          </div>
        `;
        input.value = '';
    }
}
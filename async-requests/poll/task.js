const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');



let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        

        let recievedData = JSON.parse(xhr.responseText);
        let title = recievedData.data.title;
        pollTitle.innerText = title;
        for (let answer of recievedData.data.answers) {
            const text = `<button class="poll__answer">${answer}</button>`;
            pollAnswer.insertAdjacentHTML('beforeend', text);            
        }

        const buttons = document.querySelectorAll('.poll__answer');
        for (let button of buttons) {
            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        }
    }
})
xhr.send();
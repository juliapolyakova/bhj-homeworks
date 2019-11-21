const welcome = document.querySelector('.welcome');
const button = document.getElementById('signin__btn');
const form = document.querySelector('.signin');
const userId = document.getElementById('user_id');


window.addEventListener('load', () => {
    form.classList.add('signin_active');
})

button.addEventListener('click', toSend);

function toSend(event) {
    event.preventDefault();

    const signinForm = document.getElementById('signin__form');
    const formData = new FormData(signinForm);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            let recievedData = JSON.parse(xhr.responseText);
            
            if (recievedData.success) {
                localStorage.userId = recievedData.user_id;
                form.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = localStorage.userId;
            } else {
                alert('Неверный логин/пароль');
            }
        }
    })
    xhr.send(formData);
}



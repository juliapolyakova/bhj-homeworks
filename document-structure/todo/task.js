const tasksAdd = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

tasksAdd.addEventListener('click', addTask);

function addTask(event) {
    event.preventDefault();
    let text = document.getElementById('task__input');
    if (text.value !== '') {

        let newTask =  `<div class="task">
                    <div class="task__title">
                        ${text.value}
                   </div>
                   <a href="#" class="task__remove">&times;</a>
                   </div>`;

        taskList.insertAdjacentHTML('beforeEnd', newTask);
        text.value = '';
    }
}

taskList.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.classList.contains('task__remove')) {    
           event.target.parentElement.remove();
       }
    })



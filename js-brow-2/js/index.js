const inputAdd = document.getElementById('addTask');
const btnAdd = document.getElementById('btnAdd');

const taskList = document.querySelector('.taskList');
const listTaskItem = document.getElementById('listTaskItem');


btnAdd.addEventListener('click', function(event) {
    event.preventDefault();
    const text = inputAdd.value;

    if (text == '') {
        alert('No puedes agregar elementos vacíos');
    } else {
        
        let taskItem = document.createElement("li");
        taskItem.setAttribute('class', 'liCustom')
        listTaskItem.appendChild(taskItem);

        let inputCheck = document.createElement("input");
        inputCheck.setAttribute("type", "checkbox");
        taskItem.appendChild(inputCheck);

        let labelCheck = document.createElement("label");
        taskItem.appendChild(labelCheck);

        let btnDelete = document.createElement('button');
        btnDelete.setAttribute("type", "button");
        btnDelete.innerHTML = "Eliminar";
        taskItem.appendChild(btnDelete);

        labelCheck.textContent = text;
        inputAdd.value = '';

        inputCheck.addEventListener('change', function() {
            if (inputCheck.checked) {
                labelCheck.style.textDecoration = 'line-through';
            } else {
                labelCheck.style.textDecoration = 'none';
            }
        })

        btnDelete.addEventListener('click', function() {
            taskItem.parentNode.removeChild(taskItem);
        })
        
        
    }


})
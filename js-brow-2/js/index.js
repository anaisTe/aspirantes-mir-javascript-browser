const inputAdd = document.getElementById('addTask');
const btnAdd = document.getElementById('btnAdd');

const taskList = document.querySelector('.taskList');
const listTaskItem = document.getElementById('listTaskItem');

let btnDeleteAll = document.createElement("button");
btnDeleteAll.setAttribute("type", "button");
btnDeleteAll.setAttribute("class", "btnDeleteAll");
btnDeleteAll.innerHTML = "Eliminar tareas resueltas";
taskList.appendChild(btnDeleteAll);


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
        inputCheck.setAttribute("id", listTaskItem.childElementCount);
        inputCheck.setAttribute("title", text);
        inputCheck.setAttribute("completed", false);
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
                inputCheck.setAttribute("completed", true);
                labelCheck.classList.add("is-completed");
            } else {
                inputCheck.setAttribute("completed", false);
                labelCheck.classList.remove("is-completed");
            }
        })

        btnDelete.addEventListener('click', function() {
            taskItem.parentNode.removeChild(taskItem);
        })

        document.querySelector(".btnDeleteAll").addEventListener('click', function(e) {
            e.preventDefault();
            let statusInput = inputCheck.getAttribute("completed");
            
            if (statusInput == "true") {
                if(taskItem.parentNode) {
                    taskItem.parentNode.removeChild(taskItem);
                }
            }
        })
    }


})


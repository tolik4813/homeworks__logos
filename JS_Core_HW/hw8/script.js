let taskList = document.getElementById("task-list");
let inputTask = document.getElementById("input-task");

function addTask() {
    let task = inputTask.value;
    if (task !== "") {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", function () {
            if (this.checked) {
                if (document.querySelectorAll("input[type='checkbox']:not(:checked)").length != 0) {
                    li.remove();
                }
                if (document.querySelectorAll("input[type='checkbox']:not(:checked)").length === 0) {
                    this.checked = false;
                    alert('Останній таск зі списку Ви не можете видалити');
                }
            }
        });
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(task));
        taskList.appendChild(li);
        inputTask.value = "";
    } else {
        alert('Ви не можете добавити пусте поле');
    }
}

console.log('Пусте поле не можна добавити');

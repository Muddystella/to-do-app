function addTask() {
    const taskText = document.getElementById('taskInput').value;
    if (taskText === '') {
        alert("Please Write Task")
    } else {
        const li = document.createElement('li');
        li.innerHTML = `${taskText}<button class="btn2" onclick="removeTask(this)">Remove</button>`;
        document.getElementById('taskList').appendChild(li);

        taskInput.value = '';
    }
}

function removeTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);
}
function serialize(formNode) {
    return formNode.elements;
}

function currentDate(){
    let date = new Date();

    let format = "";
    if (String(date.getMonth()).length === 1) {
        format = "0";
    }
    return String(`${date.getDate()}.${format}${date.getMonth() + 1}.${date.getFullYear()}`)
}

function contentTask(task, profession, statusTask, executor) {
    return {
        date: currentDate(),
        task,
        profession,
        statusTask,
        executor,
    }
}

function renderTask(content){
    elem = document.createElement('article');
    elem.classList.add('tasks');
    if (content.executor != ""){
        let p = document.querySelector('p[executor]');
        p.classList.add("executor");
    }
    const templateDiv = `
    <!-- 1 -->
    <div class="flex flex-row justify-between">
        <div>
            <p>${content['date']}</p>
            <h6>${content['task']}</h6>
        </div>

        <!-- Пометка професии исполнителя -->
        <p class="${content["profession"]}"></p>
    </div>

    <!-- 2 -->
    <div class="flex justify-between">
        <!-- Состояние -->
        <div class="${content["statusTask"]}"></div>

        <p class="">${content["executor"]}</p>
    </div> 
    `;
    elem.innerHTML = templateDiv;
    document.getElementById("list").append(elem);
}

function createNewTask(event) {
    event.preventDefault();
    const formElements = serialize(document.getElementById('createTaskForm'));

    const newContentTask = new contentTask(formElements["newTask"].value, "frontend-dev", "take", "");
    renderTask(newContentTask)
}

// Обработчики
document.getElementById('createTaskForm').addEventListener('submit', createNewTask)
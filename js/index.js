// создание новых заданий
function serialize(formNode) {
    return formNode.elements;
}

function currentDate() {
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

function renderTask(content) {
    elem = document.createElement('article');
    elem.classList.add('tasks');
    if (content.executor != "") {
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

document.getElementById('createTaskForm').addEventListener('submit', function createNewTask(event) {
    event.preventDefault();
    const formElements = serialize(document.getElementById('createTaskForm'));

    const newContentTask = new contentTask(formElements["newTask"].value, formElements['profession'].value, "take", "");
    renderTask(newContentTask);
});
// ------------------------------ \\


// динамическое изменение высоты textarea
document.querySelector("#createTaskForm").querySelector('textarea').addEventListener("input", function () {
    let elem = document.querySelector("[name='newTask']");

    elem.style.height = "1.5em";
    elem.style.height = elem.scrollHeight + 'px';
});
// ------------------------------ \\


// взятие задания
let takeTaskArr = document.querySelectorAll(".take")
for (let elem of takeTaskArr){
    elem.addEventListener('click', takeTask);
}


function takeTask(event) {
    let elem = event.target; //получение элемента

    let status = elem.querySelector(".take");
    let executor = elem.querySelector('[executor]');
    
    status.className("inProgress");
    executor.className("executor");

    executor.innerHTML = "Current user";
}
// ------------------------------ \\
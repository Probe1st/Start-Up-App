// получение дочерних элементов
function serialize(formNode) {
    return formNode.elements;
}

// возращение текущей даты 
function currentDate() {
    let date = new Date();

    let format = "";
    if (String(date.getMonth()).length === 1) {
        format = "0";
    }
    return String(`${date.getDate()}.${format}${date.getMonth() + 1}.${date.getFullYear()}`)
}

// объект для имитации получения объекта с сервера
function contentTask(task, profession, statusTask, executor) {
    return {
        date: currentDate(),
        task,
        profession,
        statusTask,
        executor,
    }
}

// шаблон верстки для карточек
function templateCardOfTask(object) {
    return {
        layout: `
        <!-- 1 -->
        <div class="flex flex-row justify-between">
            <div>
                <p>${object['date']}</p>
                <h6>${object['task']}</h6>
            </div>
        
            <!-- Пометка професии исполнителя -->
            <p class="${object["profession"]}"></p>
        </div>
        
        <!-- 2 -->
        <div class="flex justify-between">
            <!-- Состояние -->
            <div status class="${object["statusTask"]}"></div>
        
            <p executor class="">${object["executor"]}</p>
        </div> 
        `
    }
};

// создание блока новой задачи 
function createNewTask(content) {
    elem = document.createElement('article');

    elem.classList.add('tasks');

    if (content.executor != "") {
        let p = document.querySelector('p[executor]');
        p.classList.add("executor");
    };

    elem.innerHTML = templateCardOfTask(content).layout.valueOf();
    return elem;
}

// выводит elem внутри place
function render(place, elem) {

    place.append(elem);

    addHandlerOnTake();
}

// добавление новой задачи
document.getElementById('createTaskForm').addEventListener('submit', event => {
    
    event.preventDefault();
    const formElements = serialize(document.getElementById('createTaskForm'));

    const content = new contentTask(formElements["newTask"].value, formElements['profession'].value, "take", "");
    let place = document.getElementById("list");
    let newElem = createNewTask(content);

    render(place, newElem);
});
// ------------------------------ \\


// динамическое изменение высоты textarea
document.querySelector("#createTaskForm").querySelector('textarea').addEventListener("input", () => {
    let elem = document.querySelector("[name='newTask']");

    elem.style.height = "1.5em";
    elem.style.height = elem.scrollHeight + 'px';
});
// ------------------------------ \\


// взятие задания
function addHandlerOnTake() {
    let takeTaskArr = document.querySelectorAll(".take")
    for (let elem of takeTaskArr) {
        elem.addEventListener('click', takeTask);
    }
}
addListenerOnTake();

function takeTask(event) {
    let elem = event.target.closest(".tasks"); //получение элемента

    let status = elem.querySelector("[status]");
    let executor = elem.querySelector('[executor]');

    status.className = "inProgress";
    executor.className = "executor";

    executor.innerHTML = "Current user";

    event.target.removeEventListener('click', takeTask)
    addListenerOnInProgress()
}
// ------------------------------ \\


// Завершение задания
function addListenerOnInProgress() {
    let takeInProgressArr = document.querySelectorAll(".inProgress")
    for (let elem of takeInProgressArr) {
        elem.addEventListener('click', completeTask);
    }
}
addListenerOnInProgress();

function completeTask(event) {
    let elem = event.target.closest(".tasks"); //получение элемента

    let status = elem.querySelector("[status]");

    status.className = "complete";

    event.target.removeEventListener('click', completeTask)
}
// ------------------------------ \\

// Переключение страниц
let activeId = "index";

document.querySelector("[pageSwitcher]").addEventListener('click', function(){
    let elem = this;
    let passiveId = elem.getAttribute("pageSwitcher");

    document.querySelector(`#${activeId}`).setAttribute("hidden", "");
    document.querySelector(`#${passiveId}`).removeAttribute("hidden");

    activeId = passiveId;
})
// ------------------------------ \\

//adding table and tasks (line 1-41)


let counter = 1;
let counterTask = 1

const addTable = () => {
    
let list = `
            <div class="task-wrapper" id=${`table${counter.toString()}`} ">
                <div class="task-header">
                    <p class="task-category" onclick="editTaskTitle('table${counter.toString()}')"  >To Do</p>
                    <button class="addTaskBtn" onclick="addTask('table${counter.toString()}')">Add Task</button>
                </div>
            </div>
            </div>
            `
    const main_wrapper = document.querySelector(".main-wrapper");
    main_wrapper.insertAdjacentHTML("beforeend",list);
    counter+=1;

}

const addTask = (id) => {
    let listItem = `    
            <div class="task-item" id=${`task${counterTask.toString()}`}>
                <p onclick="editTaskContent('task${counterTask.toString()}')">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <div class="task-icons">
                    <ul>
                        <li><img src="./assets/images/justify.png"></li>
                        <li><img src="./assets/images/checkbox.png"><span>4/8</span></li>
                        <li><img src="./assets/images/attach.png"><span>2</span></li>
                        <li><img src="./assets/images/comments.png"><span>4</span></li>
                    </ul>
                    <img class="user-avatar" src="./assets/images/man_1.png">
                </div>
            </div>
`
    let task_wrapper = document.getElementById(id);
    console.log(id)
    task_wrapper.insertAdjacentHTML("beforeend",listItem)
    counterTask+=1;

}


// editing the title part


const headTitle = document.querySelector(".header-section > div");
const headSection = document.querySelector(".header-section");

headTitle.addEventListener("click", () => {
    let value = headTitle.innerText;
    headTitle.innerText = "";
    headTitle.style.width = "0px";

    let input = document.createElement("input");
    let btn = document.createElement("button");
    btn.innerText = "Submit";

    headSection.appendChild(input);
    headSection.appendChild(btn);

    input.focus();
    input.value = value;

    btn.addEventListener("click", () => {
        headTitle.innerText = input.value;
        headTitle.style.width = "100%"
        headSection.removeChild(input);
        headSection.removeChild(btn);
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            btn.click();
        }
    });

});

// editing the task title part

const editTaskTitle = (id) => {
    const taskSection = document.getElementById(id);
    const taskTitle = document.querySelector(`#${id} > .task-header > .task-category`);
    const taskHeader = document.querySelector(`#${id} > .task-header`);

    let value = taskTitle.innerText;
    taskTitle.innerText = "";
    taskHeader.style.display = "none";

    let input = document.createElement("input");
    let btn = document.createElement("button");
    btn.innerText = "Submit";

    taskSection.appendChild(input);
    taskSection.appendChild(btn);

    input.focus();
    input.value = value;

    btn.addEventListener("click", () => {
        taskTitle.innerText = input.value;
        taskHeader.style.display = "flex";

        taskSection.removeChild(input);
        taskSection.removeChild(btn);
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            btn.click();
        }
    });
}

//editing the task content part
const editTaskContent = (id) => {
    const taskContentSection = document.getElementById(id);
    const taskContent = document.querySelector(`#${id} > p`);

    let value = taskContent.innerText;
    taskContent.innerText = "";
    taskContent.style.display = "none";

    let input = document.createElement("input");
    let btn = document.createElement("button");
    btn.innerText = "Submit";

    taskContentSection.appendChild(input);
    taskContentSection.appendChild(btn);

    input.focus();
    input.value = value;

    btn.addEventListener("click", () => {
        taskContent.innerText = input.value;
        taskContent.style.display = "flex";

        taskContentSection.removeChild(input);
        taskContentSection.removeChild(btn);
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            btn.click();
        }
    });
}
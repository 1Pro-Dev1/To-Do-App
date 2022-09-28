let input = document.querySelector(".add input");
let addBtn = document.querySelector(".add span");
let content = document.querySelector(".content");
let noTask = document.querySelector(".no-tasks");
let counter = document.querySelector(".count span");
let complate = document.querySelector(".complate span");


window.onload = () => {
    input.focus();
};

addBtn.addEventListener("click", () => {
    if (input.value == "" || input.value == null) {
        alert("You have to add content to add It to the list")
    } else {

        if (document.querySelector(".content .no-tasks")){
            document.querySelector(".content .no-tasks").remove()
        }
        
        let mainSpan = document.createElement("span");
        let dltBtn = document.createElement("span");

        mainSpan.innerText = input.value;
        dltBtn.innerText = `Delete`;
        dltBtn.className = "dlt-btn"

        mainSpan.className = "task-box"

        mainSpan.appendChild(dltBtn);

        content.appendChild(mainSpan);

        input.value = "";
        input.focus();

        counter.innerHTML++;
    }
}) ;


document.addEventListener("click", (e) =>{


    if (e.target.className == "dlt-btn"){

        if (e.target.parentNode.classList.contains("finish")){
            complate.innerHTML--;
        }
        e.target.parentNode.remove()
        counter.innerHTML--;

        if (counter.innerHTML == 0 || counter.innerHTML == "0"){
            addNoTask()
        }
    }

    if (e.target.classList.contains("task-box")){
        e.target.classList.toggle("finish");

        let doneTasks = document.querySelectorAll(".content .finish").length;

        complate.innerHTML = doneTasks;
    }
});

function addNoTask(){
    let noTaskSpan = document.createElement('span');

    noTaskSpan.innerHTML = "No Tasks To Show";
    noTaskSpan.classList.add("no-tasks");

    content.appendChild(noTaskSpan);
}
const arr = [{ name: "Wash Dishes", duedate: "2023/12/4" }];

output();
function output() {
    let todoListHTML = "";

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const { name, duedate } = element;
        const todoList = `
            <div id="myDiv" class="todo-bottom-new">
            <div>
            <button id="styleButton" class="finished-task" onclick="toggleStyle(this)">
            </button>
            </div>
            <div>${name}</div> 
            <div> ${duedate}</div>
            <button onclick=
            "
            arr.splice(${i},1);
            output();
            "
            class="delete-todo">
            </button>
            <hr width="967px ">
            </div>
                                    `;
        todoListHTML += todoList;
    }

    document.querySelector(".todo-bottom").innerHTML = todoListHTML;
}
function addTodo() {
    const inputValue = document.querySelector(".inputText");
    const name = inputValue.value;
    const duedateElement = document.querySelector(".inputDate");
    const duedate = duedateElement.value;
    arr.push({ name, duedate });
    inputValue.value = "";
    output();
}
// *************************************************
//* Most Important It changes the style of new button created
function toggleStyle(button) {
    var div = button.parentNode;
    button.classList.toggle("buttonStyle");
}

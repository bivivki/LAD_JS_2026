// 1. Создание To Do List - необходимо средствами JS создать страницу на которой будут
// элементы: header содержащий заголовок страницы, контейнер с контентом страницы, поле
// ввода input, список элементов, кнопка добавления To Do (Стили возможно добавлять через
// CSS).
// 2. Добавить возможность добавления To Do в список с помощью поля ввода input и кнопки
// создания нового To Do.
const middlePosition = document.createElement('style');
middlePosition.textContent = `
    .middle-position {
        display: flex;
        justify-content: center;
        gap: 40px;
    }`;

document.head.append(middlePosition);

let done = document.createElement('style');
done.textContent = `.done{
    text-decoration: line-through;
    color:grey;
}`;
document.head.append(done);

const header = document.createElement('header');
const h1 = document.createElement('h1');
document.body.append(header);
header.append(h1);
h1.textContent = 'Your To Do List For Today';
h1.style.backgroundColor = "blue";
h1.style.color = "white";
h1.style.borderRadius = "10px";
h1.style.border = "4px solid black";
h1.classList.add('middle-position');

const container = document.createElement('div');
container.className = "container";
header.after(container);
container.style.marginBottom = "20px";

const container__input = document.createElement('div');
container__input.className = "container__input";
container.append(container__input);
container__input.classList.add('middle-position');

const inputToDo = document.createElement('input');
inputToDo.id = "inputToDo";
inputToDo.placeholder = "Введите, что надо сделать?";
inputToDo.className = "inputToDo";
inputToDo.style.width = "400px";
container__input.append(inputToDo);

const buttonToDo = document.createElement('button');
inputToDo.after(buttonToDo);
buttonToDo.textContent = "Добавить дело";
buttonToDo.style.color = "white";
buttonToDo.style.backgroundColor = "blue";
buttonToDo.style.border = "none";
buttonToDo.style.borderRadius = "5px";

const toDoList = document.createElement('ul');
toDoList.className  = "container__todolist";
toDoList.style.border = "4px solid black";
toDoList.style.margin = "0 auto";
toDoList.style.padding = "0";
toDoList.style.maxWidth = "auto";
toDoList.style.listStyleType = "none";
toDoList.style.fontSize = "36px";
toDoList.style.textAlign = "center";
container.after(toDoList);

const line = document.createElement('hr');

buttonToDo.addEventListener('click', function setNewToDoGetList(event){
if (!inputToDo.value) return; 
    const task = document.createElement('li');
    task.textContent = inputToDo.value;
    task.className = "task";
    toDoList.append(task);
    inputToDo.value = "";
    const line = document.createElement('hr');
    line.style.margin = "0";
    line.style.color = "blue";
    task.after(line);
    return tasks = document.querySelectorAll('.task');
    }
    
);

// 3. Добавить возможность удаления (либо зачеркивания) элемента списка по клику по нему.
// Для этого почитать про делегирование.


toDoList.addEventListener('click', function setDone(event) {
    if (event.target.matches('.task')) {
        event.target.classList.toggle('done');
    }
  
});










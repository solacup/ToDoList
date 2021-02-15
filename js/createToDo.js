const toDoForm = document.querySelector(".todoForm");
const toDoInput = toDoForm.querySelector("input");

const notToDoList = document.querySelector("#not-toDoList");
const doneToDoList = document.querySelector("#done-toDoList");

const TODOS_LS = "toDos";

let toDosArray = [];

function deleteToDo(event) {
  const btn = event.target;
  const span = btn.parentNode;
  const li = span.parentNode;
  li.remove();

  const cleanToDos = toDosArray.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDosArray = cleanToDos;
  saveToDos();
}

function switchToDo(event) {
  const btn = event.target;
  const span = btn.parentNode;
  const li = span.parentNode;
  li.remove();

  const switchToDos = toDosArray.find(function (toDo) {
    return toDo.id === parseInt(li.id);
  });

  switchToDos.status = !switchToDos.status;

  const idx = toDosArray.indexOf(switchToDos);
  toDosArray.splice(idx, 1);
  paintToDo(switchToDos.text, switchToDos.status);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text, toDo.status);
    });
  }
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDosArray));
}

function paintToDo(text, status) {
  const li = document.createElement("li");
  const btns = document.createElement("span");
  const delBtn = document.createElement("button");
  const swBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = +new Date();
  const currentStatus = status;
  delBtn.innerHTML = '<i class="far fa-minus-square"></i>';
  if (currentStatus) {
    swBtn.innerHTML = '<i class="far fa-caret-square-left"></i>';
  } else {
    swBtn.innerHTML = '<i class="far fa-check-square"></i>';
  }
  delBtn.classList.add("toDoList__delBtn");
  swBtn.classList.add("toDoList__swBtn");
  delBtn.addEventListener("click", deleteToDo);
  swBtn.addEventListener("click", switchToDo);
  span.innerText = text;
  btns.appendChild(swBtn);
  btns.appendChild(delBtn);
  li.appendChild(span);
  li.appendChild(btns);
  li.classList.add("toDoList__element");
  li.id = newId;
  if (currentStatus) {
    doneToDoList.appendChild(li);
  } else {
    notToDoList.appendChild(li);
  }
  const toDoObj = {
    text: text,
    id: newId,
    status: currentStatus,
  };
  toDosArray.push(toDoObj);
  saveToDos();
}

function handleToDoForm(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue, false);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleToDoForm);
}

init();

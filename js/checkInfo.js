const NAME = "name";
const COLOR = "color";

const indexPage =
  "file:///C:/Users/sol/Desktop/code/ToDoList/html/index.html";
const toDoPage =
  "file:///C:/Users/sol/Desktop/code/ToDoList/html/toDo.html";

function checkInfo() {
  const currentUser = localStorage.getItem(NAME);
  const currentTheme = localStorage.getItem(COLOR);

  if (currentUser !== null && currentTheme !== null) {
    if (location.href === indexPage)
      location.href = "../html/toDo.html";
  } else {
    if (location.href === toDoPage)
      location.href = "../html/index.html";
  }
}

function init() {
  checkInfo();
}

init();

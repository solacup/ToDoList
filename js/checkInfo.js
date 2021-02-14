const NAME = "name";
const COLOR = "color";

function checkInfo() {
  const currentUser = localStorage.getItem(NAME);
  const currentTheme = localStorage.getItem(COLOR);

  if (currentUser !== null && currentTheme !== null) {
    location.href = "../html/toDo.html";
  }
}

function init() {
  checkInfo();
}

init();

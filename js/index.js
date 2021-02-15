const nameContainer = document.querySelector("#name-container");
const nameForm = nameContainer.querySelector("form");
const nameInput = nameForm.querySelector("input");

const colorContainer = document.querySelector("#color-container");
const colorText = colorContainer.querySelector("h1");
const colorList = colorContainer.querySelector("ul");
const colors = Array.from(colorList.querySelectorAll("li"));
const colorButton = colorContainer.querySelector("button");

const checkContainer = document.querySelector("#check-container");
const checkButton = checkContainer.querySelector("button");

const FADE_TIME = 950;
const SELECTED_BORDER = "4px solid #94b5c0";

let currentSelect = null;

function hiddenElement(element) {
  if (element.classList.contains("show"))
    element.classList.remove("show");
  element.classList.add("hidden");
  setTimeout(function () {
    element.classList.add("no-display");
  }, FADE_TIME);
}

function showElement(element, delay) {
  setTimeout(function () {
    element.classList.remove("no-display");
    element.classList.add("show");
  }, delay);
}

function saveInfo(info, text) {
  localStorage.setItem(info, text);
}

function handleNameSubmit(event) {
  event.preventDefault();
  const name = nameInput.value;
  saveInfo("name", name);
  nameContainer.classList.add("hidden");
  hiddenElement(nameContainer);
  showElement(colorContainer, 1100);
}

function handleColorClick(event) {
  if (currentSelect !== null) currentSelect.style.border = "none";
  currentSelect = event.target;
  currentSelect.style.border = SELECTED_BORDER;
}

function handleConfirmClick() {
  if (currentSelect !== null) {
    const selectedColor = window.getComputedStyle(currentSelect)
      .backgroundColor;
    saveInfo("color", selectedColor);
    hiddenElement(colorContainer);
    showElement(checkContainer, 1100);
  } else {
    colorText.innerText = "Choose again";
  }
}

function handleCheckClick() {
  hiddenElement(checkContainer);
  setTimeout(function () {
    location.href = "./html/toDo.html";
  }, 1100);
}

function init() {
  nameForm.addEventListener("submit", handleNameSubmit);
  colors.forEach(function (color) {
    color.addEventListener("click", handleColorClick);
  });
  colorButton.addEventListener("click", handleConfirmClick);
  checkButton.addEventListener("click", handleCheckClick);
}

init();

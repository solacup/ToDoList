const clockContainer = document.querySelector(".clock");
const clockTitle = clockContainer.querySelector("div");

const menuBar = document.querySelector(".menu-bar");
const user = menuBar.querySelector(".user");
const menuBtn = menuBar.querySelector("button");

const USER = "name";
const THEME = "color";

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function getInfo() {
  const currentUser = localStorage.getItem(USER);
  const currentTheme = localStorage.getItem(THEME);

  if (currentUser !== null) user.innerText = currentUser;
  if (currentTheme !== null)
    menuBar.style.backgroundColor = currentTheme;
}

function deleteInfo() {
  localStorage.removeItem(USER);
  localStorage.removeItem(THEME);
  location.href = "../";
}

function init() {
  getInfo();
  getTime();
  setInterval(getTime, 1000);
  menuBtn.addEventListener("click", deleteInfo);
}

init();

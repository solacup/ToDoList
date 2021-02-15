const dayText = document.querySelector(".day");

function calculateDay() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDate();
  dayText.innerText = `${month + 1}.${day < 10 ? `0${day}` : day}`;
}

function init() {
  calculateDay();
}

init();

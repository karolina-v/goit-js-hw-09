const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');


startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtnEl.disabled = true;
let timerId = null;

function onStartBtnClick() {
    timeId = setInterval(() => {
        startBtnEl.disabled = true;
        stopBtnEl.disabled = false;

        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;

}, 1000);
}

function onStopBtnClick() {
    clearInterval(timeId);

    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
}



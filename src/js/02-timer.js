import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix'

const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');


startBtn.disabled = true;
startBtn.addEventListener('click', onStartBtnClick);

let selectedTime = null;
let currentTime = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      selectedTime = selectedDates[0].getTime();
      currentTime = Date.now();
 
      if (currentTime > selectedTime) {
          Notiflix.Notify.failure('Please choose a date in the future');
          startBtn.disabled = true;
      } else {
          startBtn.disabled = false;
      }
  },
};

const fp = flatpickr(inputEl, options);


function onStartBtnClick() {
    startBtn.disabled = true;
    inputEl.disabled = true;

    timerId = setInterval(() => {
        currentTime = Date.now();
        const delta = selectedTime - currentTime;

        if (delta <= 0) {
            clearInterval(timerId);
            return;
        }

        const time = convertMs(delta);
        updateTime(time);

  }, 1000);
}



function updateTime({ days, hours, minutes, seconds }) {
  daysEl.textContent = addLeadingZero(`${days}`);
  hoursEl.textContent = addLeadingZero(`${hours}`);
  minutesEl.textContent = addLeadingZero(`${minutes}`);
  secondsEl.textContent = addLeadingZero(`${seconds}`);
}


function addLeadingZero (value) {
  return String(value).padStart(2, '0');
};


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputPicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');





























// startBtn.disabled = true;
// startBtn.addEventListener('click', onStartClick);

// const fp = flatpickr(inputPicker, options);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);

//     const unixDate = new Date(selectedDates[0]).getTime();
//     const nowDate = new Date().getTime();
    
//     if (unixDate <= nowDate) {
//       window.alert('Please choose a date in the future');
//     } else {
//       startBtn.disabled = false;
//     }
   
//   },
// };


// function onStartClick() {
//   const date = inputPicker.value;
//   const unixDate = new Date(date).getTime();
  
//   const timerId = setInterval(() => {
//     const nowDate = new Date().getTime();
//     const result = unixDate - nowDate;

//     if (result > 0) {
//       setTimer(convertMs(result));
//     } else {
//       clearInterval(timerId);
//     }
//   }, 1000);
// }


// const setTime = ({ days, hours, minutes, seconds }) => {
//   daysEl.innerHTML = days;
//   hoursEl.innerHTML = hours;
//   minutesEl.innerHTML = minutes;
//   secondsEl.innerHTML = seconds;
// };


// const addLeadingZero = value => {
//   return String(value).padStart(2, '0');
// };




// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }



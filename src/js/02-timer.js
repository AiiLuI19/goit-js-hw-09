import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";
const refs = {
    inputData: document.querySelector("#datetime-picker"),
    btnStart: document.querySelector("[data-start]"),
    timer: document.querySelector(".timer"),
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}
refs.btnStart.addEventListener("click", count)
refs.btnStart.setAttribute("disabled", true);

let dataId = null;
let interval = null;

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      dataId = selectedDates[0];
      timeTimer();
    },
}) 

//  отримуємо дані для лічильника, та робимо неактивну кнопку
 function timeTimer()  {
     const ms = dataId-new Date(); 
    if (ms >= 0) {
        if (!interval) {
            refs.btnStart.removeAttribute("disabled");
        }
        upDate(ms);
        // const { days, hours, minutes, seconds } = convertMs(ms);
        // refs.seconds.textContent = seconds;
        // refs.minutes.textContent = minutes;
        // refs.hours.textContent = hours;
        // refs.days.textContent = days;
        
    } else {
        if (interval !== null) {
            clearInterval(interval);
            interval = null;
        } else {   
       Notify.failure("❌Please choose a date in the future"); }
        refs.btnStart.setAttribute("disabled", true);
     }
     
}
function upDate (ms) {
     const { days, hours, minutes, seconds } = convertMs(ms);
        refs.seconds.textContent = seconds;
        refs.minutes.textContent = minutes;
        refs.hours.textContent = hours;
        refs.days.textContent = days;
}
// функція для запуску лічільника 
function count() {
    interval = setInterval(timeTimer, 1000); 
    refs.btnStart.setAttribute("disabled", true);
}
// функція для перетворення мс в дату в форматі xx:xx:xx:xx
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




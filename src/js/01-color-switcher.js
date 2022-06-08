const refs = {
    btnStart: document.querySelector("[data-start]"),
    btnStop: document.querySelector("[data-stop]"),
    body: document.body,
}
// Вішаємо слухача

refs.btnStart.addEventListener("click", onStartRandomColor);
refs.btnStop.addEventListener("click", onStop)

let colorId = null;
// FUNCTION
function onStartRandomColor(elem) {
    
    colorId = setInterval(() => {
        const rndColor = getRandomHexColor(elem);
             document.body.style.backgroundColor = rndColor;
    }, 1000)
    inputDisabled(true, false);
}

function onStop() {
    inputDisabled(false, true);
   clearInterval(colorId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function inputDisabled (btnStart, btnStop) {
  refs.btnStart.disabled = btnStart;   
  refs.btnStop.disabled =  btnStop;
}


const refs = {
    btnStart: document.querySelector("[data-start]"),
    btnStop: document.querySelector("[data-stop]"),
    body: document.body,
}
// Вішаємо слухача

refs.btnStart.addEventListener("click", onRandomColor);
refs.btnStop.setAttribute("disabled", true);
let colorId = null;

// FUNCTION
function onRandomColor(elem) {
    colorId = setInterval(() => {
        const rndColor = getRandomHexColor(elem);
             document.body.style.backgroundColor = rndColor;
         }, 1000)
    if (!refs.btnStart) {
        refs.btnStart.removeAttribute("disabled");
    }
    refs.btnStart.setAttribute("disabled", true);
    refs.btnStop.removeAttribute("disabled");
}

refs.btnStop.addEventListener("click", () => {
    clearInterval(colorId);
    
    if (refs.btnStop) {
        refs.btnStop.removeAttribute("disabled");
    }
    refs.btnStop.setAttribute("disabled", true);
    refs.btnStart.removeAttribute("disabled");
    
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




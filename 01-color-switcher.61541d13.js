!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.body};t.btnStart.addEventListener("click",(function(n){e=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3),t.btnStart||t.btnStart.removeAttribute("disabled");t.btnStart.setAttribute("disabled",!0),t.btnStop.removeAttribute("disabled")})),t.btnStop.setAttribute("disabled",!0);var e=null;t.btnStop.addEventListener("click",(function(){clearInterval(e),t.btnStop&&t.btnStop.removeAttribute("disabled"),t.btnStop.setAttribute("disabled",!0),t.btnStart.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.61541d13.js.map

!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i={formEl:document.querySelector("form")};i.formEl.addEventListener("submit",(function(e){e.preventDefault();var n=Number(i.formEl.elements.delay.value),o=Number(i.formEl.elements.step.value),t=i.formEl.elements.amount.value;setTimeout((function(){for(var e=0;e<t;e+=1)l(o*e,e+1).then((function(e){var o=e.delay,t=e.position;r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n+o,"ms"))})).catch((function(e){var o=e.delay,t=e.position;r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n+o,"ms"))}))}),n)}));var l=function(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({delay:e,position:n}):t({delay:e,position:n})}),e)}))}}();
//# sourceMappingURL=03-promises.e0a22a2c.js.map

var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var l={id:e,exports:{}};return o[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var l=n("iQIUW");const r={formEl:document.querySelector("form")};r.formEl.addEventListener("submit",(e=>{e.preventDefault();let o=Number(r.formEl.elements.delay.value),t=Number(r.formEl.elements.step.value),n=r.formEl.elements.amount.value;setTimeout((()=>{for(let e=0;e<n;e+=1)i(t*e,e+1).then((({delay:e,position:t})=>{l.Notify.success(`✅ Fulfilled promise ${t} in ${o+e}ms`)})).catch((({delay:e,position:t})=>{l.Notify.failure(`❌ Rejected promise ${t} in ${o+e}ms`)}))}),o)}));const i=(e,o)=>new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({delay:e,position:o}):n({delay:e,position:o})}),e)}));
//# sourceMappingURL=03-promises.51c5524b.js.map
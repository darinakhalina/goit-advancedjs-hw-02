import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as c}from"./assets/vendor-77e16229.js";const i={form:document.querySelector(".form"),delayInput:document.querySelector('[name="delay"]'),stepInput:document.querySelector('[name="step"]'),amountInput:document.querySelector('[name="amount"]')};function l(t,e){return new Promise((r,s)=>{const n=Math.random()>.3;setTimeout(()=>{n?r({position:t,delay:e}):s({position:t,delay:e})},e)})}i.form.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(t.target),r=Number(e.get("delay")),s=Number(e.get("step")),n=Number(e.get("amount"));for(let o=0;o<n;o++){const a=r+o*s;l(o+1,a).then(({position:m,delay:u})=>{c.success({title:"Success",message:`Fulfilled promise ${m} in ${u}ms`,closeOnEscape:!0,position:"topRight"})}).catch(({position:m,delay:u})=>{c.error({title:"Error",message:`Rejected promise ${m} in ${u}ms`,closeOnEscape:!0,position:"topRight"})})}});
//# sourceMappingURL=commonHelpers3.js.map
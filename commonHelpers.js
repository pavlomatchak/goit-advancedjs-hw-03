import{a as i}from"./assets/vendor-bdb8a163.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u="live_xMPWYNspoKZWsSTxOBE4NVcN9Qc034AOnujPVcntJFWwJdwtdhebGWpMVMRJX65L";function f(){return i.defaults.headers.common["x-api-key"]=u,i({method:"get",url:"https://api.thecatapi.com/v1/breeds",responseType:"json"})}function h(r){i.defaults.headers.common["x-api-key"]=u;let t=`https://api.thecatapi.com/v1/images/search?breed_ids=${r}`;return r===0&&(t="https://api.thecatapi.com/v1/images/searchfailedrequest"),i({method:"get",url:t,responseType:"json"})}const n=document.querySelector(".breed-select"),a=document.querySelector(".loader"),g=document.querySelector(".error"),c=document.querySelector(".cat-info");function y(){c.classList.add("hidden"),c.innerHTML="",a.classList.remove("hidden")}function p(){a.classList.add("hidden"),c.classList.remove("hidden")}function m(r){console.log(r),a.classList.add("hidden"),n.classList.add("hidden"),g.classList.remove("hidden")}f().then(({data:r})=>{let t='<option value="0">Failed request</option>';for(const s of r)t+=`<option value="${s.id}">${s.name}</option>`;n.innerHTML=t,p(),n.classList.remove("hidden")}).catch(m);n==null||n.addEventListener("change",r=>{y(),h(r.target.value).then(({data:t})=>{console.log(t);const s=t[0].breeds[0];c.innerHTML=`
      <div class="image">
        <img src="${t[0].url}" alt="${s.name}" />
      </div>

      <div>
        <h1>${s.name}</h1>

        <p class="description">${s.description}</p>

        <p class="temperament"><strong>Temperament:</strong> ${s.temperament}</p>
      </div>
    `,p()}).catch(m)});
//# sourceMappingURL=commonHelpers.js.map

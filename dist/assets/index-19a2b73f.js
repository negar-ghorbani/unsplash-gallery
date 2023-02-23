(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();const l=document.getElementById("search");localStorage.setItem("myList","[]");const c=async n=>{const t=await fetch(n).then(e=>e.json()).then(e=>e.results),s=document.getElementById("image-container");s.innerHTML="",t.forEach(e=>{s.innerHTML+=`
    <div class="imageDiv">
      <div class="flip-card">
      <div class="flip-card-inner">
    <div class="flip-card-front">
     <img src="${e.urls.small}" alt="${e.alt_description}" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
     ${e.alt_description}
    </div>
  </div>
</div>
</div>`})};l.addEventListener("click",()=>{const n=document.getElementById("input"),t=`https://api.unsplash.com/search/photos/?client_id=q4swtOlzLBR4BJxfQEgQA-u3_3hNzATacG7eJtjYLcU&query=${n.value}&fit=crop&h=200px&w=300px`,s=JSON.parse(localStorage.getItem("myList"));return n.value===""||s.includes(n.value)?(c(t),s):(s.push(n.value),localStorage.setItem("myList",JSON.stringify(s)),c(t),n.value="",!0)});const u=document.getElementById("input");u.addEventListener("focus",()=>{let n=JSON.parse(localStorage.getItem("myList"));const t=document.querySelector(".suggestions ul");if(t.innerHTML="",n.length>0){for(let s=0;s<n.length;s++){let e=n[s];e=e.replace(e,`<strong>${e}</strong>`),t.innerHTML+=`<li>${e}</li>`}t.classList.add("has-suggestions")}else n=[],t.innerHTML="",t.classList.remove("has-suggestions")});function a(n){const t=document.querySelector(".suggestions ul"),s=document.getElementById("input");s.value=n.target.innerText,s.focus(),t.innerHTML="",t.classList.remove("has-suggestions");const e=`https://api.unsplash.com/search/photos/?client_id=q4swtOlzLBR4BJxfQEgQA-u3_3hNzATacG7eJtjYLcU&query=${s.value}&fit=crop&h=200px&w=300px`;c(e)}const d=document.querySelector(".suggestions ul");d.addEventListener("click",a);

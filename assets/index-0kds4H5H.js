(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://placehold.co/210x295`,t=async t=>{let n=await fetch(`https://api.tvmaze.com/shows/${t}`);if(!n.ok)throw Error(`HTTP Error: ${n.status}`);let r=await n.json();return{name:r.name,rating:r.rating,image:r.image?.medium??e}},n=async e=>{let t=await fetch(`https://api.tvmaze.com/shows/${e}/episodes`);if(!t.ok)throw Error(`HTTP Error: ${t.status}`);let n=(await t.json()).map(e=>({number:e.number,season:e.season,rating:e.rating.average}));return Object.groupBy(n,e=>e.season)},r=`118`,i=document.querySelector(`header`),a=document.querySelector(`.episodes`),o=({name:e,image:t})=>`
  <img class="poster" src="${t}" alt="${e}">
  <h1>${e}</h1>
`,s=({number:e,rating:t})=>`
  <div class="episode episode-${e} rating-${Math.round(t??0)}">${e}</div>
`,c=(e,t)=>`
  <article class="season">
    <header class="season-header">T${String(t).padStart(2,`0`)}</header>
    ${e.map(s).join(``)}
  </article>
`;try{let e=await t(r),s=await n(r);i.setHTMLUnsafe(o(e));let l=Object.values(s).map((e,t)=>c(e,t+1));a.setHTMLUnsafe(l.join(``))}catch(e){console.error(`Error al obtener los datos: `,e)}
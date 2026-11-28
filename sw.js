/* © 2026 BenchMark Learning. All rights reserved. No part of this file may be copied, reproduced or republished without permission. */
/* BenchMark offline helper. Change VERSION when you want every device to refresh its saved copy. */
const VERSION='bm-v109';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','favicon-32.png','workshop.js','tools.js','tooldash.html','fcdash.html','design.html','gauge.js','jspdf.js','privacy.html'];
const EXTRA_HOSTS=[];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  // a page: try the internet first so updates arrive, fall back to the saved copy offline.
  // v10.39: each page is saved under its own name (before, any page or frame could overwrite the saved copy of the main page), and error pages are never saved
  if(req.mode==='navigate'||(url.origin===location.origin&&url.pathname.endsWith('.html'))){
    const same=url.origin===location.origin,app=same&&(/\/$/.test(url.pathname)||/\/index\.html$/.test(url.pathname)),key=app?'index.html':url.pathname;
    e.respondWith(fetch(req).then(r=>{if(same&&r&&r.ok&&r.type==='basic'){const cp=r.clone();caches.open(VERSION).then(c=>c.put(key,cp))}return r})
      .catch(()=>caches.match(key).then(r=>r||caches.match(req,{ignoreSearch:true})).then(r=>r||(req.mode==='navigate'?caches.match('index.html'):Response.error()))));
    return;
  }
  // the marking engine: use the saved copy straight away, and fetch the latest in the background so a new gauge.js arrives on the next visit
  if(url.origin===location.origin&&url.pathname.endsWith('/gauge.js')){
    e.respondWith(caches.open(VERSION).then(c=>c.match(req,{ignoreSearch:true}).then(hit=>{const net=fetch(req).then(r=>{if(r&&r.ok)c.put('gauge.js',r.clone());return r}).catch(()=>hit);if(hit){e.waitUntil(net.catch(()=>{}));return hit}return net})));
    return;
  }
  // icons, fonts, the PDF tool and photos: use the saved copy if there is one, otherwise fetch and save it
  if(url.origin===location.origin||EXTRA_HOSTS.includes(url.hostname)){
    e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{if(r&&(r.ok||r.type==='opaque')){const cp=r.clone();caches.open(VERSION).then(c=>c.put(req,cp))}return r})));
  }
});

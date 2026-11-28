/* © 2026 BenchMark Learning. All rights reserved. No part of this file may be copied, reproduced or republished without permission. */
/* BenchMark offline helper. Change VERSION when you want every device to refresh its saved copy. */
const VERSION='bm-v107';
const CORE=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','favicon-32.png','workshop.js','tools.js','tooldash.html','fcdash.html','design.html','gauge.js','jspdf.js','privacy.html'];
const EXTRA_HOSTS=[];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  // the page itself: try the internet first so updates arrive, fall back to the saved copy offline
  if(req.mode==='navigate'||(url.origin===location.origin&&url.pathname.endsWith('.html'))){
    e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put(req.mode==='navigate'?'index.html':req,cp));return r}).catch(()=>caches.match(req).then(r=>r||caches.match('index.html'))));
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

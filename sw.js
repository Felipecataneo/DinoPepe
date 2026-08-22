/* DinoPepe Service Worker
 *
 * IMPORTANTE — por que não é mais "cache-first" para tudo:
 * a versão anterior respondia sempre do cache e só ia à rede se não achasse
 * nada. Resultado: depois da primeira visita o index.html ficava congelado no
 * aparelho e NENHUM deploy novo chegava no jogador. Correções eram publicadas
 * e ninguém recebia.
 *
 * Agora:
 *   - HTML (navegação): rede primeiro, cache só como reserva pra funcionar
 *     offline. O jogador sempre pega a versão mais nova quando tem internet.
 *   - Assets fixos (ícones, música): cache primeiro, com atualização em
 *     segundo plano — são grandes e raramente mudam.
 */

const VERSION = "v5";
const HTML_CACHE = `dinopepe-html-${VERSION}`;
const ASSET_CACHE = `dinopepe-assets-${VERSION}`;

const ASSETS = [
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./fundo.mp3"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(ASSET_CACHE)
      .then(cache => cache.addAll(ASSETS))
      .catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== HTML_CACHE && k !== ASSET_CACHE)
            .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

function isHTML(request) {
  return request.mode === "navigate" ||
         request.destination === "document" ||
         (request.headers.get("accept") || "").includes("text/html");
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  // --- HTML: rede primeiro ---
  if (isHTML(req)) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(HTML_CACHE).then(c => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match("./index.html")))
    );
    return;
  }

  // --- assets: cache primeiro, revalidando por trás ---
  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req)
        .then(res => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(ASSET_CACHE).then(c => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});

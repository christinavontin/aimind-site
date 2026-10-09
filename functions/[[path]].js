// Answers "410 Gone" for retired pages that have no successor (decided October 9, 2026).
// public/_routes.json limits this function to exactly these paths, so every other page stays static.
const GONE = new Set([
  "/2023/11/02/b2b-marketing-sustainability/",
  "/2023/11/02/build-trust-through-transparency/",
  "/2024/02/13/aligning-okrs-with-circular-economy-targets-paving-the-way-for-sustainability/",
  "/2024/02/13/circular-economy-targets/",
  "/2026/04/05/paas-why-availability-cannot-replace-quality/",
  "/de/2023/11/02/b2b-marketing-sustainability/",
  "/de/2023/11/02/build-trust-through-transparency/",
  "/de/2024/02/13/aligning-okrs-with-circular-economy-targets-paving-the-way-for-sustainability/",
  "/de/2024/02/13/circular-economy-targets/",
  "/de/2026/04/05/paas-why-availability-cannot-replace-quality/",
  "/de/personal-esg/",
  "/personal-esg/"
]);

export function onRequest({ request, next }) {
  const path = new URL(request.url).pathname;
  const key = path.endsWith('/') ? path : path + '/';
  if (!GONE.has(key)) return next();
  const de = key.startsWith('/de/');
  const body = `<!doctype html><html lang="${de ? 'de' : 'en'}"><meta charset="utf-8"><meta name="robots" content="noindex"><title>${de ? 'Seite entfernt' : 'Page removed'} – aimind.marketing</title><body style="font-family:system-ui,sans-serif;color:#091944;max-width:40rem;margin:15vh auto;padding:0 20px"><h1>${de ? 'Diese Seite gibt es nicht mehr.' : 'This page has been removed.'}</h1><p><a href="${de ? '/de/' : '/'}">${de ? 'Zur Startseite' : 'Go to the homepage'}</a></p></body></html>`;
  return new Response(body, { status: 410, headers: { 'content-type': 'text/html; charset=utf-8' } });
}

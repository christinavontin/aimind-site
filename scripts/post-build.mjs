// Cloudflare Pages serves the nearest 404.html with status 404.
// Astro writes the German 404 page as de/404/index.html, so move it to de/404.html.
import { renameSync, rmSync, existsSync } from 'node:fs';
if (existsSync('dist/de/404/index.html')) {
  renameSync('dist/de/404/index.html', 'dist/de/404.html');
  rmSync('dist/de/404', { recursive: true });
}

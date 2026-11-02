import type { APIRoute } from 'astro';

const pages = ['/', '/projetos', '/hobbies'];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://seinenk.github.io');
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map((path) => `  <url><loc>${new URL(path, base).href}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

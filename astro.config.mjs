// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seinenk.github.io',
  // Gera hobbies.html e projetos.html, mantendo os endereços antigos do site.
  build: { format: 'file' },
  compressHTML: false,
});

// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Fontes servidas pelo próprio site, a partir dos pacotes @fontsource instalados
// no projeto. Só o subconjunto latino (que cobre o português) é publicado.
/** @param {string} pkg @param {string} file */
const fontFile = (pkg, file) => `./node_modules/${pkg}/files/${file}`;

export default defineConfig({
  site: 'https://seinenk.github.io',
  // Gera projetos.html (endereço antigo do site) e projeto/<nome>.html para cada projeto.
  build: {
    format: 'file',
    // CSS embutido no HTML: a primeira pintura não espera nenhum arquivo extra.
    inlineStylesheets: 'always',
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-sans',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          {
            weight: '100 900',
            style: 'normal',
            src: [fontFile('@fontsource-variable/inter', 'inter-latin-wght-normal.woff2')],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-display',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          {
            weight: 500,
            style: 'normal',
            src: [fontFile('@fontsource/cormorant-garamond', 'cormorant-garamond-latin-500-normal.woff2')],
          },
          {
            weight: 500,
            style: 'italic',
            src: [fontFile('@fontsource/cormorant-garamond', 'cormorant-garamond-latin-500-italic.woff2')],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      fallbacks: ['ui-monospace', 'monospace'],
      options: {
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: [fontFile('@fontsource/jetbrains-mono', 'jetbrains-mono-latin-400-normal.woff2')],
          },
        ],
      },
    },
  ],
});

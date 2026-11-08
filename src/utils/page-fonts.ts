import { fontData } from 'astro:assets';
import type { PageFont } from '../data/projects/types';

/**
 * Fontes que só a página de um projeto usa (as amostras do design system dele). Os
 * arquivos vêm da API de fontes do Astro (astro.config.mjs), mas o @font-face sai
 * daqui, numa folha que só é ligada quando a seção visual chega perto da tela: assim
 * quem não rola até lá não baixa as fontes (src/scripts/projeto.ts).
 */
const families: Record<PageFont, { family: string; fallback: string }> = {
  '--font-efipla-logo': { family: 'EFIPLA Rubik Distressed', fallback: 'Impact, sans-serif' },
  '--font-efipla-title': { family: 'EFIPLA Cinzel', fallback: 'Georgia, serif' },
  '--font-efipla-text': { family: 'EFIPLA Alegreya', fallback: 'Georgia, serif' },
  '--font-efipla-pixel': { family: 'EFIPLA Silkscreen', fallback: 'ui-monospace, monospace' },
};

/** As variáveis CSS (sempre ativas) e os @font-face (ligados sob demanda). */
export function pageFontCss(fonts: PageFont[]) {
  const vars = fonts.map((v) => `${v}:"${families[v].family}",${families[v].fallback}`).join(';');
  const faces = fonts
    .flatMap((v) =>
      (fontData[v] ?? []).map((d) => {
        const src = d.src.map((s) => `url("${s.url}")${s.format ? ` format("${s.format}")` : ''}`).join(',');
        return `@font-face{font-family:"${families[v].family}";src:${src};font-display:swap;font-weight:${d.weight ?? 400};font-style:${d.style ?? 'normal'}}`;
      }),
    )
    .join('');
  return { vars: `:root{${vars}}`, faces };
}

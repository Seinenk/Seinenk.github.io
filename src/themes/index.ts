import { rgbTriplet } from './color';
import { TOKEN_KEYS, type Palette, type ThemeTokens } from './types';
import { assertAccessible } from './validate';

/**
 * Registro de paletas. Toda paleta em ./palettes/*.ts entra no site sozinha:
 * para criar um tema novo basta adicionar um arquivo lá (veja o README).
 */
const modules = import.meta.glob<{ default: Palette }>('./palettes/*.ts', { eager: true });

export const palettes: Palette[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.name.localeCompare(b.name, 'pt-BR'));

/** Paleta usada na primeira visita. */
export const DEFAULT_PALETTE = 'grafite';

const ids = new Set<string>();
for (const palette of palettes) {
  if (ids.has(palette.id)) throw new Error(`Há duas paletas com o id "${palette.id}".`);
  ids.add(palette.id);
  assertAccessible(palette);
}

export const defaultPalette = palettes.find((p) => p.id === DEFAULT_PALETTE) ?? palettes[0];

if (!defaultPalette) throw new Error('Nenhuma paleta encontrada em src/themes/palettes.');

const kebab = (key: string) => key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

function declarations(tokens: ThemeTokens, scheme: 'light' | 'dark'): string {
  const vars = TOKEN_KEYS.map((key) => `--c-${kebab(key)}:${tokens[key]}`);
  vars.push(
    `--c-shadow-rgb:${rgbTriplet(tokens.shadow)}`,
    `--c-glow-a-rgb:${rgbTriplet(tokens.glowA)}`,
    `--c-glow-b-rgb:${rgbTriplet(tokens.glowB)}`,
    `--c-accent-rgb:${rgbTriplet(tokens.accent)}`,
    `--c-canvas-rgb:${rgbTriplet(tokens.canvas)}`,
    `color-scheme:${scheme}`,
  );
  return vars.join(';');
}

/**
 * CSS com as variáveis de cor de todas as paletas, nos dois modos.
 * Sem JavaScript, o site segue o modo claro ou escuro do sistema operacional.
 */
export function buildThemeCss(): string {
  let css = `:root{${declarations(defaultPalette.light, 'light')}}`;
  css += `@media (prefers-color-scheme:dark){:root:not([data-mode]){${declarations(defaultPalette.dark, 'dark')}}}`;
  for (const p of palettes) {
    css += `:root[data-palette="${p.id}"][data-mode="light"]{${declarations(p.light, 'light')}}`;
    css += `:root[data-palette="${p.id}"][data-mode="dark"]{${declarations(p.dark, 'dark')}}`;
  }
  return css;
}

/** Cor da barra do navegador no celular, por paleta e modo. */
export const themeColors: Record<string, { light: string; dark: string }> = Object.fromEntries(
  palettes.map((p) => [p.id, { light: p.light.canvas, dark: p.dark.canvas }]),
);

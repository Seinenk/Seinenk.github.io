import { contrast, hexToRgb } from './color';
import { TOKEN_KEYS, type Palette, type ThemeTokens, type TokenKey } from './types';

/**
 * Pares de cor que precisam passar no critério de contraste da WCAG 2.2 (nível AA).
 * Se uma paleta nova não passar, o build para e mostra exatamente o que ajustar.
 */
const AA_TEXT = 4.5; // texto normal
const AA_LARGE = 3; // texto grande (24px, ou 18,66px em negrito) e componentes de interface

const surfaces: TokenKey[] = ['canvas', 'surfaceSoft', 'surfaceCard', 'surfaceRaised'];
const inverseSurfaces: TokenKey[] = ['inverse', 'inverseElevated', 'inverseSoft'];

const rules: Array<{ fg: TokenKey; on: TokenKey[]; min: number }> = [
  { fg: 'ink', on: [...surfaces, 'surfaceStrong'], min: AA_TEXT },
  { fg: 'bodyStrong', on: [...surfaces, 'surfaceStrong'], min: AA_TEXT },
  { fg: 'body', on: [...surfaces, 'surfaceStrong'], min: AA_TEXT },
  { fg: 'muted', on: surfaces, min: AA_TEXT },
  { fg: 'mutedSoft', on: ['canvas', 'surfaceSoft', 'surfaceCard'], min: AA_TEXT },
  { fg: 'accentStrong', on: surfaces, min: AA_TEXT },
  { fg: 'ink', on: ['selection'], min: AA_TEXT },
  { fg: 'onPrimary', on: ['primary', 'primaryActive'], min: AA_TEXT },
  { fg: 'onInverse', on: inverseSurfaces, min: AA_TEXT },
  { fg: 'onInverseSoft', on: inverseSurfaces, min: AA_TEXT },
  { fg: 'inverseAccent', on: inverseSurfaces, min: AA_TEXT },
  { fg: 'codeKey', on: ['inverseSoft'], min: AA_TEXT },
  { fg: 'codeString', on: ['inverseSoft'], min: AA_TEXT },
  { fg: 'codePunct', on: ['inverseSoft'], min: AA_TEXT },
  { fg: 'codeComment', on: ['inverseSoft'], min: AA_TEXT },
  { fg: 'accent', on: ['canvas', 'surfaceSoft', 'surfaceCard'], min: AA_LARGE },
  { fg: 'focus', on: [...surfaces, 'surfaceStrong'], min: AA_LARGE },
  { fg: 'outline', on: surfaces, min: AA_LARGE },
  { fg: 'primary', on: ['canvas', 'surfaceSoft', 'surfaceCard'], min: AA_LARGE },
];

export interface ContrastIssue {
  palette: string;
  mode: 'light' | 'dark';
  fg: TokenKey;
  bg: TokenKey;
  ratio: number;
  min: number;
}

export function checkPalette(palette: Palette): ContrastIssue[] {
  const issues: ContrastIssue[] = [];
  for (const mode of ['light', 'dark'] as const) {
    const tokens: ThemeTokens = palette[mode];
    for (const key of TOKEN_KEYS) {
      if (!tokens[key]) throw new Error(`Paleta "${palette.id}" (${mode}): falta o token "${key}".`);
      hexToRgb(tokens[key]);
    }
    for (const { fg, on, min } of rules) {
      for (const bg of on) {
        const ratio = contrast(tokens[fg], tokens[bg]);
        if (ratio < min) issues.push({ palette: palette.id, mode, fg, bg, ratio, min });
      }
    }
  }
  return issues;
}

/** Interrompe o build se alguma combinação de cores não tiver contraste suficiente. */
export function assertAccessible(palette: Palette): void {
  if (!/^[a-z0-9-]+$/.test(palette.id)) {
    throw new Error(`Paleta "${palette.id}": o id só pode ter letras minúsculas, números e hífen.`);
  }
  const issues = checkPalette(palette);
  if (issues.length === 0) return;
  const lines = issues.map(
    (i) => `  • ${i.mode}: ${i.fg} sobre ${i.bg} = ${i.ratio.toFixed(2)}:1 (mínimo ${i.min}:1)`,
  );
  throw new Error(
    `A paleta "${palette.id}" não tem contraste suficiente (WCAG AA):\n${lines.join('\n')}`,
  );
}

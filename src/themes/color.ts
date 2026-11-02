/**
 * Utilitários de cor usados para derivar os tokens das paletas.
 * Rodam só durante o build: nada disto vai para o navegador.
 */

type Triple = [number, number, number];

export function hexToRgb(hex: string): Triple {
  const raw = hex.replace('#', '').trim();
  const full = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw.slice(0, 6);
  if (!/^[0-9a-f]{6}$/i.test(full)) throw new Error(`Cor inválida: "${hex}". Use o formato #RRGGBB.`);
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function rgbToHex([r, g, b]: Triple): string {
  return (
    '#' +
    [r, g, b]
      .map((v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase()
  );
}

const toLinear = (channel: number) => {
  const c = channel / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

const fromLinear = (linear: number) => {
  const c = Math.min(1, Math.max(0, linear));
  return 255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);
};

function rgbToOklab([r, g, b]: Triple): Triple {
  const lr = toLinear(r);
  const lg = toLinear(g);
  const lb = toLinear(b);
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}

function oklabToRgb([L, a, b]: Triple): Triple {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [
    fromLinear(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
    fromLinear(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
    fromLinear(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
  ];
}

/**
 * Mistura duas cores da paleta no espaço OKLab, que respeita a percepção humana.
 * `amount` = 0 devolve `from`; `amount` = 1 devolve `to`.
 */
export function mix(from: string, to: string, amount: number): string {
  const a = rgbToOklab(hexToRgb(from));
  const b = rgbToOklab(hexToRgb(to));
  return rgbToHex(
    oklabToRgb([
      a[0] + (b[0] - a[0]) * amount,
      a[1] + (b[1] - a[1]) * amount,
      a[2] + (b[2] - a[2]) * amount,
    ]),
  );
}

/** Luminância relativa (WCAG 2). */
export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map(toLinear) as Triple;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Razão de contraste entre duas cores (WCAG 2), de 1 a 21. */
export function contrast(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** "r g b", para usar em rgb(var(--x-rgb) / 0.2). */
export function rgbTriplet(hex: string): string {
  return hexToRgb(hex).join(' ');
}

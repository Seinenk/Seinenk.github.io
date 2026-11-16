/**
 * Monta o retrato recortado do topo da página inicial a partir da foto e da máscara
 * gerada por mascara.swift: suaviza a borda, esmaece as laterais cortadas pela moldura
 * da foto, aplica o duotone da paleta Grafite (sombras em grafite, luzes em areia clara)
 * e corta a sobra de cima.
 *
 * Uso: node ferramentas/retrato/recorte.mjs <foto.jpg> <pasta-da-mascara> <saida.webp>
 */
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const [, , photo, maskDir, output] = process.argv;
if (!photo || !maskDir || !output) {
  console.error('Uso: node ferramentas/retrato/recorte.mjs <foto.jpg> <pasta-da-mascara> <saida.webp>');
  process.exit(2);
}

const { largura: W, altura: H } = JSON.parse(readFileSync(`${maskDir}/medidas.json`, 'utf8'));
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const smooth = (a, b, x) => {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

// borda suavizada em 0,8 px
const mask = await sharp(readFileSync(`${maskDir}/mascara.raw`), { raw: { width: W, height: H, channels: 1 } })
  .blur(0.8)
  .extractChannel(0)
  .raw()
  .toBuffer();
const rgb = await sharp(photo).removeAlpha().raw().toBuffer();

// duotone: grafite (#181722) nas sombras, um meio-tom neutro e areia clara nas luzes
const SHADOW = hex('#181722');
const MID = hex('#6F676A');
const LIGHT = hex('#FBF7F3');
function grade(l) {
  const c = clamp01(l * 1.04 - 0.012);
  const t = c * c * (3 - 2 * c) * 0.35 + c * 0.65;
  return [0, 1, 2].map((k) =>
    t < 0.5 ? SHADOW[k] + (MID[k] - SHADOW[k]) * (t / 0.5) : MID[k] + (LIGHT[k] - MID[k]) * ((t - 0.5) / 0.5),
  );
}

const rgba = Buffer.alloc(W * H * 4);
let top = H;
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const i = y * W + x;
    let a = clamp01((mask[i] / 255 - 0.1) / 0.84); // contrai a borda e tira a névoa do fundo
    a *= smooth(0, W * 0.085, x) * (1 - smooth(W * 0.955, W, x)); // braços cortados pela moldura
    const l = (0.2126 * rgb[i * 3] + 0.7152 * rgb[i * 3 + 1] + 0.0722 * rgb[i * 3 + 2]) / 255;
    const [r, g, b] = grade(l);
    rgba.set([r, g, b, Math.round(a * 255)], i * 4);
    if (a > 0.02 && y < top) top = y;
  }
}

const cropTop = Math.max(0, top - 36);
await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
  .extract({ left: 0, top: cropTop, width: W, height: H - cropTop })
  .webp({ quality: 96, alphaQuality: 100, effort: 6 })
  .toFile(output);
console.log(`retrato gravado em ${output} (${W} x ${H - cropTop})`);

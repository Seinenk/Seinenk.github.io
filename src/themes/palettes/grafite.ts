import { mix } from '../color';
import { definePalette } from '../types';

/**
 * Paleta "Grafite": as seis cores do print enviado por Carlos.
 * Todo tom intermediário é uma mistura entre duas delas.
 */
const white = '#FFFFFF';
const mist = '#EBEBEB';
const ink = '#181722';
const slate = '#393F4A';
const sand = '#DCD2CC';
const taupe = '#8A7875';

// Tons de código, iguais nos dois modos (a janela de código é sempre escura).
const code = {
  codeKey: mix(sand, white, 0.35),
  codeString: mix(taupe, sand, 0.58),
  codePunct: mix(sand, slate, 0.4),
  codeComment: mix(sand, slate, 0.46),
};

export default definePalette({
  id: 'grafite',
  name: 'Grafite',
  description: 'Branco, névoa, grafite, ardósia, areia e taupe',
  order: 1,
  swatches: [white, mist, ink, slate, sand, taupe],
  light: {
    canvas: mix(white, sand, 0.14),
    surfaceSoft: mix(white, sand, 0.3),
    surfaceCard: mix(white, sand, 0.44),
    surfaceStrong: sand,
    surfaceRaised: white,
    hairline: mix(white, sand, 0.62),
    hairlineSoft: mix(white, sand, 0.4),
    outline: mix(slate, taupe, 0.55),
    ink,
    bodyStrong: mix(ink, slate, 0.5),
    body: slate,
    muted: mix(slate, taupe, 0.4),
    mutedSoft: mix(slate, taupe, 0.6),
    primary: mix(taupe, ink, 0.26),
    primaryActive: mix(taupe, ink, 0.48),
    onPrimary: white,
    accent: taupe,
    accentStrong: mix(taupe, ink, 0.3),
    inverse: ink,
    inverseElevated: mix(ink, slate, 0.42),
    inverseSoft: mix(ink, slate, 0.18),
    onInverse: mix(white, sand, 0.14),
    onInverseSoft: mix(sand, slate, 0.2),
    inverseAccent: mix(sand, taupe, 0.3),
    inverseHairline: mix(ink, slate, 0.62),
    focus: mix(taupe, ink, 0.48),
    selection: mix(sand, white, 0.15),
    glowA: sand,
    glowB: taupe,
    shadow: ink,
    ...code,
  },
  dark: {
    canvas: ink,
    surfaceSoft: mix(ink, slate, 0.14),
    surfaceCard: mix(ink, slate, 0.28),
    surfaceStrong: mix(ink, slate, 0.6),
    surfaceRaised: mix(ink, slate, 0.42),
    hairline: mix(ink, slate, 0.62),
    hairlineSoft: mix(ink, slate, 0.36),
    outline: mix(sand, slate, 0.52),
    ink: mix(white, sand, 0.12),
    bodyStrong: mist,
    body: mix(mist, sand, 0.6),
    muted: mix(sand, slate, 0.28),
    mutedSoft: mix(sand, slate, 0.4),
    primary: sand,
    primaryActive: mix(sand, white, 0.6),
    onPrimary: ink,
    accent: mix(taupe, sand, 0.4),
    accentStrong: mix(taupe, sand, 0.62),
    inverse: mix(ink, slate, 0.2),
    inverseElevated: mix(ink, slate, 0.5),
    inverseSoft: mix(ink, slate, 0.06),
    onInverse: mix(white, sand, 0.12),
    onInverseSoft: mix(sand, slate, 0.2),
    inverseAccent: mix(sand, taupe, 0.3),
    inverseHairline: mix(ink, slate, 0.72),
    focus: sand,
    selection: mix(taupe, ink, 0.45),
    glowA: slate,
    glowB: taupe,
    shadow: ink,
    ...code,
  },
});

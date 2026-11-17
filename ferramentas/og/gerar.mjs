/**
 * Gera a imagem de prévia dos links (public/og-image.jpg, 1200 × 630 px) com o mesmo
 * visual do topo da página inicial: o bloco na cor da paleta, o retrato recortado, o
 * primeiro nome gigante ao fundo, os fios com cruzes de registro, o sobretítulo com o
 * asterisco e o nome completo embaixo.
 *
 * O Chrome instalado desenha a página (em 2x, para o texto sair nítido) e o sharp reduz
 * para 1200 × 630 e salva o JPEG.
 *
 * Uso: node ferramentas/og/gerar.mjs [--tema claro|escuro] [--saida public/og-image.jpg]
 */
import { spawn } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const opcao = (nome, padrao) => {
  const i = process.argv.indexOf(`--${nome}`);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : padrao;
};
const nomeTema = opcao('tema', 'claro');
const saida = resolve(raiz, opcao('saida', 'public/og-image.jpg'));
const CHROME = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

/*
 * Os mesmos valores que a paleta Grafite gera para o topo da página (variáveis --c-hero,
 * --c-hero-deep, --c-on-hero e companhia, em src/themes/palettes/grafite.ts). Se a paleta
 * mudar, atualize aqui também.
 */
const temas = {
  claro: {
    hero: '#716363',
    heroDeep: '#574D51',
    heroDeepRgb: '87 77 81',
    onHero: '255 255 255',
    onHeroSoft: '#F4F1EF',
    accent: '#EDE8E5',
    glowA: '220 210 204 / 0.16',
    ghost: 0.07,
    card: '#181722',
    cardInk: '#FBFAF9',
    cardMuted: '#ABA6A6',
  },
  escuro: {
    hero: '#1C1B27',
    heroDeep: '#181722',
    heroDeepRgb: '24 23 34',
    onHero: '251 250 249',
    onHeroSoft: '#E2DCD8',
    accent: '#BCAFAA',
    glowA: '57 63 74 / 0.42',
    ghost: 0.12,
    card: '#FAF9F8',
    cardInk: '#181722',
    cardMuted: '#58555B',
  },
};
const t = temas[nomeTema];
if (!t) {
  console.error(`Tema desconhecido: ${nomeTema}. Use "claro" ou "escuro".`);
  process.exit(2);
}

const cyan = '138 188 206';
const violeta = '177 173 220';

const arquivo = (caminho) => readFileSync(join(raiz, caminho));
const dataUri = (caminho, tipo) => `data:${tipo};base64,${arquivo(caminho).toString('base64')}`;

const fonte = {
  titulo: dataUri('node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-normal.woff2', 'font/woff2'),
  tituloItalico: dataUri('node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-500-italic.woff2', 'font/woff2'),
  texto: dataUri('node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', 'font/woff2'),
};
const retrato = dataUri('src/assets/images/carlos-recorte.webp', 'image/webp');

// o monograma vem do mesmo desenho usado no site
const icones = arquivo('src/components/icons.ts').toString();
const caminho = (nome) => icones.match(new RegExp(`export const ${nome} = "([^"]+)"`))?.[1];
const hexagono = caminho('monogramHexagon');
const letras = caminho('monogramLetters');
if (!hexagono || !letras) {
  console.error('Não achei o desenho do monograma em src/components/icons.ts.');
  process.exit(1);
}

// fios verticais nas bordas e nos terços do conteúdo, como no topo do site
const margem = 64;
const largura = 1200;
const altura = 630;
const colunas = [0, 1 / 3, 2 / 3, 1].map((f) => Math.round(margem + f * (largura - 2 * margem)));
const fioTopo = 56;
const fioNome = 392;

const petala = (graus) =>
  `<rect x="10.8" y="1" width="2.4" height="22" rx="1.2"${graus ? ` transform="rotate(${graus} 12 12)"` : ''}/>`;

const html = /* html */ `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<style>
  @font-face { font-family: 'Cormorant'; src: url(${fonte.titulo}) format('woff2'); font-weight: 500; font-style: normal; }
  @font-face { font-family: 'Cormorant'; src: url(${fonte.tituloItalico}) format('woff2'); font-weight: 500; font-style: italic; }
  @font-face { font-family: 'Inter'; src: url(${fonte.texto}) format('woff2'); font-weight: 100 900; }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { width: ${largura}px; height: ${altura}px; overflow: hidden; background: ${t.heroDeep}; }

  .og {
    position: relative;
    isolation: isolate;
    width: ${largura}px;
    height: ${altura}px;
    overflow: hidden;
    background: linear-gradient(180deg, ${t.hero} 0%, ${t.heroDeep} 100%);
    color: ${t.onHeroSoft};
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .aura { position: absolute; border-radius: 50%; z-index: -1; }
  .aura-a { width: 660px; height: 660px; top: -270px; right: -130px; background: radial-gradient(closest-side, rgb(${t.glowA}), transparent); }
  .aura-b { width: 660px; height: 660px; bottom: -370px; left: -260px; background: radial-gradient(closest-side, rgb(138 120 117 / 0.26), transparent); }
  .aura-c { width: 480px; height: 480px; top: 6%; left: -160px; background: radial-gradient(closest-side, rgb(${violeta} / 0.16), transparent); }
  .aura-d { width: 430px; height: 430px; bottom: -110px; right: -80px; background: radial-gradient(closest-side, rgb(${cyan} / 0.17), transparent); }

  .honeycomb {
    position: absolute;
    inset: 0;
    z-index: -1;
    color: rgb(${t.onHero} / 0.13);
    -webkit-mask-image: radial-gradient(ellipse 46% 56% at 56% 44%, #000 8%, transparent 70%);
    mask-image: radial-gradient(ellipse 46% 56% at 56% 44%, #000 8%, transparent 70%);
  }

  .rule { position: absolute; z-index: -1; background: rgb(${t.onHero} / 0.13); }
  .rule-v { top: 0; bottom: 0; width: 1px; }
  .rule-h { left: 0; right: 0; height: 1px; }
  .mark {
    position: absolute;
    width: 14px;
    height: 14px;
    translate: -50% -50%;
    color: rgb(${t.onHero} / 0.78);
    background:
      linear-gradient(currentColor, currentColor) center / 100% 1px no-repeat,
      linear-gradient(currentColor, currentColor) center / 1px 100% no-repeat;
  }
  .mark-cool { color: rgb(${cyan}); }

  .ghost {
    position: absolute;
    top: 50px;
    left: 600px;
    z-index: 0;
    translate: -50% 0;
    font-family: 'Cormorant', serif;
    font-weight: 500;
    font-size: 292px;
    line-height: 0.8;
    letter-spacing: -0.045em;
    text-transform: uppercase;
    white-space: nowrap;
    color: rgb(${t.onHero} / ${t.ghost});
  }

  .retrato {
    position: absolute;
    bottom: 0;
    left: 662px;
    z-index: 1;
    translate: -50% 0;
    height: 590px;
    aspect-ratio: 1508 / 1691;
    -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent 97%);
    mask-image: linear-gradient(180deg, #000 60%, transparent 97%);
  }
  .retrato img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: 50% 100%;
    filter: drop-shadow(0 40px 48px rgb(24 23 34 / 0.35));
  }
  /* a mesma luz fria do site, recortada pelo contorno do retrato */
  .tinta {
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, rgb(${cyan} / 0.62) 0%, transparent 42%, transparent 58%, rgb(${violeta} / 0.58) 100%);
    background-size: 160% 100%;
    background-position: 50% 0;
    mix-blend-mode: soft-light;
    -webkit-mask: url(${retrato}) center / 100% 100% no-repeat;
    mask: url(${retrato}) center / 100% 100% no-repeat;
  }

  .texto {
    position: absolute;
    top: 94px;
    left: ${margem}px;
    z-index: 2;
    display: grid;
    justify-items: start;
    gap: 16px;
  }
  .kicker {
    display: flex;
    align-items: center;
    gap: 11px;
    color: rgb(${t.onHero});
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .kicker svg { flex: none; width: 18px; height: 18px; }
  .cargo {
    display: flex;
    align-items: center;
    font-family: 'Cormorant', serif;
    font-size: 38px;
    font-style: italic;
    font-weight: 500;
    line-height: 1.1;
    white-space: nowrap;
    color: ${t.accent};
  }
  .cursor { display: inline-block; width: 2px; height: 1.05em; margin-left: 4px; background: currentColor; }
  .frase { max-width: 330px; font-size: 21px; line-height: 1.5; color: rgb(${t.onHero}); }

  .nome { position: absolute; left: ${margem}px; bottom: 46px; z-index: 3; }
  .nome h1 {
    font-family: 'Cormorant', serif;
    font-size: 136px;
    font-weight: 500;
    line-height: 0.9;
    letter-spacing: -0.035em;
    white-space: nowrap;
    color: rgb(${t.onHero});
    text-shadow: 0 0.04em 0.6em rgb(${t.heroDeepRgb} / 0.45);
  }
  .nome em { font-style: italic; color: ${t.accent}; }
  .nome p {
    margin-top: 12px;
    font-family: 'Cormorant', serif;
    font-size: 34px;
    font-weight: 500;
    line-height: 1.1;
    color: ${t.onHeroSoft};
  }

  .cartao {
    position: absolute;
    right: ${margem}px;
    bottom: 50px;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 14px 14px 16px;
    border-radius: 14px;
    background: ${t.card};
    color: ${t.cardInk};
    box-shadow: 0 24px 48px -20px rgb(24 23 34 / 0.6);
  }
  .cartao .monograma { width: 48px; height: 48px; flex: none; }
  .cartao small { display: block; font-size: 14px; color: ${t.cardMuted}; }
  .cartao strong { display: block; margin-top: 2px; font-size: 20px; font-weight: 600; letter-spacing: -0.01em; }
  .cartao .ir {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    margin-left: 12px;
    border-radius: 9px;
    background: ${t.cardInk};
    color: ${t.card};
  }
</style>
</head>
<body>
  <div class="og">
    <span class="aura aura-a"></span>
    <span class="aura aura-b"></span>
    <span class="aura aura-c"></span>
    <span class="aura aura-d"></span>
    <svg class="honeycomb" width="100%" height="100%" aria-hidden="true">
      <defs>
        <pattern id="colmeia" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.15)">
          <path d="M28 66 0 50V16L28 0l28 16v34L28 66v34" fill="none" stroke="currentColor" stroke-width="1"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#colmeia)"></rect>
    </svg>
    ${colunas.map((x) => `<span class="rule rule-v" style="left:${x}px"></span>`).join('')}
    <span class="rule rule-h" style="top:${fioTopo}px"></span>
    <span class="rule rule-h" style="top:${fioNome}px"></span>
    ${colunas.map((x) => `<span class="mark" style="left:${x}px;top:${fioTopo}px"></span>`).join('')}
    <span class="mark" style="left:${colunas[0]}px;top:${fioNome}px"></span>
    <span class="mark mark-cool" style="left:${colunas[3]}px;top:${fioNome}px"></span>

    <p class="ghost">Carlos</p>

    <div class="retrato">
      <img src="${retrato}" alt="">
      <span class="tinta"></span>
    </div>

    <div class="texto">
      <p class="kicker">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <linearGradient id="asterisco" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="rgb(${cyan})"></stop>
              <stop offset="1" stop-color="rgb(${violeta})"></stop>
            </linearGradient>
          </defs>
          <g fill="url(#asterisco)">${[0, 45, 90, 135].map(petala).join('')}</g>
        </svg>
        Portfólio · Piauí, Brasil
      </p>
      <p class="cargo">Desenvolvedor front-end<span class="cursor"></span></p>
      <p class="frase">Desenho e desenvolvo sites e aplicativos fáceis de usar.</p>
    </div>

    <div class="nome">
      <h1>Carlos <em>Michael</em></h1>
      <p>da Silva Sousa</p>
    </div>

    <div class="cartao">
      <svg class="monograma" viewBox="0 0 64 64" aria-hidden="true">
        <path d="${hexagono}" fill="${t.cardInk}"></path>
        <path d="${letras}" fill="${t.card}"></path>
      </svg>
      <span>
        <small>Portfólio</small>
        <strong>seinenk.github.io</strong>
      </span>
      <span class="ir">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
        </svg>
      </span>
    </div>
  </div>
</body>
</html>`;

const pasta = mkdtempSync(join(tmpdir(), 'og-'));
try {
  const pagina = join(pasta, 'og.html');
  const png = join(pasta, 'og.png');
  writeFileSync(pagina, html);

  await new Promise((concluir, falhar) => {
    const chrome = spawn(
      CHROME,
      [
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        '--no-first-run',
        '--no-default-browser-check',
        `--user-data-dir=${join(pasta, 'perfil')}`,
        '--force-device-scale-factor=2',
        `--window-size=${largura},${altura}`,
        '--virtual-time-budget=4000',
        `--screenshot=${png}`,
        pathToFileURL(pagina).href,
      ],
      { stdio: ['ignore', 'ignore', 'pipe'] },
    );
    let erros = '';
    chrome.stderr.on('data', (d) => (erros += d));
    chrome.on('error', falhar);
    chrome.on('exit', (codigo) => (codigo === 0 ? concluir() : falhar(new Error(`O Chrome saiu com código ${codigo}.\n${erros}`))));
  });

  const { width, height } = await sharp(png).metadata();
  if (width !== largura * 2 || height !== altura * 2) {
    throw new Error(`A captura saiu com ${width} × ${height}, e não ${largura * 2} × ${altura * 2}.`);
  }
  await sharp(png)
    .resize(largura, altura, { kernel: 'lanczos3' })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(saida);
  console.log(`Prévia salva em ${saida} (${(statSync(saida).size / 1024).toFixed(1)} KB, tema ${nomeTema}).`);
} finally {
  rmSync(pasta, { recursive: true, force: true });
}

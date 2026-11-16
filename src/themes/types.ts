/**
 * Papéis de cor do design system. Cada paleta precisa definir todos eles,
 * uma vez para o modo claro e outra para o escuro.
 *
 * Os nomes seguem o design system (DESIGN-claude.md): canvas, superfícies,
 * tinta, texto, primária, destaque e as faixas invertidas (as faixas escuras
 * de "produto", como a da trajetória e o rodapé).
 */
export const TOKEN_KEYS = [
  // superfícies
  'canvas', // fundo da página
  'surfaceSoft', // faixas suaves entre seções
  'surfaceCard', // cartões
  'surfaceStrong', // destaques fortes, abas selecionadas
  'surfaceRaised', // menus e popovers
  // linhas
  'hairline', // borda de 1px
  'hairlineSoft', // divisória quase invisível
  'outline', // borda de botões secundários e campos (contraste 3:1)
  // texto
  'ink', // títulos
  'bodyStrong', // parágrafos de destaque
  'body', // texto corrido
  'muted', // texto secundário
  'mutedSoft', // legendas
  // ação e destaque
  'primary', // botão principal
  'primaryActive', // botão principal pressionado ou em foco
  'onPrimary', // texto sobre a primária
  'accent', // destaque decorativo e títulos grandes (3:1)
  'accentStrong', // destaque em texto pequeno (4.5:1)
  // faixas invertidas
  'inverse',
  'inverseElevated',
  'inverseSoft',
  'onInverse',
  'onInverseSoft',
  'inverseAccent',
  'inverseHairline',
  // acentos frios: só em detalhes (brilhos, fios, ícones, etiquetas), nunca em blocos grandes
  'cyan', // ciano decorativo: fios, ícones e títulos grandes (3:1)
  'cyanStrong', // ciano em texto pequeno (4.5:1)
  'cyanSoft', // fundo de etiqueta em ciano
  'violet', // violeta decorativo (3:1)
  'violetStrong', // violeta em texto pequeno (4.5:1)
  'violetSoft', // fundo de etiqueta em violeta
  'inverseCyan', // ciano sobre as faixas invertidas
  'inverseViolet', // violeta sobre as faixas invertidas
  // bloco do topo da página inicial, atrás do retrato recortado
  'hero', // tom mais claro do bloco
  'heroDeep', // tom mais escuro do bloco, onde o retrato se dissolve
  'onHero', // nome e títulos sobre o bloco
  'onHeroSoft', // texto corrido sobre o bloco
  'heroAccent', // itálicos e destaques sobre o bloco
  // diversos
  'focus', // anel de foco
  'selection', // seleção de texto
  'glowA', // brilhos decorativos
  'glowB',
  'shadow',
  // papel: superfície clara dentro das maquetes escuras (quadro de design, página, slide)
  'paper',
  'paperSoft',
  'onPaper',
  'paperMuted',
  'paperAccent',
  // janela de código (fica sobre inverseSoft)
  'codeKey',
  'codeString',
  'codePunct',
  'codeComment',
] as const;

export type TokenKey = (typeof TOKEN_KEYS)[number];
export type ThemeTokens = Record<TokenKey, string>;

export interface Palette {
  /** Identificador usado no HTML (data-palette) e no localStorage. Só letras minúsculas, números e hífen. */
  id: string;
  /** Nome exibido no seletor de paletas. */
  name: string;
  /** Descrição curta, lida por leitores de tela no seletor. */
  description: string;
  /** Ordem no seletor (menor aparece primeiro). */
  order?: number;
  /** As cores originais da paleta, na ordem do print. Aparecem como amostras no seletor. */
  swatches: string[];
  light: ThemeTokens;
  dark: ThemeTokens;
}

/** Ajuda a escrever uma paleta com autocompletar e checagem de tipos. */
export function definePalette(palette: Palette): Palette {
  return palette;
}

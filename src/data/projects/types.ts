import type { ImageMetadata } from 'astro';
import type { IconName } from '../../components/icons';

/**
 * Estrutura de um estudo de caso. Só `slug`, os campos do cartão e `context` são
 * obrigatórios: cada seção da página aparece apenas quando o projeto tem conteúdo
 * para ela, então dá para começar enxuto e completar depois.
 *
 * Nos textos, `código` vira <code> e **destaque** vira <strong>.
 */

export type ProjectType = 'Desenvolvimento' | 'Pesquisa' | 'Produção técnica' | 'Web';
export type ProjectStatus = 'Concluído' | 'Em andamento';

/** Ilustração do projeto (cartão e topo da página), desenhada em ProjectArt.astro. */
export type ArtKind =
  | 'extractorys'
  | 'bee-sense'
  | 'agende-ai'
  | 'dino-runner'
  | 'inclua'
  | 'pytest'
  | 'portfolio'
  | 'layout-simples'
  | 'efipla';

/** Diagrama de "Por dentro", desenhado em ProjectDiagram.astro. */
export type DiagramKind = 'extractorys' | 'bee-sense' | 'dino-runner' | 'portfolio' | 'efipla';

/** Demonstração interativa na página. */
export type DemoKind = 'dino-game' | 'before-after' | 'layout-boxes' | 'pytest-run';

export interface Fact {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  icon?: IconName;
}

export interface Step {
  date: string;
  title: string;
  text: string;
}

export interface Feature {
  icon: IconName;
  title: string;
  text: string;
}

export interface Decision {
  title: string;
  why: string;
  tradeoff?: string;
}

export interface Swatch {
  name: string;
  hex: string;
  role: string;
}

export interface Specimen {
  family: string;
  /** Pilha de fontes usada para desenhar a amostra nesta página. */
  css: string;
  role: string;
  sample: string;
  weight?: number;
  /** Fonte variável: a amostra passeia pelos pesos. */
  variable?: boolean;
  /** Pesos que a fonte variável cobre (padrão: 100 a 900). */
  range?: [number, number];
  note?: string;
}

export interface Token {
  name: string;
  value: string;
}

export interface Shot {
  src: ImageMetadata;
  alt: string;
  caption: string;
  /** 'phone' e 'browser' para telas, 'square' para ícones, 'photo' para fotos (na proporção delas). */
  frame: 'phone' | 'browser' | 'square' | 'photo';
}

export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Lesson {
  title: string;
  text: string;
}

export interface Credit {
  name: string;
  role: string;
  href?: string;
}

export interface Visual {
  intro?: string;
  palette?: Swatch[];
  paletteNote?: string;
  /** Degradê da marca, se houver (cores em ordem). */
  gradient?: string[];
  typography?: Specimen[];
  tokens?: { title: string; items: Token[] }[];
  /** Explicação da marca/logo, quando existe. */
  mark?: string;
  /** Fundo do bloco da marca (qualquer valor de `background`), com o texto claro. */
  markBackground?: string;
  /** Destaques de cor do app para a miniatura interativa (ThemePlayground). */
  appThemes?: AppTheme[];
  /** Texto que apresenta a miniatura. */
  appThemesText?: string;
  gallery?: Shot[];
  /** Título da galeria (padrão: "Telas"). */
  galleryTitle?: string;
  /** Observação sobre as telas da galeria (de quando são, por exemplo). */
  galleryNote?: string;
}

/**
 * Um destaque de cor de um app, com os papéis do Material 3 que a miniatura usa.
 * Os valores são os que o app calcula, não aproximações.
 */
export interface AppTheme {
  name: string;
  seed: string;
  primary: string;
  surface: string;
  surfaceHigh: string;
  outline: string;
  outlineVariant: string;
  onSurface: string;
  onSurfaceVariant: string;
}

/** Um lado do comparador "antes e depois". */
export interface CompareSide {
  src: ImageMetadata;
  alt: string;
  /** Etiqueta curta no canto da imagem ("2023"). */
  tag: string;
  /** Como o leitor de tela chama esse lado ("a versão de 2023"). */
  name: string;
}

export interface Compare {
  before: CompareSide;
  after: CompareSide;
  /** 'browser' para telas largas; 'phone' para prints de celular, numa moldura estreita. */
  frame: 'browser' | 'phone';
  caption: string;
}

/** Fontes que só a página do projeto carrega (configuradas em astro.config.mjs). */
export type PageFont = '--font-efipla-logo' | '--font-efipla-title' | '--font-efipla-text' | '--font-efipla-pixel';

export interface CaseStudy {
  slug: string;
  title: string;
  type: ProjectType;
  period: string;
  status: ProjectStatus;
  /** Texto do cartão (1 a 2 frases). */
  summary: string;
  /** Frase de abertura da página. */
  tagline: string;
  tags: string[];
  note?: string;
  featured?: boolean;
  art: ArtKind;
  /** Resumo rápido no topo: papel, período, equipe, plataforma… */
  facts: Fact[];
  links?: ProjectLink[];
  context: string[];
  challenge?: { problem: string; goals?: string[] };
  story?: Step[];
  features?: Feature[];
  inside?: { title: string; text: string[]; diagram?: DiagramKind };
  decisions?: Decision[];
  demo?: { kind: DemoKind; title: string; text: string; compare?: Compare };
  visual?: Visual;
  tech?: { group: string; items: string[] }[];
  skills?: Lesson[];
  results?: { metrics?: Metric[]; highlights?: string[] };
  lessons?: Lesson[];
  next?: string[];
  credits?: Credit[];
  /** De onde vêm as informações da página. */
  sources?: string;
  /** Fontes extras que a página precisa (amostras de tipografia do projeto). */
  fonts?: PageFont[];
  /** Vídeo do projeto no YouTube (o player só carrega quando a pessoa clica). */
  video?: ProjectVideo;
  /** Testes fora do laboratório, com fotos (seção "Em campo", na aba Construção). */
  fieldwork?: Fieldwork;
}

export interface Fieldwork {
  /** Texto de abertura da seção. */
  text?: string;
  shots: Shot[];
  /** Observação sobre as fotos (de onde vêm, por exemplo). */
  note?: string;
}

export interface ProjectVideo {
  /** Identificador do vídeo no YouTube (o que vem depois de /shorts/ ou de ?v=). */
  youtube: string;
  /** Título curto, também usado pelo leitor de tela no player. */
  title: string;
  /** Texto de abertura da seção. */
  text?: string;
  caption: string;
  /** Vídeo vertical (Shorts): moldura em pé, 9 por 16. */
  vertical?: boolean;
}

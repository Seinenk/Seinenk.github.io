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
  | 'layout-simples';

/** Diagrama de "Por dentro", desenhado em ProjectDiagram.astro. */
export type DiagramKind = 'extractorys' | 'bee-sense' | 'dino-runner' | 'portfolio';

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
  frame: 'phone' | 'browser' | 'square';
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
  gallery?: Shot[];
}

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
  demo?: { kind: DemoKind; title: string; text: string };
  visual?: Visual;
  tech?: { group: string; items: string[] }[];
  skills?: Lesson[];
  results?: { metrics?: Metric[]; highlights?: string[] };
  lessons?: Lesson[];
  next?: string[];
  credits?: Credit[];
  /** De onde vêm as informações da página. */
  sources?: string;
}

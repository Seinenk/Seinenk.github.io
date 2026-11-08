import type { CaseStudy } from './types';
import { extractorys } from './extractorys';
import { agendeAi } from './agende-ai';
import { beeSense } from './bee-sense';
import { dinoRunner } from './dino-runner';
import { inclua } from './inclua';
import { pytest } from './pytest';
import { portfolio } from './portfolio';
import { layoutSimples } from './layout-simples';

export type { CaseStudy, ProjectType, ProjectStatus } from './types';

/** Ordem de exibição: a mesma da página de projetos e da navegação "próximo projeto". */
export const projects: CaseStudy[] = [extractorys, agendeAi, beeSense, dinoRunner, inclua, pytest, portfolio, layoutSimples];

export const projectHref = (slug: string) => `/projeto/${slug}`;

/** Projeto seguinte (em ciclo), para o fim de cada página. */
export function nextProject(slug: string): CaseStudy {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

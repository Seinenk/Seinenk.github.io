import { projects } from './projects';

export { projects, type CaseStudy as Project, type ProjectType } from './projects';

/**
 * Conteúdo do portfólio. A fonte é o Currículo Lattes de Carlos Michael
 * (http://lattes.cnpq.br/7665168854776714), atualizado em 07/10/2026, mais a
 * promoção a diretor de tecnologia do Vale do Mel, informada por ele em 11/2026.
 * Para atualizar o site, edite este arquivo: as páginas leem tudo daqui.
 */

export const profile = {
  name: 'Carlos Michael da Silva Sousa',
  shortName: 'Carlos Michael',
  firstName: 'Carlos',
  middleName: 'Michael',
  lastNames: 'da Silva Sousa',
  location: 'Piauí, Brasil',
  headline: 'Desenvolvedor front-end e designer de UX/UI',
  /** Frases que se alternam no topo da página inicial. */
  roles: [
    'Desenvolvedor front-end',
    'Designer de UX/UI',
    'Pesquisador em inovação',
    'Sistemas embarcados e IoT',
  ],
  lead:
    'Graduado em Análise e Desenvolvimento de Sistemas pelo Instituto Federal do Piauí, hoje sou assessor técnico na Investe Piauí e pesquiso inovação e empreendedorismo.',
  about: [
    'Sou Carlos Michael da Silva Sousa, desenvolvedor front-end e designer de UX/UI. Toda a minha formação foi no Instituto Federal do Piauí (IFPI): o curso técnico em Informática, a graduação em Análise e Desenvolvimento de Sistemas, concluída em 2026, e a Residência Tecnológica em Sistemas Embarcados.',
    'Hoje sou assessor técnico na Investe Piauí, o braço de desenvolvimento do governo do estado, e diretor de tecnologia do ecossistema de inovação Vale do Mel, onde antes atuei como conselheiro fiscal. Também represento a comunidade de startups Guaribas Valley.',
    'Minha experiência está na Ciência da Computação, com ênfase em engenharia de software e gestão de processos, e minhas pesquisas tratam de inovação e empreendedorismo. Os projetos vão de uma plataforma de gestão para pequenos negócios do setor alimentício ao monitoramento de abelhas sem ferrão com Internet das Coisas.',
  ],
  area: 'Ciências Exatas e da Terra · Ciência da Computação · Engenharia de Software',
  cvUpdatedAt: '07/10/2026',
};

export const links = {
  github: { label: 'GitHub', href: 'https://github.com/Seinenk', handle: '@Seinenk' },
  instagram: {
    label: 'Instagram',
    href: 'https://www.instagram.com/carlosmichaels_/',
    handle: '@carlosmichaels_',
  },
  lattes: { label: 'Currículo Lattes', href: 'http://lattes.cnpq.br/7665168854776714', handle: 'Lattes' },
  orcid: {
    label: 'ORCID',
    href: 'https://orcid.org/0009-0000-8549-7762',
    handle: '0009-0000-8549-7762',
  },
};

export interface Experience {
  period: string;
  current?: boolean;
  role: string;
  org: string;
  detail: string;
  tags: string[];
}

export const experience: Experience[] = [
  {
    period: '2025 — atual',
    current: true,
    role: 'Assessor técnico',
    org: 'Investe Piauí',
    detail: 'Assessoria técnica no braço de desenvolvimento do governo do estado do Piauí.',
    tags: ['Colaborador', '44 h semanais'],
  },
  {
    period: '2026 — atual',
    current: true,
    role: 'Diretor de tecnologia',
    org: 'Ecossistema de Inovação Vale do Mel',
    detail:
      'Promovido a diretor de tecnologia na diretoria do ecossistema de inovação Vale do Mel (PI), cargo que ocupa atualmente.',
    tags: ['Diretoria', 'Tecnologia'],
  },
  {
    period: '2025 — 2026',
    role: 'Conselheiro fiscal',
    org: 'Ecossistema de Inovação Vale do Mel',
    detail:
      'Integrou, de forma voluntária, a diretoria do ecossistema de inovação Vale do Mel (PI) até setembro de 2026, quando foi promovido.',
    tags: ['Voluntário', 'Inovação'],
  },
  {
    period: '2025 — 2026',
    role: 'Residente em sistemas embarcados',
    org: 'Instituto Federal do Piauí (IFPI)',
    detail: 'Bolsista da Residência Tecnológica em Sistemas Embarcados, com bolsa da SOFTEX.',
    tags: ['Bolsista', '20 h semanais'],
  },
  {
    period: '2025',
    role: 'Assistente de pesquisa e desenvolvedor front-end',
    org: 'Instituto de Pesquisa Econômica Aplicada (IPEA)',
    detail:
      'Wireframes, soluções front-end e implantação em WordPress para a criação da Coleção Gestão Pública Antirracista.',
    tags: ['Colaborador', 'Front-end', 'WordPress'],
  },
];

export interface Education {
  period: string;
  level: string;
  title: string;
  org: string;
  details: string[];
}

export const education: Education[] = [
  {
    period: '2025 — 2026',
    level: 'Especialização',
    title: 'Residência Tecnológica em Sistemas Embarcados',
    org: 'Instituto Federal do Piauí (IFPI)',
    details: [
      '240 horas, com bolsa da SOFTEX',
      'Projeto final: Projeto Prático de Sistemas Embarcados — Bee Sense',
    ],
  },
  {
    period: '2022 — 2026',
    level: 'Graduação',
    title: 'Análise e Desenvolvimento de Sistemas',
    org: 'Instituto Federal do Piauí (IFPI)',
    details: [
      'TCC: plano de negócio do Agende Aí, para a gestão e a previsibilidade de empreendimentos do setor alimentício',
    ],
  },
  {
    period: '2018 — 2020',
    level: 'Curso técnico',
    title: 'Técnico em Informática',
    org: 'Instituto Federal do Piauí (IFPI)',
    details: ['Primeiro passo na área de tecnologia'],
  },
];

export interface Course {
  period: string;
  title: string;
  org: string;
  hours: number;
}

export const courses: Course[] = [
  {
    period: '2025 — 2026',
    title: 'Sistema Eletrônico de Informações (SEI)',
    org: 'Escola Nacional de Administração Pública (ENAP)',
    hours: 20,
  },
  {
    period: '2025',
    title: 'Captura de Abelhas Sem Ferrão',
    org: 'Serviço Nacional de Aprendizagem Rural (SENAR-DF)',
    hours: 4,
  },
  {
    period: '2024 — 2025',
    title: 'Ideação — Inova Cerrado (projeto BeeCerrado)',
    org: 'Faculdade SEBRAE',
    hours: 60,
  },
  {
    period: '2024',
    title: 'Inglês para Profissionais de Desenvolvimento de TI',
    org: 'Instituto Federal do Piauí (IFPI), extensão universitária',
    hours: 60,
  },
  {
    period: '2024',
    title: 'Conect.AI — IA Generativa em Startups',
    org: 'Virtus Tecnologia',
    hours: 4,
  },
];

export const award = {
  year: '2025',
  title: '1º lugar — Melhor Pitch',
  event: 'IV Mostra Semiárido Digital (MSD)',
  org: 'Instituto Federal do Piauí',
};

export const publication = {
  year: '2026',
  title: 'As barreiras impeditivas do empreendedorismo digital autônomo',
  venue: 'Lumen et Virtus',
  details: 'v. 17, e14746',
  kind: 'Artigo completo publicado em periódico',
};

export const technicalProductions = [
  { year: '2025', title: 'Dino Runner', kind: 'Produto tecnológico' },
  {
    year: '2025',
    title: 'INCLUA: Plataforma de Recursos Pró-Equidade em Políticas Públicas',
    kind: 'Material didático e instrucional',
  },
];

export interface EventItem {
  year: number;
  title: string;
  kind: string;
  note?: string;
  highlight?: boolean;
  lang?: string;
}

export const events: EventItem[] = [
  { year: 2026, title: '4ª Mostra Semiárido Digital (MSD IV)', kind: 'Oficina' },
  {
    year: 2026,
    title: 'Encerramento do Programa Startup Nordeste e Inova Cerrado',
    kind: 'Oficina',
  },
  { year: 2026, title: 'Missão Técnica NEON 2026 — Maceió (AL)', kind: 'Exposição', note: 'Agende Aí' },
  { year: 2026, title: 'Startup Day 2026', kind: 'Exposição', note: 'Agende Aí' },
  { year: 2025, title: 'Web Summit Lisboa 2025', kind: 'Exposição', note: 'BeeCerrado', highlight: true },
  {
    year: 2025,
    title: '5ª Semana Nacional da Educação Profissional e Tecnológica (SNEPT)',
    kind: 'Exposição',
    note: 'BeeCerrado',
  },
  { year: 2025, title: '2º Encontro Presencial Startup Nordeste', kind: 'Oficina' },
  {
    year: 2025,
    title: 'Palestra “Startups que transformam vidas: inovações para o Semiárido”',
    kind: 'Exposição',
    note: 'Comunidade Guaribas Valley',
  },
  {
    year: 2025,
    title:
      'Startup Day Picos 2025 — Potencializando conexões: o Ecossistema Vale do Mel e a comunidade de startups de Picos',
    kind: 'Seminário',
  },
  { year: 2024, title: 'TechMeet 2024 — Mambee: IA e Inovação no Desenvolvimento', kind: 'Seminário' },
  {
    year: 2024,
    title: 'Palestra SEBRAE “Like a Boss: como transformar ideias em negócios inovadores”',
    kind: 'Seminário',
  },
  { year: 2024, title: 'Startup Day 2024', kind: 'Exposição' },
  { year: 2024, title: 'Palestra “Language Acquisition”', kind: 'Seminário', lang: 'en' },
  { year: 2022, title: 'Apresentação da empresa Vizo', kind: 'Encontro' },
];

export const organizedEvents = [
  { year: 2025, title: 'BeeSense — Investe Piauí', kind: 'Congresso' },
  { year: 2025, title: '5ª Semana Nacional da Educação Profissional e Tecnológica', kind: 'Evento' },
];

export const skills = [
  {
    area: 'Design e experiência',
    icon: 'pen-tool',
    items: ['UX/UI design', 'Wireframes', 'Interfaces acessíveis', 'Design responsivo'],
  },
  {
    area: 'Front-end',
    icon: 'code-xml',
    items: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
  {
    area: 'Engenharia de software',
    icon: 'layers',
    items: ['Python', 'Java', 'Testes com pytest', 'Gestão de processos', 'Produtos SaaS'],
  },
  {
    area: 'Embarcados e IoT',
    icon: 'cpu',
    items: ['Sistemas embarcados', 'Raspberry Pi Pico W', 'Internet das Coisas', 'Sensores'],
  },
  {
    area: 'Inovação',
    icon: 'rocket',
    items: ['Empreendedorismo digital', 'Pitch', 'Ecossistemas de inovação', 'Startups'],
  },
] as const;

export const languages = [
  { name: 'Português', summary: 'Língua materna' },
  {
    name: 'Inglês',
    summary: 'Compreende e lê bem; fala e escreve razoavelmente',
    levels: [
      ['Compreende', 'Bem'],
      ['Lê', 'Bem'],
      ['Fala', 'Razoavelmente'],
      ['Escreve', 'Razoavelmente'],
    ],
  },
  {
    name: 'Espanhol',
    summary: 'Compreende e lê bem; fala razoavelmente; escreve pouco',
    levels: [
      ['Compreende', 'Bem'],
      ['Lê', 'Bem'],
      ['Fala', 'Razoavelmente'],
      ['Escreve', 'Pouco'],
    ],
  },
];

/** Números de destaque, todos contados a partir do Lattes. */
export const stats = [
  { value: events.length, suffix: '', label: 'eventos, feiras e exposições' },
  { value: projects.filter((p) => p.type === 'Desenvolvimento' || p.type === 'Pesquisa').length, suffix: '', label: 'projetos de pesquisa e desenvolvimento' },
  { value: new Set(experience.map((e) => e.org)).size, suffix: '', label: 'instituições em que atuo ou atuei' },
  { value: 1, suffix: 'º', label: 'lugar em pitch na Mostra Semiárido Digital' },
];

export const marquee = [
  'UX/UI design',
  'Front-end',
  'Acessibilidade',
  'Engenharia de software',
  'Python',
  'pytest',
  'WordPress',
  'Internet das Coisas',
  'Raspberry Pi Pico W',
  'Sistemas embarcados',
  'Gestão de processos',
  'Inovação',
  'Empreendedorismo',
];

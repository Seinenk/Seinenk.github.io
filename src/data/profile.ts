import { projects } from './projects';

export { projects, type CaseStudy as Project, type ProjectType } from './projects';

/**
 * Conteúdo do portfólio. A fonte é o Currículo Lattes de Carlos Michael
 * (http://lattes.cnpq.br/7665168854776714), atualizado em 07/10/2026, mais a
 * promoção a diretor de tecnologia do Vale do Mel, informada por ele em 11/2026.
 * Para atualizar o site, edite este arquivo: as páginas leem tudo daqui.
 *
 * Como escrever aqui: primeira pessoa, frases curtas, termo técnico explicado na
 * primeira vez que aparece, períodos por extenso ("2025 a 2026", "2025 até hoje")
 * e nenhum travessão. O guia completo está no README.
 */

export const profile = {
  name: 'Carlos Michael da Silva Sousa',
  shortName: 'Carlos Michael',
  firstName: 'Carlos',
  middleName: 'Michael',
  lastNames: 'da Silva Sousa',
  location: 'Piauí, Brasil',
  headline: 'Desenvolvedor front-end e designer de UX/UI',
  /** Frases que se alternam no topo da página inicial (cada uma cabe numa linha do celular). */
  roles: ['Desenvolvedor front-end', 'Designer de UX/UI', 'Pesquisador em inovação', 'Desenvolvedor de IoT'],
  lead:
    'Desenho e desenvolvo sites e aplicativos fáceis de usar. Sou formado pelo Instituto Federal do Piauí (IFPI) e trabalho como assessor técnico na Investe Piauí.',
  about: [
    'Sou Carlos Michael, desenvolvedor front-end e designer de UX/UI. Na prática, planejo como um site ou aplicativo vai funcionar, desenho as telas e desenvolvo a parte que as pessoas veem e usam.',
    'Estudei no Instituto Federal do Piauí (IFPI). Lá fiz o curso técnico em Informática, a graduação em Análise e Desenvolvimento de Sistemas, que concluí em 2026, e a Residência Tecnológica em Sistemas Embarcados, uma formação prática em programar placas eletrônicas.',
    'Hoje trabalho como assessor técnico na Investe Piauí, ligada ao governo do estado, e sou diretor de tecnologia do Vale do Mel, uma rede de inovação do Piauí. Também represento a comunidade de startups Guaribas Valley e pesquiso inovação e empreendedorismo.',
  ],
  area: 'Ciência da Computação, com foco em engenharia de software',
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
    period: '2025 até hoje',
    current: true,
    role: 'Assessor técnico',
    org: 'Investe Piauí',
    detail: 'Dou apoio técnico à equipe da Investe Piauí, ligada ao governo do estado, que trabalha pelo desenvolvimento do Piauí.',
    tags: ['Colaborador', '44 h semanais'],
  },
  {
    period: '2026 até hoje',
    current: true,
    role: 'Diretor de tecnologia',
    org: 'Ecossistema de Inovação Vale do Mel',
    detail:
      'Cuido da área de tecnologia na diretoria do Vale do Mel (PI), uma rede de inovação. Assumi o cargo em setembro de 2026.',
    tags: ['Diretoria', 'Tecnologia'],
  },
  {
    period: '2025 a 2026',
    role: 'Conselheiro fiscal',
    org: 'Ecossistema de Inovação Vale do Mel',
    detail:
      'Fiz parte da diretoria do Vale do Mel (PI) como voluntário até setembro de 2026, quando fui promovido a diretor de tecnologia.',
    tags: ['Voluntário', 'Inovação'],
  },
  {
    period: '2025 a 2026',
    role: 'Residente em sistemas embarcados',
    org: 'Instituto Federal do Piauí (IFPI)',
    detail:
      'Fiz a Residência Tecnológica em Sistemas Embarcados, com bolsa da SOFTEX, aprendendo a programar placas eletrônicas e sensores.',
    tags: ['Bolsista', '20 h semanais'],
  },
  {
    period: '2025',
    role: 'Assistente de pesquisa e desenvolvedor front-end',
    org: 'Instituto de Pesquisa Econômica Aplicada (IPEA)',
    detail:
      'Trabalhei na criação da Coleção Gestão Pública Antirracista. Fiz os wireframes (rascunhos das telas), desenvolvi a parte visual e publiquei o conteúdo em WordPress.',
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
    period: '2025 a 2026',
    level: 'Especialização',
    title: 'Residência Tecnológica em Sistemas Embarcados',
    org: 'Instituto Federal do Piauí (IFPI)',
    details: [
      '240 horas, com bolsa da SOFTEX',
      'Projeto final (Projeto Prático de Sistemas Embarcados): Bee Sense',
    ],
  },
  {
    period: '2022 a 2026',
    level: 'Graduação',
    title: 'Análise e Desenvolvimento de Sistemas',
    org: 'Instituto Federal do Piauí (IFPI)',
    details: [
      'TCC (trabalho de conclusão de curso): o plano de negócio do Agende Aí, que ajuda negócios de alimentação a se organizar e a ter mais previsibilidade',
    ],
  },
  {
    period: '2018 a 2020',
    level: 'Curso técnico',
    title: 'Técnico em Informática',
    org: 'Instituto Federal do Piauí (IFPI)',
    details: ['Meu primeiro passo na área de tecnologia'],
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
    period: '2025 a 2026',
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
    period: '2024 a 2025',
    title: 'Ideação: Inova Cerrado (projeto BeeCerrado)',
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
    title: 'Conect.AI: IA Generativa em Startups',
    org: 'Virtus Tecnologia',
    hours: 4,
  },
];

export const award = {
  year: '2025',
  title: '1º lugar em Melhor Pitch',
  event: 'IV Mostra Semiárido Digital (MSD)',
  org: 'Instituto Federal do Piauí',
};

export const publication = {
  year: '2026',
  title: 'As barreiras impeditivas do empreendedorismo digital autônomo',
  venue: 'Lumen et Virtus',
  details: 'v. 17, e14746',
  kind: 'Artigo completo em revista científica',
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
  { year: 2026, title: 'Missão Técnica NEON 2026, em Maceió (AL)', kind: 'Exposição', note: 'Agende Aí' },
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
      'Startup Day Picos 2025: “Potencializando conexões: o Ecossistema Vale do Mel e a comunidade de startups de Picos”',
    kind: 'Seminário',
  },
  { year: 2024, title: 'TechMeet 2024: “Mambee: IA e Inovação no Desenvolvimento”', kind: 'Seminário' },
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
  { year: 2025, title: 'BeeSense (Investe Piauí)', kind: 'Congresso' },
  { year: 2025, title: '5ª Semana Nacional da Educação Profissional e Tecnológica', kind: 'Evento' },
];

export const skills = [
  {
    area: 'Design e experiência',
    icon: 'pen-tool',
    items: ['Design de UX/UI', 'Wireframes', 'Interfaces acessíveis', 'Design responsivo'],
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
    summary: 'Entendo e leio bem. Falo e escrevo razoavelmente.',
    levels: [
      ['Compreensão', 'Bem'],
      ['Leitura', 'Bem'],
      ['Fala', 'Razoavelmente'],
      ['Escrita', 'Razoavelmente'],
    ],
  },
  {
    name: 'Espanhol',
    summary: 'Entendo e leio bem. Falo razoavelmente e escrevo pouco.',
    levels: [
      ['Compreensão', 'Bem'],
      ['Leitura', 'Bem'],
      ['Fala', 'Razoavelmente'],
      ['Escrita', 'Pouco'],
    ],
  },
];

/** Números de destaque, todos contados a partir do Lattes. */
export const stats = [
  { value: events.length, suffix: '', label: 'participações em eventos de tecnologia e inovação' },
  { value: projects.filter((p) => p.type === 'Desenvolvimento' || p.type === 'Pesquisa').length, suffix: '', label: 'projetos de pesquisa e desenvolvimento' },
  { value: new Set(experience.map((e) => e.org)).size, suffix: '', label: 'instituições onde trabalhei ou trabalho' },
  { value: 1, suffix: 'º', label: 'lugar no prêmio de Melhor Pitch da Mostra Semiárido Digital' },
];

export const marquee = [
  'Design de interfaces',
  'Sites e aplicativos',
  'Acessibilidade',
  'Engenharia de software',
  'Python',
  'Testes automatizados',
  'WordPress',
  'Internet das Coisas',
  'Raspberry Pi Pico W',
  'Sistemas embarcados',
  'Gestão de processos',
  'Inovação',
  'Empreendedorismo',
];

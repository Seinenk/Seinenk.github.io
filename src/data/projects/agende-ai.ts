import type { CaseStudy } from './types';

/** Fonte: Currículo Lattes (projeto, TCC e eventos). */
export const agendeAi: CaseStudy = {
  slug: 'agende-ai',
  title: 'Agende Aí',
  type: 'Desenvolvimento',
  period: '2024 — atual',
  status: 'Em andamento',
  summary:
    'Plataforma SaaS para pequenos empreendimentos do setor alimentício. Reúne agendamentos, controle de estoque e logística para melhorar o atendimento e agilizar processos administrativos e operacionais.',
  tagline: 'Gestão e previsibilidade para pequenos negócios de comida.',
  tags: ['SaaS', 'Gestão', 'Produto digital'],
  note: 'Tema do TCC; exposto no Startup Day 2026 e na Missão Técnica NEON 2026.',
  featured: true,
  art: 'agende-ai',
  facts: [
    { label: 'Papel', value: 'Idealização do produto e plano de negócio' },
    { label: 'Período', value: '2024 — atual' },
    { label: 'Formato', value: 'Plataforma SaaS' },
    { label: 'Vitrines', value: 'Startup Day 2026 · Missão Técnica NEON 2026' },
  ],
  context: [
    'Em pequenos negócios de comida, agenda, estoque e entregas muitas vezes ficam em lugares diferentes. O Agende Aí propõe reunir tudo numa plataforma só, para melhorar o atendimento e agilizar o dia a dia.',
    'O projeto virou o tema do meu Trabalho de Conclusão de Curso em Análise e Desenvolvimento de Sistemas, na forma de um **plano de negócio** voltado à gestão e à previsibilidade desses empreendimentos.',
  ],
  challenge: {
    problem:
      'Dar previsibilidade a pequenos empreendimentos do setor alimentício: saber o que foi agendado, o que existe em estoque e o que precisa sair para entrega, sem depender de controles soltos.',
    goals: [
      'Organizar os agendamentos de clientes e pedidos',
      'Controlar o estoque',
      'Planejar a logística',
      'Melhorar o atendimento e agilizar processos administrativos e operacionais',
    ],
  },
  story: [
    {
      date: '2024',
      title: 'A ideia',
      text: 'O projeto começa como uma plataforma de gestão para pequenos negócios do setor alimentício.',
    },
    {
      date: '2022 — 2026',
      title: 'Plano de negócio no TCC',
      text: 'Na graduação em Análise e Desenvolvimento de Sistemas no IFPI, o Agende Aí vira o tema do TCC: um plano de negócio para a gestão e a previsibilidade desses empreendimentos.',
    },
    {
      date: '2026',
      title: 'Startup Day 2026',
      text: 'Exposição do Agende Aí no Startup Day 2026.',
    },
    {
      date: '2026',
      title: 'Missão Técnica NEON',
      text: 'Exposição na Missão Técnica NEON 2026, em Maceió (AL).',
    },
  ],
  features: [
    { icon: 'calendar', title: 'Agendamentos', text: 'Pedidos e atendimentos organizados numa agenda única.' },
    { icon: 'package', title: 'Controle de estoque', text: 'O que entra e o que sai, num controle só.' },
    { icon: 'truck', title: 'Logística', text: 'Entregas planejadas junto com a agenda e o estoque.' },
    { icon: 'trending-up', title: 'Previsibilidade', text: 'Informação reunida para decidir com antecedência, e não na correria.' },
  ],
  tech: [{ group: 'Produto', items: ['SaaS', 'Gestão de processos', 'Plano de negócio', 'Pitch'] }],
  skills: [
    { title: 'Pensamento de produto', text: 'Partir de uma dor concreta de um público e desenhar a solução como serviço.' },
    { title: 'Plano de negócio', text: 'Transformar uma ideia de produto num plano de negócio, com o rigor de um TCC.' },
    { title: 'Gestão de processos', text: 'Mapear agenda, estoque e logística como partes de um mesmo fluxo.' },
    { title: 'Pitch', text: 'Apresentar a ideia em eventos de inovação, para públicos diferentes.' },
  ],
  results: {
    highlights: [
      'Tema do TCC em Análise e Desenvolvimento de Sistemas no IFPI.',
      'Exposto no Startup Day 2026 e na Missão Técnica NEON 2026, em Maceió.',
    ],
  },
  sources: 'Currículo Lattes.',
};

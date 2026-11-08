import type { CaseStudy } from './types';

/**
 * Fontes: Currículo Lattes (projeto, cursos e eventos) e o repositório público
 * EmilenyRochaLeal/beeSense (descrição e app em Flutter).
 */
export const beeSense: CaseStudy = {
  slug: 'bee-sense',
  title: 'Bee Sense',
  type: 'Desenvolvimento',
  period: '2025 — 2026',
  status: 'Concluído',
  summary:
    'Sistema de Internet das Coisas com Raspberry Pi Pico W e sensores que monitora iscas de captura de abelhas sem ferrão: identifica a chegada de colônias e de possíveis invasores e torna a captura e a realocação mais seguras.',
  tagline: 'Internet das Coisas a serviço das abelhas nativas do Cerrado.',
  tags: ['IoT', 'Raspberry Pi Pico W', 'Sensores', 'Meliponicultura'],
  note: 'Projeto final da Residência Tecnológica em Sistemas Embarcados.',
  featured: true,
  art: 'bee-sense',
  facts: [
    { label: 'Contexto', value: 'Projeto final da Residência Tecnológica em Sistemas Embarcados (IFPI · SOFTEX)' },
    { label: 'Período', value: '2025 — 2026' },
    { label: 'Equipe', value: 'Projeto em equipe; app em Flutter por Emileny Rocha Leal' },
    { label: 'Plataforma', value: 'Raspberry Pi Pico W, sensores e app' },
  ],
  links: [{ label: 'Repositório no GitHub', href: 'https://github.com/EmilenyRochaLeal/beeSense', icon: 'github' }],
  context: [
    'A meliponicultura é a criação de abelhas sem ferrão, nativas do Brasil. Para formar novas colônias, quem cria espalha **iscas**: caixas que imitam o oco de uma árvore, à espera de que um enxame se mude para lá.',
    'O Bee Sense leva sensores e uma Raspberry Pi Pico W até essas iscas para avisar quando uma colônia chega ou quando aparece um possível invasor. A ideia é que a captura e a realocação aconteçam na hora certa e com mais segurança.',
    'O projeto faz parte do mesmo universo do **BeeCerrado**, uma plataforma gamificada de apoio à captura de abelhas nativas do Cerrado, que foi exposta no Web Summit Lisboa 2025.',
  ],
  challenge: {
    problem:
      'Saber o que acontece em cada isca sem precisar ir até ela: se uma colônia chegou, se apareceu um invasor e quando é o momento de capturar e realocar.',
    goals: [
      'Monitorar as iscas com sensores ligados a uma Raspberry Pi Pico W',
      'Identificar a chegada de colônias e de possíveis invasores',
      'Tornar a captura e a realocação mais seguras',
      'Levar as informações e conteúdo sobre o manejo para um app',
    ],
  },
  story: [
    {
      date: '2024 — 2025',
      title: 'Ideação no Inova Cerrado',
      text: 'O curso de ideação da Faculdade SEBRAE, no programa Inova Cerrado, foi feito com o projeto BeeCerrado, em 60 horas.',
    },
    {
      date: '2025',
      title: 'Formação no tema',
      text: 'Curso de Captura de Abelhas Sem Ferrão, do SENAR-DF, sobre o manejo das iscas e das colônias.',
    },
    {
      date: '2025',
      title: 'Vitrines',
      text: 'O BeeCerrado foi exposto na 5ª Semana Nacional da Educação Profissional e Tecnológica e no Web Summit Lisboa 2025, e o BeeSense foi apresentado num congresso organizado na Investe Piauí.',
    },
    {
      date: 'Out — dez 2025',
      title: 'O app',
      text: 'O app em Flutter, de Emileny Rocha Leal, nasceu com a navegação entre Início, Isca e Perfil e cartões informativos sobre o mel, a montagem da isca e a saúde das abelhas.',
    },
    {
      date: '2025 — 2026',
      title: 'Projeto final da Residência',
      text: 'O Bee Sense fechou a Residência Tecnológica em Sistemas Embarcados como o Projeto Prático de Sistemas Embarcados.',
    },
  ],
  features: [
    {
      icon: 'radio',
      title: 'Iscas monitoradas',
      text: 'Sensores ligados a uma Raspberry Pi Pico W acompanham as iscas de captura no campo.',
    },
    {
      icon: 'bell',
      title: 'Aviso de chegada',
      text: 'Identifica a chegada de uma colônia e a presença de possíveis invasores.',
    },
    {
      icon: 'shield-check',
      title: 'Captura mais segura',
      text: 'Com a informação na hora certa, a captura e a realocação ficam mais seguras para as abelhas.',
    },
    {
      icon: 'smartphone',
      title: 'App de apoio',
      text: 'Navegação entre Início, Isca e Perfil e cartões com conteúdo sobre o manejo das abelhas sem ferrão.',
    },
  ],
  inside: {
    title: 'Da isca ao celular',
    text: [
      'Os sensores ficam na isca e são lidos por uma Raspberry Pi Pico W, uma placa pequena, barata e com Wi-Fi, que cabe no campo. Quando algo muda, o sistema avisa quem cuida das iscas.',
      'O app reúne as iscas e o conhecimento sobre o manejo, para que quem está começando na meliponicultura saiba o que fazer com o aviso.',
    ],
    diagram: 'bee-sense',
  },
  visual: {
    intro:
      'O app usa o Material 3 do Flutter, com um verde vivo de destaque sobre superfícies claras, e ilustra os conteúdos com fotos do manejo.',
    palette: [
      { name: 'Verde', hex: '#06D6A0', role: 'Destaque do app' },
      { name: 'Menta', hex: '#DDFDE7', role: 'Fundos suaves' },
      { name: 'Grafite', hex: '#1D1B20', role: 'Texto principal' },
      { name: 'Cinza', hex: '#49454F', role: 'Texto secundário' },
    ],
    typography: [
      {
        family: 'Roboto',
        css: "Roboto, 'Segoe UI', Arial, var(--font-sans)",
        role: 'Fonte padrão do Material no Android',
        sample: 'Página de Isca',
      },
    ],
  },
  tech: [
    { group: 'Hardware', items: ['Raspberry Pi Pico W', 'Sensores', 'Wi-Fi'] },
    { group: 'App', items: ['Flutter', 'Dart', 'Material 3'] },
    { group: 'Domínio', items: ['Meliponicultura', 'Iscas de captura', 'Cerrado'] },
  ],
  skills: [
    { title: 'Embarcados com propósito', text: 'Levar sensores e microcontrolador para um problema real do campo, fora do laboratório.' },
    { title: 'Internet das Coisas', text: 'Pensar o caminho do dado: do sensor na isca até o aviso para quem cuida dela.' },
    { title: 'Trabalho em equipe', text: 'Dividir o sistema entre hardware e app e integrar as partes num projeto só.' },
    { title: 'Conhecer o domínio', text: 'Aprender como funcionam as iscas, as colônias e os riscos da captura antes de propor a tecnologia.' },
    { title: 'Pitch e apresentação', text: 'Levar o projeto a eventos, de um congresso na Investe Piauí ao Web Summit Lisboa.' },
  ],
  results: {
    highlights: [
      'Projeto final da Residência Tecnológica em Sistemas Embarcados, de 240 horas, com bolsa da SOFTEX.',
      'Apresentado num congresso organizado na Investe Piauí, em 2025.',
      'O BeeCerrado, do mesmo universo, foi exposto no Web Summit Lisboa 2025 e na 5ª SNEPT.',
    ],
  },
  credits: [
    { name: 'Emileny Rocha Leal', role: 'Repositório e app em Flutter', href: 'https://github.com/EmilenyRochaLeal' },
  ],
  sources: 'Currículo Lattes e repositório público do projeto.',
};

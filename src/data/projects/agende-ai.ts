import type { CaseStudy } from './types';
import loja from '../../assets/images/projetos/agende-ai/loja.webp';
import carrinho from '../../assets/images/projetos/agende-ai/carrinho.webp';
import pedidos from '../../assets/images/projetos/agende-ai/pedidos.webp';
import login from '../../assets/images/projetos/agende-ai/login.webp';
import cadastroVenda from '../../assets/images/projetos/agende-ai/cadastro-venda.webp';

/**
 * Fontes: Currículo Lattes (projeto, TCC e eventos) e o arquivo "Agenda aí" do time
 * Aprendizagem no Figma (telas para computador e celular, logos e peças de divulgação).
 * A data do design vem dos dados de exemplo das telas (julho e agosto de 2025). Ficaram
 * de fora a tela inicial, que usa logos de marcas reais como lojas de exemplo, e a de
 * perfil, que mostra um e-mail pessoal.
 */
export const agendeAi: CaseStudy = {
  slug: 'agende-ai',
  title: 'Agende Aí',
  type: 'Desenvolvimento',
  period: '2024 — atual',
  status: 'Em andamento',
  summary:
    'Plataforma SaaS para pequenos empreendimentos do setor alimentício. Reúne agendamentos, controle de estoque e logística para melhorar o atendimento e agilizar processos administrativos e operacionais.',
  tagline: 'Gestão e previsibilidade para pequenos negócios de comida.',
  tags: ['SaaS', 'Gestão', 'Produto digital', 'UX/UI'],
  note: 'Tema do TCC; exposto no Startup Day 2026 e na Missão Técnica NEON 2026.',
  featured: true,
  art: 'agende-ai',
  facts: [
    { label: 'Papel', value: 'Idealização do produto, plano de negócio e design UX/UI' },
    { label: 'Período', value: '2024 — atual' },
    { label: 'Formato', value: 'Plataforma SaaS' },
    { label: 'Vitrines', value: 'Startup Day 2026 · Missão Técnica NEON 2026' },
  ],
  context: [
    'Em pequenos negócios de comida, agenda, estoque e entregas muitas vezes ficam em lugares diferentes. O Agende Aí propõe reunir tudo numa plataforma só, para melhorar o atendimento e agilizar o dia a dia.',
    'O projeto virou o tema do meu Trabalho de Conclusão de Curso em Análise e Desenvolvimento de Sistemas, na forma de um **plano de negócio** voltado à gestão e à previsibilidade desses empreendimentos.',
    'A ideia também ganhou **design no Figma**: telas para computador e celular do caminho de quem compra, da loja ao pedido marcado, e do cadastro de quem vende.',
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
      date: '2025',
      title: 'O design no Figma',
      text: 'As telas ganham forma no Figma, em versão para computador e celular: login, cadastro de quem vende, página inicial, loja, cesto, pedidos, notificações e perfil, com uma página de logos e peças de divulgação.',
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
  decisions: [
    {
      title: 'Pedido marcado para um dia',
      why: 'Na loja, o cardápio aparece por dia, e o cesto pede a data, o horário de retirada e a forma de pagamento. O pedido chega ao negócio com dia e hora marcados, que é a previsibilidade que o projeto busca.',
    },
    {
      title: 'A agenda da loja à vista',
      why: 'Ao lado de cada loja ficam os horários da semana, se ela está aberta e com quanta antecedência aceita pedidos (“20 minutos de antecedência”). Quem compra sabe o que dá para pedir antes de montar o cesto.',
    },
    {
      title: 'Cada pedido com um estado',
      why: 'A tela de pedidos separa os pendentes dos encerrados, com etiquetas de Pendente, Concluído e Cancelado. Só o pedido pendente tem o botão Cancelar.',
    },
    {
      title: 'Avisos que acompanham o pedido',
      why: 'As notificações contam o que aconteceu com cada agendamento: pedido confirmado, pedido cancelado e horário de retirada próximo, além de avisos do sistema.',
    },
    {
      title: 'Uma entrada para quem vende',
      why: 'Além do login, há um cadastro de venda em duas etapas, com o convite “Comece a vender no Agende aí e tenha mais controle nas vendas!”.',
    },
    {
      title: 'Computador e celular',
      why: 'Cada tela tem as duas versões. No celular, os atalhos do topo viram uma barra de abas embaixo, com Início, Pedidos e Perfil.',
    },
  ],
  visual: {
    intro:
      'Vermelho e laranja, num degradê que vai da barra do topo às ondas do login, sobre um fundo creme. Os cartões são brancos com borda laranja, e o vermelho fica para as ações principais.',
    palette: [
      { name: 'Vermelho', hex: '#FF0000', role: 'Ações principais e logo' },
      { name: 'Laranja', hex: '#FF5800', role: 'Bordas dos cartões e fim do degradê' },
      { name: 'Tijolo', hex: '#D91C0D', role: 'Ondas do login e do cadastro' },
      { name: 'Creme', hex: '#FFF5F0', role: 'Fundo das telas' },
      { name: 'Branco', hex: '#FFFFFF', role: 'Cartões e formulários' },
      { name: 'Preto', hex: '#000000', role: 'Texto' },
    ],
    gradient: ['#FF0000', '#FF5800'],
    paletteNote: 'Cores medidas nas telas exportadas do Figma.',
    mark: 'O logo é o próprio nome, “Agende aí”, em **letra cursiva**: num degradê do vermelho ao laranja sobre o creme, ou em branco sobre o degradê da barra do topo. No Figma, uma página só de logos guarda o nome em vários tamanhos e outras propostas.',
    markBackground: 'radial-gradient(120% 90% at 15% 0%, #b3240c 0%, #7a1206 55%, #4a0a03 100%)',
    galleryTitle: 'Telas no Figma',
    gallery: [
      {
        src: loja,
        alt: 'Página de uma loja de exemplo: foto do salão, “Aberto”, nota 4,9, “20 minutos de antecedência” e o bairro; ao lado, a agenda da semana; embaixo, os dias da semana em abas e os pratos com preço.',
        caption: 'A loja: agenda da semana e cardápio por dia.',
        frame: 'browser',
      },
      {
        src: carrinho,
        alt: 'Cesto com dois itens e botões de quantidade; ao lado, o resumo: pedido para quinta, 07/08, seleção do horário de retirada, pagamento na retirada, total de R$ 22,00 e os botões Cancelar pedido e Confirmar pedido.',
        caption: 'O cesto: dia, horário de retirada e pagamento.',
        frame: 'browser',
      },
      {
        src: pedidos,
        alt: 'Tela de pedidos: em Pendentes, um pedido com data, hora, itens, total e o botão Cancelar; em Encerrados, um pedido Concluído e um Cancelado.',
        caption: 'Os pedidos, separados por estado.',
        frame: 'browser',
      },
      {
        src: login,
        alt: 'Login: formulário com nome, senha, “Esqueceu sua senha?”, os botões Entrar e Entrar com o Google, sobre ondas vermelhas e laranja; ao lado, “Bem vindo de volta!!!” e uma ilustração de pessoa ao computador.',
        caption: 'O login, com as ondas da marca.',
        frame: 'browser',
      },
      {
        src: cadastroVenda,
        alt: 'Cadastro de venda, etapa 1 de 2: nome, e-mail, telefone, senha e confirmação de senha, com o botão Prosseguir; ao lado, “Simples e fácil!!!” e “Comece a vender no Agende aí e tenha mais controle nas vendas!”.',
        caption: 'O cadastro de quem vende, em duas etapas.',
        frame: 'browser',
      },
    ],
    galleryNote: 'Versão para computador de cada tela, exportada do Figma; todas têm também a versão para celular. Lojas, pratos, preços e pedidos são dados de exemplo.',
  },
  tech: [
    { group: 'Produto', items: ['SaaS', 'Gestão de processos', 'Plano de negócio', 'Pitch'] },
    { group: 'Design', items: ['Figma', 'Telas para computador e celular', 'Logo', 'Peças de divulgação'] },
  ],
  skills: [
    { title: 'Pensamento de produto', text: 'Partir de uma dor concreta de um público e desenhar a solução como serviço.' },
    { title: 'Plano de negócio', text: 'Transformar uma ideia de produto num plano de negócio, com o rigor de um TCC.' },
    { title: 'Gestão de processos', text: 'Mapear agenda, estoque e logística como partes de um mesmo fluxo.' },
    { title: 'Pitch', text: 'Apresentar a ideia em eventos de inovação, para públicos diferentes.' },
    {
      title: 'Design UX/UI',
      text: 'Desenhar no Figma o caminho de quem compra, da loja ao pedido marcado, nas versões para computador e celular.',
    },
  ],
  results: {
    highlights: [
      'Tema do TCC em Análise e Desenvolvimento de Sistemas no IFPI.',
      'Exposto no Startup Day 2026 e na Missão Técnica NEON 2026, em Maceió.',
      'Design no Figma para computador e celular: login, cadastro de quem vende, loja, cesto, pedidos e notificações.',
    ],
  },
  sources: 'Currículo Lattes e o arquivo “Agenda aí” do time Aprendizagem no Figma.',
};

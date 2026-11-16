import type { CaseStudy } from './types';
import v1Login from '../../assets/images/projetos/crohnease/v1-login.webp';
import v1Inicio from '../../assets/images/projetos/crohnease/v1-inicio.webp';
import v1Atalhos from '../../assets/images/projetos/crohnease/v1-atalhos.webp';
import v1Sintomas from '../../assets/images/projetos/crohnease/v1-sintomas.webp';
import v1Aplicacoes from '../../assets/images/projetos/crohnease/v1-aplicacoes.webp';
import v2Login from '../../assets/images/projetos/crohnease/v2-login.webp';
import v2Condicao from '../../assets/images/projetos/crohnease/v2-cadastro-condicao.webp';
import v2Dados from '../../assets/images/projetos/crohnease/v2-cadastro-dados.webp';
import v2RemediosVazio from '../../assets/images/projetos/crohnease/v2-remedios-vazio.webp';
import v2Remedios from '../../assets/images/projetos/crohnease/v2-remedios.webp';
import v2Remedio from '../../assets/images/projetos/crohnease/v2-remedio.webp';
import lojaMedicamentos from '../../assets/images/projetos/crohnease/loja-medicamentos.webp';
import capa from '../../assets/images/projetos/crohnease/capa.webp';

/**
 * Fontes: os arquivos do Figma do time Aprendizagem. "Crohnease" tem a primeira versão
 * (capa, 42 telas por fluxo, ícones e telas de divulgação); a página "Chronease V2" do
 * arquivo "Michael design kit" tem o redesenho, a marca, as telas de loja e a landing
 * page. As datas vêm dos arquivos (última edição e os dados de exemplo das telas). Ficaram
 * de fora a tela de perfil do redesenho, que mostra o nome e o e-mail de uma pessoa, e a
 * tela de loja do check-in, que mostra esse mesmo nome junto de dados de saúde.
 */
export const crohnease: CaseStudy = {
  slug: 'crohnease',
  title: 'Crohnease',
  type: 'Design',
  period: '2024 a 2026',
  status: 'Em andamento',
  summary:
    'Desenhei um app para quem convive com a doença de Crohn ou a retocolite ulcerativa acompanhar o tratamento. Fiz duas versões, e a segunda ganhou marca nova, assistente de IA e telas para as lojas de apps.',
  tagline: 'Um app para acompanhar o tratamento da doença de Crohn e da retocolite ulcerativa.',
  tags: ['UX/UI', 'Figma', 'Saúde', 'App mobile'],
  art: 'crohnease',
  facts: [
    { label: 'Papel', value: 'Design de UX/UI no Figma' },
    { label: 'Escopo', value: '42 telas na primeira versão e 22 refeitas no redesenho' },
    { label: 'Plataforma', value: 'App mobile (Android e iOS) e landing page' },
    { label: 'Entregas', value: 'Telas, marca, telas de loja e landing page' },
  ],
  context: [
    'A doença de Crohn e a retocolite ulcerativa são doenças inflamatórias intestinais crônicas. Quem convive com elas acompanha remédios de uso contínuo, aplicações de medicamentos biológicos, exames e sintomas, muitas vezes cada coisa num lugar.',
    'O **Crohnease** junta isso num app. A capa do projeto o descreve como “um aplicativo móvel capaz de auxiliar portadores de Doença de Crohn e Retocolite Ulcerativa no gerenciamento de seus tratamentos”.',
    'Planejei como o app funciona (UX) e desenhei as telas (UI) no Figma, um programa de design. A primeira versão tem 42 telas organizadas por fluxo (as telas de cada tarefa). A segunda é um **redesenho**, com marca nova, funções novas e o material para apresentar o app nas lojas.',
  ],
  challenge: {
    problem:
      'No dia a dia, quem vive com uma doença crônica precisa registrar sintomas, acompanhar remédios e aplicações e ter o histórico à mão. O desafio é juntar tudo isso num app só.',
    goals: [
      'Um cadastro que comece pela condição (Crohn ou retocolite)',
      'Remédios com as doses do dia, a adesão e os próximos horários',
      'Registro de sintomas e ocorrências, com o que costuma ser perguntado na consulta',
      'Histórico das aplicações de biológicos, com data, local e se foram feitas no dia',
      'Apoio além do tratamento, como comunidade, conteúdo e banheiros por perto',
    ],
  },
  story: [
    {
      date: 'Versão 1',
      title: 'O app, fluxo por fluxo',
      text: 'Desenhei 42 telas em alta fidelidade (com a aparência final). Cada fluxo ficou numa seção do Figma: cadastro, esqueci minha senha, tela principal, medicamentos, sintomas, aplicações, perfil e onboarding (as telas de boas-vindas). Fiz também uma folha de ícones e seis telas de divulgação.',
    },
    {
      date: 'Versão 2',
      title: 'O redesenho',
      text: 'Numa página nova, coloquei as telas originais ao lado das refeitas. São 22 telas com a marca nova, o cadastro em quatro etapas, o campo em uso destacado e telas de primeira visita para remédios, perfil e calendário.',
    },
    {
      date: '28/04/2026',
      title: 'A landing page',
      text: 'Importei para o Figma a página do produto, direto do site do projeto, na versão para computador e com os componentes separados.',
    },
    {
      date: '2026',
      title: 'O material de lançamento',
      text: 'Desenhei telas de divulgação para Android, iPhone e iPad, o banner da Google Play, o ícone do app e uma camiseta com a marca.',
    },
  ],
  features: [
    {
      icon: 'notebook-pen',
      title: 'Check-in do dia',
      text: 'A tela inicial pede o check-in e resume os sintomas de hoje, a próxima dose, exames como PCR e a próxima consulta.',
    },
    {
      icon: 'list-checks',
      title: 'Remédios em dia',
      text: 'A tela de medicamentos mostra as doses de hoje, a adesão ao tratamento e o próximo horário de cada remédio. Há aviso de dose em atraso e um botão para confirmar.',
    },
    {
      icon: 'thermometer',
      title: 'Sintomas',
      text: 'O registro de ocorrências junta sintomas, dor, humor e detalhes que costumam ser perguntados no acompanhamento dessas doenças.',
    },
    {
      icon: 'calendar',
      title: 'Aplicações',
      text: 'O histórico guarda cada aplicação de biológico, com data, local, dose e se foi feita no dia ou com atraso.',
    },
    {
      icon: 'map-pin',
      title: 'Banheiros por perto',
      text: 'Um mapa mostra os banheiros mais próximos, a distância de cada um e se são gratuitos ou acessíveis.',
    },
    {
      icon: 'message-circle',
      title: 'Assistente de IA',
      text: 'Uma assistente de inteligência artificial tira dúvidas sobre a doença, os remédios e o bem-estar, com um limite diário de mensagens.',
    },
  ],
  inside: {
    title: 'Organizado por fluxos',
    text: [
      'Na primeira versão, separei cada fluxo numa seção do Figma: entrar, recuperar a senha, cadastrar, a tela principal, medicamentos, sintomas, aplicações e perfil. Uma faixa reúne as 42 telas em sequência, e outra seção guarda os ícones.',
      'No redesenho, mantive as telas originais ao lado das refeitas, e assim fica fácil comparar as duas versões. Junto ficou o material de lançamento: logo em versão clara e escura, ícone do app, telas para as lojas e a landing page.',
    ],
    diagram: 'crohnease',
  },
  decisions: [
    {
      title: 'O cadastro começa pela condição',
      why: 'No redesenho, o cadastro abre perguntando se a pessoa tem Crohn ou retocolite, com uma ilustração para cada opção. A tela explica o motivo: “Sabermos a sua condição nos ajuda a lhe acompanhar!”. Nome, e-mail e senha vêm nas etapas seguintes.',
    },
    {
      title: 'Uma tela para cada situação',
      why: 'Desenhei as telas em várias situações de uso. Há erro de e-mail na entrada, lista vazia com convite (“Vamos adicionar seus medicamentos na sua lista?”), campo em uso destacado e confirmação antes de excluir a conta.',
    },
    {
      title: 'Duas abas viraram um calendário',
      why: 'A primeira versão tinha cinco abas: Início, Remédios, Sintomas, Aplicações e Perfil. No redesenho, troquei Sintomas e Aplicações por um Calendário, com as abas Hoje, Lembrete e Histórico, numa barra flutuante.',
    },
    {
      title: 'Banheiros no mapa',
      why: 'A urgência para ir ao banheiro é comum em quem tem doença inflamatória intestinal. Por isso, incluí no redesenho um mapa com os banheiros próximos.',
    },
    {
      title: 'Um logo com linha de batimento',
      why: 'O logo da segunda versão junta um anel verde-água e uma linha de batimento num disco, ao lado do nome em letras largas. O azul-petróleo e o turquesa da marca viraram as cores principais das telas.',
    },
    {
      title: 'Uma frase por função nas lojas',
      why: 'Cada tela de divulgação apresenta uma função com uma frase curta, como “Gerencie todos os seus Medicamentos” e “Localize todos os Banheiros próximos”. As telas vêm em três tamanhos, para Android, iPhone e iPad.',
    },
  ],
  demo: {
    kind: 'before-after',
    title: 'Antes e depois',
    text: 'Arraste para comparar a tela de entrada da primeira versão com a do redesenho.',
    compare: {
      before: {
        src: v1Login,
        alt: 'Entrada da primeira versão: o símbolo e o nome Crohnease no alto, campos de e-mail e senha com contorno, os botões Entrar, Entrar com o Google e Cadastrar, sobre uma onda azul-petróleo.',
        tag: 'v1',
        name: 'a entrada da primeira versão',
      },
      after: {
        src: v2Login,
        alt: 'Entrada do redesenho: o logo novo numa faixa azul-petróleo, a frase “Seu companheiro na saúde!”, campos de e-mail e senha, o botão Entrar, a entrada com o Google e o link Cadastre-se.',
        tag: 'v2',
        name: 'a entrada do redesenho',
      },
      frame: 'phone',
      caption: 'À esquerda está a primeira versão e, à direita, o redesenho, com a marca nova e a frase “Seu companheiro na saúde!”. Arraste a divisória ou use as setas do teclado.',
    },
  },
  visual: {
    intro:
      'No redesenho, mantive o turquesa dos botões. O azul-petróleo ficou mais claro, entrou o verde-água do logo e o fundo passou a um cinza neutro. Os cartões são brancos, e o vermelho ficou só para remover.',
    palette: [
      { name: 'Petróleo', hex: '#007F8F', role: 'Cabeçalhos e abertura (v2)' },
      { name: 'Turquesa', hex: '#00BBC9', role: 'Botões e destaques' },
      { name: 'Verde-água', hex: '#4FD1C5', role: 'Anel do logo' },
      { name: 'Névoa', hex: '#E1F0F1', role: 'Superfícies claras' },
      { name: 'Cinza-claro', hex: '#F5F5F5', role: 'Fundo das telas (v2)' },
      { name: 'Vermelho', hex: '#F23030', role: 'Remover' },
      { name: 'Petróleo v1', hex: '#00747C', role: 'Cabeçalhos da primeira versão' },
      { name: 'Preto', hex: '#000000', role: 'Texto e nome' },
    ],
    paletteNote: 'Medi as cores nas telas exportadas do Figma.',
    mark: 'O logo do redesenho junta um **emblema** e um **nome**. No emblema, um anel verde-água envolve um disco com uma linha de batimento turquesa. Ao lado vem “CROHNEASE” em letras largas, com o N de diagonal cortada. A versão clara tem o nome em preto, e a escura, o nome em branco sobre o azul-petróleo.',
    markBackground: 'radial-gradient(120% 90% at 15% 0%, #0a6f7c 0%, #05434b 55%, #032a30 100%)',
    galleryTitle: 'Telas, lojas e capa',
    gallery: [
      {
        src: lojaMedicamentos,
        alt: 'Tela de divulgação: “Gerencie todos os seus Medicamentos”, com a tela de medicamentos mostrando 1 dose restante, adesão de 100%, uma dose em atraso de azatioprina e os medicamentos ativos.',
        caption: 'Tela de loja: doses do dia, adesão e dose em atraso.',
        frame: 'poster',
      },
      {
        src: v2Condicao,
        alt: 'Cadastro do redesenho: “Qual a sua condição?”, com as opções Crohn e Retocolite, cada uma com uma ilustração, e o botão Prosseguir.',
        caption: 'v2: o cadastro começa pela condição.',
        frame: 'phone',
      },
      {
        src: v2Dados,
        alt: 'Cadastro do redesenho, etapa de dados pessoais: campos de nome e e-mail e o botão Prosseguir, com o logo embaixo.',
        caption: 'v2: os dados pessoais vêm depois.',
        frame: 'phone',
      },
      {
        src: v2RemediosVazio,
        alt: 'Remédios na primeira visita: ilustração, a pergunta “Vamos adicionar seus medicamentos na sua lista?” e o botão Adicionar.',
        caption: 'v2: a lista vazia mostra um convite.',
        frame: 'phone',
      },
      {
        src: v2Remedios,
        alt: 'Lista de remédios do redesenho, filtrada por comprimidos, com Alopurinol e Certolizumabe e os botões de compartilhar e adicionar.',
        caption: 'v2: a lista de remédios.',
        frame: 'phone',
      },
      {
        src: v2Remedio,
        alt: 'Detalhes de um remédio: princípio ativo, descrição, indicação, administração, doses, efeitos colaterais e fabricante, com o botão Remover.',
        caption: 'v2: o detalhe do remédio, com o vermelho só para remover.',
        frame: 'phone',
      },
      {
        src: v1Inicio,
        alt: 'Início da primeira versão: cartões de Comunidades, Dicas Alimentares e Seus Direitos, cada um com um botão, e a barra com Início, Remédios, Sintomas, Aplicações e Perfil.',
        caption: 'v1: comunidade, dicas e direitos na tela inicial.',
        frame: 'phone',
      },
      {
        src: v1Atalhos,
        alt: 'Atalhos da primeira versão sobre a tela inicial: Adicionar ocorrência de sintoma, Adicionar novo medicamento e Programar nova aplicação.',
        caption: 'v1: atalhos para as três ações principais.',
        frame: 'phone',
      },
      {
        src: v1Sintomas,
        alt: 'Registro de sintomas da primeira versão: ocorrências como febre e dor de cabeça, a pergunta “Houve dor?” e a lista “Como você se sente?” aberta.',
        caption: 'v1: o registro de sintomas e humor.',
        frame: 'phone',
      },
      {
        src: v1Aplicacoes,
        alt: 'Histórico de aplicações da primeira versão: a data e o medicamento de cada aplicação, algumas datas em vermelho, com o filtro de data e o botão Adicionar.',
        caption: 'v1: o histórico de aplicações.',
        frame: 'phone',
      },
      {
        src: capa,
        alt: 'Capa do projeto: o símbolo e o nome Crohnease, a frase “Um aplicativo móvel capaz de auxiliar portadores de Doença de Crohn e Retocolite Ulcerativa no gerenciamento de seus tratamentos”, pessoas ilustradas e um celular.',
        caption: 'A capa da primeira versão.',
        frame: 'photo',
      },
    ],
    galleryNote: 'As telas marcadas com v1 são da primeira versão, e as outras, do redesenho. Todas vêm dos arquivos do Figma.',
  },
  tech: [
    { group: 'Ferramentas', items: ['Figma', 'html.to.design'] },
    { group: 'Entregas', items: ['App mobile', 'Landing page', 'Telas de loja', 'Marca e ícone'] },
    { group: 'Práticas', items: ['Fluxos por seção', 'Estados de tela', 'Telas de primeira visita', 'Redesenho'] },
  ],
  skills: [
    { title: 'Design de interface', text: 'Desenhar um app inteiro em alta fidelidade, um fluxo de cada vez.' },
    { title: 'Pensar em cada situação', text: 'Desenhar uma tela para cada situação, como erro, lista vazia, campo em uso e confirmação.' },
    { title: 'Redesenho', text: 'Rever o próprio trabalho e refazer as telas com a versão antiga à vista.' },
    { title: 'Marca e lançamento', text: 'Criar logo, ícone, telas de loja e landing page para apresentar o app.' },
    {
      title: 'Design para saúde',
      text: 'Entender a rotina de quem trata uma doença crônica, incluindo os remédios e os banheiros por perto.',
    },
  ],
  results: {
    metrics: [
      { value: 42, label: 'telas na primeira versão' },
      { value: 22, label: 'telas refeitas no redesenho' },
      { value: 7, label: 'funções em destaque nas telas de loja' },
    ],
    highlights: [
      'Fiz duas versões do mesmo app no Figma e guardei as telas antigas ao lado das novas.',
      'Material de lançamento: logo claro e escuro, ícone, telas de loja para Android, iPhone e iPad, banner da Google Play e landing page (a página de apresentação do app).',
      'Desenhei recursos para quem tem Crohn ou retocolite, como o mapa de banheiros próximos e a assistente de IA.',
    ],
  },
  sources:
    'Arquivos do Figma do time Aprendizagem: “Crohnease” (primeira versão) e a página “Chronease V2” do arquivo “Michael design kit” (redesenho, marca, telas de loja e landing page).',
};

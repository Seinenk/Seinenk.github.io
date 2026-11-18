import type { CaseStudy } from './types';
import celularInicio from '../../assets/images/projetos/trilha-da-protecao/celular-inicio.webp';
import celularTrilha from '../../assets/images/projetos/trilha-da-protecao/celular-trilha.webp';
import celularRecortes from '../../assets/images/projetos/trilha-da-protecao/celular-recortes.webp';
import celularSemaforo from '../../assets/images/projetos/trilha-da-protecao/celular-semaforo.webp';
import celularLeitor from '../../assets/images/projetos/trilha-da-protecao/celular-leitor.webp';
import inicio from '../../assets/images/projetos/trilha-da-protecao/inicio.webp';
import trilha from '../../assets/images/projetos/trilha-da-protecao/trilha.webp';
import recortesLegais from '../../assets/images/projetos/trilha-da-protecao/recortes-legais.webp';
import indices from '../../assets/images/projetos/trilha-da-protecao/indices.webp';
import semaforo from '../../assets/images/projetos/trilha-da-protecao/semaforo-do-toque.webp';
import materiais from '../../assets/images/projetos/trilha-da-protecao/materiais.webp';
import dissertacao from '../../assets/images/projetos/trilha-da-protecao/dissertacao.webp';

/**
 * Fontes: o repositório do site (12 commits, de 21/06 a 30/10/2026), o site publicado
 * (capturado em 18/11/2026), a dissertação de Sabrina Colle Bortoli (UFFS, 2026), com os
 * agradecimentos e o Apêndice A, e o depoimento dela, de novembro de 2026.
 *
 * O tema é a violência sexual contra crianças. A página fala dele com os termos da própria
 * pesquisa e não cita nem mostra a carta pessoal da autora, que abre a página "Sobre" do
 * site: ela é dela, e não do portfólio.
 */
export const trilhaDaProtecao: CaseStudy = {
  slug: 'trilha-da-protecao',
  title: 'Trilha da Proteção',
  type: 'Web',
  period: '2026',
  status: 'Concluído',
  summary:
    'Fiz o site do produto educacional da pesquisa de mestrado de Sabrina Colle Bortoli, na UFFS. Ele leva educadores por uma trilha de cinco paradas sobre a prevenção da violência sexual contra crianças.',
  tagline:
    'O site da pesquisa de mestrado de Sabrina Colle Bortoli: uma trilha de cinco paradas para educadores sobre a prevenção da violência sexual contra crianças.',
  tags: ['Astro', 'Educação', 'Pesquisa acadêmica', 'Leitor de PDF'],
  art: 'trilha-da-protecao',
  fonts: ['--font-trilha-title', '--font-trilha-text'],
  facts: [
    { label: 'Papel', value: 'Design e desenvolvimento do site' },
    // \u00a0 é um espaço que não quebra: o número fica com a palavra, e o ponto fica com o ano
    { label: 'Período', value: 'Junho a outubro de 2026\u00a0· 12\u00a0versões salvas (commits)' },
    { label: 'Pesquisa', value: 'Mestrado Profissional em Educação da UFFS, Campus Erechim' },
    { label: 'Plataforma', value: 'Site em Astro, publicado na Vercel' },
  ],
  links: [{ label: 'Site da Trilha da Proteção', href: 'https://trilha-da-protecao.vercel.app', icon: 'globe' }],
  context: [
    'A **Trilha da Proteção** é o produto educacional da pesquisa de mestrado de Sabrina Colle Bortoli, no Programa de Pós-Graduação Profissional em Educação da Universidade Federal da Fronteira Sul (UFFS), Campus Erechim. No mestrado profissional, a pesquisa entrega, além da dissertação, um produto para ser usado na prática. O de Sabrina é este site.',
    'A dissertação, "Educação Infantil e Proteção das Infâncias", analisa as políticas públicas brasileiras de enfrentamento à violência sexual contra crianças. Uma das conclusões é que as leis e os materiais existem, mas nem sempre chegam ao dia a dia da escola. O site reúne esse conhecimento para educadores, famílias e a comunidade, em linguagem simples.',
    'Fiz o design e o desenvolvimento do site a partir das ideias de Sabrina e das ilustrações de Vanessa Regina Trentin Zoraski. O conteúdo é da pesquisa. O meu trabalho foi organizar esse conteúdo num caminho fácil de seguir e fazer o site funcionar bem no computador e no celular.',
  ],
  challenge: {
    problem:
      'O tema é delicado, e o material sobre ele está espalhado em leis, planos nacionais, cadernos do Ministério da Educação, relatórios de segurança pública e livros infantis. A pesquisa aponta que muitos educadores da Educação Infantil, a etapa das crianças de até 5 anos, se sentem inseguros para lidar com o assunto. O site precisava reunir tudo isso num caminho claro e acolhedor, sem perder a ligação com a fonte acadêmica.',
    goals: [
      'Organizar o conteúdo em cinco paradas, numa ordem de leitura que faça sentido',
      'Apresentar os 82 recortes legais da pesquisa sem cansar quem lê',
      'Mostrar os dados de segurança pública em gráficos fáceis de entender, sempre com a fonte',
      'Levar de cada parada às páginas da dissertação de onde o conteúdo veio',
      'Funcionar bem no celular e respeitar quem prefere menos movimento na tela',
    ],
  },
  story: [
    {
      date: '21 e 22/06/2026',
      title: 'Da primeira página às paradas',
      text: 'A primeira versão se chamava Trilha da Prevenção e tinha quatro paradas numa página só. No dia seguinte, o site ganhou o nome atual, uma página para cada parada, as ilustrações e a fonte de letra de mão do título.',
    },
    {
      date: '24/06/2026',
      title: 'Os recortes legais e os materiais',
      text: 'Organizei os 82 recortes legais da pesquisa num arquivo de dados, em 7 eixos, e criei a parada dos materiais complementares.',
    },
    {
      date: '02/08/2026',
      title: 'O cartão do produto educacional',
      text: 'Antes da defesa, entrou na página inicial o cartão que apresenta o site como produto educacional da UFFS, com o logo da universidade.',
    },
    {
      date: '17/08/2026',
      title: 'A defesa',
      text: 'Sabrina defendeu a dissertação no Mestrado Profissional em Educação da UFFS, com a Trilha da Proteção como produto educacional.',
    },
    {
      date: '29/10/2026',
      title: 'A dissertação dentro do site',
      text: 'Com a versão final do texto, coloquei a dissertação inteira no site, num leitor de PDF, e liguei cada parada às páginas de origem. Fiz essa etapa com a ajuda do Claude Code, um agente de inteligência artificial (IA).',
    },
    {
      date: '29 e 30/10/2026',
      title: 'Medir o uso',
      text: 'Passei a contar as visitas com a Vercel Web Analytics, que não usa cookies, e a ver mapas de calor e gravações de sessão com o Microsoft Clarity.',
    },
  ],
  features: [
    {
      icon: 'compass',
      title: 'Uma trilha de cinco paradas',
      text: 'A página inicial mostra as paradas em cartões coloridos: Proteção Integral, Recortes Legais, Índices, Como agir e Materiais Complementares. Cada parada termina com o botão da próxima.',
    },
    {
      icon: 'scale',
      title: 'Recortes legais por eixo',
      text: 'São 82 trechos de 19 documentos oficiais, como a Constituição, o Estatuto da Criança e do Adolescente (ECA) e a Base Nacional Comum Curricular (BNCC), em 7 eixos. Cada documento leva ao texto oficial.',
    },
    {
      icon: 'trending-up',
      title: 'Dados em gráficos',
      text: 'A Parada 3 mostra os números do Anuário Brasileiro de Segurança Pública 2025 em gráficos de rosca, de linha e de barras, desenhados no próprio código, com a página da fonte.',
    },
    {
      icon: 'shield-check',
      title: 'Como agir',
      text: 'A Parada 4 reúne a prevenção, os sinais de alerta e o caminho de acolhimento, notificação e denúncia. O Semáforo do Toque ensina às crianças, em três cores, quais toques são seguros.',
    },
    {
      icon: 'book-open',
      title: 'A dissertação no site',
      text: 'Um leitor mostra as 200 páginas da dissertação, com sumário, busca no texto, zoom e tela cheia. Dá para baixar o PDF e copiar a referência no padrão da ABNT.',
    },
    {
      icon: 'link',
      title: 'Aprofunde na dissertação',
      text: 'No fim de cada parada, um cartão leva aos capítulos, quadros e figuras da dissertação de onde o conteúdo saiu.',
    },
  ],
  inside: {
    title: 'Da pesquisa para a trilha',
    text: [
      'Fiz o site em Astro, uma ferramenta que gera as páginas prontas, em HTML, antes de publicar. Assim elas abrem rápido. São 8 páginas: a inicial, a da pesquisa, as cinco paradas e a da dissertação.',
      'O conteúdo fica em arquivos de dados, separado do desenho das páginas. Os recortes legais, por exemplo, estão num arquivo só, organizados em eixos, documentos e trechos. Para corrigir um trecho, basta editar esse arquivo.',
      'O leitor da dissertação usa o PDF.js, a biblioteca de leitura de PDF da Mozilla, que só é baixada quando alguém abre o leitor. Cada página tem um endereço próprio (`#pagina=90`), e é assim que os cartões das paradas levam ao trecho certo. As páginas do resumo em inglês são marcadas como inglês, para o leitor de tela ler com a pronúncia certa.',
    ],
    diagram: 'trilha-da-protecao',
  },
  decisions: [
    {
      title: 'Uma trilha em vez de um menu',
      why: 'A trilha dá uma ordem para a leitura. Ela começa no conceito de proteção integral, passa pelas leis e pelos dados e chega ao que fazer na escola. A Parada 4, Como agir, que reúne as orientações práticas, aparece maior e em destaque.',
    },
    {
      title: 'Pegadas de criança entre as paradas',
      why: 'As pegadas são desenhadas pelo código, seguindo a posição real dos cartões, e aparecem uma a uma, como passinhos. Para quem pede menos movimento no sistema, a trilha aparece inteira e parada. A animação também para quando sai da tela.',
    },
    {
      title: 'Trechos de lei que abrem e fecham',
      why: 'Mostrar os 82 trechos de uma vez cansaria quem lê. Cada eixo mostra quantos marcos legais tem, e cada documento só abre quando a pessoa quer ler. Os grifos do original continuam em negrito.',
      tradeoff: 'Para quem quer ler tudo em sequência, um botão abre todos os eixos de uma vez.',
    },
    {
      title: 'Cada número com a sua fonte',
      why: 'Num tema tão sério, quem lê precisa poder conferir. Cada gráfico traz a fonte e a página do Anuário Brasileiro de Segurança Pública.',
    },
    {
      title: 'A dissertação a um clique',
      why: 'O cartão Aprofunde na dissertação leva de cada parada às páginas exatas da pesquisa. Assim, o texto das paradas pode ser curto, e quem quiser os detalhes vai direto à fonte.',
    },
    {
      title: 'Um aviso antes da leitura',
      why: 'A página da dissertação avisa sobre o tema antes do texto e indica onde pedir ajuda: o Conselho Tutelar ou o Disque 100.',
    },
  ],
  visual: {
    intro:
      'O visual parte das ilustrações de Vanessa Regina Trentin Zoraski, em traço de lápis: a menina, o campo florido, o sol e as nuvens, que também estão na capa da dissertação. Sobre o fundo claro, cada parada tem uma cor forte, e um verde bem escuro dá peso aos títulos. Os cartões têm uma borda tracejada, como uma costura, e o nome da trilha usa uma fonte de letra de mão.',
    palette: [
      { name: 'Verde floresta', hex: '#012D1D', role: 'Títulos, botões e destaques do texto' },
      { name: 'Laranja', hex: '#FE8B2C', role: 'Botão principal e a Parada 2' },
      { name: 'Amarelo', hex: '#FEDF5E', role: 'Parada 1' },
      { name: 'Verde folha', hex: '#6AAB4E', role: 'Parada 3' },
      { name: 'Azul', hex: '#4A90D9', role: 'Parada 4, a de destaque' },
      { name: 'Caramelo', hex: '#C26A20', role: 'Parada 5, a final' },
      { name: 'Fundo', hex: '#F9FAF6', role: 'Fundo das páginas' },
    ],
    paletteNote: 'Cores tiradas do código do site.',
    typography: [
      {
        family: 'Lexend',
        css: 'var(--font-trilha-title)',
        role: 'Títulos, cartões e botões',
        sample: 'Proteção Integral: O que é?',
        weight: 600,
        note: 'Uma fonte criada para facilitar a leitura.',
      },
      {
        family: 'Source Sans 3',
        css: 'var(--font-trilha-text)',
        role: 'Texto corrido',
        sample: 'Prevenção, identificação de sinais e canais de denúncia seguros.',
      },
    ],
    galleryTitle: 'Telas do site',
    galleryNote: 'Capturas do site publicado, feitas em 18/11/2026, no computador e no celular.',
    gallery: [
      {
        src: celularInicio,
        alt: 'Início da Trilha da Proteção no celular: o título em letra de mão, a frase "Um Caminho Guiado para a prevenção e enfrentamento da violência sexual infantil", o botão laranja "Sobre a pesquisa" e o começo do cartão amarelo da Parada 1, sobre um fundo desenhado a lápis.',
        caption: 'O início, no celular',
        frame: 'phone',
        story: {
          step: 'Começar pela página inicial',
          text: 'O título e uma frase dizem do que se trata, e o botão "Sobre a pesquisa" conta de onde o site veio.',
          icon: 'house',
        },
      },
      {
        src: celularTrilha,
        alt: 'As paradas no celular, uma embaixo da outra: o cartão amarelo da Parada 1, Proteção Integral, e o laranja da Parada 2, Recortes Legais, ligados por pegadas de criança.',
        caption: 'As paradas, uma embaixo da outra',
        frame: 'phone',
        story: {
          step: 'Seguir as paradas',
          text: 'As cinco paradas aparecem em ordem, e pegadas de criança levam de uma à outra.',
          icon: 'compass',
        },
      },
      {
        src: celularRecortes,
        alt: 'Parada 2, Recortes Legais, no celular: o eixo "O direito à proteção" aberto, com 7 marcos legais, como a Constituição Federal de 1988, a Convenção sobre os Direitos da Criança e o Estatuto da Criança e do Adolescente.',
        caption: 'Um eixo aberto, com os seus documentos',
        frame: 'phone',
        story: {
          step: 'Consultar a lei',
          text: 'Na Parada 2, os trechos de lei ficam em 7 eixos. Cada documento abre quando a pessoa quer ler.',
          icon: 'scale',
        },
      },
      {
        src: celularSemaforo,
        alt: 'Parada 4, Como agir, no celular: o Semáforo do Toque, com três cartões: verde, "Pode tocar"; amarelo, "Atenção! Tome cuidado"; e vermelho, "Não pode tocar".',
        caption: 'O Semáforo do Toque',
        frame: 'phone',
        story: {
          step: 'Saber como agir',
          text: 'A Parada 4 traz a prevenção, os sinais de alerta e o caminho para acolher e denunciar. O Semáforo do Toque resume os toques seguros em três cores.',
          icon: 'shield-check',
        },
      },
      {
        src: celularLeitor,
        alt: 'O leitor da dissertação aberto em tela cheia no celular, com a folha de rosto e os botões de sumário, páginas, zoom, busca, download e fechar.',
        caption: 'O leitor da dissertação, em tela cheia',
        frame: 'phone',
        story: {
          step: 'Ir à fonte',
          text: 'O cartão Aprofunde na dissertação abre o leitor na página de onde veio o conteúdo, com sumário e busca.',
          icon: 'book-open',
        },
      },
      {
        src: inicio,
        alt: 'Página inicial no computador: o cartão com o título "Trilha da Proteção" em letra de mão, a frase sobre a prevenção e o enfrentamento da violência sexual infantil e o botão "Sobre a pesquisa", sobre a ilustração de uma menina, nuvens e um sol em traço de lápis. Embaixo, o começo dos cartões coloridos das paradas.',
        caption: 'A página inicial',
        frame: 'browser',
      },
      {
        src: trilha,
        alt: 'A trilha no computador: os cartões das Paradas 1 a 4 (amarelo, laranja, verde e azul, este maior) lado a lado, em alturas alternadas, com pegadas de criança entre eles, e a Parada 5, Materiais Complementares, deitada e centralizada embaixo.',
        caption: 'As cinco paradas, ligadas por pegadas',
        frame: 'browser',
      },
      {
        src: recortesLegais,
        alt: 'Parada 2, Recortes Legais: o botão "Expandir todos" e o eixo "O direito à proteção" aberto, com 7 marcos legais em lista, da Constituição Federal de 1988 à Lei nº 15.388/2026, o Plano Nacional de Educação. Abaixo, o eixo "Dever de proteger", fechado.',
        caption: 'Os recortes legais, em eixos que abrem e fecham',
        frame: 'browser',
      },
      {
        src: indices,
        alt: 'Parada 3, Índices: um gráfico de rosca mostra que 76,8% dos registros de estupro em 2024 foram de estupro de vulnerável, com a fonte (Anuário Brasileiro de Segurança Pública 2025, p. 180). Abaixo, o começo da seção sobre faixa etária.',
        caption: 'Os dados do Anuário em gráficos',
        frame: 'browser',
      },
      {
        src: semaforo,
        alt: 'Parada 4, Como agir: o Semáforo do Toque, com os cartões "Pode tocar", "Atenção! Tome cuidado" e "Não pode tocar", e as ações para mobilizar a comunidade escolar, como o 18 de Maio e a campanha Faça Bonito.',
        caption: 'O Semáforo do Toque',
        frame: 'browser',
      },
      {
        src: materiais,
        alt: 'Parada 5, Materiais Complementares: a seção de literatura infantil, com os livros "Não me toca, seu boboca!", de Andrea Viviana Taubman, e "Pipo e Fifi", de Caroline Arcari, e a mensagem de fim da trilha.',
        caption: 'Livros infantis e o fim da trilha',
        frame: 'browser',
      },
      {
        src: dissertacao,
        alt: 'O leitor da dissertação no computador: o sumário à esquerda, com os capítulos e as páginas, e a capa à direita, com a barra de páginas, zoom, busca, download e tela cheia.',
        caption: 'A dissertação inteira, com sumário e busca',
        frame: 'browser',
      },
    ],
  },
  tech: [
    { group: 'Site', items: ['Astro 5', 'Tailwind CSS', 'JavaScript', 'SVG'] },
    { group: 'Dissertação', items: ['PDF.js 6', 'Metadados de citação (Zotero e Mendeley)', 'Referência ABNT'] },
    { group: 'Publicação', items: ['Vercel', 'Vercel Web Analytics', 'Microsoft Clarity'] },
    { group: 'Tipografia e ícones', items: ['Lexend', 'Source Sans 3', 'Material Symbols'] },
  ],
  skills: [
    {
      title: 'Arquitetura de informação',
      text: 'Organizar um conteúdo extenso em paradas, eixos e documentos, numa ordem que faça sentido para quem lê.',
    },
    {
      title: 'Trabalho com cliente',
      text: 'Transformar as ideias da pesquisadora em telas e ajustar o site a cada sugestão dela.',
    },
    {
      title: 'Visualização de dados',
      text: 'Desenhar gráficos simples a partir de um relatório, sempre com a fonte de cada número.',
    },
    {
      title: 'Um tema sensível',
      text: 'Tratar um assunto difícil com um visual acolhedor, avisos antes da leitura e caminhos claros para pedir ajuda.',
    },
    {
      title: 'Leitor de PDF na web',
      text: 'Integrar um leitor com sumário, busca e links que abrem uma página específica.',
    },
  ],
  results: {
    metrics: [
      { value: 82, label: 'recortes legais, organizados em 7 eixos' },
      { value: 19, label: 'documentos oficiais citados, da Constituição de 1988 às normas de 2026' },
      { value: 5, label: 'paradas na trilha, da proteção integral aos materiais' },
      { value: 200, label: 'páginas da dissertação para ler no próprio site' },
    ],
    highlights: [
      'O site é o produto educacional da dissertação "Educação Infantil e Proteção das Infâncias", defendida em 17/08/2026 no Mestrado Profissional em Educação da UFFS.',
      'Nos agradecimentos da dissertação, Sabrina escreve: "Também agradeço profundamente ao Carlos Michael da Silva Sousa, pois sem as suas habilidades, conhecimentos e gentileza, esse mesmo site não seria tão incrível quanto é (para mim)!"',
      'Depois da defesa, o site passou a medir as visitas e a mostrar mapas de calor, para entender como as pessoas usam a trilha.',
    ],
  },
  credits: [
    { name: 'Sabrina Colle Bortoli', role: 'Pesquisadora e autora do conteúdo' },
    { name: 'Vanessa Regina Trentin Zoraski', role: 'Ilustrações e ideias para o site' },
    { name: 'Prof.ª Dr.ª Sandra Simone Höpner Pierozan', role: 'Orientadora da pesquisa (UFFS)' },
  ],
  sources:
    'O código do site (12 commits, de 21/06 a 30/10/2026), o site publicado, a dissertação de Sabrina Colle Bortoli (UFFS, 2026) e o depoimento dela, de novembro de 2026.',
};

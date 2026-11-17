import type { CaseStudy } from './types';
import antes from '../../assets/images/projetos/portfolio/antes-2023.webp';
import depoisClaro from '../../assets/images/projetos/portfolio/depois-claro.webp';
import depoisEscuro from '../../assets/images/projetos/portfolio/depois-escuro.webp';
import depoisCelular from '../../assets/images/projetos/portfolio/depois-celular.webp';

/**
 * Fontes: histórico do repositório Seinenk/Seinenk.github.io (versão de 2023 e o
 * redesenho de 2026) e o próprio código do site.
 */
export const portfolio: CaseStudy = {
  slug: 'portfolio',
  title: 'Portfólio',
  type: 'Web',
  period: '2023 a 2026',
  status: 'Em andamento',
  summary:
    'Fiz a primeira versão deste site em 2023, em HTML e CSS, numa atividade da disciplina de Web. Em 2026, refiz tudo em Astro, com design system, temas claro e escuro e animações que respeitam quem prefere menos movimento.',
  tagline: 'Comecei este site em HTML, na faculdade. Hoje ele tem design system, temas e animações acessíveis.',
  tags: ['Astro', 'Design system', 'Acessibilidade'],
  art: 'portfolio',
  facts: [
    { label: 'Papel', value: 'Direção de design, conteúdo e desenvolvimento' },
    { label: 'Versões', value: 'Março de 2023 e novembro de 2026' },
    { label: 'Stack', value: 'Astro 7, TypeScript e CSS' },
    { label: 'Publicação', value: 'GitHub Pages, pelo GitHub Actions' },
  ],
  links: [
    { label: 'Código no GitHub', href: 'https://github.com/Seinenk/Seinenk.github.io', icon: 'github' },
  ],
  context: [
    'Fiz a primeira versão em março de 2023, na segunda atividade da disciplina de Web. Era uma página de portfólio em HTML e CSS (as linguagens básicas da web), com foco no design. Tinha fundo escuro em degradê, o nome em destaque e ícones das habilidades.',
    'Em novembro de 2026, refiz o site no mesmo endereço. Nele, conto minha trajetória de hoje: a Investe Piauí, o Vale do Mel, a formação no Instituto Federal do Piauí (IFPI) e os projetos. Fiz o trabalho com o Claude Code, um agente de inteligência artificial (IA). As escolhas de design system (as regras visuais do site), paleta, foto e conteúdo foram minhas.',
  ],
  challenge: {
    problem:
      'O site é a primeira impressão que se tem de mim como desenvolvedor front-end e designer de UX/UI, alguém que desenha e desenvolve sites e aplicativos. Precisava ser bonito e cheio de animação, acessível a todos, rápido em qualquer aparelho e fácil de manter e de ganhar paletas novas.',
    goals: [
      'Migrar de HTML e CSS puros para o Astro, ferramenta que gera sites, sem perder nada do original',
      'Adotar um design system editorial com a paleta Grafite',
      'Ter temas claro e escuro e permitir paletas novas com pouco esforço',
      'Encher de movimento sem excluir quem prefere menos animação',
      'Carregar rápido mesmo em conexões lentas',
    ],
  },
  story: [
    {
      date: 'Março de 2023',
      title: 'A primeira versão',
      text: 'Fiz tudo em HTML e CSS puros, com nove commits (registros de mudança) em três semanas, de 12 a 31 de março. Adaptei a página a vários tamanhos de tela, enxuguei o código e ajustei o rodapé.',
    },
    {
      date: '02/11/2026',
      title: 'Migração para o Astro',
      text: 'Antes de mexer no visual, passei o site antigo para o Astro e comparei tela a tela com o original. Só depois de conferir, removi o projeto antigo.',
    },
    {
      date: '02/11/2026',
      title: 'Novo design system',
      text: 'Adotei a paleta Grafite, Cormorant Garamond nos títulos, Inter no texto e JetBrains Mono no código. Reescrevi o conteúdo a partir do Currículo Lattes e do LinkedIn.',
    },
    {
      date: '03/11/2026',
      title: 'O cartão carlos.ts',
      text: 'Transformei o resumo do perfil num cartão animado, que alterna entre código, quadro de design, documento e slides.',
    },
    {
      date: 'Novembro de 2026',
      title: 'Estudos de caso',
      text: 'Cada projeto ganhou uma página própria, como esta, dividida em tópicos por área (resumo, pesquisa e estruturação, UX/UI, construção e aprendizado). Uma barra de abas leva direto a cada um.',
    },
  ],
  features: [
    { icon: 'sun', title: 'Temas claro e escuro', text: 'Segue o tema do aparelho ou a escolha da pessoa, com uma transição em círculo que parte do botão.' },
    { icon: 'palette', title: 'Paletas novas em um arquivo', text: 'Cada paleta nova é um arquivo com seis cores. O build, a etapa que gera o site, calcula e confere os outros tons.' },
    { icon: 'pause', title: 'Movimento sob controle', text: 'Um botão pausa todas as animações, e o site respeita a opção de menos movimento do aparelho.' },
    { icon: 'code-xml', title: 'Cartão carlos.ts', text: 'Mostra o resumo do perfil em quatro formatos e pausa quando sai da tela.' },
    { icon: 'layers', title: 'Projetos com filtro', text: 'A lista tem filtro, e cada projeto tem sua página.' },
    { icon: 'globe', title: 'Pronto para compartilhar', text: 'Tem imagem de prévia para links compartilhados, um mapa das páginas (sitemap) e dados estruturados para buscadores.' },
  ],
  inside: {
    title: 'Como uma paleta vira tema',
    text: [
      'Cada paleta é um arquivo com seis cores, em versão clara e escura. Os tons intermediários, como fundos de cartão, bordas e texto secundário, são misturas dessas cores no espaço OKLab, que combina cores do jeito que o olho percebe.',
      'No build, cada par de texto e fundo passa por um teste de contraste WCAG AA. Se uma combinação não passar, o build para e mostra qual. O resultado vira variáveis CSS. Um script de poucas linhas aplica tema, paleta e movimento antes de a página aparecer, sem piscar.',
    ],
    diagram: 'portfolio',
  },
  decisions: [
    {
      title: 'Páginas prontas, geradas pelo Astro',
      why: 'As páginas chegam prontas em HTML, sem framework no navegador para montá-las. O pouco de JavaScript fica num módulo só, para tema, menu e animações.',
    },
    {
      title: 'Contraste conferido no build',
      why: 'Não quis que a acessibilidade dependesse de alguém lembrar de testar. Uma paleta que falha no contraste nem chega a ser publicada.',
    },
    {
      title: 'CSS antes de JavaScript',
      why: 'As animações usam CSS. O script só revela o conteúdo ao rolar, anima os números e pausa o que sai da tela, para poupar bateria.',
    },
    {
      title: 'Fontes servidas pelo próprio site',
      why: 'A página não busca fontes de terceiros ao abrir. Os arquivos vêm dos pacotes do projeto e são pré-carregados.',
    },
  ],
  demo: {
    kind: 'before-after',
    title: 'Antes e depois',
    text: 'Arraste para comparar a página inicial de 2023 com a de 2026.',
    compare: {
      before: {
        src: antes,
        alt: 'Página inicial de 2023: fundo escuro em degradê, nome em cinza e uma ilustração de panda.',
        tag: '2023',
        name: 'a versão de 2023',
      },
      after: {
        src: depoisClaro,
        alt: 'Página inicial de 2026: o retrato recortado em preto e branco sobre um fundo taupe (marrom acinzentado), o nome em letras grandes e o cargo sendo digitado.',
        tag: '2026',
        name: 'a versão de 2026',
      },
      frame: 'browser',
      // começa um pouco à esquerda do meio, para o rosto aparecer inteiro do lado de 2026
      start: 40,
      caption: 'À esquerda, 2023; à direita, 2026. Arraste a divisória ou use as setas do teclado.',
    },
  },
  visual: {
    intro:
      'A versão de 2023 usava tons de cinza (#000000 a #B9B9B9), degradê escuro e as fontes Righteous, Sarala e Roboto. A de 2026 segue um design system editorial, com a paleta que eu enviei. Tem fundo claro, títulos com serifa (traços nas pontas das letras), texto numa fonte sem serifa de estilo humanista e cor em blocos.',
    palette: [
      { name: 'Branco', hex: '#FFFFFF', role: 'Superfícies elevadas no modo claro' },
      { name: 'Névoa', hex: '#EBEBEB', role: 'Texto de destaque no modo escuro' },
      { name: 'Grafite', hex: '#181722', role: 'Texto no claro, fundo no escuro' },
      { name: 'Ardósia', hex: '#393F4A', role: 'Texto corrido no modo claro' },
      { name: 'Areia', hex: '#DCD2CC', role: 'Superfícies e botão no modo escuro' },
      { name: 'Taupe', hex: '#8A7875', role: 'Destaques e itálicos dos títulos' },
    ],
    paletteNote: 'Os outros tons do site são misturas dessas seis cores, calculadas em OKLab e conferidas pelo teste de contraste.',
    typography: [
      { family: 'Cormorant Garamond', css: 'var(--font-display)', role: 'Títulos, peso 500', sample: 'Carlos Michael', weight: 500 },
      { family: 'Inter', css: 'var(--font-sans)', role: 'Texto e interface (fonte variável)', sample: 'Desenvolvedor front-end e designer de UX/UI', variable: true },
      { family: 'JetBrains Mono', css: 'var(--font-mono)', role: 'Código e dados', sample: "const carlos = { foco: 'UX/UI' };" },
    ],
    tokens: [
      {
        title: 'Raios',
        items: [
          { name: 'xs', value: '4px' },
          { name: 'sm', value: '6px' },
          { name: 'md', value: '8px' },
          { name: 'lg', value: '12px' },
          { name: 'xl', value: '16px' },
        ],
      },
      {
        title: 'Espaço',
        items: [
          { name: 'Base', value: '4px' },
          { name: 'Seções', value: '72 a 96px' },
          { name: 'Conteúdo', value: 'até 1200px' },
        ],
      },
      {
        title: 'Movimento',
        items: [
          { name: 'Saída suave', value: 'cubic-bezier(.16, 1, .3, 1)' },
          { name: 'Ida e volta', value: 'cubic-bezier(.65, 0, .35, 1)' },
          { name: 'Mola', value: 'cubic-bezier(.34, 1.56, .64, 1)' },
        ],
      },
    ],
    gallery: [
      { src: depoisClaro, alt: 'Página inicial de 2026 no tema claro: o retrato recortado em preto e branco sobre fundo taupe, o primeiro nome grande e apagado ao fundo, o cargo sendo digitado, o nome completo embaixo e, à direita, os cartões do projeto em destaque e de contato.', caption: 'Página inicial de 2026, tema claro', frame: 'browser' },
      { src: depoisEscuro, alt: 'A mesma página inicial no tema escuro, com fundo grafite.', caption: 'O mesmo topo no tema escuro', frame: 'browser' },
      { src: depoisCelular, alt: 'Página inicial no celular: o retrato no alto e, embaixo dele, o nome completo, o cargo, uma apresentação curta e os dois botões lado a lado.', caption: 'No celular', frame: 'phone' },
      { src: antes, alt: 'Página inicial de 2023: fundo escuro em degradê, nome em cinza e uma ilustração de panda.', caption: 'A versão de 2023', frame: 'browser' },
    ],
  },
  tech: [
    { group: 'Site', items: ['Astro 7', 'TypeScript', 'CSS moderno', 'View Transitions'] },
    { group: 'Design', items: ['Design system editorial', 'OKLab', 'WCAG 2.2 AA', 'Fontes variáveis'] },
    { group: 'Qualidade', items: ['Playwright', 'axe-core', 'Lighthouse'] },
    { group: 'Publicação', items: ['GitHub Actions', 'GitHub Pages'] },
  ],
  skills: [
    { title: 'Design system no site inteiro', text: 'Aplicar tokens (valores-padrão de tipografia, espaço, raio, cor e movimento) em todas as páginas.' },
    { title: 'Acessibilidade', text: 'Cuidar de contraste AA, navegação por teclado, leitores de tela e movimento opcional.' },
    { title: 'Desempenho', text: 'Embutir o CSS, usar imagens em WebP (formato leve) no tamanho certo e pausar animações fora da tela.' },
    { title: 'Migrar sem perder nada', text: 'Migrar primeiro, comparar com o original e só então redesenhar.' },
    { title: 'Direção de IA', text: 'Definir referências, paleta e critérios e revisar o resultado de um agente de IA.' },
  ],
  results: {
    metrics: [
      { value: 100, label: 'de acessibilidade no Lighthouse, em todas as páginas medidas' },
      { value: 96, suffix: '+', label: 'de desempenho no celular, no Lighthouse' },
      { value: 0, label: 'falhas nas regras de acessibilidade WCAG 2.2 AA, pelo axe-core, em 12 páginas e nos dois temas' },
      { value: 200, prefix: '< ', suffix: ' KB', label: 'por página, com imagens e fontes' },
    ],
    highlights: [
      'As medições são de 08/11/2026. O Lighthouse, avaliador de sites do Google, rodou no perfil de celular (início, projetos e páginas de projeto). O axe-core, verificador automático de acessibilidade, rodou no computador e no celular, nos dois temas.',
      'O site também tirou 100 em boas práticas e em SEO (como aparece nas buscas).',
    ],
  },
  lessons: [
    {
      title: 'O que mudou de 2023 para 2026',
      text: 'O tema escuro fixo deu lugar a temas claro e escuro. As fontes, que vinham de outro servidor, agora saem do próprio site. Os ícones de uma biblioteca externa viraram SVGs embutidos (desenhos em código). A página de apresentação virou um portfólio com estudos de caso.',
    },
  ],
  sources: 'Histórico do repositório e o código do próprio site.',
};

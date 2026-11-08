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
  period: '2023 — 2026',
  status: 'Em andamento',
  summary:
    'Este site: nasceu em 2023 como atividade de Web, em HTML e CSS, e foi refeito em 2026 em Astro, com design system, temas claro e escuro e animações que respeitam quem prefere menos movimento.',
  tagline: 'Do primeiro HTML da faculdade a um site com design system, temas e movimento acessível.',
  tags: ['Astro', 'Design system', 'Acessibilidade'],
  art: 'portfolio',
  facts: [
    { label: 'Papel', value: 'Direção de design, conteúdo e desenvolvimento' },
    { label: 'Versões', value: 'Março de 2023 · novembro de 2026' },
    { label: 'Stack', value: 'Astro 7, TypeScript e CSS' },
    { label: 'Publicação', value: 'GitHub Pages, por GitHub Actions' },
  ],
  links: [
    { label: 'Código no GitHub', href: 'https://github.com/Seinenk/Seinenk.github.io', icon: 'github' },
  ],
  context: [
    'A primeira versão nasceu em março de 2023, como a segunda atividade da disciplina de Web: uma página de portfólio em HTML e CSS, com foco no design. Fundo escuro em degradê, nome em destaque e ícones das habilidades.',
    'Em novembro de 2026, o site foi refeito, no mesmo endereço, para contar a trajetória de hoje: a Investe Piauí, o Vale do Mel, a formação no IFPI e os projetos. O trabalho foi feito com o Claude Code, um agente de IA, a partir das minhas escolhas de design system, paleta, foto e conteúdo.',
  ],
  challenge: {
    problem:
      'O site é a primeira impressão de um desenvolvedor front-end e designer de UX/UI. Precisava ser bonito e cheio de vida, mas também acessível a todos, rápido em qualquer aparelho e fácil de manter e de ganhar novas paletas.',
    goals: [
      'Migrar de HTML e CSS puros para Astro sem perder nada do original',
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
      text: 'HTML e CSS puros, em nove commits ao longo de três semanas, de 12 a 31 de março, passando por responsividade, redução de código e o rodapé.',
    },
    {
      date: '02/11/2026',
      title: 'Migração fiel',
      text: 'Antes de mudar qualquer visual, o site antigo foi portado para Astro e comparado tela a tela com o original. Só depois de validado, o projeto antigo foi removido.',
    },
    {
      date: '02/11/2026',
      title: 'Novo design system',
      text: 'Paleta Grafite, Cormorant Garamond nos títulos, Inter no texto e JetBrains Mono no código, com o conteúdo reescrito a partir do Currículo Lattes e do LinkedIn.',
    },
    {
      date: '03/11/2026',
      title: 'O cartão carlos.ts',
      text: 'O resumo do perfil virou um pequeno estúdio animado, que alterna entre código, quadro de design, documento e slides.',
    },
    {
      date: 'Novembro de 2026',
      title: 'Estudos de caso',
      text: 'Cada projeto ganhou uma página própria, como esta, com contexto, processo, decisões e construção visual.',
    },
  ],
  features: [
    { icon: 'sun', title: 'Temas claro e escuro', text: 'Segue o aparelho ou a escolha da pessoa, com uma transição em círculo que parte do botão.' },
    { icon: 'palette', title: 'Paletas extensíveis', text: 'Uma paleta nova é um arquivo de seis cores; o resto dos tons é calculado e conferido no build.' },
    { icon: 'pause', title: 'Movimento sob controle', text: 'Um botão pausa todas as animações, e a preferência do sistema por menos movimento é respeitada.' },
    { icon: 'code-xml', title: 'Cartão carlos.ts', text: 'O mesmo resumo em quatro visões, num cartão que pausa quando sai da tela.' },
    { icon: 'layers', title: 'Projetos com filtro', text: 'Lista filtrável e uma página dedicada para cada projeto.' },
    { icon: 'globe', title: 'Pronto para compartilhar', text: 'Imagem de compartilhamento, sitemap e dados estruturados para buscadores.' },
  ],
  inside: {
    title: 'Como uma paleta vira tema',
    text: [
      'Cada paleta é um arquivo com seis cores e duas versões, clara e escura. Os tons intermediários, como fundos de cartão, bordas e texto secundário, saem de misturas entre essas cores no espaço OKLab, que mistura cores do jeito que o olho percebe.',
      'No build, cada par de texto e fundo passa por um teste de contraste WCAG AA. Se uma combinação não passar, o build para e mostra qual. O resultado vira variáveis CSS, e um script de poucas linhas aplica tema, paleta e movimento antes da primeira pintura, sem piscar.',
    ],
    diagram: 'portfolio',
  },
  decisions: [
    {
      title: 'Astro com saída estática',
      why: 'Páginas prontas em HTML, sem framework no navegador. O pouco de JavaScript é um módulo só, para tema, menu e animações.',
    },
    {
      title: 'Contraste conferido no build',
      why: 'Acessibilidade não pode depender de lembrar de testar. Uma paleta que falha no contraste nem chega a ser publicada.',
    },
    {
      title: 'CSS antes de JavaScript',
      why: 'As animações são CSS. O script só revela ao rolar, conta números e pausa o que sai da tela, poupando bateria.',
    },
    {
      title: 'Fontes servidas pelo próprio site',
      why: 'Sem fontes de terceiros na hora de abrir a página: os arquivos saem dos pacotes do projeto, com pré-carregamento.',
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
        alt: 'Página inicial de 2026: fundo claro, nome em serifa e retrato em preto e branco.',
        tag: '2026',
        name: 'a versão de 2026',
      },
      frame: 'browser',
      caption: 'À esquerda, 2023; à direita, 2026. Arraste a divisória ou use as setas do teclado.',
    },
  },
  visual: {
    intro:
      'A versão de 2023 usava tons de cinza (#000000 a #B9B9B9), degradê escuro e as fontes Righteous, Sarala e Roboto. A de 2026 segue um design system editorial: fundo claro, títulos em serifa, texto em sans humanista e cor em blocos, com a paleta enviada por mim.',
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
      { src: depoisClaro, alt: 'Página inicial de 2026 no tema claro: nome em serifa, cargo sendo digitado e o retrato em preto e branco.', caption: 'Página inicial de 2026, tema claro', frame: 'browser' },
      { src: depoisEscuro, alt: 'A mesma página inicial no tema escuro, com fundo grafite.', caption: 'O mesmo topo no tema escuro', frame: 'browser' },
      { src: depoisCelular, alt: 'Página inicial no celular, com o nome, o cargo e os botões empilhados.', caption: 'No celular', frame: 'phone' },
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
    { title: 'Design system de ponta a ponta', text: 'Tokens de tipografia, espaço, raio, cor e movimento aplicados a todas as páginas.' },
    { title: 'Acessibilidade', text: 'Contraste AA, navegação por teclado, leitores de tela e movimento opcional.' },
    { title: 'Performance', text: 'CSS embutido, imagens em WebP no tamanho certo e animações que pausam fora da tela.' },
    { title: 'Migrar sem regredir', text: 'Portar primeiro, comparar com o original e só então redesenhar.' },
    { title: 'Direção de IA', text: 'Definir referências, paleta e critérios e revisar o resultado de um agente de IA.' },
  ],
  results: {
    metrics: [
      { value: 100, label: 'de acessibilidade no Lighthouse, em todas as páginas medidas' },
      { value: 96, suffix: '+', label: 'de desempenho no celular, no Lighthouse' },
      { value: 0, label: 'violações de WCAG 2.2 AA no axe, em 12 páginas e nos dois temas' },
      { value: 200, prefix: '< ', suffix: ' KB', label: 'por página, com imagens e fontes' },
    ],
    highlights: [
      'Medições de 08/11/2026: Lighthouse no perfil de celular (início, projetos e páginas de projeto) e axe-core no computador e no celular, nos temas claro e escuro.',
      'Nota 100 também em boas práticas e SEO.',
    ],
  },
  lessons: [
    {
      title: 'O que mudou de 2023 para 2026',
      text: 'De um tema escuro fixo para temas claro e escuro; de fontes carregadas de outro servidor para fontes servidas pelo próprio site; de ícones de uma biblioteca externa para SVGs embutidos; e de uma página de apresentação para um portfólio com estudos de caso.',
    },
  ],
  sources: 'Histórico do repositório e o código do próprio site.',
};

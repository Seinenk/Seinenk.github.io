import type { CaseStudy } from './types';
import captura from '../../assets/images/projetos/layout-simples/captura-2023.webp';

/** Fonte: repositório público Seinenk/Web-1 (HTML, CSS e histórico). */
export const layoutSimples: CaseStudy = {
  slug: 'layout-simples',
  title: 'Layout Simples',
  type: 'Web',
  period: '2023',
  status: 'Concluído',
  summary: 'Na primeira atividade da disciplina de Web, reproduzi em HTML e CSS o layout que o professor passou.',
  tagline: 'Transformei o desenho de uma página em HTML e CSS, as linguagens dos sites.',
  tags: ['HTML', 'CSS', 'Flexbox'],
  art: 'layout-simples',
  facts: [
    { label: 'Disciplina', value: 'Web, na graduação em Análise e Desenvolvimento de Sistemas (ADS) do Instituto Federal do Piauí (IFPI)' },
    { label: 'Data', value: '2 e 3 de março de 2023' },
    { label: 'Stack', value: 'HTML e CSS, sem bibliotecas' },
    { label: 'Tamanho', value: 'Uma página, com 34 linhas de HTML e 136 de CSS' },
  ],
  links: [{ label: 'Código no GitHub', href: 'https://github.com/Seinenk/Web-1/tree/master/Web-1', icon: 'github' }],
  context: [
    'Na primeira atividade da disciplina de Web, o professor passou um layout, o desenho de uma página, e eu tinha de reproduzi-lo em HTML e CSS. A página tinha um cabeçalho com logo e menu, três cartões com Missão, Visão e Valores e um rodapé.',
    'É o projeto mais antigo deste portfólio, e por isso serve de comparação com os estudos de caso de hoje.',
  ],
  challenge: {
    problem: 'A partir de uma imagem de referência, eu precisava montar uma página igual no navegador e entender como cada caixa (cada bloco da página) ocupa o espaço.',
    goals: [
      'Montar um cabeçalho com a logo à esquerda e o menu ao lado',
      'Distribuir três cartões coloridos com espaço igual entre eles',
      'Fixar o rodapé na parte de baixo da tela',
    ],
  },
  story: [
    { date: '02/03/2023', title: 'A estrutura em HTML', text: 'O primeiro commit (versão salva do código) trouxe a estrutura da página em HTML, com o arquivo de CSS ainda vazio.' },
    { date: '03/03/2023', title: 'O layout pronto', text: 'No dia seguinte, escrevi 136 linhas de CSS para o cabeçalho, os três cartões e o rodapé fixo.' },
  ],
  features: [
    { icon: 'align-left', title: 'Cabeçalho com menu', text: 'A logo tem borda e cantos arredondados. O menu traz os links Home, Cursos, Professores e Contato.' },
    { icon: 'square', title: 'Três cartões', text: 'Missão, Visão e Valores ficam em quadrados de 200 px (pixels), com cantos arredondados de 20 px.' },
    { icon: 'arrow-down', title: 'Rodapé fixo', text: 'Uma faixa cinza fica presa à base da tela, com o link do Instagram.' },
  ],
  inside: {
    title: 'Como o CSS organiza a página',
    text: [
      'O flexbox (`display: flex`), recurso do CSS para alinhar elementos, organiza o cabeçalho e a fileira de cartões. O menu fica em linha, e os cartões se distribuem com `justify-content: space-around`.',
      'Um reset global (`* { margin: 0; padding: 0; box-sizing: border-box }`) zera os espaçamentos padrão do navegador e deixa as medidas previsíveis. O rodapé usa `position: fixed` com `bottom: 0` para ficar sempre visível.',
    ],
  },
  demo: {
    kind: 'layout-boxes',
    title: 'O layout, refeito aqui',
    text: 'Uma versão do exercício funciona nesta página. Ligue “Mostrar as caixas” para ver como o flexbox divide o espaço.',
  },
  visual: {
    intro: 'A página usa cores chapadas, uma para cada parte, e a fonte serifada padrão do navegador.',
    palette: [
      { name: 'Lavanda', hex: '#8E7CC3', role: 'Cabeçalho' },
      { name: 'Verde', hex: '#6AA84F', role: 'Cartão Missão' },
      { name: 'Azul', hex: '#6FA8DC', role: 'Cartão Visão' },
      { name: 'Laranja', hex: '#F6B26B', role: 'Cartão Valores' },
      { name: 'Cinza', hex: '#999999', role: 'Rodapé' },
      { name: 'Gelo', hex: '#EEEEEE', role: 'Fundo da logo' },
    ],
    typography: [
      {
        family: 'Serifa padrão do navegador',
        css: "'Times New Roman', Times, serif",
        role: 'O CSS não define fonte, então vale a do navegador, em 20 px nos textos',
        sample: 'Missão · Visão · Valores',
      },
    ],
    gallery: [
      {
        src: captura,
        alt: 'Captura do exercício: cabeçalho lilás com a logo e o menu, três cartões verde, azul e laranja e o rodapé cinza.',
        caption: 'O resultado de 2023',
        frame: 'browser',
      },
    ],
  },
  tech: [{ group: 'Base', items: ['HTML5', 'CSS3', 'Flexbox', 'Git e GitHub'] }],
  skills: [
    { title: 'Ler um layout', text: 'Transformei uma imagem de referência em caixas, medidas e cores.' },
    { title: 'Modelo de caixas', text: 'Entendi margem, preenchimento, borda e o efeito do `box-sizing`.' },
    { title: 'Flexbox', text: 'Alinhei e distribuí elementos em linha.' },
    { title: 'Versionamento', text: 'Fiz meus primeiros commits e criei meu primeiro repositório no GitHub.' },
  ],
  sources: 'Repositório público do exercício.',
};

import type { CaseStudy } from './types';
import captura from '../../assets/images/projetos/layout-simples/captura-2023.webp';

/** Fonte: repositório público Seinenk/Web-1 (HTML, CSS e histórico). */
export const layoutSimples: CaseStudy = {
  slug: 'layout-simples',
  title: 'Layout Simples',
  type: 'Web',
  period: '2023',
  status: 'Concluído',
  summary: 'Primeira atividade da disciplina de Web: reproduzir em HTML e CSS o layout passado pelo professor.',
  tagline: 'O primeiro exercício: transformar um desenho de layout em HTML e CSS.',
  tags: ['HTML', 'CSS', 'Flexbox'],
  art: 'layout-simples',
  facts: [
    { label: 'Disciplina', value: 'Web, na graduação em ADS do IFPI' },
    { label: 'Data', value: '2 e 3 de março de 2023' },
    { label: 'Stack', value: 'HTML e CSS, sem bibliotecas' },
    { label: 'Tamanho', value: 'Uma página: 34 linhas de HTML e 136 de CSS' },
  ],
  links: [{ label: 'Código no GitHub', href: 'https://github.com/Seinenk/Web-1/tree/master/Web-1', icon: 'github' }],
  context: [
    'Toda trajetória em front-end começa num exercício assim. Na primeira atividade da disciplina de Web, o professor passou um layout e a tarefa era reproduzi-lo em HTML e CSS: um cabeçalho com logo e menu, três cartões com Missão, Visão e Valores e um rodapé.',
    'É o projeto mais antigo deste portfólio, e por isso também uma régua: dá para ver o caminho daqui até os estudos de caso de hoje.',
  ],
  challenge: {
    problem: 'Sair de uma imagem de referência e chegar a uma página que se comporte igual no navegador, entendendo como cada caixa ocupa o espaço.',
    goals: [
      'Montar um cabeçalho com a logo à esquerda e o menu ao lado',
      'Distribuir três cartões coloridos com espaço igual entre eles',
      'Fixar o rodapé na parte de baixo da tela',
    ],
  },
  story: [
    { date: '02/03/2023', title: 'O esqueleto', text: 'O primeiro commit traz a estrutura da página em HTML, com o arquivo de CSS ainda vazio.' },
    { date: '03/03/2023', title: 'O layout pronto', text: 'No dia seguinte, 136 linhas de CSS dão forma ao cabeçalho, aos três cartões e ao rodapé fixo.' },
  ],
  features: [
    { icon: 'align-left', title: 'Cabeçalho com menu', text: 'Logo com borda e cantos arredondados, e os links Home, Cursos, Professores e Contato.' },
    { icon: 'square', title: 'Três cartões', text: 'Missão, Visão e Valores em quadrados de 200 px com cantos de 20 px.' },
    { icon: 'arrow-down', title: 'Rodapé fixo', text: 'Uma faixa cinza presa à base da tela, com o link do Instagram.' },
  ],
  inside: {
    title: 'Flexbox desde o primeiro dia',
    text: [
      'O cabeçalho e a fileira de cartões usam `display: flex`: o menu fica em linha e os cartões se distribuem com `justify-content: space-around`.',
      'Um reset global (`* { margin: 0; padding: 0; box-sizing: border-box }`) deixa as medidas previsíveis, e o rodapé usa `position: fixed` com `bottom: 0` para ficar sempre visível.',
    ],
  },
  demo: {
    kind: 'layout-boxes',
    title: 'O layout, refeito aqui',
    text: 'Uma versão viva do exercício. Ligue "Mostrar as caixas" para ver como o flexbox divide o espaço.',
  },
  visual: {
    intro: 'Cores chapadas, uma para cada parte da página, e a fonte serifada padrão do navegador.',
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
        role: 'Sem fonte definida no CSS: vale a do navegador, em 20 px nos textos',
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
    { title: 'Ler um layout', text: 'Transformar uma imagem de referência em caixas, medidas e cores.' },
    { title: 'Modelo de caixas', text: 'Margem, preenchimento, borda e o efeito do `box-sizing`.' },
    { title: 'Flexbox', text: 'Alinhar e distribuir elementos em linha.' },
    { title: 'Versionamento', text: 'Os primeiros commits e o primeiro repositório no GitHub.' },
  ],
  sources: 'Repositório público do exercício.',
};

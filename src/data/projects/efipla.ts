import type { AppTheme, CaseStudy } from './types';
import criacao from '../../assets/images/projetos/efipla/criacao.webp';
import atributos from '../../assets/images/projetos/efipla/atributos.webp';
import combate from '../../assets/images/projetos/efipla/combate.webp';
import conjuracao from '../../assets/images/projetos/efipla/conjuracao.webp';
import loja from '../../assets/images/projetos/efipla/loja.webp';
import diario from '../../assets/images/projetos/efipla/diario.webp';
import icone from '../../assets/images/projetos/efipla/icone.webp';
import combateAntes from '../../assets/images/projetos/efipla/combate-antes.webp';
import combateDepois from '../../assets/images/projetos/efipla/combate-depois.webp';

/**
 * As 11 cores de destaque do app, na ordem do seletor dele. A primária e o texto vêm
 * do Material 3 (ColorScheme.fromSeed); o fundo, os cards e os contornos saem da
 * escada própria de lib/theme/fantasy_theme.dart: a semente a até 20 % sobre #0B0B10,
 * com teto de luminância, e branco por cima para cada degrau. Recalculado com o
 * mesmo algoritmo em 08/11/2026; a primária confere com a especificação da landing page.
 */
const themes: AppTheme[] = [
  { name: 'Roxo', seed: '#6750A4', primary: '#CFBDFE', surface: '#1D192E', surfaceHigh: '#383447', outline: '#AEACB4', outlineVariant: '#6A6775', onSurface: '#E6E0E9', onSurfaceVariant: '#CAC4CF' },
  { name: 'Vermelho Rubi', seed: '#9B111E', primary: '#FFB3AF', surface: '#280C13', surfaceHigh: '#42292F', outline: '#ADA3A5', outlineVariant: '#715F63', onSurface: '#F1DEDD', onSurfaceVariant: '#D8C2C0' },
  { name: 'Dourado', seed: '#B8860B', primary: '#EDC06C', surface: '#231C0F', surfaceHigh: '#3E372C', outline: '#B2B0AB', outlineVariant: '#6E6961', onSurface: '#ECE1D4', onSurfaceVariant: '#D1C5B4' },
  { name: 'Ciano', seed: '#00838F', primary: '#81D3DF', surface: '#092026', surfaceHigh: '#273B40', outline: '#A9B1B3', outlineVariant: '#5D6C70', onSurface: '#DEE4E4', onSurfaceVariant: '#BEC8CA' },
  { name: 'Verde', seed: '#2E7D32', primary: '#A1D39A', surface: '#112016', surfaceHigh: '#2E3B32', outline: '#ACB1AE', outlineVariant: '#626C65', onSurface: '#E0E4DB', onSurfaceVariant: '#C2C9BD' },
  { name: 'Laranja', seed: '#E65100', primary: '#FFB59A', surface: '#2F170D', surfaceHigh: '#48322A', outline: '#B6AEAA', outlineVariant: '#766660', onSurface: '#F1DFD9', onSurfaceVariant: '#D8C2BB' },
  { name: 'Azul', seed: '#2B5DA8', primary: '#ABC7FF', surface: '#111B2E', surfaceHigh: '#2E3747', outline: '#A9ADB4', outlineVariant: '#626975', onSurface: '#E2E2E9', onSurfaceVariant: '#C4C6D0' },
  { name: 'Vanessa', seed: '#E69AAC', primary: '#FFB1C3', surface: '#231B21', surfaceHigh: '#3D363C', outline: '#B2AFB1', outlineVariant: '#6E686D', onSurface: '#EFDEE1', onSurfaceVariant: '#D6C2C5' },
  { name: 'Regina', seed: '#8C4D96', primary: '#EAB5EE', surface: '#25182B', surfaceHigh: '#3F3444', outline: '#B3AEB5', outlineVariant: '#6F6773', onSurface: '#EADFE6', onSurfaceVariant: '#D0C3CC' },
  { name: 'Preto e Cinza', seed: '#3A3A3A', primary: '#FFFFFF', surface: '#141418', surfaceHigh: '#313134', outline: '#A6A6A7', outlineVariant: '#646467', onSurface: '#E2E2E2', onSurfaceVariant: '#C6C6C6' },
  { name: 'Branco', seed: '#B9BDC1', primary: '#BBC8D2', surface: '#1C1D22', surfaceHigh: '#38383C', outline: '#B0B0B2', outlineVariant: '#696A6D', onSurface: '#E4E2E3', onSurfaceVariant: '#C7C6C7' },
];

/**
 * Fontes: README, CONTEXT, CHANGELOG e CLAUDE.md do repositório do EFIPLA, os estudos
 * do redesenho da aba Combate (docs/redesenho_aba_combate), a especificação de tema da
 * landing page, o histórico de commits e os textos e mídias da landing page (08/11/2026).
 */
export const efipla: CaseStudy = {
  slug: 'efipla',
  title: 'EFIPLA',
  type: 'Desenvolvimento',
  period: '2026',
  status: 'Em andamento',
  summary:
    'Ficha digital de D&D 5ª Edição, o RPG de mesa, que fiz em Flutter para Android. Ela guia a criação do personagem, aplica as regras no combate e registra a campanha, tudo sem internet.',
  tagline: 'Uma ficha completa da 5ª Edição de Dungeons & Dragons (D&D), o RPG de mesa, que faz as contas no celular.',
  tags: ['Flutter', 'Dart', 'D&D 5e', 'Offline'],
  featured: true,
  art: 'efipla',
  fonts: ['--font-efipla-logo', '--font-efipla-title', '--font-efipla-text', '--font-efipla-pixel'],
  facts: [
    { label: 'Papel', value: 'Produto, design e desenvolvimento' },
    { label: 'Período', value: 'Maio a novembro de 2026 · 105 commits' },
    { label: 'Plataforma', value: 'Android, instalado por APK · testes no simulador do iPhone' },
    { label: 'Stack', value: 'Flutter 3.47, Dart 3.13, Riverpod e Hive' },
  ],
  links: [{ label: 'Site do EFIPLA', href: 'https://landpage-efipla.vercel.app', icon: 'globe' }],
  context: [
    "Depois de muitas horas de **Baldur's Gate 3**, fiquei com vontade de jogar RPG de mesa. O videogame guia a criação do personagem e mostra as regras com um toque. Na mesa, criar meu primeiro personagem com uma ficha em PDF e o Livro do Jogador levou **duas horas**, mesmo com alguém experiente ajudando. E era fácil esquecer de atualizar a ficha a cada fim de sessão.",
    'Criei o EFIPLA para levar a praticidade do videogame só à parte burocrática da mesa: criar o personagem, conferir as contas e controlar inventário, ouro, magias e recursos. Narrar e interpretar continuam com quem joga.',
    'Fiz o app em Flutter, a tecnologia do Google para criar apps de celular, pensando no público brasileiro. A interface é em português, e tudo fica guardado no aparelho, sem conta, sem internet e sem anúncio. É gratuito e independente, sem afiliação com a Wizards of the Coast.',
  ],
  challenge: {
    problem:
      'Numa ficha de D&D, uma conta depende da outra. A CA muda com a armadura, o escudo, a classe e o item mágico. O crítico dobra os dados, mas não o modificador, e a concentração pode cair a cada dano. Quando o código erra uma dessas contas, ninguém percebe. E tudo precisava funcionar sem internet, em português e sem perder nada do que o jogador anotou.',
    goals: [
      'Criar um personagem completo em minutos, pelas regras do livro',
      'Atualizar vida, recursos, magias, condições e inventário durante a sessão',
      'Registrar automaticamente no diário cada rolagem, compra e dano da campanha',
      'Guardar tudo no aparelho, sem conta, sem servidor e sem perder dados',
      'Deixar cada jogador personalizar a ficha sem prejudicar a leitura',
    ],
  },
  story: [
    {
      date: '25/05/2026',
      title: 'A primeira versão do código',
      text: 'O primeiro commit (versão salva do código) já trouxe o assistente de criação de personagem, o fluxo de subida de nível e a ficha. As regras de D&D vinham em arquivos de dados próprios.',
    },
    {
      date: 'Junho e julho de 2026',
      title: 'Inventário refeito e novas funções',
      text: 'Refiz inventário, equipamentos e compêndios. Chegaram a aba de Missões, a biblioteca de PDFs, a ficha exportada em PDF e o ditado por voz no diário. Também vieram um boot que não quebra com dados corrompidos e os primeiros testes de tela.',
    },
    {
      date: 'Agosto de 2026',
      title: 'Marca, cores e landing page',
      text: 'Chegaram logo e tema novos, ícones próprios para os espaços de equipamento e os destaques Vanessa e Regina, que levaram o seletor a 11 cores. Saiu também a primeira versão da landing page, feita em Astro (ferramenta que gera sites). Ela trazia o APK (arquivo de instalação do app) para baixar.',
    },
    {
      date: 'Setembro de 2026',
      title: 'Rolagens, mapa e auditorias',
      text: 'As rolagens pelo app vieram desligadas por padrão, para não mudar o jogo de quem usa dado físico. Criei o **CONTEXT.md**, o mapa do projeto. Uma simulação de mesa achou seis defeitos do mesmo tipo no inventário, na equipagem e na loja.',
    },
    {
      date: '17 a 19/10/2026',
      title: 'Itens conferidos com os livros',
      text: 'Corrigi **420 itens mágicos** e acrescentei 13, conferindo com o Guia do Mestre, o Fizban e o Tasha. Chegaram o contraste de 4,5:1 em todos os destaques, os ícones de RPG no app inteiro e os testes no simulador do iPhone 17, que gravam prints.',
    },
    {
      date: '26/10/2026',
      title: 'A aba Combate redesenhada',
      text: 'Os jogadores acharam a aba confusa, com informação demais. Fiz uma pesquisa de UX (experiência de uso) e comparei a aba com D&D Beyond, Fight Club 5e, Roll20, Foundry e Demiplane. Estudei o que o jogador faz na mesa e preparei **três propostas concorrentes**. A especificação aprovada virou os cards Vitais e Recursos.',
    },
    {
      date: '04/11/2026',
      title: 'A vitrine gravada por teste',
      text: 'As 38 imagens e vídeos da landing page, nas duas línguas, passaram a sair de um roteiro de teste que usa o app de verdade. O roteiro foi conferido no iPhone 17 e gravado no emulador Android, com o dado programado para o ataque acertar. Desde 28/10, uma skill do agente de inteligência artificial (IA) publica cada entrega: o código, o APK final e a landing page.',
    },
  ],
  features: [
    {
      icon: 'wand-sparkles',
      title: 'Criação guiada',
      text: 'Um assistente de 19 etapas começa na raça e termina no equipamento. São mais de 50 raças, 13 classes e 4 métodos de atributos. O rascunho se salva sozinho, e o Mestre pode aprovar a recriação do personagem.',
    },
    {
      icon: 'swords',
      title: 'Combate seguindo as regras',
      text: 'O app mostra a vida numa barra animada e a Classe de Armadura (CA) separada por origem. Controla 15 condições, a concentração e os testes contra a morte com d20 (dado de 20 lados) animado. No ataque, pergunta se acertou antes do dano, e o acerto crítico dobra os dados, mas não o modificador.',
    },
    {
      icon: 'notebook-pen',
      title: 'Diário da campanha',
      text: 'As sessões têm início e fim e aceitam fotos da câmera. O app registra sozinho o combate, o inventário, a loja e toda rolagem. Ao encerrar, mostra um resumo da vida, do ouro e dos itens que mudaram.',
    },
    {
      icon: 'library',
      title: 'Compêndios, loja e PDFs',
      text: 'Os compêndios têm mais de 500 magias e 1.000 itens com filtros. Há ainda uma loja com cesto e pechincha, missões com recompensa e os PDFs do próprio jogador para ler sem internet.',
    },
    {
      icon: 'dices',
      title: 'Dado físico ou rolagem no app',
      text: 'Com “Rolagens pelo app” desligado, que é o padrão, o ataque e o dano saem do dado físico da mesa, e o app só anota o resultado. Ligado, o app rola também o ataque, o dano e os efeitos de magia e de item.',
    },
    {
      icon: 'palette',
      title: 'Aparência e idioma à escolha',
      text: 'O app tem 11 cores de destaque e duas peles (estilos visuais), fantasia e 8/16 bits, e funciona em português ou inglês. A trilha sonora se desliga com um toque.',
    },
  ],
  inside: {
    title: 'Como o app guarda e calcula a ficha',
    text: [
      'A ficha é um `CharacterModel` guardado no **Hive**, um banco de dados no próprio aparelho. Toda mudança passa pelo `activeCharacterProvider`, do Riverpod (biblioteca que leva os dados às telas), e é salva sozinha dois segundos depois da última.',
      'A tela não faz conta de D&D. As regras ficam em `utils/`, código puro sem Flutter. Os testes usam um dado de semente fixa, o `Random(7)`, que sorteia sempre os mesmos números. A ficha guarda as chaves (nomes internos) em inglês, e o português só aparece na tela.',
      'Para nada se perder sem servidor, o formato da ficha tem versão (está na 6) e migrações para fichas antigas. A abertura do app (boot) resiste a dados corrompidos, e há backup antes de apagar.',
    ],
    diagram: 'efipla',
  },
  decisions: [
    {
      title: 'Tudo no aparelho',
      why: 'Sem servidor, conta ou internet, o que o app não guardar, o jogador perde. Daí vêm a versão do formato com migrações, o boot que preserva dados corrompidos e o backup antes de apagar.',
      tradeoff: 'Não há sincronização entre aparelhos.',
    },
    {
      title: 'A tradução acontece só na tela',
      why: 'Chaves e nomes oficiais ficam em inglês, como o catálogo de D&D é indexado, e a tela chama `tr()` para traduzir. Um texto traduzido gravado na ficha ficaria preso ao idioma da época.',
      tradeoff: 'Uma chave montada com o app em uso escapa da varredura do código, mas os testes de tela anotam as traduções que faltam enquanto rodam.',
    },
    {
      title: 'Rolagens pelo app desligadas por padrão',
      why: 'Muitos grupos rolam dados físicos e querem o app só como ficha. Se viesse ligada, a opção mudaria o jogo de quem não pediu.',
    },
    {
      title: 'Regras de D&D separadas das telas',
      why: 'Cada conta vai para `utils/`, sem Flutter, e é testada sem montar tela. Todo teste novo diz que bug evita e tem um caso que falharia se a regra fosse revertida.',
    },
    {
      title: 'Pele e cor são escolhas independentes',
      why: 'Trocar de fantasia para 8/16 bits muda fonte, canto, borda e ícone, mas nunca a cor. As duas peles saem da mesma função de tema, porque montar a fantasia e remendá-la depois deixava componentes de fora.',
    },
    {
      title: 'Ícones de RPG numa fonte própria',
      why: 'O Material, padrão visual do Google para apps, não tem ícone de elmo, manopla nem arco. Um conversor em Dart puro (a linguagem do Flutter) transforma desenhos SVG do game-icons.net numa fonte com os mesmos nomes do `Icons`. Um teste reprova o ícone do Material fora da aba Equipar.',
      tradeoff: 'Os ícones têm licença CC BY 3.0, e os autores são creditados no próprio app.',
    },
  ],
  demo: {
    kind: 'before-after',
    title: 'Antes e depois',
    text: 'Arraste para comparar a aba Combate antes do redesenho com a de hoje, na mesma personagem.',
    compare: {
      before: {
        src: combateAntes,
        alt: 'Aba Combate antiga da Ceris Toph: card de identidade, card de Pontos de Vida com 45 de 78, card de Experiência com “Level Up disponível!”, cards de Caminhada e Dano da Arma e os botões flutuantes por cima.',
        tag: 'Antes',
        name: 'a aba Combate antiga',
      },
      after: {
        src: combateDepois,
        alt: 'Aba Combate de hoje: o card Vitais com 52 de 69 pontos de vida e 6 temporários, CA 18, iniciativa, caminhada, proficiência, percepção passiva e a experiência, a faixa de concentração e o card Recursos.',
        tag: 'Hoje',
        name: 'a aba Combate de hoje',
      },
      frame: 'phone',
      caption: 'À esquerda, a aba antiga. À direita, a de hoje, com os cards Vitais e Recursos. Arraste a divisória ou use as setas do teclado.',
    },
  },
  visual: {
    intro:
      'O app é só escuro, com a identidade de uma mesa de taverna à luz de velas. A cor vem de uma cor-semente que o Material 3 transforma num esquema inteiro, e o fundo é essa semente sobre um quase-preto. A forma vem da tipografia e dos cantos chanfrados, cortados em diagonal como placa de madeira serrada.',
    palette: [
      { name: 'Semente', hex: '#6750A4', role: 'O roxo padrão, de onde o Material 3 gera o resto' },
      { name: 'Primária', hex: '#CFBDFE', role: 'Abas, ícones e destaques' },
      { name: 'Contêiner', hex: '#4D3D75', role: 'Botões e itens selecionados' },
      { name: 'Mesa', hex: '#1D192E', role: 'Fundo, com a semente a 20 % sobre #0B0B10' },
      { name: 'Card', hex: '#383447', role: 'Cards e folhas, um degrau mais claros' },
      { name: 'Ouro da XP', hex: '#FFD700', role: 'Barra de experiência' },
      { name: 'Vida', hex: '#66BB6A', role: 'Vida cheia e cura' },
      { name: 'Dano', hex: '#E57373', role: 'Dano, como sinal e nunca como texto' },
    ],
    paletteNote:
      'As cinco primeiras mudam com o destaque escolhido. Ouro, vida e dano têm significado fixo (paleta semântica) e não mudam. Todo texto atinge 4,5:1 de contraste sobre o card e o fundo, nos 11 destaques. Três auditorias conferem isso: os pares do esquema, uma varredura de toda cor escrita no código e a medição da tela no simulador.',
    typography: [
      {
        family: 'Rubik Distressed',
        css: 'var(--font-efipla-logo)',
        role: 'Logotipo, com textura de pedra gasta',
        sample: 'EFIPLA',
        note: 'Na pele 8/16 bits, o logotipo vira Press Start 2P com a sombra dupla dos fliperamas.',
      },
      {
        family: 'Cinzel',
        css: 'var(--font-efipla-title)',
        role: 'Títulos da pele fantasia, de 600 a 700 (fonte variável)',
        sample: 'Ceris Toph',
        weight: 700,
        variable: true,
        range: [400, 900],
      },
      {
        family: 'Alegreya',
        css: 'var(--font-efipla-text)',
        role: 'Texto e rótulos da pele fantasia',
        sample: 'Tiefling (Mephistopheles) · Guerreiro 2 / Bruxo 7',
      },
      {
        family: 'Silkscreen',
        css: 'var(--font-efipla-pixel)',
        role: 'Tudo na pele 8/16 bits, com a escala do texto reduzida',
        sample: 'Subiu de Nível!',
        note: 'A fonte não tem º, & nem →, então a tela troca esses caracteres só na hora de exibir.',
      },
    ],
    tokens: [
      {
        title: 'Chanfros',
        items: [
          { name: 'Card', value: '10' },
          { name: 'Diálogo', value: '14' },
          { name: 'Botão', value: '8' },
          { name: 'Chip', value: '6' },
        ],
      },
      {
        title: 'Botão 3D',
        items: [
          { name: 'Pressão, fantasia', value: '80 ms' },
          { name: 'Pressão, 8/16 bits', value: '70 ms' },
          { name: 'Descida', value: '3 px' },
          { name: 'Sombra dura', value: '4 px · 5 px' },
        ],
      },
      {
        title: 'As duas peles',
        items: [
          { name: 'Borda', value: '1,2 px · 2 px' },
          { name: 'Canto', value: 'chanfro · reto' },
          { name: 'Sombra', value: 'com blur · sem blur' },
          { name: 'Escala do texto', value: '1 · 0,72 a 0,9' },
        ],
      },
    ],
    appThemes: themes,
    appThemesText:
      'Escolha um destaque e uma pele, e a miniatura da aba Combate muda como o app muda. As cores são as que o app calcula para cada semente, e a pele troca só fonte, canto, borda e sombra.',
    mark: 'O ícone junta um **d20** sobre um escudo, preso por uma faixa, no centro de um círculo mágico, com uma moldura de runas em volta e o nome em Rubik Distressed. O dado mostra o 20, o acerto crítico. O roxo é o do app, com a primária lavanda sobre o fundo escuro.',
    markBackground: 'radial-gradient(120% 100% at 30% 15%, #4d3d75 0%, #2a2440 38%, #1d192e 68%, #151221 100%)',
    gallery: [
      {
        src: criacao,
        alt: 'Etapa Raça da criação: gênero Masculino marcado, busca por “Tiefling”, botões Tabela e Comparar e o card do Tiefling, com a descrição e as 11 sub-raças, das linhagens de Asmodeus a Zariel, mais o Tiefling Feroz e o Voador. Embaixo, o botão “Próximo: Classe”.',
        caption: 'A etapa Raça da criação, com busca, tabela e comparação',
        frame: 'phone',
        story: {
          step: 'Criar o personagem',
          text: 'A criação vai em etapas. Na etapa Raça, dá para buscar, abrir a tabela e comparar opções, como as sub-raças de Tiefling.',
          icon: 'user-plus',
        },
      },
      {
        src: atributos,
        alt: 'Aba Atributos da Ceris Toph: os seis atributos em placas chanfradas, FOR +3, DES +1, CON +2, INT +0, SAB +0 e CAR +5, com os valores 16, 12, 14, 11, 10 e 20, e os testes de resistência, com proficiência em Força (+8) e Constituição (+7).',
        caption: 'Modificadores, valores e testes de resistência na aba Atributos',
        frame: 'phone',
        story: {
          step: 'Conferir os atributos',
          text: 'A aba Atributos mostra os seis atributos com valor e modificador, e os testes de resistência logo abaixo.',
          icon: 'dices',
        },
      },
      {
        src: combate,
        alt: 'Aba Combate da Kara Silvanis na Forma Selvagem: o card Vitais com “PV: Tigre” 34 de 44, CA 12, a linha “Kara ao voltar: 45 / 45”, iniciativa, caminhada de 12 m, proficiência, percepção passiva, a experiência do nível 6 e o chip “Tigre · até 3 h”. Abaixo, o card Recursos com a Forma Selvagem em uso, o botão Reverter e os espaços de magia.',
        caption: 'Combate na Forma Selvagem, com a vida do tigre, a da druida por baixo e os recursos',
        frame: 'phone',
        story: {
          step: 'Entrar em combate',
          text: 'No combate, a ficha acompanha vida, defesa e recursos. Na Forma Selvagem, mostra a vida do tigre e, por baixo, a da druida.',
          icon: 'swords',
        },
      },
      {
        src: conjuracao,
        alt: 'Folha da Conjuração sobre a ficha da Ceris Toph: o card da Fome de Hadar, magia de 3º círculo, com o botão Conjurar, o gasto de 1 espaço de pacto do 4º círculo, o dano gélido de 2d6 (média 7) no início do turno, o dano ácido com teste de Destreza CD 17 no fim do turno e os componentes verbal, somático e material, com a fala da magia e o tentáculo de polvo em conserva.',
        caption: 'Conjuração com custo, dano médio, teste e componentes de cada magia',
        frame: 'phone',
        story: {
          step: 'Lançar uma magia',
          text: 'Cada magia mostra o custo, o dano médio, o teste e os componentes, com o botão Conjurar.',
          icon: 'wand-sparkles',
        },
      },
      {
        src: loja,
        alt: 'Aba Itens, sub-aba Loja: o Histórico, a bolsa com 277 peças de ouro e 5 de prata e seis lojas com a contagem de itens: Ferreiro (189), Loja Geral (262), Loja Mágica (645), Taverna (25), Estábulos e Transporte (32) e Artigos de Luxo (45).',
        caption: 'Itens › Loja, com seis lojas e a contagem de itens de cada uma',
        frame: 'phone',
      },
      {
        src: diario,
        alt: 'Diário da sessão “A Torre Partida”, em andamento: uma anotação sobre a torre selada com runas e as linhas que o app registrou sozinho às 02:37 e 02:38, com a iniciativa, o ataque de Espada Longa que acertou, o dano, o dano recebido (52 para 48), os PV temporários e o teste de concentração da Imobilizar Pessoa. No pé, o botão vermelho de parar, o microfone do ditado e os de anexar imagem e fotografar.',
        caption: 'O diário anota sozinho cada rolagem, com a hora',
        frame: 'phone',
        story: {
          step: 'Registrar a sessão',
          text: 'O diário da sessão anota sozinho cada rolagem, com a hora.',
          icon: 'notebook-pen',
        },
      },
      {
        src: icone,
        alt: 'Ícone do EFIPLA: um d20 com o número 20 sobre um escudo, uma faixa com runas, um círculo mágico ao fundo, o nome EFIPLA em letras gastas e uma moldura de runas, em roxo e lavanda.',
        caption: 'O ícone do app',
        frame: 'square',
      },
    ],
    galleryNote:
      'Telas de 04/11/2026, gravadas no emulador Android pelo roteiro de teste da vitrine, as mesmas da landing page (o site do app). A aba Combate de antes do redesenho só aparece no comparador acima.',
  },
  tech: [
    { group: 'App', items: ['Flutter 3.47', 'Dart 3.13', 'Riverpod 2.6', 'Hive 2.2', 'Material 3'] },
    { group: 'Recursos', items: ['SyncFusion PDF Viewer', 'image_picker', 'image_cropper', 'audioplayers', 'share_plus', 'file_selector'] },
    { group: 'Qualidade', items: ['flutter_lints', 'Testes de unidade e de widget', 'integration_test no iPhone 17', 'GitHub Actions', 'FVM'] },
    { group: 'Design', items: ['Cinzel', 'Alegreya', 'Silkscreen', 'Rubik Distressed', 'game-icons.net', 'flutter_launcher_icons'] },
    { group: 'Landing page', items: ['Astro 7', 'Vercel', 'Português e inglês'] },
  ],
  skills: [
    { title: 'Regras como código', text: 'Transformei o Livro do Jogador em funções puras, com a página da regra no comentário e um teste que falha se a regra for revertida.' },
    { title: 'Dados que não se perdem', text: 'Protegi os dados de um app sem servidor com versão do formato, migrações, boot que resiste a dados corrompidos e backup antes de apagar.' },
    { title: 'Internacionalização', text: 'Deixei a tradução na exibição, com chaves em inglês. Testes barram a montagem do app (build) quando falta uma tradução ou duas entram em conflito.' },
    { title: 'Cor acessível em qualquer tema', text: 'Três auditorias que se completam medem o contraste de 4,5:1 nos 11 destaques e nas duas peles.' },
    { title: 'Pesquisa e redesenho de UX', text: 'Estudei a tarefa na mesa, comparei concorrentes, propus três caminhos e implementei a especificação aprovada.' },
    { title: 'Direção de agentes de IA', text: 'Usei um CONTEXT.md como mapa, um CLAUDE.md com as regras de cada sessão, testes como proteção e uma skill que publica a entrega.' },
  ],
  results: {
    metrics: [
      { value: 3503, label: 'testes automatizados, que a integração contínua (CI) roda a cada atualização do código principal' },
      { value: 43, label: 'testes no simulador do iPhone 17, que gravam prints de cada tela' },
      { value: 420, label: 'itens mágicos corrigidos com base nos livros Guia do Mestre, Fizban e Tasha' },
      { value: 10, prefix: '5 a ', suffix: ' min', label: 'para criar um personagem, na minha estimativa, contra 1 a 2 horas com a ficha em PDF e o livro' },
    ],
    highlights: [
      'O teste `test/context_doc_test.dart` falha se o CONTEXT.md, o documento que mapeia o projeto, citar um caminho que não existe mais.',
      'A especificação da nova aba Combate registra 14 decisões, e os comentários do código citam cada uma pelo número.',
      'É gratuito, sem anúncio e sem nada à venda, e nenhum dado sai do aparelho.',
    ],
  },
  lessons: [
    {
      title: 'Erros de conta passam despercebidos',
      text: 'Quando a CA ou o dano saem errados, ninguém percebe. Por isso cada regra é fixada por um teste, com o motivo escrito em português no comentário.',
    },
    {
      title: 'Seis defeitos com a mesma causa',
      text: 'O inventário guarda itens de duas formas, como texto e como item com estatísticas. Vender, perder ou desfazer numa das formas mantinha o item na outra. Agora, quando o item sai da bolsa, tudo que apontava para ele sai junto.',
    },
    {
      title: 'A correção que criou um bug',
      text: 'Para evitar colisões entre traduções, as funções que traduzem criaturas passaram a ler os mapas direto e perderam a proteção do inglês. Assim, o app em inglês mostrou “Servo Invisível”. Pior, o teste tratava isso como aceitável. Hoje um teste varre o catálogo inteiro nas duas línguas.',
    },
    {
      title: 'O tom 500 é para fundo claro',
      text: 'Em texto sobre o card escuro, as cores do Material no tom 500 davam de 1,2 a 4,4 de contraste. Os tons 200 a 300 da mesma família resolveram, e a auditoria passou a medir toda cor escrita no código.',
    },
  ],
  next: [
    'Corrigir os textos no idioma errado ou sem acento que a gravação da vitrine revelou, como a Bruxaria ainda chamada de “Hex”.',
    'Migrar o Riverpod da versão 2.6 para a 3, que muda a API de base (a forma de usar a biblioteca) em 65 arquivos. Essa migração ficou de fora de propósito.',
    'Numerar as versões. O app continua em `1.0.0+1`, e cada entrega é identificada pela data e pelos commits.',
  ],
  sources:
    'Documentação do projeto (README, CONTEXT, CHANGELOG, CLAUDE.md e os estudos do redesenho da aba Combate), o histórico do repositório e a landing page.',
};

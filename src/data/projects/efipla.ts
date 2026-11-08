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
    'Ficha digital de D&D 5ª Edição para Android, em Flutter: cria o personagem passo a passo, acompanha o combate com as regras na mão e registra a campanha, tudo offline.',
  tagline: 'Uma ficha de D&D 5e completa, offline e no bolso: o app cuida das contas, e a mesa cuida de imaginar.',
  tags: ['Flutter', 'Dart', 'D&D 5e', 'Offline'],
  featured: true,
  art: 'efipla',
  fonts: ['--font-efipla-logo', '--font-efipla-title', '--font-efipla-text', '--font-efipla-pixel'],
  facts: [
    { label: 'Papel', value: 'Produto, design e desenvolvimento' },
    { label: 'Período', value: 'Maio a novembro de 2026 · 105 commits' },
    { label: 'Plataforma', value: 'Android, por APK · testes no simulador do iPhone' },
    { label: 'Stack', value: 'Flutter 3.47, Dart 3.13, Riverpod e Hive' },
  ],
  links: [{ label: 'Site do EFIPLA', href: 'https://landpage-efipla.vercel.app', icon: 'globe' }],
  context: [
    "Depois de muitas horas de **Baldur's Gate 3**, veio a vontade de jogar RPG de mesa. No jogo, a criação de personagem é guiada e as regras estão a um toque. Na mesa, criar o primeiro personagem com uma ficha em PDF e o Livro do Jogador levou **duas horas**, mesmo com alguém experiente ajudando, e atualizar a ficha a cada fim de sessão era fácil de esquecer.",
    'O EFIPLA nasceu para trazer a praticidade do jogo só para a parte burocrática da mesa: criar o personagem, conferir as contas e controlar inventário, ouro, magias e recursos. Imaginar, narrar e interpretar continuam com quem joga.',
    'É uma ficha digital de D&D 5ª Edição em Flutter, feita para o público brasileiro: interface em português, tudo guardado no aparelho, sem conta, sem internet e sem anúncio. É gratuita e independente, sem afiliação com a Wizards of the Coast.',
  ],
  challenge: {
    problem:
      'Uma ficha de D&D é uma rede de contas encadeadas. A CA muda com a armadura, o escudo, a classe e o item mágico; o crítico dobra os dados, mas não o modificador; a concentração pode cair a cada dano. Quando o código erra uma dessas contas, ninguém percebe: o número simplesmente sai errado. E tudo precisava funcionar offline, em português e sem perder nada do que o jogador anotou.',
    goals: [
      'Criar um personagem completo em minutos, pelas regras do livro',
      'Manter a ficha viva durante a sessão: vida, recursos, magias, condições e inventário',
      'Registrar a campanha sozinho: cada rolagem, compra e dano no diário',
      'Guardar tudo no aparelho, sem conta, sem servidor e sem perder dados',
      'Deixar a ficha com a cara de cada jogador, sem perder a legibilidade',
    ],
  },
  story: [
    {
      date: '25/05/2026',
      title: 'O app chega ao repositório',
      text: 'O primeiro commit já traz o assistente de criação de personagem, o fluxo de subida de nível e a ficha, com as regras de D&D em arquivos de dados próprios.',
    },
    {
      date: 'Junho e julho de 2026',
      title: 'As grandes atualizações',
      text: 'Inventário, equipamentos e compêndios são refeitos, e chegam a aba de Missões, a biblioteca de PDFs, a ficha exportada em PDF, o ditado por voz no diário, um boot que não quebra com dados corrompidos e os primeiros testes de tela.',
    },
    {
      date: 'Agosto de 2026',
      title: 'Marca, cores e landing page',
      text: 'Logo e tema novos, ícones próprios para os espaços de equipamento, os destaques Vanessa e Regina, que levaram o seletor a 11 cores, e a primeira versão da landing page, em Astro, com o APK para baixar.',
    },
    {
      date: 'Setembro de 2026',
      title: 'Rolagens, mapa e auditorias',
      text: 'As rolagens pelo app chegam desligadas por padrão, para não mudar a mesa de quem joga com dado físico. Nasce o **CONTEXT.md**, o mapa do projeto, e uma simulação de mesa acha seis defeitos do mesmo tipo no inventário, na equipagem e na loja.',
    },
    {
      date: '17 a 19/10/2026',
      title: 'Conferido com os livros',
      text: '**420 itens mágicos** corrigidos e 13 acrescentados contra o Guia do Mestre, o Fizban e o Tasha. Chegam os testes no simulador do iPhone 17, que gravam prints, o contraste de 4,5:1 em todos os destaques e os ícones de RPG no app inteiro.',
    },
    {
      date: '26/10/2026',
      title: 'A aba Combate redesenhada',
      text: 'Os jogadores acharam a aba confusa pela quantidade de informação. Vieram uma pesquisa de UX, uma comparação com D&D Beyond, Fight Club 5e, Roll20, Foundry e Demiplane, um estudo do que o jogador faz na mesa e **três propostas concorrentes**. A especificação aprovada virou os cards Vitais e Recursos.',
    },
    {
      date: '04/11/2026',
      title: 'A vitrine',
      text: 'As 38 imagens e vídeos da landing page, nas duas línguas, passam a sair de um roteiro de teste que dirige o app de verdade: conferido no iPhone 17 e gravado no emulador Android, com o dado roteirizado para o ataque acertar. Desde 28/10, uma skill publica cada entrega: push, APK de release e landing page.',
    },
  ],
  features: [
    {
      icon: 'wand-sparkles',
      title: 'Criação guiada',
      text: 'Um assistente de 19 etapas, da raça ao equipamento: mais de 50 raças, 13 classes, 4 métodos de atributos, rascunho salvo sozinho e a recriação do personagem com a aprovação do Mestre.',
    },
    {
      icon: 'swords',
      title: 'Combate com as regras na mão',
      text: 'Vida com barra animada, CA com cada fonte, 15 condições, concentração e testes contra a morte com d20 animado. O ataque pergunta se acertou antes do dano, e o crítico dobra os dados, não o modificador.',
    },
    {
      icon: 'notebook-pen',
      title: 'Diário da campanha',
      text: 'Sessões com início e fim, fotos da câmera e o registro automático do combate, do inventário, da loja e de toda rolagem. Ao encerrar, um resumo da vida, do ouro e dos itens que mudaram.',
    },
    {
      icon: 'library',
      title: 'Compêndios, loja e PDFs',
      text: 'Mais de 500 magias e 1.000 itens com filtros, uma loja com cesto e pechincha, missões com recompensa e os PDFs do próprio jogador para ler sem internet.',
    },
    {
      icon: 'dices',
      title: 'Rolagens do jeito da mesa',
      text: 'Com "Rolagens pelo app" desligado, o padrão, o ataque e o dano saem do dado físico da mesa, e o app só anota o resultado. Ligado, o app rola também o ataque, o dano e os efeitos de magia e de item.',
    },
    {
      icon: 'palette',
      title: 'A cara de quem joga',
      text: '11 cores de destaque e duas peles, fantasia e 8/16 bits, em português ou inglês, com trilha sonora que se cala com um toque.',
    },
  ],
  inside: {
    title: 'A conta mora longe da tela',
    text: [
      'A ficha é um `CharacterModel` guardado no **Hive**, no próprio aparelho. Toda mudança passa pelo `activeCharacterProvider`, do Riverpod, e é salva sozinha dois segundos depois da última.',
      'A tela não faz conta de D&D: as regras moram em `utils/` puros, sem Flutter, testados com um dado de semente fixa, o `Random(7)`. E a tradução é da exibição, não do dado: a ficha guarda as chaves em inglês, e o português só aparece na tela.',
      'Para nada se perder sem servidor, o formato da ficha tem versão e migrações (está na 6), o boot sobrevive a dados corrompidos e há backup antes de apagar.',
    ],
    diagram: 'efipla',
  },
  decisions: [
    {
      title: 'Tudo no aparelho',
      why: 'Sem servidor, sem conta e sem rede: o que o app não guardar, o jogador perde. Daí a versão do formato com migrações, o boot que preserva dados corrompidos e o backup antes de apagar.',
      tradeoff: 'Não há sincronização entre aparelhos.',
    },
    {
      title: 'A tradução é da exibição',
      why: 'Chaves e nomes canônicos ficam em inglês, como o catálogo de D&D é indexado, e a tela chama `tr()`. Um texto traduzido gravado na ficha congelaria no idioma da época.',
      tradeoff: 'Uma chave montada em tempo de execução escapa da varredura estática; os testes de tela anotam as traduções que faltam enquanto rodam.',
    },
    {
      title: 'Rolagens pelo app desligadas por padrão',
      why: 'Muita mesa rola dado físico e quer o app só como ficha. Ligar sozinho mudaria a forma de jogar de quem não pediu.',
    },
    {
      title: 'Regra de D&D é código puro',
      why: 'A conta vai para um `utils/` sem Flutter, testada sem montar tela. Todo teste novo diz que bug previne e tem um caso que falharia se a regra fosse revertida.',
    },
    {
      title: 'Pele e cor são eixos separados',
      why: 'Trocar de fantasia para 8/16 bits muda fonte, canto, borda e ícone, nunca a cor. As duas peles saem da mesma função de tema, porque montar a fantasia e remendá-la depois deixava componentes para trás.',
    },
    {
      title: 'Ícones de RPG numa fonte própria',
      why: 'O Material não tem elmo, manopla nem arco. Um conversor em Dart puro transforma SVGs do game-icons.net numa fonte com os mesmos nomes do `Icons`, e um teste reprova o ícone do Material fora da aba Equipar.',
      tradeoff: 'Os ícones são CC BY 3.0, e os autores são creditados no próprio app.',
    },
  ],
  demo: {
    kind: 'before-after',
    title: 'Antes e depois',
    text: 'Arraste para comparar a aba Combate antes do redesenho com a de hoje, na mesma personagem.',
    compare: {
      before: {
        src: combateAntes,
        alt: 'Aba Combate antiga da Ceris Toph: card de identidade, card de Pontos de Vida com 45 de 78, card de Experiência com "Level Up disponível!", cards de Caminhada e Dano da Arma e os botões flutuantes por cima.',
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
      caption: 'À esquerda, a aba antiga; à direita, a de hoje, com os cards Vitais e Recursos. Arraste a divisória ou use as setas do teclado.',
    },
  },
  visual: {
    intro:
      'O app é só escuro: a identidade é a mesa de taverna à luz de velas. A cor vem de uma semente que o Material 3 transforma num esquema inteiro, e o fundo é essa semente sobre um quase-preto. A forma vem da tipografia e dos cantos chanfrados, cortados em diagonal como placa de madeira serrada.',
    palette: [
      { name: 'Semente', hex: '#6750A4', role: 'O roxo padrão; o Material 3 gera o resto' },
      { name: 'Primária', hex: '#CFBDFE', role: 'Abas, ícones e destaques' },
      { name: 'Contêiner', hex: '#4D3D75', role: 'Botões e itens selecionados' },
      { name: 'Mesa', hex: '#1D192E', role: 'Fundo: a semente a 20 % sobre #0B0B10' },
      { name: 'Card', hex: '#383447', role: 'Cards e folhas, um degrau mais claros' },
      { name: 'Ouro da XP', hex: '#FFD700', role: 'Barra de experiência' },
      { name: 'Vida', hex: '#66BB6A', role: 'Vida cheia e cura' },
      { name: 'Dano', hex: '#E57373', role: 'Dano, como sinal e nunca como texto' },
    ],
    paletteNote:
      'As cinco primeiras mudam com o destaque escolhido; ouro, vida e dano são paleta semântica e não mudam. Todo texto passa 4,5:1 sobre o card e o fundo, nos 11 destaques, e três auditorias cobram isso: os pares do esquema, uma varredura de toda cor escrita no código e a medição da tela no simulador.',
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
        note: 'Não tem º, & nem →: a tela troca esses caracteres só na hora de exibir.',
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
      'Escolha um destaque e uma pele: a miniatura da aba Combate muda como o app muda. As cores são as que o app calcula para cada semente; a pele troca só fonte, canto, borda e sombra.',
    mark: 'O ícone junta um **d20** sobre um escudo, preso por uma faixa, no centro de um círculo mágico, com uma moldura de runas em volta e o nome em Rubik Distressed. O dado mostra o 20, o acerto crítico. É o mesmo roxo do app: a primária lavanda sobre a mesa escura.',
    markBackground: 'radial-gradient(120% 100% at 30% 15%, #4d3d75 0%, #2a2440 38%, #1d192e 68%, #151221 100%)',
    gallery: [
      {
        src: criacao,
        alt: 'Etapa Raça da criação: gênero Masculino marcado, busca por "Tiefling", botões Tabela e Comparar e o card do Tiefling, com a descrição e as 11 sub-raças, das linhagens de Asmodeus a Zariel, mais o Tiefling Feroz e o Voador; embaixo, o botão "Próximo: Classe".',
        caption: 'Criação: a etapa Raça, com busca, tabela e comparação',
        frame: 'phone',
      },
      {
        src: atributos,
        alt: 'Aba Atributos da Ceris Toph: os seis atributos em placas chanfradas, FOR +3, DES +1, CON +2, INT +0, SAB +0 e CAR +5, com os valores 16, 12, 14, 11, 10 e 20, e os testes de resistência, com proficiência em Força (+8) e Constituição (+7).',
        caption: 'Atributos: modificadores, valores e testes de resistência',
        frame: 'phone',
      },
      {
        src: combate,
        alt: 'Aba Combate da Kara Silvanis na Forma Selvagem: o card Vitais com "PV: Tigre" 34 de 44, CA 12, a linha "Kara ao voltar: 45 / 45", iniciativa, caminhada de 12 m, proficiência, percepção passiva, a experiência do nível 6 e o chip "Tigre · até 3 h"; abaixo, o card Recursos com a Forma Selvagem em uso, o botão Reverter e os espaços de magia.',
        caption: 'Combate na Forma Selvagem: a vida do tigre, a da druida por baixo e os recursos',
        frame: 'phone',
      },
      {
        src: conjuracao,
        alt: 'Folha da Conjuração sobre a ficha da Ceris Toph: o card da Fome de Hadar, magia de 3º círculo, com o botão Conjurar, o gasto de 1 espaço de pacto do 4º círculo, o dano gélido de 2d6 (média 7) no início do turno, o dano ácido com teste de Destreza CD 17 no fim do turno e os componentes verbal, somático e material, com a fala da magia e o tentáculo de polvo em conserva.',
        caption: 'Conjuração: custo, dano médio, teste e componentes de cada magia',
        frame: 'phone',
      },
      {
        src: loja,
        alt: 'Aba Itens, sub-aba Loja: o Histórico, a bolsa com 277 peças de ouro e 5 de prata e seis lojas com a contagem de itens: Ferreiro (189), Loja Geral (262), Loja Mágica (645), Taverna (25), Estábulos e Transporte (32) e Artigos de Luxo (45).',
        caption: 'Itens › Loja: seis lojas, cada uma com a sua contagem de itens',
        frame: 'phone',
      },
      {
        src: diario,
        alt: 'Diário da sessão "A Torre Partida", em andamento: uma anotação sobre a torre selada com runas e as linhas que o app registrou sozinho às 02:37 e 02:38, com a iniciativa, o ataque de Espada Longa que acertou, o dano, o dano recebido (52 para 48), os PV temporários e o teste de concentração da Imobilizar Pessoa; no pé, o botão vermelho de parar, o microfone do ditado e os de anexar imagem e fotografar.',
        caption: 'Diário: cada rolagem anotada sozinha, com a hora',
        frame: 'phone',
      },
      {
        src: icone,
        alt: 'Ícone do EFIPLA: um d20 com o número 20 sobre um escudo, uma faixa com runas, um círculo mágico ao fundo, o nome EFIPLA em letras gastas e uma moldura de runas, em roxo e lavanda.',
        caption: 'O ícone do app',
        frame: 'square',
      },
    ],
    galleryNote:
      'Telas de 04/11/2026, gravadas no emulador Android pelo roteiro de teste da vitrine, as mesmas da landing page. A aba Combate de antes do redesenho aparece só no comparador acima.',
  },
  tech: [
    { group: 'App', items: ['Flutter 3.47', 'Dart 3.13', 'Riverpod 2.6', 'Hive 2.2', 'Material 3'] },
    { group: 'Recursos', items: ['SyncFusion PDF Viewer', 'image_picker', 'image_cropper', 'audioplayers', 'share_plus', 'file_selector'] },
    { group: 'Qualidade', items: ['flutter_lints', 'Testes de unidade e de widget', 'integration_test no iPhone 17', 'GitHub Actions', 'FVM'] },
    { group: 'Design', items: ['Cinzel', 'Alegreya', 'Silkscreen', 'Rubik Distressed', 'game-icons.net', 'flutter_launcher_icons'] },
    { group: 'Landing page', items: ['Astro 7', 'Vercel', 'Português e inglês'] },
  ],
  skills: [
    { title: 'Regras como código', text: 'Transformar o Livro do Jogador em funções puras, com a página da regra no comentário e um teste que falha se a regra for revertida.' },
    { title: 'Dados que não se perdem', text: 'Versão do formato, migrações, boot que sobrevive a dados corrompidos e backup antes de apagar, num app sem servidor.' },
    { title: 'Internacionalização', text: 'Tradução na exibição, chaves em inglês e testes que quebram o build quando falta uma tradução ou quando duas brigam.' },
    { title: 'Cor acessível em qualquer tema', text: 'Contraste de 4,5:1 medido em 11 destaques e duas peles, por três auditorias que se completam.' },
    { title: 'Pesquisa e redesenho de UX', text: 'Estudar a tarefa na mesa, comparar concorrentes, propor três caminhos e implementar a especificação aprovada.' },
    { title: 'Direção de agentes de IA', text: 'Um CONTEXT.md como mapa, um CLAUDE.md com as regras de cada sessão, testes como guarda e uma skill que publica a entrega.' },
  ],
  results: {
    metrics: [
      { value: 3503, label: 'testes automatizados, rodados pela CI a cada push na main' },
      { value: 43, label: 'testes no simulador do iPhone 17, que gravam prints de cada tela' },
      { value: 420, label: 'itens mágicos corrigidos contra o Guia do Mestre, o Fizban e o Tasha' },
      { value: 10, prefix: '5 a ', suffix: ' min', label: 'para criar um personagem, pela conta do autor; com a ficha em PDF e o livro, eram de 1 a 2 horas' },
    ],
    highlights: [
      'Um mapa que se testa: o `test/context_doc_test.dart` falha se o CONTEXT.md citar um caminho que não existe mais.',
      'A especificação do novo Combate registra 14 decisões, e os comentários do código citam cada uma pelo número.',
      'Gratuito e sem anúncio: nada à venda, e nenhum dado sai do aparelho.',
    ],
  },
  lessons: [
    {
      title: 'O erro de conta é silencioso',
      text: 'Quando a CA ou o dano saem errados, ninguém percebe: o número só fica errado. Por isso cada regra é fixada por teste, com o motivo escrito em português no comentário.',
    },
    {
      title: 'O item que saía por um caminho e ficava no outro',
      text: 'O inventário guarda itens de duas formas, como texto e como item com estatísticas, e seis defeitos tinham a mesma causa: vender, perder ou desfazer por um caminho deixava o item vivo no outro. A regra virou uma só: quando o item sai da bolsa, tudo que apontava para ele cai junto.',
    },
    {
      title: 'A correção que criou um bug',
      text: 'Para escapar de colisões, os tradutores das criaturas passaram a ler os mapas direto e perderam a guarda do inglês: o app em inglês mostrou "Servo Invisível". Pior, o teste tratava isso como aceitável. Hoje um teste varre o catálogo inteiro nas duas línguas.',
    },
    {
      title: 'O tom 500 é para fundo claro',
      text: 'Em texto sobre o card escuro, as cores do Material no tom 500 davam de 1,2 a 4,4 de contraste. Os tons 200 a 300 da mesma família resolveram, e a auditoria passou a medir toda cor escrita no código.',
    },
  ],
  next: [
    'Corrigir os textos no idioma errado ou sem acento que a gravação da vitrine revelou, como a Bruxaria ainda chamada de "Hex".',
    'Migrar o Riverpod da versão 2.6 para a 3, que muda a API de base em 65 arquivos e ficou de fora de propósito.',
    'Numerar as versões: o app continua em `1.0.0+1`, e cada entrega é identificada pela data e pelos commits.',
  ],
  sources:
    'Documentação do projeto (README, CONTEXT, CHANGELOG, CLAUDE.md e os estudos do redesenho da aba Combate), o histórico do repositório e a landing page.',
};

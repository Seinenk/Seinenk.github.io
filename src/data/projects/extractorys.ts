import type { CaseStudy } from './types';
import telaClara from '../../assets/images/projetos/extractorys/tela-inicial-clara.webp';
import telaEscura from '../../assets/images/projetos/extractorys/tela-inicial-escura.webp';
import extraindo from '../../assets/images/projetos/extractorys/extracao-em-andamento.webp';
import concluida from '../../assets/images/projetos/extractorys/extracao-concluida.webp';
import instalacao from '../../assets/images/projetos/extractorys/instalacao-confirmacao.webp';
import icone from '../../assets/images/projetos/extractorys/icone.webp';

/** Fonte: README, CONTEXT, CHANGELOG e pesquisa de arquitetura do repositório do Extractorys (07/11/2026). */
export const extractorys: CaseStudy = {
  slug: 'extractorys',
  title: 'Extractorys',
  type: 'Desenvolvimento',
  period: '2026',
  status: 'Em andamento',
  summary:
    'App Flutter que extrai o APK de qualquer app instalado no Android e instala os pacotes .apks recebidos de outro aparelho, com progresso na tela e numa notificação nas cores da marca.',
  tagline:
    'Um extrator e instalador de APK para Android, do Flutter ao Kotlin, com design system próprio e testes de ponta a ponta.',
  tags: ['Flutter', 'Kotlin', 'Android', 'Design system'],
  featured: true,
  art: 'extractorys',
  facts: [
    { label: 'Papel', value: 'Produto, design e desenvolvimento' },
    { label: 'Período', value: '02 a 07/11/2026 · versão 1.1.1' },
    { label: 'Plataformas', value: 'Android 7 a 16 · iOS em modo demonstração' },
    { label: 'Stack', value: 'Flutter 3.47, Dart 3.13 e Kotlin 2.4' },
  ],
  context: [
    'Passar um app de um celular Android para outro parece simples até o app ter sido instalado pela Play Store **em partes**. Um app assim não é um APK só: é um `base.apk` mais vários APKs divididos, e o instalador padrão do Android só entende um arquivo `.apk`.',
    'O Extractorys resolve os dois lados da viagem: extrai qualquer app instalado para a pasta `Download/Extractorys` e, no outro aparelho, instala o pacote que chegou, com as partes certas.',
    'Também foi um exercício de construir um app inteiro com rigor de produto: pesquisa antes do código, arquitetura escolhida por critérios, design system próprio, testes automatizados e revisão adversarial a cada versão.',
  ],
  challenge: {
    problem:
      'A cópia precisava continuar com o app em segundo plano, mostrar o progresso nas cores da marca e funcionar do Android 7 ao 16, cada versão com regras próprias de armazenamento, notificações e serviços. E um app dividido extraído como `.apks` não abria no outro aparelho: o instalador do sistema não cria a sessão com vários APKs que esse formato exige.',
    goals: [
      'Listar todos os apps instalados, inclusive os do sistema, com ícone, versão, tamanho e partes',
      'Extrair `.apk` ou `.apks` compatível com o SAI e o App Manager',
      'Instalar `.apk`, `.apks`, `.xapk` e `.apkm` recebidos por "Abrir com"',
      'Mostrar o progresso na tela e numa notificação com a cor da marca',
      'Manter o código simples de manter à mão, sem frameworks',
    ],
  },
  story: [
    {
      date: '02/11/2026',
      title: 'Pesquisa antes do código',
      text: 'Um fluxo com 17 agentes de IA pesquisou, com fonte e versão conferidas no dia, a arquitetura Flutter recomendada, a extração de APK no Android, notificações com barra de progresso, tema, animações e testes. Um crítico apontou quatro lacunas que mudariam a implementação, e outros quatro pesquisadores as responderam.',
    },
    {
      date: '02/11/2026',
      title: 'Três arquiteturas, uma escolhida',
      text: 'Três propostas, com as lentes de simplicidade, robustez e performance, foram julgadas com pesos definidos antes: manutenção manual (40 %), funcionalidades (30 %), leveza (20 %) e robustez no Android real (10 %). Venceu **"MVVM-lite: duas camadas, uma costura, zero frameworks"**, com 8,4 pontos, e boas ideias das outras duas foram enxertadas.',
    },
    {
      date: '02/11/2026',
      title: 'Versão 1.0.0: extrair',
      text: 'Lista de apps, extração num serviço em primeiro plano, notificação colorizada, tema claro e escuro e modo demonstração no iOS. Seis revisores automáticos apontaram 43 achados; os 15 confirmados por um verificador cético foram corrigidos antes do lançamento.',
    },
    {
      date: '02/11/2026',
      title: 'Versão 1.1.0: instalar',
      text: 'O problema real apareceu no uso: o `.apks` não abria no outro aparelho. A resposta foi um instalador próprio, que copia cada APK direto para uma sessão do `PackageInstaller`, sem arquivo temporário.',
    },
    {
      date: '07/11/2026',
      title: 'Versão 1.1.1: robustez',
      text: 'Uma revisão confirmou 11 defeitos, a maioria no fluxo de instalação, e cinco rodadas sobre as próprias correções confirmaram mais 58. Tudo foi corrigido e testado no emulador: confirmação em segundo plano, "Abrir com" vindo do WhatsApp e do app Arquivos, Recentes e downgrade.',
    },
  ],
  features: [
    {
      icon: 'list',
      title: 'Lista completa',
      text: 'Todos os apps, com ícone, versão, tamanho e selos de partes, sistema e arquivado. Busca por nome ou pacote e filtro de apps do sistema.',
    },
    {
      icon: 'download',
      title: 'Extração em segundo plano',
      text: '`.apk` para apps simples e `.apks` compatível com o SAI e o App Manager para apps divididos, numa cópia que continua com o app fechado.',
    },
    {
      icon: 'package',
      title: 'Instalador de pacotes',
      text: 'Abre `.apk`, `.apks`, `.xapk` e `.apkm` pelo "Abrir com" ou pelo seletor de arquivos e instala com as partes certas.',
    },
    {
      icon: 'bell',
      title: 'Notificação na cor da marca',
      text: 'Barra de progresso colorizada, com Cancelar, Compartilhar e Abrir Downloads, e o aviso "Toque para confirmar" quando o Android pede confirmação com o app fora da tela.',
    },
    {
      icon: 'message-circle',
      title: 'Erros que explicam',
      text: 'Cada falha da instalação vira uma explicação em português: versão mais antiga, outra assinatura, outro processador, partes faltando.',
    },
    {
      icon: 'palette',
      title: 'Temas e movimento acessível',
      text: 'Claro, escuro ou o do sistema, com a logo acompanhando o tema. As animações param quando o aparelho ou o próprio app pede menos movimento.',
    },
  ],
  inside: {
    title: 'Duas camadas, uma costura',
    text: [
      'A interface só conhece uma interface, a `ApkService`. No Android, ela fala com o Kotlin por um `MethodChannel` com 16 métodos e dois `EventChannel`s; no iOS e nos testes, uma simulação ocupa o mesmo lugar.',
      'O trabalho pesado (copiar, instalar e notificar) fica em dois serviços em primeiro plano no Kotlin. O Dart nunca roda em segundo plano: só acompanha o estado, que chega por um `StateFlow`.',
    ],
    diagram: 'extractorys',
  },
  decisions: [
    {
      title: 'Zero frameworks de estado',
      why: 'Quatro telas não justificam provider, bloc ou get_it: `ChangeNotifier` e `ListenableBuilder` são o que a documentação oficial ensina.',
      tradeoff: 'Se surgir uma segunda fonte de dados, a camada de repositórios é o primeiro passo, já descrito na documentação.',
    },
    {
      title: 'O Kotlin é dono da notificação',
      why: 'A cópia roda num serviço em primeiro plano. Com a notificação no mesmo lugar, não há aviso duplicado, e tudo sobrevive ao segundo plano.',
    },
    {
      title: 'Notificação colorizada',
      why: 'A leitura do código do Android mostrou que, do 12 ao 16, `setColor` não tinge a barra de progresso. Só a notificação colorizada de um serviço em primeiro plano deixa o cartão inteiro na cor da marca.',
      tradeoff: 'No Android 16.1, a colorizada impede os Live Updates. A receita para adotá-los ficou documentada.',
    },
    {
      title: 'Um leitor de zip próprio',
      why: 'O `ZipFile` do Java só abre arquivos por caminho, e o caminho de um arquivo vindo de outro app não é legível. O `ZipPeek` lê o índice direto do descritor que o Android entrega, inclusive em ZIP64.',
    },
    {
      title: 'Uma assinatura por canal de eventos',
      why: 'O `EventChannel` do Flutter aceita um ouvinte por vez, e duas páginas de instalação empilhadas congelavam a de baixo. A classe `_SharedEvents` divide uma assinatura entre todas as telas.',
    },
    {
      title: '`application/octet-stream` para o `.apks`',
      why: 'Com o tipo de arquivo de APK, o Android renomeava o pacote para `.apks.apk`.',
    },
  ],
  visual: {
    intro:
      'O design system parte do mesmo estilo editorial deste site, com fundo creme, títulos em serifa e texto em sans humanista, mas troca o acento por uma rampa própria, do preto ao vermelho, que vira o degradê da marca.',
    palette: [
      { name: 'Preto', hex: '#000000', role: 'Ponta escura da rampa' },
      { name: 'Ameixa', hex: '#2A0048', role: 'Início do degradê no tema claro' },
      { name: 'Violeta', hex: '#560072', role: 'Secundária e início do degradê no escuro' },
      { name: 'Roxo', hex: '#800080', role: 'Primária: botões, seleção, notificação no claro' },
      { name: 'Magenta', hex: '#A90072', role: 'Terciária e notificação no escuro' },
      { name: 'Carmim', hex: '#D50048', role: 'Erros e fim do degradê' },
      { name: 'Vermelho', hex: '#FF0000', role: 'Brilho da logo e partículas' },
    ],
    paletteNote:
      'Neutros: fundo creme #FAF9F5 e tinta #141413 no tema claro; preto-ameixa #0B0710 e creme #F3F1EA no escuro, onde a primária clareia para #CF7FCF por contraste.',
    gradient: ['#2A0048', '#800080', '#D50048', '#FF0000'],
    typography: [
      {
        family: 'Cormorant Garamond',
        css: 'var(--font-display)',
        role: 'Títulos, peso 500, espaçamento negativo',
        sample: 'Extractorys',
        weight: 500,
      },
      {
        family: 'Inter',
        css: 'var(--font-sans)',
        role: 'Texto e rótulos (fonte variável)',
        sample: 'Seus apps, extraídos em APK.',
        variable: true,
      },
      {
        family: 'JetBrains Mono',
        css: 'var(--font-mono)',
        role: 'Pacotes, versões e tamanhos, com números tabulares',
        sample: 'com.bancoaurora.app · 90,0 MB',
      },
    ],
    tokens: [
      {
        title: 'Raios',
        items: [
          { name: 'Pequeno', value: '8' },
          { name: 'Médio', value: '12' },
          { name: 'Grande', value: '16' },
        ],
      },
      {
        title: 'Movimento',
        items: [
          { name: 'Micro', value: '200 ms' },
          { name: 'Conteúdo', value: '300 ms' },
          { name: 'Ênfase', value: '400 ms' },
          { name: 'Página', value: '450 ms' },
          { name: 'Celebração', value: '800 ms' },
        ],
      },
      {
        title: 'Princípios',
        items: [
          { name: 'Profundidade', value: 'cor em bloco primeiro, sombra raramente' },
          { name: 'Linhas', value: 'hairlines de 1 px' },
          { name: 'Toque', value: 'alvo mínimo de 48 dp' },
        ],
      },
    ],
    mark: 'A logo é um tile de app, só contorno e com o canto aberto, de onde um núcleo com o degradê da marca é puxado pela diagonal, com rastro e um brilho de quatro pontas. Na página de extração, o núcleo sai do tile conforme a cópia avança. Os ícones do launcher saem do mesmo código que desenha a logo.',
    gallery: [
      { src: telaClara, alt: 'Tela inicial do Extractorys no tema claro: título em serifa, busca, filtro de apps do sistema e a lista de apps com tamanho e selos de partes.', caption: 'Tela inicial no tema claro, em modo demonstração', frame: 'phone' },
      { src: telaEscura, alt: 'A mesma tela inicial no tema escuro, com fundo preto-ameixa e selos roxos.', caption: 'O mesmo catálogo no tema escuro', frame: 'phone' },
      { src: extraindo, alt: 'Página de extração com o anel de progresso em 42 %, a fase "Copiando parte 2 de 4" e o destino do arquivo.', caption: 'Extração em andamento: o núcleo da logo sai do tile com o progresso', frame: 'phone' },
      { src: concluida, alt: 'Extração concluída: anel completo com o selo de confirmação e os botões Compartilhar e Downloads.', caption: 'Concluída, com Compartilhar e Downloads', frame: 'phone' },
      { src: instalacao, alt: 'Página de instalação de um pacote .apks de 7 partes, com o diálogo de confirmação do Android por cima.', caption: 'Instalação real de um .apks com 7 partes no emulador', frame: 'phone' },
      { src: icone, alt: 'Ícone do Extractorys: tile creme sobre degradê roxo, com o núcleo vermelho saindo pelo canto e um brilho de quatro pontas.', caption: 'Ícone do launcher, gerado pelo código da logo', frame: 'square' },
    ],
  },
  tech: [
    { group: 'App', items: ['Flutter 3.47.9', 'Dart 3.13.7', 'flutter_animate', 'flutter_local_notifications', 'shared_preferences'] },
    { group: 'Android nativo', items: ['Kotlin 2.4', 'Coroutines e StateFlow', 'Foreground service dataSync', 'MediaStore', 'PackageInstaller'] },
    { group: 'Qualidade', items: ['flutter_lints (estrito)', 'Testes de widget', 'integration_test', 'JUnit 4', 'uiautomator', 'FVM'] },
    { group: 'Design', items: ['Cormorant Garamond', 'Inter', 'JetBrains Mono', 'flutter_launcher_icons'] },
  ],
  skills: [
    { title: 'Arquitetura na medida', text: 'Escolher o mínimo que resolve: duas camadas, uma interface entre a tela e o mundo e estado com o que o Flutter já tem.' },
    { title: 'Ponte Dart e Kotlin', text: 'Um contrato de canais com 16 métodos e dois fluxos de eventos, com erros por código e mensagens em português.' },
    { title: 'Android por dentro', text: 'Serviços em primeiro plano, MediaStore, PackageInstaller, permissões e as diferenças do Android 7 ao 16.' },
    { title: 'Formatos de arquivo', text: 'Zip sem compressão, metadados do SAI, ZIP64 e a leitura do índice direto do descritor do arquivo.' },
    { title: 'Testes de ponta a ponta', text: 'Scripts que instalam, cancelam, mandam o app para o segundo plano e tocam no diálogo do sistema com o uiautomator.' },
    { title: 'Trabalho com agentes de IA', text: 'Pesquisa com fontes, propostas concorrentes, julgamento com pesos e revisão adversarial com verificação cética de cada achado.' },
  ],
  results: {
    metrics: [
      { value: 63, label: 'testes Dart de unidade e de widget' },
      { value: 34, label: 'testes JVM do lado Kotlin' },
      { value: 28, label: 'verificações do "Abrir com" no emulador' },
      { value: 3, label: 'versões em 6 dias' },
    ],
    highlights: [
      'Extração real de um app dividido: a Google Play Store, com 7 APKs e 74 MB, virou um `.apks` válido, conferido no computador.',
      'O mesmo pacote instalado pelo próprio Extractorys, com as 7 partes, no emulador com Android 16.',
      'Versão 1.1.1 com `versionCode` 4003, conferido no APK de release de 20 MB.',
    ],
  },
  lessons: [
    {
      title: 'O Android bloqueia telas vindas do segundo plano',
      text: 'Sem aviso, o diálogo "Instalar?" não abria se a pessoa saísse do app durante a cópia. A saída foi a notificação "Toque para confirmar" e reabrir o diálogo na volta.',
    },
    {
      title: 'Cancelar não cancelava',
      text: 'Na 1.1.0, uma propriedade da classe escondia o contexto da corrotina, e a cópia seguia. Uma função de cópia que confere o cancelamento a cada bloco resolveu, e ganhou teste.',
    },
    {
      title: 'Arquivos que não são seus',
      text: 'Vindo do WhatsApp, o pacote aparecia sem nome nem partes: o índice do zip não abria por caminho. Ler pelo descritor resolveu.',
    },
    {
      title: 'Números de versão importam',
      text: 'APKs divididos por processador ganhavam números diferentes, e um APK universal posterior era recusado como versão mais antiga. O build pulou para 4003.',
    },
  ],
  next: [
    'Live Updates do Android 16, com o progresso promovido na tela de bloqueio',
    'Histórico de extrações',
    'Tradução, começando por um arquivo único de textos',
    'Camada de repositórios quando surgir uma segunda fonte de dados',
  ],
  sources: 'Documentação do projeto (README, CONTEXT, CHANGELOG e diário da pesquisa de arquitetura).',
};

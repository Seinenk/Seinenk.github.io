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
    'Um app Android que extrai o APK (o arquivo de instalação) de qualquer app instalado e instala os pacotes .apks recebidos de outro aparelho. O progresso aparece na tela e numa notificação nas cores da marca.',
  tagline:
    'Um app que extrai e instala APKs, os arquivos de instalação do Android, até de apps divididos em partes.',
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
    'Passar um app de um celular Android para outro parece simples até o app ter sido instalado pela Play Store **em partes**. Ele vem como um `base.apk` e vários APKs divididos, mas o instalador padrão do Android só entende um arquivo `.apk`.',
    'No celular de origem, o Extractorys extrai qualquer app instalado para a pasta `Download/Extractorys`. No outro aparelho, instala o pacote recebido com as partes certas.',
    'Também quis fazer um app inteiro com rigor de produto. Comecei pela pesquisa, escolhi a arquitetura por critérios e criei um design system (as regras visuais do app). Há testes automatizados, e cada versão passou por uma revisão adversarial, que caça falhas.',
  ],
  challenge: {
    problem:
      'A cópia precisava continuar com o app em segundo plano, mostrar o progresso nas cores da marca e funcionar do Android 7 ao 16. Cada versão tem regras próprias de armazenamento, notificações e serviços. E um app dividido, extraído como `.apks`, não abria no outro aparelho. O instalador do sistema não cria a sessão com vários APKs que esse formato exige.',
    goals: [
      'Listar todos os apps instalados, inclusive os do sistema, com ícone, versão, tamanho e partes',
      'Extrair `.apk` ou `.apks` compatível com o SAI e o App Manager',
      'Instalar `.apk`, `.apks`, `.xapk` e `.apkm` recebidos por "Abrir com"',
      'Mostrar o progresso na tela e numa notificação com a cor da marca',
      'Deixar o código fácil de manter à mão, sem frameworks (pacotes que ditam a estrutura)',
    ],
  },
  story: [
    {
      date: '02/11/2026',
      title: 'Pesquisa antes do código',
      text: 'Usei um fluxo com 17 agentes de inteligência artificial (IA) para pesquisar, com fonte e versão conferidas no dia. Os temas foram a arquitetura Flutter recomendada, a extração de APK no Android, notificações com barra de progresso, tema, animações e testes. Um crítico apontou quatro lacunas que mudariam a implementação, e outros quatro pesquisadores as responderam.',
    },
    {
      date: '02/11/2026',
      title: 'Três propostas de arquitetura',
      text: 'Cada proposta tinha um foco: simplicidade, robustez ou desempenho. As notas usaram pesos definidos antes: manutenção manual (40 %), funcionalidades (30 %), leveza (20 %) e robustez no Android real (10 %). Venceu **"MVVM-lite: duas camadas, uma costura, zero frameworks"**, com 8,4 pontos, e ganhou boas ideias das outras duas.',
    },
    {
      date: '02/11/2026',
      title: 'Versão 1.0.0 extrai apps',
      text: 'Ela trouxe a lista de apps, a extração num serviço em primeiro plano, a notificação colorizada, os temas claro e escuro e o modo demonstração no iOS. Seis revisores automáticos apontaram 43 achados. Antes do lançamento, corrigi os 15 que um verificador cético confirmou.',
    },
    {
      date: '02/11/2026',
      title: 'Versão 1.1.0 instala pacotes',
      text: 'O problema real apareceu no uso. O `.apks` não abria no outro aparelho. Criei um instalador próprio, que copia cada APK direto para uma sessão do `PackageInstaller` (o instalador do Android), sem arquivo temporário.',
    },
    {
      date: '07/11/2026',
      title: 'Versão 1.1.1 corrige defeitos',
      text: 'Uma revisão confirmou 11 defeitos, a maioria na instalação, e cinco rodadas sobre as próprias correções confirmaram mais 58. Corrigi tudo e testei no emulador a confirmação em segundo plano, o "Abrir com" vindo do WhatsApp e do app Arquivos, os Recentes e o downgrade (versão mais antiga).',
    },
  ],
  features: [
    {
      icon: 'list',
      title: 'Lista completa',
      text: 'Mostra todos os apps, com ícone, versão, tamanho e selos de partes, sistema e arquivado. Dá para buscar por nome ou pacote e filtrar os apps do sistema.',
    },
    {
      icon: 'download',
      title: 'Extração em segundo plano',
      text: 'Gera `.apk` para apps simples e, para os divididos, um `.apks` que o SAI e o App Manager também instalam. A cópia continua com o app fechado.',
    },
    {
      icon: 'package',
      title: 'Instalador de pacotes',
      text: 'Abre `.apk`, `.apks`, `.xapk` e `.apkm` pelo "Abrir com" ou pelo seletor de arquivos e instala com as partes certas.',
    },
    {
      icon: 'bell',
      title: 'Notificação na cor da marca',
      text: 'A barra de progresso é colorizada, e a notificação traz Cancelar, Compartilhar e Abrir Downloads. Se o Android pedir confirmação com o app fora da tela, aparece o aviso "Toque para confirmar".',
    },
    {
      icon: 'message-circle',
      title: 'Erros com explicação',
      text: 'Cada falha da instalação vira uma explicação em português, como versão mais antiga, outra assinatura, outro processador ou partes faltando.',
    },
    {
      icon: 'palette',
      title: 'Temas e movimento acessível',
      text: 'O tema pode ser claro, escuro ou o do sistema, e a logo acompanha. As animações param quando o aparelho ou o próprio app pede menos movimento.',
    },
  ],
  inside: {
    title: 'Como as telas falam com o Android',
    text: [
      'As telas, escritas em Dart com o Flutter (tecnologia do Google para apps), só conhecem a `ApkService`. No Android, ela fala com o código em Kotlin por um `MethodChannel` com 16 métodos e dois `EventChannel`s. No iOS e nos testes, uma simulação ocupa o mesmo lugar.',
      'O trabalho pesado (copiar, instalar e notificar) fica em dois serviços em primeiro plano no Kotlin, que o Android mantém ativos com uma notificação. O Dart nunca roda em segundo plano e só acompanha o andamento, que chega por um `StateFlow`.',
    ],
    diagram: 'extractorys',
  },
  decisions: [
    {
      title: 'Sem frameworks para os dados das telas',
      why: 'Quatro telas não justificam provider, bloc ou get_it. Bastam o `ChangeNotifier` e o `ListenableBuilder`, que a documentação oficial ensina.',
      tradeoff: 'Se surgir uma segunda fonte de dados, a camada de repositórios (que organiza os dados) é o primeiro passo, já descrito na documentação.',
    },
    {
      title: 'A notificação fica no Kotlin',
      why: 'A cópia roda num serviço em primeiro plano. Com a notificação no mesmo lugar, não há aviso duplicado, e tudo segue funcionando em segundo plano.',
    },
    {
      title: 'Notificação colorizada',
      why: 'O código do Android mostra que, do 12 ao 16, o `setColor` não pinta a barra de progresso. Só a notificação colorizada de um serviço em primeiro plano deixa o cartão inteiro na cor da marca.',
      tradeoff: 'No Android 16.1, a colorizada impede os Live Updates (o progresso em destaque na tela de bloqueio). Ficou documentado como adotá-los.',
    },
    {
      title: 'Um leitor de zip próprio',
      why: 'O `ZipFile` do Java só abre arquivos pelo caminho, e um arquivo vindo de outro app não tem caminho legível. O `ZipPeek` lê o índice direto do descritor (a referência que o Android entrega), inclusive em ZIP64 (zip para arquivos grandes).',
    },
    {
      title: 'Um canal de eventos para várias telas',
      why: 'O `EventChannel` do Flutter aceita um ouvinte por vez, e duas páginas de instalação empilhadas congelavam a de baixo. A classe `_SharedEvents` divide uma única escuta entre todas as telas.',
    },
    {
      title: '`application/octet-stream` para o `.apks`',
      why: 'Com o tipo de arquivo de APK, o Android renomeava o pacote para `.apks.apk`.',
    },
  ],
  visual: {
    intro:
      'O design system segue o estilo editorial deste site, com fundo creme, títulos com serifa e texto sem serifa humanista. A cor de destaque, porém, é uma escala própria, que começa no preto, termina no vermelho e forma o degradê da marca.',
    palette: [
      { name: 'Preto', hex: '#000000', role: 'Ponta escura da escala' },
      { name: 'Ameixa', hex: '#2A0048', role: 'Início do degradê no tema claro' },
      { name: 'Violeta', hex: '#560072', role: 'Secundária e início do degradê no escuro' },
      { name: 'Roxo', hex: '#800080', role: 'Primária: botões, seleção, notificação no claro' },
      { name: 'Magenta', hex: '#A90072', role: 'Terciária e notificação no escuro' },
      { name: 'Carmim', hex: '#D50048', role: 'Erros e fim do degradê' },
      { name: 'Vermelho', hex: '#FF0000', role: 'Brilho da logo e partículas' },
    ],
    paletteNote:
      'No tema claro, os neutros são o fundo creme #FAF9F5 e o texto #141413. No escuro, são o preto-ameixa #0B0710 e o creme #F3F1EA, e a primária clareia para #CF7FCF por contraste.',
    gradient: ['#2A0048', '#800080', '#D50048', '#FF0000'],
    typography: [
      {
        family: 'Cormorant Garamond',
        css: 'var(--font-display)',
        role: 'Títulos, peso 500, letras mais juntas',
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
        role: 'Pacotes, versões e tamanhos, com números de largura igual',
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
        title: 'Duração das animações',
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
    mark: 'A logo é o contorno de um ícone de app, com um canto aberto. Por esse canto, um núcleo com o degradê da marca é puxado na diagonal, com rastro e um brilho de quatro pontas. Na página de extração, o núcleo sai do contorno conforme a cópia avança. Os ícones do launcher (a tela inicial do Android) saem do mesmo código da logo.',
    gallery: [
      { src: telaClara, alt: 'Tela inicial do Extractorys no tema claro, com título em serifa, busca, filtro de apps do sistema e a lista de apps com tamanho e selos de partes.', caption: 'Tela inicial no tema claro, em modo demonstração', frame: 'phone' },
      { src: telaEscura, alt: 'A mesma tela inicial no tema escuro, com fundo preto-ameixa e selos roxos.', caption: 'O mesmo catálogo no tema escuro', frame: 'phone' },
      { src: extraindo, alt: 'Página de extração com o anel de progresso em 42 %, a fase "Copiando parte 2 de 4" e o destino do arquivo.', caption: 'Durante a extração, o núcleo da logo sai do contorno conforme o progresso', frame: 'phone' },
      { src: concluida, alt: 'Extração concluída, com o anel completo, o selo de confirmação e os botões Compartilhar e Downloads.', caption: 'Extração concluída, com Compartilhar e Downloads', frame: 'phone' },
      { src: instalacao, alt: 'Página de instalação de um pacote .apks de 7 partes, com o diálogo de confirmação do Android por cima.', caption: 'Instalação real de um .apks com 7 partes no emulador', frame: 'phone' },
      { src: icone, alt: 'Ícone do Extractorys, com o contorno creme sobre degradê roxo, o núcleo vermelho saindo pelo canto e um brilho de quatro pontas.', caption: 'Ícone do launcher, gerado pelo código da logo', frame: 'square' },
    ],
  },
  tech: [
    { group: 'App', items: ['Flutter 3.47.9', 'Dart 3.13.7', 'flutter_animate', 'flutter_local_notifications', 'shared_preferences'] },
    { group: 'Android nativo', items: ['Kotlin 2.4', 'Coroutines e StateFlow', 'Foreground service dataSync', 'MediaStore', 'PackageInstaller'] },
    { group: 'Qualidade', items: ['flutter_lints (estrito)', 'Testes de widget', 'integration_test', 'JUnit 4', 'uiautomator', 'FVM'] },
    { group: 'Design', items: ['Cormorant Garamond', 'Inter', 'JetBrains Mono', 'flutter_launcher_icons'] },
  ],
  skills: [
    { title: 'Arquitetura na medida', text: 'Aprendi a escolher o mínimo que resolve: duas camadas, uma só peça entre as telas e o Android, e nada além do Flutter para os dados das telas.' },
    { title: 'Ponte entre Dart e Kotlin', text: 'Defini como os dois lados conversam: 16 métodos, dois fluxos de eventos e erros com código e mensagem em português.' },
    { title: 'Android por dentro', text: 'Usei serviços em primeiro plano, MediaStore, PackageInstaller e permissões, e lidei com as diferenças do Android 7 ao 16.' },
    { title: 'Formatos de arquivo', text: 'Estudei zip sem compressão, metadados do SAI, ZIP64 e a leitura do índice direto do descritor do arquivo.' },
    { title: 'Testes de ponta a ponta', text: 'Os scripts instalam, cancelam, mandam o app para o segundo plano e tocam no diálogo do sistema com o uiautomator, como uma pessoa faria.' },
    { title: 'Trabalho com agentes de IA', text: 'Usei agentes para pesquisar com fontes, julgar propostas concorrentes com pesos e fazer revisão adversarial, com verificação cética de cada achado.' },
  ],
  results: {
    metrics: [
      { value: 63, label: 'testes Dart de unidade e de widget' },
      { value: 34, label: 'testes JVM do lado Kotlin' },
      { value: 28, label: 'verificações do "Abrir com" no emulador' },
      { value: 3, label: 'versões em 6 dias' },
    ],
    highlights: [
      'Extraí um app dividido de verdade, a Google Play Store, com 7 APKs e 74 MB. O resultado foi um `.apks` válido, conferido no computador.',
      'O próprio Extractorys instalou esse pacote, com as 7 partes, num emulador (um celular simulado no computador) com Android 16.',
      'A versão 1.1.1 tem o `versionCode` (número interno de versão) 4003, conferido no APK de release, o arquivo final de 20 MB.',
    ],
  },
  lessons: [
    {
      title: 'O Android bloqueia telas vindas do segundo plano',
      text: 'Sem aviso, o diálogo "Instalar?" não abria se a pessoa saísse do app durante a cópia. A saída foi a notificação "Toque para confirmar" e reabrir o diálogo na volta.',
    },
    {
      title: 'Cancelar não parava a cópia',
      text: 'Na 1.1.0, uma propriedade da classe escondia o contexto da corrotina (a tarefa do Kotlin que copiava), e a cópia seguia. Uma função de cópia que confere o cancelamento a cada bloco resolveu, e ganhou teste.',
    },
    {
      title: 'Arquivos vindos de outros apps',
      text: 'Quando vinha do WhatsApp, o pacote aparecia sem nome nem partes, porque o índice do zip não abria pelo caminho. Ler pelo descritor resolveu.',
    },
    {
      title: 'APK novo recusado como versão antiga',
      text: 'APKs divididos por processador ganhavam números de versão diferentes, e um APK universal posterior era recusado como versão mais antiga. O `versionCode` pulou para 4003.',
    },
  ],
  next: [
    'Live Updates do Android 16',
    'Histórico de extrações',
    'Tradução, começando por um arquivo único de textos',
    'Camada de repositórios quando surgir uma segunda fonte de dados',
  ],
  sources: 'Documentação do projeto (README, CONTEXT, CHANGELOG e diário da pesquisa de arquitetura).',
};

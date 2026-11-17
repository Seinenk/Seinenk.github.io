import type { CaseStudy } from './types';
import guia from '../../assets/images/projetos/vanmed/guia.webp';
import cadastro from '../../assets/images/projetos/vanmed/cadastro.webp';
import cadastroQuando from '../../assets/images/projetos/vanmed/cadastro-quando.webp';
import cadastroResumo from '../../assets/images/projetos/vanmed/cadastro-resumo.webp';
import remedios from '../../assets/images/projetos/vanmed/remedios.webp';
import alarme from '../../assets/images/projetos/vanmed/alarme.webp';
import reforco from '../../assets/images/projetos/vanmed/reforco.webp';
import horaDoRemedio from '../../assets/images/projetos/vanmed/hora-do-remedio.webp';
import sequenciaComemora from '../../assets/images/projetos/vanmed/sequencia-comemora.webp';
import sequencia from '../../assets/images/projetos/vanmed/sequencia.webp';
import historico from '../../assets/images/projetos/vanmed/historico.webp';
import aguaRotina from '../../assets/images/projetos/vanmed/agua-rotina.webp';
import agua from '../../assets/images/projetos/vanmed/agua.webp';
import perfis from '../../assets/images/projetos/vanmed/perfis.webp';
import perfilNovo from '../../assets/images/projetos/vanmed/perfil-novo.webp';
import ajustes from '../../assets/images/projetos/vanmed/ajustes.webp';
import remediosEscuro from '../../assets/images/projetos/vanmed/remedios-escuro.webp';
import aguaEscuro from '../../assets/images/projetos/vanmed/agua-escuro.webp';

/**
 * Fontes: README, Context.md e ChanceLog.md do repositório do Vanmed, as pesquisas e a
 * análise em docs/, os cabeçalhos dos arquivos, o histórico do repositório (até o commit
 * 6d6987a, de 15/11/2026) e o app rodando no simulador do iPhone 17 Pro em 16 e 17/11/2026.
 * O nome se escreve "Vanmed", como no app.
 */
export const vanmed: CaseStudy = {
  slug: 'vanmed',
  title: 'Vanmed',
  type: 'Desenvolvimento',
  period: '2026',
  status: 'Em andamento',
  summary:
    'Com a ajuda de um agente de IA, fiz evoluir um app de lembretes de remédio em Flutter, para Android e iPhone. Na hora da dose, o celular toca como um despertador, e o app também lembra a pessoa de beber água.',
  tagline: 'Um app de lembretes de remédio que toca como despertador e organiza o cadastro na ordem da receita.',
  tags: ['Flutter', 'Saúde', 'Alarmes', 'Acessibilidade'],
  art: 'vanmed',
  facts: [
    { label: 'Papel', value: 'Produto, direção de design e testes no celular' },
    //   é um espaço que não quebra: o número fica com a palavra, e o ponto fica com o ano
    { label: 'Período', value: 'Julho a novembro de 2026 · 23 versões salvas (commits)' },
    { label: 'Plataforma', value: 'Android e iPhone, com o mesmo código em Flutter' },
    { label: 'Origem', value: 'O LembreMedi, app Android de Rafhael' },
  ],
  context: [
    'O Vanmed é um app de lembretes de remédio. A pessoa cadastra o remédio, a dose, de quanto em quanto tempo tomar e por quanto tempo, e o celular avisa na hora certa. O app guarda as doses tomadas e mostra quanto falta para o tratamento acabar.',
    'Ele nasceu como **LembreMedi** (de "lembrete de medicamento"), um app Android criado por Rafhael em 2025. Rafhael o escreveu em Kotlin, uma linguagem de programação para apps Android. Em julho de 2026, juntei esse app e uma versão em Flutter num só repositório, a pasta que guarda o código e o histórico de cada mudança. O Flutter é a tecnologia do Google que gera o app para Android e iPhone com o mesmo código. A versão em Flutter cadastrava remédios e contava as doses, mas ainda não tocava nenhum alarme.',
    'Entre 31/10 e 15/11/2026, fiz o app crescer em 25 rodadas de trabalho com o **Claude Code**, um agente de inteligência artificial (IA). Eu decidia o que o app precisava, pedia as pesquisas, mandava as referências visuais e testava no meu celular. O agente pesquisava e escrevia o código, os testes e a documentação.',
  ],
  challenge: {
    problem:
      'Quem toma remédio todo dia esquece doses, fica em dúvida sobre o horário e perde a conta de quantas já tomou. Um lembrete comum não resolve: no modo silencioso, a notificação passa despercebida. E, no cadastro antigo, quem toma remédio para sempre, como os de pressão, precisava inventar um número de dias. O app também tinha de ser fácil de usar para pessoas mais velhas.',
    goals: [
      'Tocar na hora da dose como um despertador, também no modo silencioso e com o celular bloqueado',
      'Cadastrar o remédio com as perguntas da receita, inclusive o uso contínuo',
      'Mostrar a pontualidade das doses e deixar claro o que saiu do horário',
      'Lembrar a pessoa de beber água e motivá-la com uma sequência de dias que não premia remédio fora de hora',
      'Ser fácil de ler e de usar, com contraste conferido e animações que podem ser desligadas',
    ],
  },
  story: [
    {
      date: 'Fevereiro de 2025',
      title: 'Rafhael cria o LembreMedi',
      text: 'O app nasceu em Kotlin, para Android, com cadastro de lembretes e alarme em tela cheia. Em janeiro de 2026, ganhou uma fila que faz os alarmes tocarem um de cada vez e passou a refazer a agenda de alarmes quando o celular reinicia.',
    },
    {
      date: '01/07/2026',
      title: 'O repositório junta as duas versões',
      text: 'Comecei o repositório do Vanmed. O primeiro commit trouxe as duas versões lado a lado: o app Android original e a versão em Flutter, criada em dezembro de 2025.',
    },
    {
      date: '31/10/2026',
      title: 'Uma análise de ponta a ponta',
      text: 'A primeira rodada com o agente revisou as duas versões e achou 13 defeitos no app Android original e 5 na versão em Flutter, todos corrigidos. Os testes automáticos passaram de 2 para 66, e veio a documentação completa do projeto.',
    },
    {
      date: '01 e 02/11/2026',
      title: 'Marca nova e os primeiros lembretes',
      text: 'Em dois dias chegaram a identidade visual, o logo de três comprimidos e o cadastro refeito a partir de pesquisa. O app Android original passou a tocar o alarme de verdade. A versão em Flutter, que não avisava nada, ganhou os primeiros lembretes: cada dose virou uma notificação com som de alarme. No iPhone com iOS 26 ou mais novo, a dose também vira um alarme do próprio sistema.',
    },
    {
      date: '06 a 13/11/2026',
      title: 'Um alarme que insiste',
      text: 'Sem registro, a dose passou a avisar de novo a cada 5 minutos, por até 30 minutos. Também chegou o histórico de doses, que marca as tomadas fora do horário. Em 07/11, a versão em Flutter ganhou no Android um alarme de verdade, como o do app original. Ele toca também no modo silencioso. Depois chegaram a escolha do som e do volume do alarme e o despertador que só para quando a pessoa acerta uma conta de matemática.',
    },
    {
      date: '14 e 15/11/2026',
      title: 'Água, perfis e sequência',
      text: 'Vieram o aviso de estoque em tela cheia, o guia de uso, a aba Água com o copo animado, os perfis de rotina e a sequência de dias completos. Os perfis ainda passaram por uma análise de usabilidade.',
    },
  ],
  features: [
    {
      icon: 'alarm-clock',
      title: 'Alarme que toca de verdade',
      text: 'Na hora da dose, o celular toca como um despertador, também no modo silencioso (no iPhone, do iOS 26 em diante). Enquanto a dose não é registrada, chega um reforço: um novo aviso a cada 5 minutos, por até 30 minutos.',
    },
    {
      icon: 'list-checks',
      title: 'Cadastro como a receita',
      text: 'O cadastro pergunta na ordem da receita: qual remédio, quanto, quando e por quanto tempo. Há 13 formas de remédio, como comprimido, gotas e pomada. A dose aceita meio comprimido, e o remédio pode ser de uso contínuo. No fim, um resumo diz tudo por extenso.',
    },
    {
      icon: 'clock',
      title: 'Histórico e pontualidade',
      text: 'Cada dose tomada fica no histórico, com o horário marcado e a hora em que a pessoa tomou. Uma diferença de até 30 minutos, antes ou depois, conta como no horário. Acima disso, a dose aparece em laranja.',
    },
    {
      icon: 'package',
      title: 'Estoque',
      text: 'Cada dose tomada desconta do estoque, e o app avisa antes de o remédio acabar.',
    },
    {
      icon: 'droplet',
      title: 'Lembrete de água',
      text: 'A pessoa escolhe quanto beber por dia, e o app divide a meta em lembretes. O copo da tela enche conforme ela registra o que bebeu.',
    },
    {
      icon: 'sun',
      title: 'Despertador com conta',
      text: 'Na aba Despertar, a pessoa cria alarmes para acordar. Eles só param quando ela toca em "Desligar o alarme" e acerta uma conta de matemática. Por enquanto, o despertador só toca no Android.',
    },
    {
      icon: 'calendar',
      title: 'Perfis de rotina',
      text: 'Cada perfil tem a sua água e os seus despertadores, para dias de trabalho, fim de semana ou férias. Os remédios são os mesmos todo dia.',
    },
    {
      icon: 'flame',
      title: 'Sequência de dias',
      text: 'Cada dia completo soma um, como a ofensiva do Duolingo. Valem as doses no horário, a meta de água e a conta do despertador. Uma função que a pessoa não usa fica de fora. Dose fora de hora não conta, para não incentivar erro.',
    },
    {
      icon: 'wifi-off',
      title: 'Tudo no aparelho',
      text: 'Não tem login, não usa servidor e funciona sem internet. O app não manda nenhum dado para fora do celular.',
    },
  ],
  inside: {
    title: 'Como um lembrete vira alarme',
    text: [
      'Quando a pessoa salva um remédio, o app calcula os horários das próximas doses e entrega essa agenda ao próprio celular. É o sistema que dispara o alarme na hora, mesmo com o app fechado. A agenda é refeita a cada mudança: salvar, tomar, editar ou excluir.',
      'No Android, cada dose vira um alarme do mesmo tipo usado pelo app Relógio. Na hora, uma parte do app que funciona em segundo plano (um serviço) toca o som no volume de alarme e vibra. Com o celular bloqueado, o app abre sozinho em tela cheia, no painel "Hora do remédio". Com o celular em uso, o alarme aparece no alto da tela, com os botões Tomei agora e Agora não. No iPhone com iOS 26 ou mais novo, se a pessoa permitir, a dose vira um alarme do sistema (AlarmKit), que toca até no silencioso. Com um iOS mais antigo, ou sem essa permissão, ela chega como notificação com som.',
      'Os dados ficam no aparelho, guardados como texto num arquivo do próprio app. Se a lista de remédios ou o histórico ficar ilegível, o app não trava. Ele guarda uma cópia do texto antigo e abre sem a parte que não conseguiu ler.',
    ],
    diagram: 'vanmed',
  },
  decisions: [
    {
      title: 'Perguntas na ordem da receita',
      why: 'O cadastro antigo pedia números soltos e deixava a conta para a pessoa. A pesquisa mostrou que navegação confusa e pouca flexibilidade de dose estão entre as queixas mais comuns sobre apps de lembrete de remédio. Agora o formulário segue a ordem da receita, com opções para tocar em vez de números para digitar.',
      tradeoff: 'No app Android original, entraram o uso contínuo, as opções de frequência, as unidades de cada forma e o resumo. O resto, como o meio comprimido e o estoque, exigia mudar o banco de dados e testar num aparelho.',
    },
    {
      title: 'Uso contínuo, sem data para acabar',
      why: 'Remédios de pressão, diabetes e tireoide não têm data para acabar. Por isso o cadastro ganhou a opção "Uso contínuo", o termo que as receitas brasileiras usam.',
    },
    {
      title: 'Alarme do sistema no iPhone',
      why: 'Uma notificação comum pode passar despercebida. Do iOS 26 em diante, se a pessoa permitir, cada dose também vira um alarme do próprio iPhone, como os do app Relógio, e toca até no modo silencioso.',
      tradeoff: 'Nos iPhones com sistema mais antigo, o aviso é uma notificação com som, que no silencioso só vibra uma vez. Os reforços são notificações em qualquer iPhone. E o despertador com conta ainda só toca no Android.',
    },
    {
      title: 'Paleta neon com a estrutura do site da Apple',
      why: 'Escolhi uma paleta neon para dar energia ao app. Para pôr ordem, segui uma análise do visual do site da Apple, que mandei como referência. O tema claro e o escuro têm, cada um, uma cor principal para os botões. Nada tem sombra, e botões e etiquetas têm as pontas redondas.',
      tradeoff: 'Nem toda cor neon serve para texto. O laranja, por exemplo, fica ilegível com letra branca, e foi preciso criar tons próprios para leitura.',
    },
    {
      title: 'Uma sequência que perdoa um deslize',
      why: 'Zerar a sequência no primeiro deslize faz a pessoa desistir. Por isso, a cada 7 dias completos seguidos, a pessoa ganha uma proteção, que segura a sequência num dia que não fechar. Dá para guardar até 2. Um dia sem nada para fazer não soma nem quebra a sequência.',
      tradeoff: 'Dose fora do horário não conta, e não há como consertar o dia depois. Assim o app nunca incentiva remédio fora de hora ou em dobro.',
    },
  ],
  visual: {
    intro:
      'A identidade junta a paleta neon das referências que enviei (fúcsia, índigo elétrico, lima, laranja e grafite) com a estrutura visual do site da Apple. Há tema claro e escuro. Cada par de texto e fundo passa por testes de contraste, e as cores das etiquetas também são testadas com daltonismo simulado.',
    palette: [
      { name: 'Electric Indigo', hex: '#5D00FF', role: 'Botões do tema claro, blocos de destaque e, no escuro, a etiqueta da próxima dose nos cartões' },
      { name: 'Cyber Lime', hex: '#CFFF04', role: 'Botões do tema escuro, a etiqueta da próxima dose no bloco do topo e sinais de sucesso, como o selo No horário' },
      { name: 'Neon Fuchsia', hex: '#FF2E9A', role: 'Selo do remédio e confete' },
      { name: 'Laranja', hex: '#FF8F1C', role: 'Logo no escuro, água do copo e confete' },
      { name: 'Laranja profundo', hex: '#C24E00', role: 'Avisos de atenção, legível com texto branco' },
      { name: 'Graphite Black', hex: '#1C1C1C', role: 'Fundo do tema escuro e, no claro, a etiqueta da próxima dose nos cartões' },
      { name: 'Preto quente', hex: '#231B1B', role: 'Texto do tema claro' },
      { name: 'Fundo claro', hex: '#F4F1EE', role: 'Fundo do tema claro' },
    ],
    paletteNote:
      'O laranja oficial com texto branco tem contraste de 2,3:1, abaixo do mínimo de 4,5:1 que as regras de acessibilidade pedem para texto. Por isso os textos usam tons derivados, como o laranja profundo, que chega a 4,8:1. O laranja oficial fica no copo da água, no logo do tema escuro e no confete.',
    typography: [
      {
        family: 'Fonte do sistema',
        css: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        role: 'Títulos, peso 600 (SF Pro no iPhone, Roboto no Android)',
        sample: 'Seus lembretes',
        weight: 600,
      },
      {
        family: 'Fonte do sistema',
        css: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        role: 'Texto, peso 400 e tamanho 17',
        sample: 'Uso contínuo, sem data para terminar.',
        weight: 400,
        note: 'O app não embute fonte, para não ficar maior.',
      },
    ],
    tokens: [
      {
        title: 'Raios',
        items: [
          { name: 'Campo e selo', value: '11px' },
          { name: 'Cartão', value: '18px' },
          { name: 'Botão e etiqueta', value: 'pontas redondas' },
        ],
      },
      {
        title: 'Espaço',
        items: [
          { name: 'Base', value: '8px' },
          { name: 'Alvo de toque', value: '44px ou mais' },
        ],
      },
      {
        title: 'Movimento',
        items: [
          { name: 'Toque', value: 'encolhe para 95%' },
          { name: 'Entrada', value: '520 ms + 70 ms por item' },
          { name: 'Troca de tema', value: '350 ms' },
        ],
      },
    ],
    mark: 'O símbolo é o V de Vanmed, que também é um ✓ de dose tomada. São três comprimidos, cada um de uma cor. Da ponta saem duas ondas, que representam o lembrete tocando. A ponta tem a cor do botão Tomado: índigo no tema claro e lima no escuro, que é a versão mostrada aqui. Nos ícones coloridos do app, ela também é lima. O desenho partiu de um esboço meu.',
    markBackground: 'radial-gradient(120% 90% at 15% 0%, #3a3a3a 0%, #262626 55%, #1c1c1c 100%)',
    galleryTitle: 'Telas',
    galleryNote:
      'Telas do app rodando no simulador do iPhone 17 Pro (iOS 26.5) em 16 e 17/11/2026, com remédios de exemplo.',
    gallery: [
      {
        src: guia,
        alt: 'Primeira das 12 telas do guia de uso: o símbolo do Vanmed com as etiquetas Remédios na hora certa, Lembrete de água e Despertador com conta, o título "Boas-vindas ao Vanmed", dois passos (passar as telas com Continuar ou pular o guia, que fica em Ajustes) e o botão Continuar.',
        caption: 'O guia de uso, na primeira abertura',
        frame: 'phone',
      },
      {
        src: cadastro,
        alt: 'Começo do cadastro: o nome Amoxicilina, a concentração 500 mg, a forma Cápsula marcada entre as opções, 1 cápsula por vez e a frequência 3x ao dia.',
        caption: 'Qual remédio e quanto tomar',
        frame: 'phone',
      },
      {
        src: cadastroQuando,
        alt: 'Meio do cadastro: começa hoje, com a primeira dose às 23:00 e a prévia "De 8 em 8 horas: 23:00 · 07:00 · 15:00", e dura 7 dias, com 21 doses e a última em 23/11 às 15:00.',
        caption: 'Quando e por quanto tempo',
        frame: 'phone',
      },
      {
        src: cadastroResumo,
        alt: 'Fim do cadastro: o resumo "Tomar 1 cápsula de Amoxicilina 500 mg. 3x ao dia, às 23:00, 07:00 e 15:00. Começa hoje (16/11) às 23:00. Por 7 dias: 21 doses, a última em 23/11 às 15:00." e o botão Salvar medicamento.',
        caption: 'O resumo em linguagem de receita',
        frame: 'phone',
        story: {
          step: 'Cadastrar o remédio',
          text: 'As perguntas seguem a ordem da receita. Antes de salvar, um resumo diz por extenso o que vai acontecer.',
          icon: 'list-checks',
        },
      },
      {
        src: remedios,
        alt: 'Aba Remédios: o bloco índigo "Seus lembretes", com 3 em andamento e a próxima dose, Amoxicilina 500 mg em 16/11 às 23:00. Abaixo, os cartões da Amoxicilina (3x ao dia, faltam 7 de 7 dias, 0 de 21 tomadas, com os botões Tomado e Editar) e da Losartana 50 mg, de uso contínuo.',
        caption: 'Os remédios em andamento',
        frame: 'phone',
      },
      {
        src: alarme,
        alt: 'Às 23:00, o alarme do iPhone aparece no alto da tela com "Amoxicilina 500 mg · 1 cápsula", e logo abaixo chega a notificação "Hora do remédio". No cartão, a dose aparece como "Agora: 23:00 · no horário até 23:30".',
        caption: 'O alarme na hora da dose',
        frame: 'phone',
        story: {
          step: 'Ouvir o alarme',
          text: 'Na hora da dose, o iPhone toca um alarme do próprio sistema, e o cartão avisa até quando a dose conta como no horário.',
          icon: 'alarm-clock',
        },
      },
      {
        src: reforco,
        alt: 'Às 23:05, sem registro da dose, chega o reforço: "Dose atrasada: Amoxicilina 500 mg. Era às 23:00 (há 5 min). Tomar 1 cápsula. Até 23:30 ainda conta no horário."',
        caption: 'O reforço, 5 minutos depois',
        frame: 'phone',
        story: {
          step: 'Receber o reforço',
          text: 'Sem registro, um reforço chega a cada 5 minutos, por até 30 minutos, e diz até quando a dose ainda conta como no horário. No iPhone, ele é uma notificação com som.',
          icon: 'bell',
        },
      },
      {
        src: horaDoRemedio,
        alt: 'Painel "Hora do remédio", aberto ao tocar na notificação: Amoxicilina 500 mg, tomar 1 cápsula, dose de hoje às 23:00, o aviso "Sem registro, o alarme volta a cada 5 min até 23:30" e os botões Tomei agora e Agora não.',
        caption: 'Responder à dose',
        frame: 'phone',
        story: {
          step: 'Registrar a dose',
          text: '"Tomei agora" registra a dose e cala o alarme. "Agora não" só cala o que está tocando, e os reforços continuam.',
          icon: 'check',
        },
      },
      {
        src: sequenciaComemora,
        alt: 'Comemoração depois da dose: o fogo aceso com "+1", "1 dia seguido!", a frase "Primeiro dia completo (16/11)! Mais um e são 2 dias." e a semana com o dia 16 marcado.',
        caption: 'O primeiro dia completo',
        frame: 'phone',
        story: {
          step: 'Manter a sequência',
          text: 'Quando a pessoa cumpre tudo o que o dia pede, o fogo acende. A cada 7 dias completos seguidos, ela ganha uma proteção e pode guardar até 2.',
          icon: 'flame',
        },
      },
      {
        src: sequencia,
        alt: 'Página Sequência: o fogo aceso com 1 dia seguido, "Hoje está completo!", a proteção a cada 7 dias, o recorde e a lista de hoje, com os remédios feitos e a água fora da conta do dia.',
        caption: 'A página da sequência',
        frame: 'phone',
      },
      {
        src: historico,
        alt: 'Histórico: 100% no horário, 1 de 1 dose, a regra de até 30 minutos antes ou depois do horário e a dose da Amoxicilina, marcada para 23:00 e tomada às 23:10, com o selo No horário.',
        caption: 'Histórico e pontualidade',
        frame: 'phone',
      },
      {
        src: aguaRotina,
        alt: 'Resumo da rotina de água: a cada 2 horas, de 280 a 290 ml em cada um dos 7 lembretes, os horários das 08:00 às 20:00 e o aviso de que hoje não há mais horários.',
        caption: 'A meta do dia vira lembretes',
        frame: 'phone',
      },
      {
        src: agua,
        alt: 'Aba Água: o perfil de hoje, Padrão, e o copo no bloco índigo, com 1,16 de 2 L e o aviso de que a rotina começa amanhã às 08:00. Abaixo, o botão Tomar água agora.',
        caption: 'O copo enche a cada registro',
        frame: 'phone',
      },
      {
        src: perfis,
        alt: 'Tela Perfis: em Próximos dias, de hoje até quinta, dia 19, todos no perfil Trabalho. Abaixo, a lista: o Padrão, para sábado e domingo, e o Trabalho, de segunda a sexta, os dois com 2 L de água por dia.',
        caption: 'Perfis de rotina',
        frame: 'phone',
      },
      {
        src: perfilNovo,
        alt: 'Novo perfil: os modelos Trabalho, Fim de semana, Férias e Em branco, os dias de segunda a sexta marcados e o nome Trabalho.',
        caption: 'Um perfil a partir de um modelo',
        frame: 'phone',
      },
      {
        src: ajustes,
        alt: 'Ajustes: o atalho para os perfis de rotina, o som do alarme dos remédios (Vanmed, três notas de marimba que sobem), a nota de que no iPhone o volume é o do aparelho e a aparência (do celular, claro ou escuro).',
        caption: 'Ajustes',
        frame: 'phone',
      },
      {
        src: remediosEscuro,
        alt: 'A aba Remédios no tema escuro: fundo grafite, o mesmo bloco índigo no topo e os botões Tomado e Novo em lima.',
        caption: 'Remédios no tema escuro',
        frame: 'phone',
      },
      {
        src: aguaEscuro,
        alt: 'A aba Água no tema escuro, com o perfil Trabalho no topo, o copo com 1,16 de 2 L e o botão Tomar água agora em lima.',
        caption: 'Água no tema escuro',
        frame: 'phone',
      },
    ],
  },
  tech: [
    { group: 'App', items: ['Flutter 3.47', 'Dart 3.13', 'Provider', 'SharedPreferences'] },
    { group: 'Alarmes', items: ['AlarmKit (iOS 26+)', 'flutter_local_notifications', 'AlarmManager', 'Kotlin e Swift nos canais nativos'] },
    { group: 'App original', items: ['Kotlin', 'Room (SQLite)', 'MVVM'] },
    { group: 'Qualidade', items: ['Testes de unidade e de widget', 'JUnit', 'Testes no simulador e no emulador', 'Teste de mutação'] },
    { group: 'Design', items: ['Visual do site da Apple', 'WCAG 2.1 e APCA', 'CIEDE2000', 'Simulação de daltonismo'] },
  ],
  skills: [
    {
      title: 'Direção de agente de IA',
      text: 'Transformar cada pedido numa rodada com objetivo claro, conferir o resultado e exigir que a documentação acompanhasse cada mudança.',
    },
    {
      title: 'Pesquisa de experiência de uso (UX)',
      text: 'Pedir uma pesquisa antes de refazer o cadastro e antes de criar o guia de uso, os perfis e a sequência.',
    },
    {
      title: 'Avaliação de usabilidade',
      text: 'Pedir uma análise dos perfis já prontos. O agente seguiu as 10 heurísticas de Nielsen, que são regras clássicas de usabilidade, e testou tarefas reais no app.',
    },
    {
      title: 'Cor e acessibilidade',
      text: 'Definir regras de cor, como a ponta do logo e a etiqueta da próxima dose nunca serem rosa. Os testes do app conferem o contraste de cada par pela WCAG, as regras de acessibilidade da web, e pela APCA, um método mais novo. Também conferem se as cores das etiquetas, como Próxima, No horário e Atrasada, se distinguem para quem tem daltonismo.',
    },
    {
      title: 'Alarmes no celular',
      text: 'Entender o que Android e iPhone deixam um app fazer na hora de tocar, no silencioso e com a tela bloqueada.',
    },
  ],
  results: {
    metrics: [
      { value: 1330, label: 'testes automáticos: 1.170 na versão em Flutter e 160 no app Android original' },
      { value: 25, label: 'rodadas de trabalho entre 31/10 e 15/11/2026' },
      { value: 5, label: 'pesquisas e análises de experiência de uso (UX) documentadas' },
      { value: 12, label: 'telas no guia de uso, um assunto por tela' },
    ],
    highlights: [
      'Uma análise de usabilidade conferiu se os perfis eram fáceis de usar. Programar o despertador para as 06:00 nos dias úteis e para as 09:00 no fim de semana pedia cerca de 25 toques e deixava dois despertadores mudos, que nunca tocavam. Depois das mudanças, a mesma tarefa pede cerca de 15 toques, e nenhum despertador fica mudo.',
      'Desde 06/11, toda rodada passou por teste de mutação: defeitos colocados de propósito no código, para conferir se os testes os pegam. Antes disso, só parte das rodadas teve esse teste.',
      'Nas rodadas de 06/11 a 15/11, o agente não testou o app num celular, nem de verdade nem simulado. Ele conferiu o app com testes automáticos e, em parte das rodadas, também com a versão web, aberta no navegador. As telas desta página foram capturadas depois, no simulador do iPhone (um iPhone simulado no computador), em 16 e 17/11/2026.',
    ],
  },
  lessons: [
    {
      title: 'No modo silencioso, a dose não tocou',
      text: 'Os testes automáticos passavam, mas no meu celular, no modo silencioso, a dose da versão em Flutter chegou como uma notificação comum: não tocou o alarme nem vibrou. Contei isso ao agente, e a rodada de 07/11 deu à versão em Flutter um alarme de verdade no Android.',
    },
    {
      title: 'Dois despertadores mudos nos perfis',
      text: 'A regra dos perfis era boa, mas o caminho mais comum para montar a semana deixava dois despertadores sem tocar. Só percebi isso quando pedi uma análise que percorreu tarefas reais no próprio app, contando cada toque.',
    },
    {
      title: 'A sequência é o único recurso de jogo',
      text: 'Pedi que a sequência fosse o único recurso de jogo do app. A pesquisa apoiou o pedido: os estudos sobre gamificação (recursos de jogo, como pontos e prêmios) em apps de remédio têm resultados mistos, e as pessoas reclamam de recursos repetitivos. Por isso a sequência ficou leve, sem pontos, loja ou ranking.',
    },
  ],
  next: [
    'Conferir o alarme, o despertador e as telas em celulares de verdade, Android e iPhone',
    'Fazer o despertador com conta tocar também no iPhone',
    'Criar um relatório do histórico para levar ao médico',
    'Aceitar dias específicos da semana, ciclos com pausa, como o do anticoncepcional, e remédios "se necessário"',
  ],
  credits: [{ name: 'Rafhael', role: 'Criou o LembreMedi, o app Android que deu origem ao Vanmed' }],
  sources:
    'README, Context.md e ChanceLog.md do repositório, as pesquisas e a análise de usabilidade em docs/, o histórico do repositório e o app rodando no simulador do iPhone (16 e 17/11/2026).',
};

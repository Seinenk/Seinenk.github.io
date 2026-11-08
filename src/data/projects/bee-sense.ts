import type { CaseStudy } from './types';
import appEntrada from '../../assets/images/projetos/bee-sense/app-entrada.webp';
import appInicio from '../../assets/images/projetos/bee-sense/app-inicio.webp';
import appMenu from '../../assets/images/projetos/bee-sense/app-menu.webp';
import appLista from '../../assets/images/projetos/bee-sense/app-lista.webp';
import appCronometro from '../../assets/images/projetos/bee-sense/app-cronometro.webp';
import appIscaVazia from '../../assets/images/projetos/bee-sense/app-isca-vazia.webp';
import appIscas from '../../assets/images/projetos/bee-sense/app-iscas.webp';
import appIsca from '../../assets/images/projetos/bee-sense/app-isca.webp';
import appConteudo from '../../assets/images/projetos/bee-sense/app-conteudo.webp';
import modelo3d from '../../assets/images/projetos/bee-sense/modelo-3d.webp';
import placa from '../../assets/images/projetos/bee-sense/placa.webp';
import colonia from '../../assets/images/projetos/bee-sense/colonia.webp';
import isca01 from '../../assets/images/projetos/bee-sense/isca-01.webp';
import isca02 from '../../assets/images/projetos/bee-sense/isca-02.webp';
import isca03 from '../../assets/images/projetos/bee-sense/isca-03.webp';
import placaCampo from '../../assets/images/projetos/bee-sense/placa-campo.webp';
import dados from '../../assets/images/projetos/bee-sense/dados.webp';
import testeCaixa from '../../assets/images/projetos/bee-sense/teste-caixa.webp';

/**
 * Fontes: Documento de Visão e Levantamento de Requisitos (versão 1.0), Relatório de
 * Teste de 27/12/2025, apresentação final (PDF e DOCX), diagramas de arquitetura e de
 * pareamento, telas do app, Currículo Lattes e o repositório público
 * EmilenyRochaLeal/beeSense. Os nomes da equipe vêm do slide de contato da
 * apresentação; os e-mails dele não vão para o site. O papel (idealização, gerência de
 * projeto e design UX/UI) foi informado pelo próprio Carlos.
 */
export const beeSense: CaseStudy = {
  slug: 'bee-sense',
  title: 'Bee Sense',
  type: 'Desenvolvimento',
  period: '2025 — 2026',
  status: 'Concluído',
  summary:
    'Isca inteligente para a captura de abelhas sem ferrão: um microfone na isca percebe a colônia e um app mostra o que acontece em cada isca. Atuei na idealização, na gerência do projeto e no design UX/UI.',
  tagline: 'Isca inteligente para detectar a captura voluntária de abelhas sem ferrão.',
  tags: ['IoT', 'BitDogLab', 'Flutter', 'Meliponicultura'],
  note: 'Projeto final da Residência Tecnológica em Sistemas Embarcados.',
  featured: true,
  art: 'bee-sense',
  facts: [
    { label: 'Papel', value: 'Idealização, gerência de projeto e design UX/UI' },
    { label: 'Contexto', value: 'Projeto final da Residência Tecnológica em Sistemas Embarcados (EmbarcaTech · IFPI)' },
    { label: 'Equipe', value: 'Carlos Michael, Emileny Rocha Leal e Francisco da Costa' },
    { label: 'Plataforma', value: 'BitDogLab (Raspberry Pi Pico W), microfone, backend e app em Flutter' },
  ],
  links: [{ label: 'Repositório no GitHub', href: 'https://github.com/EmilenyRochaLeal/beeSense', icon: 'github' }],
  context: [
    'A meliponicultura é a criação de abelhas sem ferrão, nativas do Brasil, o país com a maior diversidade delas no mundo: mais de 300 espécies. Em setembro e outubro, com as floradas, as colônias **enxameiam**: as operárias procuram um novo oco, e uma nova rainha sai para fundar outra colônia. É nessa época que é permitido usar **iscas** para a captura voluntária, evitando a retirada predatória de ninhos da natureza.',
    'A parte difícil vem depois. Da enxameação até a nova colônia ficar independente passam-se de 60 a 90 dias, e só então ela pode ir para uma caixa definitiva. Sem ver o que acontece dentro da isca, quem cria transfere cedo ou tarde demais e o enxame vai embora. Abrir a isca para olhar também não resolve: estressa as abelhas.',
    'O **Bee Sense** é uma isca inteligente: uma placa com microfone escuta a isca, um backend guarda as leituras e um app mostra a quem cuida dela o que está acontecendo. Foi o projeto final da Residência Tecnológica em Sistemas Embarcados e é do mesmo universo do **BeeCerrado**, plataforma gamificada de apoio à captura de abelhas nativas do Cerrado, exposta no Web Summit Lisboa 2025.',
    'Na equipe, minha atuação ficou principalmente na **idealização** do produto, na **gerência do projeto** e no **design UX/UI** do app.',
  ],
  challenge: {
    problem:
      'Saber o que acontece dentro de cada isca sem abri-la: se abelhas batedoras apareceram, se um enxame se instalou, se entrou um invasor e quando chega a hora de transferir a colônia.',
    goals: [
      'Detectar a presença e a atividade das abelhas na isca pelo som (RF04)',
      'Avisar no celular a primeira atividade, a ocupação, invasores, bateria fraca e perda de conexão (RF08)',
      'Contar os dias de instalação e de ocupação, para transferir a colônia na hora certa (RF06 e RF07)',
      'Ligar cada isca física à conta de quem cria, por um identificador único (RF01)',
      'Não interferir nas abelhas: dispositivo pequeno e passivo, sem calor nem luz, sem bloquear a entrada (RNF03)',
      'Durar meses com uma bateria, dormindo entre as leituras (RNF01)',
    ],
  },
  story: [
    {
      date: '2024 — 2025',
      title: 'Ideação no Inova Cerrado',
      text: 'O curso de ideação da Faculdade SEBRAE, no programa Inova Cerrado, foi feito com o projeto BeeCerrado, em 60 horas.',
    },
    {
      date: '2025',
      title: 'Formação no tema',
      text: 'Curso de Captura de Abelhas Sem Ferrão, do SENAR-DF, sobre o manejo das iscas e das colônias.',
    },
    {
      date: 'Jul 2025',
      title: 'Visão e requisitos',
      text: 'O **Documento de Visão** definiu o problema, três perfis de meliponicultor, os pilares Monitorar, Educar e Conectar, a arquitetura e um roteiro em fases. O **Levantamento de Requisitos** fechou 10 requisitos funcionais e 10 não funcionais, a base do hardware, do software e da interface.',
    },
    {
      date: 'Out — dez 2025',
      title: 'O app',
      text: 'Do design UX/UI das telas saiu o app em Flutter, no repositório de Emileny Rocha Leal: a navegação entre Início, Isca e Perfil, a lista de iscas com o código de pareamento, o histórico e o cronômetro de cada isca e os informativos sobre o manejo.',
    },
    {
      date: '27/12/2025',
      title: 'Teste de campo',
      text: 'No Sítio Salvador, a uns 20 km de Santo Antônio de Lisboa, três iscas de garrafa PET com atrativo de própolis foram instaladas para a abelha **Manduri**. Perto de um enxame ativo, a placa com microfone e sensor AHT10 gravou leituras num cartão SD.',
    },
    {
      date: '2025 — 2026',
      title: 'Apresentação final',
      text: 'O Bee Sense fechou a Residência como projeto final, com o modelo 3D da isca, a detecção de abelhas pelo som, o app por dentro e os parceiros que apoiaram o caminho.',
    },
  ],
  features: [
    {
      icon: 'mic',
      title: 'Escuta a isca',
      text: 'O microfone da BitDogLab mede o nível de som dentro da isca. Média, picos e silêncios dizem se há abelhas ali, sem abrir nada.',
    },
    {
      icon: 'link',
      title: 'Pareamento por código',
      text: 'O app gera um código para cada isca nova. A pessoa coloca o código na placa, que confirma no visor e passa a enviar as leituras.',
    },
    {
      icon: 'hexagon',
      title: 'Todas as iscas num lugar',
      text: 'A aba Isca lista as iscas com foto, distância e o último estado, como “nenhum retorno” ou “presença detectada”.',
    },
    {
      icon: 'bell',
      title: 'Histórico e avisos',
      text: 'Cada isca guarda seus eventos com data e hora: presença detectada, abelha identificada depois da análise e invasor, com limpeza necessária. O menu lateral reúne as notificações, com contador.',
    },
    {
      icon: 'timer',
      title: 'Dias de campo',
      text: 'A tela da isca mostra há quantos dias ela está instalada, e o cronômetro marca no calendário um período de 30, 45 ou 60 dias. A colônia precisa de 60 a 90 dias antes da transferência.',
    },
    {
      icon: 'book-open',
      title: 'Conteúdo sobre o manejo',
      text: 'Na tela inicial, destaques em carrossel e informativos como “Mel de melhor qualidade”, “Montagem da isca” e “Saúde das abelhas”, com favoritos e artigos relacionados.',
    },
  ],
  inside: {
    title: 'Da isca ao celular',
    text: [
      'São três partes, como no diagrama de arquitetura do projeto. O **embarcado**, na isca, envia as leituras ao **backend** por HTTPS. O backend guarda tudo num **banco de dados** e conversa com o **app** por HTTPS e WebSocket. Quem cuida das iscas só faz duas coisas: coloca o código de pareamento na placa e acompanha tudo pelo app.',
      'O pareamento segue um fluxo curto. Ao ligar, a placa verifica se a isca já está registrada: se está, começa a ler e enviar; se não, pede o código de pareamento. Se o código falha, mostra uma mensagem de erro e pede de novo.',
      'O sinal de vida é o som. Numa caixa sem abelhas, o nível sonoro (`sound_level`) tem média abaixo de 0,004, poucos picos e longos silêncios. Com abelhas, a média passa de 0,006, aparecem picos acima de 0,015 e o som é constante.',
    ],
    diagram: 'bee-sense',
  },
  decisions: [
    {
      title: 'Telas para quem não é da tecnologia',
      why: 'O requisito de usabilidade (RNF06) pede uma interface clara para um público diverso, do iniciante ao produtor comercial, e a visão pede um cadastro e um pareamento simples e guiados. No app, a lista mostra o último estado e a distância de cada isca, o pareamento acontece numa janela com o código, o histórico usa um ícone por tipo de evento e o cronômetro oferece períodos prontos de 30, 45 ou 60 dias.',
    },
    {
      title: 'O som como sinal de vida',
      why: 'Um microfone percebe a colônia sem abrir a isca, e abrir é justamente o que estressa as abelhas e atrapalha a temperatura do ninho. A média, os picos e os silêncios do nível sonoro já separam uma caixa vazia de uma caixa com abelhas.',
      tradeoff:
        'Qual faixa de frequência ou padrão indica abelhas ainda era uma dúvida no teste de campo. O Documento de Visão prevê somar um sensor de CO₂: picos curtos sugerem batedoras; CO₂ alto e zumbido estável, uma colônia instalada.',
    },
    {
      title: 'Pareamento por código',
      why: 'Cada isca do app precisa apontar para uma placa de verdade (RF01), e a instalação tem de ser simples para quem tem pouca familiaridade com tecnologia (RNF04). O app gera o código, a pessoa coloca o código na placa e a placa pede confirmação no visor antes de seguir.',
      tradeoff:
        'Se o pareamento falha, a placa mostra um erro e volta a pedir o código: ela só começa a enviar leituras quando está ligada a uma isca registrada.',
    },
    {
      title: 'ESP32 no plano, BitDogLab nos testes',
      why: 'O Documento de Visão comparou ESP32 e RP2040 e escolheu o ESP32: Wi-Fi e Bluetooth integrados e cerca de 10 µA em deep sleep, contra 18 µA do RP2040 em modo dormant. Os testes foram feitos na BitDogLab, a placa da Residência, com a Raspberry Pi Pico W.',
      tradeoff: 'A autonomia de energia, que pesou na escolha do ESP32, ficou como ajuste pendente no relatório do teste de campo.',
    },
    {
      title: 'Wi-Fi primeiro, LoRaWAN depois',
      why: 'A primeira versão usa o Wi-Fi que já vem na placa, sem um rádio extra. Para não perder dados nas quedas de conexão, o firmware deve guardar as leituras e enviá-las em lote quando a rede volta.',
      tradeoff:
        'O uso fica limitado a lugares com Wi-Fi, como quintais e sedes de fazenda. Áreas rurais remotas ficam para a fase 3 do roteiro, com LoRaWAN.',
    },
    {
      title: 'Monitorar sem perturbar',
      why: 'É o requisito ético do projeto: o dispositivo deve ser pequeno e passivo, não esquentar, não emitir luz e não bloquear a entrada nem o ninho, para não mudar o microclima da isca nem o comportamento das abelhas.',
      tradeoff:
        'No campo apareceu o outro lado: as abelhas podem revestir o sensor com própolis e comprometer a coleta. Como acoplar os sensores à isca ficou como dúvida técnica.',
    },
    {
      title: 'Uma garrafa PET como oco de árvore',
      why: 'O ninho-armadilha imita um oco natural: uma garrafa PET de 2 litros, com formato e volume adequados para a fase inicial da colônia, e um atrativo de própolis. Sem própolis de Manduri na região, foi usada a da abelha Canudo.',
      tradeoff:
        'A isca pede cuidado: fica na sombra, presa a um tronco, com o atrativo renovado a cada 15 dias enquanto não há ocupação. E a garrafa é só o começo: depois, a colônia vai para uma caixa definitiva.',
    },
  ],
  visual: {
    intro:
      'O design UX/UI do app foi a minha frente principal: telas no Material 3 do Flutter, pensadas para quem tem pouca familiaridade com tecnologia, com um verde vivo para as ações, cartões claros de borda fina e fotos reais das iscas. O logo traz as cores da abelha, do sinal e do favo.',
    palette: [
      { name: 'Azul', hex: '#1B9DDA', role: 'Asas e sinal de Wi-Fi do logo' },
      { name: 'Marrom', hex: '#9B5633', role: 'Corpo da abelha no logo' },
      { name: 'Mel', hex: '#EDB039', role: 'Favo do logo' },
      { name: 'Folha', hex: '#6F9740', role: 'Folhas do logo' },
      { name: 'Oliva', hex: '#6B7E4B', role: 'Destaque dos slides' },
      { name: 'Verde', hex: '#06D6A0', role: 'Ações e seleção no app' },
      { name: 'Menta', hex: '#DDFDE7', role: 'Fundos suaves no app' },
      { name: 'Grafite', hex: '#1D1B20', role: 'Texto do app' },
    ],
    paletteNote: 'As quatro primeiras vêm do logo; o oliva, da apresentação final; as três últimas, do tema do app.',
    typography: [
      {
        family: 'Roboto',
        css: "Roboto, 'Segoe UI', Arial, var(--font-sans)",
        role: 'Fonte padrão do Material no Android',
        sample: 'Isca 2 · Presença detectada',
      },
    ],
    mark: 'O logo junta as três ideias do projeto numa figura só: uma **abelha** de corpo marrom e asas azuis, com um **sinal de Wi-Fi** entre as antenas e duas folhas no alto, sobre um **favo** cor de mel. No nome, “Bee” vem em traço leve e “Sense” em negrito.',
    markBackground: 'radial-gradient(120% 90% at 15% 0%, #3d4a2b 0%, #232c18 55%, #161b0f 100%)',
    gallery: [
      {
        src: appEntrada,
        alt: 'Tela de entrada do app: logo, “Bem vindo ao BeeSense!”, campos de e-mail e senha, botão Entrar e entrada com Google ou Apple.',
        caption: 'A entrada: e-mail e senha, ou Google e Apple.',
        frame: 'phone',
      },
      {
        src: appInicio,
        alt: 'Tela inicial: “Bem vindo à BeeSense!”, um carrossel com o destaque “Caixa de abelha sem ferrão”, uma frase sobre conhecer as abelhas sem ferrão e a lista Informativos (Mel de melhor qualidade, Montagem da isca e Saúde das abelhas), com a barra Início, Isca e Perfil.',
        caption: 'O início: destaques em carrossel e os informativos.',
        frame: 'phone',
      },
      {
        src: appMenu,
        alt: 'Menu lateral aberto sobre a tela inicial: Notificações, com 24, Favoritos, Equipe, Contato e a chave do modo escuro.',
        caption: 'O menu: notificações com contador, favoritos, equipe, contato e modo escuro.',
        frame: 'phone',
      },
      {
        src: appLista,
        alt: 'Aba Isca com três iscas, cada uma com foto, o último estado e a distância: Isca 1, nenhum retorno, 1,2 km; Isca 2, presença detectada, 1,1 km; Isca 3, nenhum retorno, 0,8 km.',
        caption: 'A aba Isca: cada isca com o último estado e a distância.',
        frame: 'phone',
      },
      {
        src: appIscas,
        alt: 'Janela “Código de pareamento” sobre a lista de iscas, com o texto “Insira esse código na sua isca para executar o pareamento” e o código 54194685.',
        caption: 'Isca nova: o app gera o código de pareamento que vai para a placa.',
        frame: 'phone',
      },
      {
        src: appIsca,
        alt: 'Tela da Isca 2: foto da isca presa a uma árvore, 24 dias totais, 1,1 km de distância, abas Histórico e Cronômetro e eventos como Abelha, Presença detectada e Invasor – limpeza necessária, com data e hora.',
        caption: 'A Isca 2: dias em campo, distância e o histórico de eventos.',
        frame: 'phone',
      },
      {
        src: appCronometro,
        alt: 'Isca 2 na aba Cronômetro: “Selecione um período” com as opções 30, 45 e 60, o 30 escolhido, e o calendário de agosto de 2025 marcando o período a partir do dia 5.',
        caption: 'O cronômetro: um período de 30, 45 ou 60 dias marcado no calendário.',
        frame: 'phone',
      },
      {
        src: appIscaVazia,
        alt: 'Tela da Isca 1, com 32 dias totais e 1,2 km de distância, na aba Atividade, com o aviso “Nenhuma atividade detectada”.',
        caption: 'Sem atividade: o estado vazio da Isca 1.',
        frame: 'phone',
      },
      {
        src: appConteudo,
        alt: 'Artigo “Caixa de abelha sem ferrão”, de 12/10/2025, com foto de abelhas na entrada de uma caixa, o texto do artigo e a lista Relacionados: Mel de melhor qualidade, Montagem da isca e Saúde das abelhas.',
        caption: 'Um informativo aberto, com artigos relacionados.',
        frame: 'phone',
      },
      {
        src: modelo3d,
        alt: 'Modelo 3D da isca: uma garrafa verde translúcida com entrada lateral, encaixada numa base com bandeja redonda e, ao lado, uma caixa com um chip gravado na tampa.',
        caption: 'O modelo 3D da isca, da abertura da apresentação.',
        frame: 'photo',
      },
    ],
    galleryTitle: 'Telas e modelo 3D',
    galleryNote: 'Telas do app em Flutter, de versões diferentes (a aba Histórico aparece como Atividade numa delas), e o modelo 3D da isca, da apresentação final.',
  },
  fieldwork: {
    text: 'Em 27/12/2025, no Sítio Salvador, a equipe instalou três iscas para a abelha Manduri, dentro do raio de até 300 metros em que ela enxameia, e deixou a placa gravando perto de um enxame ativo.',
    shots: [
      {
        src: placa,
        alt: 'Placa BitDogLab, versão 6.3, com matriz de LEDs, joystick, botões A e B, microfone e o visor OLED mostrando: “Continuando com esse código: 25044412. Não : Sim”.',
        caption: 'A BitDogLab, com o microfone (MIC). No visor, a confirmação do código de pareamento.',
        frame: 'photo',
      },
      {
        src: colonia,
        alt: 'Tronco entre folhas secas e galhos, onde vive a colônia de Manduri do sítio.',
        caption: 'O tronco com a colônia de Manduri que motivou o teste.',
        frame: 'photo',
      },
      {
        src: isca01,
        alt: 'Isca de garrafa PET envolta em plástico preto, presa na horizontal a um tronco fino.',
        caption: 'Isca 01, perto do tanque de água.',
        frame: 'photo',
      },
      {
        src: isca02,
        alt: 'Isca de garrafa PET envolta em plástico preto, amarrada a um tronco, com a entrada em funil virada para baixo.',
        caption: 'Isca 02, perto do enxame.',
        frame: 'photo',
      },
      {
        src: isca03,
        alt: 'Isca presa na forquilha de uma árvore grande, com um anel verde na entrada.',
        caption: 'Isca 03, perto da casa.',
        frame: 'photo',
      },
      {
        src: placaCampo,
        alt: 'Placa BitDogLab sobre plástico-bolha no chão, entre folhas secas, com um módulo de cartão SD e cabos ligados.',
        caption: 'A placa no campo, testando o AHT10 e o microfone.',
        frame: 'photo',
      },
      {
        src: dados,
        alt: 'Monitor serial do VS Code no projeto beesense-firmware, com leituras gravadas em readings.ini: bait_id=0, sound_level entre 0,0129 e 0,0149, temperature=0.00 e humidity=0.00.',
        caption: 'As leituras no monitor serial: o som chega, mas a temperatura e a umidade ficam em 0.',
        frame: 'browser',
      },
      {
        src: testeCaixa,
        alt: 'Duas pessoas com roupa de proteção ao lado de uma colmeia azul; sobre a caixa, um notebook e a placa BitDogLab.',
        caption: 'O teste de som numa caixa com abelhas, foto da apresentação final.',
        frame: 'photo',
      },
    ],
    note: 'Fotos do Relatório de Teste de 27/12/2025 e da apresentação final.',
  },
  tech: [
    { group: 'Embarcado', items: ['BitDogLab', 'Raspberry Pi Pico W', 'Microfone', 'AHT10', 'Cartão SD', 'C++ (Arduino)'] },
    { group: 'Comunicação', items: ['Wi-Fi', 'HTTPS', 'WebSocket'] },
    { group: 'App', items: ['Flutter', 'Dart', 'Material 3'] },
    { group: 'Projeto', items: ['Documento de Visão', 'Requisitos RF e RNF', 'Modelo 3D da isca', 'Teste de campo'] },
    {
      group: 'No plano do Documento de Visão',
      items: ['ESP32', 'Sensor de CO₂', 'MQTT', 'Node.js + TypeScript', 'PostgreSQL + TimescaleDB', 'LoRaWAN'],
    },
  ],
  skills: [
    {
      title: 'Idealização de produto',
      text: 'Transformar a dor de quem cria abelhas sem ferrão em produto: do curso de ideação no Inova Cerrado à visão, com perfis de usuário e os pilares Monitorar, Educar e Conectar.',
    },
    {
      title: 'Gerência de projeto',
      text: 'Organizar a equipe e as entregas, dos requisitos ao teste de campo e à apresentação final, e levar o projeto a eventos como o congresso organizado na Investe Piauí.',
    },
    {
      title: 'Design UX/UI',
      text: 'Desenhar o app para quem tem pouca familiaridade com tecnologia: a lista de iscas com o último estado, o pareamento por código, o cronômetro e os informativos.',
    },
    { title: 'Internet das Coisas', text: 'Entender o caminho do dado, do microfone na isca ao backend, ao banco de dados e ao app, para que as telas mostrem o que a placa sabe.' },
    { title: 'Conhecer o domínio', text: 'Entender enxameação, iscas, atrativos e colônias antes de propor a tecnologia.' },
    {
      title: 'Experimento de campo',
      text: 'Planejar, instalar e documentar um teste fora do laboratório, com fotos, dados e os problemas encontrados.',
    },
  ],
  results: {
    metrics: [
      { value: 3, label: 'iscas instaladas no teste de campo' },
      { value: 20, label: 'requisitos levantados, 10 funcionais e 10 não funcionais' },
      { value: 6, label: 'parceiros que apoiaram o projeto' },
    ],
    highlights: [
      'O teste de campo de 27/12/2025 mostrou que o ninho-armadilha de garrafa PET com atrativo de própolis é viável para capturar enxames de Manduri.',
      'Critério de som para dizer se há abelhas na caixa: média acima de 0,006, picos acima de 0,015 e som constante; sem abelhas, média abaixo de 0,004.',
      'Parceiros: EmbarcaTech, IFPI, Bee Cerrado, Startup Piauí, Mambee e Guaribas Valley.',
      'Projeto final da Residência Tecnológica em Sistemas Embarcados, de 240 horas, com bolsa da SOFTEX, e apresentado num congresso organizado na Investe Piauí, em 2025.',
      'O BeeCerrado, do mesmo universo, foi exposto no Web Summit Lisboa 2025 e na 5ª SNEPT.',
    ],
  },
  lessons: [
    {
      title: 'O sensor que não mediu',
      text: 'No campo, o AHT10 devolveu 0 para temperatura e umidade o tempo todo. As suspeitas: a comunicação I²C, a alimentação, o próprio sensor ou um mau contato. Ele voltou para a bancada antes de um novo teste.',
    },
    {
      title: 'As abelhas também reagem',
      text: 'Abelhas sem ferrão podem revestir de própolis o sensor que está na isca. Acoplar os sensores sem comprometer a coleta virou uma pergunta de projeto, não só de eletrônica.',
    },
    {
      title: 'Que som é abelha?',
      text: 'Qual faixa de frequência ou padrão de sinal indica abelhas foi uma dúvida aberta do teste. Na apresentação final, o critério veio da comparação entre uma caixa vazia e uma caixa com abelhas: média, picos e silêncios do nível sonoro.',
    },
    {
      title: 'O campo cobra a conta',
      text: 'O relatório concluiu que a estratégia de captura funciona, mas que a parte embarcada ainda precisa de autonomia de energia e da garantia de que não interfere no comportamento das abelhas.',
    },
    {
      title: 'A biologia vem primeiro',
      text: 'A Manduri enxameia num raio de até 300 metros, então a isca não precisa ficar colada à colônia. Mas precisa de sombra, de um tronco firme e de atrativo renovado a cada 15 dias.',
    },
  ],
  next: [
    'Analisar o AHT10 em bancada e repetir o teste de campo com temperatura e umidade.',
    'Dar autonomia de energia à placa, dormindo entre as leituras para durar meses com uma bateria.',
    'Acoplar os sensores à isca sem que as abelhas os cubram de própolis.',
    'Somar um sensor de CO₂ ao microfone, para separar abelhas batedoras de uma colônia instalada.',
    'Fase 2 do roteiro: inteligência artificial nos espectrogramas do som, para identificar a espécie e a saúde da colônia.',
    'Fases 3 e 4: LoRaWAN para áreas rurais sem Wi-Fi e um painel solar para não depender de recarga.',
  ],
  credits: [
    { name: 'Emileny Rocha Leal', role: 'Equipe · repositório do app em Flutter', href: 'https://github.com/EmilenyRochaLeal' },
    { name: 'Francisco da Costa', role: 'Equipe' },
    { name: 'Dr. Kennedy', role: 'Doou o atrativo de própolis de abelha Canudo usado no teste de campo' },
  ],
  sources:
    'Documento de Visão e Levantamento de Requisitos (versão 1.0), Relatório de Teste de 27/12/2025, apresentação final, diagramas de arquitetura e de pareamento, telas do app, Currículo Lattes e repositório público do app.',
};

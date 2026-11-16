import type { CaseStudy } from './types';

/**
 * Fontes: relatório final do projeto (programa EmbarcaTech, IFPI Campus Picos,
 * 16/02/2025), README e código do repositório público Seinenk/Dino-runner, o vídeo
 * no YouTube e o Currículo Lattes.
 */
export const dinoRunner: CaseStudy = {
  slug: 'dino-runner',
  title: 'Dino Runner',
  type: 'Desenvolvimento',
  period: '2025',
  status: 'Concluído',
  summary:
    'Um jogo inspirado no dinossauro do Chrome, feito em C para a placa Raspberry Pi Pico W no programa EmbarcaTech. O dinossauro corre numa matriz de 25 LEDs, desvia pulando ou abaixando, e o placar aparece numa tela OLED.',
  tagline: 'O jogo do dinossauro do Chrome, recriado com 25 LEDs, dois botões e uma pequena tela OLED.',
  tags: ['Sistemas embarcados', 'C', 'Jogos'],
  featured: true,
  art: 'dino-runner',
  facts: [
    { label: 'Papel', value: 'Projeto, firmware e relatório' },
    { label: 'Programa', value: 'EmbarcaTech · IFPI Campus Picos' },
    { label: 'Período', value: 'Fevereiro a março de 2025' },
    { label: 'Placa', value: 'Raspberry Pi Pico W, matriz 5×5 e OLED SSD1306' },
  ],
  links: [
    { label: 'Código no GitHub', href: 'https://github.com/Seinenk/Dino-runner', icon: 'github' },
    { label: 'Vídeo no YouTube', href: 'https://www.youtube.com/shorts/a3ax_Fgrt3c', icon: 'youtube' },
  ],
  context: [
    'Todo mundo já jogou o dinossauro do Chrome quando a internet caiu. O Dino Runner leva essa ideia para um microcontrolador, um computador pequeno num único chip. Usei uma placa Raspberry Pi Pico W, uma matriz de 25 LEDs coloridos, dois botões e uma pequena tela OLED.',
    'Fiz o projeto no **EmbarcaTech**, um programa de sistemas embarcados (computadores dentro de aparelhos) oferecido pelo Instituto Federal do Piauí (IFPI), no Campus Picos. O relatório final traz o escopo, o hardware, a pinagem (ligação dos pinos), o fluxograma do firmware (o programa da placa) e uma avaliação de confiabilidade.',
    'Foi um jeito divertido de estudar sistemas embarcados de verdade, com três periféricos num mesmo laço, o ciclo que o programa repete. Os pinos de uso geral (GPIO) leem os botões e a PIO (entrada e saída programável) controla os LEDs. O I²C, uma comunicação de dois fios, leva os dados à tela.',
  ],
  challenge: {
    problem:
      'Precisei fazer um jogo que respondesse rápido num microcontrolador, sem biblioteca de jogos. O cenário inteiro tinha de caber numa matriz de 5 por 5 LEDs, e a pontuação ia para uma tela à parte. A matriz, os botões e a tela precisavam funcionar juntos, sem que um atrasasse o outro.',
    goals: [
      'Fazer um sistema embarcado completo, na linguagem C',
      'Desenhar o jogo numa matriz de LEDs 5×5, controlada pela PIO',
      'Mostrar a pontuação numa tela OLED SSD1306',
      'Ler dois botões físicos pelas GPIOs, para pular e abaixar',
      'Deixar o jogo mais difícil com o passar do tempo',
    ],
  },
  story: [
    {
      date: 'Preparação',
      title: 'O ambiente de programação',
      text: 'Num Dell G15 com Windows, instalei o VS Code com as extensões do Raspberry Pi Pico e de C/C++ e o MSYS2 com git, make e CMake. Usei o Zadig para o Windows reconhecer a placa pela USB e configurei as variáveis de ambiente do SDK (o kit de programação da Pico).',
    },
    {
      date: 'Pesquisa',
      title: 'Como os outros fizeram',
      text: 'Estudei a PIO da Pico, jogos em microcontroladores, o SSD1306 pelo I²C e a leitura de botões com pull-up. Usei referências como o repositório BitDogLab-C e os tutoriais do Prof. Jivago no YouTube.',
    },
    {
      date: '16/02/2025',
      title: 'Primeira versão e relatório',
      text: 'Publiquei no GitHub o código do jogo, o programa da PIO para os LEDs e o driver que controla o OLED. Um README (o arquivo de instruções) explica como compilar com o Pico SDK. O relatório final do EmbarcaTech tem a mesma data.',
    },
    {
      date: '23/03/2025',
      title: 'Inimigos imprevisíveis',
      text: 'O inimigo passou a surgir ao acaso nas linhas 2, 3 ou 4. A semente vem do tempo desde que a placa ligou, então cada partida é diferente.',
    },
    {
      date: '23/03/2025',
      title: 'Brilho ajustável',
      text: 'O brilho dos LEDs virou uma constante ajustável, com 30 % como padrão, mais confortável para os olhos.',
    },
    {
      date: '2025',
      title: 'Vídeo e produto tecnológico',
      text: 'Gravei a versão atualizada rodando na placa num vídeo curto no YouTube e registrei o Dino Runner no Currículo Lattes como produto tecnológico.',
    },
  ],
  features: [
    { icon: 'arrow-up', title: 'Pular e abaixar', text: 'São dois botões físicos. Um pula o inimigo que vem por baixo, e o outro abaixa para o que vem mais alto.' },
    { icon: 'square', title: 'Cenário em LEDs', text: 'O dinossauro são dois LEDs azuis na primeira coluna. O inimigo é um LED vermelho que nasce na última e anda da direita para a esquerda.' },
    { icon: 'sparkles', title: 'Aparição aleatória', text: 'A cada aparição, o inimigo escolhe uma das linhas 2, 3 ou 4, com uma semente (o número que inicia o sorteio) que muda a cada partida.' },
    { icon: 'zap', title: 'Dificuldade progressiva', text: 'A cada 5 segundos, o inimigo fica 25 milissegundos (ms) mais rápido, até o limite de 50 ms por passo.' },
    { icon: 'monitor', title: 'Placar e fim de jogo', text: 'A tela OLED mostra quantos inimigos foram desviados e se atualiza a cada desvio. Na colisão, o jogo termina com a pontuação final.' },
    { icon: 'shield-check', title: 'Botões sem toque falso', text: 'Com o pull-up interno (um resistor do chip) e o debounce, um filtro no código, cada clique vira um comando só.' },
  ],
  video: {
    youtube: 'a3ax_Fgrt3c',
    title: 'Dino Runner rodando na Raspberry Pi Pico W',
    text: 'O vídeo acompanha o relatório final e mostra o programa atualizado rodando na placa.',
    caption: 'Gravei este vídeo curto. O player do YouTube só carrega quando você toca para assistir.',
    vertical: true,
  },
  inside: {
    title: 'Um passo a cada 10 milissegundos',
    text: [
      'Depois de iniciar a matriz, o OLED e os botões, o jogo entra no laço e dá um passo a cada 10 ms. Em cada passo, move o inimigo quando chega a vez dele e lê os botões (com pull-up, 0 significa pressionado). Depois escolhe a pose do dinossauro (em pé, pulando ou abaixado) e confere a colisão. Sem colisão, desenha o quadro e atualiza o placar. Com colisão, mostra o fim de jogo.',
      'Os LEDs são do tipo WS2812, que só entendem pulsos com tempo exato. Quem gera esse sinal é a PIO do RP2040, que funciona sozinha e deixa os dois núcleos ARM Cortex-M0+ livres para o jogo. A pontuação vai para a tela SSD1306 pelo I²C, nos pinos 14 (SDA, dados) e 15 (SCL, relógio).',
    ],
    diagram: 'dino-runner',
  },
  decisions: [
    {
      title: 'Raspberry Pi Pico W',
      why: 'A placa tem baixo consumo, GPIOs de sobra e a PIO, que cuida dos LEDs sem ocupar os núcleos do processador.',
    },
    {
      title: 'PIO para os LEDs',
      why: 'Os LEDs endereçáveis, em que cada um recebe a própria cor, exigem pulsos de tempo preciso. Com a PIO, o próprio hardware gera esse sinal, sem atrasar a leitura dos botões.',
    },
    {
      title: 'Pull-up e debounce nos botões',
      why: 'Com o pull-up interno, o botão dispensa resistor externo e lê 0 quando pressionado. O debounce no código ignora a trepidação do contato, que fazia um clique virar vários comandos.',
    },
    {
      title: 'Sprites como matrizes',
      why: 'Cada pose do dinossauro é um sprite, um desenho guardado como matriz 5×5 de cores RGB (vermelho, verde e azul). Trocar de pose é copiar uma matriz, e o inimigo é pintado por cima a cada quadro.',
    },
    {
      title: 'Dificuldade pelo relógio',
      why: 'Acelerar pelo tempo, e não pelos pontos, deixa toda partida mais tensa no mesmo ritmo. O piso de 50 ms por passo mantém a partida jogável.',
      tradeoff: 'Como só a velocidade muda, o desafio não varia de outras formas. O relatório aponta isso como limitação.',
    },
  ],
  demo: {
    kind: 'dino-game',
    title: 'Jogue aqui',
    text: 'Esta recriação da matriz roda no navegador, com as mesmas regras do código. O inimigo aparece numa das três linhas de baixo e acelera a cada 5 segundos. Use a seta para cima ou o espaço para pular, a seta para baixo para abaixar, ou os botões.',
  },
  visual: {
    intro:
      'Com 25 pixels, cada cor tem um papel. O azul é você, o vermelho é perigo e o resto fica apagado. O brilho em 30 % deixa as cores fortes sem ofuscar.',
    palette: [
      { name: 'Dinossauro', hex: '#0000FF', role: 'RGB (0, 0, 255)' },
      { name: 'Inimigo', hex: '#FF0000', role: 'RGB (255, 0, 0)' },
      { name: 'Apagado', hex: '#000000', role: 'LED desligado' },
    ],
    typography: [
      {
        family: 'Fonte bitmap do SSD1306',
        css: 'var(--font-mono)',
        role: 'Letras de 8 pixels de altura no OLED de 128 colunas',
        sample: 'Desviados: 12',
      },
    ],
  },
  tech: [
    { group: 'Linguagem e SDK', items: ['C', 'Pico SDK', 'CMake'] },
    { group: 'Hardware', items: ['Raspberry Pi Pico W (RP2040)', 'Matriz WS2812 5×5', 'OLED SSD1306', 'Dois botões'] },
    { group: 'Periféricos', items: ['GPIO com pull-up', 'PIO', 'I²C'] },
    { group: 'Ferramentas', items: ['VS Code', 'Extensão Raspberry Pi Pico', 'C/C++ Extension Pack', 'MSYS2', 'Zadig', 'Git'] },
  ],
  skills: [
    { title: 'C para microcontroladores', text: 'Escrevi o laço principal e a temporização com sleep e contadores, sem sistema operacional.' },
    { title: 'PIO e sinais com tempo crítico', text: 'Gerei o protocolo dos LEDs endereçáveis no hardware programável da Pico.' },
    { title: 'Comunicação I²C', text: 'Inicializei a tela, montei o quadro num buffer (uma área da memória) e desenhei texto.' },
    { title: 'Lógica de jogos', text: 'Programei sprites, colisão, aleatoriedade e curva de dificuldade numa tela de 25 pixels.' },
    { title: 'Ambiente embarcado no Windows', text: 'Configurei o compilador, o SDK, o driver USB e as variáveis de ambiente para programar a placa pelo VS Code.' },
    { title: 'Documentação técnica', text: 'Escrevi um relatório com escopo, hardware, pinagem, fluxograma, metodologia e avaliação de confiabilidade. O README explica como baixar o código e rodar o jogo na placa.' },
  ],
  results: {
    highlights: [
      'Com a PIO cuidando dos LEDs, os núcleos do RP2040 (o chip da Pico) ficam livres, e o jogo roda estável e fluido.',
      'Os botões respondem sem atraso perceptível, e o debounce acabou com os toques falsos.',
      'O inimigo varia de verdade entre as linhas 2, 3 e 4, e as partidas seguidas deixam de se repetir.',
      'Em 2025, registrei o Dino Runner como produto tecnológico no Currículo Lattes (a plataforma brasileira de currículos acadêmicos). O código é aberto, sob a licença MIT.',
    ],
  },
  lessons: [
    {
      title: 'A preparação veio antes do código',
      text: 'Antes da primeira linha do jogo, configurei o compilador, o SDK, o driver USB e as variáveis de ambiente. Documentar esse caminho permite que outra pessoa reproduza o projeto.',
    },
    {
      title: 'Aleatoriedade precisa de semente',
      text: 'Sem uma semente que mude, o inimigo repetia o mesmo padrão. A semente tirada do tempo desde que a placa ligou resolveu.',
    },
    {
      title: 'Desenho simples em 25 pixels',
      text: 'Numa matriz 5×5, o dinossauro e o inimigo viram poucos pontos de luz, e cada cor precisa ter um papel claro.',
    },
    {
      title: 'Só a velocidade muda',
      text: 'O inimigo acelera com o tempo, mas, sem outros ajustes, a dificuldade fica previsível. E só existe um inimigo por vez.',
    },
  ],
  next: [
    'Mais de um inimigo ao mesmo tempo na matriz.',
    'Dificuldade com ajustes dinâmicos, além da velocidade.',
    'Novos tipos de obstáculo, pontuações mais elaboradas e melhorias no desenho.',
  ],
  sources:
    'Relatório final do projeto (EmbarcaTech, IFPI Campus Picos, 16/02/2025), o README e o código do repositório público, o vídeo no YouTube e o Currículo Lattes.',
};

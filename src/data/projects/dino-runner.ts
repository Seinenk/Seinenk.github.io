import type { CaseStudy } from './types';

/** Fontes: repositório público Seinenk/Dino-runner (README e código) e Currículo Lattes. */
export const dinoRunner: CaseStudy = {
  slug: 'dino-runner',
  title: 'Dino Runner',
  type: 'Desenvolvimento',
  period: '2025',
  status: 'Concluído',
  summary:
    'Jogo em C para a Raspberry Pi Pico W, inspirado no jogo do dinossauro do Chrome: o dinossauro corre numa matriz de 25 LEDs e a pontuação aparece numa tela OLED. Registrado como produto tecnológico.',
  tagline: 'O jogo do dinossauro reinventado em 25 LEDs, dois botões e uma pequena tela OLED.',
  tags: ['Sistemas embarcados', 'C', 'Jogos'],
  featured: true,
  art: 'dino-runner',
  facts: [
    { label: 'Papel', value: 'Firmware, lógica do jogo e documentação' },
    { label: 'Período', value: 'Fevereiro a março de 2025' },
    { label: 'Placa', value: 'Raspberry Pi Pico W, matriz 5×5 e OLED' },
    { label: 'Registro', value: 'Produto tecnológico no Lattes · código aberto (MIT)' },
  ],
  links: [{ label: 'Código no GitHub', href: 'https://github.com/Seinenk/Dino-runner', icon: 'github' }],
  context: [
    'Todo mundo já jogou o dinossauro do Chrome quando a internet caiu. O Dino Runner leva essa ideia para um microcontrolador: uma Raspberry Pi Pico W, uma matriz de 25 LEDs coloridos, dois botões e uma pequena tela OLED.',
    'Foi um jeito divertido de estudar sistemas embarcados de verdade, com três periféricos conversando no mesmo laço: GPIO para os botões, PIO para os LEDs e I²C para a tela.',
  ],
  challenge: {
    problem:
      'Fazer um jogo responsivo num microcontrolador, com o cenário inteiro numa matriz de 5 por 5 LEDs, a pontuação numa tela à parte e nenhuma biblioteca de jogos para ajudar.',
    goals: [
      'Ler dois botões físicos sem travar o jogo',
      'Acender 25 LEDs endereçáveis com o tempo exato que eles exigem',
      'Mostrar a pontuação em tempo real num OLED',
      'Deixar o jogo mais difícil com o passar do tempo',
    ],
  },
  story: [
    {
      date: '16/02/2025',
      title: 'Primeira versão',
      text: 'O código do jogo, o programa da PIO para os LEDs e o driver do OLED sobem para o GitHub, com um README que explica como compilar com o Pico SDK.',
    },
    {
      date: '23/03/2025',
      title: 'Inimigos imprevisíveis',
      text: 'O inimigo passa a surgir aleatoriamente nas linhas 2, 3 ou 4, com a semente tirada do tempo desde que a placa ligou: cada partida é diferente.',
    },
    {
      date: '23/03/2025',
      title: 'Brilho na medida',
      text: 'O brilho dos LEDs vira uma constante ajustável, com 30 % como padrão, mais confortável para os olhos.',
    },
    {
      date: '2025',
      title: 'Produto tecnológico',
      text: 'O Dino Runner é registrado no Currículo Lattes como produto tecnológico.',
    },
  ],
  features: [
    { icon: 'arrow-up', title: 'Pular e abaixar', text: 'Dois botões físicos: um faz o dinossauro pular, o outro faz ele se abaixar.' },
    { icon: 'square', title: 'Cenário em LEDs', text: 'O dinossauro é desenhado em azul e o inimigo em vermelho, numa matriz de 5×5.' },
    { icon: 'zap', title: 'Dificuldade progressiva', text: 'A cada 5 segundos o inimigo fica 25 ms mais rápido, até o limite de 50 ms por passo.' },
    { icon: 'monitor', title: 'Placar no OLED', text: 'A tela mostra "Dino Runner" e quantos inimigos foram desviados, atualizada a cada desvio.' },
    { icon: 'sparkles', title: 'Aparição aleatória', text: 'O inimigo escolhe uma das três linhas de baixo a cada nova aparição.' },
    { icon: 'sun', title: 'Brilho ajustável', text: 'Uma constante no código define a intensidade de todos os LEDs.' },
  ],
  inside: {
    title: 'Um laço de 10 milissegundos',
    text: [
      'O jogo roda num laço que dá um passo a cada 10 ms. Em cada passo ele lê os botões (com pull-up, então 0 significa pressionado), escolhe a pose do dinossauro (em pé, pulando ou abaixado), move o inimigo quando chega a vez dele, confere a colisão e desenha o quadro.',
      'Os LEDs são WS2812, que só entendem pulsos com tempo exato. Quem gera esse sinal é a PIO, a E/S programável da Pico, que funciona sozinha e deixa o processador livre para o jogo. A pontuação vai para um display SSD1306 pelo barramento I²C.',
    ],
    diagram: 'dino-runner',
  },
  decisions: [
    {
      title: 'PIO para os LEDs',
      why: 'Os LEDs endereçáveis exigem pulsos de tempo preciso. Com a PIO, esse sinal é gerado pelo hardware, sem atrasar a leitura dos botões.',
    },
    {
      title: 'Sprites como matrizes',
      why: 'Cada pose do dinossauro é uma matriz 5×5 de cores RGB. Trocar de pose é copiar uma matriz, e o inimigo é pintado por cima a cada quadro.',
    },
    {
      title: 'Dificuldade pelo relógio',
      why: 'Acelerar por tempo, e não por pontos, faz toda partida ficar mais tensa no mesmo ritmo, com um piso de 50 ms para continuar jogável.',
    },
  ],
  demo: {
    kind: 'dino-game',
    title: 'Jogue aqui',
    text: 'Uma recriação da matriz no navegador, com as mesmas regras do código: o inimigo aparece numa das três linhas de baixo e acelera a cada 5 segundos. Use a seta para cima ou o espaço para pular, a seta para baixo para abaixar, ou os botões.',
  },
  visual: {
    intro:
      'Com 25 pixels, cada cor precisa dizer muita coisa: azul é você, vermelho é perigo, e o resto fica apagado. O brilho em 30 % deixa as cores fortes sem ofuscar.',
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
    { group: 'Hardware', items: ['Raspberry Pi Pico W', 'Matriz WS2812 5×5', 'OLED SSD1306', 'Botões'] },
    { group: 'Periféricos', items: ['GPIO com pull-up', 'PIO', 'I²C'] },
  ],
  skills: [
    { title: 'C para microcontroladores', text: 'Laço principal, temporização com sleep e contadores, sem sistema operacional.' },
    { title: 'PIO e sinais com tempo crítico', text: 'Gerar o protocolo dos LEDs endereçáveis no hardware programável da Pico.' },
    { title: 'Comunicação I²C', text: 'Inicializar o display, montar o quadro num buffer e desenhar texto.' },
    { title: 'Lógica de jogos', text: 'Sprites, colisão, aleatoriedade e curva de dificuldade numa tela de 25 pixels.' },
    { title: 'Documentação', text: 'Um README que leva quem chega do clone até o jogo rodando na placa.' },
  ],
  results: {
    highlights: [
      'Registrado como produto tecnológico no Currículo Lattes (2025).',
      'Código aberto sob a licença MIT, com instruções de compilação.',
    ],
  },
  sources: 'Repositório público do projeto e Currículo Lattes.',
};

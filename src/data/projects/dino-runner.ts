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
    'Jogo em C para a Raspberry Pi Pico W, feito no programa EmbarcaTech e inspirado no dinossauro do Chrome: o dinossauro corre numa matriz de 25 LEDs, desvia pulando ou abaixando, e a pontuação aparece numa tela OLED.',
  tagline: 'O jogo do dinossauro reinventado em 25 LEDs, dois botões e uma pequena tela OLED.',
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
    'Todo mundo já jogou o dinossauro do Chrome quando a internet caiu. O Dino Runner leva essa ideia para um microcontrolador: uma Raspberry Pi Pico W, uma matriz de 25 LEDs coloridos, dois botões e uma pequena tela OLED.',
    'O projeto foi feito no **EmbarcaTech**, programa de sistemas embarcados oferecido pelo IFPI Campus Picos, e documentado num relatório final com o escopo, o hardware, a pinagem, o fluxograma do firmware e uma avaliação de confiabilidade.',
    'Foi um jeito divertido de estudar sistemas embarcados de verdade, com três periféricos conversando no mesmo laço: GPIO para os botões, PIO para os LEDs e I²C para a tela.',
  ],
  challenge: {
    problem:
      'Fazer um jogo responsivo num microcontrolador, com o cenário inteiro numa matriz de 5 por 5 LEDs, a pontuação numa tela à parte e nenhuma biblioteca de jogos para ajudar. A matriz, os botões e a tela precisavam funcionar juntos, sem que um atrasasse o outro.',
    goals: [
      'Fazer um sistema embarcado completo, em C',
      'Desenhar o jogo numa matriz de LEDs 5×5, controlada pela PIO',
      'Mostrar a pontuação num display OLED SSD1306',
      'Ler dois botões físicos pelas GPIOs, para pular e abaixar',
      'Deixar o jogo mais difícil com o passar do tempo',
    ],
  },
  story: [
    {
      date: 'Preparação',
      title: 'O ambiente antes do código',
      text: 'Num Dell G15 com Windows: o VS Code com as extensões do Raspberry Pi Pico e de C/C++, o MSYS2 com git, make e CMake, o Zadig para o Windows reconhecer a placa pela USB e as variáveis de ambiente do SDK.',
    },
    {
      date: 'Pesquisa',
      title: 'Como os outros fizeram',
      text: 'A PIO da Pico, jogos em microcontroladores, o SSD1306 pelo I²C e a leitura de botões com pull-up, com referências como o repositório BitDogLab-C e os tutoriais do Prof. Jivago no YouTube.',
    },
    {
      date: '16/02/2025',
      title: 'Primeira versão e relatório',
      text: 'O código do jogo, o programa da PIO para os LEDs e o driver do OLED sobem para o GitHub, com um README que explica como compilar com o Pico SDK. O relatório final do EmbarcaTech tem a mesma data.',
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
      title: 'Vídeo e produto tecnológico',
      text: 'A versão atualizada aparece rodando na placa num vídeo curto no YouTube, e o Dino Runner é registrado no Currículo Lattes como produto tecnológico.',
    },
  ],
  features: [
    { icon: 'arrow-up', title: 'Pular e abaixar', text: 'Dois botões físicos: um pula o inimigo que vem por baixo, o outro abaixa para o que vem mais alto.' },
    { icon: 'square', title: 'Cenário em LEDs', text: 'O dinossauro são dois LEDs azuis na primeira coluna; o inimigo, um LED vermelho que nasce na última e anda da direita para a esquerda.' },
    { icon: 'sparkles', title: 'Aparição aleatória', text: 'O inimigo escolhe uma das linhas 2, 3 ou 4 a cada aparição, com uma semente que muda a cada partida.' },
    { icon: 'zap', title: 'Dificuldade progressiva', text: 'A cada 5 segundos o inimigo fica 25 ms mais rápido, até o limite de 50 ms por passo.' },
    { icon: 'monitor', title: 'Placar e fim de jogo', text: 'O OLED mostra quantos inimigos foram desviados, atualizado a cada desvio; na colisão, o jogo termina com a pontuação final.' },
    { icon: 'shield-check', title: 'Botões sem toque falso', text: 'Pull-up interno e debounce no código: cada clique vira um comando só.' },
  ],
  video: {
    youtube: 'a3ax_Fgrt3c',
    title: 'Dino Runner rodando na Raspberry Pi Pico W',
    text: 'O programa atualizado em execução na placa, no vídeo que acompanha o relatório final.',
    caption: 'Vídeo curto gravado pelo autor. O player do YouTube só carrega quando você toca para assistir.',
    vertical: true,
  },
  inside: {
    title: 'Um laço de 10 milissegundos',
    text: [
      'Depois de iniciar a matriz, o OLED e os botões, o jogo entra num laço que dá um passo a cada 10 ms. Em cada passo ele move o inimigo quando chega a vez dele, lê os botões (com pull-up, então 0 significa pressionado), escolhe a pose do dinossauro (em pé, pulando ou abaixado) e confere a colisão: sem colisão, desenha o quadro e atualiza o placar; com colisão, mostra o fim de jogo.',
      'Os LEDs são WS2812, que só entendem pulsos com tempo exato. Quem gera esse sinal é a PIO, a E/S programável do RP2040, que funciona sozinha e deixa os dois núcleos ARM Cortex-M0+ livres para o jogo. A pontuação vai para um display SSD1306 pelo barramento I²C, nos pinos 14 (SDA) e 15 (SCL).',
    ],
    diagram: 'dino-runner',
  },
  decisions: [
    {
      title: 'Raspberry Pi Pico W',
      why: 'Baixo consumo, GPIOs de sobra e a PIO, que dá conta dos LEDs sem ocupar os núcleos do processador.',
    },
    {
      title: 'PIO para os LEDs',
      why: 'Os LEDs endereçáveis exigem pulsos de tempo preciso. Com a PIO, esse sinal é gerado pelo hardware, sem atrasar a leitura dos botões.',
    },
    {
      title: 'Pull-up e debounce nos botões',
      why: 'Com o pull-up interno, o botão dispensa resistor externo e lê 0 quando pressionado. O debounce no código ignora a trepidação do contato, que fazia um clique virar vários comandos.',
    },
    {
      title: 'Sprites como matrizes',
      why: 'Cada pose do dinossauro é uma matriz 5×5 de cores RGB. Trocar de pose é copiar uma matriz, e o inimigo é pintado por cima a cada quadro.',
    },
    {
      title: 'Dificuldade pelo relógio',
      why: 'Acelerar por tempo, e não por pontos, faz toda partida ficar mais tensa no mesmo ritmo, com um piso de 50 ms para continuar jogável.',
      tradeoff: 'Como só a velocidade muda, o desafio não varia de outras formas; o relatório aponta isso como limitação.',
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
    { group: 'Hardware', items: ['Raspberry Pi Pico W (RP2040)', 'Matriz WS2812 5×5', 'OLED SSD1306', 'Dois botões'] },
    { group: 'Periféricos', items: ['GPIO com pull-up', 'PIO', 'I²C'] },
    { group: 'Ferramentas', items: ['VS Code', 'Extensão Raspberry Pi Pico', 'C/C++ Extension Pack', 'MSYS2', 'Zadig', 'Git'] },
  ],
  skills: [
    { title: 'C para microcontroladores', text: 'Laço principal, temporização com sleep e contadores, sem sistema operacional.' },
    { title: 'PIO e sinais com tempo crítico', text: 'Gerar o protocolo dos LEDs endereçáveis no hardware programável da Pico.' },
    { title: 'Comunicação I²C', text: 'Inicializar o display, montar o quadro num buffer e desenhar texto.' },
    { title: 'Lógica de jogos', text: 'Sprites, colisão, aleatoriedade e curva de dificuldade numa tela de 25 pixels.' },
    { title: 'Ambiente embarcado no Windows', text: 'Compilador, SDK, driver USB e variáveis de ambiente configurados para programar a placa pelo VS Code.' },
    { title: 'Documentação técnica', text: 'Um relatório com escopo, hardware, pinagem, fluxograma, metodologia e avaliação de confiabilidade, além do README que leva do clone ao jogo na placa.' },
  ],
  results: {
    highlights: [
      'Funcionamento estável: com a PIO cuidando dos LEDs, os núcleos do RP2040 ficam livres e o jogo roda fluido.',
      'Os botões respondem sem atraso perceptível, e o debounce acabou com os toques falsos.',
      'O inimigo varia de verdade entre as linhas 2, 3 e 4, e as partidas seguidas deixam de se repetir.',
      'Registrado como produto tecnológico no Currículo Lattes (2025), com código aberto sob a licença MIT.',
    ],
  },
  lessons: [
    {
      title: 'O projeto não é só o código',
      text: 'Antes da primeira linha do jogo vieram o compilador, o SDK, o driver USB e as variáveis de ambiente. Documentar esse caminho é o que deixa outra pessoa reproduzir o projeto.',
    },
    {
      title: 'Aleatoriedade precisa de semente',
      text: 'Sem uma semente que mude, o inimigo repetia o mesmo padrão. A semente tirada do tempo desde que a placa ligou resolveu.',
    },
    {
      title: '25 pixels pedem simplicidade',
      text: 'Numa matriz 5×5, o dinossauro e o inimigo viram poucos pontos de luz: cada cor precisa dizer muita coisa, e o desenho fica bem simplificado.',
    },
    {
      title: 'Só velocidade não varia o desafio',
      text: 'O inimigo acelera com o tempo, mas sem outros ajustes a dificuldade fica previsível, e só existe um inimigo por vez.',
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

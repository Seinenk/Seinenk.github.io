import type { CaseStudy } from './types';
import { paletasRota } from '../rota-do-hub-paletas';
import celularInicio from '../../assets/images/projetos/rota-do-hub/celular-inicio.webp';
import celularMapa from '../../assets/images/projetos/rota-do-hub/celular-mapa.webp';
import celularDesafio from '../../assets/images/projetos/rota-do-hub/celular-desafio.webp';
import celularPassaporte from '../../assets/images/projetos/rota-do-hub/celular-passaporte.webp';
import celularConstruir from '../../assets/images/projetos/rota-do-hub/celular-construir.webp';
import inicio from '../../assets/images/projetos/rota-do-hub/inicio.webp';
import mapa from '../../assets/images/projetos/rota-do-hub/mapa.webp';
import destino from '../../assets/images/projetos/rota-do-hub/destino.webp';
import licao from '../../assets/images/projetos/rota-do-hub/licao.webp';
import desafio from '../../assets/images/projetos/rota-do-hub/desafio.webp';
import gataPoses from '../../assets/images/projetos/rota-do-hub/gata-poses.webp';
import adesivos from '../../assets/images/projetos/rota-do-hub/adesivos.webp';
import paletas from '../../assets/images/projetos/rota-do-hub/paletas.webp';
import album from '../../assets/images/projetos/rota-do-hub/album.webp';
import carimbos from '../../assets/images/projetos/rota-do-hub/carimbos.webp';
import construir from '../../assets/images/projetos/rota-do-hub/construir.webp';
import custos from '../../assets/images/projetos/rota-do-hub/custos.webp';
import ferramentas from '../../assets/images/projetos/rota-do-hub/ferramentas.webp';
import pagina404 from '../../assets/images/projetos/rota-do-hub/pagina-404.webp';

/**
 * Fontes: README.md, CONTEXT.md, CHANGELOG.md e docs/ do repositório da Rota do Hub (privado),
 * o código dele e o site publicado, capturado em 19/11/2026. Cada captura usa uma paleta
 * diferente, e algumas mostram um progresso de demonstração, gravado no navegador só para elas.
 *
 * Projeto sem depoimentos, a pedido de Carlos.
 */
export const rotaDoHub: CaseStudy = {
  slug: 'rota-do-hub',
  title: 'Rota do Hub',
  type: 'Web',
  period: '2026',
  status: 'Concluído',
  summary:
    'Criei com um time de agentes de IA uma plataforma que ensina qualquer pessoa a fazer e publicar o próprio hub de conteúdo, de graça. São 59 lições, um passo a passo de 10 etapas, uma gata guia e 51 paletas que se revezam.',
  tagline:
    'Uma plataforma de aprendizado em forma de viagem, que leva quem nunca fez um site até o próprio hub de conteúdo publicado.',
  tags: ['Astro', 'Gamificação', 'Acessibilidade', 'Agentes de IA'],
  art: 'rota-do-hub',
  facts: [
    { label: 'Papel', value: 'Produto, requisitos, as 51 paletas e a direção dos agentes de IA' },
    { label: 'Período', value: '8 a 15 de novembro de 2026' },
    { label: 'Escala', value: '100 páginas, 59 lições e 828 testes automáticos' },
    { label: 'Plataforma', value: 'Site estático em Astro, publicado na Cloudflare' },
  ],
  links: [{ label: 'Site da Rota do Hub', href: 'https://rota-do-hub.rota-do-hub.workers.dev', icon: 'globe' }],
  context: [
    'Um **hub de conteúdo** é um site informativo organizado por assunto, e não por data, como um blog. Ele existe para que o público encontre e entenda a informação com o menor esforço. A **Rota do Hub** ensina a fazer um desses, do zero ao ar, para quem domina um assunto e nunca fez um site e também para quem já tem experiência.',
    'A plataforma tem dois modos. No **Estudar**, a pessoa lê 59 lições curtas, em 12 módulos, e responde a um desafio no fim de cada uma. No **Construir**, segue 10 etapas que planejam, montam, publicam e medem o próprio hub, e no fim recebe os arquivos do hub e um certificado. Tudo é de graça, sem cadastro e sem cookies: o progresso fica guardado só no navegador.',
    'Tudo segue a metáfora de uma viagem. Cada módulo é um destino num mapa, cada lição concluída rende um carimbo e cada conquista vira um adesivo no passaporte. **Dolores, a gata guia**, acompanha a pessoa em todas as páginas. As cores do site se revezam entre 51 paletas, e as ilustrações, adesivos de viagem desenhados para o projeto, mudam de cor junto.',
    'Neste projeto, fiz o papel de dono do produto: escrevi os requisitos, criei as 51 paletas no Adobe Color, reuni as referências visuais e pedi os ajustes depois de ver a plataforma pronta. A pesquisa, o código, as ilustrações e as revisões foram feitos por agentes de inteligência artificial (IA) baseados em modelos Claude, da Anthropic, organizados em frentes de trabalho, cada uma dona de um conjunto de arquivos.',
  ],
  challenge: {
    problem:
      'Quem domina um assunto e quer compartilhar o que sabe esbarra em perguntas técnicas: qual ferramenta usar, quanto custa, como escolher cores e fontes, onde publicar e como saber se alguém está lendo. As respostas estão espalhadas, mudam rápido e muitas vêm de quem vende a ferramenta. A plataforma precisava ensinar tudo isso a partir de pesquisa conferida, de um jeito que desse vontade de continuar, e ainda ser leve e acessível.',
    goals: [
      'Ensinar só o que a pesquisa diz, com a fonte de cada lição à vista',
      'Ter gamificação de verdade: pontos, níveis, sequência de dias, adesivos, mapa e desafios',
      'Ter uma mascote animada que dá dicas quando a pessoa fica parada',
      'Trocar as cores entre 51 paletas sem perder o contraste em nenhuma',
      'Mostrar quanto custa cada forma de construir, na hora de escolher',
      'Ser leve, acessível e fácil de manter à mão',
    ],
  },
  story: [
    {
      date: '08/11/2026',
      title: 'A pesquisa',
      text: 'Antes de qualquer código, os agentes escreveram dois documentos: um referencial teórico sobre hubs de conteúdo, com cerca de 40 mil palavras e 207 referências, e um guia prático com cerca de 115 mil palavras. Cada ferramenta citada ganhou nota em cinco critérios, como simplicidade e gratuidade. A Trilha da Proteção, outro projeto meu, entrou como projeto de referência.',
    },
    {
      date: '11/11/2026',
      title: 'Os insumos de design',
      text: 'Entreguei as 51 paletas que criei no Adobe Color, imagens de adesivos de viagem para servir só de referência de estilo e o documento de design system que o site devia seguir.',
    },
    {
      date: '12/11/2026',
      title: 'A base',
      text: 'As 255 cores das paletas foram transcritas e conferidas duas vezes. Saíram o sistema de cores, com 51 temas, as fontes hospedadas no próprio site e as regras de segurança. Uma revisão independente fez 16 correções antes do trabalho em paralelo.',
    },
    {
      date: '12 e 13/11/2026',
      title: 'Frentes em paralelo',
      text: 'Várias frentes trabalharam ao mesmo tempo: lições, adesivos, a gata guia, o jogo e o passaporte, os dois modos, os geradores e o motor de cores. Uma revisão conferiu três módulos contra a pesquisa e fez 91 correções.',
    },
    {
      date: '13/11/2026',
      title: 'O trabalho perdido',
      text: 'O computador reiniciou e apagou as cópias de trabalho de catorze frentes, que ficavam na pasta temporária do macOS.',
    },
    {
      date: '15/11/2026',
      title: 'Recuperação e acabamento',
      text: 'O trabalho de sete frentes foi refeito a partir do registro das operações de arquivo: 147 arquivos, sem nenhuma edição falhar. No mesmo dia ficaram prontas as 58 artes, as cinco ferramentas, as páginas que faltavam e a revisão de todo o conteúdo, com 346 correções no total.',
    },
    {
      date: '15/11/2026, à noite',
      title: 'Meus pedidos e a publicação',
      text: 'Depois de ver a plataforma pronta, pedi que a mascote fosse uma gata chamada Dolores, que ela falasse da dona de vez em quando, que a escolha do caminho mostrasse o custo de cada um e um plano para hospedar tudo de graça. O site foi publicado na Cloudflare, sem custo.',
    },
  ],
  features: [
    {
      icon: 'map-pin',
      title: 'Modo Estudar',
      text: 'São 59 lições curtas em 12 destinos, com objetivos, caixas de dica e de atenção e termos que se abrem com um toque. No fim de cada uma, um desafio de 3 a 5 perguntas: escolha, verdadeiro ou falso, ordenar e associar.',
    },
    {
      icon: 'wrench',
      title: 'Modo Construir',
      text: 'Dez etapas levam da ideia à chegada. A pessoa define o tema e o público, monta a estrutura, escreve, escolhe cores e fontes, recebe a recomendação de um entre quatro caminhos (sem código, com IA, low-code ou código), publica e mede.',
    },
    {
      icon: 'download',
      title: 'Geradores',
      text: 'Um gerador entrega o hub pronto, num arquivo `index.html` ou num pacote `.zip`, com as cores e as fontes escolhidas. Outro monta um pedido para colar no Claude, no Gemini ou no ChatGPT. No fim, sai um certificado.',
    },
    {
      icon: 'award',
      title: 'Jogo e passaporte',
      text: 'São pontos de experiência (XP), dez níveis, de Mala pronta a Lenda da estrada, sequência de dias e 25 adesivos de conquista. Nada tira pontos: errar faz parte. O passaporte guarda os carimbos, os adesivos e as preferências.',
    },
    {
      icon: 'sparkles',
      title: 'Dolores, a gata guia',
      text: 'Ela fica num canto da tela, tem treze estados, de acenando a dormindo, segue o ponteiro com os olhos e dá dicas quando a página fica parada. Às vezes diz uma de 32 frases sobre a dona, como "Você me lembra a minha dona!".',
    },
    {
      icon: 'palette',
      title: '51 paletas que se revezam',
      text: 'O site troca de paleta a cada 4 minutos e também quando a pessoa conclui uma lição, sobe de nível ou ganha um adesivo, numa revelação em círculo. A galeria `/cores/` mostra as 51 com os números de contraste.',
    },
    {
      icon: 'target',
      title: 'Quanto custa cada caminho',
      text: 'Na hora de escolher o caminho, uma tabela compara o custo de começar, de manter no ar e de ter endereço próprio. A conclusão da pesquisa: os quatro caminhos levam a um hub publicado sem pagar nada, e o único gasto opcional é o domínio, de R$ 40 por ano.',
    },
    {
      icon: 'search',
      title: 'Ferramentas, glossário e busca',
      text: 'São cinco ferramentas interativas (verificador de contraste, montador de paleta, simulador 60-30-10, escala tipográfica e teste de leitura), um glossário com 168 termos e uma busca que roda no próprio navegador.',
    },
  ],
  inside: {
    title: 'Páginas prontas e estado no navegador',
    text: [
      'O site é estático: o Astro, um gerador de sites, monta as 100 páginas antes de publicar, e não há servidor nem banco de dados. As lições são arquivos de texto em MDX (Markdown com componentes), conferidos por um esquema que avisa em português quando falta alguma coisa.',
      'A interatividade usa componentes nativos do navegador, como `<gato-guia>` e `<desafio-licao>`, sem React nem outra biblioteca de interface. Os módulos não chamam uns aos outros: emitem eventos com o prefixo `rota:`, como `rota:licao-concluida`, e quem tem interesse reage. É assim que concluir uma lição dá pontos, sobe o nível, troca as cores e faz a gata comemorar.',
      'Um script transforma cada paleta num tema e calcula o papel de cada cor, com o contraste garantido: a superfície escura é escurecida até 12:1 com o texto claro, e toda cor usada em texto é ajustada até 4,5:1. No navegador, trocar de paleta é só mudar um atributo no `<html>`.',
      'O progresso fica no `localStorage`, o espaço que cada site tem no navegador. Um script pequeno, no topo de cada página, aplica a paleta e o pedido de menos movimento antes da primeira pintura, para a cor não piscar.',
    ],
    diagram: 'rota-do-hub',
  },
  decisions: [
    {
      title: 'Nenhuma lição diz o que a pesquisa não diz',
      why: 'Planos gratuitos e preços mudam rápido, e muito do que se lê sobre sites vem de quem vende a ferramenta. Cada lição mostra, em "De onde vem isso", as seções da pesquisa em que se baseia. Revisores que não escreveram o texto conferiram tudo, frase a frase, e fizeram 346 correções.',
    },
    {
      title: 'Estático, sem cadastro e sem cookies',
      why: 'É a arquitetura que a própria pesquisa recomenda para hubs: páginas prontas, quase nenhum JavaScript, hospedagem gratuita e nenhum servidor para invadir. Sem cadastro, nenhum dado pessoal sai do aparelho de quem estuda.',
      tradeoff: 'Limpar o navegador ou trocar de aparelho apaga o progresso. Por isso o passaporte tem "Baixar uma cópia".',
    },
    {
      title: 'Uma viagem como metáfora',
      why: 'Os módulos são destinos num mapa, as lições rendem carimbos e as conquistas viram adesivos num passaporte. Os doze destinos têm nomes de lugar, como Vale das Cores, Praia dos Blocos e Porto do Farol, e cada um ganhou um adesivo próprio.',
    },
    {
      title: 'Errar não tira pontos',
      why: 'Não há vidas nem perda de pontos. Levar o desafio até o fim conclui a lição com qualquer número de acertos, e, quando a pessoa erra, a gata consola, nunca dá bronca.',
    },
    {
      title: 'Contraste garantido nas 51 paletas',
      why: 'Com cores que mudam sozinhas, não dá para conferir à mão. Um teste confere 181 pares de texto e fundo em cada paleta, num total de 5.842 conferências, e todas passam. Onde o design system de referência reprovava no contraste, a acessibilidade venceu.',
    },
    {
      title: 'Adesivos que mudam de cor',
      why: 'As 58 ilustrações são adesivos de viagem em SVG, pintados só com as cinco cores da paleta e três tintas fixas. Cada uma passa no teste do cinza: com as cores trocadas por tons de cinza, o desenho continua legível.',
    },
    {
      title: 'A gata sai da frente',
      why: 'No celular, quando a gata está em cima de um botão, link ou campo, ela se abaixa até mostrar só as pontas das orelhas, e o toque passa para o controle de baixo.',
    },
    {
      title: 'O custo na hora da escolha',
      why: 'Dinheiro é a primeira dúvida de quem quer criar um hub. Por isso a etapa Caminho mostra quanto cada caminho custa antes da escolha. Os valores aparecem como a pesquisa os escreve, em reais ou em dólares, com a data da conferência.',
    },
  ],
  demo: {
    kind: 'palette-swap',
    title: 'Trocar cores',
    text: 'Uma miniatura do topo do site, com as 51 paletas de verdade. Cada toque sorteia uma paleta que ainda não saiu, como o site faz, e mostra o contraste do texto no botão e no fundo escuro.',
  },
  visual: {
    intro:
      'O visual segue um design system de tela creme, títulos em serifa e superfícies em camadas, e ganha cor com as paletas. Toda ilustração é um adesivo de viagem original, com borda branca recortada, cores chapadas e texturas leves, desenhado para mudar de cor junto com a paleta.',
    palette: [
      { name: 'Creme', hex: '#FAF9F5', role: 'Tela de fundo' },
      { name: 'Creme suave', hex: '#F5F0E8', role: 'Faixas e superfícies' },
      { name: 'Cartão', hex: '#EFE9DE', role: 'Cartões' },
      { name: 'Tinta', hex: '#141413', role: 'Títulos e texto forte' },
      { name: 'Texto', hex: '#3D3D3A', role: 'Texto corrido' },
      { name: 'Pelo da gata', hex: '#8D9099', role: 'O cinza de Dolores' },
      { name: 'Olhos da gata', hex: '#F6C81E', role: 'Os olhos amarelos' },
      { name: 'Nariz', hex: '#E98B9C', role: 'Nariz e orelhas por dentro' },
    ],
    paletteNote: 'Estas são as cores fixas, que não mudam com a paleta.',
    paletteWall: {
      title: 'As 51 paletas',
      text: 'Criei as 51 no Adobe Color. O site sorteia uma delas a cada troca, e um script dá um papel a cada cor: superfície escura, botão e três acentos.',
      palettes: paletasRota.map((p) => ({ name: p.nome, colors: p.cores })),
    },
    typography: [
      {
        family: 'Cormorant Garamond',
        css: 'var(--font-display)',
        role: 'Títulos, no peso 500',
        sample: 'Aprenda a criar seu hub de conteúdo',
        weight: 500,
      },
      {
        family: 'Inter',
        css: 'var(--font-sans)',
        role: 'Texto e interface (fonte variável)',
        sample: 'Concluir uma lição rende 20 pontos.',
        variable: true,
        range: [300, 800],
      },
      {
        family: 'JetBrains Mono',
        css: 'var(--font-mono)',
        role: 'Blocos de código, só nas páginas que mostram código',
        sample: '<gato-guia>',
        weight: 400,
        note: 'As três fontes ficam no próprio site, sem pedido ao Google Fonts.',
      },
    ],
    tokens: [
      {
        title: 'Raios',
        items: [
          { name: 'Botões e campos', value: '8px' },
          { name: 'Cartões', value: '12px' },
          { name: 'Molduras', value: '16px' },
          { name: 'Selos', value: 'pílula' },
        ],
      },
      {
        title: 'Leitura',
        items: [
          { name: 'Texto', value: '18px' },
          { name: 'Entrelinha', value: '1,6' },
          { name: 'Medida', value: '39rem' },
          { name: 'Alvo de toque', value: '44px' },
        ],
      },
      {
        title: 'Movimento',
        items: [
          { name: 'Toque', value: '120 ms' },
          { name: 'Entrada', value: '240 ms' },
          { name: 'Carimbo', value: '480 ms' },
        ],
      },
    ],
    mark: 'A marca é a própria gata: o rosto de Dolores, com borda branca de adesivo, orelhas altas com o rosa por dentro, olhos amarelos com pupila em gota e boca em "w". O mesmo desenho, simplificado para ler bem de 16 a 32 pixels, é o logotipo, o ícone da aba do navegador e o botão "Mostrar a gata".',
    markBackground: 'radial-gradient(120% 90% at 15% 0%, #4a1080 0%, #2e0259 55%, #1b0136 100%)',
    galleryTitle: 'Telas',
    galleryNote:
      'Capturas do site publicado, feitas em 19/11/2026, cada uma numa paleta diferente. Algumas mostram um progresso de demonstração, gravado no navegador só para as capturas.',
    gallery: [
      {
        src: celularInicio,
        alt: 'Página inicial no celular, na paleta Baile de máscaras: "Boas-vindas de volta", o título "Aprenda a criar seu hub de conteúdo, do zero ao ar", os botões "Continuar de onde parei" e "Voltar ao meu hub" e a próxima parada sugerida.',
        caption: 'A página inicial, para quem volta',
        frame: 'phone',
        story: {
          step: 'Começar a viagem',
          text: 'A página inicial explica o que é um hub e leva aos dois modos. Para quem volta, o botão vira "Continuar de onde parei".',
          icon: 'house',
        },
      },
      {
        src: celularMapa,
        alt: 'O mapa da rota no celular, na paleta Pipa ao vento: os destinos numerados em sequência sobre uma trilha, Praça Central, Biblioteca, Estação de Partida, Vale das Cores e Cidade das Letras, cada um com o seu adesivo e as lições concluídas.',
        caption: 'O mapa dos destinos',
        frame: 'phone',
        story: {
          step: 'Escolher um destino',
          text: 'O mapa mostra os 12 destinos em sequência, com o progresso de cada um. A ordem é uma sugestão, e nada fica bloqueado.',
          icon: 'map-pin',
        },
      },
      {
        src: celularDesafio,
        alt: 'Desafio de uma lição no celular, na paleta Peixinho dourado: a pergunta "O que decide a ordem das páginas num hub de conteúdo?", a resposta "O assunto de cada página" marcada como certa e a explicação, embaixo de "Certo!".',
        caption: 'O desafio no fim da lição',
        frame: 'phone',
        story: {
          step: 'Responder ao desafio',
          text: 'No fim de cada lição, de 3 a 5 perguntas com resposta na hora e uma explicação. Errar não tira pontos.',
          icon: 'list-checks',
        },
      },
      {
        src: celularPassaporte,
        alt: 'O passaporte no celular, na paleta Trio elétrico: a capa roxa com o rosto de Dolores e os botões "Álbum" e "Ajustes", e o começo da página de identidade.',
        caption: 'O passaporte',
        frame: 'phone',
        story: {
          step: 'Colecionar no passaporte',
          text: 'Os carimbos dos destinos, os adesivos das conquistas, o nível e a sequência de dias ficam no passaporte.',
          icon: 'award',
        },
      },
      {
        src: celularConstruir,
        alt: 'O modo Construir no celular, na paleta Blocos de montar: "O seu hub, passo a passo", o cartão "Onde você parou", com 2 de 10 paradas, e Dolores de boné de obra dizendo "Boas-vindas de volta! Daqui seguimos para conteúdo."',
        caption: 'O modo Construir',
        frame: 'phone',
        story: {
          step: 'Construir o próprio hub',
          text: 'No modo Construir, dez paradas levam da ideia ao hub publicado e medido. Tudo o que a pessoa escreve fica salvo no navegador.',
          icon: 'wrench',
        },
      },
      {
        src: inicio,
        alt: 'Página inicial no computador, na paleta Baile de máscaras: o título "Aprenda a criar seu hub de conteúdo, do zero ao ar", os botões "Quero estudar" e "Quero construir", um adesivo grande com a Biblioteca e a Praça Central e Dolores no canto, dizendo "Oi! Eu sou Dolores, a gata guia. Quer uma dica? É só clicar em mim."',
        caption: 'A página inicial, na primeira visita',
        frame: 'browser',
      },
      {
        src: mapa,
        alt: 'O mapa da rota no modo Estudar, na paleta Pipa ao vento: um quadro azul com a trilha tracejada e os adesivos dos destinos, como Praça Central, Biblioteca, Estação de Partida, Vale das Cores, Observatório, Praia dos Blocos, Oficina de Peças e Cidade das Letras, cada um com as lições concluídas.',
        caption: 'O mapa dos 12 destinos',
        frame: 'browser',
      },
      {
        src: destino,
        alt: 'Página do destino Vale das Cores, na paleta Entardecer violeta: o adesivo redondo do vale e a ficha da parada 4 de 12, com 6 lições, cerca de 49 minutos e nível iniciante.',
        caption: 'Um destino: o Vale das Cores',
        frame: 'browser',
      },
      {
        src: licao,
        alt: 'Lição "Contraste: o número que decide se dá para ler", na paleta Jade e tangerina, com o adesivo de contraste, a ficha da lição e o bilhete "Ao final, você vai saber".',
        caption: 'Uma lição',
        frame: 'browser',
      },
      {
        src: desafio,
        alt: 'Desafio da lição "O que é um hub", na paleta Lavanda e brasa: a resposta certa marcada e a explicação "Certo!", o aviso de um adesivo novo, "Palavra por palavra", e Dolores comemorando: "Isso! Você pensa rápido, igualzinho à minha dona."',
        caption: 'Um acerto, com a gata comemorando',
        frame: 'browser',
      },
      {
        src: gataPoses,
        alt: 'Vitrine da gata guia no guia de estilo, na paleta Guarda-sol listrado: Dolores no estado Comemorando, com brilhos em volta, e os botões dos treze estados, de Parada a Dormindo.',
        caption: 'Os treze estados de Dolores',
        frame: 'browser',
      },
      {
        src: adesivos,
        alt: 'Coleção de adesivos no guia de estilo, na paleta Vestido de chita: 58 de 58 artes, os botões para ver a coleção em outras paletas e em cinza e os adesivos dos destinos.',
        caption: 'A coleção de 58 adesivos',
        frame: 'browser',
      },
      {
        src: paletas,
        alt: 'Galeria de cores, na paleta Lona de circo: os cartões das paletas Vinho e mar, Lona de circo (em uso) e Hibisco ao sol, cada um com as cinco cores, os códigos, os papéis e três contrastes.',
        caption: 'A galeria das 51 paletas',
        frame: 'browser',
      },
      {
        src: album,
        alt: 'Álbum de adesivos do passaporte, na paleta Pavão misterioso: 7 de 13 adesivos conquistados, como Primeiro carimbo, Dia de estrada e Fogueira acesa, e os que faltam, com cadeado.',
        caption: 'O álbum de adesivos',
        frame: 'browser',
      },
      {
        src: carimbos,
        alt: 'Os doze destinos no passaporte, na paleta Parque de diversões: Praça Central e Estação de Partida carimbadas, e os outros com cadeado e o progresso de cada um.',
        caption: 'Os carimbos dos destinos',
        frame: 'browser',
      },
      {
        src: construir,
        alt: 'Visão geral do modo Construir, na paleta Blocos de montar: "O seu hub, passo a passo", o cartão "Onde você parou", com 2 de 10 paradas, e a rota das dez etapas, de Ideia a Chegada.',
        caption: 'As dez paradas do modo Construir',
        frame: 'browser',
      },
      {
        src: custos,
        alt: 'Seção "Quanto custa cada caminho", na paleta Verão retrô: o resumo da pesquisa, a caixa "Quero endereço próprio" e a tabela dos quatro caminhos, com o custo para começar, para manter no ar, com endereço próprio e o total por ano.',
        caption: 'Quanto custa cada caminho',
        frame: 'browser',
      },
      {
        src: ferramentas,
        alt: 'Verificador de contraste, na paleta Festa junina: texto #141413 sobre fundo #FAF9F5, contraste de 17,50:1, uma régua e as aprovações para texto normal, texto grande e corpo de textos longos.',
        caption: 'O verificador de contraste',
        frame: 'browser',
      },
      {
        src: pagina404,
        alt: 'Página de erro 404, na paleta Noite de fliperama: Dolores perdida, com um mapa nas patas, o título "Esta parada não está no mapa" e o botão de voltar ao início.',
        caption: 'A página 404',
        frame: 'browser',
      },
    ],
  },
  tech: [
    { group: 'Site', items: ['Astro 7', 'MDX', 'TypeScript', 'Componentes web nativos', 'CSS com variáveis'] },
    { group: 'Busca e conteúdo', items: ['Pagefind', 'Prism', 'Esquemas de conteúdo'] },
    { group: 'Qualidade', items: ['Testes do Node', 'axe-core', 'Playwright', 'Teste de contraste das paletas'] },
    { group: 'Publicação', items: ['Cloudflare Workers', 'Wrangler', 'Política de segurança de conteúdo (CSP)'] },
    { group: 'Construção', items: ['Agentes de IA com modelos Claude', 'Adobe Color'] },
  ],
  skills: [
    {
      title: 'Direção de produto',
      text: 'Escrever os requisitos, decidir o que entra e pedir ajustes depois de ver a plataforma pronta.',
    },
    {
      title: 'Coordenação de agentes de IA',
      text: 'Dividir o trabalho em frentes, cada uma dona dos próprios arquivos, com revisões independentes e entregas a cada marco.',
    },
    {
      title: 'Cor e acessibilidade',
      text: 'Criar 51 paletas e exigir que todas passassem no teste de contraste, sem exceção.',
    },
    {
      title: 'Gamificação',
      text: 'Montar um jogo que motiva sem punir, com pontos, níveis, sequência de dias, adesivos e comemorações.',
    },
    {
      title: 'Pesquisa aplicada',
      text: 'Transformar dois documentos de pesquisa em 59 lições sem dizer nada que a pesquisa não diz.',
    },
  ],
  results: {
    metrics: [
      { value: 59, label: 'lições em 12 destinos, com 279 perguntas de desafio' },
      { value: 51, label: 'paletas, todas aprovadas no teste de contraste' },
      { value: 828, label: 'testes automáticos, todos aprovados' },
      { value: 5842, label: 'conferências de contraste entre texto e fundo' },
    ],
    highlights: [
      'O teste de acessibilidade com o axe-core fez 174 análises (29 tipos de página, 3 paletas, no computador e no celular) e não achou nenhuma violação.',
      'Nenhuma página rola de lado numa tela de 320 pixels, e o JavaScript de cada página fica abaixo do limite de 60 KB.',
      'Revisores que não escreveram o conteúdo conferiram as 59 lições e as 12 páginas por caminho contra a pesquisa, com 346 correções.',
      'A plataforma foi publicada em 15/11/2026 na Cloudflare, sem custo, pelo mesmo tipo de caminho gratuito que ela ensina.',
    ],
  },
  lessons: [
    {
      title: 'Cópias de trabalho somem num reinício',
      text: 'As cópias das frentes ficavam na pasta temporária do macOS, que o sistema limpa ao reiniciar, e catorze frentes se perderam. O trabalho de sete foi refeito a partir do registro das operações de arquivo. Depois disso, as cópias passaram para uma pasta dentro do próprio projeto, com entregas a cada marco.',
    },
    {
      title: 'A medida de leitura',
      text: 'Com a unidade `ch`, que mede a largura do zero, as linhas de texto ficavam com 84 caracteres em média, acima do recomendado. A largura de leitura passou a ser de 39rem.',
    },
    {
      title: 'O peso do CSS',
      text: 'O Astro põe numa página o estilo de todo componente que ela importa, e cada lição baixava o estilo dos geradores. Com os componentes divididos por página, o CSS de uma lição caiu de 60 KB para cerca de 39 KB.',
    },
    {
      title: 'Cor clara como traço fino',
      text: 'Em várias paletas, a cor primária é clara e some como traço fino sobre o creme. Os gráficos que informam passaram a usar as variantes de texto, que têm contraste garantido.',
    },
  ],
  next: [
    'Ligar o repositório à Cloudflare, para publicar a cada envio sem passar pelo meu computador',
    'Escolher o nome definitivo, já que "Rota do Hub" ainda é provisório',
    'Testar com quem usa a plataforma se a organização por tema funciona melhor que a por data, como sugere o referencial teórico',
    'Escrever mais lições nos módulos que têm só três',
  ],
  sources:
    'README, CONTEXT, CHANGELOG e a pasta docs/ do repositório da Rota do Hub (privado), o código dele e o site publicado, capturado em 19/11/2026.',
};

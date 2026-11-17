# Portfólio de Carlos Michael

Site pessoal de **Carlos Michael da Silva Sousa**, publicado em <https://seinenk.github.io>.
É um site estático feito com [Astro](https://astro.build): não envia framework para o navegador,
só HTML, CSS e um script pequeno de interações.

## Como rodar

Precisa do Node.js 22.23 ou mais novo.

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run dev` abre o site em <http://localhost:4321> e recarrega a cada alteração.
`npm run build` gera a versão final em `dist/`; `npm run preview` serve essa versão.

## Onde fica cada coisa

| Caminho | Conteúdo |
| --- | --- |
| `src/data/profile.ts` | **O texto do site**: sobre, atuação, formação, prêmios, eventos, competências e links. A fonte é o Currículo Lattes. |
| `src/data/projects/` | Um arquivo por projeto, com o estudo de caso completo (veja "Páginas de projeto" abaixo). |
| `src/data/testimonials.ts` | Os depoimentos de clientes (veja "Depoimentos" abaixo). |
| `src/pages/` | As páginas: `index` (início), `projetos` (lista), `projeto/[slug]` (uma página por projeto) e `404`. |
| `src/components/` | Cabeçalho, rodapé, cartões e as seções da página inicial (`home/`). |
| `src/themes/` | O sistema de temas: paletas, regras de contraste e geração das variáveis de cor. |
| `src/styles/` | Design system: tokens (tipografia, espaços, raios), base, componentes e movimento. |
| `src/scripts/site.ts` | Interações: tema, paleta, pausa das animações, menu, animações ao rolar, contadores. |
| `src/assets/images/` | Fotos e imagens. O Astro gera versões otimizadas (WebP em vários tamanhos). |
| `public/` | Arquivos servidos como estão: favicon, ícones, imagem de compartilhamento, robots.txt. |
| `ferramentas/retrato/` | Os dois scripts que geram o retrato recortado do topo da página inicial. |
| `ferramentas/og/` | O script que gera a imagem de compartilhamento (`public/og-image.jpg`). |

## Páginas de projeto

Cada projeto tem um estudo de caso em `/projeto/<nome>`, gerado a partir de um arquivo em
`src/data/projects/`. A estrutura segue o que se recomenda para estudos de caso de portfólio:
resumo rápido no topo (papel, período, plataforma), contexto, desafio, processo, funções,
como funciona por dentro, decisões com os porquês, uma demonstração, construção visual
(cores, tipografia, design system e telas), tecnologias, habilidades, resultados, aprendizados
e o próximo projeto. Só aparecem as seções que o projeto preenche.

As seções ficam numa página só, uma abaixo da outra, organizadas em tópicos por área de
atuação. Uma barra de abas fixa no alto leva direto ao começo de cada tópico:

| Aba (tópico) | Seções |
| --- | --- |
| Resumo | Contexto, funções, vídeo e resultados |
| Pesquisa e estruturação | Desafio, por dentro e decisões |
| UX/UI | Demonstração e construção visual |
| Construção | Processo, testes em campo e tecnologias (e a demonstração, quando ela é rodar testes) |
| Aprendizado | Habilidades, aprendizados, próximos passos e créditos |

Um tópico só aparece se o projeto tem alguma seção dele, e cada um começa com o próprio nome.
As abas são links (`#aba-ux-ui`) e funcionam sem JavaScript; com ele, a barra acompanha a
leitura e marca o tópico que está na tela. No fim de cada tópico há os botões de voltar ao
topo, ir à próxima aba (com o nome dela) e, a partir da segunda, voltar à anterior. O sumário
lateral lista todas as seções; no celular, a barra de abas faz esse papel. O
agrupamento fica no topo de `src/pages/projeto/[slug].astro` (`groups`).

Para incluir um projeto:

1. Crie `src/data/projects/<nome>.ts` copiando um dos existentes (o tipo `CaseStudy` em
   `types.ts` explica cada campo). Nos textos, `código` vira código e `**palavra**` vira destaque.
2. Acrescente o projeto à lista de `src/data/projects/index.ts`, na posição em que deve aparecer.
3. Imagens vão em `src/assets/images/projetos/<nome>/` e entram em `visual.gallery` com texto
   alternativo e legenda. A moldura (`frame`) é `'phone'` para prints de celular, `'browser'`
   para telas largas, `'square'` para ícones, `'photo'` para fotos, que ficam todas na mesma
   altura, cada uma na sua proporção, e `'poster'` para imagens em pé sem moldura de aparelho
   (telas de loja, por exemplo).
4. A ilustração do cartão (`art`) e o diagrama de "Por dentro" ficam em
   `src/components/ProjectArt.astro` e `src/components/case/ProjectDiagram.astro`; o desenho
   da marca, quando existe, fica em `src/components/case/` (como `EfiplaMark.astro`).
5. Para um "antes e depois", use `demo.kind: 'before-after'` com as duas imagens em
   `demo.compare` (`frame: 'phone'` para prints de celular, `'browser'` para telas largas).
   A divisória começa no meio; se o meio cortar um rosto ou o título, mude com `start`
   (em porcentagem, como `start: 40`).

Recursos opcionais da construção visual:

- `visual.appThemes`: as cores de destaque de um app, com os papéis do Material 3. Liga a
  miniatura interativa (`ThemePlayground.astro`), que hoje reproduz a aba Combate do EFIPLA.
- `visual.markBackground` (fundo do bloco da marca), `visual.galleryTitle` (título da galeria,
  "Telas" por padrão) e `visual.galleryNote` (observação sobre as telas da galeria).
- `fieldwork`: testes fora do laboratório, com texto e fotos. Vira a seção "Em campo", na aba
  Construção, com a mesma galeria das telas (a Bee Sense usa para o teste de campo).
- `video`: um vídeo do YouTube (`youtube` é o identificador; `vertical: true` para Shorts).
  Até alguém tocar para assistir, a página mostra um pôster com a ilustração do projeto e não
  faz nenhuma requisição ao YouTube; o player vem do `youtube-nocookie.com`.
- `fonts`: fontes que só a página usa, para as amostras de tipografia do projeto. Os arquivos
  são declarados em `astro.config.mjs`, e o `@font-face` sai de `src/utils/page-fonts.ts` numa
  folha que só liga quando a seção visual chega perto da tela, para quem não rola até lá não
  baixar nada a mais.

As fontes do EFIPLA em `src/assets/fonts/efipla/` são recortes das fontes do Google Fonts
(licença OFL, arquivos latinos do @fontsource) com só os caracteres que a página usa: a Rubik
Distressed inteira tem 196 KB, o recorte tem 9 KB. Se mudar os textos das amostras ou da
miniatura, gere de novo com o `pyftsubset` (fonttools), por exemplo:

```bash
pyftsubset rubik-distressed-latin-400-normal.woff2 --text="EFIPLAa" --flavor=woff2 --layout-features='*' --output-file=src/assets/fonts/efipla/rubik-distressed.woff2
```

Efeitos das páginas: transição do cartão para o topo da página (View Transitions), barra de
abas com uma pílula que desliza até o tópico que está sendo lido, sumário que acompanha a leitura, linha do tempo que se preenche ao rolar, cores que se copiam com um clique,
amostras de fonte variável, galeria com caixa de luz, comparação antes/depois, o Dino Runner
jogável e a miniatura de temas do EFIPLA. Tudo funciona com teclado e fica parado quando o
movimento está desligado.

Partes mais visuais, inspiradas em apresentações de portfólio:

- **Topo**: os temas do projeto (`tags`) em pílulas de contorno e o resumo rápido em fichas.
- **Funções**: mosaico em que a primeira função ocupa duas colunas.
- **Resultados**: os números em fichas de vidro levemente inclinadas, sobre um anel que se
  desenha quando a seção aparece.
- **Decisões** e **cores**: cartões em escada; as cores ganham um número num círculo.
- **Tipografia**: atrás de cada "Aa", uma cópia só de contorno tracejado.
- **Processo**: em telas largas, um caminho tracejado no meio com as etapas em caixas
  alternando dos dois lados.
- **Como se usa** (`ScreenStory.astro`): nos apps, as telas de celular que têm `story` (nome da
  etapa, uma ou duas frases e um ícone) viram um passo a passo antes da galeria. Cada etapa tem
  o celular com moldura fina, uma anotação numerada e um traço com ponto ligando os dois; um fio
  tracejado leva de uma etapa à seguinte e se desenha conforme a página rola. Em telas largas
  os celulares alternam de lado, com as anotações no meio; no celular, as etapas ficam
  empilhadas. Use de 3 a 5 etapas, na ordem de uso.
- **Telas** (`ScreenShowcase.astro`): nos sites, quando há 2 ou mais telas `browser`, uma
  vitrine com as janelas de navegador sobrepostas, um caminho tracejado e as `tags` do projeto
  flutuando por cima.
- Nas duas, as imagens são decorativas: as telas, com texto alternativo e legenda, continuam na
  galeria logo abaixo. No passo a passo, o nome e o texto de cada etapa são lidos normalmente
  pelos leitores de tela.
- **Depoimentos**: quando há depoimentos sobre o projeto, eles aparecem no fim do Resumo.

## Depoimentos

Ficam em `src/data/testimonials.ts`. Cada depoimento tem foto (opcional), nome, o que a pessoa
faz hoje, uma forma de contato, uma nota de 0 a 10 (aceita meio ponto) e o projeto a que se
refere (`project`, o nome do arquivo em `src/data/projects/`). Eles aparecem na página inicial,
numa faixa que corre sozinha e para quando o ponteiro ou o foco do teclado chega nela, e na
página do projeto correspondente.

Os seis que estão lá hoje são **exemplos** (`sample: true`): aparecem com o selo "Exemplo",
sem link de contato, e a seção avisa que são exemplos. Para publicar um depoimento real, troque
um exemplo pelo texto que a pessoa enviou e autorizou publicar, e tire o `sample: true`. Sem
foto, o cartão mostra as iniciais do nome; com foto, coloque o arquivo em
`src/assets/images/depoimentos/` e importe no arquivo de dados (há um exemplo no comentário do
topo). Quando nenhum depoimento for exemplo, o aviso some sozinho.

## Como escrever os textos

Os textos falam com quem não é da área (um recrutador, o dono de um pequeno negócio):

- Primeira pessoa ("desenhei", "desenvolvi"), frases curtas e com verbo.
- Termo técnico explicado na primeira vez que aparece na página, em poucas palavras:
  "o servidor (backend) que guarda as leituras".
- Nenhum travessão (— ou –). Períodos por extenso: "2025 a 2026", "2024 até hoje", "desde 2024".
  Sobretítulos numerados com ponto mediano: "01 · Sobre".
- Sem frases de efeito: nada de "do código à comunidade", "da ideia ao produto", listas de três
  só pelo ritmo ou títulos que soam como provérbio. O título diz do que a seção trata.
- Fatos (nomes, datas, números, códigos de requisito) nunca mudam numa revisão de texto.

Para conferir travessões antes de publicar:

```bash
grep -rn "[—–]" src
```

## Retrato do topo

O retrato da página inicial (`src/assets/images/carlos-recorte.webp`) é a foto original
(`carlos-retrato.jpg`) recortada do fundo e com um duotone da paleta (sombras em grafite, luzes
em areia clara). O recorte usa o Vision do próprio macOS, sem enviar a foto a nenhum serviço.
Para refazer com outra foto:

```bash
swift ferramentas/retrato/mascara.swift src/assets/images/carlos-retrato.jpg /tmp/mascara
```

```bash
node ferramentas/retrato/recorte.mjs src/assets/images/carlos-retrato.jpg /tmp/mascara src/assets/images/carlos-recorte.webp
```

A foto original aparece no cartão "Vamos conversar", no topo. A imagem de compartilhamento usa
o recorte (veja abaixo).

As capturas da página do projeto Portfólio (`src/assets/images/projetos/portfolio/depois-*.webp`)
mostram o topo da página inicial: 1328 × 808 px no computador, nos temas claro e escuro, e
390 × 844 px no celular, no tema claro. Se o topo mudar, tire as capturas de novo nesses
tamanhos, com o movimento reduzido (tudo parado e visível), a partir do site gerado
(`npm run build` e `npm run preview`), que não tem a barra de ferramentas do modo de
desenvolvimento.

## Imagem de compartilhamento

A imagem que aparece quando alguém compartilha um link do site (`public/og-image.jpg`,
1200 × 630 px) repete o topo da página inicial: o bloco taupe, o retrato recortado, o primeiro
nome ao fundo, o sobretítulo com o asterisco, o nome completo e um cartão com o endereço. Ela
é gerada por um script, que desenha a composição no Chrome instalado e salva o JPEG:

```bash
node ferramentas/og/gerar.mjs
```

Com `--tema escuro`, sai a versão grafite. As cores estão no começo do script e são as mesmas
da paleta (variáveis `--c-hero`); se a paleta mudar, atualize as duas. Os textos (nome, cargo,
local e a primeira frase da apresentação) também estão escritos no script: se mudarem em
`src/data/profile.ts`, gere a imagem de novo.

O endereço da imagem nas páginas leva um código tirado do próprio arquivo
(`og-image.jpg?v=...`, em `src/layouts/BaseLayout.astro`). Quando a imagem muda, o código muda
sozinho, e as redes que guardam a prévia pelo endereço, como o Facebook, baixam a nova. Para
uma rede atualizar na hora uma prévia que já foi compartilhada, use a ferramenta dela de
inspecionar links (no Facebook, o Depurador de Compartilhamento; no LinkedIn, o Post
Inspector).

## Design system

O visual segue o `DESIGN-claude.md` (tela editorial, títulos em serifa, botões na cor primária
e faixas escuras de "produto"), com a paleta de cores enviada por Carlos:

| Cor | Hex | Papel principal |
| --- | --- | --- |
| Branco | `#FFFFFF` | Superfícies elevadas no modo claro |
| Névoa | `#EBEBEB` | Texto de destaque no modo escuro |
| Grafite | `#181722` | Texto no modo claro, fundo no modo escuro, faixas escuras |
| Ardósia | `#393F4A` | Texto corrido no modo claro |
| Areia | `#DCD2CC` | Superfícies e botão principal no modo escuro |
| Taupe | `#8A7875` | Destaques, itálicos dos títulos e botão principal no modo claro |

Os tons intermediários (fundos de cartões, bordas, texto secundário) são misturas entre essas
seis cores, calculadas no espaço de cor OKLab.

**Acentos frios.** Para dar vida aos detalhes sem mudar a paleta, a Grafite ganhou dois acentos
calculados a partir dela, no espaço OKLCH, com a mesma luminosidade do taupe (L ≈ 0,60), para
pesarem o mesmo na página:

| Cor | Hex | De onde vem |
| --- | --- | --- |
| Ciano | `#248DAA` | O complemento dos tons quentes: o taupe tem matiz de 29° e a areia, de 53°; os opostos ficam em 209° e 233°. O ciano usa 221°, o meio do caminho. |
| Violeta | `#7E74C0` | O matiz que o grafite já carrega (289°), com mais saturação. |

Eles entram só em detalhes, nunca em blocos grandes: brilhos de fundo, o asterisco dos
sobretítulos, barra de progresso, ícones, etiquetas, a luz que segue o ponteiro, o ponto pulsante de "em
andamento" e os caminhos tracejados. Cada acento tem uma versão forte para texto pequeno
(`cyanStrong`, `violetStrong`), uma de fundo suave (`cyanSoft`, `violetSoft`) e uma clara para as
faixas escuras (`inverseCyan`, `inverseViolet`). O build confere o contraste de todas elas.

**Topo da página inicial.** Os tokens `hero`, `heroDeep`, `onHero`, `onHeroSoft` e `heroAccent`
pintam o bloco atrás do retrato: taupe no modo claro, grafite no escuro.

Fontes, todas servidas pelo próprio site: **Cormorant Garamond** nos títulos, **Inter** no texto
e **JetBrains Mono** no cartão de código. São as substitutas que o próprio documento indica
para Copernicus e StyreneB, que são fontes licenciadas.

## Temas e paletas

O site tem modo claro e escuro. Na primeira visita ele segue o sistema operacional; o botão de
sol e lua no topo troca o modo e guarda a escolha no navegador.

Cada paleta fica num arquivo em `src/themes/palettes/`. **Para criar um tema novo:**

1. Copie `src/themes/palettes/grafite.ts` para um arquivo novo, por exemplo `oceano.ts`.
2. Troque `id`, `name`, `description` e as cores do topo do arquivo pelas da nova paleta.
3. Ajuste os papéis em `light` e `dark` (quais cores viram fundo, texto, botão e destaque).
4. Rode `npm run build`.

A paleta entra no site sozinha: quando houver mais de uma, aparece no topo um botão de paleta
com as amostras de cor, e cada paleta funciona nos modos claro e escuro.

O build confere o contraste de todas as combinações de texto e fundo (critério AA da WCAG 2.2).
Se alguma não passar, ele para e mostra exatamente qual par ajustar, por exemplo:

```
A paleta "oceano" não tem contraste suficiente (WCAG AA):
  • dark: muted sobre surfaceCard = 3.90:1 (mínimo 4.5:1)
```

## Acessibilidade e desempenho

- Navegação completa por teclado, link "Pular para o conteúdo" e foco sempre visível.
- Contraste AA verificado no build para todas as paletas.
- Animações respeitam a preferência "reduzir movimento" do sistema, e o botão de pausa no topo
  desliga todas elas (inclusive a faixa que rola e o texto que se digita sozinho).
- Sem JavaScript, o conteúdo aparece completo, sem animações.
- Fontes e imagens hospedadas no próprio site, sem CDNs nem rastreadores.
- Imagens responsivas em WebP, carregamento preguiçoso fora da primeira tela e fontes com
  pré-carregamento e métricas de fallback ajustadas para evitar saltos de layout.

## Publicação

Cada push na branch `main` roda o workflow `.github/workflows/deploy.yml`, que gera o site e
publica no GitHub Pages. Para isso, em **Settings → Pages → Build and deployment**, a opção
**Source** precisa estar em **GitHub Actions**.

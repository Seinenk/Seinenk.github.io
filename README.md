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
| `src/data/profile.ts` | **Todo o texto do site**: sobre, atuação, formação, projetos, prêmios, eventos, competências e links. A fonte é o Currículo Lattes. |
| `src/pages/` | As páginas: `index` (início), `projetos`, `hobbies` e `404`. |
| `src/components/` | Cabeçalho, rodapé, cartões e as seções da página inicial (`home/`). |
| `src/themes/` | O sistema de temas: paletas, regras de contraste e geração das variáveis de cor. |
| `src/styles/` | Design system: tokens (tipografia, espaços, raios), base, componentes e movimento. |
| `src/scripts/site.ts` | Interações: tema, paleta, pausa das animações, menu, animações ao rolar, contadores. |
| `src/assets/images/` | Fotos e imagens. O Astro gera versões otimizadas (WebP em vários tamanhos). |
| `public/` | Arquivos servidos como estão: favicon, ícones, imagem de compartilhamento, robots.txt. |

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

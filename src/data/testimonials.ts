import type { ImageMetadata } from 'astro';
import fotoSabrina from '../assets/images/depoimentos/sabrina-bortoli-roman.webp';

/**
 * Depoimentos de clientes e parceiros.
 *
 * Os itens com `sample: true` são EXEMPLOS: mostram como a seção fica enquanto os
 * depoimentos reais não chegam. Exemplos aparecem com o selo "Exemplo" e sem link de
 * contato. Assim que existe pelo menos um depoimento real, os exemplos deixam de
 * aparecer no site (veja `publishedTestimonials`), para nunca se misturarem aos reais
 * nem entrarem na nota média. Eles continuam aqui como modelo.
 *
 * Para publicar um depoimento real:
 *
 * 1. Copie um item e preencha com o que a pessoa enviou (e autorizou publicar), sem
 *    `sample: true`.
 * 2. Foto é opcional: coloque o arquivo em src/assets/images/depoimentos/ e importe aqui,
 *    como `fotoSabrina` no topo, e use `photo: fotoSabrina`. Sem foto, o cartão mostra as
 *    iniciais do nome.
 * 3. `project` é o slug do projeto (o nome do arquivo em src/data/projects/). O depoimento
 *    aparece na página inicial e também na página daquele projeto.
 * 4. Depoimento longo: o texto inteiro vai em `full`, um parágrafo por item, e `quote` fica
 *    com um trecho dele, com as palavras exatas da pessoa. A página inicial mostra o trecho
 *    e um link para o texto inteiro, que aparece na página do projeto.
 */

export type ContactKind = 'linkedin' | 'instagram' | 'email' | 'github' | 'whatsapp' | 'site';

export interface Testimonial {
  /** Identificador único, em minúsculas e com hífen. */
  id: string;
  /** Depoimento de exemplo, só para mostrar o desenho da seção. */
  sample?: boolean;
  name: string;
  /** O que a pessoa faz hoje e onde (cargo, empresa, cidade). */
  role: string;
  /** Formação, quando a pessoa quiser mostrar. */
  education?: string;
  /** Foto quadrada, de preferência com pelo menos 240 px de lado. */
  photo?: ImageMetadata;
  /** Forma de contato que a pessoa autorizou mostrar. Sem `href`, aparece só o nome da rede. */
  contact?: { kind: ContactKind; label: string; href?: string };
  /** Nota de 0 a 10 (aceita meio ponto, como 9.5). */
  rating: number;
  /** Slug do projeto a que o depoimento se refere. */
  project: string;
  /** O depoimento, nas palavras da pessoa (num depoimento longo, um trecho do texto de `full`). */
  quote: string;
  /** O depoimento inteiro, um parágrafo por item, para a página do projeto. */
  full?: string[];
  /** Quando foi dado, por extenso ("março de 2026"). */
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'sabrina-bortoli-roman',
    name: 'Sabrina Bortoli Roman',
    role: 'Educadora em Marcelino Ramos, Rio Grande do Sul',
    education:
      'Licenciada em Pedagogia e Mestra em Educação pela Universidade Federal da Fronteira Sul (UFFS), Campus Erechim',
    photo: fotoSabrina,
    contact: { kind: 'email', label: 'E-mail', href: 'mailto:eusabrinabortoli@gmail.com' },
    rating: 10,
    project: 'trilha-da-protecao',
    quote:
      'Trabalhar com o Carlos foi uma experiência incrível! Ele superou todas as minhas expectativas em relação ao desenvolvimento do site e conseguiu transformar minhas ideias em um resultado ainda mais bonito, funcional e completo do que eu imaginava.',
    full: [
      'Trabalhar com o Carlos foi uma experiência incrível! Ele superou todas as minhas expectativas em relação ao desenvolvimento do site e conseguiu transformar minhas ideias em um resultado ainda mais bonito, funcional e completo do que eu imaginava.',
      'Desde o início, foi extremamente atencioso e receptivo às minhas propostas, demonstrando muito comprometimento em compreender a essência do projeto e encontrar as melhores soluções para concretizá-lo. Sua dedicação, criatividade, disponibilidade e olhar atento aos detalhes fizeram toda a diferença ao longo do processo. Mais do que executar uma proposta, ele se envolveu verdadeiramente com o projeto e trabalhou com muito empenho para entregar o melhor resultado possível.',
      'O desafio era transformar um conhecimento relacionado a uma temática delicada e, muitas vezes, difícil de abordar, em um ambiente digital que possibilitasse às pessoas acessar informações importantes de maneira clara, dinâmica e acessível. E o resultado foi simplesmente fantástico! O site ficou visualmente muito bonito, intuitivo, completo e extremamente fácil de navegar. Destaco especialmente a dinamicidade da plataforma e a forma como os conteúdos foram organizados, tornando o acesso ao conhecimento muito mais atrativo e facilitado.',
      'A entrega foi impecável, tanto pela qualidade do produto final quanto pela experiência durante todo o desenvolvimento. O Carlos foi sempre pontual, prestativo, criativo e muito disposto a acolher sugestões, aperfeiçoar ideias e encontrar soluções. Só tenho a agradecer pelo cuidado e pela dedicação com que conduziu esse trabalho, que teve uma importância muito grande para a concretização da minha pesquisa.',
      'Recomendo seu trabalho de olhos fechados! Foi uma experiência muito positiva e uma parceria que superou minhas expectativas em todos os sentidos. Minha avaliação é 10, porque, sinceramente, não existe nota maior para expressar minha satisfação com o resultado e com todo o processo!',
    ],
    date: 'novembro de 2026',
  },
  {
    id: 'exemplo-agende-ai',
    sample: true,
    name: 'Ana Beatriz Lima',
    role: 'Dona de uma confeitaria',
    contact: { kind: 'instagram', label: 'Instagram' },
    rating: 10,
    project: 'agende-ai',
    quote:
      'Antes eu anotava as encomendas num caderno e sempre faltava ingrediente. Agora vejo os pedidos da semana e o estoque na mesma tela. O Carlos explicou tudo com muita paciência.',
    date: 'março de 2026',
  },
  {
    id: 'exemplo-bee-sense',
    sample: true,
    name: 'João Pedro Alves',
    role: 'Criador de abelhas sem ferrão',
    contact: { kind: 'whatsapp', label: 'WhatsApp' },
    rating: 9.5,
    project: 'bee-sense',
    quote:
      'Não preciso mais abrir a isca para saber se chegou um enxame. O aviso aparece no celular, com a distância de cada isca. As telas são fáceis até para quem mexe pouco com aplicativo.',
    date: 'janeiro de 2026',
  },
  {
    id: 'exemplo-efipla',
    sample: true,
    name: 'Marina Costa',
    role: 'Mestra de RPG e professora de História',
    contact: { kind: 'instagram', label: 'Instagram' },
    rating: 10,
    project: 'efipla',
    quote:
      'Uso a ficha em todas as sessões. Criar personagem ficou rápido, e o combate não para mais a mesa enquanto alguém procura a regra no livro. Funciona até sem internet.',
    date: 'agosto de 2026',
  },
  {
    id: 'exemplo-crohnease',
    sample: true,
    name: 'Lucas Ferreira',
    role: 'Gerente de produto numa startup de saúde',
    contact: { kind: 'linkedin', label: 'LinkedIn' },
    rating: 9,
    project: 'crohnease',
    quote:
      'O Carlos redesenhou o app pensando em quem convive com uma doença crônica. Os lembretes de remédio ficaram claros, e o cadastro ficou bem mais curto.',
    date: 'maio de 2026',
  },
  {
    id: 'exemplo-extractorys',
    sample: true,
    name: 'Rafael Moura',
    role: 'Desenvolvedor Android',
    contact: { kind: 'github', label: 'GitHub' },
    rating: 9,
    project: 'extractorys',
    quote:
      'Eu precisava tirar o instalador de um app do meu celular para testar em outro aparelho. Resolvi em poucos toques, e o progresso aparece até na notificação.',
    date: 'outubro de 2026',
  },
  {
    id: 'exemplo-portfolio',
    sample: true,
    name: 'Camila Rocha',
    role: 'Recrutadora de tecnologia',
    contact: { kind: 'linkedin', label: 'LinkedIn' },
    rating: 10,
    project: 'portfolio',
    quote:
      'Cada projeto mostra o problema, as decisões e o resultado. Em poucos minutos entendi como o Carlos trabalha e o que ele fez em cada etapa.',
    date: 'setembro de 2026',
  },
];

/**
 * Os depoimentos que aparecem no site: só os reais, quando existe pelo menos um; os
 * exemplos, enquanto nenhum real chegou.
 */
export const publishedTestimonials = testimonials.some((t) => !t.sample)
  ? testimonials.filter((t) => !t.sample)
  : testimonials;

/** Depoimentos de um projeto (para a página do projeto). */
export const testimonialsFor = (slug: string) => publishedTestimonials.filter((t) => t.project === slug);

/** Nota com vírgula, como se escreve em português: 9.5 vira "9,5". */
export const formatRating = (rating: number) => rating.toLocaleString('pt-BR', { maximumFractionDigits: 1 });

/** Iniciais para o avatar sem foto: "Ana Beatriz Lima" vira "AL". */
export function initials(name: string): string {
  const parts = name.split(/\s+/).filter((p) => p.length > 2 || /^[A-Z]/.test(p));
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

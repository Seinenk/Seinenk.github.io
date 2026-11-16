import type { ImageMetadata } from 'astro';

/**
 * Depoimentos de clientes e parceiros.
 *
 * Os seis abaixo são EXEMPLOS (sample: true): mostram como a seção fica enquanto os
 * depoimentos reais não chegam. Exemplos aparecem com o selo "Exemplo" e sem link de
 * contato. Para publicar um depoimento real:
 *
 * 1. Copie um item e preencha com o que a pessoa enviou (e autorizou publicar).
 * 2. Tire `sample: true` (ou troque o item de exemplo pelo real).
 * 3. Foto é opcional: coloque o arquivo em src/assets/images/depoimentos/ e importe aqui,
 *    por exemplo `import fotoAna from '../assets/images/depoimentos/ana.webp'`, e use
 *    `photo: fotoAna`. Sem foto, o cartão mostra as iniciais do nome.
 * 4. `project` é o slug do projeto (o nome do arquivo em src/data/projects/). O depoimento
 *    aparece na página inicial e também na página daquele projeto.
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
  /** Foto quadrada, de preferência com pelo menos 240 px de lado. */
  photo?: ImageMetadata;
  /** Forma de contato que a pessoa autorizou mostrar. Sem `href`, aparece só o nome da rede. */
  contact?: { kind: ContactKind; label: string; href?: string };
  /** Nota de 0 a 10 (aceita meio ponto, como 9.5). */
  rating: number;
  /** Slug do projeto a que o depoimento se refere. */
  project: string;
  /** O depoimento, nas palavras da pessoa. */
  quote: string;
  /** Quando foi dado, por extenso ("março de 2026"). */
  date?: string;
}

export const testimonials: Testimonial[] = [
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

/** Depoimentos de um projeto (para a página do projeto). */
export const testimonialsFor = (slug: string) => testimonials.filter((t) => t.project === slug);

/** Nota com vírgula, como se escreve em português: 9.5 vira "9,5". */
export const formatRating = (rating: number) => rating.toLocaleString('pt-BR', { maximumFractionDigits: 1 });

/** Iniciais para o avatar sem foto: "Ana Beatriz Lima" vira "AL". */
export function initials(name: string): string {
  const parts = name.split(/\s+/).filter((p) => p.length > 2 || /^[A-Z]/.test(p));
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

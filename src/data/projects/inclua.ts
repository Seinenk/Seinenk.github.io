import type { CaseStudy } from './types';

/** Fonte: Currículo Lattes (produção técnica). Página enxuta: o Lattes só registra o essencial. */
export const inclua: CaseStudy = {
  slug: 'inclua',
  title: 'INCLUA',
  type: 'Produção técnica',
  period: '2025',
  status: 'Concluído',
  summary:
    'Plataforma de Recursos Pró-Equidade em Políticas Públicas, registrada como material didático e instrucional.',
  tagline: 'Recursos pró-equidade reunidos para quem faz política pública.',
  tags: ['Políticas públicas', 'Equidade', 'Plataforma'],
  featured: true,
  art: 'inclua',
  facts: [
    { label: 'Nome completo', value: 'Plataforma de Recursos Pró-Equidade em Políticas Públicas' },
    { label: 'Ano', value: '2025' },
    { label: 'Registro', value: 'Material didático e instrucional (Lattes)' },
    { label: 'Formato', value: 'Plataforma' },
  ],
  context: [
    'O INCLUA é uma **Plataforma de Recursos Pró-Equidade em Políticas Públicas**: um lugar que reúne materiais para pensar e construir políticas públicas com equidade.',
    'No Currículo Lattes, ela está registrada como produção técnica do tipo material didático e instrucional, em 2025.',
  ],
  features: [
    { icon: 'library', title: 'Recursos reunidos', text: 'Materiais pró-equidade organizados numa plataforma.' },
    { icon: 'scale', title: 'Foco em equidade', text: 'Conteúdo voltado a políticas públicas mais justas.' },
    { icon: 'graduation-cap', title: 'Uso didático', text: 'Registrada como material didático e instrucional.' },
  ],
  tech: [{ group: 'Temas', items: ['Políticas públicas', 'Equidade', 'Material didático'] }],
  sources: 'Currículo Lattes.',
};

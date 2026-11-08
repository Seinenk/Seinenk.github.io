import type { CaseStudy } from './types';

/** Fonte: Currículo Lattes (projeto de pesquisa). */
export const pytest: CaseStudy = {
  slug: 'pytest',
  title: 'Testes de unidade com pytest',
  type: 'Pesquisa',
  period: '2024 — 2025',
  status: 'Concluído',
  summary:
    'Revisão sistemática da literatura sobre melhores práticas e desafios dos testes de unidade em Python com o framework pytest, selecionada em edital de pesquisa do IFPI.',
  tagline: 'O que a literatura diz sobre testar bem em Python.',
  tags: ['Python', 'pytest', 'Revisão sistemática'],
  art: 'pytest',
  facts: [
    { label: 'Tipo', value: 'Revisão sistemática da literatura' },
    { label: 'Período', value: '2024 — 2025' },
    { label: 'Instituição', value: 'IFPI, selecionada em edital de pesquisa' },
    { label: 'Tema', value: 'Testes de unidade em Python com o pytest' },
  ],
  context: [
    'Testes de unidade conferem, uma a uma, as menores partes de um programa, e são a primeira rede de segurança de quem desenvolve. Em Python, o **pytest** é um dos frameworks mais usados para escrevê-los.',
    'A pesquisa reuniu o que a literatura científica diz sobre as **melhores práticas** e os **desafios** desses testes com o pytest. O projeto foi selecionado em edital de pesquisa do IFPI.',
  ],
  challenge: {
    problem:
      'Responder, de forma sistemática, a duas perguntas: o que os estudos apontam como boas práticas e quais dificuldades aparecem ao testar código Python com o pytest?',
    goals: ['Mapear as melhores práticas de testes de unidade com o pytest', 'Levantar os desafios relatados nos estudos'],
  },
  inside: {
    title: 'O método',
    text: [
      'Uma revisão sistemática segue um protocolo definido antes da busca: as perguntas de pesquisa, onde procurar, quais termos usar e quais critérios decidem se um estudo entra ou sai. Isso torna o caminho reproduzível por outra pessoa.',
      'Depois vêm a busca nas bases, a seleção pelos critérios, a extração dos dados de cada estudo aceito e a síntese, que transforma dezenas de leituras numa resposta organizada.',
    ],
  },
  demo: {
    kind: 'pytest-run',
    title: 'O pytest em ação',
    text: 'Uma ilustração de como o pytest mostra uma execução: cada ponto é um teste que passou. Os testes abaixo são exemplos, não os da pesquisa.',
  },
  features: [
    { icon: 'flask-conical', title: 'Melhores práticas', text: 'O que os estudos recomendam ao escrever testes de unidade com o pytest.' },
    { icon: 'search', title: 'Desafios', text: 'As dificuldades que aparecem na literatura ao testar código Python.' },
    { icon: 'book-open', title: 'Método reproduzível', text: 'Protocolo, busca, seleção e síntese documentados.' },
  ],
  tech: [{ group: 'Tema', items: ['Python', 'pytest', 'Testes de unidade', 'Revisão sistemática'] }],
  skills: [
    { title: 'Método científico', text: 'Planejar e conduzir uma revisão sistemática com protocolo.' },
    { title: 'Leitura crítica', text: 'Avaliar estudos com critérios claros de inclusão e exclusão.' },
    { title: 'Qualidade de software', text: 'Entender o papel dos testes de unidade e as práticas do pytest.' },
    { title: 'Escrita acadêmica', text: 'Transformar a síntese dos estudos em texto de pesquisa.' },
  ],
  sources: 'Currículo Lattes.',
};

import type { CaseStudy } from './types';

/**
 * Fontes: os dois certificados de participação do IFPI Campus Picos (editais PROPI 1/2024
 * e 1/2025), o artigo "Testes de Unidade em Software: Uma Revisão Sistemática sobre
 * Práticas, Desafios e Ferramentas na Perspectiva da Engenharia de Software" (maio de
 * 2025) e o Currículo Lattes. A matrícula e os códigos dos certificados não vão para o site.
 */
export const pytest: CaseStudy = {
  slug: 'pytest',
  title: 'Testes de unidade com pytest',
  type: 'Pesquisa',
  period: '2024 a 2025',
  status: 'Concluído',
  summary:
    'Num projeto de pesquisa voluntário do IFPI, participei de uma revisão sistemática sobre testes de unidade. Dos 706 registros de três bases, analisamos 60 estudos e mapeamos práticas, desafios, ferramentas e o fator humano.',
  tagline: 'O que 60 estudos dizem sobre testar bem.',
  tags: ['Revisão sistemática', 'Testes de unidade', 'pytest', 'Engenharia de software'],
  art: 'pytest',
  facts: [
    { label: 'Papel', value: 'Pesquisador voluntário e coautor do artigo' },
    { label: 'Coordenação', value: 'Jucie Xavier da Silva' },
    { label: 'Instituição', value: 'IFPI Campus Picos, editais de pesquisa 1/2024 e 1/2025' },
    { label: 'Carga horária', value: '271 horas em dois ciclos (173 h e 98 h)' },
  ],
  context: [
    'Testes de unidade conferem, uma a uma, as menores partes de um programa. Para quem desenvolve, são a primeira proteção contra erros. Na linguagem Python, uma das ferramentas mais usadas para escrevê-los é o **pytest**, um framework de testes.',
    'Uma revisão sistemática é um levantamento metódico dos estudos sobre um tema. O projeto de pesquisa **Testes de unidade em Python com o framework pytest, melhores práticas e desafios: uma revisão sistemática da literatura** foi selecionado em dois editais de projetos voluntários da Pró-reitoria de Pesquisa, Pós-Graduação e Inovação (PROPI) do Instituto Federal do Piauí (IFPI). Jucie Xavier da Silva coordenou o projeto, e participei como voluntário nos dois ciclos, de julho a dezembro de 2024 e de fevereiro a abril de 2025.',
    'O resultado é o artigo **Testes de Unidade em Software: uma revisão sistemática sobre práticas, desafios e ferramentas na perspectiva da Engenharia de Software**, de maio de 2025. Os autores são Jucie, Ciro, eu e Francisco. Na busca, o foco se ampliou para os testes de unidade em geral, em estudos de 2015 a 2025.',
  ],
  challenge: {
    problem:
      'Queríamos organizar o que os estudos recentes dizem sobre testes de unidade, com um método que outra pessoa possa repetir. Tudo partiu de quatro perguntas de pesquisa (PP1 a PP4).',
    goals: [
      'Quais práticas funcionam para implementar testes de unidade, na indústria ou na academia?',
      'Quais desafios aparecem ao adotar e manter esses testes?',
      'Quais ferramentas e frameworks são usados, avaliados ou propostos?',
      'Quanto os fatores humanos e cognitivos pesam nos resultados?',
    ],
  },
  story: [
    {
      date: '17/07/2024',
      title: 'Edital 1/2024',
      text: 'O projeto entrou no edital de projetos voluntários de pesquisa da PROPI/IFPI. O primeiro ciclo foi até 16/12/2024, com 173 horas.',
    },
    {
      date: '2024',
      title: 'O protocolo',
      text: 'Antes de buscar, definimos as quatro perguntas, as bases, os critérios de inclusão e exclusão e a expressão de busca, como pedem as diretrizes de **Kitchenham**.',
    },
    {
      date: 'Nov. a dez. de 2024',
      title: 'A busca',
      text: 'A expressão de busca rodou no IEEE Xplore, na ACM Digital Library e na Web of Science e trouxe 706 registros.',
    },
    {
      date: '03/02/2025',
      title: 'Edital 1/2025',
      text: 'O projeto foi selecionado de novo para um segundo ciclo, até 30/04/2025, com mais 98 horas.',
    },
    {
      date: 'Maio de 2025',
      title: 'O artigo',
      text: 'Sem as duplicatas, ficaram 523 registros. Lemos 132 por inteiro, e 60 estudos entraram na análise. O artigo traz as respostas às quatro perguntas e as ameaças à validade.',
    },
  ],
  features: [
    {
      icon: 'list-checks',
      title: 'Práticas que funcionam',
      text: 'A geração automática de testes com metaheurísticas (algoritmos de busca) aparece em 14 estudos, e o teste de mutação, que insere erros de propósito, em 11. Depois vêm os testes dirigidos por modelo (8), o TDD, ou desenvolvimento guiado por testes (6), e os testes exploratórios (5).',
    },
    {
      icon: 'target',
      title: 'Os desafios',
      text: 'O problema do oráculo, saber se o resultado está certo, aparece em 12 estudos. Depois vêm a curva de aprendizado das ferramentas (10), a documentação fraca (9) e a dificuldade de entender as falhas (7).',
    },
    {
      icon: 'wrench',
      title: 'As ferramentas',
      text: 'O JUnit aparece em 18 dos 60 estudos, o Robolectric em 6 e o SmartUnit em 4. Outros 10 usam frameworks próprios ou adaptados a uma área.',
    },
    {
      icon: 'users',
      title: 'O fator humano',
      text: 'Treze estudos tratam do lado humano: o esforço de entender os testes, a frustração com ferramentas pouco claras e a falta de consenso sobre o que é um bom teste.',
    },
    {
      icon: 'layers',
      title: 'Oito técnicas mapeadas',
      text: 'Classificamos cada técnica pelo tipo e pela frequência nos 60 estudos. Mutação, cobertura estrutural (quanto do código os testes percorrem) e frameworks de teste aparecem em 16 ou mais.',
    },
    {
      icon: 'shield-check',
      title: 'Os limites do estudo',
      text: 'O artigo termina com as ameaças à validade (o que pode distorcer os resultados) e as medidas contra elas: dupla avaliação, planilhas de controle e extração padronizada.',
    },
  ],
  inside: {
    title: 'O método',
    text: [
      'A revisão seguiu as diretrizes de **Kitchenham** para Engenharia de Software: planejamento, condução e análise, com o protocolo (o plano do estudo) fechado antes da busca. Assim, outra pessoa pode refazer o mesmo caminho.',
      'Em novembro e dezembro de 2024, buscamos nas três bases com a expressão `("unit testing" AND ("best practices" OR "automation" OR "challenges" OR "frameworks" OR "tools")) AND ("software engineering")`. Só entraram estudos revisados por pares (avaliados por outros pesquisadores), em português ou inglês.',
      'A seleção teve três etapas, com dois revisores independentes e consenso nas divergências. Cada estudo aceito virou uma linha numa planilha de extração, com título, autores, ano, tipo, objetivo, metodologia, achados e conclusões. Cada exclusão ganhou uma justificativa.',
    ],
    diagram: 'pytest',
  },
  decisions: [
    {
      title: 'As diretrizes de Kitchenham',
      why: 'São a referência para revisões sistemáticas em Engenharia de Software. Pedem o protocolo pronto antes da busca, o que reduz o viés de ir ajustando o método aos resultados.',
      tradeoff: 'Os termos e as bases escolhidos no começo limitam o que pode aparecer depois.',
    },
    {
      title: 'Três bases de artigos revisados por pares',
      why: 'Escolhemos IEEE Xplore, ACM Digital Library e Web of Science pela relevância e pela cobertura de artigos científicos revisados por pares.',
      tradeoff: 'O que não está nessas bases, ou foi escrito em outras línguas, ficou de fora. O artigo registra isso como limite para generalizar os resultados.',
    },
    {
      title: 'Uma busca ampla para as quatro perguntas',
      why: 'A expressão juntou testes de unidade com práticas, automação, desafios, frameworks e ferramentas, para responder às quatro perguntas numa busca só.',
      tradeoff: 'Por ser ampla, trouxe 706 registros, e a seleção descartou mais de 9 em cada 10 até chegar aos 60.',
    },
    {
      title: 'Dois revisores, decisões por consenso',
      why: 'Dois revisores fizeram a triagem e a leitura de forma independente e resolveram as divergências por consenso, para não depender de uma leitura só.',
      tradeoff: 'A classificação das técnicas ainda passa pelo julgamento de quem lê, e o artigo trata isso como ameaça à validade da conclusão.',
    },
    {
      title: 'O foco foi além do pytest',
      why: 'O projeto começou com foco no pytest, em Python, mas a expressão de busca não fixou linguagem nem framework. Assim, a revisão cobriu os testes de unidade como um todo.',
      tradeoff: 'Por isso o pytest não está entre as ferramentas mais citadas. Os 60 estudos falam mais de JUnit, Robolectric e SmartUnit.',
    },
  ],
  demo: {
    kind: 'pytest-run',
    title: 'O pytest em ação',
    text: 'Esta ilustração mostra como o pytest exibe uma execução. Cada ponto é um teste que passou. Os testes abaixo são só exemplos e não vêm da pesquisa.',
  },
  tech: [
    { group: 'Método', items: ['Revisão sistemática', 'Diretrizes de Kitchenham', 'Protocolo de revisão', 'Planilha de extração'] },
    { group: 'Bases', items: ['IEEE Xplore', 'ACM Digital Library', 'Web of Science'] },
    { group: 'Tema', items: ['Testes de unidade', 'pytest', 'JUnit', 'Teste de mutação', 'TDD'] },
  ],
  skills: [
    { title: 'Método científico', text: 'Planejar e conduzir uma revisão sistemática com protocolo, nas fases que Kitchenham descreve.' },
    { title: 'Busca em bases científicas', text: 'Montar uma expressão booleana (com AND e OR) e buscar no IEEE Xplore, na ACM Digital Library e na Web of Science.' },
    { title: 'Leitura crítica', text: 'Triar centenas de registros com critérios claros de inclusão e exclusão, deixando cada decisão registrada.' },
    { title: 'Síntese', text: 'Transformar 60 leituras em respostas organizadas para quatro perguntas de pesquisa.' },
    { title: 'Qualidade de software', text: 'Conhecer técnicas como teste de mutação, geração automática de testes (SBST), testes dirigidos por modelo (MBT) e TDD, e os limites de cada uma na prática.' },
    { title: 'Escrita acadêmica', text: 'Escrever um artigo completo em equipe, com perguntas de pesquisa e ameaças à validade.' },
  ],
  results: {
    metrics: [
      { value: 706, label: 'registros encontrados em três bases científicas' },
      { value: 60, label: 'estudos analisados no fim da seleção' },
      { value: 271, suffix: ' h', label: 'de pesquisa voluntária, em dois ciclos' },
    ],
    highlights: [
      'Escrevemos o artigo completo “Testes de Unidade em Software: uma revisão sistemática sobre práticas, desafios e ferramentas na perspectiva da Engenharia de Software”, de maio de 2025.',
      'O projeto foi selecionado em dois editais de projetos voluntários de pesquisa da PROPI/IFPI (1/2024 e 1/2025). Recebi certificados de participação do IFPI Campus Picos.',
      'O artigo conclui que, para avançar nos testes de unidade, é preciso juntar as soluções técnicas ao apoio ao fator humano.',
    ],
  },
  lessons: [
    {
      title: 'Ferramenta boa nem sempre é adotada',
      text: 'Os estudos trazem ferramentas fortes, como o SmartUnit, que chegou a 100% de cobertura MC/DC (um critério rigoroso) em mais de 90% das funções testadas na indústria. Mesmo assim, a adoção esbarra em configuração, documentação e cultura.',
    },
    {
      title: 'O problema do oráculo continua aberto',
      text: 'Gerar testes automaticamente já é possível. Falta a ferramenta decidir sozinha se o resultado está certo, problema que apareceu em 12 dos 60 estudos.',
    },
    {
      title: 'A dificuldade de uso afasta desenvolvedores',
      text: 'Num dos estudos, 48% dos desenvolvedores entrevistados não usavam ferramentas automatizadas por dificuldade de configurá-las e de entender os resultados.',
    },
    {
      title: 'O protocolo limita a revisão',
      text: 'Cada escolha do protocolo, como as bases e os termos, define o que a revisão pode encontrar. Por isso o artigo termina listando os próprios limites.',
    },
  ],
  next: [
    'Criar oráculos automatizados com aprendizado de máquina, que verifiquem os resultados de forma adaptativa.',
    'Criar frameworks de teste com suporte cognitivo (apoio ao raciocínio) para quem escreve e mantém os testes.',
    'Fazer estudos longos e multivocais (com fontes de fora da academia), em ciclos reais de desenvolvimento.',
    'Repetir a revisão com outras fontes e refinar o método.',
  ],
  credits: [
    { name: 'Jucie Xavier da Silva', role: 'Coordenação do projeto e coautoria do artigo' },
    { name: 'Ciro', role: 'Coautor do artigo' },
    { name: 'Francisco', role: 'Coautor do artigo' },
  ],
  sources:
    'Certificados de participação do IFPI Campus Picos (editais PROPI 1/2024 e 1/2025), o artigo “Testes de Unidade em Software” (maio de 2025) e o Currículo Lattes.',
};

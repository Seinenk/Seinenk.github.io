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
  period: '2024 — 2025',
  status: 'Concluído',
  summary:
    'Revisão sistemática sobre testes de unidade, num projeto de pesquisa voluntário do IFPI: de 706 registros em três bases a 60 estudos analisados, com as práticas, os desafios, as ferramentas e o fator humano.',
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
    'Testes de unidade conferem, uma a uma, as menores partes de um programa, e são a primeira rede de segurança de quem desenvolve. Em Python, o **pytest** é um dos frameworks mais usados para escrevê-los.',
    'O projeto de pesquisa **Testes de unidade em Python com o framework pytest, melhores práticas e desafios: uma revisão sistemática da literatura** foi selecionado em dois editais de projetos voluntários da Pró-reitoria de Pesquisa, Pós-Graduação e Inovação do IFPI, com coordenação de Jucie Xavier da Silva. Participei como voluntário nos dois ciclos: de julho a dezembro de 2024 e de fevereiro a abril de 2025.',
    'O resultado é o artigo **Testes de Unidade em Software: uma revisão sistemática sobre práticas, desafios e ferramentas na perspectiva da Engenharia de Software**, de maio de 2025, escrito por Jucie, Ciro, Carlos e Francisco. Na busca, o recorte se abriu: em vez de só o pytest, a revisão olhou os testes de unidade em geral, em estudos de 2015 a 2025.',
  ],
  challenge: {
    problem:
      'Organizar o que a literatura recente diz sobre testes de unidade, com um método que outra pessoa possa repetir, em torno de quatro perguntas de pesquisa (PP1 a PP4).',
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
      text: 'O projeto entra no edital de projetos voluntários de pesquisa da PROPI/IFPI. O primeiro ciclo vai até 16/12/2024, com 173 horas.',
    },
    {
      date: '2024',
      title: 'O protocolo',
      text: 'Antes de buscar, ficaram definidos as quatro perguntas, as bases, os critérios de inclusão e exclusão e a expressão de busca, como pedem as diretrizes de **Kitchenham**.',
    },
    {
      date: 'Nov — dez 2024',
      title: 'A busca',
      text: 'A expressão de busca rodou no IEEE Xplore, na ACM Digital Library e na Web of Science e trouxe 706 registros.',
    },
    {
      date: '03/02/2025',
      title: 'Edital 1/2025',
      text: 'O projeto é selecionado de novo, para um segundo ciclo, até 30/04/2025, com mais 98 horas.',
    },
    {
      date: 'Mai 2025',
      title: 'O artigo',
      text: 'Da triagem à síntese: 523 registros únicos, 132 lidos por inteiro e 60 estudos analisados, com as respostas às quatro perguntas e as ameaças à validade.',
    },
  ],
  features: [
    {
      icon: 'list-checks',
      title: 'Práticas que funcionam',
      text: 'Geração automática de testes com metaheurísticas (14 estudos), teste baseado em mutação (11), testes dirigidos por modelo (8), TDD (6) e testes exploratórios (5).',
    },
    {
      icon: 'target',
      title: 'Os desafios',
      text: 'O problema do oráculo, saber se o resultado está certo (12 estudos), a curva de aprendizado das ferramentas (10), a documentação fraca (9) e a dificuldade de entender as falhas (7).',
    },
    {
      icon: 'wrench',
      title: 'As ferramentas',
      text: 'O JUnit aparece em 18 dos 60 estudos; o Robolectric, em 6; o SmartUnit, em 4. Outros 10 usam frameworks próprios ou adaptados ao domínio.',
    },
    {
      icon: 'users',
      title: 'O fator humano',
      text: 'Treze estudos tratam do lado humano: o esforço de entender os testes, a frustração com ferramentas pouco claras e a falta de consenso sobre o que é um bom teste.',
    },
    {
      icon: 'layers',
      title: 'Oito técnicas mapeadas',
      text: 'Cada técnica foi classificada pelo tipo e pela frequência nos 60 estudos. Mutação, cobertura estrutural e frameworks de teste aparecem em 16 ou mais.',
    },
    {
      icon: 'shield-check',
      title: 'Os limites, por escrito',
      text: 'O artigo fecha com as ameaças à validade e o que foi feito contra elas: dupla avaliação, planilhas de controle e extração padronizada.',
    },
  ],
  inside: {
    title: 'O método',
    text: [
      'A revisão seguiu as diretrizes de **Kitchenham** para Engenharia de Software: planejamento, condução e análise, com um protocolo fechado antes da busca. Isso torna o caminho reproduzível por outra pessoa.',
      'A busca, em novembro e dezembro de 2024, usou a expressão `("unit testing" AND ("best practices" OR "automation" OR "challenges" OR "frameworks" OR "tools")) AND ("software engineering")` nas três bases, com estudos revisados por pares, em português ou inglês.',
      'A seleção teve três etapas, com dois revisores independentes e consenso nas divergências. Cada estudo aceito virou uma linha numa planilha de extração, com título, autores, ano, tipo, objetivo, metodologia, achados e conclusões; cada exclusão ganhou uma justificativa.',
    ],
    diagram: 'pytest',
  },
  decisions: [
    {
      title: 'As diretrizes de Kitchenham',
      why: 'São a referência para revisões sistemáticas em Engenharia de Software e pedem o protocolo pronto antes da busca, o que reduz o viés de ir ajustando o método aos resultados.',
      tradeoff: 'O protocolo amarra o estudo: os termos e as bases escolhidos no começo limitam o que pode aparecer depois.',
    },
    {
      title: 'Três bases revisadas por pares',
      why: 'IEEE Xplore, ACM Digital Library e Web of Science foram escolhidas pela relevância e pela cobertura de artigos científicos revisados por pares.',
      tradeoff: 'O que não está nessas bases, ou foi escrito em outras línguas, ficou de fora, e o artigo registra isso como limite da generalização.',
    },
    {
      title: 'Uma busca larga, uma triagem dura',
      why: 'A expressão juntou testes de unidade com práticas, automação, desafios, frameworks e ferramentas, para responder às quatro perguntas numa busca só.',
      tradeoff: 'Por ser larga, trouxe 706 registros, e a seleção descartou mais de 9 em cada 10 até chegar aos 60.',
    },
    {
      title: 'Dois revisores, decisões por consenso',
      why: 'A triagem e a leitura foram feitas por dois revisores de forma independente, com as divergências resolvidas por consenso, para não depender de uma leitura só.',
      tradeoff: 'A classificação das técnicas ainda passa pelo julgamento de quem lê, e o artigo trata isso como ameaça à validade da conclusão.',
    },
    {
      title: 'Do pytest aos testes de unidade em geral',
      why: 'O projeto começou com o recorte do pytest, em Python, mas a expressão de busca não fixou linguagem nem framework, e a revisão cobriu os testes de unidade como um todo.',
      tradeoff: 'Por isso o pytest não está entre as ferramentas mais citadas: os 60 estudos falam mais de JUnit, Robolectric e SmartUnit.',
    },
  ],
  demo: {
    kind: 'pytest-run',
    title: 'O pytest em ação',
    text: 'Uma ilustração de como o pytest mostra uma execução: cada ponto é um teste que passou. Os testes abaixo são exemplos, não os da pesquisa.',
  },
  tech: [
    { group: 'Método', items: ['Revisão sistemática', 'Diretrizes de Kitchenham', 'Protocolo de revisão', 'Planilha de extração'] },
    { group: 'Bases', items: ['IEEE Xplore', 'ACM Digital Library', 'Web of Science'] },
    { group: 'Tema', items: ['Testes de unidade', 'pytest', 'JUnit', 'Teste de mutação', 'TDD'] },
  ],
  skills: [
    { title: 'Método científico', text: 'Planejar e conduzir uma revisão sistemática com protocolo, nas fases que Kitchenham descreve.' },
    { title: 'Busca em bases científicas', text: 'Montar uma expressão booleana e buscar no IEEE Xplore, na ACM Digital Library e na Web of Science.' },
    { title: 'Leitura crítica', text: 'Triar centenas de registros com critérios claros de inclusão e exclusão, deixando cada decisão registrada.' },
    { title: 'Síntese', text: 'Transformar 60 leituras em respostas organizadas para quatro perguntas de pesquisa.' },
    { title: 'Qualidade de software', text: 'Conhecer técnicas como teste de mutação, SBST, MBT e TDD, e os limites de cada uma na prática.' },
    { title: 'Escrita acadêmica', text: 'Escrever um artigo completo em equipe, das perguntas de pesquisa às ameaças à validade.' },
  ],
  results: {
    metrics: [
      { value: 706, label: 'registros encontrados em três bases' },
      { value: 60, label: 'estudos analisados no fim da seleção' },
      { value: 271, suffix: ' h', label: 'de pesquisa voluntária, em dois ciclos' },
    ],
    highlights: [
      'Artigo completo de revisão sistemática, de maio de 2025: “Testes de Unidade em Software: uma revisão sistemática sobre práticas, desafios e ferramentas na perspectiva da Engenharia de Software”.',
      'Projeto selecionado em dois editais de projetos voluntários de pesquisa da PROPI/IFPI, 1/2024 e 1/2025, com certificados de participação do IFPI Campus Picos.',
      'A conclusão do artigo: avançar nos testes de unidade pede juntar as soluções técnicas ao apoio ao fator humano.',
    ],
  },
  lessons: [
    {
      title: 'Técnica não garante adoção',
      text: 'A literatura tem ferramentas fortes, como o SmartUnit, que chegou a 100% de cobertura MC/DC em mais de 90% das funções testadas na indústria. Mesmo assim, a adoção esbarra em configuração, documentação e cultura.',
    },
    {
      title: 'O oráculo é o gargalo',
      text: 'Gerar testes automaticamente já é possível; decidir sozinho se o resultado está certo é o que ainda falta. O problema do oráculo apareceu em 12 dos 60 estudos.',
    },
    {
      title: 'Gente importa',
      text: 'Num dos estudos, 48% dos desenvolvedores entrevistados não usavam ferramentas automatizadas por dificuldade de configurá-las e de entender os resultados.',
    },
    {
      title: 'Revisar é escolher',
      text: 'Cada escolha do protocolo, das bases aos termos, define o que a revisão consegue ver. Por isso o artigo termina listando os próprios limites.',
    },
  ],
  next: [
    'Oráculos automatizados com aprendizado de máquina, para verificar os resultados de forma adaptativa.',
    'Frameworks de teste com suporte cognitivo para quem escreve e mantém os testes.',
    'Estudos longos e multivocais, em ciclos reais de desenvolvimento.',
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

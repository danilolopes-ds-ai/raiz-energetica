import React, { useState, useEffect } from 'react';
import BlogHero from '@/pages/Blog/BlogHero';
import BlogFilters from '@/pages/Blog/BlogFilters';
import FeaturedPostsSection from '@/pages/Blog/FeaturedPostsSection';
import AllPostsSection from '@/pages/Blog/AllPostsSection';
import NewsletterSection from '@/pages/Blog/NewsletterSection';
import { BookOpen, Heart, Lightbulb, Target, Atom, Home, Pyramid, Wand2, Gem, Sparkles, Palette, Users, Feather, Leaf, Brain, Utensils, FolderHeart as HandHeart, Users2 } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'all', name: 'Todos', icon: BookOpen },
    { id: 'radiestesia-genetica', name: 'Radiestesia Genética', icon: Target },
    { id: 'instrumentos-radiestesia', name: 'Instrumentos', icon: Wand2 },
    { id: 'energia-patogenica', name: 'Energias Patogênicas', icon: Home },
    { id: 'piramides', name: 'Pirâmides', icon: Pyramid },
    { id: 'bastao-atlante', name: 'Bastão de Atlante', icon: Wand2 },
    { id: 'cristais', name: 'Cristais', icon: Gem },
    { id: 'chakras', name: 'Chakras', icon: Sparkles },
    { id: 'aura', name: 'Aura', icon: Atom },
    { id: 'cores-terapia', name: 'Cores e Terapia', icon: Palette },
    { id: 'constelacao-familiar', name: 'Constelação Familiar', icon: Users },
    { id: 'xamanismo', name: 'Xamanismo', icon: Feather },
    { id: 'ervas-medicinais', name: 'Ervas Medicinais', icon: Leaf },
    { id: 'mtc', name: 'Medicina Tradicional Chinesa', icon: Brain },
    { id: 'alimentacao-energetica', name: 'Alimentação Energética', icon: Utensils },
    { id: 'reiki', name: 'Reiki', icon: HandHeart },
    { id: 'apometria', name: 'Apometria', icon: Users2 },
    { id: 'casos-sucesso', name: 'Casos de Sucesso', icon: Heart },
    { id: 'bem-estar-holistico', name: 'Bem-estar Holístico', icon: Lightbulb },
    { id: 'dicas-saude', name: 'Dicas de Saúde', icon: Heart },
    { id: 'artigos-tecnicos', name: 'Artigos Técnicos', icon: BookOpen }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        // Dados mock para desenvolvimento
        const mockPosts = [
          {
            id: 1,
            title: 'Influência da Radiestesia Genética nos Padrões Cerebrais',
            content: `INFLUÊNCIA DA RADIESTESIA GENÉTICA NOS PADRÕES QUANTITATIVOS DOS RITMOS ALFA E BETA, EVIDENCIADA POR MAPEAMENTO CEREBRAL

Patrícia Bortone, Caio César Benetti Filho e Colaboradores; Fevereiro, 2020, São Paulo, Brasil.

## Falando um pouco da História da Radiestesia:

Termo criado por A.A. Bouly, na década de 1930, a radiestesia se refere ao estudo científico de dowsing, ou seja, a capacidade natural de todo ser humano de permitir que as respostas a questões cuidadosas e logicamente construídas possam ser acessadas pela parte não racional da mente, por meio de reflexos inconscientes.

A palavra radiestesia é derivada das palavras radius, proveniente do latim, cujo significado é radiação/raio, e aisthesis, originária do grego, significando sensibilidade à captação. Apoiando-se no conceito de que todas as formas animadas, inanimadas, materiais, entre outras emitem algum tipo de onda ou frequência, a radiestesia tem como base a telepatia.

Segundo o padre italiano, médico e radiestesista Bortone (1978) "a radiestesia é a arte de estimular a 'intuição' a fim de descobrirmos o que não diretamente sentimos para auxiliarmos a compreensão de sensações e até doenças que a biologia ainda não explicou ou diagnosticou".

A partir de 1940, com a disseminação de pesquisas relacionadas aos fenômenos da Física Quântica, observou-se a existência de algo além da matéria interferindo nas leis da Física. Essa comunicação instantânea e espontânea cérebro-cérebro é, muitas vezes, considerada uma simples coincidência. No entanto, dados do estudo sobre comunicação cérebro-cérebro, conduzido Grau et al (2014), demonstraram que a informação pode ser transmitida, com sucesso, a grandes distâncias entre dois cérebros humanos, aproveitando diferentes caminhos na mente.

## Definição de Radiestesia Genética (RadGen)

A RadGen é uma técnica completa e dinâmica, baseada em energia receptiva e focalizatória, que utiliza pêndulos e gráficos de onda para diagnósticos e tratamentos físicos e energéticos de quaisquer elementos existentes, agindo no comportamento dos genes dos seres vivos e na energia dos seres inanimados, abrangendo desde uma causa física até desordens causadas por antepassados dos voluntários.

Por meio de um método diagnóstico "diferente" do convencional, a RadGen pode detectar e tratar a vibração de antepassados, vista na forma de DNA energético, que difere do genético. Entende-se como DNA energético aquele em que a energia passa pelo DNA do ser humano, fazendo com que os descendentes "carreguem" as energias de seus antepassados.

A técnica foi denominada RadGen, justamente por conseguir alcançar tanto o DNA genético (transformação da matéria) quanto o energético (transformação da frequência mental da pessoa e interações energéticas de seus antepassados e outras pessoas que "dependem" da sua energia).

## Metodologia da Pesquisa

Trinta voluntários, do sexo feminino (21 mulheres) e masculino (9 homens), com idade entre 13 e 62 anos, participaram deste estudo, realizado no período de maio de 2017 a dezembro de 2019. Todos os participantes assinaram o Termo de Consentimento Livre e Esclarecido (TCLE) antes de serem submetidos a um mapeamento cerebral prévio e um posterior intercalados por um atendimento em Radiestesia Genética.

As avaliações eletroencefalográficas foram realizadas pelo equipamento BRAIN-WAVE II, da marca Neurovirtual. Eletrodos no escalpo foram utilizados de acordo com o padrão internacional 10-20; análise frequencial de ritmo alfa 8 a 13Hz; beta 14 a 22Hz; theta 4 a 8 Hz; delta inferior a 4Hz, e padrão de amplitude baixa < 70µV; média < 100µV; e alta > 100µV.

Não houve anamnese com o terapeuta, assim como nenhum outro tipo de contato com os participantes entre os exames. As sessões RadGen foram realizadas à distância, ou seja, os participantes não mantiveram contato direto com o terapeuta durante o processo.

## Resultados Observados

De acordo com o mapeamento cerebral dos participantes, os ritmos alfa, anteriores à aplicação da RadGen, se mantinham na frequência 8 a 13Hz, com uma amplitude média de 70 µV, enquanto que os ritmos beta permaneciam em 21/22 Hz, abaixo de 70 µV. 

Após a aplicação da RadGen, 27 voluntários registraram um ritmo alfa mais estruturado e definido (90%), com padrão de amplitude acima de 100 µV e frequência similar à observada antes do tratamento.

O comparativo dos resultados obtidos no mapeamento cerebral dos 30 voluntários avaliados revelou que, após o atendimento em RadGen, o ritmo alfa se mostrou mais estruturado e definido, enquanto o beta apresentou um padrão frequencial reduzido. Padrões epileptiformes observados antes da sessão de RadGen, por sua vez, não foram observados em cerca de 93% dos participantes na sessão posterior.

## Discussão dos Resultados

O traçado normal de um mapeamento cerebral em vigília apresenta um ritmo alfa dominantemente posterior, simétrico, estruturado e reativo, com frequência entre 8 e 13 Hz e amplitude em torno de 70-80 µV. A atividade alfa apresenta maior amplitude em momentos de relaxamento, em que as pessoas permanecem com os olhos fechados sem adormecer.

Após o atendimento em RadGen, foi observada uma diminuição na frequência das ondas beta, comprovando o estado de relaxamento mantendo o estado de vigília. Os traçados eletroencefalográficos dos voluntários se mantiveram dentro dos limites de normalidade, exibindo, porém, alterações de frequência e estrutura, que indicam um estado de maior relaxamento.

Durante o intervalo de apenas uma hora, foram registradas uma diminuição de frequências, uma adequação de idades cronológicas e uma redução de eventos epileptiformes. Isso comprova que os dados iniciais são promissores, gerando possibilidades para a realização de estudos mais específicos sobre doenças.

## Conclusão

Esses achados iniciais destacam uma alteração dos traçados bioelétrico-corticais, provocada pela RadGen, que pode ser aplicada como prática complementar em casos de ansiedade e depressão. Estudos posteriores deverão ser conduzidos com o objetivo de aprofundar e ampliar o conhecimento sobre os efeitos da RadGen.

A relação entre atividade cortical e padrão de ansiedade e depressão já foi amplamente relatada em muitos estudos. Na grande maioria dos traçados pós atendimento em RadGen ocorreu evidente diminuição da frequência dos ritmos beta o que está relacionado a relaxamento e controle da ansiedade.

---

*Trabalho de Conclusão de Curso da Pós Graduação de Bases de Saúde Integrativa e Bem-estar do Hospital Israelita Albert Einstein, em 2020, registrado pelo MEC.*

*Todos os direitos da autora Patricia Bortone.*`,
            excerpt: 'Estudo científico conduzido no Hospital Albert Einstein demonstra através de mapeamento cerebral as evidências objetivas dos efeitos da Radiestesia Genética nos padrões neurológicos.',
            category: 'radiestesia-genetica',
            created_at: '2024-08-15T10:00:00Z',
            status: 'published',
            slug: 'influencia-radiestesia-genetica-padroes-cerebrais',
            image: '/images/blog/radiestesia-post.jpg',
            author: 'Patrícia Bortone',
            date: '2024-08-15T10:00:00Z',
            readTime: '10 min'
          },
          {
            id: 2,
            title: "Transmissão Intergeracional de Trauma: Mecanismos Epigenéticos",
            content: `# Transmissão Intergeracional de Trauma: O Papel dos Mecanismos Epigenéticos

*Revisão científica publicada no World Psychiatry*

**Autores:** Rachel Yehuda, Nikolaos P. Daskalakis, Linda M. Bierer, Heather N. Bader, Torsten Klengel, Florian Holsboer, Elisabeth B. Binder  
**Instituição:** Icahn School of Medicine at Mount Sinai, New York  
**Publicação:** World Psychiatry, 2016  

## Resumo

Esta revisão examina as evidências científicas sobre a transmissão intergeracional de efeitos do trauma e o possível papel dos mecanismos epigenéticos nessa transmissão. Duas categorias amplas de efeitos mediados epigeneticamente são destacadas. A primeira envolve efeitos programados durante o desenvolvimento, que podem resultar da influência de exposições ambientais precoces da prole, incluindo cuidados maternos pós-natais, bem como exposição intrauterina refletindo estresse materno durante a gravidez. A segunda inclui mudanças epigenéticas associadas a trauma pré-concepcional nos pais que podem afetar a linha germinativa e impactar as interações fetoplacentárias.

## Introdução

Há agora evidências convergentes apoiando a ideia de que a prole é afetada por exposições traumáticas parentais ocorrendo antes de seu nascimento, e possivelmente até mesmo antes de sua concepção. No nível mais simples, o conceito de trauma intergeracional reconhece que a exposição a eventos extremamente adversos impacta os indivíduos de tal forma que sua prole se encontra lidando com o estado pós-traumático de seus pais.

Uma alegação mais recente e provocativa é que a experiência do trauma - ou mais precisamente, o efeito dessa experiência - é "transmitida" de alguma forma de uma geração para a próxima através de mecanismos não-genômicos, possivelmente epigenéticos, afetando a função do DNA ou a transcrição gênica.

## Mecanismos Epigenéticos na Transmissão Intergeracional

### Definição de Epigenética

O termo "epigenética" refere-se a um conjunto de mudanças potencialmente hereditárias no genoma que podem ser induzidas por eventos ambientais. Essas mudanças afetam a função do DNA genômico, suas proteínas histonas associadas e RNAs não codificantes, coletivamente referidos como cromatina, mas não envolvem uma alteração da sequência de DNA.

### Mecanismos Principais

#### 1. Metilação do DNA
- **Característica principal:** Modificação epigenética mais bem caracterizada no genoma de mamíferos
- **Função:** Regulação da expressão gênica através do silenciamento de genes específicos
- **Localização:** Principalmente em regiões CpG (citosina-guanina)
- **Impacto:** Alterações na metilação podem afetar fatores de transcrição e expressão gênica

#### 2. Modificações de Histonas
- **Processo:** Modificações pós-traducionais das proteínas histonas
- **Tipos:** Acetilação, metilação, fosforilação, ubiquitinação
- **Função:** Regulação da acessibilidade da cromatina para transcrição
- **Hereditariedade:** Podem ser transmitidas durante a divisão celular

#### 3. RNAs Não Codificantes
- **Tipos:** microRNAs, RNAs longos não codificantes
- **Função:** Regulação pós-transcricional da expressão gênica
- **Transmissão:** Podem ser herdados através da linha germinativa
- **Impacto:** Influenciam o desenvolvimento embrionário e a expressão gênica

## Evidências em Modelos Animais

### Estudos com Roedores

#### Cuidado Materno e Epigenética
Os estudos seminais de Meaney et al. demonstraram que:
- **Cuidado materno** (lambidas e cuidados) altera a metilação do DNA no promotor do receptor de glicocorticoide
- **Efeitos duradouros:** Mudanças persistem na idade adulta
- **Transmissão:** Comportamentos maternos são transmitidos para a próxima geração
- **Reversibilidade:** Efeitos podem ser revertidos através de adoção cruzada

#### Estresse Pré-natal
- **Efeitos específicos por sexo:** Machos e fêmeas respondem diferentemente ao estresse pré-natal
- **Transmissão paterna:** Estresse paterno pode afetar a prole através de mudanças no esperma
- **Mecanismos:** Alterações em microRNAs no esperma mediando efeitos transgeracionais

### Modelos de Trauma
- **Condicionamento de medo:** Trauma associado a odores pode ser transmitido por gerações
- **Estresse crônico:** Exposição a estressores múltiplos altera microRNAs no esperma
- **Separação materna:** Mudanças comportamentais e epigenéticas transmissíveis

## Evidências em Humanos

### Estudos com Sobreviventes do Holocausto

#### Achados Principais
- **Prole de sobreviventes** mostra alterações no eixo hipotálamo-pituitária-adrenal (HPA)
- **Cortisol baixo:** Níveis reduzidos de cortisol em filhos de sobreviventes
- **Sensibilidade aumentada:** Maior sensibilidade aos glicocorticoides
- **Diferenças por gênero parental:** Efeitos diferentes dependendo se o trauma foi materno ou paterno

#### Marcadores Epigenéticos
- **Gene NR3C1:** Alterações na metilação do receptor de glicocorticoide
- **Gene FKBP5:** Mudanças na metilação relacionadas ao trauma
- **Correlações:** Metilação correlacionada entre pais e filhos

### Estudos de Exposição Pré-natal

#### Fome Holandesa (1944-45)
- **Exposição intrauterina:** Fome durante a gravidez causou mudanças epigenéticas duradouras
- **Efeitos transgeracionais:** Impactos observados nos netos
- **Períodos críticos:** Efeitos dependem do momento da exposição durante a gestação

#### Estresse Durante a Gravidez
- **Depressão materna:** Associada a mudanças na metilação do NR3C1 no recém-nascido
- **Ansiedade pré-natal:** Efeitos na regulação do eixo HPA da prole
- **Fatores ambientais:** Desastres naturais e guerra afetam o desenvolvimento fetal

## Mecanismos de Transmissão Paterna

### Contribuições do Esperma

#### Modificações Epigenéticas no Esperma
- **Metilação do DNA:** Mudanças específicas em regiões promotoras
- **microRNAs:** Alterações no conteúdo de RNAs pequenos não codificantes
- **Modificações de histonas:** Mudanças nas proteínas associadas ao DNA
- **Reprogramação:** Alguns elementos escapam da reprogramação epigenética embrionária

#### Estudos Experimentais
- **Fertilização in vitro:** Demonstra transmissão através do esperma
- **Adoção cruzada:** Confirma efeitos independentes do comportamento materno
- **Exposição a odores:** Trauma associado a acetofenona transmitido por gerações

### Períodos Críticos
- **Desenvolvimento puberal:** Janela crítica para efeitos na linha germinativa
- **Exposição pré-puberal:** Diferentes efeitos dependendo da idade de exposição
- **Formação de gametas:** Período vulnerável para modificações epigenéticas

## Regulação por Sexo da Prole

### Diferenças Sexuais

#### Efeitos Específicos por Sexo
- **Estresse pré-natal:** Machos e fêmeas respondem diferentemente
- **Enzimas placentárias:** Diferenças na expressão de 11β-HSD entre sexos
- **Secreção de cortisol:** Padrões diurnos diferentes entre machos e fêmeas
- **Vulnerabilidade:** Períodos críticos variam entre os sexos

#### Mecanismos Propostos
- **Hormônios sexuais:** Influenciam a susceptibilidade epigenética
- **Desenvolvimento cerebral:** Diferenças na programação neural
- **Metabolismo:** Efeitos metabólicos específicos por sexo

## Implicações Terapêuticas

### Reversibilidade dos Efeitos

#### Plasticidade Epigenética
- **Modificabilidade:** Mudanças epigenéticas podem ser revertidas
- **Enriquecimento ambiental:** Pode prevenir transmissão de efeitos traumáticos
- **Intervenções terapêuticas:** Potencial para quebrar ciclos transgeracionais
- **Neuroplasticidade:** Capacidade do cérebro de se reorganizar

#### Estratégias de Intervenção
- **Terapias familiares:** Abordagem de padrões transgeracionais
- **Apoio durante a gravidez:** Prevenção de programação fetal adversa
- **Tratamento de trauma:** Redução de efeitos na próxima geração
- **Educação parental:** Promoção de cuidados parentais positivos

### Aplicações Clínicas

#### Harmonização Familiar
Os achados científicos sobre transmissão epigenética suportam abordagens terapêuticas que:
- **Trabalham com padrões familiares:** Reconhecem a transmissão de traumas
- **Focam na quebra de ciclos:** Interrompem padrões disfuncionais
- **Promovem resiliência:** Fortalecem recursos adaptativos
- **Integram gerações:** Consideram múltiplas gerações no processo terapêutico

## Limitações e Direções Futuras

### Desafios Metodológicos

#### Estudos em Humanos
- **Confundidores:** Múltiplos fatores influenciam os resultados
- **Causalidade:** Difícil estabelecer relações causais diretas
- **Estudos longitudinais:** Necessidade de acompanhamento de longo prazo
- **Grupos controle:** Desafios na definição de grupos controle adequados

#### Necessidades de Pesquisa
- **Estudos prospectivos:** Acompanhamento desde a concepção
- **Amostras maiores:** Maior poder estatístico
- **Múltiplas gerações:** Estudos incluindo avós e netos
- **Mecanismos moleculares:** Compreensão detalhada dos processos

### Questões Conceituais

#### Adaptação vs. Vulnerabilidade
- **Preparação adaptativa:** Efeitos podem ser adaptativos para ambientes similares
- **Vulnerabilidade:** Podem aumentar risco em ambientes diferentes
- **Contexto ambiental:** Importância do ambiente atual da prole
- **Resiliência:** Capacidade de superar adversidades herdadas

## Conclusões

### Principais Achados

1. **Evidência robusta** de transmissão intergeracional de efeitos de trauma em modelos animais
2. **Evidência emergente** em humanos, especialmente em estudos com sobreviventes do Holocausto
3. **Múltiplos mecanismos** epigenéticos envolvidos na transmissão
4. **Diferenças por sexo** tanto na transmissão quanto nos efeitos
5. **Plasticidade** e potencial reversibilidade dos efeitos

### Implicações Práticas

#### Para Terapeutas e Profissionais de Saúde
- **Perspectiva transgeracional:** Considerar histórico familiar de trauma
- **Intervenção precoce:** Importância de apoio durante gravidez e primeiros anos
- **Abordagem familiar:** Trabalhar com sistemas familiares completos
- **Esperança:** Efeitos podem ser modificados e revertidos

#### Para Pesquisa Futura
- **Estudos longitudinais:** Acompanhamento de múltiplas gerações
- **Intervenções específicas:** Desenvolvimento de tratamentos direcionados
- **Biomarcadores:** Identificação de marcadores epigenéticos específicos
- **Prevenção:** Estratégias para prevenir transmissão de trauma

### Significado Clínico

Esta pesquisa revoluciona nossa compreensão de como traumas familiares podem ser transmitidos, oferecendo:
- **Base científica** para terapias transgeracionais
- **Compreensão** dos mecanismos moleculares envolvidos
- **Esperança** de que padrões podem ser quebrados
- **Validação** das experiências de famílias afetadas por trauma

O conhecimento sobre epigenética e transmissão intergeracional fornece um fundamento científico robusto para práticas terapêuticas que visam a harmonização familiar e a cura de padrões transgeracionais.

### Agradecimentos

Os autores agradecem às famílias que participaram dos estudos, permitindo avanços na compreensão científica da transmissão intergeracional de trauma.

### Referências Principais

1. Yehuda, R., et al. (2016). "Intergenerational transmission of trauma effects: putative role of epigenetic mechanisms." *World Psychiatry*, 15(3), 243-266.
2. Meaney, M. J., & Szyf, M. (2005). "Environmental programming of stress responses through DNA methylation." *Dialogues in Clinical Neuroscience*, 7(2), 103-123.
3. Gapp, K., et al. (2014). "Implication of sperm RNAs in transgenerational inheritance of the effects of early trauma in mice." *Nature Neuroscience*, 17(5), 667-669.
4. Dias, B. G., & Ressler, K. J. (2014). "Parental olfactory experience influences behavior and neural structure in subsequent generations." *Nature Neuroscience*, 17(1), 89-96.

---

*© 2016 World Psychiatry. Artigo científico revisado por pares, publicado sob licença Creative Commons.*`,
            excerpt: 'Revisão científica abrangente sobre como traumas podem ser transmitidos entre gerações através de mecanismos epigenéticos, com implicações importantes para terapias de harmonização familiar.',
            category: 'epigenetica',
            created_at: '2024-08-12T16:00:00Z',
            status: 'published',
            slug: 'transmissao-intergeracional-trauma-epigenetica',
            image: '/images/services/harmonia-geracional-conflito.webp',
            author: 'Rachel Yehuda et al.',
            date: '2024-08-12T16:00:00Z',
            readTime: '25 min'
          },
          {
            id: 3,
            title: 'Energias Patogênicas: O Que São e Como Se Proteger',
            content: 'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar.',
            excerpt: 'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar.',
            category: 'energia-patogenica',
            created_at: '2024-08-10T14:30:00Z',
            status: 'published',
            slug: 'energias-patogenicas-protecao',
            image: '/images/blog/energias-post.jpg',
            author: 'Helena Raiz',
            date: '2024-08-10T14:30:00Z',
            readTime: '5 min'
          },
          {
            id: 3,
            title: 'O Poder dos Cristais na Cura Energética',
            content: 'Entenda como utilizar cristais para amplificar sua energia e promover a cura em todos os níveis.',
            excerpt: 'Entenda como utilizar cristais para amplificar sua energia e promover a cura em todos os níveis.',
            category: 'cristais',
            created_at: '2024-08-05T09:15:00Z',
            status: 'published',
            slug: 'poder-cristais-cura-energetica',
            image: '/images/blog/cristais-post.jpg',
            author: 'Helena Raiz',
            date: '2024-08-05T09:15:00Z',
            readTime: '7 min'
          },
          {
            id: 4,
            title: 'Harmonia Geracional: Curando Relacionamentos Familiares',
            content: 'Descubra como resolver conflitos familiares através do trabalho energético e da compreensão dos padrões geracionais.',
            excerpt: 'Descubra como resolver conflitos familiares através do trabalho energético e da compreensão dos padrões geracionais.',
            category: 'constelacao-familiar',
            created_at: '2024-08-01T16:45:00Z',
            status: 'published',
            slug: 'harmonia-geracional-relacionamentos',
            image: '/images/blog/harmonia-post.jpg',
            author: 'Helena Raiz',
            date: '2024-08-01T16:45:00Z',
            readTime: '6 min'
          },
          {
            id: 5,
            title: 'Casos de Sucesso: Transformações Reais com Terapias Energéticas',
            content: 'Conheça histórias inspiradoras de pessoas que transformaram suas vidas através das terapias energéticas.',
            excerpt: 'Conheça histórias inspiradoras de pessoas que transformaram suas vidas através das terapias energéticas.',
            category: 'casos-sucesso',
            created_at: '2024-07-28T11:20:00Z',
            status: 'published',
            slug: 'casos-sucesso-transformacoes',
            image: '/images/blog/casos-sucesso-post.jpg',
            author: 'Helena Raiz',
            date: '2024-07-28T11:20:00Z',
            readTime: '8 min'
          },
          {
            id: 6,
            title: 'Iniciação na Radiestesia: Primeiros Passos',
            content: 'Um guia completo para quem quer começar a praticar radiestesia e desenvolver sua sensibilidade energética.',
            excerpt: 'Um guia completo para quem quer começar a praticar radiestesia e desenvolver sua sensibilidade energética.',
            category: 'radiestesia-genetica',
            created_at: '2024-07-25T13:10:00Z',
            status: 'published',
            slug: 'iniciacao-radiestesia-primeiros-passos',
            image: '/images/blog/iniciacao-post.jpg',
            author: 'Helena Raiz',
            date: '2024-07-25T13:10:00Z',
            readTime: '5 min'
          }
        ];

        // Simular delay da API
        await new Promise(resolve => setTimeout(resolve, 500));

        setPosts(mockPosts);
      } catch (err) {
        setError('Não foi possível carregar os posts. Tente novamente mais tarde.');
        console.error('Erro ao buscar posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Função para obter nome da categoria
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Sem categoria';
  };

  // Função para formatar data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando posts...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <>
      <BlogHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <FeaturedPostsSection 
          posts={filteredPosts} 
          getCategoryName={getCategoryName}
          formatDate={formatDate}
        />
        <AllPostsSection
          posts={filteredPosts}
          categories={categories}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          getCategoryName={getCategoryName}
          formatDate={formatDate}
        />
      </div>
      <NewsletterSection />
    </>
  );
};

export default Blog;
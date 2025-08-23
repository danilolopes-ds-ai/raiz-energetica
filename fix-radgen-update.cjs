const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://gigaqpzhaoiasxsdeyfm.supabase.co', 
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZ2FxcHpoYW9pYXN4c2RleWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5ODA0NTAsImV4cCI6MjA2NjU1NjQ1MH0.dH-osTBJ6zQiR6sFMIyxqtULv-AyJ6WPswvWJIQnRAw'
);

async function updateRadGenPost() {
  console.log('🔄 Iniciando atualização do artigo RadGen...');
  
  const fullContent = `<div class="scientific-article">
<h2>INFLUÊNCIA DA RADIESTESIA GENÉTICA NOS PADRÕES QUANTITATIVOS DOS RITMOS ALFA E BETA, EVIDENCIADA POR MAPEAMENTO CEREBRAL</h2>

<p><strong>Autores:</strong> Patrícia Bortone, Caio César Benetti Filho e Colaboradores</p>
<p><strong>Data:</strong> Fevereiro, 2020, São Paulo, Brasil</p>
<p><strong>Instituição:</strong> Hospital Israelita Albert Einstein</p>

<h3>🧠 Falando um pouco da História da Radiestesia</h3>

<p>Termo criado por A.A. Bouly, na década de 1930, a radiestesia se refere ao <strong>estudo científico de dowsing</strong>, ou seja, a capacidade natural de todo ser humano de permitir que as respostas a questões cuidadosas e logicamente construídas possam ser acessadas pela parte não racional da mente, por meio de reflexos inconscientes.</p>

<p>A palavra radiestesia é derivada das palavras <em>radius</em>, proveniente do latim, cujo significado é radiação/raio, e <em>aisthesis</em>, originária do grego, significando sensibilidade à captação. Apoiando-se no conceito de que todas as formas animadas, inanimadas, materiais, entre outras emitem algum tipo de onda ou frequência, a radiestesia tem como base a telepatia.</p>

<blockquote>
<p>"A radiestesia é a arte de estimular a 'intuição' a fim de descobrirmos o que não diretamente sentimos para auxiliarmos a compreensão de sensações e até doenças que a biologia ainda não explicou ou diagnosticou"</p>
<cite>- Padre Bortone (1978), médico e radiestesista italiano</cite>
</blockquote>

<h3>🔬 Base Científica da Comunicação Cérebro-Cérebro</h3>

<p>A partir de 1940, com a disseminação de pesquisas relacionadas aos fenômenos da <strong>Física Quântica</strong>, observou-se a existência de algo além da matéria interferindo nas leis da Física. Dados do estudo sobre comunicação cérebro-cérebro, conduzido por <strong>Grau et al (2014)</strong>, demonstraram que a informação pode ser transmitida, com sucesso, a grandes distâncias entre dois cérebros humanos.</p>

<p><strong>Yin et al (2017)</strong> relatam em estudo terem alcançado um tipo de comunicação quântica, denominada <em>comunicação contrafactual</em>. Nesse caso, nenhuma partícula viaja entre dois receptores. Com base neste efeito, a comunicação quântica contrafatual é definida como a transferência de um estado quântico de um local para outro sem qualquer partícula quântica ou clássica sendo transmitida entre eles.</p>

<p>Isso explica o funcionamento de sistemas telepáticos entre os seres humanos. Dessa forma, o radiestesista treinado se torna uma <strong>antena de captação</strong> das mais variadas frequências de energia.</p>

<h3>⚡ Definição de Radiestesia Genética (RadGen)</h3>

<p>A RadGen é uma <strong>técnica completa e dinâmica</strong>, baseada em energia receptiva e focalizatória, que utiliza pêndulos e gráficos de onda para diagnósticos e tratamentos físicos e energéticos de quaisquer elementos existentes, agindo no comportamento dos genes dos seres vivos e na energia dos seres inanimados.</p>

<p>Por meio de um método diagnóstico "diferente" do convencional, a RadGen pode detectar e tratar a vibração de antepassados, vista na forma de <strong>DNA energético</strong>, que difere do genético. Entende-se como DNA energético aquele em que a energia passa pelo DNA do ser humano, fazendo com que os descendentes "carreguem" as energias de seus antepassados.</p>

<h3>🏥 Reconhecimento pelo Ministério da Saúde</h3>

<p>Por se tratar de uma ação de cuidado transversal, produto da sinergia entre uma prática tradicional e o conhecimento científico moderno, a RadGen está alinhada ao campo das <strong>Práticas Integrativas e Complementares (PIC)</strong>.</p>

<p>Respaldado pelas diretrizes da OMS, o Ministério da Saúde aprovou, no dia 3 de maio de 2006, a <strong>Política Nacional de Práticas Integrativas e Complementares em Saúde (PNPIC)</strong>, por meio da Portaria GM/MS nº 971. Atualmente, a lista do Ministério da Saúde conta com 29 PICs, incluindo:</p>

<ul>
<li>Acupuntura</li>
<li>Homeopatia</li>
<li>Reiki</li>
<li>Constelação Familiar</li>
<li>Imposição de mãos</li>
<li>Bioenergética</li>
<li>E muitas outras...</li>
</ul>

<p>A RadGen coloca-se como <strong>forte candidata</strong> a nova terapia nesta portaria.</p>

<h3>🧪 Metodologia da Pesquisa</h3>

<p><strong>Participantes:</strong> 30 voluntários (21 mulheres e 9 homens), com idade entre 13 e 62 anos</p>
<p><strong>Período:</strong> Maio de 2017 a dezembro de 2019</p>
<p><strong>Equipamento:</strong> BRAIN-WAVE II, da marca Neurovirtual</p>
<p><strong>Total de exames:</strong> 60 mapeamentos cerebrais (antes e depois)</p>

<p>Os participantes foram submetidos a dois exames de mapeamento cerebral intercalados por um atendimento em Radiestesia Genética. <strong>Não houve anamnese</strong> com o terapeuta, assim como nenhum outro tipo de contato com os participantes entre os exames.</p>

<p>As sessões RadGen foram realizadas <strong>à distância</strong>, sem contato direto com o terapeuta durante o processo. Esse contato ocorreu por meio de campos mórficos eletromagnéticos.</p>

<h3>📊 Resultados Observados</h3>

<p><strong>ANTES da RadGen:</strong></p>
<ul>
<li>Ritmos alfa: 8 a 13Hz, amplitude média de 70 µV</li>
<li>Ritmos beta: 21/22 Hz, abaixo de 70 µV</li>
<li>46% apresentaram padrões epileptiformes</li>
</ul>

<p><strong>APÓS a RadGen:</strong></p>
<ul>
<li><strong>90% dos voluntários (27 de 30)</strong> registraram ritmo alfa mais estruturado e definido</li>
<li>Amplitude acima de 100 µV</li>
<li>Padrão frequencial beta reduzido</li>
<li><strong>93% não apresentaram</strong> padrões epileptiformes</li>
</ul>

<h3>🎯 Conclusões Científicas</h3>

<p>O comparativo dos resultados revelou que, após o atendimento em RadGen:</p>

<ol>
<li>O <strong>ritmo alfa se mostrou mais estruturado e definido</strong></li>
<li>O <strong>beta apresentou padrão frequencial reduzido</strong></li>
<li>Evidência de <strong>estado de maior relaxamento</strong></li>
<li>Redução significativa de eventos epileptiformes</li>
</ol>

<p>A melhora na estrutura observada nos voluntários após o atendimento em RadGen está relacionada a um <strong>estado de maior relaxamento</strong>, promovido pelo tratamento. A diminuição na frequência das ondas beta comprova o estado de relaxamento mantendo o estado de vigília.</p>

<h3>🔬 Perspectivas Futuras</h3>

<p>Esses achados iniciais destacam uma <strong>alteração dos traçados bioelétrico-corticais</strong>, provocada pela RadGen, que pode ser aplicada como prática complementar em casos de <strong>ansiedade e depressão</strong>.</p>

<p>Durante o intervalo de apenas uma hora, foram registradas:</p>
<ul>
<li>Diminuição de frequências</li>
<li>Adequação de idades cronológicas</li>
<li>Redução de eventos epileptiformes</li>
</ul>

<p>A relação entre atividade cortical e padrão de ansiedade e depressão já foi amplamente relatada em muitos estudos. Na grande maioria dos traçados pós atendimento em RadGen ocorreu evidente diminuição da frequência dos ritmos beta, o que está relacionado a <strong>relaxamento e controle da ansiedade</strong>.</p>

<blockquote class="highlight">
<p><strong>Estudos sobre a RadGen continuarão sendo conduzidos, com o objetivo maior de tornar essa terapia reconhecida e integrante das Práticas Integrativas e Complementares.</strong></p>
</blockquote>

<hr>

<p><small><strong>Trabalho de Conclusão de Curso</strong> da Pós Graduação de Bases de Saúde Integrativa e Bem-estar do <strong>Hospital Israelita Albert Einstein</strong>, em 2020, registrado pelo MEC.</small></p>

<p><small>© Todos os direitos da autora Dra. Patrícia Bortone. Uso autorizado para fins educacionais e divulgação científica.</small></p>
</div>`;

  try {
    console.log('📤 Enviando atualização para Supabase...');
    
    const { data, error } = await supabase
      .from('posts')
      .update({ 
        content: fullContent,
        excerpt: 'Estudo científico revolucionário conduzido no Hospital Albert Einstein demonstra através de mapeamento cerebral as evidências objetivas dos efeitos da Radiestesia Genética nos padrões neurológicos. Com 30 voluntários e 60 exames, a pesquisa comprova alterações significativas nos ritmos alfa e beta, indicando maior relaxamento e bem-estar.'
      })
      .eq('id', 1);

    if (error) {
      console.error('❌ Erro ao atualizar:', error);
    } else {
      console.log('✅ Artigo completo da RadGen atualizado com sucesso!');
      console.log('📄 Conteúdo científico do Hospital Albert Einstein adicionado');
      console.log('🎯 Post ID 1 agora tem o artigo completo da Dra. Patrícia');
      console.log('📏 Tamanho do conteúdo:', fullContent.length, 'caracteres');
    }
  } catch (err) {
    console.error('❌ Erro inesperado:', err);
  }
}

updateRadGenPost();

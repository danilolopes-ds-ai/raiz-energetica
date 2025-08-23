const testData = {
  nome: "Teste Cliente",
  dataNascimento: "1990-01-01",
  tipoEnergia: "fisico",
  porcentagem: 75,
  padroesMentais: [],
  causasRaiz: ["Baixa imunidade"],
  influenciasExternas: [],
  planoAcao: []
};

async function testPDFGeneration() {
  try {
    console.log('🧪 Testando geração de PDF...');
    console.log('📤 Dados enviados:', JSON.stringify(testData, null, 2));
    
    const response = await fetch('http://localhost:5174/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    console.log('📥 Status da resposta:', response.status);
    console.log('📥 Headers da resposta:', Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Erro na resposta:', response.status);
      console.error('❌ Detalhes do erro:', errorText);
      return;
    }

    const blob = await response.blob();
    console.log('✅ PDF gerado com sucesso!');
    console.log('📄 Tamanho do arquivo:', blob.size, 'bytes');
    console.log('📋 Tipo do arquivo:', blob.type);
    
  } catch (error) {
    console.error('❌ Erro no teste:', error.message);
    console.error('❌ Stack trace:', error.stack);
  }
}

testPDFGeneration(); 
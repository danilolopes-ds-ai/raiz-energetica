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
    
    const response = await fetch('http://localhost:5174/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Erro na resposta:', response.status, errorText);
      return;
    }

    const blob = await response.blob();
    console.log('✅ PDF gerado com sucesso!');
    console.log('📄 Tamanho do arquivo:', blob.size, 'bytes');
    console.log('📋 Tipo do arquivo:', blob.type);
    
    // Salvar o arquivo
    const fs = await import('fs');
    const buffer = await blob.arrayBuffer();
    fs.writeFileSync('test-diagnostico.pdf', Buffer.from(buffer));
    console.log('💾 Arquivo salvo como: test-diagnostico.pdf');
    
  } catch (error) {
    console.error('❌ Erro no teste:', error.message);
  }
}

testPDFGeneration(); 
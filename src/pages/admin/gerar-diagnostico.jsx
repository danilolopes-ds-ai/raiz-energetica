import React, { useState } from 'react';
import { diagnosticoOptions } from '@/data/diagnostico-options';

const GerarDiagnosticoPage = () => {
    const [formData, setFormData] = useState({
        nome: '',
        dataNascimento: '',
        tipoEnergia: 'fisico',
        porcentagem: 75,
        padroesMentais: [],
        causasRaiz: [],
        influenciasExternas: [],
        planoAcao: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (category, value) => {
        setFormData(prev => {
            const currentValues = prev[category];
            if (currentValues.includes(value)) {
                return { ...prev, [category]: currentValues.filter(item => item !== value) };
            } else {
                return { ...prev, [category]: [...currentValues, value] };
            }
        });
    };

        const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.details || 'Falha ao gerar o PDF');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `diagnostico-${formData.nome.replace(/ /g, '_') || 'cliente'}.pdf`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);

        } catch (error) {
            console.error('Erro no processo de geração:', error);
            alert(`Ocorreu um erro: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const renderCheckboxes = (category, options) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {options.map(option => (
                <label key={option} className="flex items-center space-x-3 bg-slate-50 p-3 rounded-md hover:bg-slate-100 transition-colors cursor-pointer">
                    <input
                        type="checkbox"
                        className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        checked={formData[category].includes(option)}
                        onChange={() => handleCheckboxChange(category, option)}
                    />
                    <span className="text-slate-700">{option}</span>
                </label>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-100 text-slate-800">
            <div className="container mx-auto px-4 py-10">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-slate-900">Gerador de Diagnóstico</h1>
                    <p className="text-lg text-slate-600 mt-2">Preencha os campos abaixo para gerar o PDF personalizado.</p>
                </header>

                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-8">
                    
                    {/* Dados do Cliente */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Dados do Cliente</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                                <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleInputChange} className="w-full p-2 border rounded-md" required />
                            </div>
                            <div>
                                <label htmlFor="dataNascimento" className="block text-sm font-medium text-slate-700 mb-1">Data de Nascimento</label>
                                <input type="date" name="dataNascimento" id="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange} className="w-full p-2 border rounded-md" required />
                            </div>
                        </div>
                    </section>

                    {/* Tipo de Energia */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Nível Energético</h2>
                        <div className="flex items-center space-x-8 mb-4">
                            <label className="flex items-center cursor-pointer"><input type="radio" name="tipoEnergia" value="fisico" checked={formData.tipoEnergia === 'fisico'} onChange={handleInputChange} className="mr-2"/> Físico-Energético</label>
                            <label className="flex items-center cursor-pointer"><input type="radio" name="tipoEnergia" value="psico" checked={formData.tipoEnergia === 'psico'} onChange={handleInputChange} className="mr-2"/> Psico-Energético</label>
                        </div>
                        <div className="flex items-center space-x-4">
                            <input type="range" min="0" max="100" name="porcentagem" value={formData.porcentagem} onChange={handleInputChange} className="w-full" />
                            <span className="font-bold text-lg">{formData.porcentagem}%</span>
                        </div>
                        {formData.tipoEnergia === 'psico' && (
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold mb-3">Padrões Mentais</h3>
                                {renderCheckboxes('padroesMentais', diagnosticoOptions.tipoEnergia.psico.padroesMentais)}
                            </div>
                        )}
                    </section>

                    {/* Causas Raiz */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Causas Raiz</h2>
                        {renderCheckboxes('causasRaiz', diagnosticoOptions.causasRaiz)}
                    </section>

                    {/* Influências Externas */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Influências Externas</h2>
                        {renderCheckboxes('influenciasExternas', diagnosticoOptions.influenciasExternas)}
                    </section>

                    {/* Plano de Ação */}
                    <section>
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Plano de Ação Sugerido</h2>
                        {renderCheckboxes('planoAcao', diagnosticoOptions.planoAcao)}
                    </section>

                    <div className="text-center pt-6">
                        <button 
                            type="submit" 
                            className="bg-indigo-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-indigo-700 transition-all text-lg shadow-md disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center justify-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Gerando...
                                </>
                            ) : 'Gerar Diagnóstico'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GerarDiagnosticoPage;
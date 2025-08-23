import React from 'react';

const LandingFooter = () => (
    <footer className="bg-rose-900 text-rose-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-slate-300">
            <p className="font-semibold mb-2 text-sm">Atendimento exclusivo para mães | Total confidencialidade | Mais de 9 anos transformando famílias</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Raiz Energética. Todos os direitos reservados.</p>
            <p className="text-xs mt-2 max-w-2xl mx-auto">Este serviço é uma ferramenta de bem-estar e não substitui tratamentos médicos, psicológicos ou psiquiátricos.</p>
        </div>
    </footer>
);

export default LandingFooter;

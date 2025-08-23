import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Hand as HeartHand } from 'lucide-react';

const LandingHeader = () => (
    <header className="bg-rose-50/80 backdrop-blur-lg sticky top-0 z-50 border-b border-rose-200/80">
                <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
            <Link to="/" className="flex items-center space-x-2">
                <HeartHand className="w-8 h-8 text-rose-600" />
                <span className="font-bold text-xl text-rose-800 tracking-tight">Harmonia Geracional</span>
            </Link>
            <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm px-3 sm:text-base sm:px-4">
                <a href="#planos">Ver Planos de Cura</a>
            </Button>
        </div>
    </header>
);

export default LandingHeader;

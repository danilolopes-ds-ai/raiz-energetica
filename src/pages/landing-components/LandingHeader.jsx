import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LandingHeader = () => (
    <header className="bg-rose-50/95 backdrop-blur-md sticky top-0 z-50 border-b border-rose-200/60">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
            <Link to="/" className="text-rose-900 hover:text-rose-700 transition-colors duration-300">
                <span className="font-bold text-lg sm:text-xl tracking-tight">Harmonia Geracional</span>
            </Link>
            <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-300">
                <a href="#pricing-heading">
                    <span className="hidden sm:inline">Ver Planos</span>
                    <span className="sm:hidden">Planos</span>
                </a>
            </Button>
        </div>
    </header>
);

export default LandingHeader;

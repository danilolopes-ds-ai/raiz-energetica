import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Raiz Energética</span>
            </div>
            <p className="text-gray-300 text-sm">
              Investigamos a raiz, curamos a causa. Radiestesia genética para descobrir as verdadeiras origens dos seus sintomas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Links Rápidos</span>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Serviços</span>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Radiestesia Genética</span></li>
              <li><span className="text-gray-300">Acupuntura Energética</span></li>
              <li><span className="text-gray-300">Terapias Complementares</span></li>
              <li><span className="text-gray-300">Limpeza Energética</span></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contato</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#2D8C5C]" />
                <span className="text-gray-300 text-sm">(11) 96610-1949</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#2D8C5C]" />
                <span className="text-gray-300 text-sm">contato@raizenergetica.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#2D8C5C]" />
                <span className="text-gray-300 text-sm">Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Raiz Energética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
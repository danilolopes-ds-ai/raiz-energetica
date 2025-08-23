import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
        <Leaf className="w-6 h-6 text-white" />
      </div>
      <span className="text-lg sm:text-xl font-bold text-gradient">Raiz Energética</span>
    </Link>
  );
};

export default Logo;
import React from 'react';
import { Shield, Lock, CheckCircle } from 'lucide-react';

export const SecurityBadges = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Shield className="w-5 h-5 text-green-600" />
        <span>Pagamento Seguro</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Lock className="w-5 h-5 text-green-600" />
        <span>Dados Protegidos</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <CheckCircle className="w-5 h-5 text-green-600" />
        <span>Compra Garantida</span>
      </div>
    </div>
  );
};

export default SecurityBadges;

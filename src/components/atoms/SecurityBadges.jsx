import React from 'react';
import { Shield, Lock, CreditCard, CheckCircle } from 'lucide-react';

const SecurityBadge = ({ type, className = "", dark = false, theme = "default" }) => {
  const badges = {
    ssl: {
      icon: Lock,
      text: "SSL Seguro",
      description: "Conexão 100% segura",
      color: theme === "harmony" ? (dark ? "text-rose-300" : "text-rose-600") : (dark ? "text-green-300" : "text-green-600"),
      bg: theme === "harmony" ? (dark ? "bg-rose-900/20 border-rose-500/30" : "bg-rose-50 border-rose-200") : (dark ? "bg-green-900/20 border-green-500/30" : "bg-green-50 border-green-200")
    },
    payment: {
      icon: CreditCard,
      text: "Pagamento Seguro",
      description: "Dados protegidos",
      color: theme === "harmony" ? (dark ? "text-pink-300" : "text-pink-600") : (dark ? "text-blue-300" : "text-blue-600"),
      bg: theme === "harmony" ? (dark ? "bg-pink-900/20 border-pink-500/30" : "bg-pink-50 border-pink-200") : (dark ? "bg-blue-900/20 border-blue-500/30" : "bg-blue-50 border-blue-200")
    },
    guarantee: {
      icon: Shield,
      text: "Garantia 7 dias",
      description: "100% do dinheiro de volta",
      color: theme === "harmony" ? (dark ? "text-rose-300" : "text-rose-700") : (dark ? "text-purple-300" : "text-purple-600"),
      bg: theme === "harmony" ? (dark ? "bg-rose-900/20 border-rose-500/30" : "bg-rose-100 border-rose-300") : (dark ? "bg-purple-900/20 border-purple-500/30" : "bg-purple-50 border-purple-200")
    },
    verified: {
      icon: CheckCircle,
      text: "Empresa Verificada",
      description: "9+ anos no mercado",
      color: theme === "harmony" ? (dark ? "text-pink-300" : "text-pink-700") : (dark ? "text-emerald-300" : "text-emerald-600"),
      bg: theme === "harmony" ? (dark ? "bg-pink-900/20 border-pink-500/30" : "bg-pink-100 border-pink-300") : (dark ? "bg-emerald-900/20 border-emerald-500/30" : "bg-emerald-50 border-emerald-200")
    }
  };

  const badge = badges[type];
  const Icon = badge.icon;

  return (
    <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${badge.bg} ${className}`}>
      <Icon className={`w-4 h-4 ${badge.color}`} />
      <div>
        <div className={`text-sm font-semibold ${badge.color}`}>{badge.text}</div>
        <div className={`text-xs ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{badge.description}</div>
      </div>
    </div>
  );
};

const SecurityBadges = ({ className = "", dark = false, compact = false, theme = "default" }) => {
  if (compact) {
    const compactColors = theme === "harmony" ? {
      ssl: dark ? 'text-rose-300 bg-rose-900/20' : 'text-rose-600 bg-rose-50',
      payment: dark ? 'text-pink-300 bg-pink-900/20' : 'text-pink-600 bg-pink-50',
      guarantee: dark ? 'text-rose-300 bg-rose-900/20' : 'text-rose-700 bg-rose-100',
      verified: dark ? 'text-pink-300 bg-pink-900/20' : 'text-pink-700 bg-pink-100'
    } : {
      ssl: dark ? 'text-green-300 bg-green-900/20' : 'text-green-600 bg-green-50',
      payment: dark ? 'text-blue-300 bg-blue-900/20' : 'text-blue-600 bg-blue-50',
      guarantee: dark ? 'text-purple-300 bg-purple-900/20' : 'text-purple-600 bg-purple-50',
      verified: dark ? 'text-emerald-300 bg-emerald-900/20' : 'text-emerald-600 bg-emerald-50'
    };

    return (
      <div className={`flex flex-wrap justify-center gap-1 sm:gap-2 ${className}`}>
        <div className={`flex items-center justify-center px-2 py-1 rounded-md text-base ${compactColors.ssl}`}>
          <span>🔒</span>
        </div>
        <div className={`flex items-center justify-center px-2 py-1 rounded-md text-base ${compactColors.payment}`}>
          <span>💳</span>
        </div>
        <div className={`flex items-center justify-center px-2 py-1 rounded-md text-base ${compactColors.guarantee}`}>
          <span>🛡️</span>
        </div>
        <div className={`flex items-center justify-center px-2 py-1 rounded-md text-base ${compactColors.verified}`}>
          <span>✅</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 gap-3 ${className}`}>
      <SecurityBadge type="ssl" dark={dark} theme={theme} />
      <SecurityBadge type="payment" dark={dark} theme={theme} />
      <SecurityBadge type="guarantee" dark={dark} theme={theme} />
      <SecurityBadge type="verified" dark={dark} theme={theme} />
    </div>
  );
};

export { SecurityBadge, SecurityBadges };

import React, { useState, useEffect } from 'react';
import { Clock, Users } from 'lucide-react';

const CountdownTimer = ({ initialHours = 0, initialMinutes = 0, onExpire = () => {}, storageKey = 'diagnostico-timer', returnPrice = 'R$ 199', exclusivityMessage = null }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Verifica se já existe um timer no localStorage
    const savedTime = localStorage.getItem(storageKey);
    if (savedTime) {
      const savedTimestamp = parseInt(savedTime);
      const now = Date.now();
      const elapsed = now - savedTimestamp;
      const totalTime = (initialHours * 60 * 60 + initialMinutes * 60) * 1000; // em ms
      const remaining = Math.max(0, totalTime - elapsed);
      return remaining;
    } else {
      // Cria novo timer
      const totalTime = (initialHours * 60 * 60 + initialMinutes * 60) * 1000;
      localStorage.setItem(storageKey, Date.now().toString());
      return totalTime;
    }
  });

  // Régua de atendimentos em tempo real
  const [slotsData, setSlotsData] = useState(() => {
    const saved = localStorage.getItem(`${storageKey}-slots`);
    if (saved) {
      return JSON.parse(saved);
    }
    
    // Configuração inicial: 12 vagas, algumas já ocupadas
    const initialSlots = {
      total: 12,
      occupied: Math.floor(Math.random() * 6) + 4, // Entre 4-9 vagas ocupadas
      lastUpdate: Date.now()
    };
    localStorage.setItem(`${storageKey}-slots`, JSON.stringify(initialSlots));
    return initialSlots;
  });

  // Simula vagas sendo ocupadas em tempo real
  useEffect(() => {
    const slotInterval = setInterval(() => {
      setSlotsData(prev => {
        // Só atualiza se ainda há vagas e o timer não expirou
        if (prev.occupied >= prev.total || timeLeft <= 0) return prev;
        
        // 15% de chance de ocupar uma vaga a cada 30 segundos
        if (Math.random() < 0.15) {
          const newData = {
            ...prev,
            occupied: Math.min(prev.total, prev.occupied + 1),
            lastUpdate: Date.now()
          };
          localStorage.setItem(`${storageKey}-slots`, JSON.stringify(newData));
          return newData;
        }
        return prev;
      });
    }, 30000); // Verifica a cada 30 segundos

    return () => clearInterval(slotInterval);
  }, [timeLeft, storageKey]);

  const available = slotsData.total - slotsData.occupied;
  const occupiedPercentage = (slotsData.occupied / slotsData.total) * 100;

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = Math.max(0, prev - 1000);
        if (newTime === 0) {
          onExpire();
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);
  const isExpired = timeLeft <= 0;

  if (isExpired) {
    return (
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 sm:p-4 text-center mb-4">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mx-auto mb-2" />
        <p className="text-red-700 font-semibold text-sm sm:text-base">Oferta Expirada</p>
        <p className="text-red-600 text-xs sm:text-sm">Entre em contato para verificar disponibilidade</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-red-50 via-orange-50 to-red-50 border-2 border-red-200 rounded-xl p-4 sm:p-6 text-center mb-4 max-w-md mx-auto shadow-lg">
      {/* Régua de Horários em Tempo Real */}
      <div className="mb-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-red-100 shadow-sm">
        <div className="flex items-center justify-center mb-3">
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" />
          <span className="text-red-700 font-bold text-sm sm:text-base">
            Horários Disponíveis: {available} de {slotsData.total}
          </span>
        </div>
        
        {/* Barra de Progresso Melhorada */}
        <div className="w-full bg-red-100 rounded-full h-4 sm:h-5 mb-3 overflow-hidden shadow-inner">
          <div 
            className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 h-full rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${occupiedPercentage}%` }}
          >
            {/* Efeito de brilho animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-ping"></div>
          </div>
        </div>
        
        {/* Status dos horários */}
        <div className="flex justify-center text-sm sm:text-base">
          <span className={`font-bold px-3 py-1 rounded-full ${available <= 3 ? 'text-red-700 bg-red-100 animate-pulse' : 'text-green-700 bg-green-100'}`}>
            🟢 somente {available} horários disponíveis
          </span>
        </div>
        
        {/* Alerta de urgência */}
        {available <= 3 && (
          <div className="mt-3 text-sm font-black text-red-700 bg-red-100 px-4 py-2 rounded-lg animate-pulse border border-red-200">
            🚨 Poucos horários restantes!
          </div>
        )}
      </div>

      {/* Timer Section */}
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-red-100">
        <div className="flex items-center justify-center mb-3">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mr-2" />
          <span className="text-red-700 font-bold text-sm sm:text-base">Oferta por tempo limitado</span>
        </div>
        
        <div className="flex justify-center space-x-2 sm:space-x-3 text-xl sm:text-2xl md:text-3xl font-black text-red-600 mb-4">
          <div className="bg-white rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 sm:py-3 shadow-md border border-red-100">
            <span>{hours}</span>
            <div className="text-xs sm:text-sm text-red-500 font-medium">hrs</div>
          </div>
          <div className="self-center text-red-500 font-black">:</div>
          <div className="bg-white rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 sm:py-3 shadow-md border border-red-100">
            <span>{minutes}</span>
            <div className="text-xs sm:text-sm text-red-500 font-medium">min</div>
          </div>
          <div className="self-center text-red-500 font-black">:</div>
          <div className="bg-white rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 sm:py-3 shadow-md border border-red-100">
            <span>{seconds}</span>
            <div className="text-xs sm:text-sm text-red-500 font-medium">seg</div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-3 border border-red-200">
          <p className="text-red-600 text-xs sm:text-sm font-bold leading-relaxed">
            {exclusivityMessage || `⚡ Após este período, o valor volta para ${returnPrice}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

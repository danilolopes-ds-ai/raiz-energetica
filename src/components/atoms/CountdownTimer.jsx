import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate, onExpire }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (Object.keys(newTimeLeft).length === 0 && onExpire) {
        onExpire();
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2">
        <span className="text-3xl sm:text-4xl font-bold text-primary">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-xs sm:text-sm text-gray-600 uppercase mt-1">
          {interval}
        </span>
      </div>
    );
  });

  return (
    <div className="flex items-center justify-center py-4">
      {timerComponents.length ? (
        <div className="flex items-center bg-white rounded-lg shadow-lg px-4 py-3">
          {timerComponents}
        </div>
      ) : (
        <span className="text-lg font-semibold text-gray-600">Tempo esgotado!</span>
      )}
    </div>
  );
};

export default CountdownTimer;

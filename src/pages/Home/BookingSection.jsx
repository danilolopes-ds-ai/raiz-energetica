import React from 'react';
const CAL_URL = "https://cal.com/raiz-energetica/sessaoradgen?theme=light";

const BookingSection = () => {
  return (
    <div className="w-full h-full">
      <iframe 
        src={CAL_URL}
        style={{ width: '100%', height: '100%', border: 0 }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BookingSection;

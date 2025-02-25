import React from 'react';

const TopDecoration = () => {
  return (
    <div className="flex justify-center mt-6">
      <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        {/* Curved Lines */}
        <path d="M10 50 Q50 10 90 50" stroke="#FFD700" strokeWidth="2" fill="transparent" />
        <path d="M20 50 Q50 20 80 50" stroke="#FFD700" strokeWidth="2" fill="transparent" />
        {/* Star */}
        <polygon
          points="50,15 53,25 63,25 55,30 58,40 50,34 42,40 45,30 37,25 47,25"
          fill="#87CEFA"
        />
      </svg>
    </div>
  );
};

export default TopDecoration;
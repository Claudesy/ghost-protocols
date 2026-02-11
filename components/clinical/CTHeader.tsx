import React from 'react';

/**
 * CTHeader - Clinical Trajectory Header
 * Matches Page 1 header pattern with Sentra logo and title emboss
 */
export const CTHeader: React.FC = () => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="neu-logo w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
        <img
          src="/logosen.png"
          alt="Sentra"
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="header-title-emboss">Clinical Trajectory</h1>
        <p className="text-small header-subtitle-emboss">
          Analisis Perjalanan Klinis
        </p>
      </div>
    </div>
  );
};

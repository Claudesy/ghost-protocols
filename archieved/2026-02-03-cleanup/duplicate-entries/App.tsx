/**
 * Precision-Architected. Future-Built by Docsyanpse
 * Sentra Healthcare Artificial Intelligence
 */

// Sentra Assist - DEBUG VERSION
// Minimal component to test if React mounts

import React from 'react';

console.log('[SidePanel] App.tsx loading...');

export default function App() {
  console.log('[SidePanel] App component rendering...');

  return (
    <div className="p-5 bg-sentra-900 text-platinum min-h-screen font-sans">
      <h1 className="text-2xl font-display font-bold mb-4 text-platinum">
        Sentra Assist
      </h1>
      <p className="text-muted">
        Debug mode - React mounted successfully!
      </p>
      <div className="mt-5 p-3 bg-bg-elevated rounded-lg neu-card">
        <p>If you see this, the side panel is working.</p>
      </div>
    </div>
  );
}

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
    <div style={{
      padding: '20px',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>
        Sentra Assist
      </h1>
      <p style={{ color: '#888' }}>
        Debug mode - React mounted successfully!
      </p>
      <div style={{
        marginTop: '20px',
        padding: '12px',
        backgroundColor: '#2a2a2a',
        borderRadius: '8px'
      }}>
        <p>If you see this, the side panel is working.</p>
      </div>
    </div>
  );
}

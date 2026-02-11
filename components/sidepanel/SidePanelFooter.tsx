/**
 * Sentra Assist - Side Panel Footer Component
 * Reusable footer with institution info, connection status, and legal notice
 */

interface SidePanelFooterProps {
  variant?: 'full' | 'minimal';
  institutionName?: string;
  showConnectionStatus?: boolean;
}

export function SidePanelFooter({
  variant = 'full',
  institutionName = 'Puskesmas Balowerti',
  showConnectionStatus = true,
}: SidePanelFooterProps) {
  return (
    <footer
      className={`mt-10 pt-6 border-t ${variant === 'minimal' ? 'sidepanel-footer-minimal' : ''}`}
      style={{
        borderColor: 'rgba(255,255,255,0.04)',
        position: 'relative',
        zIndex: 1,
        pointerEvents: 'none',
        clear: 'both',
      }}
    >
      <div className="flex flex-col items-center gap-3">
        {/* Institution - Only in full variant */}
        {variant === 'full' && (
          <span
            className="header-subtitle-emboss footer-institution"
            style={{ fontSize: '12px', letterSpacing: '1px' }}
          >
            {institutionName}
          </span>
        )}

        {/* Status indicator */}
        {showConnectionStatus && (
          <div className="flex items-center gap-1.5">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#39ff14', boxShadow: '0 0 6px rgba(57,255,20,0.4)' }}
            />
            <span
              style={{
                fontSize: '10px',
                color: 'var(--text-tertiary)',
                fontWeight: 500,
                letterSpacing: '0.3px',
              }}
            >
              Connected
            </span>
          </div>
        )}

        {/* Divider */}
        <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        {/* Legal notice */}
        <p
          style={{
            color: 'var(--text-muted)',
            fontWeight: 400,
            fontSize: '10.5px',
            lineHeight: '1.6',
            letterSpacing: '0.2px',
            textAlign: 'center',
            maxWidth: '280px',
          }}
        >
          <span style={{ fontWeight: 600, color: 'rgba(245,158,11,0.6)', letterSpacing: '0.5px' }}>
            LEGAL NOTICE
          </span>
          <span style={{ color: 'rgba(255,255,255,0.15)', margin: '0 4px' }}>·</span>
          ALPHA Testing — Clinical decision support platform in active development. All outputs,
          inferences, and recommendations are under strict supervision.
        </p>

        {/* SID - Forensic identifier */}
        <span
          style={{
            fontSize: '6px',
            color: 'rgba(255,255,255,0.04)',
            letterSpacing: '0.5px',
            marginTop: '4px',
            userSelect: 'none',
          }}
        >
          1F3A2130543A3135043B33151D2A21200501202905132D01202801202B
        </span>
      </div>
    </footer>
  );
}

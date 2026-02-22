import React from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 30%, #16213e 60%, #0f0f1a 100%)',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: '#e0e0e0',
    padding: '24px',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundOrb1: {
    position: 'absolute',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
    top: '-100px',
    right: '-100px',
    pointerEvents: 'none',
  },
  backgroundOrb2: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
    bottom: '-80px',
    left: '-80px',
    pointerEvents: 'none',
  },
  card: {
    maxWidth: '520px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
  },
  iconWrapper: {
    width: '80px',
    height: '80px',
    margin: '0 auto 32px',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    backdropFilter: 'blur(10px)',
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 16px',
    borderRadius: '100px',
    background: 'rgba(251, 191, 36, 0.1)',
    border: '1px solid rgba(251, 191, 36, 0.25)',
    color: '#fbbf24',
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '0.02em',
    marginBottom: '24px',
  },
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: '#fbbf24',
    animation: 'pulse 2s ease-in-out infinite',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 16px',
    lineHeight: '1.3',
    letterSpacing: '-0.02em',
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.7',
    color: '#94a3b8',
    margin: '0 0 36px',
    maxWidth: '440px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent)',
    margin: '0 0 28px',
    border: 'none',
  },
  infoBox: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '12px',
    padding: '20px 24px',
    marginBottom: '28px',
    textAlign: 'left',
  },
  infoTitle: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#cbd5e1',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    margin: '0 0 12px',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '14px',
    color: '#94a3b8',
    lineHeight: '1.6',
    marginBottom: '8px',
  },
  infoIcon: {
    color: '#6366f1',
    marginTop: '3px',
    flexShrink: 0,
  },
  footer: {
    fontSize: '12px',
    color: '#475569',
    marginTop: '40px',
    letterSpacing: '0.01em',
  },
};

const keyframesStyle = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
`;

function MaintenancePage() {
  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={styles.container}>
        <div style={styles.backgroundOrb1}></div>
        <div style={styles.backgroundOrb2}></div>

        <div style={styles.card}>
          {/* Icon */}
          <div style={styles.iconWrapper}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          {/* Status Badge */}
          <div style={styles.statusBadge}>
            <span style={styles.statusDot}></span>
            Layanan Tidak Aktif
          </div>

          {/* Title */}
          <h1 style={styles.title}>
            Layanan Hosting Anda<br />Perlu Diperpanjang
          </h1>

          {/* Description */}
          <p style={styles.description}>
            Website ini tidak dapat diakses untuk sementara waktu karena masa aktif layanan hosting telah berakhir. Silakan hubungi penyedia layanan untuk melakukan perpanjangan.
          </p>

          <hr style={styles.divider} />

          {/* Info Box */}
          <div style={styles.infoBox}>
            <p style={styles.infoTitle}>Informasi</p>
            <div style={styles.infoItem}>
              <svg style={styles.infoIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Layanan akan kembali aktif setelah proses perpanjangan selesai.</span>
            </div>
            <div style={styles.infoItem}>
              <svg style={styles.infoIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Hubungi penyedia layanan untuk informasi lebih lanjut mengenai perpanjangan.</span>
            </div>
            <div style={{...styles.infoItem, marginBottom: 0}}>
              <svg style={styles.infoIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0-6 0z" />
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <span>Seluruh data Anda tetap aman dan tersimpan dengan baik.</span>
            </div>
          </div>

          {/* Footer */}
          <p style={styles.footer}>
            &copy; {new Date().getFullYear()} Hosting Service &middot; Semua hak dilindungi
          </p>
        </div>
      </div>
    </>
  );
}

export default MaintenancePage;

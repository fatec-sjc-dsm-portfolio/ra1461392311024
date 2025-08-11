import React from 'react';
import { useLanguage } from './LanguageContext';

const switchContainer: React.CSSProperties = {
  position: 'fixed',
  top: 20,
  right: 30,
  zIndex: 10000,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const switchTrack: React.CSSProperties = {
  width: 54,
  height: 28,
  borderRadius: 16,
  background: 'rgba(255,255,255,0.18)',
  border: '1.5px solid #fff',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
  transition: 'background 0.2s',
};

const switchThumb: React.CSSProperties = {
  width: 24,
  height: 24,
  borderRadius: '50%',
  background: '#fff',
  position: 'absolute',
  top: 2,
  left: 2,
  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  transition: 'left 0.22s cubic-bezier(.4,0,.2,1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
  fontSize: 13,
  color: '#222',
};

const labelStyle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 15,
  color: '#fff',
  letterSpacing: 1,
  userSelect: 'none',
  opacity: 0.7,
};

export default function LanguageSwitch({ onSwitch }: { onSwitch?: () => void }) {
  const { language, setLanguage } = useLanguage();
  const isEN = language === 'EN';
  return (
    <div style={switchContainer}>
      <span style={{ ...labelStyle, opacity: isEN ? 1 : 0.5 }}>EN</span>
      <div
        style={switchTrack}
        aria-label="Switch language"
        onClick={() => {
          setLanguage(isEN ? 'BR' : 'EN');
          if (onSwitch) onSwitch();
        }}
      >
        <div
          style={{
            ...switchThumb,
            left: isEN ? 28 : 2,
          }}
        >
          {isEN ? 'EN' : 'BR'}
        </div>
      </div>
      <span style={{ ...labelStyle, opacity: !isEN ? 1 : 0.5 }}>BR</span>
    </div>
  );
}

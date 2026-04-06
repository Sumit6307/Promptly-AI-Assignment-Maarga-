import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#EDE8E1',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          background: '#F5EFE6',
          borderRadius: '24px',
          boxShadow: '0 2px 24px rgba(180,160,130,0.10)',
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          minHeight: '280px',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '42%',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <img
            src="/Image-6.png"
            alt="Archway"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '120%',
              objectFit: 'cover',
              objectPosition: 'center bottom',
              mixBlendMode: 'multiply',
              opacity: 0.95,
            }}
          />
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '40px 40px 40px 20px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: '#2D2D2D',
              fontSize: '26px',
              fontWeight: 600,
              marginBottom: '10px',
              lineHeight: 1.3,
            }}
          >
            Stay Connected
          </h2>
          <p
            style={{
              color: '#888',
              fontSize: '13px',
              marginBottom: '22px',
              lineHeight: 1.6,
            }}
          >
            Stay informed about our upcoming<br />paths and experiences
          </p>

          <input
            type="email"
            placeholder="Enter email address"
            style={{
              width: '100%',
              background: '#fff',
              border: '1px solid #E0DAD0',
              borderRadius: '8px',
              padding: '10px 16px',
              fontSize: '13px',
              color: '#2D2D2D',
              marginBottom: '12px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          <button
            style={{
              width: '100%',
              border: '1.5px solid #B8A08A',
              borderRadius: '999px',
              background: 'transparent',
              color: '#2D2D2D',
              padding: '10px 24px',
              fontSize: '13px',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              fontWeight: 500,
              marginBottom: '20px',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#B8A08A';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#2D2D2D';
            }}
          >
            Join The Path
          </button>

          <p
            style={{
              color: '#aaa',
              fontSize: '11px',
              textAlign: 'center',
              letterSpacing: '0.03em',
            }}
          >
            Shared With Care From{' '}
            <a
              href="mailto:hello@maarga.co"
              style={{ color: '#B8A08A', textDecoration: 'none' }}
            >
              hello@maarga.co
            </a>
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: '36px',
          color: 'rgba(45,45,45,0.22)',
          fontSize: '11px',
          letterSpacing: '0.45em',
          fontWeight: 700,
          textTransform: 'uppercase',
          fontFamily: 'sans-serif',
        }}
      >
        MAARGA
      </div>
    </footer>
  );
};

export default Footer;

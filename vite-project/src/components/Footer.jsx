import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#F7F2EE',
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#FDF9F6',
          borderRadius: '12px',
          boxShadow: '0 4px 40px rgba(0,0,0,0.02)',
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          minHeight: '340px',
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
            padding: '44px 44px 44px 24px',
          }}
        >
          <h2
            style={{
              fontFamily: '"Playfair Display", serif',
              color: '#1A1A1A',
              fontSize: '28px',
              fontWeight: 400,
              marginBottom: '10px',
              lineHeight: 1.3,
            }}
          >
            Stay Connected
          </h2>
          <p
            style={{
              color: '#1A1A1A',
              opacity: 0.6,
              fontSize: '13.5px',
              marginBottom: '28px',
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Stay informed about our upcoming<br />paths and experiences
          </p>

          <input
            type="email"
            placeholder="Enter email address"
            style={{
              width: '100%',
              background: '#FAF8F5',
              border: '1px solid #EAE2D8',
              borderRadius: '6px',
              padding: '12px 16px',
              fontSize: '13px',
              color: '#1A1A1A',
              marginBottom: '14px',
              outline: 'none',
              boxSizing: 'border-box',
              fontWeight: 300,
            }}
          />

          <button
            style={{
              width: '100%',
              border: '1px solid #C5A070',
              borderRadius: '999px',
              background: 'transparent',
              color: '#1A1A1A',
              padding: '11px 24px',
              fontSize: '12.5px',
              letterSpacing: '0.06em',
              cursor: 'pointer',
              fontWeight: 400,
              textTransform: 'uppercase',
              marginBottom: '24px',
              transition: 'background 0.3s, color 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#C5A070';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#1A1A1A';
            }}
          >
            Join The Path
          </button>

          <p
            style={{
              color: '#1A1A1A',
              opacity: 0.4,
              fontSize: '11px',
              textAlign: 'center',
              letterSpacing: '0.04em',
              fontWeight: 300,
            }}
          >
            Shared With Care From{' '}
            <a
              href="mailto:hello@maarga.co"
              style={{ color: '#C5A070', textDecoration: 'none' }}
            >
              hello@maarga.co
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

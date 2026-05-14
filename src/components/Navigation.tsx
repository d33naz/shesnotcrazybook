import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Introduction', id: 'introduction' },
    { label: 'Chapters', id: 'chapters' },
    { label: 'Author', id: 'author' },
    { label: 'Praise', id: 'praise' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        padding: '0 32px',
        transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
        background: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201, 168, 76, 0.1)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="font-heading"
          style={{
            fontSize: '18px',
            fontWeight: 300,
            letterSpacing: '-0.5px',
            color: '#C9A84C',
            textDecoration: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          SNCL
        </button>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className="font-body transition-smooth"
              style={{
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.5px',
                color: '#F9F8F2',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#C9A84C';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#F9F8F2';
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://buy.stripe.com/8x2dR971559cgUl9Zv2kw00"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body transition-smooth"
            style={{
              display: 'inline-block',
              padding: '8px 24px',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#050505',
              background: '#C9A84C',
              border: 'none',
              borderRadius: '1000px',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#D4A574';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C9A84C';
            }}
          >
            Get the Book
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="nav-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          aria-label="Toggle menu"
        >
          <div style={{ width: '24px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <span style={{
              display: 'block',
              height: '1.5px',
              background: '#C9A84C',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              height: '1.5px',
              background: '#C9A84C',
              transition: 'all 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              height: '1.5px',
              background: '#C9A84C',
              transition: 'all 0.3s ease',
              transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
            }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="nav-mobile"
          style={{
            position: 'absolute',
            top: '64px',
            left: 0,
            width: '100%',
            background: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(12px)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.id)}
              className="font-body"
              style={{
                fontSize: '16px',
                fontWeight: 400,
                color: '#F9F8F2',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://buy.stripe.com/8x2dR971559cgUl9Zv2kw00"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: '#050505',
              background: '#C9A84C',
              border: 'none',
              borderRadius: '1000px',
              cursor: 'pointer',
              padding: '12px 24px',
              marginTop: '8px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Get the Book
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

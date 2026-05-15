export default function FooterSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      style={{
        position: 'relative',
        width: '100%',
        background: '#050505',
        padding: '60px 0 40px',
      }}
    >
      {/* Divider */}
      <div
        style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #5C4D3C, transparent)',
          marginBottom: '48px',
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '40px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div style={{ flex: '1 1 300px', minWidth: '250px' }}>
            <h3
              className="font-heading"
              style={{
                fontSize: '22px',
                fontWeight: 300,
                letterSpacing: '-0.5px',
                color: '#C9A84C',
                marginBottom: '12px',
              }}
            >
              She's Not Crazy, You're Just Not Listening
            </h3>
            <p
              className="font-body"
              style={{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: 1.6,
                color: '#5C4D3C',
                maxWidth: '300px',
              }}
            >
              A Practical Guide to Hearing Her, Repairing Conflict, and
              Rebuilding Connection.
            </p>
          </div>

          {/* Book Navigation */}
          <div style={{ flex: '0 0 auto' }}>
            <h4
              className="font-body"
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '1.32px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '20px',
              }}
            >
              Book
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'The Philosophy', id: 'philosophy' },
                { label: 'Chapters', id: 'chapters' },
                { label: 'The Promise', id: 'promise' },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: '12px' }}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="font-body transition-smooth"
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#5C4D3C',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#C9A84C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#5C4D3C';
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: '0 0 auto' }}>
            <h4
              className="font-body"
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '1.32px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '20px',
              }}
            >
              Author
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { label: 'About Austin', id: 'author' },
                { label: 'Praise', id: 'praise' },
              ].map((item) => (
                <li key={item.label} style={{ marginBottom: '12px' }}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="font-body transition-smooth"
                    style={{
                      fontSize: '14px',
                      fontWeight: 400,
                      color: '#5C4D3C',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#C9A84C';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#5C4D3C';
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ flex: '0 0 auto' }}>
            <h4
              className="font-body"
              style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '1.32px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: '20px',
              }}
            >
              Get the Book
            </h4>
            <a
              href="https://buy.stripe.com/8x2dR971559cgUl9Zv2kw00"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body transition-smooth"
              style={{
                display: 'inline-block',
                padding: '12px 32px',
                fontSize: '13px',
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
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#C9A84C';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Get the Book
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(92, 77, 60, 0.3)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <p
            className="font-body"
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: '#5C4D3C',
            }}
          >
            &copy; 2026 Austin D. Howell. All rights reserved.
          </p>
          <p
            className="font-body"
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: '#5C4D3C',
            }}
          >
            First Edition
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Chapter {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const chapters: Chapter[] = [
  {
    number: 1,
    title: 'The Language Beneath the Words',
    subtitle: 'Understanding Emotional Intelligence',
    description: 'Learn the hidden emotional currents that drive every conversation. Discover how to read between the lines and truly understand what your partner is communicating.',
    image: '/images/chapter-01.jpg',
  },
  {
    number: 2,
    title: 'Recognising and Regulating Your Emotions',
    subtitle: 'Building Self-Awareness',
    description: 'Master the traffic light system for emotional regulation. Develop the self-awareness that becomes the foundation for every healthy relationship.',
    image: '/images/chapter-02.jpg',
  },
  {
    number: 3,
    title: 'Active Listening',
    subtitle: 'Hearing Beyond Words',
    description: 'Transform how you listen with the LEAPS framework. Move from passive hearing to active understanding that makes your partner feel truly seen.',
    image: '/images/chapter-03.jpg',
  },
  {
    number: 4,
    title: 'Establishing Healthy Boundaries',
    subtitle: 'Protecting the Relationship',
    description: 'Build the fences that protect your garden. Learn the three-step process for setting boundaries that strengthen rather than divide your connection.',
    image: '/images/chapter-04.jpg',
  },
  {
    number: 5,
    title: 'Navigating Conflict Without Damage',
    subtitle: 'The Repair Toolkit',
    description: 'Turn every disagreement into an opportunity for deeper understanding. Master the scripts and strategies that repair conflict rather than deepen wounds.',
    image: '/images/chapter-05.jpg',
  },
  {
    number: 6,
    title: 'The Art of Apology and Repair',
    subtitle: 'Rebuilding Trust',
    description: 'Learn the anatomy of a genuine apology. Discover how to repair ruptures with the four-part model that rebuilds trust and deepens intimacy.',
    image: '/images/chapter-06.jpg',
  },
  {
    number: 7,
    title: 'Emotional Intimacy and Vulnerability',
    subtitle: 'Opening Your Heart',
    description: 'Create a sanctuary of safety where vulnerability becomes your greatest strength. Build the emotional closeness that transforms relationships.',
    image: '/images/chapter-07.jpg',
  },
  {
    number: 8,
    title: 'Physical Intimacy and Connection',
    subtitle: 'Beyond the Physical',
    description: 'Deepen your physical connection through understanding emotional safety. Create an environment where both partners feel desired and cherished.',
    image: '/images/chapter-08.jpg',
  },
  {
    number: 9,
    title: 'Quality Time and Presence',
    subtitle: 'Being Truly There',
    description: 'Move beyond mere time together to genuine presence. Discover the rituals and practices that create meaningful connection in everyday moments.',
    image: '/images/chapter-09.jpg',
  },
  {
    number: 10,
    title: 'Your 8-Week Foundation Action Plan',
    subtitle: 'Putting It All Together',
    description: 'A structured, week-by-week roadmap that integrates every skill from the book into your daily life. Transform knowledge into lasting relationship habits.',
    image: '/images/chapter-10.jpg',
  },
];

export default function ChaptersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Staggered card animations
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="chapters"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#F1F0EA',
        padding: '120px 0',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            marginBottom: '80px',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          <span
            className="font-body"
            style={{
              display: 'block',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '1.32px',
              textTransform: 'uppercase',
              color: '#5C4D3C',
              marginBottom: '24px',
            }}
          >
            Inside the Book
          </span>
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-1.68px',
              lineHeight: 1.2,
              color: '#050505',
              marginBottom: '16px',
            }}
          >
            Tools for Real Connection
          </h2>
          <p
            className="font-body"
            style={{
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.16px',
              lineHeight: 1.6,
              color: '#5C4D3C',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Ten practical chapters designed to transform how you communicate,
            connect, and grow together.
          </p>
        </div>

        {/* Chapter Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {chapters.map((chapter, index) => (
            <div
              key={chapter.number}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="transition-smooth"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                background: '#F9F8F2',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
              }}
            >
              {/* Chapter Image */}
              <div
                style={{
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={chapter.image}
                  alt={chapter.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Chapter Content */}
              <div style={{ padding: '28px' }}>
                <span
                  className="font-body"
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '1.32px',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                    marginBottom: '8px',
                  }}
                >
                  Chapter {chapter.number}
                </span>
                <h3
                  className="font-heading"
                  style={{
                    fontSize: '22px',
                    fontWeight: 400,
                    letterSpacing: '-0.5px',
                    lineHeight: 1.3,
                    color: '#050505',
                    marginBottom: '6px',
                  }}
                >
                  {chapter.title}
                </h3>
                <p
                  className="font-accent"
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: '#5C4D3C',
                    marginBottom: '12px',
                  }}
                >
                  {chapter.subtitle}
                </p>
                <p
                  className="font-body"
                  style={{
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#5C4D3C',
                  }}
                >
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

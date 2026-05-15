import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DustMotes from '../components/DustMotes';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "This isn't just another relationship book. It's a roadmap back to the person you love, and back to yourself.",
    name: 'Marcus Chen',
    location: 'Sydney, Australia',
  },
  {
    quote: "Finally, a relationship guide that speaks your language without talking down to you. Practical, honest, and genuinely transformative.",
    name: 'James O\'Brien',
    location: 'Melbourne, Australia',
  },
  {
    quote: "The emotional regulation chapter alone was worth it. My partner noticed the difference within the first week.",
    name: 'David Larsson',
    location: 'Stockholm, Sweden',
  },
  {
    quote: "I've read dozens of relationship books. This is the first one that gave me tools I could actually use in the heat of the moment.",
    name: 'Chris Williamson',
    location: 'Auckland, New Zealand',
  },
  {
    quote: "The 8-week action plan is brilliant. It takes everything in the book and turns it into real, lasting change.",
    name: 'Michael Santos',
    location: 'London, United Kingdom',
  },
  {
    quote: "We went from constant bickering to feeling like newlyweds again. This book changed everything.",
    name: 'Andrew Kim',
    location: 'Vancouver, Canada',
  },
  {
    quote: "It's not easy, even just to take the first step, but we are here to try, right? The universe has brought us here to try, one baby step at a time. Let's get these started!\n\nI love the author's goodwill and sincerity. I love how it's written with logic and includes so many examples for us to understand and put into practice. Good luck to us all!",
    name: 'Monique Yi-Cheng Kao',
    location: 'Taipei, Taiwan',
  },
];

export default function PraiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="praise"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#050505',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      <DustMotes opacity={0.3} particleCount={100} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
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
              color: '#C9A84C',
              marginBottom: '24px',
            }}
          >
            Early Praise
          </span>
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-1.68px',
              lineHeight: 1.2,
              color: '#F9F8F2',
            }}
          >
            What Early Readers Are Saying
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="transition-smooth"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                background: 'rgba(249, 248, 242, 0.04)',
                borderRadius: '16px',
                padding: '40px 32px',
                border: '1px solid rgba(201, 168, 76, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.4)';
                e.currentTarget.style.background = 'rgba(249, 248, 242, 0.07)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.15)';
                e.currentTarget.style.background = 'rgba(249, 248, 242, 0.04)';
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '64px',
                  lineHeight: 1,
                  color: '#C9A84C',
                  marginBottom: '16px',
                  opacity: 0.5,
                }}
              >
                &ldquo;
              </div>

              <p
                className="font-accent"
                style={{
                  fontSize: '18px',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.7,
                  color: '#F9F8F2',
                  marginBottom: '32px',
                  whiteSpace: 'pre-line',
                }}
              >
                {testimonial.quote}
              </p>

              <div>
                <p
                  className="font-heading"
                  style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#C9A84C',
                    marginBottom: '4px',
                  }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="font-body"
                  style={{
                    fontSize: '13px',
                    fontWeight: 400,
                    color: '#5C4D3C',
                  }}
                >
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

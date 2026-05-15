import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PromiseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      });

      gsap.to(coverRef.current, {
        y: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="promise"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: 'linear-gradient(135deg, #0a0806 0%, #14110f 50%, #1a1410 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle warm glow in background */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 168, 76, 0.06) 0%, transparent 70%)',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          minHeight: '800px',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Text Block */}
        <div
          ref={textRef}
          style={{
            flex: '1 1 50%',
            minWidth: '320px',
            padding: '80px 48px 80px 64px',
            opacity: 0,
            transform: 'translateX(-40px)',
            position: 'relative',
            zIndex: 1,
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
            First Edition
          </span>

          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-1.68px',
              lineHeight: 1.2,
              color: '#F9F8F2',
              marginBottom: '24px',
            }}
          >
            From Friction to Closeness
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.16px',
              lineHeight: 1.7,
              color: '#F1F0EA',
              marginBottom: '32px',
              maxWidth: '480px',
              opacity: 0.9,
            }}
          >
            What if the very thing causing conflict in your relationship is actually
            the doorway to the deepest intimacy you've ever known? This book gives you
            the tools, scripts, and frameworks to turn every difficult conversation
            into an opportunity for connection.
          </p>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.16px',
              lineHeight: 1.7,
              color: '#F1F0EA',
              marginBottom: '40px',
              maxWidth: '480px',
              opacity: 0.7,
            }}
          >
            With 10 practical chapters covering everything from emotional intelligence
            to physical intimacy, plus an 8-week action plan, you'll have everything
            you need to build a relationship that thrives.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://buy.stripe.com/8x2dR971559cgUl9Zv2kw00"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body transition-smooth"
              style={{
                display: 'inline-block',
                padding: '16px 40px',
                fontSize: '14px',
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

            <a
              href="#chapters"
              className="font-body transition-smooth"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#C9A84C',
                background: 'transparent',
                border: '1.5px solid #C9A84C',
                borderRadius: '1000px',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(201, 168, 76, 0.1)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Explore Chapters
            </a>
          </div>
        </div>

        {/* Book Cover Image */}
        <div
          ref={imageRef}
          style={{
            flex: '1 1 50%',
            minWidth: '320px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 48px',
            opacity: 0,
            transform: 'scale(0.9)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '380px',
              maxWidth: '100%',
            }}
          >
            {/* Glow behind cover */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '80%',
                height: '90%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '8px',
                background: 'radial-gradient(ellipse at center, rgba(201, 168, 76, 0.25) 0%, transparent 70%)',
                filter: 'blur(40px)',
                zIndex: 0,
              }}
            />
            {/* Book cover */}
            <img
              ref={coverRef}
              src="/images/book-cover.png"
              alt="She's Not Crazy, You're Just Not Listening — A Practical Guide to Listening Better, Repairing Faster, and Building Healthier Patterns by Austin D. Howell"
              style={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '4px',
                boxShadow: '0 40px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(201, 168, 76, 0.1)',
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AuthorSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="author"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        background: '#F1F0EA',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          minHeight: '700px',
        }}
      >
        {/* Author Portrait */}
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
            transform: 'translateX(-40px)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '400px',
              maxWidth: '100%',
              height: '530px',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '8px solid #F1F0EA',
              boxShadow: '0px 20px 40px rgba(0,0,0,0.15)',
            }}
          >
            <img
              src="/images/author-portrait.jpg"
              alt="Austin D. Howell — Relationship guide author"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        {/* Text Block */}
        <div
          ref={textRef}
          style={{
            flex: '1 1 50%',
            minWidth: '320px',
            padding: '80px 64px 80px 48px',
            opacity: 0,
            transform: 'translateX(40px)',
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
            About the Author
          </span>

          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-1.68px',
              lineHeight: 1.2,
              color: '#050505',
              marginBottom: '24px',
            }}
          >
            Austin D. Howell
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.16px',
              lineHeight: 1.7,
              color: '#5C4D3C',
              marginBottom: '20px',
              maxWidth: '480px',
            }}
          >
            I've been married. I've been divorced. I've experienced and counselled
            relationships of every kind — across cultures, continents, and walks of
            life. From boardrooms to living rooms, from Perth to Paris, I've watched
            the same patterns play out: good people who love each other, struggling
            to connect. This is what I've learnt.
          </p>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.16px',
              lineHeight: 1.7,
              color: '#5C4D3C',
              marginBottom: '20px',
              maxWidth: '480px',
            }}
          >
            Writer, systems-minded strategist, and digital product builder based in
            Perth, Western Australia. His work focuses on practical frameworks that
            help people think more clearly, communicate more effectively, and build
            stronger structures in both life and work.
          </p>

          <p
            className="font-body"
            style={{
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.16px',
              lineHeight: 1.7,
              color: '#5C4D3C',
              marginBottom: '32px',
              maxWidth: '480px',
            }}
          >
            With a background in product development and a passion for understanding
            human connection, Austin brings a unique blend of analytical thinking and
            emotional wisdom to the world of relationship guidance. This book represents
            years of research, personal experience, and a genuine desire to help couples
            build stronger, more resilient partnerships.
          </p>

          {/* Signature */}
          <div
            style={{
              borderLeft: '2px solid #C9A84C',
              paddingLeft: '24px',
            }}
          >
            <p
              className="font-accent"
              style={{
                fontSize: '18px',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.6,
                color: '#050505',
              }}
            >
              "For everyone who has ever tried to explain their hurt clearly
              and still felt unseen."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import DustMotes from '../components/DustMotes';
import gsap from 'gsap';

export default function HeroSection() {
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const authorRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: 'power3.out',
    })
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power3.out',
    }, '-=0.8')
    .to(authorRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.7')
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.5');

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        background: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <DustMotes opacity={0.6} particleCount={180} />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '0 24px',
        }}
      >
        <span
          ref={labelRef}
          className="font-body"
          style={{
            display: 'block',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '1.32px',
            textTransform: 'uppercase',
            color: '#C9A84C',
            marginBottom: '32px',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          A Practical Guide to Hearing Her, Repairing Conflict, and Rebuilding Connection
        </span>

        <h1
          ref={titleRef}
          className="font-heading"
          style={{
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 300,
            letterSpacing: '-2.4px',
            lineHeight: 1.1,
            color: '#C9A84C',
            marginBottom: '24px',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          She's Not Crazy,{" "}
          <br className="hidden sm:block" />
          You're Just Not Listening
        </h1>

        <p
          ref={authorRef}
          className="font-heading"
          style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '-0.5px',
            color: '#F9F8F2',
            marginBottom: '12px',
            opacity: 0,
            transform: 'translateY(20px)',
          }}
        >
          Austin D. Howell
        </p>

        <p
          className="font-body"
          style={{
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#5C4D3C',
            marginBottom: '48px',
          }}
        >
          Part 1 — The Foundations
        </p>

        <a
          ref={ctaRef}
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
            opacity: 0,
            transform: 'translateY(20px)',
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
    </section>
  );
}

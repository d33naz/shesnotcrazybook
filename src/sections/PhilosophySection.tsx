import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LiquidGold from '../components/LiquidGold';

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          toggleActions: 'play none none none',
        },
      });

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.7')
      .to(bodyRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, '-=0.7');
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '800px',
        background: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <LiquidGold />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          maxWidth: '700px',
          padding: '0 24px',
          paddingTop: '120px',
          paddingBottom: '120px',
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
          The Philosophy
        </span>

        <h2
          ref={titleRef}
          className="font-heading"
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 300,
            letterSpacing: '-1.68px',
            lineHeight: 1.2,
            color: '#F9F8F2',
            marginBottom: '24px',
            opacity: 0,
            transform: 'translateY(30px)',
          }}
        >
          Why we fight. How we connect.
        </h2>

        <p
          ref={bodyRef}
          className="font-body"
          style={{
            fontSize: '16px',
            fontWeight: 400,
            letterSpacing: '-0.16px',
            lineHeight: 1.7,
            color: '#F9F8F2',
            opacity: 0,
            transform: 'translateY(20px)',
            maxWidth: '560px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Discover the invisible threads that shape our closest relationships.
          Every conflict holds a message. Every frustration is an unmet need wearing armour.
          This book reveals the patterns beneath the surface, giving you practical tools
          to transform friction into the deepest intimacy you've ever known.
        </p>
      </div>
    </section>
  );
}

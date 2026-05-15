import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function IntroductionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
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
      id="introduction"
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
          maxWidth: '800px',
          margin: '0 auto',
          padding: '120px 24px',
        }}
      >
        <div
          ref={contentRef}
          style={{
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
            Read the Introduction
          </span>

          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 300,
              letterSpacing: '-1.68px',
              lineHeight: 1.2,
              color: '#050505',
              marginBottom: '32px',
            }}
          >
            Everyone who has ever sat across from the person they love and
            thought, "I don't understand what you want from me," is holding the
            beginning of an answer in their hands.
          </h2>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="font-body transition-smooth"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
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
              marginBottom: isOpen ? '48px' : '0',
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
            {isOpen ? 'Close Introduction' : 'Read the Introduction'}
            <ChevronDown
              size={18}
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            />
          </button>

          {/* Collapsible Content */}
          <div
            className="font-body"
            style={{
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '-0.16px',
              lineHeight: 1.8,
              color: '#5C4D3C',
              maxHeight: isOpen ? '3000px' : '0px',
              opacity: isOpen ? 1 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.6s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.4s ease',
            }}
          >
            <p style={{ marginBottom: '24px' }}>
              This book is written for anyone who is trying. The person who shows
              up, who wants to be a good partner, who genuinely cares about the
              person in their life — and who, despite all of that, keeps finding
              themselves in the same conversations that go nowhere, the same
              conflicts that feel impossible to resolve, and the same disconnect
              that leaves both people feeling more alone together than they do
              apart.
            </p>

            <p style={{ marginBottom: '24px' }}>
              If you have ever felt like you are speaking a different language
              from the person you love, you are not wrong. You are speaking a
              different language. And this book is the translation guide.
            </p>

            <h3
              className="font-heading"
              style={{
                fontSize: '28px',
                fontWeight: 400,
                letterSpacing: '-0.5px',
                lineHeight: 1.3,
                color: '#050505',
                marginTop: '48px',
                marginBottom: '24px',
              }}
            >
              What This Book Is
            </h3>

            <p style={{ marginBottom: '24px' }}>
              This is a practical handbook for anyone who wants to understand
              their partner better, communicate more effectively, and build
              relationships that actually work. It is built around the idea that
              most relationship problems are not personality problems — they are
              communication problems. And communication problems have solutions.
            </p>

            <p style={{ marginBottom: '24px' }}>
              You will find frameworks you can use immediately. Scripts for
              difficult conversations. Tools for reading the emotional landscape
              of your relationship. And most importantly, a clear path from
              where you are to where you want to be.
            </p>

            <h3
              className="font-heading"
              style={{
                fontSize: '28px',
                fontWeight: 400,
                letterSpacing: '-0.5px',
                lineHeight: 1.3,
                color: '#050505',
                marginTop: '48px',
                marginBottom: '24px',
              }}
            >
              What This Book Is Not
            </h3>

            <p style={{ marginBottom: '24px' }}>
              This is not a psychology textbook. It is not a collection of vague
              advice about "being more present" or "listening better" without
              telling you exactly how to do those things. It is not about fixing
              your partner. And it is definitely not about pretending that
              relationships are easy.
            </p>

            <p style={{ marginBottom: '24px' }}>
              This book assumes that you are willing to do the work. It will
              give you the tools, but you have to pick them up and use them.
            </p>

            <h3
              className="font-heading"
              style={{
                fontSize: '28px',
                fontWeight: 400,
                letterSpacing: '-0.5px',
                lineHeight: 1.3,
                color: '#050505',
                marginTop: '48px',
                marginBottom: '24px',
              }}
            >
              How to Read This Book
            </h3>

            <p style={{ marginBottom: '24px' }}>
              Each chapter is designed to be read in one sitting and applied
              immediately. You do not need to read the whole book before you
              start using what you learn. In fact, the best approach is to read
              a chapter, practice the tools for a week, and then move on to the
              next.
            </p>

            <p style={{ marginBottom: '24px' }}>
              The worksheets at the end of each chapter are not optional extras
              — they are where the real transformation happens. Do not skip them.
            </p>

            <h3
              className="font-heading"
              style={{
                fontSize: '28px',
                fontWeight: 400,
                letterSpacing: '-0.5px',
                lineHeight: 1.3,
                color: '#050505',
                marginTop: '48px',
                marginBottom: '24px',
              }}
            >
              The Real Cost of Avoidance
            </h3>

            <p style={{ marginBottom: '24px' }}>
              Here is the truth that most people do not want to hear: the gap
              between you and your partner is not going to close on its own.
              Ignoring it will not make it disappear. Hoping they will "just get
              over it" is a strategy that has never worked for anyone.
            </p>

            <p style={{ marginBottom: '24px' }}>
              The cost of not learning these skills is not just a relationship
              that feels harder than it should. It is a relationship that slowly
              erodes. It is a partner who stops trying because they are tired of
              not being heard. It is the creeping loneliness of being physically
              close to someone but emotionally distant.
            </p>

            <p style={{ marginBottom: '24px' }}>
              The good news is that the skills in this book are learnable. They
              are not innate talents that some are born with and others are not.
              They are specific, concrete abilities that can be developed with
              practice. And those who develop them find that everything in their
              relationship gets easier — not because their partner changed, but
              because they learned how to see, hear, and respond in ways that
              actually work.
            </p>

            <div
              style={{
                borderLeft: '2px solid #C9A84C',
                paddingLeft: '24px',
                marginTop: '48px',
                marginBottom: '48px',
              }}
            >
              <p
                className="font-accent"
                style={{
                  fontSize: '20px',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: '#050505',
                }}
              >
                "Those who transform their relationships are not the ones who
                never struggle. They are the ones who learn how to struggle
                together — and come out stronger on the other side."
              </p>
            </div>

            <p style={{ marginBottom: '24px' }}>
              That is what this book is about. Not perfection. Not becoming
              someone you are not. Just learning how to close the gap, one
              conversation at a time.
            </p>

            <p style={{ marginBottom: '48px' }}>Let's begin.</p>

            <div style={{ textAlign: 'center' }}>
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
                Get the Full Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

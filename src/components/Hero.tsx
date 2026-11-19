import { useState, useEffect } from 'react';
import '../styles/Hero.css';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const roles = personalInfo.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const fullText = roles[roleIndex];

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        // Typing character by character (~90ms)
        timeoutId = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 90);
      } else {
        // Pause after completing full word (~1200ms)
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
      }
    } else {
      if (currentText.length > 0) {
        // Deleting character by character (~45ms)
        timeoutId = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 45);
      } else {
        // Pause before typing next word (~300ms)
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 300);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="hero">
      <div className="container hero__container">
        {/* Left Column: Text & CTAs */}
        <div className="hero__content">
          {/* Status badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            Available for Internships · Colombo, Sri Lanka
          </div>

          {/* Main heading */}
          <h1 className="hero__heading">
            Hi, I'm <span>Senthuran</span>
          </h1>

          {/* Continuous typing effect */}
          <div className="hero__role-wrapper" aria-label="Professional roles">
            <span className="hero__role-label">I am a</span>
            <span className="hero__role" id="typing-target">
              {currentText || '\u00A0'}
            </span>
            <span className="hero__cursor" aria-hidden="true" />
          </div>

          {/* Short intro */}
          <p className="hero__intro">{personalInfo.heroIntro}</p>

          {/* CTA buttons */}
          <div className="hero__cta">
            <a
              href={personalInfo.resumePath}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              download="Senthuran_Arulselvam_Resume.pdf"
            >
              {/* Download icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>

            <button
              className="btn btn-outline"
              onClick={() => {
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </button>
          </div>

          {/* Scroll hint */}
          <div className="hero__scroll-hint" aria-hidden="true">
            Scroll down to explore
          </div>
        </div>

        {/* Right Column: Profile Photo */}
        <div className="hero__image-col">
          <div className="hero__image-wrapper">
            <img
              src="/images/profile.jpg"
              alt="Senthuran Arulselvam"
              className="hero__image"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = '/images/profile.jpeg';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

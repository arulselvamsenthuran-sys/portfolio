import { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { personalInfo } from '../data/portfolio';

const NAV_LINKS = [
  { label: 'Home',     href: 'home'     },
  { label: 'About',    href: 'about'    },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills',   href: 'skills'   },
  { label: 'Contact',  href: 'contact'  },
];

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="18"
    height="18"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="18"
    height="18"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* Close mobile menu on resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container navbar__inner">
          {/* Logo */}
          <button
            className="navbar__logo"
            onClick={() => scrollTo('home')}
            aria-label="Go to top"
          >
            Senthuran<span>.</span>
          </button>

          {/* Desktop links & social icons */}
          <div className="navbar__right">
            <ul className="navbar__links" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    className={`navbar__link${activeSection === link.href ? ' active' : ''}`}
                    onClick={() => scrollTo(link.href)}
                    aria-current={activeSection === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="navbar__socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__social-link"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__social-link"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}
        role="menu"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.href}
            className={`navbar__mobile-link${activeSection === link.href ? ' active' : ''}`}
            onClick={() => scrollTo(link.href)}
            role="menuitem"
          >
            {link.label}
          </button>
        ))}

        <div className="navbar__mobile-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-social-link"
            aria-label="GitHub Profile"
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-social-link"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;

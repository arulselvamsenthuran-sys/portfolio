import { useState } from 'react';
import '../styles/About.css';
import { personalInfo, educationList } from '../data/portfolio';

/* SVG placeholder icon */
const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
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
    width="15"
    height="15"
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const About = () => {
  const [imgError, setImgError] = useState(false);

  const usjp = educationList.find((e) => e.id === 'usjp')!;
  const alevel = educationList.find((e) => e.id === 'jaffna-college')!;

  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Section header */}
        <p className="section-label">About Me</p>
        <h2 className="section-title">Who Am I?</h2>

        <div className="about__grid">
          {/* ── Left: Image + Resume + Socials ── */}
          <div className="about__image-col">
            <div className="about__image-wrapper">
              {!imgError ? (
                <img
                  src={personalInfo.profileImage}
                  alt="Senthuran Arulselvam – profile photo"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  className="about__image-placeholder"
                  aria-label="Profile picture placeholder"
                >
                  <PersonIcon />
                  <p>Profile photo</p>
                </div>
              )}
            </div>

            <a
              href={personalInfo.resumePath}
              className="btn btn-primary about__resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              download="Senthuran_Arulselvam_Resume.pdf"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
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

            {/* Social buttons */}
            <div className="about__socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline about__social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline about__social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="about__content">
            {/* Introduction */}
            <p className="about__intro-text">{personalInfo.aboutIntro}</p>

            {/* Undergraduate education card */}
            <div className="about__edu-card">
              <span className="about__edu-card-label">Undergraduate Degree</span>
              <p className="about__edu-degree">{usjp.degree}</p>
              <p className="about__edu-university">{usjp.institution}</p>
              <div className="about__edu-meta">
                {usjp.department && (
                  <span className="about__edu-tag">{usjp.department}</span>
                )}
                {usjp.minor && (
                  <span className="about__edu-tag">{usjp.minor}</span>
                )}
                {usjp.period && (
                  <span className="about__edu-tag">{usjp.period}</span>
                )}
                {usjp.gpa && (
                  <span className="about__edu-tag">GPA: {usjp.gpa}</span>
                )}
              </div>
              {usjp.status && (
                <div className="about__edu-status">
                  <span className="about__edu-status-dot" aria-hidden="true" />
                  {usjp.status}
                </div>
              )}
            </div>

            {/* A/Level card */}
            <div className="about__edu-card">
              <span className="about__edu-card-label">{alevel.level}</span>
              <p className="about__edu-degree">{alevel.degree}</p>
              <p className="about__edu-university">{alevel.institution}</p>
              {alevel.highlights && alevel.highlights.length > 0 && (
                <ul className="about__al-results" aria-label="A/L results">
                  {alevel.highlights.map((h) => (
                    <li key={h} className="about__al-result-item">
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

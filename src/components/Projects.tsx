import { useState } from 'react';
import '../styles/Projects.css';
import { projects, type Project } from '../data/portfolio';

/* Placeholder icon */
const ImageIcon = () => (
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
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

/* GitHub icon */
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

/* External link icon */
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* Clock icon for duration */
const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    width="12"
    height="12"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

/* Individual card */
interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="project-card" aria-label={project.title}>
      {/* Image */}
      <div className="project-card__image-wrap">
        {!imgError ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-card__image-placeholder">
            <ImageIcon />
            <span>Image coming soon</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="project-card__body">
        {/* Category + duration row */}
        <div className="project-card__meta">
          <span className="project-card__category">{project.category}</span>
          <span className="project-card__duration">
            <ClockIcon />
            {project.duration}
          </span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        {/* Three bullet description points */}
        <ul className="project-card__bullets" aria-label="Project description">
          {project.descriptionPoints.map((point, i) => (
            <li key={i} className="project-card__bullet-item">
              {point}
            </li>
          ))}
        </ul>

        {/* Technology tags */}
        <div className="project-card__tags" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer links – only render if at least one link is present */}
      {(project.github || project.live) && (
        <div className="project-card__footer">
          {project.github && (
            <a
              href={project.github}
              className="project-card__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub for ${project.title}`}
            >
              <GithubIcon />
              GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              className="project-card__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.title}`}
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
};

/* Projects section */
const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <p className="section-label">My Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've built to explore different technologies
          and solve practical problems. Each project reflects my learning across
          full-stack development, AI integration, IoT, and software engineering.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

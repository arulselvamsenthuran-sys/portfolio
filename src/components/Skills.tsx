import '../styles/Skills.css';
import { skillCategories, areasOfInterest } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title">My Skill Set</h2>
        <p className="section-subtitle">
          Technologies and tools I work with across frontend, backend, databases,
          and development workflows.
        </p>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="skills__category-card"
              aria-label={category.label}
            >
              <h3 className="skills__category-title">{category.label}</h3>

              <ul className="skills__list" role="list">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="skill-item">
                    <div className="skill-item__header">
                      <span className="skill-item__name">{skill.name}</span>
                      {skill.level !== undefined && (
                        <span className="skill-item__percentage">
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    {/* Bar – width accurately matches percentage */}
                    <div
                      className="skill-item__bar-track"
                      role="progressbar"
                      aria-valuenow={skill.level ?? 0}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency: ${
                        skill.level !== undefined ? `${skill.level}%` : 'Not specified'
                      }`}
                    >
                      <div
                        className="skill-item__bar-fill"
                        style={
                          skill.level !== undefined
                            ? { width: `${skill.level}%` }
                            : { width: '0%' }
                        }
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Areas of Interest banner — spans full grid width */}
          <div
            className="skills__devops-banner"
            aria-label="Areas of active interest and learning"
          >
            <div className="skills__devops-icon" aria-hidden="true">
              🚀
            </div>
            <div className="skills__devops-content">
              <p className="skills__devops-title">
                Areas of Active Interest &amp; Learning
              </p>
              <p className="skills__devops-desc">
                I am actively exploring{' '}
                {areasOfInterest.map((area, i) => (
                  <span key={area}>
                    <strong>{area}</strong>
                    {i < areasOfInterest.length - 2
                      ? ', '
                      : i === areasOfInterest.length - 2
                      ? ', and '
                      : ''}
                  </span>
                ))}{' '}
                — including containerisation with Docker, CI/CD pipelines, cloud
                deployment workflows, and practical AI/ML integration alongside
                my Computer Engineering studies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { projects } from '../data/portfolio'
import './Projects.css'

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const others   = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section projects-section">
      <div className="container">

        <div className="projects-section__header fade-up">
          <span className="section-label">Trabajo</span>
          <h2 className="section-title">Proyectos</h2>
          <p className="section-desc">
            Una selección de proyectos reales desarrollados para clientes y uso personal.
          </p>
        </div>

        {/* Featured */}
        <div className="projects-featured">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Others */}
        {others.length > 0 && (
          <div className="projects-others">
            <h3 className="projects-others__title">Otros proyectos</h3>
            <div className="projects-others__grid">
              {others.map((project, i) => (
                <ProjectMini key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const even = index % 2 === 0

  return (
    <article
      className={`project-card fade-up ${even ? '' : 'project-card--reverse'}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="project-card__image"
          loading="lazy"
        />
        <div className="project-card__image-overlay" />
        <span className="project-card__category">{project.category}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-card__links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ver demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectMini({ project, index }) {
  return (
    <article
      className="project-mini fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Texto izquierda */}
      <div className="project-mini__body">
        <span className="project-mini__category">{project.category}</span>
        <h4 className="project-mini__title">{project.title}</h4>
        <p className="project-mini__desc">{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Imagen derecha */}
      {project.image && (
        <div className="project-mini__image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-mini__image"
            loading="lazy"
          />
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-mini__github"
              title="Ver código"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          )}
        </div>
      )}
    </article>
  )
}
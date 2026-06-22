import { useState, useCallback, useEffect, useRef } from 'react'
import { chileanApps } from '../data/portfolio'
import './ChileanDesktopCarousel.css'

const ITEMS_PER_PAGE = 4

export default function ChileanDesktopCarousel() {
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const [activeApp, setActiveApp] = useState(null)
  const pausedRef = useRef(false)
  const wrapperRef = useRef(null)
  const totalPages = Math.ceil(chileanApps.length / ITEMS_PER_PAGE)

  const prev = useCallback(() => {
    setPage(p => (p === 0 ? totalPages - 1 : p - 1))
  }, [totalPages])

  const next = useCallback(() => {
    setPage(p => (p === totalPages - 1 ? 0 : p + 1))
  }, [totalPages])

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setPage(p => (p === totalPages - 1 ? 0 : p + 1))
      }
    }, 6000)
    return () => clearInterval(id)
  }, [totalPages])

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const visible = chileanApps.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  )

  const handleToggle = (appId) => {
    setActiveApp(prev => prev === appId ? null : appId)
  }

  return (
    <div
      ref={wrapperRef}
      className={`chilean-carousel${inView ? ' chilean-carousel--visible' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="chilean-carousel__header">
        <span className="chilean-carousel__badge">🇨🇱 Fauna Chilena</span>
        <h3 className="chilean-carousel__title">Escritorio Chileno</h3>
        <p className="chilean-carousel__desc">
          Aplicaciones con inspiración en la fauna autóctona de Chile. Haz click para ver la vista previa.
        </p>
      </div>

      <div className="chilean-carousel__viewport">
        <div className="chilean-carousel__track" key={page}>
          {visible.map((app, i) => (
            <article
              key={app.id}
              className={`chilean-card fade-up ${activeApp === app.id ? 'chilean-card--active' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              role="button"
              tabIndex={0}
              onClick={() => handleToggle(app.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleToggle(app.id) } }}
            >
              <div className="chilean-card__icon-area">
                <img
                  src={activeApp === app.id ? app.view : app.icon}
                  alt={app.name}
                  className="chilean-card__image"
                  loading="lazy"
                />
                <span className="chilean-card__hint">
                  {activeApp === app.id ? 'Ver icono' : 'Ver vista previa'}
                </span>
              </div>
              <div className="chilean-card__body">
                <span className="chilean-card__category">{app.category}</span>
                <h4 className="chilean-card__name">{app.name}</h4>
                <p className="chilean-card__desc">{app.description}</p>
              </div>
              {app.github && (
                <a
                  href={app.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ghost chilean-card__btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Código
                </a>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="chilean-carousel__controls">
        <button className="chilean-carousel__arrow" onClick={prev} aria-label="Anterior">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="chilean-carousel__dots">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`chilean-carousel__dot ${i === page ? 'active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Página ${i + 1}`}
            />
          ))}
        </div>

        <button className="chilean-carousel__arrow" onClick={next} aria-label="Siguiente">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

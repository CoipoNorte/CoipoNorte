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
                <h4 className="chilean-card__name">{app.name}</h4>
                <p className="chilean-card__desc">{app.description}</p>
              </div>
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

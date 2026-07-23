import { browserGames } from '../data/portfolio'
import './BrowserGames.css'

export default function BrowserGames() {
  return (
    <div className="browser-games reveal reveal--up">
      <div className="browser-games__header">
        <span className="browser-games__label">🎮 Juegos</span>
        <h3 className="browser-games__title">Juegos de Navegador</h3>
        <p className="browser-games__desc">Juegos interactivos que puedes jugar directamente en tu navegador.</p>
      </div>
      <div className="browser-games__grid">
        {browserGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}

function GameCard({ game }) {
  return (
    <article className="game-card">
      <div className="game-card__image-wrap">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="game-card__image"
          loading="lazy"
        />
        <div className="game-card__overlay">
          <span className="game-card__category">{game.category}</span>
          <div className="game-card__actions">
            {game.demo && (
              <a
                href={game.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="game-card__btn"
                title="Jugar"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                </svg>
              </a>
            )}
            {game.github && (
              <a
                href={game.github}
                target="_blank"
                rel="noopener noreferrer"
                className="game-card__btn"
                title="Ver código"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="game-card__body">
        <h4 className="game-card__title">{game.title}</h4>
        <p className="game-card__desc">{game.description}</p>
      </div>
    </article>
  )
}

import { stack } from '../data/portfolio'
import './Stack.css'

export default function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <div className="container">

        <div className="stack-section__header reveal reveal--up">
          <span className="section-label">Tecnologías</span>
          <h2 className="section-title">Mi Stack</h2>
          <p className="section-desc">
            Herramientas y tecnologías que uso en proyectos reales.
          </p>
        </div>

        <div className="stack-grid">
          {stack.map((group, i) => (
            <div
              key={group.category}
              className="stack-card reveal reveal--up"
            >
              <div className="stack-card__header">
                <span className="stack-card__icon">{group.icon}</span>
                <h3 className="stack-card__title">{group.category}</h3>
              </div>
              <ul className="stack-card__items">
                {group.items.map(item => (
                  <li key={item.name} className="stack-item">
                    <div className="stack-item__top">
                      <span className="stack-item__name">{item.name}</span>
                      <span className="stack-item__pct">{item.level}%</span>
                    </div>
                    <div className="stack-item__bar">
                      <div
                        className="stack-item__fill"
                        style={{ '--w': `${item.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
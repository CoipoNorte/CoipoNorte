export function smoothScroll(id) {
  const el = document.getElementById(id)
  if (!el) return

  const start    = window.scrollY
  const target   = el.getBoundingClientRect().top + window.scrollY - 72
  const distance = target - start
  const duration = 900
  let startTime  = null

  function step(currentTime) {
    if (!startTime) startTime = currentTime
    const elapsed  = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const ease     = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2
    window.scrollTo(0, start + distance * ease)
    if (progress < 1) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

export function initGlobalSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return
    e.preventDefault()
    const id = link.getAttribute('href').slice(1)
    smoothScroll(id)
  })
}
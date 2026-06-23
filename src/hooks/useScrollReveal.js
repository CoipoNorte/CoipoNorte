import { useEffect, useRef } from 'react'

/**
 * Hook that observes DOM elements and adds 'revealed' class
 * when their parent section enters the viewport. Elements
 * within the same section reveal together for a cohesive
 * animation instead of staggered individual reveals.
 *
 * Elements should have the CSS class 'reveal' to be hidden initially.
 *
 * Usage:
 *   const containerRef = useScrollReveal()
 *   <div ref={containerRef}>
 *     <div className="reveal reveal--up">...</div>
 *   </div>
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const elements = node.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the nearest section/container parent
            const section =
              entry.target.closest('section') ||
              entry.target.parentElement

            // Reveal ALL .reveal elements in this section at once
            if (section) {
              section.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
                el.classList.add('revealed')
                observer.unobserve(el)
              })
            } else {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -20px 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

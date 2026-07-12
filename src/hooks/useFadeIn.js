import { useEffect } from 'react'

export default function useFadeIn(ref) {
  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = container.querySelectorAll('.fade-up')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [ref])
}

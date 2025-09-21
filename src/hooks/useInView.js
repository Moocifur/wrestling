import { useState, useEffect, useRef } from 'react'

export const useInView = (options = {}) => {
  const [inView, setInView] = useState(false)
  const [entry, setEntry] = useState(null)
  const ref = useRef()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        setInView(isIntersecting)
        setEntry(entry)

        if (isIntersecting && options.triggerOnce) {
          observer.unobserve(element)
        }
      },
      {
        threshold: options.threshold || 0,
        root: options.root || null,
        rootMargin: options.rootMargin || '0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [options.threshold, options.root, options.rootMargin, options.triggerOnce])

  return [ref, inView, entry]
}
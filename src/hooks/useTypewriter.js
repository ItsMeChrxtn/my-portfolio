import { useEffect, useState } from 'react'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Cycles a list of words with a type-then-delete effect.
 * Every transition happens inside a timer callback, so the effect body itself
 * never sets state.
 */
export function useRotatingWord(words, { typeSpeed = 85, deleteSpeed = 40, hold = 1900 } = {}) {
  const [state, setState] = useState({ index: 0, text: words[0] ?? '', isDeleting: false })

  useEffect(() => {
    if (prefersReducedMotion() || words.length < 2) return

    const word = words[state.index % words.length]
    const isWordComplete = !state.isDeleting && state.text === word
    const delay = isWordComplete ? hold : state.isDeleting ? deleteSpeed : typeSpeed

    const timer = window.setTimeout(() => {
      setState((current) => {
        const target = words[current.index % words.length]

        if (!current.isDeleting && current.text === target) {
          return { ...current, isDeleting: true }
        }

        if (current.isDeleting && current.text === '') {
          return { index: (current.index + 1) % words.length, text: '', isDeleting: false }
        }

        return {
          ...current,
          text: current.isDeleting
            ? target.slice(0, current.text.length - 1)
            : target.slice(0, current.text.length + 1),
        }
      })
    }, delay)

    return () => window.clearTimeout(timer)
  }, [state, words, typeSpeed, deleteSpeed, hold])

  return state.text
}

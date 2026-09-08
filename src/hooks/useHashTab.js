import { useCallback, useEffect, useState } from 'react'
import { defaultTab, tabIds } from '../data/navLinks'

function readHash() {
  const hash = window.location.hash.replace('#', '')
  return tabIds.includes(hash) ? hash : defaultTab
}

/**
 * Drives the active profile tab off the URL hash, so every tab is a real
 * link: shareable, bookmarkable, and wired to the browser back button.
 */
export function useHashTab() {
  const [tab, setTab] = useState(readHash)

  useEffect(() => {
    const sync = () => setTab(readHash())
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const goToTab = useCallback((next, { scrollToTop = true } = {}) => {
    if (!tabIds.includes(next)) return
    window.location.hash = next
    setTab(next)
    // Skipped when the caller is about to scroll to a specific card instead —
    // two smooth scrolls at once fight each other.
    if (scrollToTop) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return [tab, goToTab]
}

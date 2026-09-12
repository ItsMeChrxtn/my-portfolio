import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

/**
 * Floating pill that appears once the reader has scrolled past the header,
 * so a long feed or project grid never leaves them far from the top.
 */
function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`to-top no-print fixed right-4 bottom-4 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-soft bg-panel text-text hover:bg-panel-2 sm:right-6 sm:bottom-6 ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}

export default BackToTop

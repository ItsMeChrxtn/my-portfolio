import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/navLinks'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const sectionIds = navLinks.map((link) => link.id)

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const activeId = useActiveSection(sectionIds)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-bg/92 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-[var(--nav-h)] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
        aria-label="Primary"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="cut-sm relative flex h-10 w-10 items-center justify-center bg-accent">
            <span className="font-display text-[0.95rem] leading-none text-white">CLD</span>
          </span>
          <span className="hidden leading-none sm:block">
            <span className="font-display block text-lg tracking-wide text-text transition-colors group-hover:text-accent-ink">
              Del Rosario
            </span>
            <span className="stencil block text-[0.58rem] font-medium text-faint">
              Software Developer
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link, index) => {
            const isActive = activeId === link.id

            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className="group relative flex items-center gap-2 px-3 py-2"
                >
                  <span
                    className={`font-mono text-[0.6rem] transition-colors ${
                      isActive ? 'text-accent' : 'text-faint group-hover:text-accent'
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`label text-[0.7rem] transition-colors ${
                      isActive ? 'text-text' : 'text-muted group-hover:text-text'
                    }`}
                  >
                    {link.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2 bottom-0 h-0.5 origin-left bg-accent transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <a
            href="#contact"
            className="skew sheen hidden bg-accent px-6 py-2.5 transition-colors duration-200 hover:bg-accent-deep sm:inline-block"
          >
            <span className="label text-[0.7rem] text-white">Let&apos;s Talk</span>
            <span className="sheen-bar" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            className="edge cut-sm group lg:hidden"
          >
            <span className="cut-sm flex h-10 w-10 items-center justify-center bg-panel text-text transition-colors group-hover:text-accent-ink">
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </span>
          </button>
        </div>
      </nav>

      <div
        aria-hidden="true"
        className={`h-px w-full transition-opacity duration-300 ${
          isScrolled ? 'bg-line opacity-100' : 'opacity-0'
        }`}
      />

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[var(--nav-h)] bottom-0 z-40 origin-top bg-bg/98 backdrop-blur-md transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-8 sm:px-8">
          {navLinks.map((link, index) => {
            const isActive = activeId === link.id

            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center gap-4 border-l-2 py-4 pl-5 transition-colors ${
                    isActive
                      ? 'border-accent bg-panel/60'
                      : 'border-line-soft hover:border-accent hover:bg-panel/40'
                  }`}
                >
                  <span className="font-mono text-xs text-accent" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-2xl text-text">{link.label}</span>
                </a>
              </li>
            )
          })}

          <li className="mt-6 pl-5">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="skew inline-block bg-accent px-8 py-3"
            >
              <span className="label text-[0.72rem] text-white">Let&apos;s Talk</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar

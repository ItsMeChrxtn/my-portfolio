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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border bg-surface/82 shadow-[0_12px_36px_rgba(var(--shadow-color),0.08)] backdrop-blur-xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Primary">
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-text transition-colors hover:text-accent"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-text text-sm font-bold text-background">
            CLD
          </span>
          <span><span className="text-accent">&lt;</span>ChristianLloyd<span className="text-accent">/&gt;</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={activeId === link.id ? 'true' : undefined}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeId === link.id
                    ? 'bg-accent text-white shadow-sm shadow-accent/20'
                    : 'text-text-muted hover:bg-surface hover:text-text'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-text px-5 py-2 text-sm font-semibold text-background shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text transition-colors hover:text-accent"
          >
            {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-b border-border bg-surface/95 backdrop-blur-lg transition-[max-height,opacity] duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                  activeId === link.id ? 'text-accent bg-accent-soft' : 'text-text-muted hover:bg-surface-2'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg bg-accent px-4 py-3 text-center text-base font-semibold text-white"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>

      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 -z-10 bg-background/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
    </header>
  )
}

export default Navbar

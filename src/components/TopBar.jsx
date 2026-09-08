import { Briefcase, FolderGit2, Home, Mail, Menu, Wrench, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '../data/navLinks'
import { profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'
import Avatar from './Avatar'
import SearchBox from './SearchBox'
import ThemeToggle from './ThemeToggle'
import { GithubIcon } from './icons/BrandIcons'

/** The wide icon shortcuts in the middle of the bar. */
const shortcuts = [
  { id: 'posts', label: 'Feed', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Wrench },
  { id: 'contact', label: 'Contact', icon: Mail },
]

function TopBar({ activeTab, onNavigate }) {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="no-print sticky top-0 z-40 bg-panel shadow-card">
      <div className="mx-auto flex h-[var(--topbar-h)] max-w-[1400px] items-center gap-2 px-3 sm:px-4">
        {/* Left: logo + search */}
        <div className="flex flex-1 items-center gap-2">
          <button
            type="button"
            onClick={() => onNavigate('posts')}
            aria-label="Go to profile feed"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-extrabold text-white transition-transform active:scale-95"
          >
            {profile.initials.charAt(0)}
          </button>

          <SearchBox onNavigate={onNavigate} className="hidden w-full max-w-[15rem] sm:block" />
        </div>

        {/* Center: shortcuts */}
        <nav aria-label="Sections" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1">
            {shortcuts.map(({ id, label, icon: Icon }) => {
              const isActive = activeTab === id

              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(id)}
                    aria-current={isActive ? 'page' : undefined}
                    title={label}
                    className={`relative flex h-12 w-[6.5rem] items-center justify-center rounded-lg transition-colors ${
                      isActive ? 'text-brand' : 'text-muted hover:bg-panel-2'
                    }`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-[0.6rem] h-[3px] rounded-t bg-brand"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right: utilities */}
        <div className="flex flex-1 items-center justify-end gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="icon-btn hidden sm:inline-flex"
          >
            <GithubIcon className="h-[1.15rem] w-[1.15rem]" />
          </a>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            title="Email"
            className="icon-btn hidden sm:inline-flex"
          >
            <Mail className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
          </a>

          <ThemeToggle theme={theme} onToggle={toggleTheme} />

          <button
            type="button"
            onClick={() => onNavigate('about')}
            aria-label="Open the About tab"
            title={profile.name}
            className="shrink-0 rounded-full transition-transform active:scale-95"
          >
            <Avatar size={40} />
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-tabs"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="icon-btn lg:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMenuOpen && (
        <div id="mobile-tabs" className="animate-pop-in border-t border-line-soft lg:hidden">
          <div className="px-3 py-3 sm:hidden">
            <SearchBox
              onNavigate={(tab, anchor) => {
                onNavigate(tab, anchor)
                setIsMenuOpen(false)
              }}
            />
          </div>

          <ul className="grid grid-cols-2 gap-1 p-3 pt-0">
            {navLinks.map(({ id, label }) => {
              const isActive = activeTab === id

              return (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => {
                      onNavigate(id)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full rounded-lg px-4 py-3 text-left font-semibold transition-colors ${
                      isActive ? 'bg-brand-soft text-brand' : 'text-text hover:bg-panel-2'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}

export default TopBar

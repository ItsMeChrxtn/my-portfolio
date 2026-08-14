import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={`edge cut-sm group transition-colors duration-200 hover:bg-accent ${className}`}
    >
      <span className="cut-sm relative flex h-10 w-10 items-center justify-center bg-panel text-muted transition-colors duration-200 group-hover:bg-panel group-hover:text-accent-ink">
        <Sun
          className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
            isDark ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
          }`}
          aria-hidden="true"
        />
        <Moon
          className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
            isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'
          }`}
          aria-hidden="true"
        />
      </span>
    </button>
  )
}

export default ThemeToggle

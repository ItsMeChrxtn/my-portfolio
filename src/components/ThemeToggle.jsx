import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors duration-300 hover:text-accent hover:border-accent-soft focus-visible:outline-2 focus-visible:outline-accent ${className}`}
    >
      <Sun
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          isDark ? 'opacity-0 -rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
        }`}
        aria-hidden="true"
      />
      <Moon
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
        }`}
        aria-hidden="true"
      />
    </button>
  )
}

export default ThemeToggle

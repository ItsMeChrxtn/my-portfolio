import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`icon-btn relative ${className}`}
    >
      <Sun
        className={`absolute h-[1.15rem] w-[1.15rem] transition-all duration-300 ${
          isDark ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
        }`}
        aria-hidden="true"
      />
      <Moon
        className={`absolute h-[1.15rem] w-[1.15rem] transition-all duration-300 ${
          isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'
        }`}
        aria-hidden="true"
      />
    </button>
  )
}

export default ThemeToggle

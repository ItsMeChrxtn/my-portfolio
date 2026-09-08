import { navLinks } from '../data/navLinks'
import { profile } from '../data/profile'

function Footer({ onNavigate }) {
  const year = new Date().getFullYear()

  return (
    <footer className="no-print mx-auto max-w-[1100px] px-4 py-8">
      <hr className="border-line-soft" />

      <nav aria-label="Footer" className="mt-4">
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => onNavigate(id)}
                className="text-xs text-faint transition-colors hover:text-brand hover:underline"
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-faint transition-colors hover:text-brand hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-xs text-faint transition-colors hover:text-brand hover:underline"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="text-xs text-faint transition-colors hover:text-brand hover:underline"
            >
              CV (PDF)
            </a>
          </li>
        </ul>
      </nav>

      <p className="mt-3 text-xs text-faint">
        {profile.name} &copy; {year} · Built with React, Vite, and Tailwind CSS
      </p>
    </footer>
  )
}

export default Footer

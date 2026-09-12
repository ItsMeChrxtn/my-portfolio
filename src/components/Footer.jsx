import { Download, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks } from '../data/navLinks'
import { profile } from '../data/profile'
import Avatar from './Avatar'
import { GithubIcon } from './icons/BrandIcons'

/** Circular icon shortcuts at the foot of the page. */
const contacts = [
  { label: 'GitHub', href: profile.github, icon: GithubIcon, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Call', href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: Phone },
  { label: 'Download CV', href: `${import.meta.env.BASE_URL}resume.pdf`, icon: Download, download: true },
]

function Footer({ onNavigate }) {
  const year = new Date().getFullYear()

  return (
    <footer className="no-print mx-auto w-full max-w-[1100px] px-4 pt-4 pb-8">
      <div className="card px-5 py-5">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:text-left">
          <Avatar size={44} />

          <div className="min-w-0 flex-1">
            <p className="text-[0.9375rem] font-bold text-text">{profile.name}</p>
            <p className="mt-0.5 text-sm text-muted">{profile.headline}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-xs text-faint">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <ul className="flex items-center gap-2">
            {contacts.map(({ label, href, icon: Icon, external, download }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  download={download || undefined}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className="icon-btn"
                >
                  <Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-4 border-line-soft" />

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(id)}
                    className="text-xs font-medium text-muted transition-colors hover:text-brand"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-xs text-faint">
            &copy; {year} {profile.shortName} · Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { ArrowUp } from 'lucide-react'
import { navLinks } from '../data/navLinks'
import { socials } from '../data/socials'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-panel-2">
      <div aria-hidden="true" className="stripes h-1.5 w-full opacity-70" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="group flex items-center gap-3">
              <span className="cut-sm flex h-10 w-10 items-center justify-center bg-accent">
                <span className="font-display text-[0.95rem] leading-none text-white">CLD</span>
              </span>
              <span className="leading-none">
                <span className="font-display block text-lg tracking-wide text-text transition-colors group-hover:text-accent-ink">
                  Del Rosario
                </span>
                <span className="stencil block text-[0.55rem] text-faint">
                  Software Developer
                </span>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Building modern, scalable, and user-focused web applications from Tanza, Cavite.
            </p>

            <p className="font-mono mt-4 text-[0.62rem] text-faint">
              {'//'} built with React · Vite · Tailwind
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="label flex items-center gap-2.5 text-[0.62rem] text-text">
              <span className="h-3.5 w-1 bg-accent" aria-hidden="true" />
              Navigate
            </h3>

            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-ink"
                  >
                    <span className="font-mono text-[0.58rem] text-faint" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="label flex items-center gap-2.5 text-[0.62rem] text-text">
              <span className="h-3.5 w-1 bg-accent" aria-hidden="true" />
              Connect
            </h3>

            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="cut-sm flex h-10 w-10 items-center justify-center border border-line bg-bg text-muted transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>

            <a
              href="#home"
              className="group mt-6 inline-flex items-center gap-2 text-muted transition-colors hover:text-accent-ink"
            >
              <span className="cut-sm flex h-8 w-8 items-center justify-center border border-line bg-bg transition-colors group-hover:border-accent">
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="label text-[0.62rem]">Back to top</span>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <p className="font-mono text-[0.66rem] text-faint">
            &copy; {year} Christian Lloyd Del Rosario
          </p>
          <p className="stencil text-[0.55rem] text-faint">All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

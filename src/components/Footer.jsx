import { navLinks } from '../data/navLinks'
import { socials } from '../data/socials'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-2/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <a href="#home" className="inline-flex items-center gap-2 font-mono text-base font-semibold text-text">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-text text-sm font-bold text-background">
                CLD
              </span>
              <span><span className="text-accent">&lt;</span>ChristianLloyd<span className="text-accent">/&gt;</span></span>
            </a>
            <p className="mt-3 text-sm text-text-muted">Software Developer &amp; IT Educator</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
              Building modern, scalable, and user-focused web applications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-text">Connect</h3>
            <div className="mt-4 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/80 text-text-muted shadow-sm shadow-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-text-muted">
          &copy; {year} Christian Lloyd Del Rosario. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react'
import { contactRows, profile } from '../../data/profile'
import Avatar, { OnlineDot } from '../Avatar'
import Card from '../Card'
import { GithubIcon } from '../icons/BrandIcons'

const rowIcons = {
  mail: Mail,
  phone: Phone,
  github: GithubIcon,
  pin: MapPin,
}

/** Ready-made openers, so a visitor never faces an empty message box. */
const openers = [
  {
    label: 'Freelance project',
    subject: 'Freelance project inquiry',
    body: 'Hi Christian, I have a project I would like built. Here is the scope:',
  },
  {
    label: 'Full-time role',
    subject: 'Full-time opportunity',
    body: 'Hi Christian, we are hiring and your profile looks like a fit. Details:',
  },
  {
    label: 'Just saying hello',
    subject: 'Hello from your portfolio',
    body: 'Hi Christian, I came across your portfolio and wanted to reach out.',
  },
]

function mailtoFor({ subject, body }) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function ContactTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card bodyClassName="p-5">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="relative shrink-0">
            <Avatar size={72} />
            <OnlineDot className="absolute right-0 bottom-0 h-4 w-4" />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-xl font-bold text-text">{profile.name}</h2>
            <p className="text-sm text-muted">{profile.headline}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-green">
              <span className="h-2 w-2 rounded-full bg-green" aria-hidden="true" />
              Open to freelance work and full-time roles
            </p>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="btn-soft no-print shrink-0"
          >
            <Download className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
            CV
          </a>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Contact details" bodyClassName="px-4 pt-3 pb-4">
          <ul className="space-y-2">
            {contactRows.map(({ id, icon, label, value, href }) => {
              const Icon = rowIcons[icon] ?? Mail
              const isExternal = href.startsWith('http')

              return (
                <li key={id}>
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    className="group flex items-center gap-3 rounded-lg bg-panel-2 p-3 transition-colors hover:bg-brand-soft"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panel text-brand">
                      <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-faint">{label}</span>
                      <span className="block truncate font-semibold text-text group-hover:text-brand">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:text-brand"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </Card>

        <Card title="Send a message" bodyClassName="px-4 pt-3 pb-4">
          <p className="text-sm text-muted">
            Pick an opener and your mail app takes it from there — subject and first line already
            written.
          </p>

          <ul className="mt-3 space-y-2">
            {openers.map((opener) => (
              <li key={opener.label}>
                <a
                  href={mailtoFor(opener)}
                  className="group flex items-center justify-between gap-3 rounded-lg bg-panel-2 p-3 transition-colors hover:bg-brand-soft"
                >
                  <span className="min-w-0">
                    <span className="block font-semibold text-text group-hover:text-brand">
                      {opener.label}
                    </span>
                    <span className="block truncate text-xs text-faint">{opener.body}</span>
                  </span>
                  <Mail
                    className="h-4 w-4 shrink-0 text-faint group-hover:text-brand"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            <a href={`mailto:${profile.email}`} className="btn-brand flex-1">
              <Mail className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
              Write your own
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="btn-soft flex-1"
              aria-label={`Call ${profile.phone}`}
            >
              <Phone className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
              Call instead
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ContactTab

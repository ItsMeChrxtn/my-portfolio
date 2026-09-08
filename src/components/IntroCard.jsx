import {
  Briefcase,
  Clock,
  Download,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  Phone,
  Presentation,
  School,
} from 'lucide-react'
import { contactRows, introFacts, profile } from '../data/profile'
import Card from './Card'
import RichText from './RichText'
import { GithubIcon } from './icons/BrandIcons'

const factIcons = {
  briefcase: Briefcase,
  presentation: Presentation,
  graduation: GraduationCap,
  school: School,
  home: Home,
  clock: Clock,
  mail: Mail,
  phone: Phone,
  github: GithubIcon,
  pin: MapPin,
}

/** The sidebar Intro card — the header block of the CV, profile-styled. */
function IntroCard({ onNavigate }) {
  return (
    <Card title="Intro" bodyClassName="px-4 pt-3 pb-4">
      <p className="text-center text-[0.9375rem] leading-relaxed text-text">{profile.tagline}</p>

      <hr className="my-3 border-line-soft" />

      <ul className="space-y-3">
        {introFacts.map(({ id, icon, text, detail, tab }) => {
          const Icon = factIcons[icon] ?? Briefcase

          const row = (
            <>
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
              <span className="min-w-0 text-[0.9375rem] leading-snug text-muted">
                <RichText text={text} />
                {detail && <span className="mt-0.5 block text-xs text-faint">{detail}</span>}
              </span>
            </>
          )

          return (
            <li key={id}>
              {tab ? (
                <button
                  type="button"
                  onClick={() => onNavigate(tab)}
                  className="-mx-2 flex w-[calc(100%+1rem)] items-start gap-3 rounded-md px-2 py-1 text-left transition-colors hover:bg-panel-2"
                >
                  {row}
                </button>
              ) : (
                <span className="flex items-start gap-3 px-0 py-1">{row}</span>
              )}
            </li>
          )
        })}
      </ul>

      <hr className="my-3 border-line-soft" />

      <ul className="space-y-2">
        {contactRows.map(({ id, icon, label, value, href }) => {
          const Icon = factIcons[icon] ?? Mail
          const isExternal = href.startsWith('http')

          return (
            <li key={id}>
              <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="group -mx-2 flex items-center gap-3 rounded-md px-2 py-1.5 transition-colors hover:bg-panel-2"
              >
                <Icon className="h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-xs text-faint">{label}</span>
                  <span className="block truncate text-[0.9375rem] font-medium text-brand group-hover:underline">
                    {value}
                  </span>
                </span>
              </a>
            </li>
          )
        })}
      </ul>

      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download
        className="btn-soft no-print mt-4 w-full"
      >
        <Download className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
        Download CV (PDF)
      </a>
    </Card>
  )
}

export default IntroCard

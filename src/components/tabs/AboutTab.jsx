import { useState } from 'react'
import {
  Award,
  Briefcase,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  User,
} from 'lucide-react'
import { certifications, education } from '../../data/education'
import { experience } from '../../data/experience'
import { contactRows, profile, summary } from '../../data/profile'
import { skillCategories } from '../../data/skills'
import Card from '../Card'
import { GithubIcon } from '../icons/BrandIcons'

const panes = [
  { id: 'overview', label: 'Overview', icon: User },
  { id: 'work', label: 'Work and education', icon: Briefcase },
  { id: 'skills', label: 'Skills and tools', icon: Layers },
  { id: 'contact', label: 'Contact and basic info', icon: Phone },
  { id: 'certs', label: 'Certifications', icon: Award },
]

const contactIcons = {
  mail: Mail,
  phone: Phone,
  github: GithubIcon,
  pin: MapPin,
}

/** A labelled row inside a pane. */
function Row({ icon: Icon, children, className = '' }) {
  return (
    <li className={`flex items-start gap-3 py-2.5 ${className}`}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-faint" aria-hidden="true" />
      <div className="min-w-0 flex-1">{children}</div>
    </li>
  )
}

function Overview({ onNavigate }) {
  return (
    <div className="space-y-4">
      {summary.map((paragraph, index) => (
        <p key={index} className="text-[0.9375rem] leading-relaxed text-text">
          {paragraph}
        </p>
      ))}

      <div className="no-print flex flex-wrap gap-2 pt-1">
        <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="btn-brand">
          <Download className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
          Download the PDF CV
        </a>
        <button type="button" onClick={() => onNavigate('projects')} className="btn-soft">
          Browse the projects
        </button>
      </div>
    </div>
  )
}

function WorkAndEducation({ onNavigate }) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-1 text-[1.0625rem] font-bold text-text">Work</h3>
        <ul className="divide-y divide-line-soft">
          {experience.map((role) => (
            <Row key={`${role.role}-${role.context}`} icon={Briefcase}>
              <p className="text-[0.9375rem] font-semibold text-text">
                {role.role} at <span className="text-brand">{role.context}</span>
              </p>
              <p className="text-xs text-faint">{role.period}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{role.description}</p>
              <ul className="mt-2 space-y-1.5">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Row>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => onNavigate('experience')}
          className="link no-print mt-2 text-sm"
        >
          See the full timeline
        </button>
      </div>

      <div>
        <h3 className="mb-1 text-[1.0625rem] font-bold text-text">Education</h3>
        <ul className="divide-y divide-line-soft">
          {education.map((entry) => (
            <Row key={entry.degree} icon={GraduationCap}>
              <p className="text-[0.9375rem] font-semibold text-text">{entry.degree}</p>
              <p className="text-sm text-muted">{entry.institution}</p>
              <p className="text-xs text-faint">{entry.period}</p>
            </Row>
          ))}
        </ul>
      </div>
    </div>
  )
}

function SkillsPane({ onNavigate }) {
  return (
    <div className="space-y-5">
      {skillCategories.map(({ title, icon: Icon, skills }) => (
        <div key={title}>
          <h3 className="mb-2 flex items-center gap-2 text-[0.9375rem] font-bold text-text">
            <Icon className="h-4 w-4 text-faint" aria-hidden="true" />
            {title}
          </h3>
          <ul className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <li key={skill}>
                <button
                  type="button"
                  onClick={() => onNavigate('projects', null, skill)}
                  className="chip transition-colors hover:bg-brand-soft hover:text-brand"
                >
                  {skill}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-xs text-faint">Tap a skill to filter the projects that use it.</p>
    </div>
  )
}

function ContactPane() {
  return (
    <ul className="divide-y divide-line-soft">
      {contactRows.map(({ id, icon, label, value, href }) => {
        const Icon = contactIcons[icon] ?? Phone
        const isExternal = href.startsWith('http')

        return (
          <Row key={id} icon={Icon}>
            <p className="text-xs text-faint">{label}</p>
            <a
              href={href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              className="link text-[0.9375rem] break-words"
            >
              {value}
            </a>
          </Row>
        )
      })}
      <Row icon={User}>
        <p className="text-xs text-faint">Pronouns</p>
        <p className="text-[0.9375rem] text-text">{profile.pronouns}</p>
      </Row>
    </ul>
  )
}

function CertsPane() {
  return (
    <ul className="divide-y divide-line-soft">
      {certifications.map((cert) => (
        <Row key={cert} icon={Award}>
          <p className="text-[0.9375rem] font-medium text-text">{cert}</p>
        </Row>
      ))}
    </ul>
  )
}

/** The About tab: a two-pane layout, exactly the shape of the CV body. */
function AboutTab({ onNavigate }) {
  const [pane, setPane] = useState('overview')

  const content = {
    overview: <Overview onNavigate={onNavigate} />,
    work: <WorkAndEducation onNavigate={onNavigate} />,
    skills: <SkillsPane onNavigate={onNavigate} />,
    contact: <ContactPane />,
    certs: <CertsPane />,
  }[pane]

  return (
    <Card bodyClassName="p-0">
      <div className="grid md:grid-cols-[15.5rem_minmax(0,1fr)]">
        <nav
          aria-label="About sections"
          className="border-b border-line-soft p-4 md:border-r md:border-b-0"
        >
          <h2 className="mb-2 px-2 text-xl font-bold text-text">About</h2>
          <ul className="no-scrollbar flex gap-1 overflow-x-auto md:block md:space-y-1 md:overflow-visible">
            {panes.map(({ id, label, icon: Icon }) => {
              const isActive = pane === id

              return (
                <li key={id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setPane(id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[0.9375rem] font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-brand-soft font-semibold text-brand'
                        : 'text-muted hover:bg-panel-2'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0 md:hidden" aria-hidden="true" />
                    {label}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="p-4 sm:p-5">{content}</div>
      </div>
    </Card>
  )
}

export default AboutTab

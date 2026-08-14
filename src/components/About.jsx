import { GraduationCap, Lightbulb, Target } from 'lucide-react'
import { stats } from '../data/stats'
import Panel from './Panel'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const abilities = [
  {
    key: 'Q',
    icon: Target,
    title: 'Problem Solving',
    description:
      'I approach every feature as a problem to break down, not just a ticket to close.',
  },
  {
    key: 'E',
    icon: GraduationCap,
    title: 'Mentorship',
    description:
      'As a college IT instructor, I explain systems clearly — a habit that carries into my code.',
  },
  {
    key: 'C',
    icon: Lightbulb,
    title: 'Practical Builds',
    description: 'I favor simple, maintainable code over clever code that only I can read.',
  },
]

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="agent_dossier"
          title="Behind the Code"
          subtitle="Five years of building systems that real users and students depend on."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Biography */}
          <Reveal className="lg:col-span-3">
            <Panel shape="cut-duo" hud className="h-full">
              <div className="flex items-center justify-between border-b border-line bg-panel-2 px-5 py-3">
                <span className="flex items-center gap-2.5">
                  <span className="h-4 w-1 bg-accent" aria-hidden="true" />
                  <span className="label text-[0.62rem] text-text">Biography</span>
                </span>
                <span className="font-mono text-[0.58rem] text-faint">Tanza, Cavite / PH</span>
              </div>

              <div className="space-y-5 px-5 py-6 text-[0.95rem] leading-relaxed text-muted sm:px-7 sm:py-8">
                <p>
                  I&apos;m an IT professional working across software development, technical
                  support, and systems administration. Since 2021 I&apos;ve moved from computer
                  programmer to freelance full-stack developer to college IT instructor &mdash; and
                  each role has shaped how I build: reliable systems that real users and students
                  can actually depend on.
                </p>
                <p>
                  My core stack revolves around the MERN ecosystem &mdash;{' '}
                  <span className="font-medium text-text">React, Node.js, Express, and MongoDB</span>{' '}
                  &mdash; along with PHP and Python for systems that call for it. I&apos;ve built
                  barangay information systems, disaster alert platforms, and service portals with
                  facial-recognition verification, always with an eye on clean structure and
                  interfaces that feel fast and intuitive.
                </p>
                <p>
                  Alongside development, I teach programming and IT fundamentals at the college
                  level, mentoring students through capstone projects and troubleshooting. It keeps
                  me sharp on the basics and honest about writing code other people can actually
                  read.
                </p>
              </div>
            </Panel>
          </Reveal>

          {/* Career record */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="grid h-full grid-cols-2 gap-3">
              {stats.map(({ label, value }, index) => (
                <Panel key={label} shape={index % 2 === 0 ? 'cut' : 'cut-tl'} hud>
                  <div className="relative flex h-full flex-col justify-between overflow-hidden px-4 py-5">
                    <span
                      aria-hidden="true"
                      className="absolute -top-2 -right-1 font-mono text-4xl font-bold text-text/[0.04]"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="font-display text-4xl text-accent-ink sm:text-5xl">{value}</p>
                    <p className="stencil mt-3 text-[0.55rem] leading-relaxed text-faint">
                      {label}
                    </p>
                  </div>
                </Panel>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Abilities */}
        <div className="mt-10">
          <Reveal className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <span className="stencil text-[0.62rem] text-faint">Abilities</span>
            <span className="h-px flex-1 bg-line-soft" aria-hidden="true" />
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-3">
            {abilities.map(({ key, icon: Icon, title, description }, index) => (
              <Reveal key={key} delay={index * 90}>
                <Panel hud className="group h-full">
                  <div className="flex h-full flex-col gap-4 px-5 py-6">
                    <div className="flex items-center gap-3">
                      <span className="cut-sm flex h-9 w-9 items-center justify-center bg-accent">
                        <span className="font-display text-base leading-none text-white">
                          {key}
                        </span>
                      </span>
                      <Icon
                        className="h-5 w-5 text-muted transition-colors duration-300 group-hover:text-accent-ink"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="font-display text-xl text-text">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                    </div>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

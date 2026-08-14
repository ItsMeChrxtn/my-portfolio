import { ArrowRight, ChevronDown, Download, Mail } from 'lucide-react'
import { socials } from '../data/socials'
import { stats } from '../data/stats'
import { useRotatingWord } from '../hooks/useTypewriter'
import AgentCard from './AgentCard'
import Reveal from './Reveal'

const roles = ['Software Developer', 'IT Educator', 'Full-Stack Builder', 'Systems Engineer']

function Hero() {
  const role = useRotatingWord(roles)

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 sm:pt-36 lg:min-h-screen lg:pt-40 lg:pb-28"
    >
      {/* Angled backdrop wedge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-panel/45 lg:block"
        style={{ clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 0 100%)' }}
      />
      <div
        aria-hidden="true"
        className="stripes pointer-events-none absolute top-0 right-[8%] -z-10 hidden h-40 w-1.5 opacity-40 lg:block"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="flex flex-col items-start gap-7">
          {/* Status chip */}
          <span className="edge cut-tab">
            <span className="cut-tab flex items-center gap-2.5 bg-panel px-4 py-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full bg-teal-fill" />
                <span className="relative inline-flex h-2 w-2 bg-teal-fill" />
              </span>
              <span className="label text-[0.62rem] text-text">Available for deployment</span>
            </span>
          </span>

          <div className="w-full">
            <p className="stencil mb-4 flex items-center gap-3 text-[0.66rem] text-accent-ink">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              <span className="text-faint">{'//'}</span> agent_profile.init()
            </p>

            <h1 className="font-display text-[clamp(2.75rem,9vw,6.5rem)] text-text">
              <span className="block">Christian Lloyd</span>
              <span
                className="block"
                style={{ WebkitTextStroke: '2px var(--accent)', color: 'transparent' }}
              >
                Del Rosario
              </span>
            </h1>

            {/* Rotating role readout */}
            <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="stencil text-[0.66rem] text-faint">Role</span>
              <span aria-hidden="true" className="h-4 w-px bg-line" />
              <p className="label text-lg text-accent-ink sm:text-xl" aria-live="polite">
                {role}
                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-5 w-2 translate-y-0.5 animate-pulse bg-accent"
                />
              </p>
            </div>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted">
            I design, build, and maintain full-stack web applications &mdash; React, Node.js, PHP,
            and Python &mdash; and teach the next generation of developers as a college IT
            instructor. From community information systems to freelance client projects, I ship
            software that actually gets used.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="skew sheen bg-accent px-7 py-3.5 transition-colors duration-200 hover:bg-accent-deep">
              <span className="label flex items-center gap-2 text-[0.72rem] text-white">
                View Projects
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="sheen-bar" aria-hidden="true" />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="skew group border border-line bg-panel px-7 py-3.5 transition-colors duration-200 hover:border-accent hover:bg-accent"
            >
              <span className="label flex items-center gap-2 text-[0.72rem] text-text transition-colors group-hover:text-white">
                <Download
                  className="h-3.5 w-3.5 text-accent-ink transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
                Resume
              </span>
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-2 px-3 py-3.5 text-muted transition-colors hover:text-accent-ink"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span className="label text-[0.72rem] underline-offset-4 group-hover:underline">
                Contact
              </span>
            </a>
          </div>

          {/* HUD stat blocks */}
          <div className="grid w-full max-w-xl grid-cols-3 gap-2 pt-2">
            {stats.slice(0, 3).map(({ label, value }) => (
              <div key={label} className="edge cut-sm">
                <div className="cut-sm h-full border-l-2 border-accent bg-panel px-3 py-3.5">
                  <p className="font-display text-2xl text-text sm:text-3xl">{value}</p>
                  <p className="stencil mt-1 text-[0.52rem] leading-relaxed text-faint">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="edge cut-sm group"
              >
                <span className="cut-sm flex h-10 w-10 items-center justify-center bg-panel text-muted transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <AgentCard />
        </Reveal>
      </div>

      {/* Scroll cue */}
      <div className="mt-16 hidden justify-center lg:flex">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-faint transition-colors hover:text-accent-ink"
        >
          <span className="stencil text-[0.55rem]">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Hero

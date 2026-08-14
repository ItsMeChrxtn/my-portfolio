import { ArrowRight, Download, Mail } from 'lucide-react'
import { socials } from '../data/socials'
import { stats } from '../data/stats'
import DeveloperVisual from './DeveloperVisual'
import Reveal from './Reveal'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(135deg,rgba(91,33,182,0.1),transparent_36%,rgba(4,124,143,0.08))]"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:min-h-[42rem] lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/85 px-4 py-2 text-sm font-medium text-text-muted shadow-sm shadow-black/5 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </span>

          <div>
            <p className="font-mono text-sm font-semibold text-accent sm:text-base">Hi, my name is</p>
            <h1 className="mt-3 max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-tight text-text sm:text-6xl lg:text-7xl">
              Christian Lloyd Del Rosario
            </h1>
            <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight text-text-muted sm:text-3xl">
              <span className="bg-gradient-to-r from-accent via-accent-2 to-accent-3 bg-clip-text text-transparent">
                Software Developer
              </span>{' '}
              &amp; IT Educator building practical systems.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            I design, build, and maintain full-stack web applications &mdash; using React, Node.js, PHP, and
            Python &mdash; and teach the next generation of developers as a college IT instructor. From
            community information systems to freelance client projects, I like shipping software that
            actually gets used.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5"
            >
              View My Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/90 px-6 py-3 text-sm font-semibold text-text shadow-sm shadow-black/5 transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-text-muted transition-colors duration-200 hover:text-accent"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-3 gap-3 pt-2">
            {stats.slice(0, 3).map(({ label, value }) => (
              <div key={label} className="border-l border-border pl-4">
                <p className="text-2xl font-black tracking-tight text-text sm:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-text-muted">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/90 text-text-muted shadow-sm shadow-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <DeveloperVisual />
        </Reveal>
      </div>
    </section>
  )
}

export default Hero

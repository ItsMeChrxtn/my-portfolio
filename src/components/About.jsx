import { GraduationCap, Lightbulb, Target } from 'lucide-react'
import { stats } from '../data/stats'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const traits = [
  {
    icon: Target,
    title: 'Problem-solving mindset',
    description: 'I approach every feature as a problem to break down, not just a ticket to close.',
  },
  {
    icon: GraduationCap,
    title: 'Teaching & mentorship',
    description: 'As a college IT instructor, I explain systems clearly — a habit that carries into my code.',
  },
  {
    icon: Lightbulb,
    title: 'Practical solutions',
    description: 'I favor simple, maintainable code over clever code that only I can read.',
  },
]

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="About Me" title="Building things that work, end to end" />

        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          <Reveal className="lg:col-span-3" as="div">
            <div className="rounded-[1.75rem] border border-border bg-surface/80 p-6 shadow-xl shadow-black/5 backdrop-blur sm:p-8">
            <div className="space-y-5 text-base leading-relaxed text-text-muted sm:text-lg">
              <p>
                I'm an IT professional based in Cavite, Philippines, working across software development,
                technical support, and systems administration. Since 2021 I've moved from computer programmer
                to freelance full-stack developer to college IT instructor &mdash; and each role has shaped how
                I build: reliable systems that real users and students can actually depend on.
              </p>
              <p>
                My core stack revolves around the MERN ecosystem &mdash; React, Node.js, Express, and MongoDB
                &mdash; along with PHP and Python for systems that call for it. I've built barangay information
                systems, disaster alert platforms, and service portals with facial-recognition verification,
                always with an eye on clean structure and interfaces that feel fast and intuitive.
              </p>
              <p>
                Alongside development, I teach programming and IT fundamentals at the college level, mentoring
                students through capstone projects and troubleshooting. It keeps me sharp on the basics and
                honest about writing code other people can actually read.
              </p>
            </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {traits.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-border bg-surface/85 p-5 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-text">{title}</h3>
                  <p className="mt-1.5 text-sm text-text-muted">{description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={100}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-border bg-gradient-to-br from-surface to-surface-2 p-6 text-center shadow-lg shadow-black/5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                    {value}
                  </p>
                  <p className="mt-2 text-sm text-text-muted">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About

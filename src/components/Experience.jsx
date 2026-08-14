import { Award, Briefcase, GraduationCap } from 'lucide-react'
import { experience } from '../data/experience'
import { certifications, education } from '../data/education'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section id="experience" className="section-shell border-y border-border/70 bg-surface-2/45 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="A timeline of roles — in software development and IT education — that shaped how I build and teach today."
        />

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          <ol className="relative border-l border-border pl-8 sm:pl-10 lg:col-span-2">
            {experience.map(({ role, context, period, description, highlights }, index) => (
              <Reveal key={`${role}-${context}`} as="li" delay={index * 100} className="relative mb-12 last:mb-0">
                <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full border border-surface bg-accent text-white shadow-lg shadow-accent/20">
                  <Briefcase className="h-3 w-3" aria-hidden="true" />
                </span>

                <div className="rounded-[1.5rem] border border-border bg-surface/90 p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-text">{role}</h3>
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                      {period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-text-muted">{context}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>

                  <ul className="mt-4 space-y-1.5">
                    {highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="flex flex-col gap-6">
            <Reveal delay={150} className="rounded-[1.5rem] border border-border bg-surface/90 p-6 shadow-sm shadow-black/5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-text">Education</h3>
              </div>
              <ul className="mt-5 space-y-4">
                {education.map(({ degree, institution, period }) => (
                  <li key={degree} className="border-l-2 border-accent-soft pl-4">
                    <p className="text-sm font-semibold text-text">{degree}</p>
                    <p className="mt-0.5 text-sm text-text-muted">{institution}</p>
                    <p className="mt-0.5 text-xs text-accent">{period}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={220} className="rounded-[1.5rem] border border-border bg-surface/90 p-6 shadow-sm shadow-black/5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-text">Certifications</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-2 text-sm text-text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {cert}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

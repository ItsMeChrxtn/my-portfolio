import { Award, GraduationCap } from 'lucide-react'
import { experience } from '../data/experience'
import { certifications, education } from '../data/education'
import Panel from './Panel'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section
      id="experience"
      className="relative border-y border-line-soft bg-panel-2/40 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="career_record"
          title="Service Record"
          subtitle="A timeline of roles — in software development and IT education — that shaped how I build and teach today."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Timeline */}
          <ol className="relative lg:col-span-2">
            <span
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[7px] w-px bg-line"
            />

            {experience.map(({ role, context, period, description, highlights }, index) => (
              <Reveal
                key={`${role}-${context}`}
                as="li"
                delay={index * 90}
                className="relative mb-4 pl-8 last:mb-0 sm:pl-10"
              >
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="absolute top-5 left-0 h-3.5 w-3.5 rotate-45 border-2 border-accent bg-bg"
                />
                <span
                  aria-hidden="true"
                  className="absolute top-[26px] left-3.5 h-px w-3 bg-line sm:w-5"
                />

                <Panel hud className="group">
                  <div className="px-5 py-5 sm:px-6">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-2xl leading-tight text-text">{role}</h3>
                        <p className="label mt-1.5 text-[0.62rem] text-accent-ink">{context}</p>
                      </div>

                      <span className="cut-tab shrink-0 border border-line bg-bg px-3 py-1.5">
                        <span className="font-mono text-[0.62rem] text-muted">{period}</span>
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">{description}</p>

                    <ul className="mt-4 space-y-2 border-t border-line pt-4">
                      {highlights.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-[0.82rem] leading-relaxed text-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </ol>

          {/* Training & accreditation */}
          <div className="flex flex-col gap-4">
            <Reveal delay={140}>
              <Panel shape="cut-duo" hud>
                <div className="flex items-center gap-3 border-b border-line bg-panel-2 px-5 py-3.5">
                  <span className="cut-sm flex h-9 w-9 items-center justify-center bg-accent/10 text-accent-ink">
                    <GraduationCap className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg text-text">Education</h3>
                </div>

                <ul className="space-y-4 px-5 py-5">
                  {education.map(({ degree, institution, period }) => (
                    <li key={degree} className="border-l-2 border-accent/40 pl-4">
                      <p className="font-ui text-sm font-semibold text-text">{degree}</p>
                      <p className="mt-1 text-[0.8rem] text-muted">{institution}</p>
                      <p className="font-mono mt-1 text-[0.62rem] text-accent-ink">{period}</p>
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>

            <Reveal delay={200}>
              <Panel shape="cut-duo" hud>
                <div className="flex items-center gap-3 border-b border-line bg-panel-2 px-5 py-3.5">
                  <span className="cut-sm flex h-9 w-9 items-center justify-center bg-accent/10 text-accent-ink">
                    <Award className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg text-text">Certifications</h3>
                </div>

                <ul className="space-y-3 px-5 py-5">
                  {certifications.map((cert) => (
                    <li key={cert} className="flex gap-2.5 text-[0.82rem] leading-relaxed text-muted">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent"
                      />
                      {cert}
                    </li>
                  ))}
                </ul>
              </Panel>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

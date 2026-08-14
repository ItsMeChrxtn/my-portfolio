import { processSteps } from '../data/process'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Process() {
  return (
    <section id="process" className="section-shell border-y border-border/70 bg-surface-2/45 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Development Process"
          title="How I work"
          subtitle="A straightforward process that keeps projects predictable from kickoff to launch."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {processSteps.map(({ step, title, icon: Icon, description }, index) => (
            <Reveal key={step} delay={index * 80} className="relative">
              <div className="group h-full rounded-[1.5rem] border border-border bg-surface/88 p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-3xl font-black text-border">{step}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-text">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

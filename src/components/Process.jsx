import { processSteps } from '../data/process'
import Panel from './Panel'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Process() {
  return (
    <section id="process" className="relative border-y border-line-soft bg-panel-2/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="round.phases"
          title="How I Work"
          subtitle="A straightforward process that keeps projects predictable from kickoff to launch."
        />

        {/* Phase rail */}
        <Reveal className="mb-6 hidden lg:block">
          <div className="flex items-center gap-2">
            {processSteps.map(({ step, title }, index) => (
              <div key={step} className="flex flex-1 items-center gap-2">
                <div className="flex flex-1 flex-col gap-2">
                  <span className="h-1 w-full bg-accent" style={{ opacity: 1 - index * 0.13 }} />
                  <span className="stencil text-[0.52rem] text-faint">{title}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <span aria-hidden="true" className="text-faint">
                    ›
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(({ step, title, icon: Icon, description }, index) => (
            <Reveal key={step} delay={index * 70}>
              <Panel hud className="group h-full">
                <div className="relative flex h-full flex-col overflow-hidden">
                  {/* Phase progress bar */}
                  <span
                    aria-hidden="true"
                    className="block h-1 bg-accent"
                    style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                  />

                  <div className="flex flex-1 flex-col px-5 py-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="cut-sm flex h-11 w-11 items-center justify-center bg-accent/10 text-accent-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>

                      <span
                        aria-hidden="true"
                        className="font-display text-4xl leading-none text-text/[0.08] transition-colors duration-300 group-hover:text-accent/25"
                      >
                        {step}
                      </span>
                    </div>

                    <h3 className="font-display mt-4 text-xl leading-tight text-text">{title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

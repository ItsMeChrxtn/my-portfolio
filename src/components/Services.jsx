import { services } from '../data/services'
import Panel from './Panel'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="contracts.available"
          title="How I Can Help"
          subtitle="From a single feature to a full production system, here's what I bring to a project."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, description }, index) => (
            <Reveal key={title} delay={index * 70}>
              <Panel shape={index % 2 === 0 ? 'cut' : 'cut-tl'} hud className="group h-full">
                <div className="relative flex h-full flex-col overflow-hidden px-5 py-6">
                  {/* Ghosted contract number */}
                  <span
                    aria-hidden="true"
                    className="font-display pointer-events-none absolute -right-2 -bottom-6 text-7xl text-text/[0.045] transition-colors duration-300 group-hover:text-accent/10"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="stencil mb-4 text-[0.55rem] text-faint">
                    Contract {'//'} {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="cut-sm relative mb-4 flex h-12 w-12 items-center justify-center bg-accent/10 text-accent-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>

                  <h3 className="font-display relative text-xl leading-tight text-text">{title}</h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-muted">{description}</p>

                  <span
                    aria-hidden="true"
                    className="mt-5 block h-0.5 w-10 origin-left bg-accent transition-transform duration-300 group-hover:scale-x-[2.6]"
                  />
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

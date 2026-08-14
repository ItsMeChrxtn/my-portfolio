import { services } from '../data/services'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          subtitle="From a single feature to a full production system, here's what I bring to a project."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, description }, index) => (
            <Reveal
              key={title}
              delay={index * 80}
              className="group rounded-[1.5rem] border border-border bg-surface/88 p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-white shadow-lg shadow-accent/20 transition-transform duration-300 group-hover:scale-105">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-text">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

import { skillCategories } from '../data/skills'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Skills() {
  return (
    <section id="skills" className="section-shell border-y border-border/70 bg-surface-2/45 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Technologies I work with"
          subtitle="A toolkit built across the full stack — from interface to database to deployment."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ title, icon: Icon, skills }, index) => (
            <Reveal
              key={title}
              delay={index * 80}
              className="group rounded-[1.5rem] border border-border bg-surface/88 p-6 shadow-sm shadow-black/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-text">{title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface-2/80 px-3 py-1.5 text-sm font-medium text-text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

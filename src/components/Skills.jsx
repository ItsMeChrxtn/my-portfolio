import { skillCategories } from '../data/skills'
import Panel from './Panel'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const totalSkills = skillCategories.reduce((sum, category) => sum + category.skills.length, 0)

function Skills() {
  return (
    <section id="skills" className="relative border-y border-line-soft bg-panel-2/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="loadout.config"
          title="The Arsenal"
          subtitle="A toolkit built across the full stack — from interface to database to deployment."
        />

        {/* Loadout rail */}
        <Reveal className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="stencil text-[0.6rem] text-faint">
            Equipped <span className="text-accent-ink">{totalSkills}</span> / {totalSkills}
          </span>
          <span className="h-px flex-1 bg-line-soft" aria-hidden="true" />
          <span className="stencil text-[0.6rem] text-faint">
            {skillCategories.length} Classes
          </span>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(({ title, icon: Icon, skills }, index) => (
            <Reveal
              key={title}
              delay={index * 70}
              className={index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
            >
              <Panel hud className="group h-full">
                <div className="flex h-full flex-col">
                  {/* Class header */}
                  <div className="flex items-center gap-3 border-b border-line bg-panel-2 px-5 py-3.5">
                    <span className="cut-sm flex h-9 w-9 shrink-0 items-center justify-center bg-accent/10 text-accent-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display flex-1 text-xl text-text">{title}</h3>
                    <span className="font-mono text-[0.65rem] text-faint">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Equipped items */}
                  <ul className="flex flex-wrap gap-2 px-5 py-5">
                    {skills.map((skill) => (
                      <li key={skill}>
                        <span className="cut-tab flex items-center gap-2 border border-line bg-bg px-3 py-1.5 transition-colors duration-200 hover:border-accent hover:bg-accent/10">
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 shrink-0 rotate-45 bg-accent"
                          />
                          <span className="font-ui text-[0.78rem] font-medium text-text">
                            {skill}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

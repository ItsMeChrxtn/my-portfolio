import { useMemo } from 'react'
import { projects } from '../../data/projects'
import { skillCategories } from '../../data/skills'
import { techAbbr, techGradient } from '../../data/techColors'
import Card from '../Card'

/** How many shipped projects actually use each skill — a real number, not a bar. */
function useUsageCounts() {
  return useMemo(() => {
    const counts = {}
    for (const project of projects) {
      for (const tech of project.technologies) {
        const key = tech.toLowerCase()
        counts[key] = (counts[key] ?? 0) + 1
      }
    }
    return counts
  }, [])
}

function usageFor(counts, skill) {
  const needle = skill.toLowerCase()
  let total = 0
  for (const [key, value] of Object.entries(counts)) {
    if (key.includes(needle) || needle.includes(key)) total += value
  }
  return total
}

function SkillsTab({ onNavigate }) {
  const counts = useUsageCounts()
  const total = skillCategories.reduce((sum, category) => sum + category.skills.length, 0)

  return (
    <div className="flex flex-col gap-4">
      <Card
        title="Skills and tools"
        action={<span className="text-sm text-faint">{total} technologies</span>}
        bodyClassName="px-4 pt-3 pb-4"
      >
        <p className="text-sm text-muted">
          Every tile is a link — tap one to see the projects built with it.
        </p>
      </Card>

      {/* items-start so a short category does not stretch to match a long one. */}
      <div className="grid items-start gap-4 lg:grid-cols-2">
        {skillCategories.map(({ title, icon: Icon, skills }) => (
          <Card
            key={title}
            title={title}
            action={
              <span className="flex items-center gap-2 text-sm text-faint">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {skills.length}
              </span>
            }
            bodyClassName="px-4 pt-3 pb-4"
          >
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {skills.map((skill) => {
                const used = usageFor(counts, skill)

                return (
                  <li key={skill}>
                    <button
                      type="button"
                      onClick={() => onNavigate('projects', null, skill)}
                      className="group flex w-full items-center gap-2.5 rounded-lg bg-panel-2 p-2 text-left transition-colors hover:bg-brand-soft"
                      title={
                        used > 0
                          ? `${used} project${used === 1 ? '' : 's'} use ${skill}`
                          : `See projects related to ${skill}`
                      }
                    >
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold text-white"
                        style={{ background: techGradient(skill) }}
                        aria-hidden="true"
                      >
                        {techAbbr(skill)}
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-text group-hover:text-brand">
                          {skill}
                        </span>
                        {used > 0 && (
                          <span className="block text-xs text-faint">
                            {used} project{used === 1 ? '' : 's'}
                          </span>
                        )}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default SkillsTab

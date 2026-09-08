import { skillCategories } from '../data/skills'
import { techGradient } from '../data/techColors'
import Card from './Card'

const allSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({ skill, category: category.title })),
)

const featured = allSkills.slice(0, 9)

/** The Friends grid, re-cast as the tech stack. */
function StackCard({ onNavigate }) {
  return (
    <Card
      title="Tech stack"
      action={
        <button
          type="button"
          onClick={() => onNavigate('skills')}
          className="link rounded-md px-2 py-1 text-[0.9375rem] hover:bg-panel-2"
        >
          See all
        </button>
      }
      bodyClassName="px-4 pt-1 pb-4"
    >
      <p className="mb-3 text-sm text-faint">{allSkills.length} technologies</p>

      <ul className="grid grid-cols-3 gap-2">
        {featured.map(({ skill, category }) => (
          <li key={skill}>
            <button
              type="button"
              onClick={() => onNavigate('skills')}
              className="w-full text-left"
              title={`${skill} — ${category}`}
            >
              <span
                className="flex aspect-square w-full items-center justify-center rounded-lg text-lg font-extrabold text-white transition-transform duration-200 hover:scale-[1.04]"
                style={{ background: techGradient(skill) }}
                aria-hidden="true"
              >
                {skill.slice(0, 2).toUpperCase()}
              </span>
              <span className="mt-1 block truncate text-xs font-medium text-text">{skill}</span>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default StackCard

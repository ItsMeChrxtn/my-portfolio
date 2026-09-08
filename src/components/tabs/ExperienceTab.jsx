import { Award, Briefcase, GraduationCap } from 'lucide-react'
import { certifications, education } from '../../data/education'
import { experience } from '../../data/experience'
import Avatar from '../Avatar'
import Card from '../Card'

/** One entry on the vertical timeline — the "life events" treatment. */
function TimelineItem({ role, isLast }) {
  return (
    <li className="relative flex gap-4 pb-6 last:pb-0">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute top-11 bottom-0 left-[1.25rem] w-0.5 bg-line-soft"
        />
      )}

      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
        <Briefcase className="h-5 w-5" aria-hidden="true" />
      </span>

      <div className="min-w-0 flex-1 rounded-lg bg-panel-2 p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-[1.0625rem] leading-snug font-bold text-text">{role.role}</h3>
            <p className="text-sm font-semibold text-brand">{role.context}</p>
          </div>
          <span className="chip bg-panel text-xs">{role.period}</span>
        </div>

        <p className="mt-2.5 text-sm leading-relaxed text-muted">{role.description}</p>

        <ul className="mt-3 space-y-2 border-t border-line-soft pt-3">
          {role.highlights.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span
                aria-hidden="true"
                className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

function ExperienceTab() {
  return (
    <div className="flex flex-col gap-4">
      <Card
        title="Work timeline"
        action={<span className="text-sm text-faint">{experience.length} roles</span>}
        bodyClassName="px-4 pt-4 pb-4"
      >
        <div className="mb-4 flex items-center gap-3 rounded-lg bg-panel-2 p-3">
          <Avatar size={40} />
          <p className="text-sm text-muted">
            From computer programmer to freelance full-stack developer to college IT instructor.
          </p>
        </div>

        <ol>
          {experience.map((role, index) => (
            <TimelineItem
              key={`${role.role}-${role.context}`}
              role={role}
              isLast={index === experience.length - 1}
            />
          ))}
        </ol>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Education" bodyClassName="px-4 pt-3 pb-4">
          <ul className="space-y-3">
            {education.map(({ degree, institution, period }) => (
              <li key={degree} className="flex gap-3 rounded-lg bg-panel-2 p-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panel text-brand">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-text">{degree}</p>
                  <p className="text-sm text-muted">{institution}</p>
                  <p className="mt-0.5 text-xs text-faint">{period}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Certifications and training" bodyClassName="px-4 pt-3 pb-4">
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-center gap-3 rounded-lg bg-panel-2 p-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-panel text-amber">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-medium text-text">{cert}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default ExperienceTab

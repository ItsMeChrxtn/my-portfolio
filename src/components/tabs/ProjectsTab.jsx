import { useMemo, useState } from 'react'
import { ChevronDown, ExternalLink, X } from 'lucide-react'
import { filterCategories, projects } from '../../data/projects'
import { techColor } from '../../data/techColors'
import Card from '../Card'
import ProjectVisual from '../ProjectVisual'
import { GithubIcon } from '../icons/BrandIcons'

function ProjectTile({ project }) {
  const [open, setOpen] = useState(false)
  const hasDemo = Boolean(project.demo) && project.demo !== '#'

  return (
    <article
      id={`project-${project.id}`}
      className="card flex scroll-mt-24 flex-col overflow-hidden"
    >
      <ProjectVisual project={project} className="aspect-[16/10] w-full" />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[1.0625rem] leading-snug font-bold text-text">{project.title}</h3>
          <span className="chip shrink-0 bg-brand-soft text-brand">{project.category}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
          {project.technologies.map((tech) => (
            <li key={tech} className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full"
                style={{ background: techColor(tech) }}
              />
              <span className="text-xs text-muted">{tech}</span>
            </li>
          ))}
        </ul>

        {open && project.features?.length > 0 && (
          <ul className="animate-fade-up mt-3 space-y-2 rounded-lg bg-panel-2 p-3">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="no-print mt-auto flex items-center gap-2 pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-soft flex-1 text-sm"
            aria-label={`View the ${project.title} source on GitHub`}
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>

          {hasDemo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="btn-brand flex-1 text-sm"
              aria-label={`Open the live demo of ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Demo
            </a>
          )}

          {project.features?.length > 0 && (
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-label={open ? 'Hide the feature list' : 'Show the feature list'}
              className="btn-soft px-3 text-sm"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectsTab({ techFilter, onClearTech }) {
  const [category, setCategory] = useState('All')

  // A hashtag tapped in the feed arrives as a tech filter. While one is active
  // the category widens to All, so a match is never hidden behind a stale tab —
  // derived rather than synced, so clearing the tag restores the category.
  const effectiveCategory = techFilter ? 'All' : category

  const counts = useMemo(() => {
    const map = { All: projects.length }
    for (const name of filterCategories) {
      if (name === 'All') continue
      map[name] = projects.filter((project) => project.category === name).length
    }
    return map
  }, [])

  const visible = useMemo(() => {
    let list = projects
    if (effectiveCategory !== 'All') {
      list = list.filter((project) => project.category === effectiveCategory)
    }
    if (techFilter) {
      const needle = techFilter.toLowerCase()
      list = list.filter((project) =>
        project.technologies.some((tech) => tech.toLowerCase().includes(needle)),
      )
    }
    return list
  }, [effectiveCategory, techFilter])

  return (
    <div className="flex flex-col gap-4">
      <Card
        title="Projects"
        action={<span className="text-sm text-faint">{projects.length} total</span>}
        bodyClassName="px-4 pt-3 pb-4"
      >
        <ul className="flex flex-wrap gap-2">
          {filterCategories.map((name) => {
            const isActive = category === name && !techFilter

            return (
              <li key={name}>
                <button
                  type="button"
                  onClick={() => {
                    setCategory(name)
                    onClearTech()
                  }}
                  aria-pressed={isActive}
                  className={`chip transition-colors ${
                    isActive
                      ? 'bg-brand text-white'
                      : 'hover:bg-brand-soft hover:text-brand'
                  }`}
                >
                  {name}
                  <span className={isActive ? 'text-white/70' : 'text-faint'}>
                    {counts[name] ?? 0}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        {techFilter && (
          <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
            Filtered by
            <button
              type="button"
              onClick={onClearTech}
              className="chip bg-brand text-white transition-colors hover:bg-brand-hover"
            >
              #{techFilter}
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <span className="text-faint">
              {visible.length} match{visible.length === 1 ? '' : 'es'}
            </span>
          </p>
        )}
      </Card>

      {visible.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <Card bodyClassName="p-10">
          <p className="text-center text-muted">
            Nothing matches that filter yet.{' '}
            <button
              type="button"
              onClick={() => {
                setCategory('All')
                onClearTech()
              }}
              className="link"
            >
              Show everything
            </button>
          </p>
        </Card>
      )}
    </div>
  )
}

export default ProjectsTab

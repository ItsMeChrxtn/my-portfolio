import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Briefcase, FolderGit2, Search, Wrench, X } from 'lucide-react'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'
import { experience } from '../data/experience'
import { services } from '../data/services'

const typeMeta = {
  project: { icon: FolderGit2, label: 'Project', tab: 'projects' },
  skill: { icon: Wrench, label: 'Skill', tab: 'skills' },
  role: { icon: Briefcase, label: 'Experience', tab: 'experience' },
  service: { icon: ArrowRight, label: 'Service', tab: 'services' },
}

/** Flattened, searchable view of everything on the profile. */
function buildIndex() {
  const entries = []

  for (const project of projects) {
    entries.push({
      id: `project-${project.id}`,
      type: 'project',
      title: project.title,
      subtitle: project.technologies.join(' · '),
      anchor: `project-${project.id}`,
      haystack: [project.title, project.description, project.category, ...project.technologies]
        .join(' ')
        .toLowerCase(),
    })
  }

  for (const category of skillCategories) {
    for (const skill of category.skills) {
      entries.push({
        id: `skill-${skill}`,
        type: 'skill',
        title: skill,
        subtitle: category.title,
        anchor: null,
        haystack: `${skill} ${category.title}`.toLowerCase(),
      })
    }
  }

  for (const role of experience) {
    entries.push({
      id: `role-${role.role}-${role.context}`,
      type: 'role',
      title: role.role,
      subtitle: `${role.context} · ${role.period}`,
      anchor: null,
      haystack: `${role.role} ${role.context} ${role.description}`.toLowerCase(),
    })
  }

  for (const service of services) {
    entries.push({
      id: `service-${service.title}`,
      type: 'service',
      title: service.title,
      subtitle: 'Service offered',
      anchor: null,
      haystack: `${service.title} ${service.description}`.toLowerCase(),
    })
  }

  return entries
}

const searchIndex = buildIndex()

function SearchBox({ onNavigate, className = '' }) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (term.length < 2) return []
    return searchIndex.filter((entry) => entry.haystack.includes(term)).slice(0, 8)
  }, [query])

  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event) => {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const select = (entry) => {
    onNavigate(typeMeta[entry.type].tab, entry.anchor)
    setQuery('')
    setIsOpen(false)
  }

  const showPanel = isOpen && query.trim().length >= 2

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="flex items-center gap-2 rounded-full bg-panel-2 px-3 py-2 focus-within:ring-2 focus-within:ring-brand/40">
        <Search className="h-4 w-4 shrink-0 text-faint" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search projects, skills, roles"
          aria-label="Search the profile"
          className="w-full min-w-0 bg-transparent text-sm text-text placeholder:text-faint focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="shrink-0 text-faint hover:text-text"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {showPanel && (
        <div className="animate-pop-in absolute top-full left-0 z-50 mt-2 w-full min-w-[18rem] overflow-hidden rounded-lg bg-panel shadow-pop">
          {results.length > 0 ? (
            <ul className="max-h-[22rem] overflow-y-auto py-2">
              {results.map((entry) => {
                const { icon: Icon, label } = typeMeta[entry.type]

                return (
                  <li key={entry.id}>
                    <button
                      type="button"
                      onClick={() => select(entry)}
                      className="flex w-full items-center gap-3 px-3 py-2 text-left transition-colors hover:bg-panel-2"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-panel-2 text-muted">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-semibold text-text">
                          {entry.title}
                        </span>
                        <span className="block truncate text-xs text-faint">{entry.subtitle}</span>
                      </span>
                      <span className="shrink-0 text-[0.65rem] font-semibold tracking-wide text-faint uppercase">
                        {label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          ) : (
            <p className="px-4 py-6 text-center text-sm text-faint">
              No results for &ldquo;{query.trim()}&rdquo;
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBox

import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { filterCategories, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const projectsPerPage = 6

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const counts = useMemo(() => {
    const map = { All: projects.length }
    for (const category of filterCategories) {
      if (category === 'All') continue
      map[category] = projects.filter((project) => project.category === category).length
    }
    return map
  }, [])

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const activePage = Math.min(currentPage, totalPages || 1)
  const startIndex = (activePage - 1) * projectsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="match_history"
          title="Missions Completed"
          subtitle="From full-stack web systems to embedded hardware — the projects I've shipped."
        />

        {/* Mode selector */}
        <Reveal className="mb-8">
          <div
            className="flex flex-wrap items-stretch gap-1.5 border-b border-line pb-3"
            role="group"
            aria-label="Filter projects by category"
          >
            {filterCategories.map((category) => {
              const isActive = activeFilter === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveFilter(category)
                    setCurrentPage(1)
                  }}
                  aria-pressed={isActive}
                  className={`cut-tab group flex items-center gap-2 px-4 py-2.5 transition-colors duration-200 ${
                    isActive
                      ? 'bg-accent'
                      : 'border border-line bg-panel hover:border-accent hover:bg-accent/10'
                  }`}
                >
                  <span
                    className={`label text-[0.64rem] ${isActive ? 'text-white' : 'text-text'}`}
                  >
                    {category}
                  </span>
                  <span
                    className={`font-mono text-[0.6rem] ${
                      isActive ? 'text-white/70' : 'text-faint'
                    }`}
                  >
                    {counts[category] ?? 0}
                  </span>
                </button>
              )
            })}

            <span className="stencil ml-auto hidden self-center text-[0.58rem] text-faint sm:block">
              {filteredProjects.length} Result{filteredProjects.length === 1 ? '' : 's'}
            </span>
          </div>
        </Reveal>

        {filteredProjects.length > 0 ? (
          <>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={startIndex + index}
                  delay={(index % 3) * 80}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <nav
                className="mt-12 flex flex-wrap items-center justify-center gap-2"
                aria-label="Project pages"
              >
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={activePage === 1}
                  className="cut-sm flex h-10 w-10 items-center justify-center border border-line bg-panel text-muted transition-colors hover:border-accent hover:text-accent-ink disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line disabled:hover:text-muted"
                  aria-label="Previous project page"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    aria-current={activePage === page ? 'page' : undefined}
                    className={`cut-sm flex h-10 min-w-10 items-center justify-center px-3 transition-colors ${
                      activePage === page
                        ? 'bg-accent'
                        : 'border border-line bg-panel hover:border-accent'
                    }`}
                  >
                    <span
                      className={`font-display text-base ${
                        activePage === page ? 'text-white' : 'text-text'
                      }`}
                    >
                      {String(page).padStart(2, '0')}
                    </span>
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  disabled={activePage === totalPages}
                  className="cut-sm flex h-10 w-10 items-center justify-center border border-line bg-panel text-muted transition-colors hover:border-accent hover:text-accent-ink disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line disabled:hover:text-muted"
                  aria-label="Next project page"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </nav>
            )}
          </>
        ) : (
          <p className="py-12 text-center text-muted">No projects found in this category yet.</p>
        )}
      </div>
    </section>
  )
}

export default Projects

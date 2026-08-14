import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { filterCategories, projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

const projectsPerPage = 6

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const activePage = Math.min(currentPage, totalPages || 1)
  const paginatedProjects = filteredProjects.slice(
    (activePage - 1) * projectsPerPage,
    activePage * projectsPerPage,
  )

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="From full-stack web systems to embedded hardware — the projects I've shipped, in code."
        />

        <div
          className="mx-auto mb-12 flex max-w-4xl flex-wrap justify-center gap-2 rounded-[1.5rem] border border-border bg-surface/70 p-2 shadow-sm shadow-black/5 backdrop-blur"
          role="group"
          aria-label="Filter projects by category"
        >
          {filterCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveFilter(category)
                setCurrentPage(1)
              }}
              aria-pressed={activeFilter === category}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === category
                  ? 'border-accent bg-accent text-white shadow-md shadow-accent/20'
                  : 'border-transparent bg-transparent text-text-muted hover:bg-surface hover:text-text'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={(index % 3) * 90} />
              ))}
            </div>

            {totalPages > 1 && (
              <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="Project pages">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={activePage === 1}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text-muted shadow-sm shadow-black/5 transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-text-muted"
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
                    className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-semibold shadow-sm shadow-black/5 transition-colors ${
                      activePage === page
                        ? 'border-accent bg-accent text-white shadow-md shadow-accent/20'
                        : 'border-border bg-surface text-text-muted hover:border-accent hover:text-accent'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                  disabled={activePage === totalPages}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-text-muted shadow-sm shadow-black/5 transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-text-muted"
                  aria-label="Next project page"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </nav>
            )}
          </>
        ) : (
          <p className="text-center text-text-muted">No projects found in this category yet.</p>
        )}
      </div>
    </section>
  )
}

export default Projects

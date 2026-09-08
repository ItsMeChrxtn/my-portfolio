import { projects } from '../data/projects'
import Card from './Card'
import ProjectVisual from './ProjectVisual'

const TILES = 9
const shown = projects.slice(0, TILES)
const overflow = projects.length - shown.length

/** The Photos grid, filled with project screenshots instead of holiday snaps. */
function PhotosCard({ onNavigate }) {
  return (
    <Card
      title="Project photos"
      action={
        <button
          type="button"
          onClick={() => onNavigate('projects')}
          className="link rounded-md px-2 py-1 text-[0.9375rem] hover:bg-panel-2"
        >
          See all
        </button>
      }
      bodyClassName="px-4 pt-3 pb-4"
    >
      <ul className="grid grid-cols-3 gap-1 overflow-hidden rounded-lg">
        {shown.map((project, index) => {
          const isLast = index === shown.length - 1
          const showOverflow = isLast && overflow > 0

          return (
            <li key={project.id}>
              <button
                type="button"
                onClick={() => onNavigate('projects', showOverflow ? null : `project-${project.id}`)}
                title={showOverflow ? `${overflow} more projects` : project.title}
                className="group relative block aspect-square w-full overflow-hidden"
              >
                <ProjectVisual
                  project={project}
                  className="h-full w-full transition-transform duration-300 group-hover:scale-110"
                />

                {showOverflow ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-black/55 text-lg font-bold text-white transition-colors group-hover:bg-black/45">
                    +{overflow}
                  </span>
                ) : (
                  <span
                    className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20"
                    aria-hidden="true"
                  />
                )}

                <span className="sr-only">
                  {showOverflow ? `See ${overflow} more projects` : project.title}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default PhotosCard

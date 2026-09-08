import { projects } from '../data/projects'
import Card from './Card'
import ProjectVisual from './ProjectVisual'

const featured = projects.slice(0, 9)

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
        {featured.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              onClick={() => onNavigate('projects', `project-${project.id}`)}
              title={project.title}
              className="group relative block aspect-square w-full overflow-hidden"
            >
              <ProjectVisual
                project={project}
                className="h-full w-full transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/25"
                aria-hidden="true"
              />
              <span className="sr-only">{project.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default PhotosCard

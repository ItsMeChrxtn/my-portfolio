import { Star } from 'lucide-react'
import { projects } from '../data/projects'

function hasDemo(project) {
  return Boolean(project.demo) && project.demo !== '#'
}

/** The flagship builds — the ones with a live deployment lead. */
const featured = [...projects]
  .sort((a, b) => Number(hasDemo(b)) - Number(hasDemo(a)))
  .slice(0, 8)

/** "PathToTech — Employability Predictor" is too long for a 4rem circle. */
function shortLabel(title) {
  return title.split(/[—–]/)[0].trim()
}

/**
 * Two letters from the capitals in the name. A cropped screenshot is unreadable
 * at this size, so the circle carries a monogram instead.
 */
function monogram(title) {
  const capitals = shortLabel(title).match(/[A-Z]/g) ?? []
  if (capitals.length >= 2) return capitals.slice(0, 2).join('')
  return shortLabel(title).slice(0, 2).toUpperCase()
}

/**
 * A distinct hue per circle. Colouring by primary technology would paint every
 * MERN build the same pale cyan — losing the distinction and failing contrast
 * against the white monogram. Hashing the id clustered the hues instead, so the
 * spacing is the golden angle: neighbours land far apart on the wheel, and
 * lightness stays low enough for white text.
 */
function circleStyle(index) {
  const hue = Math.round((index * 137.508) % 360)
  return {
    background: `linear-gradient(140deg, hsl(${hue} 62% 46%), hsl(${(hue + 22) % 360} 66% 34%))`,
  }
}

/**
 * A row of circular project shortcuts, the way a profile carries story
 * highlights. Purely navigational, but it gives the feed a strong entry point.
 */
function FeaturedStrip({ onNavigate }) {
  return (
    <section className="card no-print px-4 py-3">
      <h2 className="mb-3 flex items-center gap-2 text-[0.9375rem] font-bold text-text">
        <Star className="h-4 w-4 fill-amber text-amber" aria-hidden="true" />
        Featured work
      </h2>

      <ul className="no-scrollbar -mx-1 flex gap-3 overflow-x-auto px-1 pb-1">
        {featured.map((project, index) => (
          <li key={project.id} className="shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('projects', `project-${project.id}`)}
              className="group flex w-[4.75rem] flex-col items-center gap-1.5"
              title={project.title}
            >
              <span className="rounded-full bg-gradient-to-br from-brand to-amber p-[2px] transition-transform duration-200 group-hover:scale-105 group-active:scale-95">
                <span className="block rounded-full bg-panel p-[2px]">
                  <span
                    className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full text-lg font-extrabold tracking-tight text-white"
                    style={circleStyle(index)}
                    aria-hidden="true"
                  >
                    {monogram(project.title)}
                  </span>
                </span>
              </span>
              <span className="w-full truncate text-center text-[0.6875rem] font-medium text-muted group-hover:text-brand">
                {shortLabel(project.title)}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default FeaturedStrip

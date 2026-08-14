import { useState } from 'react'
import {
  BadgeCheck,
  Barcode,
  BriefcaseBusiness,
  ChevronDown,
  Cpu,
  ExternalLink,
  LayoutDashboard,
  Lightbulb,
  Pill,
  ScanFace,
  Scissors,
  ShieldCheck,
  Store,
  Trophy,
  Waves,
  TriangleAlert,
} from 'lucide-react'
import Reveal from './Reveal'
import { GithubIcon } from './icons/BrandIcons'

const visualIcons = {
  barcode: Barcode,
  cutter: Scissors,
  display: LayoutDashboard,
  face: ScanFace,
  hazard: TriangleAlert,
  jobs: BriefcaseBusiness,
  league: Trophy,
  lighting: Lightbulb,
  market: Store,
  medicine: Pill,
  portfolio: BadgeCheck,
  security: ShieldCheck,
  tide: Waves,
}

function SystemPreview({ project }) {
  const Icon = visualIcons[project.visual?.icon] ?? Cpu
  const label = project.visual?.label ?? `${project.category} System`
  const techLabel = project.technologies.slice(0, 3).join(' / ')

  return (
    <div className="relative flex h-full overflow-hidden bg-surface-2">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(109,40,217,0.24),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(8,145,178,0.2),transparent_28%)]" />
      <div className="relative flex flex-1 items-center gap-4 p-5">
        <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface/85 text-accent shadow-sm backdrop-blur">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </span>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-text-muted">{label}</p>
          <p className="mt-1 truncate text-sm font-semibold text-text">{project.title}</p>
          <p className="mt-2 truncate text-xs text-text-muted">{techLabel}</p>
        </div>
      </div>

      <div className="absolute right-4 bottom-4 grid grid-cols-3 gap-1 opacity-45">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-accent" />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project, delay = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const { title, description, technologies, category, github, demo, image, features } = project
  const hasDemo = Boolean(demo) && demo !== '#'

  return (
    <Reveal
      delay={delay}
      className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-border bg-surface/90 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-2xl hover:shadow-black/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/20 via-accent-2/10 to-surface-2">
        {image && !imageFailed ? (
          <img
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <SystemPreview project={project} />
        )}
        <span className="absolute top-3 right-3 rounded-full border border-border bg-surface/90 px-3 py-1 text-xs font-medium text-text-muted backdrop-blur">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold leading-snug text-text">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface-2/80 px-2.5 py-1 text-xs font-semibold text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {isExpanded && features?.length > 0 && (
          <ul className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm text-text-muted">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-1 items-end justify-between gap-2 pt-2">
          <div className="flex gap-2">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${title} source code on GitHub`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-2/60 text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            {hasDemo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live demo of ${title}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-2/60 text-text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-sm font-semibold text-accent transition-colors hover:bg-accent-soft hover:text-accent-2"
          >
            View Details
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </Reveal>
  )
}

export default ProjectCard

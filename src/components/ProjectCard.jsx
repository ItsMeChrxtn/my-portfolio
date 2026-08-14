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
import { techColor } from '../data/techColors'
import Panel from './Panel'
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

/** Fallback tile for projects without a screenshot — a HUD readout instead. */
function SystemPreview({ project }) {
  const Icon = visualIcons[project.visual?.icon] ?? Cpu
  const label = project.visual?.label ?? `${project.category} System`

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden bg-panel-2">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,transparent_44%,var(--accent)_44%,var(--accent)_46%,transparent_46%)] opacity-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--glow-a),transparent_60%)]"
      />

      <div className="relative flex flex-col items-center gap-3">
        <span className="cut-sm flex h-16 w-16 items-center justify-center border border-line bg-panel text-accent-ink">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <span className="stencil text-[0.55rem] text-faint">{label}</span>
      </div>

      <span
        aria-hidden="true"
        className="absolute top-3 left-3 h-3 w-3 border-t-2 border-l-2 border-accent/60"
      />
      <span
        aria-hidden="true"
        className="absolute right-3 bottom-3 h-3 w-3 border-r-2 border-b-2 border-accent/60"
      />
    </div>
  )
}

function ProjectCard({ project, index = 0, delay = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const { title, description, technologies, category, github, demo, image, features } = project
  const hasDemo = Boolean(demo) && demo !== '#'

  return (
    <Reveal delay={delay} className="h-full">
      <Panel shape="cut-duo" className="group h-full">
        <div className="flex h-full flex-col">
          {/* Preview */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {image && !imageFailed ? (
              <img
                src={image}
                alt={`${title} preview`}
                loading="lazy"
                onError={() => setImageFailed(true)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <SystemPreview project={project} />
            )}

            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80"
            />

            {/* Match number */}
            <span className="font-mono absolute top-3 left-3 text-[0.6rem] text-white/70 [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
              #{String(index + 1).padStart(2, '0')}
            </span>

            {/* Category tag */}
            <span className="cut-tab absolute top-3 right-3 bg-accent px-2.5 py-1">
              <span className="label text-[0.55rem] text-white">{category}</span>
            </span>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
            <div className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className="mt-1.5 h-4 w-1 shrink-0 bg-accent transition-all duration-300 group-hover:h-5"
              />
              <h3 className="font-display text-xl leading-tight text-text">{title}</h3>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

            {/* Loadout */}
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: techColor(tech) }}
                  />
                  <span className="font-mono text-[0.66rem] text-muted">{tech}</span>
                </li>
              ))}
            </ul>

            {isExpanded && features?.length > 0 && (
              <ul className="mt-4 space-y-2 border-t border-line pt-4">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-[0.82rem] leading-relaxed text-muted">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Actions */}
            <div className="mt-auto flex items-center justify-between gap-2 pt-5">
              <div className="flex gap-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${title} source code on GitHub`}
                  className="cut-sm flex h-9 w-9 items-center justify-center border border-line bg-bg text-muted transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                {hasDemo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live demo of ${title}`}
                    className="cut-sm flex h-9 w-9 items-center justify-center border border-line bg-bg text-muted transition-colors hover:border-accent hover:bg-accent hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-expanded={isExpanded}
                className="label flex items-center gap-1.5 text-[0.62rem] text-accent-ink transition-colors hover:text-text"
              >
                {isExpanded ? 'Close' : 'Details'}
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </Panel>
    </Reveal>
  )
}

export default ProjectCard

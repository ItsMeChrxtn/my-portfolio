import { useState } from 'react'
import {
  BadgeCheck,
  Barcode,
  BriefcaseBusiness,
  Cpu,
  LayoutDashboard,
  Lightbulb,
  Pill,
  ScanFace,
  Scissors,
  ShieldCheck,
  Store,
  Trophy,
  TriangleAlert,
  Waves,
} from 'lucide-react'

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

/** Generated tile for projects with no screenshot to show. */
function Placeholder({ project }) {
  const Icon = visualIcons[project.visual?.icon] ?? Cpu
  const label = project.visual?.label ?? `${project.category} System`

  return (
    <div className="cover relative flex h-full w-full items-center justify-center">
      <div className="cover-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold tracking-wide text-white/90">{label}</span>
      </div>
    </div>
  )
}

/**
 * A project image with a graceful fallback: real screenshot when one exists,
 * generated tile when it does not or when loading fails.
 */
function ProjectVisual({ project, className = '' }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(project.image) && !failed

  return (
    <div className={`relative overflow-hidden bg-panel-2 ${className}`}>
      {showImage ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <Placeholder project={project} />
      )}
    </div>
  )
}

export default ProjectVisual

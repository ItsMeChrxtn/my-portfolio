import { ArrowRight } from 'lucide-react'
import { processSteps } from '../../data/process'
import { profile } from '../../data/profile'
import { services } from '../../data/services'
import Card from '../Card'

function ServicesTab({ onNavigate }) {
  return (
    <div className="flex flex-col gap-4">
      <Card
        title="What I build"
        action={<span className="text-sm text-faint">{services.length} services</span>}
        bodyClassName="px-4 pt-3 pb-4"
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {services.map(({ title, icon: Icon, description }) => (
            <li key={title}>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(`Project inquiry — ${title}`)}`}
                className="group flex h-full gap-3 rounded-lg bg-panel-2 p-4 transition-colors hover:bg-brand-soft"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-panel text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-1.5 font-bold text-text group-hover:text-brand">
                    {title}
                    <ArrowRight
                      className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted">
                    {description}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-3 text-xs text-faint">
          Each service opens a pre-filled email — no form to fill in.
        </p>
      </Card>

      <Card title="How I work" bodyClassName="px-4 pt-3 pb-4">
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(({ step, title, icon: Icon, description }) => (
            <li key={step} className="rounded-lg bg-panel-2 p-4">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                  {step}
                </span>
                <Icon className="h-4 w-4 text-faint" aria-hidden="true" />
                <h3 className="font-bold text-text">{title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ol>
      </Card>

      <Card bodyClassName="p-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-text">Need one of these built?</h3>
            <p className="text-sm text-muted">
              Tell me the scope and I will come back with an approach and a timeline.
            </p>
          </div>
          <button type="button" onClick={() => onNavigate('contact')} className="btn-brand">
            Start a conversation
          </button>
        </div>
      </Card>
    </div>
  )
}

export default ServicesTab

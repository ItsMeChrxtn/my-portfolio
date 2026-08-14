import Reveal from './Reveal'

function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment} mb-14 sm:mb-16`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent shadow-sm shadow-black/5 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-3" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}

export default SectionHeading

import Reveal from './Reveal'

/**
 * Section header: ghosted round number, a mono code-comment eyebrow, and the
 * title set in condensed display caps under a red rail.
 */
function SectionHeading({ index, eyebrow, title, subtitle, align = 'left' }) {
  const isCenter = align === 'center'

  return (
    <div className="relative mb-14 sm:mb-16">
      <span
        aria-hidden="true"
        className={`watermark pointer-events-none absolute -top-10 select-none ${
          isCenter ? 'left-1/2 -translate-x-1/2' : '-left-3'
        }`}
      >
        {index}
      </span>

      <Reveal
        className={`relative flex max-w-3xl flex-col gap-4 ${
          isCenter ? 'mx-auto items-center text-center' : 'items-start'
        }`}
      >
        <span className="stencil flex items-center gap-3 text-[0.7rem] font-medium text-accent-ink">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          <span className="text-faint">{'//'}</span>
          {eyebrow}
        </span>

        <h2 className="font-display text-balance text-4xl text-text sm:text-5xl lg:text-6xl">
          {title}
        </h2>

        <span
          aria-hidden="true"
          className={`block h-1 w-20 bg-accent ${isCenter ? 'mx-auto' : ''}`}
        />

        {subtitle && (
          <p className="max-w-2xl text-base leading-relaxed text-muted">{subtitle}</p>
        )}
      </Reveal>
    </div>
  )
}

export default SectionHeading

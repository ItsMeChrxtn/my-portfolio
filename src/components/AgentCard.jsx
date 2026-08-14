import { Atom, Boxes, Database, GitBranch } from 'lucide-react'

/** A light dusting of syntax colour, kept inside the VALORANT palette. */
const K = ({ children }) => <span className="text-accent-ink">{children}</span>
const P = ({ children }) => <span className="text-muted">{children}</span>
const S = ({ children }) => <span className="text-teal">{children}</span>

const codeLines = [
  <>
    <K>const</K> <span className="text-text">developer</span> <P>= {'{'}</P>
  </>,
  <>
    {'  '}
    <P>name:</P> <S>&apos;Christian Lloyd&apos;</S><P>,</P>
  </>,
  <>
    {'  '}
    <P>role:</P> <S>&apos;Full-Stack Dev&apos;</S><P>,</P>
  </>,
  <>
    {'  '}
    <P>base:</P> <S>&apos;Cavite, PH&apos;</S><P>,</P>
  </>,
  <>
    {'  '}
    <P>deployed:</P> <span className="text-teal">true</span><P>,</P>
  </>,
  <>
    <P>{'}'}</P>
  </>,
]

const badges = [
  { label: 'React', icon: Atom, className: '-top-4 -left-5 animate-float' },
  { label: 'Node.js', icon: Boxes, className: 'top-1/3 -right-6 animate-float-slow' },
  { label: 'MongoDB', icon: Database, className: 'bottom-24 -left-8 animate-float-slow' },
  { label: 'Git', icon: GitBranch, className: '-bottom-4 right-10 animate-float' },
]

function AgentCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Offset ghost frame behind the card */}
      <div
        aria-hidden="true"
        className="cut-duo absolute -inset-4 border border-line-soft"
      />

      <div className="edge-accent cut-duo relative">
        <div className="cut-duo scanlines relative overflow-hidden bg-panel-2">
          {/* Header rail */}
          <div className="relative flex items-center justify-between border-b border-line bg-panel px-4 py-3">
            <span className="flex items-center gap-2.5">
              <span className="h-4 w-1 bg-accent" aria-hidden="true" />
              <span className="label text-[0.62rem] text-text">Agent Dossier</span>
            </span>
            <span className="font-mono text-[0.6rem] text-faint">ID://0447</span>
          </div>

          {/* Portrait area */}
          <div className="relative h-52 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(115deg,transparent_38%,var(--accent)_38%,var(--accent)_41%,transparent_41%,transparent_54%,var(--accent)_54%,var(--accent)_55.5%,transparent_55.5%)] opacity-25"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,var(--glow-a),transparent_62%)]"
            />

            {/* Reticle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                aria-hidden="true"
                className="animate-spin-slow absolute h-36 w-36 rounded-full border border-dashed border-accent/35"
              />
              <span
                aria-hidden="true"
                className="absolute h-24 w-24 border border-accent/25"
                style={{ transform: 'rotate(45deg)' }}
              />
              <span className="font-display relative text-6xl text-text/90">CLD</span>
            </div>

            {/* Scan sweep */}
            <span
              aria-hidden="true"
              className="animate-scan-down absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,transparent,var(--glow-a))]"
            />

            <span className="label absolute bottom-3 left-4 text-[0.58rem] text-faint">
              Duelist / Builder
            </span>
          </div>

          {/* Code readout — the programming syntax accent */}
          <div className="border-t border-line bg-panel px-4 py-4">
            <pre className="overflow-x-auto font-mono text-[0.72rem] leading-6 sm:text-xs">
              {codeLines.map((line, index) => (
                <div key={index} className="flex gap-3">
                  <span className="w-3 shrink-0 text-right text-faint/60" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className="whitespace-pre">{line}</span>
                </div>
              ))}
            </pre>
          </div>

          {/* Loadout ticker */}
          <div className="flex items-center gap-2 border-t border-line bg-panel-2 px-4 py-2.5">
            <span className="h-1.5 w-1.5 shrink-0 bg-teal-fill" aria-hidden="true" />
            <p className="stencil truncate text-[0.55rem] text-faint">
              React · Node · Express · MongoDB · PHP · Python
            </p>
          </div>
        </div>
      </div>

      {badges.map(({ label, icon: Icon, className }) => (
        <div
          key={label}
          className={`edge cut-sm absolute hidden sm:block ${className}`}
          aria-hidden="true"
        >
          <span className="cut-sm flex items-center gap-1.5 bg-panel px-3 py-1.5">
            <Icon className="h-3.5 w-3.5 text-accent-ink" />
            <span className="label text-[0.58rem] text-text">{label}</span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default AgentCard

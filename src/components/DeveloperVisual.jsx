import { Atom, Boxes, Database, GitBranch } from 'lucide-react'

const codeLines = [
  { indent: 0, content: [{ text: 'const', color: 'text-pink-400' }, { text: ' developer = {', color: 'text-text' }] },
  { indent: 1, content: [{ text: 'name:', color: 'text-sky-400' }, { text: " 'Christian Lloyd Del Rosario',", color: 'text-emerald-400' }] },
  { indent: 1, content: [{ text: 'role:', color: 'text-sky-400' }, { text: " 'Software Developer',", color: 'text-emerald-400' }] },
  {
    indent: 1,
    content: [
      { text: 'stack:', color: 'text-sky-400' },
      { text: " ['React', 'Node.js', 'MongoDB'],", color: 'text-emerald-400' },
    ],
  },
  { indent: 1, content: [{ text: 'available:', color: 'text-sky-400' }, { text: ' true,', color: 'text-amber-400' }] },
  { indent: 0, content: [{ text: '};', color: 'text-text' }] },
]

const floatingBadges = [
  { label: 'React', icon: Atom, className: 'top-[-14px] left-6 animate-float' },
  { label: 'Node.js', icon: Boxes, className: 'top-1/3 -right-6 animate-float-delayed' },
  { label: 'MongoDB', icon: Database, className: 'bottom-6 -left-8 animate-float-delayed' },
  { label: 'Git', icon: GitBranch, className: 'bottom-[-16px] right-8 animate-float' },
]

function DeveloperVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute -inset-5 -z-10 rotate-2 rounded-[2rem] border border-border bg-surface-2/70"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface/92 shadow-2xl shadow-black/10 backdrop-blur">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent-2 to-accent-3" aria-hidden="true" />
        <div className="flex items-center gap-2 border-b border-border bg-surface-2/80 px-4 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
          <span className="ml-3 font-mono text-xs text-text-muted">developer.js</span>
        </div>

        <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7 sm:text-sm">
          {codeLines.map((line, i) => (
            <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
              {line.content.map((token, j) => (
                <span key={j} className={token.color}>
                  {token.text}
                </span>
              ))}
            </div>
          ))}
          <span className="inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink" aria-hidden="true" />
        </pre>
      </div>

      {floatingBadges.map(({ label, icon: Icon, className }) => (
        <div
          key={label}
          className={`absolute hidden items-center gap-1.5 rounded-xl border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text shadow-lg shadow-black/10 sm:flex ${className}`}
        >
          <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          {label}
        </div>
      ))}
    </div>
  )
}

export default DeveloperVisual

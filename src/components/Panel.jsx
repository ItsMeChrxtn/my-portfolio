/**
 * The core VALORANT surface: a cut-corner panel with a hairline edge and
 * optional HUD corner brackets that light up on hover.
 */
function Panel({
  children,
  className = '',
  innerClassName = '',
  shape = 'cut',
  accent = false,
  hud = false,
}) {
  return (
    <div className={`relative ${hud ? 'hud' : ''} ${className}`}>
      <div className={`${accent ? 'edge-accent' : 'edge'} ${shape} h-full`}>
        <div className={`${shape} h-full bg-panel ${innerClassName}`}>{children}</div>
      </div>
    </div>
  )
}

export default Panel

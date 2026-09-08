/**
 * A profile card: white surface, 8px radius, hairline shadow. Optional title
 * row with a blue action link on the right, the way sidebar cards look.
 */
function Card({ title, action, children, className = '', bodyClassName = 'p-4' }) {
  return (
    <section className={`card ${className}`}>
      {(title || action) && (
        <header className="flex items-center justify-between gap-3 px-4 pt-4">
          {title && <h2 className="text-xl font-bold text-text">{title}</h2>}
          {action}
        </header>
      )}
      <div className={bodyClassName}>{children}</div>
    </section>
  )
}

export default Card

/**
 * Renders the **bold** spans used in the intro facts. Deliberately tiny —
 * just enough markup to emphasise employers and degrees, no parser needed.
 */
function RichText({ text, className = '' }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)

  return (
    <span className={className}>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-text">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </span>
  )
}

export default RichText

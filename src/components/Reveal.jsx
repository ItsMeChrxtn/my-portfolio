import { useInView } from '../hooks/useInView'

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, isInView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

export default Reveal

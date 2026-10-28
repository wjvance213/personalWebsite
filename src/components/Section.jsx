import Reveal from './Reveal.jsx'

export default function Section({ id, title, subtitle, className = '', children }) {
  return (
    <section className={`block ${className}`.trim()} id={id}>
      <div className="wrap">
        <Reveal as="h2">{title}</Reveal>
        {subtitle && <Reveal as="p" className="sub">{subtitle}</Reveal>}
        {children}
      </div>
    </section>
  )
}

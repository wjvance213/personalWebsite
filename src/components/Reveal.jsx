import { useEffect, useRef, useState } from 'react'

// Fades and slides its content in the first time it enters the viewport, then stays put.
// `index` staggers siblings (cards, timeline items) by 90ms each.
export default function Reveal({ as: Tag = 'div', index = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        io.disconnect()
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const classes = ['reveal', shown && 'in-view', className].filter(Boolean).join(' ')
  return (
    <Tag ref={ref} className={classes} style={{ '--i': index, ...style }} {...rest}>
      {children}
    </Tag>
  )
}

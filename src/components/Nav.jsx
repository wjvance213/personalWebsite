import { useEffect, useState } from 'react'
import { navLinks, site } from '../content.js'

// Returns the id of the linked section the viewer is reading: the last one whose top has
// passed the middle of the screen. Unlinked sections (Skills) keep the previous link lit,
// and the last link wins at the bottom of the page since Contact may never reach the middle.
function useActiveSection() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1))
    let frame = 0

    const update = () => {
      frame = 0
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) return setActive(ids[ids.length - 1])
      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return active
}

export default function Nav() {
  const active = useActiveSection()

  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="#top">
          {site.name}
        </a>
        <ul>
          {navLinks.map((link) => {
            const isActive = link.href === `#${active}`
            return (
              <li key={link.href}>
                <a href={link.href} className={isActive ? 'active' : undefined} aria-current={isActive ? 'location' : undefined}>
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

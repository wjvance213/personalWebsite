import { navLinks, site } from '../content.js'

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="#top">
          {site.name}
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

import { hero, site } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <Reveal className="eyebrow">{hero.eyebrow}</Reveal>
          <Reveal as="h1">Hi, I'm {site.name}.</Reveal>
          <Reveal as="p" className="lead">{hero.lead}</Reveal>
          <Reveal className="btns">
            <a className="btn primary" href="#projects">See my projects</a>
            {site.resume && <a className="btn" href={site.resume}>Résumé (PDF)</a>}
          </Reveal>
        </div>
        <Reveal className="portrait">
          <img src={hero.photo} alt={hero.photoAlt} width="900" height="1200" />
        </Reveal>
      </div>
    </header>
  )
}

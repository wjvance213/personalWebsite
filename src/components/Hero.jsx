import { hero, site } from '../content.js'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <Reveal className="portrait">
          <img src={hero.photo} alt={hero.photoAlt} width="900" height="1200" />
        </Reveal>
        <Reveal className="eyebrow">{hero.eyebrow}</Reveal>
        <Reveal as="h1">{site.name}</Reveal>
        <Reveal as="p" className="lead">{hero.lead}</Reveal>
        <Reveal className="btns">
          {site.email && <a className="btn primary" href={`mailto:${site.email}`}>{site.email}</a>}
          <a className="btn" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          {site.linkedin && <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <a className="btn" href="#resume">Résumé</a>
        </Reveal>
      </div>
    </header>
  )
}

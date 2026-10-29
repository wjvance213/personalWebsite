import { hero, site } from '../content.js'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <Reveal className="eyebrow">{hero.eyebrow}</Reveal>
          <Reveal as="h1">{site.name}</Reveal>
          <Reveal as="p" className="lead">{hero.lead}</Reveal>
          <Reveal className="btns">
            {site.email && <a className="btn primary" href={`mailto:${site.email}`}>{site.email}</a>}
            <a className="btn icon" href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHubIcon /></a>
            {site.linkedin && <a className="btn icon" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedInIcon /></a>}
            {site.resume && <a className="btn" href={site.resume} target="_blank" rel="noreferrer">Résumé</a>}
          </Reveal>
        </div>
        <Reveal className="portrait">
          <img src={hero.photo} alt={hero.photoAlt} width="900" height="1200" />
        </Reveal>
      </div>
    </header>
  )
}

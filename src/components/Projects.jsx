import { projects } from '../content.js'
import LoopVideo from './LoopVideo.jsx'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

function Thumb({ project }) {
  if (project.video) {
    return (
      <div className="thumb">
        <LoopVideo src={project.video} label={project.mediaLabel} />
      </div>
    )
  }
  if (project.image) {
    return (
      <div className="thumb">
        <img src={project.image} alt={project.mediaLabel} />
      </div>
    )
  }
  return <div className="thumb thumb-empty" aria-hidden="true">{project.title}</div>
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Things I've built in class and on my own.">
      <div className="grid">
        {projects.map((project, i) => (
          <Reveal as="article" className="card" index={i} key={project.title}>
            <Thumb project={project} />
            <h3>{project.title}</h3>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <p>{project.description}</p>
            {project.links.length > 0 && (
              <div className="links">
                {project.links.map((link) => (
                  <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                    {link.label} →
                  </a>
                ))}
              </div>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

import { experience } from '../content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="Leadership and work outside the classroom.">
      {experience.map((job, i) => (
        <Reveal className="job" index={i} key={job.title}>
          <div className="when">{job.when}</div>
          <div>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
          </div>
        </Reveal>
      ))}
    </Section>
  )
}

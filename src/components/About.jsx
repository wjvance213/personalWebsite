import { about } from '../content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function About() {
  return (
    <Section id="about" title="About me" subtitle="The short version of how I got here.">
      <div className="about">
        <div>
          {about.paragraphs.map((text) => (
            <Reveal as="p" key={text}>{text}</Reveal>
          ))}
        </div>
        <ol className="timeline">
          {about.timeline.map((step, i) => (
            <Reveal as="li" index={i} key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.detail}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}

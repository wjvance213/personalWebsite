import { skills } from '../content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="What I work with.">
      <div className="skills">
        {skills.map((group, i) => (
          <Reveal className="card" index={i} key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

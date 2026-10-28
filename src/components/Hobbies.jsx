import { hobbies } from '../content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Hobbies() {
  return (
    <Section id="life" title="Beyond code" subtitle="What I'm doing when I'm not at a keyboard.">
      <div className="hobbies">
        {hobbies.map((hobby, i) => (
          <Reveal className="card hobby" index={i} key={hobby.title}>
            <div className="level">{hobby.level}</div>
            <h3>{hobby.title}</h3>
            <p>{hobby.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

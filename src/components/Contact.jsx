import { contact, site } from '../content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

export default function Contact() {
  return (
    <Section id="contact" title={contact.heading} className="contact">
      <Reveal as="p">{contact.text}</Reveal>
      <Reveal className="btns">
        {site.email && <a className="btn primary" href={`mailto:${site.email}`}>Email me</a>}
        <a className={`btn ${site.email ? '' : 'primary'}`.trim()} href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        {site.linkedin && <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
      </Reveal>
    </Section>
  )
}

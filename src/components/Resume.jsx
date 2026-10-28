import { resume, site } from '../content.js'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

// Until site.resume is set, this shows a short note and an email link instead of the PDF buttons.
export default function Resume() {
  return (
    <Section id="resume" title="Résumé" className="resume">
      <Reveal as="p">{site.resume ? resume.text : resume.pendingText}</Reveal>
      <Reveal className="btns">
        {site.resume ? (
          <>
            <a className="btn primary" href={site.resume} target="_blank" rel="noreferrer">View PDF</a>
            <a className="btn" href={site.resume} download>Download</a>
          </>
        ) : (
          site.email && <a className="btn primary" href={`mailto:${site.email}?subject=R%C3%A9sum%C3%A9%20request`}>Request a copy</a>
        )}
      </Reveal>
    </Section>
  )
}

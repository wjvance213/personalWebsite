import { contact, site } from '../content.js'
import { ArrowUpRightIcon, FileIcon, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, MapPinIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'
import Section from './Section.jsx'

// One row in the left column: icon tile, small label, value, and an arrow if it's a link.
function ContactItem({ icon, label, value, href, external }) {
  const body = (
    <>
      <span className="contact-icon">{icon}</span>
      <span className="contact-text">
        <span className="contact-label">{label}</span>
        <span className="contact-value">{value}</span>
      </span>
      {href && <span className="contact-arrow"><ArrowUpRightIcon size={16} /></span>}
    </>
  )
  if (!href) return <div className="contact-item">{body}</div>
  return (
    <a className="contact-item" href={href} {...(external && { target: '_blank', rel: 'noreferrer' })}>
      {body}
    </a>
  )
}

export default function Contact() {
  // Links without a value yet are left out.
  const online = [
    { name: 'GitHub', href: site.github, icon: <GitHubIcon size={18} /> },
    { name: 'LinkedIn', href: site.linkedin, icon: <LinkedInIcon size={18} /> },
    { name: 'Instagram', href: site.instagram, icon: <InstagramIcon size={18} /> },
  ].filter((link) => link.href)

  return (
    <Section id="contact" title={contact.heading} subtitle={contact.text} className="contact">
      <div className="contact-grid">
        <Reveal className="contact-items">
          {site.email && <ContactItem icon={<MailIcon />} label="Email" value={site.email} href={`mailto:${site.email}`} />}
          {site.resume && <ContactItem icon={<FileIcon />} label="Résumé" value="Download PDF" href={site.resume} external />}
          {contact.location && <ContactItem icon={<MapPinIcon />} label="Location" value={contact.location} />}
        </Reveal>
        <Reveal className="contact-side">
          <div className="card online">
            <h3>Find me online</h3>
            <div className="online-links">
              {online.map((link) => (
                <a key={link.name} href={link.href} target="_blank" rel="noreferrer">
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          {site.email && <a className="btn primary contact-cta" href={`mailto:${site.email}`}>Send me an email</a>}
        </Reveal>
      </div>
    </Section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { site } from '../content.js'

const HASH = '#resume'

// Full-screen résumé viewer. Any link to #resume opens it; Escape, the close button,
// or the browser's back button closes it. Download is in the top-left corner.
export default function ResumeViewer() {
  const dialog = useRef(null)
  const [open, setOpen] = useState(() => window.location.hash === HASH)

  useEffect(() => {
    const onHashChange = () => setOpen(window.location.hash === HASH)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const el = dialog.current
    if (open && !el.open) el.showModal()
    if (!open && el.open) el.close()
  }, [open])

  // Fires for Escape and for close(); drop the hash without jumping the page.
  const onClose = () => {
    if (window.location.hash === HASH) history.replaceState(null, '', window.location.pathname + window.location.search)
    setOpen(false)
  }

  if (!site.resume) return null
  // Some mobile browsers (Android Chrome) can't show PDFs inline.
  const canEmbed = navigator.pdfViewerEnabled !== false

  return (
    <dialog ref={dialog} className="resume-viewer" aria-label="Résumé" onClose={onClose}>
      <div className="viewer-bar">
        <a className="btn primary" href={site.resume} download={site.resumeFileName}>Download PDF</a>
        <button type="button" className="viewer-close" onClick={() => dialog.current.close()} aria-label="Close résumé">×</button>
      </div>
      {open && (canEmbed ? (
        <iframe className="viewer-frame" src={`${site.resume}#view=FitH`} title={`${site.name} résumé`} />
      ) : (
        <div className="viewer-fallback">
          <p>Your browser can't show PDFs here.</p>
          <a className="btn" href={site.resume} target="_blank" rel="noreferrer">Open PDF</a>
        </div>
      ))}
    </dialog>
  )
}

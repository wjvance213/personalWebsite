import { site } from '../content.js'

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} {site.name} · Built with React + Vite · Hosted on Cloudflare
    </footer>
  )
}

import { useRef, useState } from 'react'
import { PlayIcon, StopIcon } from './Icons.jsx'

// A row of play/stop buttons for comparing audio clips. Only one plays at a time,
// and each starts from the beginning so A/B comparisons line up.
export default function AudioSamples({ samples }) {
  const players = useRef([])
  const [playing, setPlaying] = useState(null)

  const toggle = (i) => {
    players.current.forEach((audio) => {
      audio.pause()
      audio.currentTime = 0
    })
    if (playing === i) return setPlaying(null)
    setPlaying(i)
    players.current[i].play().catch(() => setPlaying(null))
  }

  return (
    <div className="samples">
      {samples.map((sample, i) => (
        <button type="button" key={sample.src} className={`sample ${playing === i ? 'playing' : ''}`.trim()} aria-pressed={playing === i} onClick={() => toggle(i)}>
          {playing === i ? <StopIcon size={14} /> : <PlayIcon size={14} />}
          {sample.label}
          <audio ref={(el) => { players.current[i] = el }} src={sample.src} preload="none" onEnded={() => setPlaying(null)} />
        </button>
      ))}
    </div>
  )
}

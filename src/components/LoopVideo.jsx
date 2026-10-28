const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Muted, looping, control-less video so it reads like a GIF at a fraction of the size.
// Reduced-motion users get the first frame instead.
export default function LoopVideo({ src, label }) {
  return (
    <video
      src={src}
      autoPlay={!prefersReducedMotion}
      muted
      loop
      playsInline
      disablePictureInPicture
      preload="metadata"
      aria-label={label}
    />
  )
}

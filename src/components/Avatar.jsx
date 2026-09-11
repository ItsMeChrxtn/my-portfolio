import { BadgeCheck } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data/profile'

/**
 * The profile picture. Renders the real photo, with the initials on a brand
 * gradient underneath so the same fallback a real profile uses shows while
 * the image loads or if it ever fails.
 */
function Avatar({ size = 40, fontSize, ring = false, className = '' }) {
  const [failed, setFailed] = useState(false)

  // `size` takes a number of pixels or any CSS length, so the header can hand
  // it a clamp() and stay responsive — a plain number cannot do that, and an
  // inline width would override a Tailwind sizing class anyway.
  const dimension = typeof size === 'number' ? `${size}px` : size
  const type = fontSize ?? (typeof size === 'number' ? `${size * 0.38}px` : '2.6rem')

  return (
    <span
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand to-brand-hover font-bold text-white select-none ${
        ring ? 'ring-[0.25rem] ring-panel' : ''
      } ${className}`}
      style={{ width: dimension, height: dimension, fontSize: type }}
      aria-hidden="true"
    >
      <span
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 20%, rgba(255,255,255,.55), transparent 55%)',
        }}
      />
      <span className="relative tracking-tight">{profile.initials}</span>
      {!failed && (
        <img
          src={profile.photo}
          alt=""
          draggable="false"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      )}
    </span>
  )
}

/** The little blue check next to the name. */
export function VerifiedBadge({ className = '' }) {
  return (
    <BadgeCheck
      className={`h-4 w-4 shrink-0 fill-brand text-panel ${className}`}
      aria-label="Verified profile"
    />
  )
}

/** Green presence dot, positioned by the caller. */
export function OnlineDot({ className = '' }) {
  return (
    <span
      className={`block rounded-full border-[3px] border-panel bg-green ${className}`}
      aria-hidden="true"
    />
  )
}

export default Avatar

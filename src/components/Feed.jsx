import { useState } from 'react'
import { Download, Phone, Pin, PlusCircle } from 'lucide-react'
import { feed, initialFeedSize } from '../data/feed'
import { profile } from '../data/profile'
import { useReactions } from '../hooks/useReactions'
import Avatar from './Avatar'
import PostCard from './PostCard'

/** The "what's on your mind" composer, re-cast as a hire-me prompt. */
function Composer() {
  return (
    <section className="card no-print p-4">
      <div className="flex items-center gap-2">
        <Avatar size={40} />
        <a
          href={`mailto:${profile.email}`}
          className="flex-1 rounded-full bg-panel-2 px-4 py-2.5 text-left text-muted transition-colors hover:bg-panel-3"
        >
          Got a project in mind, {profile.shortName.split(' ')[0]} is listening…
        </a>
      </div>

      <hr className="my-3 border-line-soft" />

      <div className="grid grid-cols-3 gap-1">
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold text-muted transition-colors hover:bg-panel-2"
        >
          <PlusCircle className="h-[1.15rem] w-[1.15rem] text-green" aria-hidden="true" />
          Hire
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold text-muted transition-colors hover:bg-panel-2"
        >
          <Phone className="h-[1.15rem] w-[1.15rem] text-brand" aria-hidden="true" />
          Call
        </a>
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
          className="flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold text-muted transition-colors hover:bg-panel-2"
        >
          <Download className="h-[1.15rem] w-[1.15rem] text-amber" aria-hidden="true" />
          CV
        </a>
      </div>
    </section>
  )
}

function Feed({ onNavigate }) {
  const { liked, toggle } = useReactions()
  const [visible, setVisible] = useState(initialFeedSize)

  const shown = feed.slice(0, visible)
  const remaining = feed.length - shown.length

  return (
    <div className="flex flex-col gap-4">
      <Composer />

      {shown.map((post) => (
        <div key={post.id} className="relative">
          {post.pinned && (
            <p className="mb-1 flex items-center gap-1.5 px-1 text-xs font-semibold text-faint">
              <Pin className="h-3.5 w-3.5" aria-hidden="true" />
              Pinned post
            </p>
          )}
          <PostCard
            post={post}
            isLiked={liked.has(post.id)}
            onToggleLike={toggle}
            onNavigate={onNavigate}
          />
        </div>
      ))}

      {remaining > 0 && (
        <button
          type="button"
          onClick={() => setVisible((count) => count + 6)}
          className="btn-soft no-print w-full py-3"
        >
          See {Math.min(remaining, 6)} more post{Math.min(remaining, 6) === 1 ? '' : 's'}
          <span className="text-faint">({remaining} left)</span>
        </button>
      )}

      {remaining === 0 && (
        <p className="py-4 text-center text-sm text-faint">
          That is the whole record —{' '}
          <button type="button" onClick={() => onNavigate('about')} className="link">
            read the full CV
          </button>
        </p>
      )}
    </div>
  )
}

export default Feed

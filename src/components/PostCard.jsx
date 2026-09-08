import { useState } from 'react'
import {
  Check,
  ChevronDown,
  ExternalLink,
  Globe,
  MessageSquare,
  Share2,
  ThumbsUp,
} from 'lucide-react'
import { profile } from '../data/profile'
import { techColor } from '../data/techColors'
import Avatar, { VerifiedBadge } from './Avatar'
import ProjectVisual from './ProjectVisual'
import { GithubIcon } from './icons/BrandIcons'

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

/**
 * One entry in the feed. A CV line item wearing the clothes of a social post:
 * byline, body, tags, media, and an action bar where every button does
 * something real.
 */
function PostCard({ post, isLiked, onToggleLike, onNavigate }) {
  const [showDetails, setShowDetails] = useState(false)
  const [didCopy, setDidCopy] = useState(false)

  const { id, subline, time, body, bullets = [], tags = [], project, links = {} } = post
  const hasDemo = Boolean(links.demo) && links.demo !== '#'
  const hasRepo = Boolean(links.github)
  const likeCount = (post.baseLikes ?? 0) + (isLiked ? 1 : 0)

  const share = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${post.tab ?? 'posts'}`
    try {
      if (navigator.share) {
        await navigator.share({ title: post.title ?? profile.name, url })
        return
      }
      await navigator.clipboard.writeText(url)
      setDidCopy(true)
      window.setTimeout(() => setDidCopy(false), 2000)
    } catch {
      /* the visitor dismissed the share sheet, or the clipboard is blocked */
    }
  }

  return (
    <article className="card animate-fade-up overflow-hidden">
      {/* Byline */}
      <header className="flex items-start gap-3 px-4 pt-3">
        <Avatar size={40} />

        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-[0.9375rem] leading-tight font-semibold text-text">
            {profile.shortName}
            <VerifiedBadge />
          </p>
          <p className="mt-0.5 flex flex-wrap items-center gap-1 text-xs text-faint">
            <span className="font-medium">{subline}</span>
            {time && (
              <>
                <span aria-hidden="true">·</span>
                <span>{time}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <Globe className="h-3 w-3" aria-hidden="true" />
          </p>
        </div>

        <button
          type="button"
          onClick={share}
          aria-label="Copy a link to this post"
          title="Copy link"
          className="no-print -mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-panel-2"
        >
          {didCopy ? (
            <Check className="h-4 w-4 text-green" aria-hidden="true" />
          ) : (
            <Share2 className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </header>

      {/* Body */}
      <div className="px-4 pt-3 pb-3">
        {post.title && (
          <h3 className="mb-1.5 text-lg leading-snug font-bold text-text">{post.title}</h3>
        )}

        <p className="text-[0.9375rem] leading-relaxed whitespace-pre-line text-text">{body}</p>

        {tags.length > 0 && (
          <ul className="mt-2.5 flex flex-wrap gap-x-2 gap-y-1">
            {tags.map((tag) => (
              <li key={tag}>
                <button
                  type="button"
                  onClick={() => onNavigate('projects', null, tag)}
                  className="text-[0.9375rem] font-medium text-brand hover:underline"
                >
                  #{tag.replace(/[\s.()/-]+/g, '')}
                </button>
              </li>
            ))}
          </ul>
        )}

        {showDetails && bullets.length > 0 && (
          <ul className="animate-fade-up mt-3 space-y-2 rounded-lg bg-panel-2 p-3">
            {bullets.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Media */}
      {project && (
        <button
          type="button"
          onClick={() => onNavigate('projects', `project-${project.id}`)}
          className="group block w-full overflow-hidden border-y border-line-soft"
          aria-label={`Open ${project.title} in the Projects tab`}
        >
          <ProjectVisual
            project={project}
            className="aspect-[16/9] w-full transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </button>
      )}

      {/* Link preview, the way a shared URL renders */}
      {hasDemo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-panel-2 px-4 py-2.5 transition-colors hover:bg-panel-3"
        >
          <span className="min-w-0 flex-1">
            <span className="block truncate text-xs tracking-wide text-faint uppercase">
              {hostOf(links.demo)}
            </span>
            <span className="block truncate text-[0.9375rem] font-semibold text-text">
              {post.title ?? profile.name}
            </span>
            <span className="block text-xs text-faint">Live deployment — open in a new tab</span>
          </span>
          <span className="btn-soft shrink-0 bg-panel text-sm">Visit site</span>
        </a>
      )}

      {/* Counts. The tally is only ever the visitor's own reaction — no invented
          social proof sitting under a real CV. */}
      <div className="flex items-center justify-between gap-3 px-4 py-2 text-sm text-faint">
        {likeCount > 0 ? (
          <span className="flex items-center gap-1.5">
            <span
              className="flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-full bg-brand"
              aria-hidden="true"
            >
              <ThumbsUp className="h-2.5 w-2.5 fill-white text-white" />
            </span>
            You
          </span>
        ) : (
          <span>Be the first to react</span>
        )}

        <span className="flex items-center gap-2.5">
          {tags.length > 0 && (
            <span className="flex items-center gap-1.5">
              {/* A language bar, the way a repo summarises its stack. */}
              <span className="flex h-1.5 w-14 overflow-hidden rounded-full" aria-hidden="true">
                {tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="h-full flex-1"
                    style={{ background: techColor(tag) }}
                  />
                ))}
              </span>
              {tags.length} tech
            </span>
          )}
          {bullets.length > 0 && tags.length > 0 && (
            <span className="text-line" aria-hidden="true">
              ·
            </span>
          )}
          {bullets.length > 0 && (
            <span>
              {bullets.length} highlight{bullets.length === 1 ? '' : 's'}
            </span>
          )}
        </span>
      </div>

      {/* Actions */}
      <div className="no-print grid grid-cols-3 gap-1 border-t border-line-soft px-2 py-1">
        <button
          type="button"
          onClick={() => onToggleLike(id)}
          aria-pressed={isLiked}
          className={`flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold transition-colors hover:bg-panel-2 ${
            isLiked ? 'text-brand' : 'text-muted'
          }`}
        >
          <ThumbsUp
            className={`h-[1.15rem] w-[1.15rem] ${isLiked ? 'fill-brand' : ''}`}
            style={isLiked ? { animation: 'like-bounce 0.4s' } : undefined}
            aria-hidden="true"
          />
          Like
        </button>

        {bullets.length > 0 ? (
          <button
            type="button"
            onClick={() => setShowDetails((open) => !open)}
            aria-expanded={showDetails}
            className="flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold text-muted transition-colors hover:bg-panel-2"
          >
            <MessageSquare className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
            Details
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform ${showDetails ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={share}
            className="flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold text-muted transition-colors hover:bg-panel-2"
          >
            <Share2 className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
            Share
          </button>
        )}

        {hasRepo ? (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold text-muted transition-colors hover:bg-panel-2"
          >
            <GithubIcon className="h-[1.15rem] w-[1.15rem]" />
            Code
          </a>
        ) : (
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold text-muted transition-colors hover:bg-panel-2"
          >
            <ExternalLink className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
            Contact
          </a>
        )}
      </div>
    </article>
  )
}

export default PostCard

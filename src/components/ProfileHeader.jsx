import { Download, MessageCircle, Phone, UserPlus } from 'lucide-react'
import { navLinks } from '../data/navLinks'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skillCategories } from '../data/skills'
import Avatar, { OnlineDot, VerifiedBadge } from './Avatar'
import { GithubIcon } from './icons/BrandIcons'

const techCount = new Set(skillCategories.flatMap((category) => category.skills)).size

/** The "1.2K friends" line, except the counts are the CV numbers. */
const quickStats = [
  { label: 'projects shipped', value: projects.length, tab: 'projects' },
  { label: 'technologies', value: techCount, tab: 'skills' },
  { label: 'years building', value: '5+', tab: 'experience' },
]

function ProfileHeader({ activeTab, onNavigate }) {
  return (
    <div className="bg-panel shadow-card">
      {/* Cover */}
      <div className="mx-auto max-w-[1100px] px-0 sm:px-4">
        <div className="cover relative h-[9rem] overflow-hidden sm:h-[13rem] sm:rounded-b-lg lg:h-[17rem]">
          <div className="cover-grid absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="cover-grain absolute inset-0 opacity-[0.16]" aria-hidden="true" />
          <div className="cover-sheen absolute inset-0" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"
            aria-hidden="true"
          />

          {/* Oversized monogram, ghosted into the cover the way a banner mark sits. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -bottom-10 hidden text-[11rem] leading-none font-extrabold tracking-tighter text-white/[0.07] select-none sm:block lg:-bottom-16 lg:text-[15rem]"
          >
            {profile.initials}
          </span>

          {/* Top-left, clear of the avatar that overlaps the bottom-left corner. */}
          <p className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/35 px-3 py-1.5 text-[0.8125rem] font-semibold text-white ring-1 ring-white/15 backdrop-blur-sm sm:top-5 sm:left-6 sm:text-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green" />
            </span>
            Open to freelance work and full-time roles
          </p>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="no-print absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-2 text-sm font-semibold text-[#050505] transition-colors hover:bg-white sm:right-6 sm:bottom-5"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </div>

      {/* Identity block */}
      <div className="mx-auto max-w-[1100px] px-4">
        <div className="flex flex-col items-center gap-4 pb-4 lg:flex-row lg:items-end lg:gap-6">
          <div className="relative -mt-[3.75rem] shrink-0 lg:-mt-[2.75rem]">
            <Avatar size="clamp(7.5rem, 16vw, 10.5rem)" fontSize="clamp(2.8rem, 6vw, 4rem)" ring />
            <OnlineDot className="absolute right-3 bottom-3 h-5 w-5 lg:right-4 lg:bottom-4 lg:h-6 lg:w-6" />
          </div>

          {/* w-full matters: the column container centres its children, which
              otherwise shrink to their content width and overflow on mobile. */}
          <div className="w-full flex-1 pb-1 text-center lg:w-auto lg:pb-3 lg:text-left">
            <h1 className="flex items-center justify-center gap-2 text-[1.75rem] leading-[1.15] font-extrabold tracking-[-0.02em] text-text lg:justify-start lg:text-[2.125rem]">
              {profile.name}
              <VerifiedBadge className="h-5 w-5" />
            </h1>

            <p className="mt-1 text-[0.9375rem] font-semibold text-muted">{profile.headline}</p>

            <ul className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-muted lg:justify-start">
              {quickStats.map(({ label, value, tab }, index) => (
                <li key={label} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-faint" aria-hidden="true">
                      ·
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => onNavigate(tab)}
                    className="font-semibold transition-colors hover:text-brand hover:underline"
                  >
                    {value} {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="no-print flex w-full flex-wrap items-center justify-center gap-2 pb-1 lg:w-auto lg:pb-3">
            <button type="button" onClick={() => onNavigate('contact')} className="btn-brand">
              <UserPlus className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
              Hire me
            </button>

            <a href={`mailto:${profile.email}`} className="btn-soft">
              <MessageCircle className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
              Message
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="btn-soft"
              aria-label={`Call ${profile.phone}`}
            >
              <Phone className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
              <span className="hidden sm:inline">Call</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn-soft"
              aria-label="Open GitHub profile"
            >
              <GithubIcon className="h-[1.15rem] w-[1.15rem]" />
            </a>
          </div>
        </div>

        <hr className="border-line-soft" />

        {/* Tabs */}
        <nav aria-label="Profile tabs" className="no-print">
          <ul className="no-scrollbar flex items-center gap-1 overflow-x-auto py-1">
            {navLinks.map(({ id, label }) => {
              const isActive = activeTab === id

              return (
                <li key={id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => onNavigate(id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative rounded-lg px-4 py-3 text-[0.9375rem] font-semibold transition-colors ${
                      isActive ? 'text-brand' : 'text-muted hover:bg-panel-2'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-1 h-[3px] rounded-t bg-brand"
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default ProfileHeader

import { useCallback, useEffect, useState } from 'react'
import Feed from './components/Feed'
import Footer from './components/Footer'
import IntroCard from './components/IntroCard'
import PhotosCard from './components/PhotosCard'
import ProfileHeader from './components/ProfileHeader'
import StackCard from './components/StackCard'
import TopBar from './components/TopBar'
import AboutTab from './components/tabs/AboutTab'
import ContactTab from './components/tabs/ContactTab'
import ExperienceTab from './components/tabs/ExperienceTab'
import ProjectsTab from './components/tabs/ProjectsTab'
import ServicesTab from './components/tabs/ServicesTab'
import SkillsTab from './components/tabs/SkillsTab'
import { useHashTab } from './hooks/useHashTab'

function App() {
  const [tab, goToTab] = useHashTab()
  const [techFilter, setTechFilter] = useState(null)
  const [pendingAnchor, setPendingAnchor] = useState(null)

  /**
   * One navigation entry point for the whole profile: switch tab, optionally
   * carry a tech filter across from a hashtag, and optionally land on a
   * specific card.
   */
  const navigate = useCallback(
    (nextTab, anchor = null, tech = null) => {
      setTechFilter(tech)
      setPendingAnchor(anchor)
      goToTab(nextTab, { scrollToTop: !anchor })
    },
    [goToTab],
  )

  // Runs after the new tab has rendered, so the target card exists.
  useEffect(() => {
    if (!pendingAnchor) return

    const timer = window.setTimeout(() => {
      document
        .getElementById(pendingAnchor)
        ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setPendingAnchor(null)
    }, 60)

    return () => window.clearTimeout(timer)
  }, [pendingAnchor, tab])

  const isFeed = tab === 'posts'

  const tabContent = {
    posts: <Feed onNavigate={navigate} />,
    about: <AboutTab onNavigate={navigate} />,
    projects: <ProjectsTab techFilter={techFilter} onClearTech={() => setTechFilter(null)} />,
    experience: <ExperienceTab />,
    skills: <SkillsTab onNavigate={navigate} />,
    services: <ServicesTab onNavigate={navigate} />,
    contact: <ContactTab />,
  }[tab]

  return (
    <>
      <TopBar activeTab={tab} onNavigate={navigate} />

      <ProfileHeader activeTab={tab} onNavigate={navigate} />

      <main className="mx-auto max-w-[1100px] px-4 py-4">
        {isFeed ? (
          // grid-cols-1 rather than the implicit track: an auto track floors at
          // min-content and lets a wide post push past the page padding.
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[minmax(0,25rem)_minmax(0,1fr)]">
            <div className="flex flex-col gap-4 lg:sticky lg:top-[calc(var(--topbar-h)+1rem)]">
              <IntroCard onNavigate={navigate} />
              <PhotosCard onNavigate={navigate} />
              <StackCard onNavigate={navigate} />
            </div>

            {tabContent}
          </div>
        ) : (
          tabContent
        )}
      </main>

      <Footer onNavigate={navigate} />
    </>
  )
}

export default App

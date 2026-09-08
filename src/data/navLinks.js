/**
 * Profile tabs. `id` doubles as the URL hash, so every tab is a shareable,
 * bookmarkable link — #projects, #about, and so on.
 */
export const navLinks = [
  { id: 'posts', label: 'Posts' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const tabIds = navLinks.map((tab) => tab.id)

export const defaultTab = 'posts'

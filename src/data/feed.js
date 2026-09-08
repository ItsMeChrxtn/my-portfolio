import { experience } from './experience'
import { projects } from './projects'
import { summary } from './profile'

const introPost = {
  id: 'post-intro',
  kind: 'intro',
  pinned: true,
  title: 'About me',
  subline: 'Pinned post',
  time: null,
  body: summary[0],
  bullets: summary.slice(1),
  tags: ['React', 'Node.js', 'MongoDB', 'PHP', 'Python'],
  tab: 'about',
}

const rolePosts = experience.map((role, index) => ({
  id: `post-role-${index}`,
  kind: 'role',
  title: role.role,
  subline: role.context,
  time: role.period,
  body: role.description,
  bullets: role.highlights,
  tags: [],
  tab: 'experience',
}))

const projectPosts = projects.map((project) => ({
  id: `post-${project.id}`,
  kind: 'project',
  title: project.title,
  subline: `${project.category} project`,
  time: 'Shipped',
  body: project.description,
  bullets: project.features ?? [],
  tags: project.technologies,
  project,
  links: { github: project.github, demo: project.demo },
  tab: 'projects',
}))

/**
 * Feed order, arranged the way a profile actually reads: the pinned intro,
 * the current role, the three flagship builds, then everything else.
 */
export const feed = [
  introPost,
  rolePosts[0],
  ...projectPosts.slice(0, 3),
  ...rolePosts.slice(1),
  ...projectPosts.slice(3),
].filter(Boolean)

/** How many posts are shown before the visitor asks for more. */
export const initialFeedSize = 7

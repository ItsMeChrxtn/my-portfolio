import { Code2, Server, Database, Wrench, Cloud } from 'lucide-react'

export const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'PHP', 'Python (Flask)'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'SQLite'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'JWT', 'Postman', 'VS Code'],
  },
  {
    title: 'Deployment',
    icon: Cloud,
    skills: ['Vercel', 'Render', 'Railway', 'Hostinger'],
  },
]

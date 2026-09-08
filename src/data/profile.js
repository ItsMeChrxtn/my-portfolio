import { contactInfo } from './socials'

/**
 * The identity behind the profile header, the intro card, and every post
 * byline. Kept in one place so the "author" of a post is always the same
 * person, the way a real profile works.
 */
export const profile = {
  name: 'Christian Lloyd Del Rosario',
  shortName: 'Christian Lloyd',
  initials: 'CL',
  headline: 'Software Developer · IT Educator · Full-Stack Builder',
  tagline: 'I build systems people actually use, and teach the people who will build the next ones.',
  pronouns: 'he/him',
  joined: 'Building software since 2021',
  ...contactInfo,
}

/** Rows of the Intro card — the CV header, rendered as a profile sidebar. */
export const introFacts = [
  {
    id: 'work',
    icon: 'briefcase',
    text: 'Software Developer at **Freelance**',
    detail: '2024 — Present',
    tab: 'experience',
  },
  {
    id: 'teaching',
    icon: 'presentation',
    text: 'College Professor at **National University MOA**',
    detail: '2025 — Present',
    tab: 'experience',
  },
  {
    id: 'study',
    icon: 'graduation',
    text: 'Studying **Master in Information Technology** at Philippine Christian University',
    detail: '2025 — Onwards',
    tab: 'experience',
  },
  {
    id: 'alma',
    icon: 'school',
    text: 'Studied **BS Information Technology** at Cavite State University — CCAT',
    detail: '2014 — 2018',
    tab: 'experience',
  },
  {
    id: 'lives',
    icon: 'home',
    text: `Lives in **${contactInfo.location}**`,
  },
  {
    id: 'joined',
    icon: 'clock',
    text: 'Writing production code since **2021**',
  },
]

/** Contact rows, every one of them a real link. */
export const contactRows = [
  {
    id: 'email',
    icon: 'mail',
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    id: 'phone',
    icon: 'phone',
    label: 'Mobile',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s+/g, '')}`,
  },
  {
    id: 'github',
    icon: 'github',
    label: 'GitHub',
    value: 'github.com/ItsMeChrxtn',
    href: contactInfo.github,
  },
  {
    id: 'location',
    icon: 'pin',
    label: 'Location',
    value: contactInfo.location,
    href: `https://www.google.com/maps/search/${encodeURIComponent(contactInfo.location)}`,
  },
]

/** The three-line summary that opens any CV. */
export const summary = [
  'IT professional working across software development, technical support, and systems administration. Since 2021 I have moved from computer programmer to freelance full-stack developer to college IT instructor, and each role has shaped how I build: reliable systems that real users and students can depend on.',
  'My core stack is the MERN ecosystem — React, Node.js, Express, and MongoDB — with PHP and Python for the systems that call for them. I have shipped barangay information systems, disaster alert platforms, and service portals with facial-recognition verification.',
  'Alongside development I teach programming and IT fundamentals at the college level, mentoring students through capstone projects. It keeps me sharp on fundamentals and honest about writing code other people can read.',
]

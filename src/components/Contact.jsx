import { Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '../data/socials'
import { GithubIcon } from './icons/BrandIcons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const contactDetails = [
  { label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: Mail },
  { label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s+/g, '')}`, icon: Phone },
  { label: 'GitHub', value: 'github.com/ItsMeChrxtn', href: contactInfo.github, icon: GithubIcon },
  { label: 'Location', value: contactInfo.location, href: null, icon: MapPin },
]

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
        />

        <Reveal>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {contactDetails.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <div className="group flex h-full items-center gap-4 rounded-[1.5rem] border border-border bg-surface/90 p-5 shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-black/5">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted">{label}</p>
                    <p className="break-words text-sm font-semibold text-text">{value}</p>
                  </div>
                </div>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact

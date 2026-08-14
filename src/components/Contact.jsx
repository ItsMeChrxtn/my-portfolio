import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo, socials } from '../data/socials'
import { GithubIcon } from './icons/BrandIcons'
import Panel from './Panel'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const channels = [
  { label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: Mail },
  {
    label: 'Phone',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/\s+/g, '')}`,
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'github.com/ItsMeChrxtn',
    href: contactInfo.github,
    icon: GithubIcon,
  },
  { label: 'Location', value: contactInfo.location, href: null, icon: MapPin },
]

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="07"
          eyebrow="comms.open"
          title="Let's Build Something"
          subtitle="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
        />

        <div className="grid gap-4 lg:grid-cols-5">
          {/* Call sign */}
          <Reveal className="lg:col-span-2">
            <Panel shape="cut-duo" accent hud className="h-full">
              <div className="scanlines relative flex h-full flex-col justify-between overflow-hidden px-6 py-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,var(--glow-a),transparent_62%)]"
                />
                <div
                  aria-hidden="true"
                  className="stripes absolute top-6 right-6 h-16 w-1.5 opacity-50"
                />

                <div className="relative">
                  <span className="stencil text-[0.58rem] text-accent-ink">Status</span>
                  <p className="mt-2 flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="animate-pulse-ring absolute inline-flex h-full w-full bg-teal-fill" />
                      <span className="relative inline-flex h-2 w-2 bg-teal-fill" />
                    </span>
                    <span className="label text-[0.68rem] text-text">Open to work</span>
                  </p>

                  <h3 className="font-display mt-6 text-3xl leading-none text-text sm:text-4xl">
                    Ready to
                    <br />
                    <span style={{ WebkitTextStroke: '1.5px var(--accent)', color: 'transparent' }}>
                      deploy
                    </span>
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    Freelance projects, full-time roles, or a system that needs building from
                    scratch — send a message and let&apos;s scope it out.
                  </p>
                </div>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="skew sheen relative mt-8 self-start bg-accent px-7 py-3.5 transition-colors duration-200 hover:bg-accent-deep"
                >
                  <span className="label flex items-center gap-2 text-[0.72rem] text-white">
                    Send Message
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="sheen-bar" aria-hidden="true" />
                </a>
              </div>
            </Panel>
          </Reveal>

          {/* Channels */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="grid h-full gap-3 sm:grid-cols-2">
              {channels.map(({ label, value, href, icon: Icon }, index) => {
                const body = (
                  <Panel
                    shape={index % 2 === 0 ? 'cut' : 'cut-tl'}
                    hud
                    className="group h-full"
                  >
                    <div className="flex h-full items-center gap-4 px-5 py-5">
                      <span className="cut-sm flex h-11 w-11 shrink-0 items-center justify-center bg-accent/10 text-accent-ink transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </span>

                      <div className="min-w-0">
                        <p className="stencil text-[0.55rem] text-faint">{label}</p>
                        <p className="font-ui mt-1 truncate text-sm font-semibold text-text">
                          {value}
                        </p>
                      </div>

                      {href && (
                        <ArrowUpRight
                          className="ml-auto h-4 w-4 shrink-0 text-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:text-accent-ink"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </Panel>
                )

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="h-full"
                  >
                    {body}
                  </a>
                ) : (
                  <div key={label} className="h-full">
                    {body}
                  </div>
                )
              })}

              {/* Socials rail */}
              <div className="sm:col-span-2">
                <Panel>
                  <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
                    <span className="stencil text-[0.58rem] text-faint">Find me on</span>
                    <div className="flex items-center gap-2">
                      {socials.map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noreferrer' : undefined}
                          aria-label={label}
                          className="cut-sm flex h-9 w-9 items-center justify-center border border-line bg-bg text-muted transition-colors hover:border-accent hover:bg-accent hover:text-white"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                </Panel>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact

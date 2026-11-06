import Image from "next/image";
import resume from "../../public/resume.json";
import { site, stats, highlights, projects, skills } from "./content";
import { CopyEmail, Experience, Nav, Reveal, Spotlight, Writing } from "./components/site/client";
import s from "./components/site/site.module.css";

const jobs = resume.experience.filter((j) => ["Luster", "Resilia", "Knock"].includes(j.company));

function SectionHead({ index, label, title }: { index: string; label: string; title: React.ReactNode }) {
  return (
    <Reveal className={s.sectionHead}>
      <span className={s.eyebrow}>
        <span className={s.eyebrowIndex}>{index}</span> {label}
      </span>
      <h2 className={s.h2}>{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Spotlight />
      <div className={s.grain} aria-hidden />
      <Nav />

      <main id="top" className={s.main}>
        {/* Hero */}
        <section className={s.hero}>
          <div className={s.heroText}>
            <Reveal immediate>
              <a href={site.links.githubWork} target="_blank" rel="noopener noreferrer" className={s.status}>
                <span className={s.pulse} aria-hidden />
                Building AI product at {site.company}
                <span className={s.arrow}>↗</span>
              </a>
            </Reveal>
            <Reveal immediate delay={0.05}>
              <h1 className={s.h1}>
                Jordan Romero
                <span className={s.h1Sub}>
                  part builder, <em>part translator.</em>
                </span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.12}>
              <p className={s.lede}>
                Senior software engineer shipping AI features end to end: realtime voice, LLM pipelines,
                integrations and the infrastructure under them. I came to code from social services, so I
                care just as much that a feature makes sense to the people using and selling it.
              </p>
            </Reveal>
            <Reveal immediate delay={0.18} className={s.ctas}>
              <a href={site.links.resume} className={s.btn} target="_blank" rel="noopener noreferrer">
                Résumé <span aria-hidden>↓</span>
              </a>
              <a href={site.links.studio} className={s.btnGhost} target="_blank" rel="noopener noreferrer">
                Hire me ↗
              </a>
              <a href={site.links.linkedin} className={s.iconBtn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                  <path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4V9.5Z" />
                </svg>
              </a>
              <a href={site.links.github} className={s.iconBtn} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
                  <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
            </Reveal>
          </div>

          <Reveal immediate delay={0.1} className={s.portraitWrap}>
            <div className={s.portraitOrb} aria-hidden />
            <div className={s.portrait}>
              <Image
                src="/images/jordan.png"
                alt="Jordan Romero"
                width={804}
                height={978}
                priority
                className={s.portraitImg}
              />
              <div className={s.portraitTag}>
                <span className={s.mono}>{site.location}</span>
                <span className={s.mono}>she/her</span>
              </div>
            </div>
            <div className={`${s.chip} ${s.chipA}`}>
              <strong>5+ yrs</strong> at startups
            </div>
            <div className={`${s.chip} ${s.chipB}`}>
              <span className={s.dot} /> TypeScript · Python · AWS
            </div>
          </Reveal>
        </section>

        {/* Stats */}
        <Reveal className={s.stats}>
          {stats.map((st) => (
            <div key={st.label} className={s.stat}>
              <span className={s.statValue}>{st.value}</span>
              <span className={s.statLabel}>{st.label}</span>
            </div>
          ))}
        </Reveal>

        {/* Work at Luster */}
        <section id="work" className={s.section}>
          <SectionHead
            index="01"
            label="Now"
            title={
              <>
                What I build at <em>Luster</em>
              </>
            }
          />
          <Reveal>
            <p className={s.sectionLede}>
              Luster is an AI practice and coaching platform for sales teams. I work across all of it: the web
              app, the API, the AI core and the AWS infrastructure.{" "}
              <a href={site.links.githubWork} target="_blank" rel="noopener noreferrer" className={s.inlineLink}>
                See the contributions ↗
              </a>
            </p>
          </Reveal>
          <div className={s.bento}>
            {highlights.map((h, i) => (
              <Reveal
                key={h.title}
                delay={(i % 3) * 0.06}
                className={`${s.card} ${h.span === "wide" ? s.cardWide : ""} ${h.span === "tall" ? s.cardTall : ""}`}
              >
                <div className={s.cardInner} data-glow>
                  <span className={s.kicker}>{h.kicker}</span>
                  <h3 className={s.h3}>{h.title}</h3>
                  <p className={s.cardBody}>{h.body}</p>
                  {h.flow && (
                    <ol className={s.flow} aria-label={`${h.title} pipeline`}>
                      {h.flow.map((step, n) => (
                        <li key={step} style={{ animationDelay: `${n * 0.4}s` }}>
                          <span className={s.flowIdx}>{String(n + 1).padStart(2, "0")}</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  )}
                  <div className={s.tags}>
                    {h.tags.map((t) => (
                      <span key={t} className={s.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={s.section}>
          <SectionHead index="02" label="Experience" title={<>Five years, <em>three startups</em></>} />
          <Reveal>
            <Experience jobs={jobs} />
          </Reveal>
        </section>

        {/* Projects */}
        <section id="projects" className={s.section}>
          <SectionHead index="03" label="Projects" title={<>Things I build <em>for fun</em></>} />
          <div className={s.projects}>
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08} className={p.featured ? s.projectFeatured : s.projectPlain}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={s.project} data-glow>
                  {p.badge && <span className={s.badge}>{p.badge}</span>}
                  <h3 className={s.projectName}>{p.name}</h3>
                  <p className={s.projectBlurb}>{p.blurb}</p>
                  <div className={s.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={s.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className={s.projectCta}>
                    {p.cta} <span className={s.arrow}>↗</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills marquee */}
        <section className={s.marquee} aria-label="Skills">
          <div className={s.marqueeTrack}>
            {[...skills, ...skills].map((sk, i) => (
              <span key={i} className={s.marqueeItem} aria-hidden={i >= skills.length}>
                {sk}
                <span className={s.marqueeSep}>✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section id="writing" className={s.section}>
          <SectionHead index="04" label="Writing" title={<>Notes from <em>the work</em></>} />
          <Reveal>
            <Writing mediumUrl={site.links.medium} />
            <a href={site.links.medium} target="_blank" rel="noopener noreferrer" className={s.textLink}>
              Subscribe to The Empathic Engineer ↗
            </a>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className={s.contact}>
          <Reveal>
            <span className={s.eyebrow}>
              <span className={s.eyebrowIndex}>05</span> Contact
            </span>
            <h2 className={s.contactTitle}>
              Let&apos;s build something <em>good.</em>
            </h2>
            <a href={`mailto:${site.email}`} className={s.contactEmail}>
              {site.email}
            </a>
            <p className={s.contactNote}>
              Have a project in mind? My studio,{" "}
              <a href={site.links.studio} target="_blank" rel="noopener noreferrer" className={s.inlineLink}>
                Common Tongue
              </a>
              , takes on a few builds at a time.
            </p>
            <div className={s.ctas}>
              <CopyEmail email={site.email} />
              <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
                LinkedIn ↗
              </a>
              <a href={site.links.github} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
                GitHub ↗
              </a>
              <a href={site.links.medium} target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
                Substack ↗
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className={s.footer}>
        <span>© {new Date().getFullYear()} Jordan Romero</span>
        <span className={s.mono}>Built with Next.js · Austin, TX</span>
      </footer>
    </>
  );
}

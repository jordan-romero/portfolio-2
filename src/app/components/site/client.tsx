"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import s from "./site.module.css";

export function Reveal({
  children,
  delay = 0,
  className,
  immediate = false,
}: {
  children: React.ReactNode;
  delay?: number;
  immediate?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (immediate) {
    // Above the fold: CSS-only entrance so content paints before hydration.
    return (
      <div className={`${s.rise} ${className ?? ""}`} style={{ animationDelay: `${delay}s` }}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Follows the pointer with a soft glow and tracks it on cards for hover light. */
export function Spotlight() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--mx", `${e.clientX}px`);
        root.style.setProperty("--my", `${e.clientY}px`);
        const card = (e.target as HTMLElement)?.closest?.("[data-glow]") as HTMLElement | null;
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--cx", `${e.clientX - r.left}px`);
          card.style.setProperty("--cy", `${e.clientY - r.top}px`);
        }
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return <div className={s.spotlight} aria-hidden />;
}

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setTheme((document.documentElement.dataset.theme as "dark" | "light") || "dark");
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <header className={`${s.nav} ${scrolled ? s.navScrolled : ""}`}>
      <a href="#top" className={s.logo} aria-label="Back to top">
        JR<span>.</span>
      </a>
      <nav className={s.navLinks} aria-label="Sections">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <button
        type="button"
        className={s.themeBtn}
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <circle cx="12" cy="12" r="4.5" fill="currentColor" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
              <line
                key={a}
                x1="12" y1="2.5" x2="12" y2="5"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                transform={`rotate(${a} 12 12)`}
              />
            ))}
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden>
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="currentColor" />
          </svg>
        )}
      </button>
    </header>
  );
}

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    try {
      await navigator.clipboard.writeText(email);
      return done();
    } catch {
      // Clipboard API blocked or unavailable: fall back to a hidden textarea.
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (ok) return done();
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button type="button" className={s.btnGhost} onClick={copy}>
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}

type Job = {
  company: string;
  role: string;
  duration: string;
  highLevelDescription: string;
  responsibilities: string[];
  link?: { label: string; url: string };
  projects: { name: string; description: string; loomUrl?: string; image?: string }[];
};

export function Experience({ jobs }: { jobs: Job[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ol className={s.timeline}>
      {jobs.map((job, i) => {
        const isOpen = open === i;
        return (
          <li key={job.company} className={`${s.job} ${isOpen ? s.jobOpen : ""}`} data-glow>
            <button
              type="button"
              className={s.jobHead}
              aria-expanded={isOpen}
              aria-controls={`job-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className={s.jobDates}>{job.duration}</span>
              <span className={s.jobMain}>
                <span className={s.jobCompany}>{job.company}</span>
                <span className={s.jobRole}>{job.role}</span>
              </span>
              <span className={s.jobToggle} aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <p className={s.jobSummary}>{job.highLevelDescription}</p>
            <div id={`job-${i}`} className={s.jobBody} hidden={!isOpen}>
              <ul className={s.jobList}>
                {job.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              {job.projects.length > 0 && (
                <div className={s.jobProjects}>
                  {job.projects.map((p) => {
                    const inner = (
                      <>
                        {p.image && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={p.image} alt="" loading="lazy" />
                        )}
                        <span className={s.jobProjectName}>
                          {p.name}
                          {p.loomUrl && <span className={s.arrow}> ↗</span>}
                        </span>
                        <span className={s.jobProjectDesc}>{p.description}</span>
                      </>
                    );
                    return p.loomUrl ? (
                      <a key={p.name} href={p.loomUrl} target="_blank" rel="noopener noreferrer" className={s.jobProject}>
                        {inner}
                      </a>
                    ) : (
                      <div key={p.name} className={s.jobProject}>
                        {inner}
                      </div>
                    );
                  })}
                </div>
              )}
              {job.link && (
                <a href={job.link.url} target="_blank" rel="noopener noreferrer" className={s.textLink}>
                  {job.link.label} ↗
                </a>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

type Post = { title: string; link: string; pubDate: string; contentSnippet?: string; imageUrl?: string | null };

export function Writing({ mediumUrl }: { mediumUrl: string }) {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch("/api/medium-blogs")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: Post[]) => {
        if (!Array.isArray(d)) return setPosts([]);
        // One post per series (Medium returns each "part" separately), newest first.
        const seen = new Set<string>();
        const unique = d.filter((p) => {
          const key = p.title.toLowerCase().replace(/[^a-z ]/g, "").trim();
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
        setPosts(
          unique.slice(0, 3).map((p) => ({
            ...p,
            contentSnippet: p.contentSnippet?.replace(/Continue reading on [\s\S]*$/, "").trim(),
          }))
        );
      })
      .catch(() => setFailed(true));
  }, []);

  if (failed || (posts && posts.length === 0)) {
    return (
      <a href={mediumUrl} target="_blank" rel="noopener noreferrer" className={s.textLink}>
        Read my writing on Medium ↗
      </a>
    );
  }

  return (
    <div className={s.posts}>
      {(posts ?? Array.from({ length: 3 })).map((p, i) =>
        p ? (
          <a key={(p as Post).link} href={(p as Post).link} target="_blank" rel="noopener noreferrer" className={s.post} data-glow>
            <span className={s.postDate}>
              {new Date((p as Post).pubDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </span>
            <span className={s.postTitle}>{(p as Post).title}</span>
            <span className={s.postSnippet}>{(p as Post).contentSnippet ? `${(p as Post).contentSnippet!.slice(0, 140)}${(p as Post).contentSnippet!.length > 140 ? "…" : ""}` : null}</span>
            <span className={s.postRead}>Read ↗</span>
          </a>
        ) : (
          <div key={i} className={`${s.post} ${s.postSkeleton}`} aria-hidden />
        )
      )}
    </div>
  );
}

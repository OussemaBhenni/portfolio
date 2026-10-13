import {
  about,
  certifications,
  education,
  experiences,
  interests,
  profile,
  projects,
  skills,
  spokenLanguages,
  ui,
  type Lang,
} from "@/content/data";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";
import { Icon, Section, Tags } from "@/components/ui";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  const t = <T extends Record<Lang, unknown>>(o: T) => o[lang] as T[Lang];
  const s = ui.sections;

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg">
        {lang === "fr" ? "Aller au contenu" : "Skip to content"}
      </a>
      <Nav lang={lang} />
      <Reveal />

      <main id="main">
        {/* ───────────── HERO ───────────── */}
        <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
          <div className="glow pointer-events-none absolute inset-0" aria-hidden />

          <div className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:pb-24">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-xs text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {t(ui.status)}
              </p>

              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">{profile.name}</h1>
              <p className="mt-3 font-mono text-sm text-accent-2 sm:text-base">{t(ui.role)}</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{t(ui.tagline)}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-lg bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90">
                  {t(ui.ctaWork)}
                </a>
                <a href="#contact" className="rounded-lg border border-line px-5 py-2.5 font-medium transition-colors hover:border-accent/60">
                  {t(ui.ctaContact)}
                </a>
                <a href={profile.cv} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-muted transition-colors hover:text-ink">
                  {Icon.download} {t(ui.ctaCv)}
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4 text-muted">
                <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-ink">{Icon.github}</a>
                <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-ink">{Icon.linkedin}</a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-ink">{Icon.mail}</a>
                <span className="ml-2 inline-flex items-center gap-1.5 text-sm">{Icon.pin} {t(profile.location)}</span>
              </div>
            </div>

            {/* terminal card */}
            <div className="min-w-0 rounded-xl border border-line bg-surface/90 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-muted">oussema@soc:~</span>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[12px] sm:p-5 sm:text-[13px] leading-6 text-ink/90">
                <span className="text-accent">$</span> whoami{"\n"}
                <span className="text-muted">{lang === "fr" ? "ingénieur cybersécurité · devsecops" : "cybersecurity engineer · devsecops"}</span>{"\n\n"}
                <span className="text-accent">$</span> terraform apply -auto-approve{"\n"}
                <span className="text-muted">Apply complete! Resources: </span><span className="text-accent-2">8 containers, 2 zones, 1 firewall</span>{"\n\n"}
                <span className="text-accent">$</span> nmap -p- dmz.lab{"\n"}
                <span className="text-muted">380 tests · </span><span className="text-accent">0 open ports</span>{"\n\n"}
                <span className="text-accent">$</span> wazuh-alerts --mitre{"\n"}
                <span className="text-warn">T1046</span> <span className="text-muted">network scan  </span><span className="text-accent">detected</span>{"\n"}
                <span className="text-warn">T1110</span> <span className="text-muted">brute force   </span><span className="text-accent">detected</span>{"\n\n"}
                <span className="text-accent">$</span> <span className="cursor" />
              </pre>
            </div>
          </div>

          {/* stats */}
          <div className="relative border-y border-line">
            <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-line md:grid-cols-4">
              {ui.stats.map((st, i) => (
                <div key={i} className="bg-bg px-4 py-6 sm:px-6">
                  <dt className="font-display text-3xl font-semibold text-ink">{st.value}</dt>
                  <dd className="mt-1 text-sm text-muted">{t(st.label)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ───────────── ABOUT ───────────── */}
        <Section id="about" kicker={t(s.about.kicker)} title={t(s.about.title)}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
              {t(about.paragraphs).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {about.focus.map((f, i) => (
                <li key={i} className="reveal rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/40">
                  <p className="font-mono text-xs text-accent">0{i + 1}</p>
                  <h3 className="mt-2 font-display font-semibold">{t(f.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{t(f.body)}</p>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* ───────────── EXPERIENCE ───────────── */}
        <Section id="experience" kicker={t(s.experience.kicker)} title={t(s.experience.title)} sub={t(s.experience.sub)}>
          <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10">
            {experiences.map((e, i) => (
              <li key={i} className="reveal relative">
                <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-accent bg-bg sm:-left-[47px]" aria-hidden />
                <article className="rounded-xl border border-line bg-surface p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-accent">{t(e.type)}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">{t(e.role)}</h3>
                      <p className="mt-1 text-accent-2">{e.company}</p>
                    </div>
                    <div className="text-right font-mono text-xs text-muted">
                      <p>{t(e.period)}</p>
                      <p className="mt-1">{t(e.place)}</p>
                    </div>
                  </div>
                  <p className="mt-5 leading-relaxed text-muted">{t(e.context)}</p>
                  <ul className="mt-5 space-y-2.5">
                    {t(e.bullets).map((b, j) => (
                      <li key={j} className="flex gap-3 leading-relaxed">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {e.outcome && (
                    <p className="mt-6 rounded-lg border border-accent/25 bg-accent/5 p-4 text-sm leading-relaxed">
                      <span className="mr-2 font-mono text-xs uppercase text-accent">{t(ui.outcome)}</span>
                      {t(e.outcome)}
                    </p>
                  )}
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <Tags items={e.tags} />
                    {e.link && (
                      <a href={e.link} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                        {t(ui.sourceCode)} {Icon.arrow}
                      </a>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        {/* ───────────── PROJECTS ───────────── */}
        <Section id="projects" kicker={t(s.projects.kicker)} title={t(s.projects.title)} sub={t(s.projects.sub)}>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <article key={i} className="reveal flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 sm:p-7">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent">{t(p.category)}</span>
                  <span className="text-muted">{p.year}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{t(p.title)}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t(p.summary)}</p>
                {p.metrics && (
                  <dl className="mt-5 grid grid-cols-2 gap-3">
                    {p.metrics.map((m, j) => (
                      <div key={j} className="rounded-lg border border-line bg-surface-2 p-3">
                        <dt className="font-display text-2xl font-semibold text-accent">{m.value}</dt>
                        <dd className="mt-0.5 text-xs text-muted">{t(m.label)}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <ul className="mt-5 space-y-2 text-sm">
                  {t(p.bullets).map((b, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed">
                      <span className="font-mono text-accent" aria-hidden>›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <Tags items={p.tags} />
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ───────────── SKILLS ───────────── */}
        <Section id="skills" kicker={t(s.skills.kicker)} title={t(s.skills.title)}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g, i) => (
              <div key={i} className="reveal rounded-xl border border-line bg-surface p-6">
                <h3 className="font-display font-semibold">{t(g.title)}</h3>
                <div className="mt-4">
                  <Tags items={g.items} />
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ───────────── EDUCATION ───────────── */}
        <Section id="education" kicker={t(s.education.kicker)} title={t(s.education.title)}>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {education.map((ed, i) => (
                <div key={i} className="reveal flex gap-5 rounded-xl border border-line bg-surface p-6">
                  <span className="shrink-0 font-mono text-sm text-accent">{ed.period}</span>
                  <div>
                    <h3 className="font-display font-semibold">{t(ed.title)}</h3>
                    <p className="mt-1 text-sm text-muted">{t(ed.school)}</p>
                  </div>
                </div>
              ))}

              <div className="reveal grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-line bg-surface p-6">
                  <h3 className="font-display font-semibold">{t(ui.languagesTitle)}</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {spokenLanguages.map((l, i) => (
                      <li key={i} className="flex justify-between gap-4">
                        <span>{t(l.name)}</span>
                        <span className="font-mono text-muted">{t(l.level)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-line bg-surface p-6">
                  <h3 className="font-display font-semibold">{t(ui.interestsTitle)}</h3>
                  <ul className="mt-4 space-y-2 text-sm">
                    {interests.map((it, i) => (
                      <li key={i}>
                        <span>{t(it.title)}</span>
                        <span className="block text-xs text-muted">{t(it.body)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="reveal rounded-xl border border-line bg-surface p-6">
              <h3 className="font-display font-semibold">{t(ui.certifications)}</h3>
              <ul className="mt-4 divide-y divide-line">
                {certifications.map((c, i) => (
                  <li key={i} className="flex items-center justify-between gap-4 py-3">
                    <span className="text-sm">{c.name}</span>
                    <span className="shrink-0 font-mono text-xs text-muted">{t(c.issuer)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* ───────────── CONTACT ───────────── */}
        <Section id="contact" kicker={t(s.contact.kicker)} title={t(s.contact.title)} sub={t(s.contact.sub)}>
          <div className="reveal grid gap-4 sm:grid-cols-3">
            <a href={`mailto:${profile.email}`} className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
              <span className="text-accent">{Icon.mail}</span>
              <p className="mt-4 font-mono text-xs uppercase text-muted">Email</p>
              <p className="mt-1 break-all group-hover:text-accent">{profile.email}</p>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener" className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
              <span className="text-accent">{Icon.linkedin}</span>
              <p className="mt-4 font-mono text-xs uppercase text-muted">LinkedIn</p>
              <p className="mt-1 group-hover:text-accent">in/oussemabenhenni</p>
            </a>
            <a href={profile.github} target="_blank" rel="noopener" className="group rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50">
              <span className="text-accent">{Icon.github}</span>
              <p className="mt-4 font-mono text-xs uppercase text-muted">GitHub</p>
              <p className="mt-1 group-hover:text-accent">OussemaBhenni</p>
            </a>
          </div>
          <div className="reveal mt-8">
            <a href={profile.cv} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-medium text-bg hover:opacity-90">
              {Icon.download} {t(ui.ctaCv)}
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:px-6">
          <p>© {new Date().getFullYear()} {profile.name}. {t(ui.rights)}</p>
          <p className="font-mono text-xs">{t(ui.builtWith)}</p>
        </div>
      </footer>
    </>
  );
}

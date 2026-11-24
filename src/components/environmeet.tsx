"use client";

import { FormEvent, useState } from "react";
import { Logo } from "./logo";

const pillars = [
  {
    number: "01",
    title: "Dialogue / Circle",
    text: "Unhurried cross-border conversations and practical English sessions in a relaxed, supportive setting.",
    tag: "Meet & exchange",
  },
  {
    number: "02",
    title: "Mindset & Insight",
    text: "Reflective, learner-friendly perspectives that help turn sustainability ideas into everyday mindset shifts.",
    tag: "Learn & reflect",
  },
  {
    number: "03",
    title: "Youth Voices",
    text: "Cross-border stories, weekly locals, and bilingual perspectives that make room for many ways of seeing.",
    tag: "Listen & share",
  },
  {
    number: "04",
    title: "Action",
    text: "Small-step collaborative projects and thoughtful partnerships that grow from what we learn together.",
    tag: "Try & build",
  },
];

const events = [
  { date: "18", month: "DEC", title: "Cross-border Circle: Small Habits, Shared Futures", type: "Dialogue", level: "Comfortable English", time: "19:00–20:30 WIB", region: "Indonesia · Philippines" },
  { date: "08", month: "JAN", title: "Mindset Salon: What Does a Just Transition Feel Like?", type: "Insight", level: "Everyday English", time: "20:00–21:30 WIB", region: "Vietnam · ASEAN" },
  { date: "22", month: "JAN", title: "Youth Voices: Stories from the Islands", type: "Story Circle", level: "Bilingual welcome", time: "19:30–21:00 WIB", region: "ASEAN · Global" },
];

const articles = [
  { region: "Indonesia", type: "Essay", title: "The quiet power of listening across borders", excerpt: "What happened when a conversation mattered more than having the right answer.", read: "5 min", color: "sage" },
  { region: "Philippines", type: "Youth Voice", title: "A coastal community, a small idea, a shared table", excerpt: "One young person's notes on climate care that begins with welcome.", read: "4 min", color: "sand" },
  { region: "Vietnam", type: "Mindset Note", title: "Practising English without performing confidence", excerpt: "Low-pressure language as a bridge for honest exchange and new questions.", read: "6 min", color: "blue" },
  { region: "Global", type: "Editorial", title: "The empty vessel: making room for other voices", excerpt: "Why listening, not speaking first, may be our most useful habit.", read: "7 min", color: "sage" },
];

const team = [
  ["Founder", "The origin & direction"],
  ["Content & Visual", "Stories, language & identity"],
  ["Community & Dialogue", "Circles and belonging"],
  ["ASEAN Network & Outreach", "Regional connections"],
  ["Program & Curation", "Themes and learning"],
  ["Informal Advisors", "Experience and perspective"],
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-lede">{text}</p>}
    </div>
  );
}

export default function EnvironMeet() {
  const [activeRegion, setActiveRegion] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[number] | null>(null);
  const [rsvpDone, setRsvpDone] = useState(false);
  const [memberDone, setMemberDone] = useState(false);
  const [partnerDone, setPartnerDone] = useState(false);

  const visibleArticles = activeRegion === "All" ? articles : articles.filter((article) => article.region === activeRegion);

  function submitConfirmation(setDone: (value: boolean) => void) {
    return (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setDone(true);
      event.currentTarget.reset();
    };
  }

  return (
    <main id="top">
      <header className="nav-shell">
        <nav className="nav" aria-label="Primary navigation">
          <Logo />
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#pillars">Community</a>
            <a href="#events">Events</a>
            <a href="#voices">Voices</a>
          </div>
          <a className="button button-small" href="#join">Join the space</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 620 520" fill="none">
            <path d="M74 402c94-13 152-67 188-129 38-65 91-116 191-120" className="leaf-line" />
            <path d="M259 267c-23-54-59-95-107-126M267 256c46-59 103-90 171-97M452 154c33 42 51 89 54 141" className="leaf-line" />
            <circle cx="450" cy="147" r="13" className="face" />
            <path d="M450 160c-5 38 7 73 36 99M450 180c-25 19-43 48-53 87M472 188c18 17 30 38 36 62" className="leaf-line" />
            <path d="M62 421c128 33 250 31 367-7 57-19 106-49 145-88" className="soft-line" />
          </svg>
        </div>
        <div className="hero-content">
          <p className="eyebrow">ASEAN-rooted · Globally open</p>
          <h1>Meet ideas.<br />Grow mindsets.<br /><em>Move gently forward.</em></h1>
          <p className="hero-copy">
            Born from ASEAN youth connections, EnvironMeet is an inclusive space where young people meet to exchange ideas, grow mindsets, practice English, and connect across borders for a sustainable future.
          </p>
          <div className="hero-actions">
            <a className="button" href="#join">Join the Space <span>→</span></a>
            <a className="text-link" href="#about">Our origin story <span>↓</span></a>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-grid">
          <div>
            <SectionHeading eyebrow="Our beginning" title="A conversation can change the direction." />
            <p className="body-copy">
              EnvironMeet began after cross-border youth encounters at <strong>SEASEL 2026</strong>. In open, low-pressure moments, environmental topics became something more: a way to grow mindsets, practise English, share local realities, and feel less distant from each other.
            </p>
            <p className="body-copy">Like an empty vessel, the space is shaped by young people&apos;s voices—curious, practical, and willing to listen.</p>
          </div>
          <aside className="map-card" aria-label="EnvironMeet regional footprint">
            <p className="eyebrow">Where we begin</p>
            <div className="map-dots">
              <div><span>Indonesia</span><b>●</b></div>
              <div><span>Philippines</span><b>●</b></div>
              <div><span>Vietnam</span><b>●</b></div>
              <div><span>Beyond</span><b>○</b></div>
            </div>
            <svg viewBox="0 0 340 180" aria-hidden="true" className="map-lines">
              <path d="M35 122c55-37 84-71 132-80 46-9 89 8 138 62" />
              <path d="M167 42c-18 45-29 76-32 117" />
              <circle cx="167" cy="42" r="6" /><circle cx="135" cy="159" r="5" /><circle cx="305" cy="104" r="5" /><circle cx="35" cy="122" r="5" />
            </svg>
          </aside>
        </div>
        <div className="vision-grid">
          <div className="vision-card">
            <p className="eyebrow">Vision</p>
            <p>A region where young people feel confident to exchange ideas across cultures—and act with care for people and planet.</p>
          </div>
          <div className="mission-card">
            <p className="eyebrow">Three missions</p>
            <ol>
              <li><span>01</span><b>Connect</b><small>open conversations across borders</small></li>
              <li><span>02</span><b>Grow</b><small>mindsets through reflective learning</small></li>
              <li><span>03</span><b>Practice</b><small>English in warm, low-pressure circles</small></li>
            </ol>
          </div>
        </div>
      </section>

      <section id="pillars" className="section pillars-section">
        <SectionHeading eyebrow="The community" title="Four ways we meet." text="Each pillar belongs to the whole. Start wherever feels useful." />
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.number}>
              <span className="pillar-number">{pillar.number}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <span className="pillar-tag">{pillar.tag} <b>↗</b></span>
            </article>
          ))}
        </div>
      </section>

      <section id="events" className="section events-section">
        <div className="events-heading">
          <SectionHeading eyebrow="Public circle" title="Upcoming gatherings." text="Come as you are. English comfort levels are a guide, not a gate." />
          <a className="text-link" href="#event-list">View all events <span>→</span></a>
        </div>
        <div id="event-list" className="event-list">
          {events.map((item) => (
            <article className="event-row" key={item.title}>
              <div className="event-date"><strong>{item.date}</strong><span>{item.month}</span></div>
              <div className="event-main">
                <div className="event-tags"><span>{item.type}</span><span>{item.level}</span></div>
                <h3>{item.title}</h3>
                <p>{item.time} · {item.region}</p>
              </div>
              <button className="button button-outline" onClick={() => { setSelectedEvent(item); setRsvpDone(false); }}>RSVP</button>
            </article>
          ))}
        </div>
      </section>

      <section id="voices" className="section voices-section">
        <div className="voices-heading">
          <SectionHeading eyebrow="Youth voices & insight" title="Notes from the journey." />
          <div className="filters" aria-label="Filter articles by region">
            {["All", "Indonesia", "Philippines", "Vietnam", "Global"].map((region) => (
              <button key={region} className={activeRegion === region ? "active" : ""} onClick={() => setActiveRegion(region)}>{region}</button>
            ))}
          </div>
        </div>
        <div className="article-grid">
          {visibleArticles.map((article) => (
            <article className="article-card" key={article.title}>
              <div className={`article-art ${article.color}`}>
                <svg viewBox="0 0 260 150" fill="none" aria-hidden="true">
                  <path d="M20 126c49-34 86-63 121-100M141 26c14 35 39 67 74 96M70 88c23-6 44-18 62-35" />
                  <circle cx="141" cy="26" r="7" />
                </svg>
              </div>
              <div className="article-meta"><span>{article.region}</span><span>{article.type}</span></div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="article-footer"><span>{article.read} read</span><button aria-label={`Read ${article.title}`}>Read note →</button></div>
            </article>
          ))}
        </div>
      </section>

      <section id="team" className="section team-section">
        <SectionHeading eyebrow="Team & governance" title="Lean, open, and learning." text="A small founding team with clear responsibilities and room for informal guidance." />
        <div className="team-grid">
          {team.map(([role, detail], index) => (
            <article key={role} className="team-card">
              <div className="portrait">{role.split(" ")[0].slice(0, 1)}</div>
              <p>{index === 0 ? "Founder" : index === team.length - 1 ? "Informal advisors" : "Core founding team"}</p>
              <h3>{role}</h3>
              <span>{detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="join" className="section join-section">
        <div className="join-heading">
          <SectionHeading eyebrow="Get involved" title="There is room for your voice." text="You do not need a formal title or perfect English. You only need curiosity." />
        </div>
        <div className="form-grid">
          <form className="join-form" onSubmit={submitConfirmation(setMemberDone)}>
            <p className="form-kicker">Community member</p>
            <h3>Join a circle</h3>
            {memberDone ? <div className="success">You&apos;re on the list. We&apos;ll be in touch soon 🌱</div> : <>
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
              <label>Country / region<input name="region" required placeholder="Where are you joining from?" /></label>
              <label>What brings you here?<textarea name="interest" required rows={3} placeholder="A sentence is enough..." /></label>
              <button className="button" type="submit">Register interest</button>
            </>}
          </form>
          <form className="join-form partner-form" onSubmit={submitConfirmation(setPartnerDone)}>
            <p className="form-kicker">Partnership & mentor</p>
            <h3>Build with us</h3>
            {partnerDone ? <div className="success">Thank you. Your inquiry is with the team, and we&apos;ll reply soon.</div> : <>
              <label>Name<input name="name" required placeholder="Your name" /></label>
              <label>Organization<input name="organization" required placeholder="Organization or independent" /></label>
              <label>Email<input name="email" type="email" required placeholder="you@organization.com" /></label>
              <label>How would you like to collaborate?<textarea name="partnership" required rows={3} placeholder="Ideas, capacity, mentorship..." /></label>
              <button className="button button-outline" type="submit">Send inquiry</button>
            </>}
          </form>
        </div>
      </section>

      <section className="future-section">
        <div>
          <p className="eyebrow">A gentle preview · Coming soon</p>
          <h2>Next, we&apos;re growing capacity—not a store.</h2>
        </div>
        <ul>
          <li><span>01</span>Capacity-building workshops</li>
          <li><span>02</span>Made-to-order low-waste merch</li>
          <li><span>03</span>Open-order fabric posters</li>
        </ul>
      </section>

      <footer>
        <Logo />
        <p>ASEAN-rooted. Globally open.</p>
        <div><a href="mailto:hello@environmeet.space">hello@environmeet.space</a><span>© 2026 EnvironMeet</span></div>
      </footer>

      {selectedEvent && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedEvent(null); }}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="rsvp-title">
            <button className="modal-close" aria-label="Close RSVP" onClick={() => setSelectedEvent(null)}>×</button>
            {rsvpDone ? (
              <div className="modal-success">
                <span>✓</span><h2 id="rsvp-title">You&apos;re in.</h2>
                <p>We&apos;ve saved your place for <strong>{selectedEvent.title}</strong>. Details will arrive by email.</p>
                <button className="button" onClick={() => setSelectedEvent(null)}>Done</button>
              </div>
            ) : (
              <>
                <p className="eyebrow">RSVP · {selectedEvent.month} {selectedEvent.date}</p>
                <h2 id="rsvp-title">{selectedEvent.title}</h2>
                <p className="modal-detail">{selectedEvent.time} · {selectedEvent.region}</p>
                <form onSubmit={submitConfirmation(setRsvpDone)}>
                  <label>Name<input name="name" required placeholder="Your name" /></label>
                  <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
                  <label>Comfort note<select name="comfort"><option>Comfortable in everyday English</option><option>Prefer bilingual support</option><option>Just happy to listen</option></select></label>
                  <button className="button" type="submit">Confirm RSVP</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

const projects = [
  { n: "01", name: "VeritaPost", category: "Digital publishing", desc: "A news publishing experience designed to organise stories, editorial content and the day-to-day work behind a digital publication.", tags: ["Publishing", "Content management", "Web"], art: "verita", url: "", label: "Case study in preparation" },
  { n: "02", name: "Asa Moremi", category: "E-commerce", desc: "An online retail experience focused on clear product presentation and a straightforward path from discovery to purchase.", tags: ["Online store", "Product catalogue", "Commerce"], art: "asa", url: "", label: "Case study in preparation" },
  { n: "03", name: "NANS HQ", category: "Institutional platform", desc: "A digital platform for the National Association of Nigerian Students, bringing organisational information, leadership updates and student resources together.", tags: ["Institutional website", "Information", "Web"], art: "nans", url: "https://nanshq.org/", label: "Visit website" },
  { n: "04", name: "GistOrbit", category: "Media & publishing", desc: "A publishing platform for news and entertainment content, with a tailored administration experience and attention to discoverability.", tags: ["Media", "Publishing", "SEO"], art: "gist", url: "https://gistorbit.com.ng/", label: "Visit website" }
];
const capabilities = [
  ["01", "Web development", "Responsive websites and web applications designed around the people who use them."],
  ["02", "Business platforms", "Dashboards, admin tools and operational systems that help teams manage their work."],
  ["03", "Digital commerce", "Online stores, product catalogues, order flows and payment integrations."],
  ["04", "AI & automation", "Practical workflows that connect tools, reduce repetitive work and support better decisions."]
];
const Arrow = () => <span className="arrow" aria-hidden="true">↗</span>;

function Project({ p }: { p: (typeof projects)[number] }) {
  return <article className="project-card">
    <div className={`project-art art-${p.art}`} aria-hidden="true">
      {p.art === "verita" && <div className="paper"><div className="paper-top">THE DAILY <span>VOL. 01</span></div><div className="paper-title">Stories<br/>that matter.</div><div className="paper-lines"><i/><i/><i/></div><b/></div>}
      {p.art === "asa" && <div className="fashion"><div className="fashion-orbit"/><div className="fashion-title">ASA<br/><strong>MOREMI</strong></div><div className="fashion-shape"><i/></div><small>STYLE / IDENTITY / DETAIL</small></div>}
      {p.art === "nans" && <div className="nans"><small>NATIONAL STUDENT LEADERSHIP</small><div>NANS<span>HQ</span></div><i/><footer>INFORMATION <span>REPRESENTATION</span></footer></div>}
      {p.art === "gist" && <div className="gist"><div>GIST<span>ORBIT</span></div><section><i/><aside><b/><b/><b/></aside></section><footer><i/><i/><i/></footer></div>}
    </div>
    <div className="project-info">
      <div className="project-meta"><span>{p.n} / 04</span><span>{p.category}</span></div>
      <h3>{p.name}</h3><p>{p.desc}</p>
      <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
      {p.url ? <a className="project-link" href={p.url} target="_blank" rel="noreferrer">{p.label} <Arrow/></a> : <span className="project-note">{p.label}</span>}
    </div>
  </article>;
}

export default function Home() {
  return <main className="shell">
    <header className="header">
      <a className="brand" href="#top"><span>OD</span> Oluwagbogo Dada</a>
      <nav><a href="#work">Selected work</a><a href="#about">About</a><a href="#focus">What I do</a><a className="nav-cta" href="#contact">Let&apos;s talk <Arrow/></a></nav>
    </header>
    <section className="hero" id="top">
      <div>
        <div className="eyebrow"><i/> SOFTWARE DEVELOPER · PRODUCT BUILDER</div>
        <h1>Building digital things that <em>move work forward.</em></h1>
        <p className="intro">I&apos;m <strong>Oluwagbogo Timothy Dada</strong> — a software developer interested in useful products, thoughtful digital experiences and technology that solves practical problems.</p>
        <div className="actions"><a className="button" href="#work">Explore selected work <Arrow/></a><a className="plain-link" href="https://www.linkedin.com/in/oluwagbogodada/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow/></a></div>
        <div className="hero-foot"><span>FOUNDER, IRE MEDIATECH HUB</span><span>BASED IN NIGERIA · OPEN TO GLOBAL COLLABORATION</span></div>
      </div>
      <div className="hero-art"><div className="grid-bg"/><div className="orbit o1"/><div className="orbit o2"/><div className="core">OD</div><small className="art-top">IDEAS INTO SYSTEMS</small><small className="art-bottom">DESIGN · BUILD · IMPROVE</small><small className="art-index">PORTFOLIO / 2026</small></div>
    </section>
    <div className="ticker"><span>SOFTWARE DEVELOPMENT</span><b>✳</b><span>DIGITAL PRODUCTS</span><b>✳</b><span>BUSINESS SYSTEMS</span><b>✳</b><span>AI & AUTOMATION</span></div>
    <section className="section" id="work">
      <div className="section-head"><div><div className="eyebrow">A SELECTION OF MY WORK</div><h2>Built for <em>real-world use.</em></h2></div><p>A few projects across publishing, commerce and institutional digital experiences.</p></div>
      <div className="projects">{projects.map(p => <Project key={p.name} p={p}/>)}</div>
    </section>
    <section className="about section" id="about">
      <div className="eyebrow">01 — A LITTLE ABOUT ME</div>
      <div><h2>I like working where <em>technology meets everyday problems.</em></h2><div className="about-cols"><p>My work spans websites, publishing platforms, e-commerce and business applications. I enjoy understanding the process behind a problem before deciding what to build.</p><p>Through <a href="https://iremediatech-hub.com.ng/" target="_blank" rel="noreferrer">Ire Mediatech Hub</a>, I work on digital solutions for organisations and businesses. I&apos;m also exploring how AI and automation can make useful systems even more capable.</p></div></div>
    </section>
    <section className="section" id="focus">
      <div className="section-head"><div><div className="eyebrow">AREAS OF FOCUS</div><h2>What I <em>work on.</em></h2></div><p>From the first idea to a working product, I focus on making technology useful and clear.</p></div>
      <div className="capabilities">{capabilities.map(([n, title, desc]) => <article key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p><b>↗</b></article>)}</div>
    </section>
    <section className="contact section" id="contact">
      <div className="eyebrow">HAVE A PROJECT OR AN IDEA?</div><h2>Let&apos;s make something <em>useful.</em></h2>
      <p>I&apos;m open to thoughtful collaborations, software opportunities and conversations about building better digital products.</p>
      <div className="actions"><a className="button light" href="https://www.linkedin.com/in/oluwagbogodada/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow/></a><a className="contact-link" href="https://iremediatech-hub.com.ng/" target="_blank" rel="noreferrer">Visit Ire Mediatech Hub <Arrow/></a></div>
    </section>
    <footer className="footer"><a className="brand" href="#top"><span>OD</span> Oluwagbogo Dada</a><small>DESIGNED TO BE USEFUL. BUILT TO KEEP IMPROVING.</small><a href="#top">BACK TO TOP ↑</a><div>© {new Date().getFullYear()} Oluwagbogo Timothy Dada</div></footer>
  </main>;
}
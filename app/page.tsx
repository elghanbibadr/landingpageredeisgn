import Reveal from "./Reveal";

// Change this to your real signup / audit URL.
const AUDIT_URL = "https://www.get-ryze.ai/";

const products = [
  { name: "Eclat", tag: "Scents of being", icon: "jar", bg: "#FFB8C8", fg: "#FF7A9A" },
  { name: "Verdi", tag: "Sun-baked patios", icon: "bottle", bg: "#9BE8BE", fg: "#2FBF7F" },
  { name: "Cosy", tag: "Firelit evenings", icon: "bag", bg: "#FFD04D", fg: "#F0A800" },
  { name: "Opale", tag: "Opulent galas", icon: "tote", bg: "#BFD4FF", fg: "#4A78F0" },
];

const jobs = [
  { bg: "var(--sun)", ic: "$", title: "Ads that pay for themselves", text: "Runs Google, Meta and TikTok ads day and night. Stops wasted spend and finds the shoppers who buy.", badge: "Avg. 5.6x return" },
  { bg: "var(--mint)", ic: "★", title: "Found on Google and ChatGPT", text: "Fixes what Shopify breaks and writes product pages that rank above Amazon and get recommended by AI.", badge: "1,000+ pages written" },
  { bg: "var(--pink)", ic: "🛒", title: "Pages that sell more", text: "Tests your product pages and removes the things that make people leave at checkout.", badge: "+32% conversion" },
  { bg: "#BFD4FF", ic: "✉", title: "A report you can read", text: "Every Wednesday you get a clear recap of what worked and what’s next. No dashboards to decode.", badge: "Every week, free" },
];

const steps = [
  { when: "Day 0", title: "Connect your store", text: "Link Shopify and your ad accounts in one click." },
  { when: "Day 0", title: "See what’s costing you sales", text: "A free audit, ranked by the money you’re losing." },
  { when: "Days 1 to 7", title: "First fixes go live", text: "Ads paused, pages tested and titles improved, all automatically." },
  { when: "Anytime", title: "Keep it only if it works", text: "Cancel anytime in your account. No lock-in." },
];

const stats = [
  ["2,000+", "stores growing with Ryze"],
  ["$500M+", "in ad spend managed"],
  ["5.6x", "average return on ads"],
  ["+32%", "conversion rate lift"],
];

export default function Home() {
  return (
    <>
      <Reveal />
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <symbol id="jar" viewBox="0 0 100 100"><path d="M48 6c5 6 5 10 0 14-5-4-5-8 0-14z" fill="#FFD04D" stroke="#1B1210" strokeWidth="3" /><rect x="14" y="30" width="72" height="62" rx="16" fill="currentColor" stroke="#1B1210" strokeWidth="4" /><rect x="22" y="22" width="56" height="12" rx="6" fill="#1B1210" /><rect x="30" y="52" width="40" height="22" rx="6" fill="#FFF3DC" /></symbol>
          <symbol id="bottle" viewBox="0 0 100 100"><rect x="38" y="4" width="24" height="22" rx="7" fill="#1B1210" /><rect x="42" y="24" width="16" height="10" fill="#1B1210" /><rect x="20" y="32" width="60" height="62" rx="18" fill="currentColor" stroke="#1B1210" strokeWidth="4" /><circle cx="50" cy="63" r="14" fill="#FFF3DC" /></symbol>
          <symbol id="bag" viewBox="0 0 100 100"><path d="M22 14h56l8 78H14z" fill="currentColor" stroke="#1B1210" strokeWidth="4" strokeLinejoin="round" /><rect x="22" y="8" width="56" height="12" rx="4" fill="#1B1210" /><rect x="30" y="42" width="40" height="32" rx="16" fill="#FFF3DC" /></symbol>
          <symbol id="tote" viewBox="0 0 100 100"><path d="M34 40V26c0-20 32-20 32 0v14" fill="none" stroke="#1B1210" strokeWidth="5" strokeLinecap="round" /><rect x="14" y="38" width="72" height="56" rx="10" fill="currentColor" stroke="#1B1210" strokeWidth="4" /><path d="M34 66h32" stroke="#FFF3DC" strokeWidth="7" strokeLinecap="round" /></symbol>
        </defs>
      </svg>

      <div className="wrap">
        <nav>
          <a className="logo" href="#"><i>r</i>ryze</a>
          <div className="links">
            <a href="#what">What we do</a>
            <a href="#results">Results</a>
            <a href="#how">How it works</a>
            <a href={AUDIT_URL}>Book a call</a>
          </div>
          <a className="nbtn" href={AUDIT_URL}>Start free</a>
        </nav>

        <section className="hero">
          <div>
            <span className="pill"><b>Shopify</b> We’ve grown 2,000+ online stores</span>
            <h1>More orders for your <mark>Shopify</mark> store. Starting this week.</h1>
            <p className="sub">Ryze runs your Google and Meta ads, SEO and product pages for you, all in one place. No agency. No tech skills.</p>
            <form className="form" action={AUDIT_URL} method="get">
              <input type="text" name="store" placeholder="yourstore.myshopify.com" aria-label="Your store address" />
              <button type="submit">Get my free audit →</button>
            </form>
            <div className="ticks"><span>Free to start</span><span>Connects in 1 click</span><span>Cancel anytime</span></div>
          </div>

          <div className="store">
            <div className="frame">
              <div className="bar"><i /><i /><i /><span>glazee.com</span></div>
              <div className="shead">Glazée candles<small>Summer drop</small></div>
              <div className="grid">
                {products.map((p) => (
                  <div className="card" key={p.name}>
                    <div className="ph" style={{ background: p.bg, color: p.fg }}>
                      <svg aria-hidden="true"><use href={`#${p.icon}`} /></svg>
                    </div>
                    <div className="row">
                      <div>{p.name}<small>{p.tag}</small></div>
                      <span className="add">+ Add</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="note n1"><b>$340/day</b>saved. Ryze paused 12 ads that weren’t selling.</div>
            <div className="note n2">New order · <b>$86.00</b></div>
            <div className="note n3"><b>+32%</b>more shoppers check out</div>
          </div>
        </section>

        <section className="proof stagger" id="results">
          {stats.map(([n, l]) => (
            <div key={n}><b>{n}</b>{l}</div>
          ))}
          <div className="brands">
            <p>Brands who trust us</p>
            <span>Luca Faloni</span><span>Slim Chickens</span><span>Pepperfry</span><span>State Farm</span>
          </div>
        </section>

        <section className="sec" id="what">
          <h2 data-reveal>One helper for your whole store</h2>
          <p data-reveal>Ads, search, product pages and reports used to be four different jobs. Now Ryze does them together.</p>
          <div className="cards stagger">
            {jobs.map((j) => (
              <div className="job" style={{ background: j.bg }} key={j.title}>
                <div className="ic">{j.ic}</div>
                <h3>{j.title}</h3>
                <p>{j.text}</p>
                <em>{j.badge}</em>
              </div>
            ))}
          </div>
        </section>

        <section className="sec" id="how">
          <div className="how" data-reveal>
            <h2 data-reveal>Set up in minutes. Results in days.</h2>
            <p>No engineers and no theme edits. Month-to-month, so you only stay if it works.</p>
            <div className="steps stagger">
              {steps.map((s, i) => (
                <div className="step" key={s.title}>
                  <div className="num">{i + 1}</div>
                  <small>{s.when}</small>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <div className="cta">
              <b>Ready to see what your store is missing?</b>
              <a href={AUDIT_URL}>Get my free audit →</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
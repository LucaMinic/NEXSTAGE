import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import AreaBand from './pages/AreaBand'
import AreaLocali from './pages/AreaLocali'
import CommunityMusicisti from './pages/CommunityMusicisti'
import SistemaMatching from './pages/SistemaMatching'
import Registrazione from './pages/Registrazione'
import PerBand from './pages/PerBand'
import PerLocali from './pages/PerLocali'
import './App.css'

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconMusic() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>
    </svg>
  )
}

function IconVenue() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M12 2L2 7v2h20V7L12 2zm-8 8v11h4v-6h8v6h4V10H4zm10 4h-4v-2h4v2z"/>
    </svg>
  )
}

function IconPeople() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  )
}

function IconMatch() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
    </svg>
  )
}

function IconArrowDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
  )
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function NexStageLogo({ light = false }) {
  const pick = light ? '#ffffff' : '#111111'
  const note = light ? '#111111' : '#ffffff'

  return (
    <div className="logo-wrap">
      {/* Guitar pick + double eighth note — ricreato dall'immagine del logo */}
      <svg width="46" height="52" viewBox="0 0 110 124" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Guitar pick — forma plettro: triangolo con tre angoli arrotondati */}
        <path
          d="M55,5 C80,5 105,28 105,55 C105,82 80,108 55,120 C30,108 5,82 5,55 C5,28 30,5 55,5 Z"
          fill={pick}
        />
        {/* Nota testa 1 (sinistra) */}
        <ellipse cx="38" cy="90" rx="12" ry="8.5" transform="rotate(-28 38 90)" fill={note} />
        {/* Nota testa 2 (destra) */}
        <ellipse cx="67" cy="75" rx="12" ry="8.5" transform="rotate(-28 67 75)" fill={note} />
        {/* Gambo 1 */}
        <rect x="47" y="40" width="5" height="52" rx="2.5" fill={note} />
        {/* Gambo 2 */}
        <rect x="76" y="24" width="5" height="52" rx="2.5" fill={note} />
        {/* Traversa (beam) */}
        <path d="M47,42 L81,26 L81,38 L47,54 Z" fill={note} />
      </svg>

      <span className="logo-text">
        <span className={light ? 'logo-nex-light' : 'logo-nex'}>nex</span>
        <span className={light ? 'logo-stage-light' : 'logo-stage'}>stage</span>
      </span>
    </div>
  )
}

// ─── Scroll hook ─────────────────────────────────────────────────────────────
// HashRouter usa # per le route, quindi href="#id" rompe la navigazione.
// Questo hook naviga prima a "/" se necessario, poi esegue lo scroll.

function useScrollTo() {
  const navigate = useNavigate()
  const location = useLocation()

  return (id) => (e) => {
    e.preventDefault()
    const scroll = () => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(scroll, 120)
    } else {
      scroll()
    }
  }
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const scrollTo = useScrollTo()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setOpen(false)
  const goTo = (id) => (e) => { close(); scrollTo(id)(e) }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar-logo" onClick={close}>
        <NexStageLogo light />
      </Link>

      <ul className={`nav-links ${open ? 'nav-links--open' : ''}`}>
        <li><a href="#target"   onClick={goTo('target')}>Chi Siamo</a></li>
        <li><a href="#features" onClick={goTo('features')}>Funzionalità</a></li>
        <li><a href="#how"      onClick={goTo('how')}>Come Funziona</a></li>
        <li><Link to="/registrazione" className="btn btn-primary btn-sm" onClick={close}>Unisciti</Link></li>
      </ul>

      <button
        className={`hamburger ${open ? 'hamburger--open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span/><span/><span/>
      </button>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-badge">La piattaforma musicale italiana</span>
        <h1 className="hero-title">
          Connetti la tua musica<br />al palco giusto
        </h1>
        <p className="hero-subtitle">
          NexStage mette in contatto band emergenti, locali e musicisti indipendenti.
          <br className="hide-mobile" />
          Trova la tua prossima esibizione o il tuo artista ideale.
        </p>
        <div className="hero-buttons">
          <Link to="/per-band" className="btn btn-primary btn-lg">Sono una Band</Link>
          <Link to="/per-locali" className="btn btn-outline btn-lg">Sono un Locale</Link>
        </div>
      </div>
      <a href="#target" className="hero-scroll-hint" onClick={(e) => { e.preventDefault(); document.getElementById('target')?.scrollIntoView({ behavior: 'smooth' }) }}>
        <span>Scopri di più</span>
        <IconArrowDown />
      </a>
    </section>
  )
}

// ─── Target Section ───────────────────────────────────────────────────────────

const targets = [
  {
    img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80&auto=format&fit=crop',
    label: '18–35 anni',
    title: 'Band Musicali',
    desc: 'Gruppi emergenti e artisti indipendenti che cercano visibilità, locali e nuove opportunità.',
    tag: 'Per le band',
  },
  {
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80&auto=format&fit=crop',
    label: '25–60 anni',
    title: 'Locali e Organizzatori',
    desc: 'Gestori di pub, club, sale concerto e associazioni culturali che cercano artisti affidabili.',
    tag: 'Per i locali',
  },
  {
    img: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600&q=80&auto=format&fit=crop',
    label: 'Tutti i ruoli',
    title: 'Musicisti Singoli',
    desc: 'Chitarristi, bassisti, batteristi, cantanti e tastieristi in cerca di nuove band e collaborazioni.',
    tag: 'Per i musicisti',
  },
]

function TargetSection() {
  return (
    <section className="section section-light" id="target">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Per chi è NexStage</span>
          <h2 className="section-title">I protagonisti<br />della musica dal vivo</h2>
        </div>
        <div className="target-grid">
          {targets.map((t) => (
            <div key={t.title} className="target-card">
              <div className="target-img-wrap">
                <img src={t.img} alt={t.title} loading="lazy" />
                <span className="target-tag">{t.tag}</span>
              </div>
              <div className="target-body">
                <span className="target-label">{t.label}</span>
                <h3 className="target-title">{t.title}</h3>
                <p className="target-desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features Section ─────────────────────────────────────────────────────────

const features = [
  {
    Icon: IconMusic,
    title: 'Area Band',
    desc: 'Profilo artistico, portfolio, video, demo, calendario eventi e ricerca locali compatibili.',
    path: '/area-band',
  },
  {
    Icon: IconVenue,
    title: 'Area Locali',
    desc: 'Scheda locale, pubblicazione richieste artisti, gestione candidature e contatto diretto.',
    path: '/area-locali',
  },
  {
    Icon: IconPeople,
    title: 'Community Musicisti',
    desc: 'Ricerca componenti mancanti, annunci, collaborazioni artistiche, forum e messaggistica.',
    path: '/community-musicisti',
  },
  {
    Icon: IconMatch,
    title: 'Sistema di Matching',
    desc: 'Suggerimenti automatici basati su posizione geografica, genere, disponibilità ed esperienza.',
    path: '/sistema-matching',
  },
]

function FeaturesSection() {
  return (
    <section className="section section-white" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Cosa offriamo</span>
          <h2 className="section-title">Funzionalità<br />della Piattaforma</h2>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <Link to={f.path} key={f.title} className="feature-card feature-card-link">
              <div className="feature-icon-wrap">
                <f.Icon />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <span className="feature-cta">Scopri →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  {
    num: '01',
    title: 'Registrati',
    desc: 'Crea il tuo account gratuito come band, locale o musicista in pochi minuti.',
  },
  {
    num: '02',
    title: 'Crea il tuo Profilo',
    desc: 'Carica foto, video, demo musicali e descrivi il tuo stile e la tua disponibilità.',
  },
  {
    num: '03',
    title: 'Connettiti',
    desc: 'Entra in contatto diretto con locali o artisti e porta la musica dal vivo.',
  },
]

function HowSection() {
  return (
    <section className="section section-dark" id="how">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow section-eyebrow--light">Il processo</span>
          <h2 className="section-title section-title--light">Come funziona NexStage</h2>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.num} className="step-card">
              <span className="step-num">{s.num}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

const stats = [
  { value: '500+', label: 'Band registrate' },
  { value: '120+', label: 'Locali partner' },
  { value: '1.200+', label: 'Musicisti' },
  { value: '300+', label: 'Collaborazioni avviate' },
]

function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── CTA Section ─────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-overlay" />
      <div className="container cta-inner">
        <h2 className="cta-title">Pronto a salire sul palco?</h2>
        <p className="cta-sub">
          Unisciti a NexStage oggi e scopri un nuovo modo di vivere la musica dal vivo in Italia.
          <br />Registrazione gratuita · Nessuna commissione nascosta
        </p>
        <div className="cta-buttons">
          <Link to="/registrazione" className="btn btn-white btn-lg">Registrati Gratis</Link>
        </div>
        <p className="cta-note">
          Progetto sviluppato in FSL (Formazione Scuola Lavoro)
        </p>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const scrollTo = useScrollTo()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <NexStageLogo light />
            <p className="footer-tagline">
              Una piattaforma digitale per connettere<br />band emergenti, locali e musicisti.
            </p>
          </div>
          <div className="footer-nav">
            <div className="footer-col">
              <span className="footer-col-title">Piattaforma</span>
              <a href="#target"   onClick={scrollTo('target')}>Chi Siamo</a>
              <a href="#features" onClick={scrollTo('features')}>Funzionalità</a>
              <a href="#how"      onClick={scrollTo('how')}>Come Funziona</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Unisciti</span>
              <a href="#cta" onClick={scrollTo('cta')}>Per le Band</a>
              <a href="#cta" onClick={scrollTo('cta')}>Per i Locali</a>
              <a href="#cta" onClick={scrollTo('cta')}>Per i Musicisti</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 NexStage · FSL (Formazione Scuola Lavoro) di Sofia Cominotto · Tutti i diritti riservati</p>
        </div>
      </div>
    </footer>
  )
}

// ─── Home ─────────────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <TargetSection />
      <FeaturesSection />
      <HowSection />
      <CTASection />
      <Footer />
    </>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/area-band" element={<AreaBand />} />
      <Route path="/area-locali" element={<AreaLocali />} />
      <Route path="/community-musicisti" element={<CommunityMusicisti />} />
      <Route path="/sistema-matching" element={<SistemaMatching />} />
      <Route path="/registrazione" element={<Registrazione />} />
      <Route path="/per-band"      element={<PerBand />} />
      <Route path="/per-locali"    element={<PerLocali />} />
    </Routes>
  )
}

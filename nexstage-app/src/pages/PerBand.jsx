import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './pages.css'
import './landing.css'

const benefits = [
  { icon: '🎯', title: 'Visibilità immediata', desc: 'Crea il tuo profilo e renditi trovabile da centinaia di locali in tutta Italia in pochi minuti.' },
  { icon: '📅', title: 'Più date, meno fatica', desc: 'Ricevi richieste direttamente dai locali e gestisci tutto il calendario delle tue esibizioni in un unico posto.' },
  { icon: '🤝', title: 'Matching intelligente', desc: 'Il nostro algoritmo abbina il vostro genere musicale, la vostra area geografica e la vostra disponibilità con i locali giusti.' },
  { icon: '💬', title: 'Comunicazione diretta', desc: 'Nessun intermediario. Contatta i locali e ricevi offerte tramite chat integrata, in modo rapido e trasparente.' },
]

const features = [
  {
    label: '01 — Profilo Artistico',
    title: 'Il vostro palcoscenico digitale',
    desc: 'Crea una scheda completa per la tua band: nome, genere, bio, foto, video, demo audio e lista delle esibizioni precedenti. Il tuo profilo è la prima cosa che un locale vede — fallo parlare per voi.',
    bullets: ['Carica fino a 20 foto dal vivo', 'Incorpora video da YouTube e Spotify', 'Mostra le recensioni dei locali precedenti', 'Inserisci i link ai tuoi social'],
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80&auto=format&fit=crop',
    reverse: false,
  },
  {
    label: '02 — Portfolio & Demo',
    title: 'Fai sentire la tua musica',
    desc: 'Carica i tuoi demo audio direttamente sulla piattaforma. I locali potranno ascoltare il vostro sound prima ancora di contattarvi, aumentando la qualità delle richieste che ricevete.',
    bullets: ['Player audio integrato', 'Supporto MP3, WAV, FLAC', 'Waveform visualizzata automaticamente', 'Link diretto condivisibile'],
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80&auto=format&fit=crop',
    reverse: true,
  },
  {
    label: '03 — Calendario & Live',
    title: 'Gestisci le vostre date',
    desc: 'Tieni traccia di tutte le tue esibizioni confermate, in attesa e passate. I locali vedono la vostra disponibilità in tempo reale e possono proporre date libere nel vostro calendario.',
    bullets: ['Vista mensile e settimanale', 'Notifiche per nuove proposte', 'Export in Google Calendar e iCal', 'Storico completo delle esibizioni'],
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=700&q=80&auto=format&fit=crop',
    reverse: false,
  },
  {
    label: '04 — Ricerca Locali',
    title: 'Trova i palchi giusti per voi',
    desc: 'Cerca locali compatibili filtrati per città, capienza, genere musicale e budget. Candidati direttamente alle richieste aperte con un clic.',
    bullets: ['Filtri per genere, città e capienza', 'Mappa interattiva dei locali vicini', 'Candidatura in un clic', 'Stato della candidatura in tempo reale'],
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80&auto=format&fit=crop',
    reverse: true,
  },
]

const testimonials = [
  { name: 'The Rising Tide', city: 'Milano', quote: 'In tre mesi abbiamo triplicato le nostre date. NexStage ci ha messi in contatto con locali che non avremmo mai trovato da soli. Il sistema di matching funziona davvero.', img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=120&q=80&auto=format&fit=crop', role: 'Band Rock Alternativo' },
  { name: 'Sofia Marchetti', city: 'Roma', quote: 'Come artista solista pensavo fosse difficile farsi notare. Con il profilo NexStage ho ricevuto la mia prima proposta in meno di una settimana. Ora suono ogni weekend.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop', role: 'Cantante Pop/Soul' },
  { name: 'Jazz Quartet MN', city: 'Torino', quote: 'La gestione del calendario e la chat con i locali ci ha fatto risparmiare ore di email. Tutto in un unico posto, semplice e veloce.', img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=120&q=80&auto=format&fit=crop', role: 'Quartetto Jazz' },
]

const steps = [
  { num: '01', title: 'Crea il tuo profilo', desc: 'Registrati gratuitamente, scegli "Band" come tipo di account e compila la tua scheda artistica con foto, bio e demo.' },
  { num: '02', title: 'Entra nel matching', desc: 'Il sistema analizza il tuo genere, la tua area e la tua disponibilità per suggerirti i locali più compatibili con voi.' },
  { num: '03', title: 'Sali sul palco', desc: 'Ricevi proposte, accetta le date, gestisci i contatti dalla chat integrata e costruisci la vostra carriera live.' },
]

export default function PerBand() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="page">
      <nav className="page-nav">
        <Link to="/" className="back-btn">← Torna alla Home</Link>
        <div className="page-nav-logo">
          <span className="logo-text">
            <span className="logo-nex">nex</span>
            <span className="logo-stage">stage</span>
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="landing-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80&auto=format&fit=crop')" }}>
        <div className="page-hero-overlay" />
        <div className="landing-hero-content">
          <span className="landing-eyebrow">NexStage per le Band</span>
          <h1 className="landing-hero-title">Il palco che cercavi<br />ti sta aspettando</h1>
          <p className="landing-hero-sub">
            NexStage connette la tua band con i locali giusti. Smettila di mandare email a vuoto
            e inizia a suonare più spesso, nei posti che ami.
          </p>
          <div className="landing-hero-ctas">
            <Link to="/registrazione" className="btn btn-primary btn-lg">Registrati gratis →</Link>
            <a href="#come-funziona" className="btn btn-outline btn-lg" onClick={e => { e.preventDefault(); document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' }) }}>Come funziona</a>
          </div>
          <p className="landing-hero-note">✓ Gratuito &nbsp;·&nbsp; ✓ Nessuna commissione &nbsp;·&nbsp; ✓ Attivo in tutta Italia</p>
        </div>
      </section>

      {/* Stats */}
      <div className="landing-stats-bar">
        {[
          { v: '500+', l: 'Band registrate' },
          { v: '120+', l: 'Locali partner' },
          { v: '34 giorni', l: 'Tempo medio alla prima data' },
          { v: '4.8 / 5', l: 'Soddisfazione media' },
        ].map(s => (
          <div key={s.l} className="landing-stat">
            <span className="landing-stat-value">{s.v}</span>
            <span className="landing-stat-label">{s.l}</span>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <section className="page-section section-white">
        <div className="page-container">
          <div className="landing-section-header">
            <span className="landing-eyebrow-dark">Perché scegliere NexStage</span>
            <h2 className="landing-section-title">Tutto quello che serve<br />per fare più live</h2>
          </div>
          <div className="benefits-grid">
            {benefits.map(b => (
              <div key={b.title} className="benefit-card">
                <span className="benefit-icon">{b.icon}</span>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="page-section page-section-gray">
        <div className="page-container">
          <div className="landing-section-header">
            <span className="landing-eyebrow-dark">Funzionalità</span>
            <h2 className="landing-section-title">Ogni strumento<br />di cui hai bisogno</h2>
          </div>
          {features.map((f, i) => (
            <div key={i} className={`feature-row ${f.reverse ? 'feature-row-reverse' : ''}`}>
              <div className="feature-row-img">
                <img src={f.img} alt={f.title} loading="lazy" />
              </div>
              <div className="feature-row-text">
                <span className="feature-row-label">{f.label}</span>
                <h3 className="feature-row-title">{f.title}</h3>
                <p className="feature-row-desc">{f.desc}</p>
                <ul className="feature-row-bullets">
                  {f.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-section section-white">
        <div className="page-container">
          <div className="landing-section-header">
            <span className="landing-eyebrow-dark">Chi lo usa già</span>
            <h2 className="landing-section-title">Band che hanno trovato<br />il loro palco</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} className="testimonial-avatar" loading="lazy" />
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role} · {t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="page-section page-section-dark" id="come-funziona">
        <div className="page-container">
          <div className="landing-section-header">
            <span className="landing-eyebrow">Come iniziare</span>
            <h2 className="landing-section-title section-title--light">Tre passi per suonare<br />di più</h2>
          </div>
          <div className="landing-steps">
            {steps.map((s, i) => (
              <div key={s.num} className="landing-step">
                <span className="landing-step-num">{s.num}</span>
                <h3 className="landing-step-title">{s.title}</h3>
                <p className="landing-step-desc">{s.desc}</p>
                {i < steps.length - 1 && <div className="landing-step-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="landing-final-cta">
        <div className="page-container" style={{ textAlign: 'center' }}>
          <h2 className="landing-final-title">Pronti a salire sul palco?</h2>
          <p className="landing-final-sub">Registratevi gratis in 5 minuti. Nessuna carta di credito richiesta.</p>
          <Link to="/registrazione" className="btn btn-primary btn-lg">Crea il profilo band →</Link>
          <p style={{ marginTop: 16, fontSize: 13, color: '#888' }}>
            Già registrati? <Link to="/registrazione" style={{ color: 'var(--red)', fontWeight: 600 }}>Accedi</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

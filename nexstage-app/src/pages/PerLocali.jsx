import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './pages.css'
import './landing.css'

const benefits = [
  { icon: '🎤', title: 'Artisti verificati', desc: 'Accedi a un catalogo di band e musicisti con profili completi, demo audio e recensioni verificate da altri locali.' },
  { icon: '⚡', title: 'Selezione rapida', desc: 'Pubblica una richiesta e ricevi candidature in poche ore. Gestisci tutto dalla dashboard senza email o telefonate.' },
  { icon: '📊', title: 'Matching su misura', desc: 'Il sistema filtra automaticamente gli artisti in base al genere, alla distanza, al budget e alla disponibilità.' },
  { icon: '🔒', title: 'Zero rischi', desc: 'Leggi le recensioni di altri locali prima di confermare. Solo artisti affidabili, puntuali e professionali.' },
]

const features = [
  {
    label: '01 — Scheda Locale',
    title: 'Presentati agli artisti',
    desc: 'Crea la scheda del tuo locale con tutte le informazioni che un artista vuole sapere: capienza, tipo di palco, impianto audio disponibile, generi preferiti e budget medio. Più la scheda è completa, più artisti di qualità ti contatteranno.',
    bullets: ['Galleria foto del locale e del palco', 'Specifica capienza e attrezzatura tecnica', 'Indica i generi musicali preferiti', 'Mostra le recensioni degli artisti ospitati'],
    img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80&auto=format&fit=crop',
    reverse: false,
  },
  {
    label: '02 — Pubblica Richieste',
    title: 'Trova l\'artista ideale',
    desc: 'Hai una data libera? Pubblica una richiesta specificando il tipo di artista che cerchi, il budget e la data. La richiesta viene mostrata agli artisti compatibili nella tua area in tempo reale.',
    bullets: ['Scegli genere, formazione e budget', 'Specifica data, orario e durata del set', 'Visibile a centinaia di artisti compatibili', 'Ricevi candidature in poche ore'],
    img: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=700&q=80&auto=format&fit=crop',
    reverse: true,
  },
  {
    label: '03 — Gestisci Candidature',
    title: 'Tutto sotto controllo',
    desc: 'Visualizza tutte le candidature in un\'unica dashboard. Leggi il profilo, ascolta i demo, controlla le recensioni e approva o rifiuta con un clic. Zero email disperse, zero confusione.',
    bullets: ['Lista candidati con profilo completo', 'Ascolta i demo direttamente in app', 'Approva, rifiuta o metti in lista d\'attesa', 'Notifica automatica all\'artista selezionato'],
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=700&q=80&auto=format&fit=crop',
    reverse: false,
  },
  {
    label: '04 — Contatto Diretto',
    title: 'Comunica senza intermediari',
    desc: 'Una volta selezionato l\'artista, chatta direttamente dalla piattaforma. Accordatevi su soundcheck, cachet, rider tecnico e logistica. Tutto documentato e tracciabile.',
    bullets: ['Chat integrata in tempo reale', 'Invia file, link e documenti', 'Storico completo delle conversazioni', 'Notifiche push e via email'],
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80&auto=format&fit=crop',
    reverse: true,
  },
]

const testimonials = [
  { name: 'Marco Pellegrini', city: 'Milano', role: 'Gestore Circolo Arci Magnolia', quote: 'Prima perdevo ore a cercare band sui social. Ora pubblico una richiesta su NexStage e in 24 ore ho già tre candidature valide. Il livello degli artisti è notevolmente migliorato.', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&auto=format&fit=crop' },
  { name: 'Laura Bianchi', city: 'Bologna', role: 'Direttrice Bravo Caffè', quote: 'Il sistema di matching è sorprendente. Gli artisti che ci vengono proposti corrispondono sempre al nostro stile. Abbiamo riempito il locale ogni settimana da quando usiamo NexStage.', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80&auto=format&fit=crop' },
  { name: 'Andrea Russo', city: 'Roma', role: 'Organizzatore Init Club', quote: 'La dashboard di gestione candidature ha rivoluzionato il nostro flusso di lavoro. Tutto in un unico posto, intuitivo e veloce. Risparmio almeno 5 ore a settimana.', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&q=80&auto=format&fit=crop' },
]

const steps = [
  { num: '01', title: 'Registra il tuo locale', desc: 'Crea gratuitamente la scheda del tuo locale, aggiungi foto, specifica capienza, impianto e generi preferiti.' },
  { num: '02', title: 'Pubblica o scopri', desc: 'Pubblica una richiesta artisti oppure sfoglia i profili compatibili nella tua area usando i filtri di matching.' },
  { num: '03', title: 'Seleziona e conferma', desc: 'Ascolta i demo, leggi le recensioni, chatta con l\'artista e conferma la serata. Tutto in meno di 10 minuti.' },
]

export default function PerLocali() {
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
      <section className="landing-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80&auto=format&fit=crop')" }}>
        <div className="page-hero-overlay" />
        <div className="landing-hero-content">
          <span className="landing-eyebrow">NexStage per i Locali</span>
          <h1 className="landing-hero-title">L'artista giusto<br />per ogni serata</h1>
          <p className="landing-hero-sub">
            NexStage ti connette con band e musicisti verificati, selezionati per il tuo genere e il tuo budget.
            Riempi il palco ogni settimana, senza perdere tempo.
          </p>
          <div className="landing-hero-ctas">
            <Link to="/registrazione" className="btn btn-primary btn-lg">Registra il tuo locale →</Link>
            <a href="#come-funziona" className="btn btn-outline btn-lg" onClick={e => { e.preventDefault(); document.getElementById('come-funziona')?.scrollIntoView({ behavior: 'smooth' }) }}>Come funziona</a>
          </div>
          <p className="landing-hero-note">✓ Gratuito &nbsp;·&nbsp; ✓ Artisti verificati &nbsp;·&nbsp; ✓ Attivo in tutta Italia</p>
        </div>
      </section>

      {/* Stats */}
      <div className="landing-stats-bar">
        {[
          { v: '120+', l: 'Locali attivi' },
          { v: '500+', l: 'Artisti disponibili' },
          { v: '< 24h', l: 'Tempo medio prima candidatura' },
          { v: '4.7 / 5', l: 'Soddisfazione locali' },
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
            <h2 className="landing-section-title">Tutto quello che serve<br />per riempire il palco</h2>
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
            <h2 className="landing-section-title">Strumenti pensati<br />per chi gestisce un locale</h2>
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
            <h2 className="landing-section-title">Locali che hanno trovato<br />gli artisti giusti</h2>
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
            <h2 className="landing-section-title section-title--light">Tre passi per trovare<br />l'artista perfetto</h2>
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
          <h2 className="landing-final-title">Inizia a riempire il palco</h2>
          <p className="landing-final-sub">Registra il tuo locale gratis in 5 minuti. Nessuna carta di credito richiesta.</p>
          <Link to="/registrazione" className="btn btn-primary btn-lg">Registra il tuo locale →</Link>
          <p style={{ marginTop: 16, fontSize: 13, color: '#888' }}>
            Già registrato? <Link to="/registrazione" style={{ color: 'var(--red)', fontWeight: 600 }}>Accedi</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

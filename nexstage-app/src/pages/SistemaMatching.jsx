import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './pages.css'

const matches = [
  { name: 'The Rising Tide', role: 'Band Rock · 5 membri', score: 97, scoreClass: 'high', tags: ['Rock Alt.', 'Live', '34 show'], meta: ['📍 Milano, 2 km', '⭐ 4.8', '🗓 Disponibile Gen'], img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80&auto=format&fit=crop' },
  { name: 'Sofia Marchetti', role: 'Cantante Pop · Solista', score: 92, scoreClass: 'high', tags: ['Pop', 'Soul', '18 show'], meta: ['📍 Milano, 5 km', '⭐ 4.9', '🗓 Disponibile Feb'], img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop' },
  { name: 'Jazz Quartet MN', role: 'Quartetto Jazz', score: 84, scoreClass: 'high', tags: ['Jazz', 'Standard', '52 show'], meta: ['📍 Monza, 18 km', '⭐ 4.7', '🗓 Disponibile Gen'], img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&q=80&auto=format&fit=crop' },
  { name: 'Marco Tamburi', role: 'Batterista · Session', score: 78, scoreClass: 'med', tags: ['Rock', 'Funk', 'Studio'], meta: ['📍 Sesto S.G., 9 km', '⭐ 4.6', '🗓 Weekend'], img: 'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=400&q=80&auto=format&fit=crop' },
  { name: 'Luce Parallela', role: 'Duo Acustico', score: 73, scoreClass: 'med', tags: ['Indie', 'Folk', 'Originali'], meta: ['📍 Bergamo, 42 km', '⭐ 4.5', '🗓 Disponibile'], img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80&auto=format&fit=crop' },
  { name: 'Neon Collective', role: 'Band Elettronica · 4 membri', score: 69, scoreClass: 'med', tags: ['Synth', 'Elettronico', 'Live'], meta: ['📍 Milano, 11 km', '⭐ 4.4', '🗓 Fine mese'], img: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&q=80&auto=format&fit=crop' },
]

const genreChips = ['Tutti', 'Rock', 'Jazz', 'Pop', 'Indie', 'Elettronico', 'Folk']
const availChips = ['Qualsiasi', 'Questo mese', 'Weekend', 'Infrasettimanale']

export default function SistemaMatching() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const [activeGenre, setActiveGenre] = useState('Tutti')
  const [activeAvail, setActiveAvail] = useState('Qualsiasi')

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
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80&auto=format&fit=crop')" }}
      >
        <div className="page-hero-overlay" />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 40px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 12 }}>Smart Matching</span>
          <h1 style={{ fontSize: 'clamp(32px,5vw,58px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', margin: '0 0 14px' }}>Sistema di Matching</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', maxWidth: 560, lineHeight: 1.7, margin: 0 }}>
            Il nostro algoritmo analizza posizione, genere, disponibilità ed esperienza per suggerirti i match perfetti in tempo reale.
          </p>
        </div>
      </section>

      {/* Stats rapide */}
      <div style={{ background: 'var(--black)', padding: '24px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="page-container" style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {[
            { v: '97%', l: 'Accuratezza media' },
            { v: '< 48h', l: 'Tempo medio contatto' },
            { v: '8 criteri', l: 'Analizzati per match' },
            { v: '300+', l: 'Match avvenuti' },
          ].map(s => (
            <div key={s.l} style={{ textAlign: 'center', flex: '1 1 120px' }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: '-0.04em' }}>{s.v}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filtri + Match cards */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-section-title">I tuoi Match</h2>
          <p className="page-section-subtitle">Suggerimenti personalizzati basati sul tuo profilo — aggiornati in tempo reale</p>
          <div className="matching-layout">

            {/* Filtri */}
            <div className="filter-panel">
              <h3>Filtra i risultati</h3>

              <div className="filter-group">
                <span className="filter-label">Distanza massima</span>
                <select className="filter-select" defaultValue="50">
                  <option value="10">Entro 10 km</option>
                  <option value="25">Entro 25 km</option>
                  <option value="50">Entro 50 km</option>
                  <option value="100">Tutta Italia</option>
                </select>
              </div>

              <div className="filter-group">
                <span className="filter-label">Genere musicale</span>
                <div className="filter-chips">
                  {genreChips.map(g => (
                    <button
                      key={g}
                      className={`filter-chip ${activeGenre === g ? 'active' : ''}`}
                      onClick={() => setActiveGenre(g)}
                    >{g}</button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-label">Disponibilità</span>
                <div className="filter-chips">
                  {availChips.map(a => (
                    <button
                      key={a}
                      className={`filter-chip ${activeAvail === a ? 'active' : ''}`}
                      onClick={() => setActiveAvail(a)}
                    >{a}</button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-label">Esperienza minima</span>
                <select className="filter-select" defaultValue="any">
                  <option value="any">Qualsiasi</option>
                  <option value="beginner">Principiante</option>
                  <option value="mid">Intermedio (3+ anni)</option>
                  <option value="pro">Professionale (7+ anni)</option>
                </select>
              </div>

              <div className="filter-group">
                <span className="filter-label">Tipo di formazione</span>
                <select className="filter-select" defaultValue="any">
                  <option value="any">Tutti</option>
                  <option value="solo">Solista</option>
                  <option value="duo">Duo</option>
                  <option value="band">Band</option>
                </select>
              </div>

              <button className="btn btn-primary btn-md" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
                Applica filtri
              </button>
            </div>

            {/* Match Cards */}
            <div className="match-cards-grid">
              {matches.map((m, i) => (
                <div key={i} className="match-card">
                  <div className="match-card-img-wrap">
                    <img src={m.img} alt={m.name} loading="lazy" />
                    <span className={`match-score-badge ${m.scoreClass}`}>{m.score}% match</span>
                  </div>
                  <div className="match-card-body">
                    <h3 className="match-name">{m.name}</h3>
                    <p className="match-role">{m.role}</p>
                    <div className="match-tags">
                      {m.tags.map(t => <span key={t} className="match-tag">{t}</span>)}
                    </div>
                    <div className="match-meta">
                      {m.meta.map(info => <span key={info}>{info}</span>)}
                    </div>
                    <div className="match-actions">
                      <button className="btn btn-primary btn-sm">Contatta</button>
                      <button className="btn btn-ghost btn-sm">Profilo</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="page-section page-section-gray">
        <div className="page-container">
          <h2 className="page-section-title">Come funziona l'algoritmo</h2>
          <p className="page-section-subtitle">Il nostro sistema analizza 8 criteri per trovare i match più compatibili</p>
          <div className="how-steps">
            {[
              { num: '01', title: 'Analisi del Profilo', desc: 'Raccogliamo genere musicale, esperienza, strumenti e stile dalle informazioni del tuo profilo.' },
              { num: '02', title: 'Geolocalizzazione', desc: 'Calcoliamo la distanza reale e filtriamo i risultati in base al raggio che hai impostato.' },
              { num: '03', title: 'Score di Compatibilità', desc: 'Assegniamo una percentuale di match considerando tutti i criteri e li ordiniamo per rilevanza.' },
            ].map(s => (
              <div key={s.num} className="how-step">
                <div className="how-step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Criteri dettagliati */}
          <div style={{ marginTop: 48 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, color: 'var(--black)', marginBottom: 20 }}>Criteri analizzati</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 14 }}>
              {[
                { icon: '📍', label: 'Posizione geografica', pct: 25 },
                { icon: '🎵', label: 'Genere musicale', pct: 22 },
                { icon: '🗓', label: 'Disponibilità temporale', pct: 18 },
                { icon: '⭐', label: 'Esperienza e recensioni', pct: 15 },
                { icon: '👥', label: 'Tipo di formazione', pct: 10 },
                { icon: '💰', label: 'Budget e cachet', pct: 5 },
                { icon: '📸', label: 'Completezza profilo', pct: 3 },
                { icon: '🔁', label: 'Attività recente', pct: 2 },
              ].map(c => (
                <div key={c.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 10, padding: '16px 18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--black)' }}>{c.icon} {c.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--red)' }}>{c.pct}%</span>
                  </div>
                  <div style={{ height: 4, background: '#eee', borderRadius: 2 }}>
                    <div style={{ height: '100%', width: `${c.pct * 4}%`, background: 'var(--black)', borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './pages.css'

const waveBars = (trackIdx) =>
  Array.from({ length: 36 }, (_, j) =>
    Math.abs(Math.sin(j * 0.75 + trackIdx * 1.4) * 18 + Math.sin(j * 1.3 + trackIdx) * 10) + 8
  )

const portfolioImages = [
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501612780327-45045538702b?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80&auto=format&fit=crop',
]

const tracks = [
  { name: 'Neon Horizon', genre: 'Rock Alternativo · 2024', duration: '3:42' },
  { name: 'Vuoto Silenzioso', genre: 'Post-Punk · 2023', duration: '4:15' },
  { name: 'Città Grigia', genre: 'Indie Rock · 2023', duration: '3:58' },
]

const events = [
  { day: '14', month: 'GEN', venue: 'Circolo Arci Magnolia', location: 'Segrate, MI', time: '22:00', status: 'Confermato' },
  { day: '21', month: 'GEN', venue: 'Rocket Club', location: 'Milano, MI', time: '21:30', status: 'Confermato' },
  { day: '03', month: 'FEB', venue: 'Init Club', location: 'Roma, RM', time: '22:30', status: 'In attesa' },
  { day: '17', month: 'FEB', venue: 'Spazio Mak', location: 'Torino, TO', time: '21:00', status: 'In attesa' },
]

const nearbyVenues = [
  { name: 'Rocket Club', city: 'Milano, MI', capacity: 'Fino a 250 persone', match: 96, img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80&auto=format&fit=crop' },
  { name: 'Circolo Magnolia', city: 'Segrate, MI', capacity: 'Fino a 400 persone', match: 91, img: 'https://images.unsplash.com/photo-1485872299829-c673f5194813?w=400&q=80&auto=format&fit=crop' },
  { name: 'Tunnel Club', city: 'Milano, MI', capacity: 'Fino a 600 persone', match: 84, img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80&auto=format&fit=crop' },
  { name: 'Init Club', city: 'Roma, RM', capacity: 'Fino a 300 persone', match: 79, img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80&auto=format&fit=crop' },
]

export default function AreaBand() {
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

      {/* Hero – Profilo Artistico */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80&auto=format&fit=crop')" }}
      >
        <div className="page-hero-overlay" />
        <div className="band-profile-header">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=220&q=80&auto=format&fit=crop&face"
            alt="The Rising Tide"
            className="band-avatar"
          />
          <div className="band-info">
            <div className="band-badges">
              <span className="badge badge-verified">✓ Verificato</span>
              <span className="badge badge-genre">Rock Alternativo</span>
            </div>
            <h1 className="band-name">The Rising Tide</h1>
            <p className="band-meta">📍 Milano, Lombardia &nbsp;·&nbsp; 5 membri &nbsp;·&nbsp; Attiva dal 2019</p>
            <div className="band-stats-row">
              <span>1.2k follower</span>
              <span>·</span>
              <span>34 esibizioni</span>
              <span>·</span>
              <span>⭐ 4.8 / 5</span>
            </div>
          </div>
          <div className="band-actions">
            <button className="btn btn-primary btn-md">Contatta</button>
            <button className="btn btn-outline-white btn-md">Segui</button>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-section-title">Profilo Artistico</h2>
          <p className="band-bio">
            The Rising Tide è un quartetto rock alternativo formatosi a Milano nel 2019. Il nostro sound
            fonde l'energia del post-punk britannico con melodie contemporanee e testi in italiano,
            creando un'identità sonora unica e riconoscibile. Abbiamo suonato in oltre 30 locali del nord
            Italia e siamo pronti a portare la nostra musica su nuovi palchi. Disponibili per live da
            club a festival, con set da 45 a 90 minuti.
          </p>
          <div className="bio-tags">
            {['Rock Alternativo', 'Post-Punk', 'Indie', 'Testi in italiano', 'Nord Italia', 'Set completo PA'].map(t => (
              <span key={t} className="bio-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio & Video */}
      <section className="page-section page-section-gray">
        <div className="page-container">
          <h2 className="page-section-title">Portfolio & Video</h2>
          <p className="page-section-subtitle">Foto e video delle nostre esibizioni dal vivo</p>
          <div className="portfolio-grid">
            {portfolioImages.map((img, i) => (
              <div key={i} className="portfolio-item">
                <img src={img} alt={`Live ${i + 1}`} loading="lazy" />
                {(i === 0 || i === 3) && (
                  <div className="video-play-overlay">
                    <span className="play-btn">▶</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Audio */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-section-title">Demo Audio</h2>
          <p className="page-section-subtitle">Ascolta i nostri brani originali</p>
          <div className="tracks-list">
            {tracks.map((t, i) => (
              <div key={i} className="track-item">
                <button className="track-play">▶</button>
                <div className="track-info">
                  <span className="track-name">{t.name}</span>
                  <span className="track-genre">{t.genre}</span>
                </div>
                <div className="track-wave">
                  {waveBars(i).map((h, j) => (
                    <div key={j} className="wave-bar" style={{ height: `${h}px` }} />
                  ))}
                </div>
                <span className="track-duration">{t.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendario */}
      <section className="page-section page-section-gray">
        <div className="page-container">
          <h2 className="page-section-title">Calendario Eventi</h2>
          <p className="page-section-subtitle">Prossime date confermate e in programma</p>
          <div className="events-list">
            {events.map((e, i) => (
              <div key={i} className="event-item">
                <div className="event-date">
                  <span className="event-day">{e.day}</span>
                  <span className="event-month">{e.month}</span>
                </div>
                <div className="event-info">
                  <h4 className="event-venue">{e.venue}</h4>
                  <p className="event-location">📍 {e.location}</p>
                  <p className="event-time">🕗 {e.time}</p>
                </div>
                <span className={`event-status ${e.status === 'Confermato' ? 'status-green' : 'status-orange'}`}>
                  {e.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ricerca Locali */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-section-title">Locali Compatibili</h2>
          <p className="page-section-subtitle">Suggerimenti basati sul tuo genere musicale e la tua area geografica</p>
          <div className="venues-grid">
            {nearbyVenues.map((v, i) => (
              <div key={i} className="venue-card">
                <img src={v.img} alt={v.name} className="venue-img" loading="lazy" />
                <div className="venue-info">
                  <h4>{v.name}</h4>
                  <p>📍 {v.city}</p>
                  <p>👥 {v.capacity}</p>
                  <div className="venue-match">
                    <span className="match-pct">● {v.match}% compatibile</span>
                  </div>
                </div>
                <button className="btn btn-primary btn-sm">Candidati ora</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

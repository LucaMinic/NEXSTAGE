import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './pages.css'

const applicants = [
  { name: 'Luca Ferri', role: 'Rock / Indie — Chitarra e voce', location: 'Milano, MI', status: 'Nuovo', statusClass: 'badge-new', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop&face' },
  { name: 'Marta Conti', role: 'Pop / Soul — Voce solista', location: 'Sesto San Giovanni, MI', status: 'In esame', statusClass: 'badge-pending', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop&face' },
  { name: 'Andrea Ricci', role: 'Jazz / Blues — Pianoforte', location: 'Monza, MB', status: 'Nuovo', statusClass: 'badge-new', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop&face' },
  { name: 'Sofia Marchetti', role: 'Indie Pop — Duo chitarra e voce', location: 'Milano, MI', status: 'Approvato', statusClass: 'badge-verified', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&face' },
  { name: 'Matteo Greco', role: 'Rock Alternativo — Band 4 elementi', location: 'Bergamo, BG', status: 'Non idoneo', statusClass: 'badge-rejected', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&q=80&auto=format&fit=crop&face' },
]

const chatUsers = [
  { name: 'The Rising Tide', preview: 'Siamo disponibili anche il sabato...', time: '10:32', img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=80&q=80&auto=format&fit=crop', active: true },
  { name: 'Sofia Marchetti', preview: 'Grazie per l\'opportunità!', time: 'Ieri', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80&auto=format&fit=crop' },
  { name: 'Jazz Quartet MN', preview: 'Possiamo discutere il cachet...', time: 'Lun', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=80&q=80&auto=format&fit=crop' },
]

export default function AreaLocali() {
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

      {/* Hero – Scheda Locale */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80&auto=format&fit=crop')" }}
      >
        <div className="page-hero-overlay" />
        <div className="venue-profile-header">
          <span className="venue-type-badge">Live Club · Milano</span>
          <h1 className="venue-name">Circolo Arci Magnolia</h1>
          <div className="venue-meta-row">
            <span className="venue-meta-item">📍 Via Circonvallazione Est, Segrate (MI)</span>
            <span className="venue-meta-item">👥 Capienza 400 persone</span>
            <span className="venue-meta-item">⭐ 4.7 / 5</span>
            <span className="badge badge-verified" style={{alignSelf:'center'}}>✓ Verificato</span>
          </div>
        </div>
      </section>

      {/* Scheda Locale – Info */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-section-title">Scheda Locale</h2>
          <div className="info-grid" style={{ marginBottom: 32 }}>
            {[
              { label: 'Capienza', value: '400 posti' },
              { label: 'Palco', value: '10 × 6 m' },
              { label: 'Impianto', value: 'PA completo' },
              { label: 'Generi', value: 'Rock, Indie, Jazz' },
              { label: 'Serate/mese', value: '12 eventi' },
              { label: 'Cachet medio', value: '€ 300 – 800' },
            ].map(item => (
              <div key={item.label} className="info-card">
                <span className="info-card-label">{item.label}</span>
                <span className="info-card-value">{item.value}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, color: 'var(--gray)', lineHeight: 1.75, maxWidth: 680 }}>
            Il Circolo Arci Magnolia è uno dei locali di musica dal vivo più storici del Nord Italia.
            Immerso nel verde, ospita concerti di artisti emergenti e affermati da oltre 20 anni.
            Il palco dispone di impianto audio professionale, luci motorizzate e camerino privato.
            Ogni venerdì e sabato sera organizziamo serate con artisti live selezionati.
          </p>
        </div>
      </section>

      {/* Pubblica Richiesta Artisti */}
      <section className="page-section page-section-gray">
        <div className="page-container">
          <h2 className="page-section-title">Pubblica Richiesta Artisti</h2>
          <p className="page-section-subtitle">Descrivi l'artista che cerchi per la prossima serata</p>
          <div className="form-mockup">
            <div className="form-row">
              <div>
                <label className="form-label">Data evento</label>
                <input className="form-input" type="text" defaultValue="14 Febbraio 2025" readOnly />
              </div>
              <div>
                <label className="form-label">Orario inizio</label>
                <input className="form-input" type="text" defaultValue="22:00" readOnly />
              </div>
            </div>
            <div className="form-row">
              <div>
                <label className="form-label">Genere musicale</label>
                <select className="form-select" defaultValue="rock">
                  <option value="rock">Rock / Alternativo</option>
                  <option value="jazz">Jazz / Blues</option>
                  <option value="pop">Pop / Soul</option>
                  <option value="indie">Indie</option>
                </select>
              </div>
              <div>
                <label className="form-label">Formazione</label>
                <select className="form-select" defaultValue="band">
                  <option value="solo">Artista solista</option>
                  <option value="duo">Duo</option>
                  <option value="band">Band</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div>
                <label className="form-label">Budget (€)</label>
                <input className="form-input" type="text" defaultValue="300 – 600" readOnly />
              </div>
              <div>
                <label className="form-label">Durata set</label>
                <select className="form-select" defaultValue="60">
                  <option value="45">45 minuti</option>
                  <option value="60">60 minuti</option>
                  <option value="90">90 minuti</option>
                </select>
              </div>
            </div>
            <div className="form-row-single">
              <label className="form-label">Note aggiuntive</label>
              <textarea className="form-textarea" defaultValue="Cerchiamo una band rock con buon seguito sui social, disponibile per soundcheck dalle 19:30. Impianto PA incluso, camerino disponibile." readOnly />
            </div>
            <button className="btn btn-primary btn-md">Pubblica Richiesta</button>
          </div>
        </div>
      </section>

      {/* Gestione Candidature */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-section-title">Gestione Candidature</h2>
          <p className="page-section-subtitle">Artisti che hanno risposto alla tua richiesta del 14 Febbraio</p>
          <div className="applicants-list">
            {applicants.map((a, i) => (
              <div key={i} className="applicant-item">
                <img src={a.img} alt={a.name} className="applicant-avatar" loading="lazy" />
                <div className="applicant-info">
                  <p className="applicant-name">{a.name}</p>
                  <p className="applicant-role">{a.role}</p>
                  <p className="applicant-location">📍 {a.location}</p>
                </div>
                <span className={`badge ${a.statusClass}`}>{a.status}</span>
                <div className="applicant-actions">
                  <button className="btn btn-primary btn-sm">Approva</button>
                  <button className="btn btn-ghost btn-sm">Profilo</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatto Diretto */}
      <section className="page-section page-section-gray">
        <div className="page-container">
          <h2 className="page-section-title">Contatto Diretto</h2>
          <p className="page-section-subtitle">Messaggia direttamente con gli artisti approvati</p>
          <div className="chat-container">
            <div className="chat-sidebar">
              <div className="chat-sidebar-header">Conversazioni</div>
              {chatUsers.map((u, i) => (
                <div key={i} className={`chat-user ${u.active ? 'active' : ''}`}>
                  <img src={u.img} alt={u.name} className="chat-user-avatar" />
                  <div className="chat-user-info">
                    <p className="chat-user-name">{u.name}</p>
                    <p className="chat-user-preview">{u.preview}</p>
                  </div>
                  <span className="chat-user-time">{u.time}</span>
                </div>
              ))}
            </div>
            <div className="chat-main">
              <div className="chat-header">
                <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=80&q=80&auto=format&fit=crop" alt="The Rising Tide" />
                <div className="chat-header-info">
                  <h4>The Rising Tide</h4>
                  <p>Online adesso</p>
                </div>
              </div>
              <div className="chat-messages">
                <div className="chat-msg">
                  <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=60&q=80&auto=format&fit=crop" alt="" className="chat-msg-avatar" />
                  <div className="chat-bubble">Ciao! Abbiamo visto la vostra richiesta per il 14 febbraio. Siamo molto interessati!</div>
                </div>
                <div className="chat-msg me">
                  <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=60&q=80&auto=format&fit=crop" alt="" className="chat-msg-avatar" />
                  <div className="chat-bubble">Perfetto! Avete un video del vostro ultimo live che posso vedere?</div>
                </div>
                <div className="chat-msg">
                  <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=60&q=80&auto=format&fit=crop" alt="" className="chat-msg-avatar" />
                  <div className="chat-bubble">Certo, vi mando il link al nostro profilo NexStage con tutti i video. Siamo disponibili anche il sabato sera se la data dovesse cambiare.</div>
                </div>
                <div className="chat-msg me">
                  <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=60&q=80&auto=format&fit=crop" alt="" className="chat-msg-avatar" />
                  <div className="chat-bubble">Ottimo, la data è confermata. Possiamo fare il soundcheck dalle 19:30?</div>
                </div>
              </div>
              <div className="chat-input-bar">
                <input className="chat-input" type="text" placeholder="Scrivi un messaggio..." readOnly />
                <button className="chat-send">→</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

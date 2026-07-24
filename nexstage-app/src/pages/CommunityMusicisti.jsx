import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './pages.css'

const instruments = ['🥁', '🎸', '🎤', '🎹', '🎺', '🎻']

const announcements = [
  { icon: '🥁', role: 'Cercasi Batterista', band: 'Velvet Underground — Milano', desc: 'Band rock alternativo cerca batterista con esperienza live. Stile: groove solido, dinamica. Prove settimanali a Lambrate.', tags: ['Rock', 'Live', 'Esperienza 3+ anni'], city: '📍 Milano, MI' },
  { icon: '🎸', role: 'Cercasi Chitarrista', band: 'Blue Horizon — Torino', desc: 'Trio jazz cerca chitarrista. Repertorio misto standard e originali. Disponibilità fine settimana per live in locali.', tags: ['Jazz', 'Originali', 'Weekend'], city: '📍 Torino, TO' },
  { icon: '🎤', role: 'Cercasi Cantante', band: 'Proyecto Sur — Roma', desc: 'Band Latin fusion cerca voce femminile. Capacità di improvvisazione, range mezzo-soprano. Frequenti date nei club romani.', tags: ['Latin', 'Mezzo-soprano', 'Live'], city: '📍 Roma, RM' },
  { icon: '🎹', role: 'Cercasi Tastierista', band: 'Neon Collective — Bologna', desc: 'Progetto synth-pop cerca tastierista / sintetizzatore. Studio di registrazione disponibile, produzione brani originali.', tags: ['Synth-pop', 'Studio', 'Originali'], city: '📍 Bologna, BO' },
  { icon: '🎺', role: 'Cercasi Trombettista', band: 'Ska Rebels — Napoli', desc: 'Band ska/punk cerca fiato. Energia live fondamentale. Tour Italia estate 2025 già pianificato. Cachet garantito.', tags: ['Ska', 'Tour', 'Cachet'], city: '📍 Napoli, NA' },
  { icon: '🎻', role: 'Cercasi Violinista', band: 'Crossover Ensemble — Firenze', desc: 'Progetto post-classico cerca violinista. Unione di classico e elettronico. Concerti in teatri e spazi culturali.', tags: ['Post-classico', 'Teatri', 'Elettronico'], city: '📍 Firenze, FI' },
]

const collabs = [
  { category: 'Produzione', title: 'EP Primavera 2025', desc: 'Cerco producer e session musicians per registrare 5 brani originali in studio. Budget disponibile.', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80&auto=format&fit=crop', members: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60'], count: '3 interessati' },
  { category: 'Live Session', title: 'Sessioni Jazz Aperte', desc: 'Open jam session ogni giovedì sera al Bravo Caffè di Bologna. Tutti i livelli benvenuti, ambiente amichevole.', img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80&auto=format&fit=crop', members: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60', 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=60'], count: '12 partecipanti' },
  { category: 'Composizione', title: 'Colonna Sonora Corto', desc: 'Regista cerca musicisti per comporre la soundtrack di un cortometraggio. Stile ambient/cinematico.', img: 'https://images.unsplash.com/photo-1508973379184-7517410fb0bc?w=600&q=80&auto=format&fit=crop', members: ['https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=60', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60'], count: '2 interessati' },
]

const threads = [
  { icon: '💡', title: 'Contratti e tutele per i musicisti dal vivo: cosa sapere', meta: 'Aperto da Marco T. · 47 risposte', replies: '47', time: '2h fa' },
  { icon: '🎛️', title: 'Migliori PA portatili sotto i 1000€ per band rock', meta: 'Aperto da Sara V. · 31 risposte', replies: '31', time: '5h fa' },
  { icon: '📱', title: 'Come promuovere una band su Instagram nel 2025?', meta: 'Aperto da Admin · 89 risposte', replies: '89', time: 'Ieri' },
  { icon: '🗓️', title: 'Esperienze con i locali: condividete le vostre!', meta: 'Aperto da Giulia M. · 124 risposte', replies: '124', time: 'Lun' },
  { icon: '🎵', title: 'Dove registrare demo a Milano spendendo poco', meta: 'Aperto da Filippo R. · 22 risposte', replies: '22', time: 'Dom' },
]

const chatCommunity = [
  { name: 'Marco Tamburi', preview: 'Quando fate la prossima prova?', time: '09:14', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop', active: true },
  { name: 'Sara Vinci', preview: 'Ho trovato un altro batterista!', time: 'Ieri', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80&auto=format&fit=crop' },
  { name: 'Gruppo Jazz MI', preview: 'Sessione confermata giovedì', time: 'Lun', img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=80&q=80&auto=format&fit=crop' },
]

export default function CommunityMusicisti() {
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
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80&auto=format&fit=crop')" }}
      >
        <div className="page-hero-overlay" />
        <div style={{ position: 'relative', zIndex: 1, padding: '0 40px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 12 }}>Community</span>
          <h1 style={{ fontSize: 'clamp(32px,5vw,58px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', margin: '0 0 14px' }}>Community Musicisti</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', maxWidth: 540, lineHeight: 1.7, margin: 0 }}>
            Trova i tuoi prossimi compagni di band, collabora su progetti musicali e partecipa alla comunità live italiana.
          </p>
        </div>
      </section>

      {/* Annunci Ricerca Componenti */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-section-title">Ricerca Componenti Mancanti</h2>
          <p className="page-section-subtitle">Annunci attivi di band che cercano musicisti — aggiornati oggi</p>
          <div className="announce-grid">
            {announcements.map((a, i) => (
              <div key={i} className="announce-card">
                <div className="announce-header">
                  <div className="announce-icon">{a.icon}</div>
                  <div className="announce-meta">
                    <p className="announce-role">{a.role}</p>
                    <p className="announce-band">{a.band}</p>
                  </div>
                </div>
                <p className="announce-desc">{a.desc}</p>
                <div className="announce-tags">
                  {a.tags.map(t => <span key={t} className="announce-tag">{t}</span>)}
                </div>
                <div className="announce-footer">
                  <span className="announce-city">{a.city}</span>
                  <button className="btn btn-primary btn-sm">Candidati</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborazioni Artistiche */}
      <section className="page-section page-section-gray">
        <div className="page-container">
          <h2 className="page-section-title">Collaborazioni Artistiche</h2>
          <p className="page-section-subtitle">Progetti aperti che cercano collaboratori</p>
          <div className="collab-grid">
            {collabs.map((c, i) => (
              <div key={i} className="collab-card">
                <img src={c.img} alt={c.title} className="collab-img" loading="lazy" />
                <div className="collab-body">
                  <p className="collab-category">{c.category}</p>
                  <h3 className="collab-title">{c.title}</h3>
                  <p className="collab-desc">{c.desc}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="collab-avatars">
                      {c.members.map((m, j) => (
                        <img key={j} src={`${m}&q=80&auto=format&fit=crop&face`} alt="" className="collab-avatar" />
                      ))}
                      <span className="collab-members">{c.count}</span>
                    </div>
                    <button className="btn btn-primary btn-sm">Partecipa</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum */}
      <section className="page-section">
        <div className="page-container">
          <h2 className="page-section-title">Forum</h2>
          <p className="page-section-subtitle">Discussioni attive nella community</p>
          <div className="forum-list">
            {threads.map((t, i) => (
              <div key={i} className="forum-thread">
                <div className="forum-thread-icon">{t.icon}</div>
                <div className="forum-thread-body">
                  <p className="forum-thread-title">{t.title}</p>
                  <p className="forum-thread-meta">{t.meta}</p>
                </div>
                <div className="forum-thread-stats">
                  <span className="forum-replies">{t.replies}</span>
                  <span className="forum-time">{t.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messaggistica */}
      <section className="page-section page-section-gray">
        <div className="page-container">
          <h2 className="page-section-title">Messaggistica</h2>
          <p className="page-section-subtitle">Chatta direttamente con altri musicisti</p>
          <div className="chat-container">
            <div className="chat-sidebar">
              <div className="chat-sidebar-header">Messaggi</div>
              {chatCommunity.map((u, i) => (
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
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80&auto=format&fit=crop" alt="Marco" />
                <div className="chat-header-info">
                  <h4>Marco Tamburi</h4>
                  <p>Online adesso</p>
                </div>
              </div>
              <div className="chat-messages">
                <div className="chat-msg">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80&auto=format&fit=crop" alt="" className="chat-msg-avatar" />
                  <div className="chat-bubble">Ciao! Ho visto il tuo annuncio per il batterista. Suono da 8 anni, ho esperienza con band rock.</div>
                </div>
                <div className="chat-msg me">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80&auto=format&fit=crop" alt="" className="chat-msg-avatar" />
                  <div className="chat-bubble">Perfetto Marco! Hai un video o un link al tuo profilo NexStage?</div>
                </div>
                <div className="chat-msg">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80&auto=format&fit=crop" alt="" className="chat-msg-avatar" />
                  <div className="chat-bubble">Sì, ti mando il link adesso. Quando fate la prossima prova? Sono libero nel weekend.</div>
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

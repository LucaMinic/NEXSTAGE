import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './pages.css'
import './registrazione.css'

// ─── Step indicator ───────────────────────────────────────────────────────────

const STEPS = [
  { num: 1, label: 'Ruolo' },
  { num: 2, label: 'Account' },
  { num: 3, label: 'Profilo' },
  { num: 4, label: 'Bio & Media' },
  { num: 5, label: 'Conferma' },
]

function StepBar({ current }) {
  return (
    <div className="stepbar">
      {STEPS.map((s, i) => (
        <div key={s.num} className="stepbar-item">
          <div className={`stepbar-circle ${current > s.num ? 'done' : current === s.num ? 'active' : ''}`}>
            {current > s.num ? '✓' : s.num}
          </div>
          <span className={`stepbar-label ${current === s.num ? 'stepbar-label-active' : ''}`}>{s.label}</span>
          {i < STEPS.length - 1 && (
            <div className={`stepbar-line ${current > s.num ? 'stepbar-line-done' : ''}`} />
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Step 1 — Ruolo ───────────────────────────────────────────────────────────

const roles = [
  {
    id: 'band',
    icon: '🎸',
    title: 'Band Musicale',
    subtitle: '18–35 anni',
    desc: 'Siete un gruppo musicale emergente che cerca visibilità, locali e nuove opportunità di suonare dal vivo.',
    tags: ['Profilo band', 'Portfolio & video', 'Calendario live', 'Ricerca locali'],
  },
  {
    id: 'locale',
    icon: '🏛️',
    title: 'Locale / Organizzatore',
    subtitle: '25–60 anni',
    desc: 'Gestisci un pub, club o sala concerto e cerchi artisti affidabili per le tue serate di musica dal vivo.',
    tags: ['Scheda locale', 'Pubblica richieste', 'Gestisci candidature', 'Contatto diretto'],
  },
  {
    id: 'musicista',
    icon: '🎵',
    title: 'Musicista Singolo',
    subtitle: 'Tutti i ruoli',
    desc: 'Sei un chitarrista, batterista, cantante o tastierista in cerca di una band o di collaborazioni musicali.',
    tags: ['Profilo strumento', 'Ricerca band', 'Annunci', 'Community'],
  },
]

function Step1({ data, setData, next }) {
  return (
    <div className="reg-step">
      <h2 className="reg-step-title">Scegli il tuo ruolo</h2>
      <p className="reg-step-sub">Come vuoi utilizzare NexStage?</p>
      <div className="role-grid">
        {roles.map(r => (
          <button
            key={r.id}
            className={`role-card ${data.tipo === r.id ? 'role-card-active' : ''}`}
            onClick={() => setData(d => ({ ...d, tipo: r.id }))}
          >
            <span className="role-icon">{r.icon}</span>
            <div className="role-badge-row">
              <span className="role-title">{r.title}</span>
              <span className="role-subtitle">{r.subtitle}</span>
            </div>
            <p className="role-desc">{r.desc}</p>
            <ul className="role-tags">
              {r.tags.map(t => <li key={t}>{t}</li>)}
            </ul>
            {data.tipo === r.id && <div className="role-check">✓</div>}
          </button>
        ))}
      </div>
      <div className="reg-footer">
        <button className="btn btn-primary btn-lg" onClick={next} disabled={!data.tipo}>
          Continua →
        </button>
      </div>
    </div>
  )
}

// ─── Step 2 — Account ─────────────────────────────────────────────────────────

function Step2({ data, setData, next, prev }) {
  const label = data.tipo === 'band' ? 'Nome della band' : data.tipo === 'locale' ? 'Nome del locale' : 'Nome e Cognome'
  const placeholder = data.tipo === 'band' ? 'Es. The Rising Tide' : data.tipo === 'locale' ? 'Es. Circolo Magnolia' : 'Es. Marco Rossi'

  const update = (k) => (e) => setData(d => ({ ...d, [k]: e.target.value }))
  const ok = data.nomeAccount && data.email && data.password && data.password.length >= 8 && data.password === data.confirmPassword

  return (
    <div className="reg-step">
      <h2 className="reg-step-title">Crea il tuo account</h2>
      <p className="reg-step-sub">Inserisci le credenziali per accedere a NexStage</p>

      <div className="reg-form">
        <div className="reg-field">
          <label className="reg-label">{label}</label>
          <input className="reg-input" type="text" placeholder={placeholder} value={data.nomeAccount || ''} onChange={update('nomeAccount')} />
        </div>

        <div className="reg-field">
          <label className="reg-label">Indirizzo email</label>
          <input className="reg-input" type="email" placeholder="nome@esempio.com" value={data.email || ''} onChange={update('email')} />
        </div>

        <div className="reg-row">
          <div className="reg-field">
            <label className="reg-label">Password</label>
            <input className="reg-input" type="password" placeholder="Min. 8 caratteri" value={data.password || ''} onChange={update('password')} />
            {data.password && data.password.length < 8 && (
              <span className="reg-hint reg-hint-error">Almeno 8 caratteri</span>
            )}
            {data.password && data.password.length >= 8 && (
              <span className="reg-hint reg-hint-ok">✓ Password sicura</span>
            )}
          </div>
          <div className="reg-field">
            <label className="reg-label">Conferma password</label>
            <input className="reg-input" type="password" placeholder="Ripeti la password" value={data.confirmPassword || ''} onChange={update('confirmPassword')} />
            {data.confirmPassword && data.password !== data.confirmPassword && (
              <span className="reg-hint reg-hint-error">Le password non coincidono</span>
            )}
            {data.confirmPassword && data.password === data.confirmPassword && data.password.length >= 8 && (
              <span className="reg-hint reg-hint-ok">✓ Corrispondono</span>
            )}
          </div>
        </div>

        <div className="reg-field">
          <label className="reg-label">Numero di telefono <span className="reg-optional">(opzionale)</span></label>
          <input className="reg-input" type="tel" placeholder="+39 333 000 0000" value={data.telefono || ''} onChange={update('telefono')} />
        </div>

        <label className="reg-checkbox-row">
          <input type="checkbox" checked={data.termini || false} onChange={e => setData(d => ({ ...d, termini: e.target.checked }))} />
          <span>Accetto i <a href="#" className="reg-link">Termini di Servizio</a> e la <a href="#" className="reg-link">Privacy Policy</a></span>
        </label>
      </div>

      <div className="reg-footer">
        <button className="btn btn-outline btn-lg" onClick={prev}>← Indietro</button>
        <button className="btn btn-primary btn-lg" onClick={next} disabled={!ok || !data.termini}>
          Continua →
        </button>
      </div>
    </div>
  )
}

// ─── Step 3 — Profilo specifico ───────────────────────────────────────────────

const generiMusica = ['Rock / Alternativo', 'Pop', 'Jazz / Blues', 'Indie', 'Elettronico', 'Folk / Acustico', 'Hip-Hop / Rap', 'R&B / Soul', 'Metal', 'Classico', 'Latino', 'Altro']
const strumenti   = ['Chitarra elettrica', 'Chitarra acustica', 'Basso', 'Batteria', 'Tastiera / Piano', 'Voce', 'Violino', 'Tromba / Fiati', 'Sassofono', 'Synth / Produzione', 'Altro']
const tipiLocale  = ['Pub / Bar live', 'Club / Discoteca', 'Sala concerti', 'Teatro', 'Circolo culturale / Arci', 'Ristorante con musica', 'Festival / Open air', 'Altro']

function Step3({ data, setData, next, prev }) {
  const update = (k) => (e) => setData(d => ({ ...d, [k]: e.target.value }))

  const BandForm = () => (
    <>
      <div className="reg-row">
        <div className="reg-field">
          <label className="reg-label">Genere musicale principale</label>
          <select className="reg-input" value={data.genere || ''} onChange={update('genere')}>
            <option value="">Seleziona genere</option>
            {generiMusica.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="reg-field">
          <label className="reg-label">Numero di componenti</label>
          <select className="reg-input" value={data.componenti || ''} onChange={update('componenti')}>
            <option value="">Seleziona</option>
            {['1 (Solista)', '2 (Duo)', '3', '4', '5', '6+'].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>
      <div className="reg-row">
        <div className="reg-field">
          <label className="reg-label">Città / Area geografica</label>
          <input className="reg-input" type="text" placeholder="Es. Milano, Lombardia" value={data.citta || ''} onChange={update('citta')} />
        </div>
        <div className="reg-field">
          <label className="reg-label">Anni di attività</label>
          <select className="reg-input" value={data.anni || ''} onChange={update('anni')}>
            <option value="">Seleziona</option>
            {['Meno di 1 anno', '1–2 anni', '3–5 anni', '6–10 anni', 'Oltre 10 anni'].map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
      </div>
      <div className="reg-row">
        <div className="reg-field">
          <label className="reg-label">Durata set live standard</label>
          <select className="reg-input" value={data.durataSet || ''} onChange={update('durataSet')}>
            <option value="">Seleziona</option>
            {['30–45 minuti', '45–60 minuti', '60–75 minuti', '75–90 minuti', 'Oltre 90 minuti'].map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div className="reg-field">
          <label className="reg-label">Budget / Cachet minimo (€)</label>
          <input className="reg-input" type="text" placeholder="Es. 200" value={data.cachet || ''} onChange={update('cachet')} />
        </div>
      </div>
      <div className="reg-field">
        <label className="reg-label">Dotazione tecnica disponibile</label>
        <div className="reg-checkgroup">
          {['PA / Impianto audio', 'Luci da palco', 'Mixer FOH', 'Backline completo', 'Furgone / Trasporto'].map(item => (
            <label key={item} className="reg-check-item">
              <input type="checkbox" checked={(data.dotazione || []).includes(item)} onChange={e => {
                const cur = data.dotazione || []
                setData(d => ({ ...d, dotazione: e.target.checked ? [...cur, item] : cur.filter(x => x !== item) }))
              }} />
              {item}
            </label>
          ))}
        </div>
      </div>
    </>
  )

  const LocaleForm = () => (
    <>
      <div className="reg-row">
        <div className="reg-field">
          <label className="reg-label">Tipo di locale</label>
          <select className="reg-input" value={data.tipoLocale || ''} onChange={update('tipoLocale')}>
            <option value="">Seleziona tipologia</option>
            {tipiLocale.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div className="reg-field">
          <label className="reg-label">Capienza massima</label>
          <select className="reg-input" value={data.capienza || ''} onChange={update('capienza')}>
            <option value="">Seleziona</option>
            {['Fino a 50', '50–100', '100–250', '250–500', '500–1000', 'Oltre 1000'].map(c => <option key={c} value={c}>{c} persone</option>)}
          </select>
        </div>
      </div>
      <div className="reg-row">
        <div className="reg-field">
          <label className="reg-label">Città</label>
          <input className="reg-input" type="text" placeholder="Es. Milano, MI" value={data.citta || ''} onChange={update('citta')} />
        </div>
        <div className="reg-field">
          <label className="reg-label">Indirizzo</label>
          <input className="reg-input" type="text" placeholder="Via Roma 1" value={data.indirizzo || ''} onChange={update('indirizzo')} />
        </div>
      </div>
      <div className="reg-row">
        <div className="reg-field">
          <label className="reg-label">Partita IVA / Codice fiscale</label>
          <input className="reg-input" type="text" placeholder="IT00000000000" value={data.piva || ''} onChange={update('piva')} />
        </div>
        <div className="reg-field">
          <label className="reg-label">Serate live al mese</label>
          <select className="reg-input" value={data.serateAlMese || ''} onChange={update('serateAlMese')}>
            <option value="">Seleziona</option>
            {['1–2', '3–4', '5–8', '9–12', 'Oltre 12'].map(s => <option key={s} value={s}>{s} serate</option>)}
          </select>
        </div>
      </div>
      <div className="reg-field">
        <label className="reg-label">Generi musicali preferiti</label>
        <div className="reg-checkgroup">
          {['Rock / Alternativo', 'Jazz / Blues', 'Pop', 'Indie', 'Elettronico', 'Folk / Acustico'].map(g => (
            <label key={g} className="reg-check-item">
              <input type="checkbox" checked={(data.generiLocale || []).includes(g)} onChange={e => {
                const cur = data.generiLocale || []
                setData(d => ({ ...d, generiLocale: e.target.checked ? [...cur, g] : cur.filter(x => x !== g) }))
              }} />
              {g}
            </label>
          ))}
        </div>
      </div>
      <div className="reg-field">
        <label className="reg-label">Attrezzatura disponibile in loco</label>
        <div className="reg-checkgroup">
          {['Palco strutturato', 'PA / Impianto audio', 'Luci motorizzate', 'Mixer FOH', 'Camerino artisti', 'Parcheggio'].map(item => (
            <label key={item} className="reg-check-item">
              <input type="checkbox" checked={(data.attrezzatura || []).includes(item)} onChange={e => {
                const cur = data.attrezzatura || []
                setData(d => ({ ...d, attrezzatura: e.target.checked ? [...cur, item] : cur.filter(x => x !== item) }))
              }} />
              {item}
            </label>
          ))}
        </div>
      </div>
    </>
  )

  const MusistaForm = () => (
    <>
      <div className="reg-row">
        <div className="reg-field">
          <label className="reg-label">Strumento principale</label>
          <select className="reg-input" value={data.strumento || ''} onChange={update('strumento')}>
            <option value="">Seleziona strumento</option>
            {strumenti.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="reg-field">
          <label className="reg-label">Secondo strumento <span className="reg-optional">(opz.)</span></label>
          <select className="reg-input" value={data.strumento2 || ''} onChange={update('strumento2')}>
            <option value="">Nessuno</option>
            {strumenti.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div className="reg-row">
        <div className="reg-field">
          <label className="reg-label">Genere musicale preferito</label>
          <select className="reg-input" value={data.genere || ''} onChange={update('genere')}>
            <option value="">Seleziona genere</option>
            {generiMusica.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
        <div className="reg-field">
          <label className="reg-label">Anni di esperienza</label>
          <select className="reg-input" value={data.esperienzaAnni || ''} onChange={update('esperienzaAnni')}>
            <option value="">Seleziona</option>
            {['Meno di 1 anno', '1–2 anni', '3–5 anni', '6–10 anni', 'Oltre 10 anni'].map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
      </div>
      <div className="reg-row">
        <div className="reg-field">
          <label className="reg-label">Città / Area</label>
          <input className="reg-input" type="text" placeholder="Es. Roma, Lazio" value={data.citta || ''} onChange={update('citta')} />
        </div>
        <div className="reg-field">
          <label className="reg-label">Livello tecnico</label>
          <select className="reg-input" value={data.livello || ''} onChange={update('livello')}>
            <option value="">Seleziona</option>
            {['Principiante', 'Amatoriale', 'Intermedio', 'Avanzato', 'Professionale'].map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>
      <div className="reg-field">
        <label className="reg-label">Disponibilità</label>
        <div className="reg-checkgroup">
          {['Lunedì – Venerdì', 'Fine settimana', 'Solo serali', 'Tour / Trasferte', 'Studio di registrazione'].map(item => (
            <label key={item} className="reg-check-item">
              <input type="checkbox" checked={(data.disponibilita || []).includes(item)} onChange={e => {
                const cur = data.disponibilita || []
                setData(d => ({ ...d, disponibilita: e.target.checked ? [...cur, item] : cur.filter(x => x !== item) }))
              }} />
              {item}
            </label>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <div className="reg-step">
      <h2 className="reg-step-title">
        {data.tipo === 'band' ? 'Informazioni sulla band' : data.tipo === 'locale' ? 'Informazioni sul locale' : 'Informazioni da musicista'}
      </h2>
      <p className="reg-step-sub">Questi dati ci aiutano a trovare i match migliori per te</p>
      <div className="reg-form">
        {data.tipo === 'band' && <BandForm />}
        {data.tipo === 'locale' && <LocaleForm />}
        {data.tipo === 'musicista' && <MusistaForm />}
      </div>
      <div className="reg-footer">
        <button className="btn btn-outline btn-lg" onClick={prev}>← Indietro</button>
        <button className="btn btn-primary btn-lg" onClick={next}>Continua →</button>
      </div>
    </div>
  )
}

// ─── Step 4 — Bio & Media ─────────────────────────────────────────────────────

function Step4({ data, setData, next, prev }) {
  const update = (k) => (e) => setData(d => ({ ...d, [k]: e.target.value }))

  return (
    <div className="reg-step">
      <h2 className="reg-step-title">Bio & Media</h2>
      <p className="reg-step-sub">Racconta chi sei e aggiungi i tuoi canali social</p>
      <div className="reg-form">

        {/* Foto profilo */}
        <div className="reg-field">
          <label className="reg-label">Foto profilo {data.tipo === 'locale' ? '/ Logo locale' : data.tipo === 'band' ? '/ Logo band' : ''}</label>
          <div className="reg-upload-box">
            <div className="reg-upload-icon">📷</div>
            <p className="reg-upload-text">Trascina qui la tua foto o <span className="reg-link">sfoglia i file</span></p>
            <p className="reg-upload-hint">JPG, PNG o WebP · Max 5 MB · Dimensione consigliata 400×400 px</p>
          </div>
        </div>

        {/* Bio */}
        <div className="reg-field">
          <label className="reg-label">
            {data.tipo === 'band' ? 'Descrizione della band' : data.tipo === 'locale' ? 'Descrizione del locale' : 'Presentati alla community'}
            <span className="reg-char-count">{(data.bio || '').length}/400</span>
          </label>
          <textarea
            className="reg-input reg-textarea"
            maxLength={400}
            placeholder={
              data.tipo === 'band'
                ? 'Raccontate il vostro sound, la vostra storia, il vostro stile live...'
                : data.tipo === 'locale'
                ? 'Descrivi l\'atmosfera del locale, la storia, il tipo di eventi che organizzi...'
                : 'Presentati: strumento, esperienza, influenze musicali, cosa cerchi su NexStage...'
            }
            value={data.bio || ''}
            onChange={update('bio')}
          />
        </div>

        {/* Social */}
        <div className="reg-field">
          <label className="reg-label">Profilo Instagram</label>
          <div className="reg-input-prefix">
            <span className="reg-prefix">instagram.com/</span>
            <input className="reg-input reg-input-no-left" type="text" placeholder="tuoprofilo" value={data.instagram || ''} onChange={update('instagram')} />
          </div>
        </div>

        {data.tipo !== 'locale' && (
          <div className="reg-field">
            <label className="reg-label">
              {data.tipo === 'band' ? 'Spotify / YouTube' : 'Spotify / SoundCloud'}
            </label>
            <div className="reg-input-prefix">
              <span className="reg-prefix">🔗</span>
              <input className="reg-input reg-input-no-left" type="text" placeholder="Link al tuo profilo o canale..." value={data.spotify || ''} onChange={update('spotify')} />
            </div>
          </div>
        )}

        <div className="reg-field">
          <label className="reg-label">Sito web <span className="reg-optional">(opzionale)</span></label>
          <div className="reg-input-prefix">
            <span className="reg-prefix">🌐</span>
            <input className="reg-input reg-input-no-left" type="text" placeholder="www.tuosito.it" value={data.website || ''} onChange={update('website')} />
          </div>
        </div>

        {/* Notifiche */}
        <div className="reg-field">
          <label className="reg-label">Preferenze notifiche</label>
          <div className="reg-checkgroup">
            {['Nuovi match trovati', 'Richieste di contatto', 'Annunci nella mia area', 'Newsletter mensile', 'Aggiornamenti piattaforma'].map(item => (
              <label key={item} className="reg-check-item">
                <input type="checkbox" defaultChecked={item !== 'Newsletter mensile'} />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="reg-footer">
        <button className="btn btn-outline btn-lg" onClick={prev}>← Indietro</button>
        <button className="btn btn-primary btn-lg" onClick={next}>Conferma →</button>
      </div>
    </div>
  )
}

// ─── Step 5 — Conferma ────────────────────────────────────────────────────────

const tipoLabel = { band: 'Band Musicale', locale: 'Locale / Organizzatore', musicista: 'Musicista Singolo' }
const tipoIcon  = { band: '🎸', locale: '🏛️', musicista: '🎵' }

function Step5({ data }) {
  const navigate = useNavigate()

  return (
    <div className="reg-step reg-step-confirm">
      <div className="confirm-success-icon">🎉</div>
      <h2 className="reg-step-title">Benvenuto su NexStage!</h2>
      <p className="reg-step-sub">Il tuo account è stato creato con successo. Sei pronto a unirti alla community musicale italiana.</p>

      <div className="confirm-card">
        <div className="confirm-row">
          <span className="confirm-label">Tipo di profilo</span>
          <span className="confirm-value">{tipoIcon[data.tipo]} {tipoLabel[data.tipo]}</span>
        </div>
        <div className="confirm-row">
          <span className="confirm-label">Nome</span>
          <span className="confirm-value">{data.nomeAccount || '—'}</span>
        </div>
        <div className="confirm-row">
          <span className="confirm-label">Email</span>
          <span className="confirm-value">{data.email || '—'}</span>
        </div>
        {data.citta && (
          <div className="confirm-row">
            <span className="confirm-label">Città</span>
            <span className="confirm-value">📍 {data.citta}</span>
          </div>
        )}
        {(data.genere || data.tipoLocale || data.strumento) && (
          <div className="confirm-row">
            <span className="confirm-label">{data.tipo === 'musicista' ? 'Strumento' : 'Genere / Tipo'}</span>
            <span className="confirm-value">{data.genere || data.tipoLocale || data.strumento}</span>
          </div>
        )}
      </div>

      <div className="confirm-next-steps">
        <p className="confirm-next-title">Prossimi passi</p>
        <div className="confirm-steps-grid">
          {[
            { icon: '👤', title: 'Completa il profilo', desc: 'Aggiungi foto, video e altri dettagli' },
            { icon: '🔍', title: 'Esplora i match', desc: 'Scopri chi è compatibile con te' },
            { icon: '💬', title: 'Inizia a connetterti', desc: 'Contatta band, locali o musicisti' },
          ].map(s => (
            <div key={s.title} className="confirm-step-card">
              <span className="confirm-step-icon">{s.icon}</span>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="reg-footer reg-footer-center">
        <button className="btn btn-primary btn-lg" onClick={() => navigate('/')}>
          Entra nella piattaforma →
        </button>
        <button className="btn btn-ghost btn-md" onClick={() => navigate('/sistema-matching')}>
          Vedi i tuoi match
        </button>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Registrazione() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({ tipo: '', termini: false })

  const next = () => setStep(s => Math.min(s + 1, 5))
  const prev = () => setStep(s => Math.max(s - 1, 1))

  return (
    <div className="reg-page">
      <nav className="page-nav">
        <Link to="/" className="back-btn">← Torna alla Home</Link>
        <div className="page-nav-logo">
          <span className="logo-text">
            <span className="logo-nex">nex</span>
            <span className="logo-stage">stage</span>
          </span>
        </div>
      </nav>

      <div className="reg-wrapper">
        <div className="reg-card">
          <StepBar current={step} />
          <div className="reg-card-body">
            {step === 1 && <Step1 data={data} setData={setData} next={next} />}
            {step === 2 && <Step2 data={data} setData={setData} next={next} prev={prev} />}
            {step === 3 && <Step3 data={data} setData={setData} next={next} prev={prev} />}
            {step === 4 && <Step4 data={data} setData={setData} next={next} prev={prev} />}
            {step === 5 && <Step5 data={data} />}
          </div>
        </div>
      </div>
    </div>
  )
}

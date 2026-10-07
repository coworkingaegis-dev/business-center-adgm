import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { sections, services, planner, amenities, setupSteps, images, MAIN_SITE, BUSINESS } from '../data/content'

const aed = (n) => `AED ${n.toLocaleString('en-US')}`
const wa = (t) => `${BUSINESS.whatsapp}?text=${encodeURIComponent(t)}`

export function Intro() {
  return (
    <section className="intro sec" aria-labelledby="intro-title">
      <div className="wrap intro-grid">
        <Reveal variant="rise">
          <p className="kicker">At a glance</p>
          <h2 id="intro-title">What makes a good business center in ADGM?</h2>
          <p className="answer">
            A good business center in ADGM gives you three things: an address inside the Abu Dhabi Global Market
            jurisdiction, a lease ADGM will accept for your licence, and a furnished, serviced office you can use from
            day one. Aegis Coworking's business centre on Level 38 of Addax Tower, Al Reem Island, offers all three —
            from AED 1,000 a month.
          </p>
          <p>
            It is a business center Al Reem Island companies can register in and ADGM office space for rent without
            the fit-out: commercial office space ADGM licences accept, run by Aegis Coworking.
          </p>
          <p>
            As an ADGM business center, we keep office rental ADGM simple: a serviced office ADGM teams can lock,
            office space for rent in ADGM on 12–36 month leases, and a business centre ADGM founders can visit before
            they sign.
          </p>
        </Reveal>
        <nav className="toc" aria-label="On this page">
          <p>On this page</p>
          <ol>{sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`}><i>{String(i + 1).padStart(2, '0')}</i>{s.label}</a></li>)}</ol>
        </nav>
      </div>
    </section>
  )
}

// Rotating orbit of business-centre services; hover/focus a node to read it in the centre
export function Services() {
  const [sel, setSel] = useState(0)
  const [pause, setPause] = useState(false)
  const s = services[sel]
  useEffect(() => {
    if (pause || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setSel((i) => (i + 1) % services.length), 3600)
    return () => clearInterval(t)
  }, [pause])

  return (
    <section className="services sec" id="services" aria-labelledby="svc-title">
      <div className="wrap svc-grid">
        <div className="svc-copy">
          <p className="kicker kicker-light">Business centre services</p>
          <h2 id="svc-title">Everything an ADGM business centre should do, in one orbit</h2>
          <p>
            From a meeting room ADGM clients can visit to a serviced office in ADGM for twenty people — every
            service of our business centre in ADGM sits on one floor. Tap a service to explore it.
          </p>
          <ul className="svc-list">
            {services.map((x, i) => (
              <li key={x.id}>
                <button type="button" className={i === sel ? 'on' : ''} onClick={() => { setSel(i); setPause(true) }}>
                  <Icon name={x.icon} size={16} strokeWidth={1.8} />{x.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={`orbit ${pause ? 'is-paused' : ''}`} onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
          <div className="orbit-ring r1" aria-hidden="true" />
          <div className="orbit-ring r2" aria-hidden="true" />
          <div className="orbit-spin">
            {services.map((x, i) => (
              <button key={x.id} type="button" className={`node ${i === sel ? 'on' : ''}`} style={{ '--k': i, '--n': services.length }}
                onMouseEnter={() => setSel(i)} onFocus={() => { setSel(i); setPause(true) }} onClick={() => setSel(i)} aria-label={x.name}>
                <span className="node-in"><Icon name={x.icon} size={20} strokeWidth={1.7} /></span>
              </button>
            ))}
          </div>
          <div className="orbit-core" aria-live="polite">
            <div key={s.id} className="core-in">
              <p className="core-name">{s.name}</p>
              <p className="core-price">{s.price}</p>
              <p className="core-text">{s.text}</p>
              <a href={s.link} className="core-link">Explore {s.name.toLowerCase()} <Icon name="arrow" size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Marquee() {
  const row = [...amenities, ...amenities]
  return (
    <div className="marquee" aria-label="Included amenities">
      <ul className="mq-track">
        {row.map((a, i) => <li key={i} aria-hidden={i >= amenities.length}><Icon name="star" size={14} strokeWidth={1.6} />{a}</li>)}
      </ul>
    </div>
  )
}

// Budget planner: pick a space + team size, see the monthly figure animate
function useCountUp(target) {
  const [v, setV] = useState(target)
  const from = useRef(target)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(target); return }
    const start = from.current; const t0 = performance.now(); let raf
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / 600)
      const val = Math.round(start + (target - start) * (1 - Math.pow(1 - k, 3)))
      setV(val)
      if (k < 1) raf = requestAnimationFrame(tick); else from.current = target
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target])
  return v
}

export function Budget() {
  const [type, setType] = useState('desk')
  const [team, setTeam] = useState(2)
  const p = planner.find((x) => x.id === type)
  const quote = p.maxTeam && team > p.maxTeam
  const monthly = quote ? p.base : p.perPerson ? p.base * team : p.base
  const shown = useCountUp(monthly)
  const max = Math.max(...planner.map((x) => (x.perPerson ? x.base * team : x.base)))

  return (
    <section className="budget sec" id="budget" aria-labelledby="bud-title">
      <div className="wrap">
        <div className="head head-center">
          <p className="kicker">Budget planner</p>
          <h2 id="bud-title">Plan your office rental in ADGM in ten seconds</h2>
          <p>Choose a space and your team size. Prices are the published monthly rates at our business centre; ADGM government fees are separate.</p>
        </div>
        <Reveal className="bud-card" variant="unfold">
          <div className="bud-controls">
            <p className="bud-label" id="bud-type">Space</p>
            <div className="bud-types" role="radiogroup" aria-labelledby="bud-type">
              {planner.map((x) => (
                <button key={x.id} type="button" role="radio" aria-checked={type === x.id} className={type === x.id ? 'on' : ''} onClick={() => setType(x.id)}>{x.name}</button>
              ))}
            </div>
            <label className="bud-label" htmlFor="bud-team">Team size: <output>{team} {team === 1 ? 'person' : 'people'}</output></label>
            <input id="bud-team" type="range" min="1" max="10" value={team} onChange={(e) => setTeam(Number(e.target.value))} style={{ '--p': `${((team - 1) / 9) * 100}%` }} />
            <ul className="bud-bars" aria-hidden="true">
              {planner.map((x) => {
                const v = x.perPerson ? x.base * team : x.base
                return (
                  <li key={x.id} className={x.id === type ? 'on' : ''}>
                    <span className="bb-name">{x.name}</span>
                    <span className="bb-track"><span className="bb-fill" style={{ '--w': `${(v / max) * 100}%` }} /></span>
                    <span className="bb-val">{aed(v)}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="bud-result" aria-live="polite">
            <p className="br-kicker">{p.name}{p.perPerson ? ` × ${team}` : ''}</p>
            <p className="br-num">{p.id === 'private' || p.id === 'virtual' ? 'From ' : ''}<b>{aed(shown)}</b><span>/ month</span></p>
            <p className="br-note">{quote ? `For ${team} people we'll price a Medium or Large office by layout — ask for a quote.` : p.note}</p>
            <a className="btn btn-light" href={wa(`Hi Aegis, I'd like a ${p.name.toLowerCase()} for ${team} ${team === 1 ? 'person' : 'people'} at your business center in ADGM.`)} target="_blank" rel="noopener noreferrer">Get this on WhatsApp</a>
          </div>
        </Reveal>
        <p className="fine center">Need the cheapest desk space in ADGM? A day pass is AED 100. Ask us on WhatsApp for current offers.</p>
      </div>
    </section>
  )
}

// Sticky scroll steps: the active step lights up as you scroll
export function Setup() {
  const [active, setActive] = useState(0)
  const refs = useRef([])
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.dataset.i)) })
    }, { rootMargin: '-45% 0px -45% 0px' })
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])
  return (
    <section className="setup sec" id="setup" aria-labelledby="setup-title">
      <div className="wrap setup-grid">
        <div className="setup-sticky">
          <p className="kicker">Business setup office ADGM</p>
          <h2 id="setup-title">From first visit to your office for ADGM licence</h2>
          <p>An office for ADGM company setups, with ADGM office leasing handled by us. Five clear steps, with our team beside you.</p>
          <div className="setup-meter" aria-hidden="true"><span style={{ '--m': (active + 1) / setupSteps.length }} /></div>
          <p className="setup-count" aria-hidden="true"><b>{String(active + 1).padStart(2, '0')}</b> / {String(setupSteps.length).padStart(2, '0')}</p>
          <figure className="setup-photo">
            <img src={images.boardroomImg} alt="Boardroom at Aegis business center in ADGM, Addax Tower" width="1024" height="683" loading="lazy" decoding="async" />
          </figure>
        </div>
        <ol className="setup-steps">
          {setupSteps.map((s, i) => (
            <li key={s.title} data-i={i} ref={(el) => (refs.current[i] = el)} className={i === active ? 'on' : i < active ? 'done' : ''}>
              <span className="ss-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
          <li className="ss-end">
            <a className="btn btn-wine" href={wa('Hi Aegis, I want to set up my ADGM company at your business center.')} target="_blank" rel="noopener noreferrer">Start my setup</a>
          </li>
        </ol>
      </div>
    </section>
  )
}

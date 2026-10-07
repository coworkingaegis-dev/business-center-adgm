import { useEffect, useState } from 'react'
import heroSmall from '../assets/business-center-adgm-private-office-640.webp'
import { images, panels, BUSINESS } from '../data/content'

function Hero() {
  const [active, setActive] = useState(0)
  const [hold, setHold] = useState(false)

  // Auto-expand the next panel (paused while the visitor interacts)
  useEffect(() => {
    if (hold || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setActive((a) => (a + 1) % panels.length), 3800)
    return () => clearInterval(t)
  }, [hold])

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-ribbons" aria-hidden="true"><i /><i /></div>
      <div className="wrap hero-top">
        <div className="hero-left">
          <p className="hero-badge hl" style={{ '--d': 0 }}><span>ADGM</span>Business centre · Level 38, Addax Tower</p>
          <h1 id="hero-title" className="hero-title">
            <span className="ln"><span className="hl-line" style={{ '--d': 1 }}>A business center</span></span>
            <span className="ln"><span className="hl-line" style={{ '--d': 2 }}>in ADGM, built for</span></span>
            <span className="ln"><span className="hl-line accent" style={{ '--d': 3 }}>company setup</span></span>
          </h1>
        </div>
        <div className="hero-right hl" style={{ '--d': 4 }}>
          <p>
            From first enquiry to licence: pick a workspace, complete KYC, and we register your ADGM office lease
            on AccessRP so you can use the address in your licence application. Desks from <strong>AED 1,000</strong>,
            private offices from <strong>AED 4,500</strong> a month.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-wine" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to visit your business center in ADGM.')}`} target="_blank" rel="noopener noreferrer">Book a visit</a>
            <a className="btn btn-ghost" href="#budget">Plan my budget</a>
          </div>
        </div>
      </div>

      {/* Expanding panels gallery */}
      <div className="wrap">
        <ul className="panels hl" style={{ '--d': 5 }} onMouseLeave={() => setHold(false)}>
          {panels.map((p, i) => (
            <li key={p.id} className={`panel ${i === active ? 'is-open' : ''}`}
              onMouseEnter={() => { setHold(true); setActive(i) }}>
              <button type="button" className="panel-btn" onClick={() => { setHold(true); setActive(i) }} onFocus={() => { setHold(true); setActive(i) }}
                aria-expanded={i === active}>
                <img src={images[p.img]} alt={p.alt} width={p.w} height={p.h}
                  {...(i === 0 ? { srcSet: `${heroSmall} 640w, ${images[p.img]} 1200w`, sizes: '(max-width: 700px) 92vw, 760px', fetchPriority: 'high' } : { loading: 'lazy' })}
                  decoding="async" />
                <span className="panel-shade" aria-hidden="true" />
                <span className="panel-vert" aria-hidden="true">{p.label}</span>
                <span className="panel-info">
                  <small aria-hidden="true">0{i + 1}</small>
                  <b>{p.label}</b>
                  <em>{p.price}</em>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap hero-note hl" style={{ '--d': 6 }}>
        <p>
          Aegis Coworking is an ADGM business centre and business center Abu Dhabi companies use for flexible office
          space ADGM teams can grow in — an affordable business center ADGM founders can register in, from a flexi
          desk in ADGM to a furnished office ADGM teams lock at night.
        </p>
      </div>
    </section>
  )
}

export default Hero

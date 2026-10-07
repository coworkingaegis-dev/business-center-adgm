import { useEffect, useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { testimonials, guides, faqs, images, BUSINESS, MAIN_SITE } from '../data/content'
import { PhoneLink } from './Navbar'

const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('')
const N = testimonials.length

// 3D cylinder carousel of reviews
export function Reviews() {
  const [step, setStep] = useState(0)
  const [pause, setPause] = useState(false)
  const active = ((step % N) + N) % N
  useEffect(() => {
    if (pause || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setStep((s) => s + 1), 5200)
    return () => clearInterval(t)
  }, [pause])

  return (
    <section className="reviews sec" id="reviews" aria-labelledby="rev-title">
      <div className="wrap">
        <div className="head head-center">
          <p className="kicker">Member reviews</p>
          <h2 id="rev-title">Why companies choose our business centre in ADGM</h2>
          <p>Reviews as published on <a href={`${MAIN_SITE}/`}>aegiscoworking.ae</a>.</p>
        </div>
      </div>
      <div className="cyl" onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)}>
        <ul className="cyl-ring" style={{ '--rot': `${-step * (360 / N)}deg` }}>
          {testimonials.map((t, i) => (
            <li key={t.name} className={`cyl-card ${i === active ? 'on' : ''}`} style={{ '--k': i, '--n': N }} aria-hidden={i !== active}>
              <figure>
                <span className="cyl-q" aria-hidden="true">“</span>
                <blockquote><p>{t.quote}</p></blockquote>
                <figcaption>
                  <span className="cyl-av" aria-hidden="true">{initials(t.name)}</span>
                  <span><b>{t.name}</b><small>{t.role}</small></span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <div className="cyl-nav">
        <button type="button" onClick={() => { setStep((s) => s - 1); setPause(true) }} aria-label="Previous review"><Icon name="arrow" size={18} /></button>
        <span aria-live="polite">{String(active + 1).padStart(2, '0')} <i>/</i> {String(N).padStart(2, '0')}</span>
        <button type="button" onClick={() => { setStep((s) => s + 1); setPause(true) }} aria-label="Next review"><Icon name="arrow" size={18} /></button>
      </div>
    </section>
  )
}

export function Guides() {
  return (
    <section className="guides sec" id="guides" aria-labelledby="guides-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="kicker">From the Aegis blog</p>
            <h2 id="guides-title">Guides for choosing an ADGM business centre</h2>
          </div>
          <p>Costs, leases, virtual offices and setup — hover a card to flip it. <a href={`${MAIN_SITE}/blogs`}>All articles</a></p>
        </div>
        <ul className="flip-grid">
          {guides.map((g, i) => (
            <Reveal as="li" key={g.slug} variant="unfold" delay={(i % 3) * 90}>
              <a href={g.url} className="flip">
                <span className="flip-in">
                  <span className="flip-front">
                    <span className="f-tag">{g.tag}</span>
                    <span className="f-title">{g.title}</span>
                    <span className="f-n">{String(i + 1).padStart(2, '0')}</span>
                  </span>
                  <span className="flip-back" aria-hidden="true">
                    <span className="f-title">{g.title}</span>
                    <span className="f-go">Read the guide <Icon name="arrow" size={15} /></span>
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FAQ() {
  const half = Math.ceil(faqs.length / 2)
  const col = (list, off) => (
    <div className="faq-col">
      {list.map((f, i) => (
        <details key={f.q} open={i + off === 0 ? true : undefined}>
          <summary><h3>{f.q}</h3><span className="fq-ic" aria-hidden="true"><Icon name="plus" size={16} strokeWidth={2} /></span></summary>
          <div className="fq-body">
            <p>{f.a}</p>
            {f.link && <p><a href={f.link.url}>{f.link.text}</a></p>}
          </div>
        </details>
      ))}
    </div>
  )
  return (
    <section className="faq sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="head head-center">
          <p className="kicker">FAQ</p>
          <h2 id="faq-title">Business center ADGM questions</h2>
          <p>Prices, leases, registered offices and access. We usually reply on WhatsApp within the hour during business hours.</p>
        </div>
        <div className="faq-cols">
          {col(faqs.slice(0, half), 0)}
          {col(faqs.slice(half), half)}
        </div>
      </div>
    </section>
  )
}

export function Location() {
  const [mapOn, setMapOn] = useState(false)
  return (
    <section className="location sec" id="location" aria-labelledby="loc-title">
      <div className="wrap loc-grid">
        <div>
          <p className="kicker">Visit the business centre</p>
          <h2 id="loc-title">Business centre Al Reem Island, inside ADGM</h2>
          <p className="loc-sub">
            Whether you need a business centre Abu Dhabi clients can visit, ADGM office for rent, a private office ADGM
            team room or coworking space ADGM freelancers share, Level 38 of Addax Tower brings it together: a business
            address ADGM licences accept, a registered office ADGM companies can rely on, affordable office space ADGM
            budgets allow, and a dedicated desk ADGM founders call their own — even cheap desk space in ADGM by the day,
            if you only need to rent desk space in ADGM now and then.
          </p>
          <dl className="nap">
            <div><dt>Address</dt><dd>{BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.country}</dd></div>
            <div><dt>Phone</dt><dd><PhoneLink>{BUSINESS.phoneDisplay}</PhoneLink></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
            <div><dt>Tours</dt><dd>Monday–Friday, 9 AM–6 PM · 24/7 access for members</dd></div>
          </dl>
          <a className="btn btn-wine" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>
        <div className="map-frame">
          <div className="map">
            {mapOn ? (
              <iframe title="Map of Aegis business center, Addax Tower, Al Reem Island, ADGM" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            ) : (
              <button type="button" className="map-facade" onClick={() => setMapOn(true)}>
                <img src={images.receptionImg} alt="" width="900" height="675" loading="lazy" decoding="async" />
                <span className="map-pin" aria-hidden="true"><Icon name="pin" size={22} strokeWidth={1.8} /></span>
                <span className="map-tag"><b>Addax Tower, Office 3812</b><small>Al Reem Island, ADGM</small></span>
                <span className="map-load">Load interactive map</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap">
        <Reveal className="final-card" variant="unfold">
          <svg className="final-lines" viewBox="0 0 600 300" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 220 C150 120 300 300 600 140" /><path d="M0 260 C200 160 340 320 600 190" /><path d="M0 180 C120 80 320 260 600 90" />
          </svg>
          <p className="kicker kicker-light">Business center ADGM</p>
          <h2 id="final-title">Step into Level 38 this week</h2>
          <p>Book a visit to our business centre in ADGM, or get a video walkthrough on WhatsApp today.</p>
          <div className="final-actions">
            <a className="btn btn-light" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to visit the business center in ADGM.')}`} target="_blank" rel="noopener noreferrer">Book a visit</a>
            <PhoneLink className="btn btn-outline-light"><Icon name="phone" size={16} />{BUSINESS.phoneDisplay}</PhoneLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  )
}

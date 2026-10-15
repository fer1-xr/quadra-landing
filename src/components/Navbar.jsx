import React, { useEffect, useState } from 'react'
import { LOGIN_URL, SIGNUP_URL } from '../config'

const LINKS = [
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#precios', label: 'Precios' },
  { href: '#nosotros', label: 'Nosotros' },
]


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  // Estos enlaces llevan a la SaaS (otro dominio), por eso son <a> normales.
  const actions = (
    <>
      <a className="q-btn q-btn--ghost" href={LOGIN_URL}>Ingresar</a>
      <a className="q-btn q-btn--primary" href={SIGNUP_URL}>Probar gratis</a>
    </>
  )

  return (
    <header className={`q-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <nav className="q-nav__bar" aria-label="Principal">
        <a className="q-logo" href="#inicio" onClick={close}>
          <span className="q-logo__text">QUΔDRA</span>
        </a>

        <ul className="q-nav__links">
          {LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <div className="q-nav__actions">{actions}</div>

        <button
          type="button"
          className="q-nav__toggle"
          aria-expanded={open}
          aria-controls="q-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </nav>

      {open && (
        <div id="q-menu" className="q-nav__menu">
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
            ))}
          </ul>
          <div className="q-nav__menu-actions">{actions}</div>
        </div>
      )}
    </header>
  )
}

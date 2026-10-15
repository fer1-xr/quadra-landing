import React from 'react'
import { SIGNUP_URL } from '../config'

export default function HeroSection() {
  return (
    <section id="inicio" className="q-hero">
      <div className="q-hero__bg"></div>
      <div className="q-hero__overlay"></div>
      <div className="q-hero__content">
        <div className="q-hero__inner">
          <h1 className="q-hero__title">
            Reportes contables automatizados
          </h1>
          <p className="q-hero__sub">
            Automatizamos los procesos contables y financieros repetitivos para que profesionales y empresas reduzcan horas de trabajo manual, disminuyan errores y obtengan información confiable, trazable y disponible para tomar decisiones.
          </p>
          <div className="q-hero__cta">
            <a className="q-btn q-btn--primary q-btn--lg" href={SIGNUP_URL}>
              Probar gratis
            </a>
            <a className="q-btn q-btn--ghost q-btn--lg" href="#como-funciona">
              Ver cómo funciona →
            </a>
          </div>
          <p className="q-hero__footer">No requiere tarjeta de crédito • Acceso inmediato</p>
        </div>
      </div>
    </section>
  )
}

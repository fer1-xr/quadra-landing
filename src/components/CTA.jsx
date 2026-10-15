import React from 'react'
import { SIGNUP_URL } from '../config'

export default function CTA() {
  return (
    <section className="q-cta-final">
      <div className="q-container">
        <div className="q-cta-final__content">
          <h2>¿Listo para simplificar tus conciliaciones?</h2>
          <p>Comienza tu prueba gratuita de 14 días hoy. No requiere tarjeta de crédito.</p>
          <a href={SIGNUP_URL} className="q-btn q-btn--primary q-btn--lg q-cta-final__btn">
            Probar gratis ahora
          </a>
          <p className="q-cta-final__subtext">o contáctanos para una demostración personalizada</p>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { SIGNUP_URL } from '../config'

const plans = [
  {
    name: 'Básico',
    price: '100.000',
    period: ' Gs/mes',
    description: 'Para contadores independientes',
    features: [
      'Hasta 8 conciliaciones/mes',
      '4 Conciliaciones RG90 + 4 Bancarias',
      '1 usuario',
      '1 uso por cada calculadora/mes',
      'Reportes en Excel',
      'Soporte vía WhatsApp',
      'Historial de 3 meses'
    ],
    cta: 'Comenzar',
    highlight: false
  },
  {
    name: 'Profesional',
    price: '250.000',
    period: ' Gs/mes',
    description: 'Para estudios contables',
    features: [
      'Hasta 18 conciliaciones/mes',
      '9 Conciliaciones RG90 + 9 Bancarias',
      '2 usuarios',
      '3 usos por cada calculadora/mes',
      'Reportes en Excel',
      'Soporte prioritario vía WhatsApp',
      'Historial de 8 meses',
      'Cálculos de finiquitos y activos fijos'
    ],
    cta: 'Comenzar ahora',
    highlight: true
  },
  {
    name: 'Contador Senior',
    price: '600.000',
    period: ' Gs/mes',
    description: 'Para empresas y contadores senior',
    features: [
      'Todo ilimitado',
      'Usuarios ilimitados',
      'Conciliaciones ilimitadas (RG90, Bancarias)',
      'Usos ilimitados de calculadoras',
      'Reportes en Excel avanzados',
      'Soporte prioritario vía WhatsApp',
      'Historial ilimitado',
      'Acceso a todas las funciones'
    ],
    cta: 'Contactar ventas',
    highlight: false
  }
]

export default function Pricing() {
  return (
    <section id="precios" className="q-pricing">
      <div className="q-container">
        <div className="q-pricing__header">
          <h2 className="q-pricing__title">Planes simples y transparentes</h2>
          <p className="q-pricing__subtitle">
            Sin sorpresas. Cancela en cualquier momento. Todos los planes incluyen 14 días de prueba gratis.
          </p>
        </div>

        <div className="q-pricing__grid">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`q-pricing-card ${plan.highlight ? 'q-pricing-card--featured' : ''}`}
            >
              {plan.highlight && <div className="q-pricing-card__badge">Más popular</div>}

              <h3 className="q-pricing-card__name">{plan.name}</h3>
              <p className="q-pricing-card__desc">{plan.description}</p>

              <div className="q-pricing-card__price">
                <span className="q-pricing-card__amount">{plan.price}</span>
                <span className="q-pricing-card__period">{plan.period}</span>
              </div>

              <button className="q-btn q-btn--primary q-btn--lg q-pricing-card__cta">
                {plan.cta}
              </button>

              <div className="q-pricing-card__divider"></div>

              <ul className="q-pricing-card__features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="q-pricing-feature">
                    <span className="q-pricing-feature__icon">✓</span>
                    <span className="q-pricing-feature__text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="q-pricing__faq">
          <h3>Preguntas frecuentes sobre precios</h3>
          <div className="q-faq-items">
            <details className="q-faq-item">
              <summary>¿Puedo cambiar de plan en cualquier momento?</summary>
              <p>Sí. Podés actualizar, downgrade o cancelar tu plan en cualquier momento sin penalidades.</p>
            </details>
            <details className="q-faq-item">
              <summary>¿Hay periodo de prueba?</summary>
              <p>Sí, 14 días completamente gratis sin necesidad de tarjeta de crédito. Acceso a todas las features.</p>
            </details>
            <details className="q-faq-item">
              <summary>¿Ofrecen descuentos por volumen?</summary>
              <p>Para estudios grandes y empresas, ofrecemos planes custom. Contactá al equipo de ventas.</p>
            </details>
            <details className="q-faq-item">
              <summary>¿Qué método de pago aceptan?</summary>
              <p>Tarjetas de crédito (Visa, Mastercard, Amex), transferencia bancaria y billetera virtual.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}

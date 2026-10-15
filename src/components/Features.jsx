import React from 'react'

const features = [
  {
    icon: '⚡',
    title: 'Carga de Comprobantes',
    description: 'Importa facturas PDF automáticamente. Ahorra horas de carga manual y reduce errores de datos.'
  },
  {
    icon: '✨',
    title: 'Conciliación RG90',
    description: 'Control automático contra tu Libro de Compras. Detecta diferencias al centavo al instante.'
  },
  {
    icon: '📊',
    title: 'Control Bancario',
    description: 'Concilia banco vs. contabilidad automáticamente. Mantén control financiero en tiempo real.'
  },
  {
    icon: '🛡️',
    title: 'Cálculos Precisos',
    description: 'Calculadoras basadas en leyes y decretos vigentes en Paraguay. 100% confiable y legal.'
  },
  {
    icon: '🔄',
    title: 'Finiquitos & Activos',
    description: 'Calcula liquidaciones laborales y ventas de activos fijos automáticamente según la ley.'
  },
  {
    icon: '🚀',
    title: 'Información Trazable',
    description: 'Obtén datos transparentes y confiables para tomar decisiones rápidas y fundamentadas.'
  }
]

export default function Features() {
  return (
    <section id="beneficios" className="q-features">
      <div className="q-container">
        <div className="q-features__header">
          <h2 className="q-features__title">¿Por qué elegir QUΔDRA?</h2>
          <p className="q-features__subtitle">
            Solución segura con cálculos precisos basados en leyes y decretos vigentes en Paraguay. Automatiza tus procesos contables sin errores.
          </p>
        </div>
        <div className="q-features__grid">
          {features.map((feature, idx) => (
            <div key={idx} className="q-feature-card">
              <div className="q-feature-card__icon">{feature.icon}</div>
              <h3 className="q-feature-card__title">{feature.title}</h3>
              <p className="q-feature-card__desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

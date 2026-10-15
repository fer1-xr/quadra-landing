import React, { useState, useEffect } from 'react'

const steps = [
  {
    number: '1',
    title: 'Carga de Comprobantes',
    description: 'Importa facturas PDF y archivos. Automático, sin errores de carga manual.'
  },
  {
    number: '2',
    title: 'Conciliación & Control',
    description: 'Procesa RG90, bancario y cálculos. Control automático contra tus registros.'
  },
  {
    number: '3',
    title: 'Información Trazable',
    description: 'Detecta diferencias al centavo. Información transparente y confiable.'
  },
  {
    number: '4',
    title: 'Exporta & Actúa',
    description: 'Reportes en Excel. Toma decisiones con datos precisos y actuales.'
  }
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="q-howitworks">
      <div className="q-container">
        <div className="q-howitworks__header">
          <h2 className="q-howitworks__title">Cómo funciona</h2>
          <p className="q-howitworks__subtitle">Cuatro pasos para automatizar tus procesos contables</p>
        </div>

        <div className="q-howitworks__grid">
          {steps.map((step, idx) => (
            <div key={idx} className="q-step-card">
              <div className="q-step-card__number">{step.number}</div>
              <h3 className="q-step-card__title">{step.title}</h3>
              <p className="q-step-card__desc">{step.description}</p>
              {idx < steps.length - 1 && (
                <div className="q-step-card__arrow">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

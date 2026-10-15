import React, { useState, useEffect } from 'react'

export default function About() {
  const [counter, setCounter] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="nosotros" className="q-about">
      <div className="q-container">
        <div className="q-about__content">
          <div className="q-about__text">
            <h2 className="q-about__title">Hecho por contadores, para contadores</h2>
            <p className="q-about__intro">
              QUΔDRA nace de la frustración de contadores que pasaban horas conciliando manualmente.
              Decidimos automatizar lo tedioso para que puedas enfocarte en lo que importa: el análisis y las decisiones.
            </p>

            <div className="q-about__stats">
              <div className="q-stat">
                <div className="q-stat__number">{counter}</div>
                <div className="q-stat__label">Conciliaciones en tiempo real</div>
              </div>
              <div className="q-stat">
                <div className="q-stat__number">342</div>
                <div className="q-stat__label">Usuarios activos</div>
              </div>
              <div className="q-stat">
                <div className="q-stat__number">99.9%</div>
                <div className="q-stat__label">Uptime garantizado</div>
              </div>
            </div>
          </div>

          <div className="q-about__testimonials">
            <h3 className="q-about__testimonials-title">Lo que dicen nuestros usuarios</h3>
            <div className="q-testimonials-list">
              <div className="q-testimonial">
                <div className="q-testimonial__rating">★★★★★</div>
                <p className="q-testimonial__text">
                  "Esto nos ahorra 4-5 horas por semana. Increíble herramienta."
                </p>
                <div className="q-testimonial__author">— Mariana G., Contadora independiente</div>
              </div>
              <div className="q-testimonial">
                <div className="q-testimonial__rating">★★★★★</div>
                <p className="q-testimonial__text">
                  "La precisión es impresionante. Encontró errores que nosotros habríamos pasado por alto."
                </p>
                <div className="q-testimonial__author">— Roberto T., Estudio contable</div>
              </div>
              <div className="q-testimonial">
                <div className="q-testimonial__rating">★★★★★</div>
                <p className="q-testimonial__text">
                  "Los reportes son claros y profesionales. Mis clientes quedaron impresionados."
                </p>
                <div className="q-testimonial__author">— Carla L., Asesor fiscal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

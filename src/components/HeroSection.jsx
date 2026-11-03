import React, { useEffect, useState } from 'react'
import { SIGNUP_URL } from '../config'

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const video = document.getElementById('demo-video')
    if (!video) return

    const handleLoadedData = () => setVideoReady(true)
    const handleError = () => {
      if (video) video.style.display = 'none'
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              video.play().catch(() => {})
            } else {
              video.pause()
            }
          })
        },
        { threshold: 0.25 }
      )
      io.observe(video)
      return () => io.disconnect()
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <section id="inicio" className="q-hero-new">
      <div className="q-hero-new__grid-bg"></div>

      <div className="q-hero-new__wrap">
        <span className="q-hero-new__badge">
          <span className="q-hero-new__dot"></span>
          Hecho para contadores paraguayos
        </span>

        <h1 className="q-hero-new__title">
          Conciliá tu <span className="q-hero-new__grad">RG90</span> con el Libro de Compras en segundos
        </h1>

        <p className="q-hero-new__lead">
          QUΔDRA cruza automáticamente el Reporte RG90 de Marangatú con tu Libro de Compras
          y detecta cada discrepancia, columna por columna: RUC, comprobante, fecha, base imponible
          e IVA. Sin planillas manuales, sin errores escondidos, listo para exportar a Excel.
        </p>

        <div className="q-hero-new__ctas">
          <a href={SIGNUP_URL} className="q-hero-new__btn q-hero-new__btn--primary">
            Probar gratis
          </a>
          <a href="#demo" className="q-hero-new__btn q-hero-new__btn--ghost">
            Ver cómo funciona
          </a>
        </div>
        <p className="q-hero-new__note">
          Sin tarjeta de crédito · Carga tu archivo y obtené resultados al instante
        </p>

        <div className="q-hero-new__player" id="demo">
          <div className="q-hero-new__player-bar">
            <span></span>
            <span></span>
            <span></span>
            <div className="q-hero-new__player-title">QUΔDRA · Conciliación RG90</div>
          </div>

          <div className="q-hero-new__mock" aria-hidden="true">
            <div className="q-hero-new__scan"></div>
            <div className="q-hero-new__mock-head">
              <h3>Conciliación · Octubre 2026</h3>
              <span className="q-hero-new__chip">2 discrepancias</span>
            </div>
            <table className="q-hero-new__table">
              <thead>
                <tr>
                  <th>RUC</th>
                  <th>Comprobante</th>
                  <th className="q-hero-new__hide-sm">Fecha</th>
                  <th className="q-hero-new__num">RG90</th>
                  <th className="q-hero-new__num">Libro</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="q-hero-new__row">
                  <td>80012345-6</td>
                  <td>001-001-0000123</td>
                  <td className="q-hero-new__hide-sm">02/10/2026</td>
                  <td className="q-hero-new__num">1.250.000</td>
                  <td className="q-hero-new__num">1.250.000</td>
                  <td className="q-hero-new__status q-hero-new__ok">✓ Coincide</td>
                </tr>
                <tr className="q-hero-new__row q-hero-new__flag">
                  <td>80098765-4</td>
                  <td>001-002-0000045</td>
                  <td className="q-hero-new__hide-sm">05/10/2026</td>
                  <td className="q-hero-new__num">480.000</td>
                  <td className="q-hero-new__num">408.000</td>
                  <td className="q-hero-new__status q-hero-new__diff">⚠ Dif. 72.000</td>
                </tr>
                <tr className="q-hero-new__row">
                  <td>80044321-0</td>
                  <td>001-001-0000131</td>
                  <td className="q-hero-new__hide-sm">09/10/2026</td>
                  <td className="q-hero-new__num">315.000</td>
                  <td className="q-hero-new__num">315.000</td>
                  <td className="q-hero-new__status q-hero-new__ok">✓ Coincide</td>
                </tr>
                <tr className="q-hero-new__row q-hero-new__flag">
                  <td>80071122-8</td>
                  <td>001-003-0000012</td>
                  <td className="q-hero-new__hide-sm">14/10/2026</td>
                  <td className="q-hero-new__num">2.100.000</td>
                  <td className="q-hero-new__num">—</td>
                  <td className="q-hero-new__status q-hero-new__diff">⚠ Falta en libro</td>
                </tr>
              </tbody>
            </table>
            <div className="q-hero-new__foot">
              <span>Registros analizados <b>1.284</b></span>
              <span>Tiempo de conciliación <b>3,2 s</b></span>
              <span>Exportación <b>Excel</b></span>
            </div>
          </div>

          <video
            id="demo-video"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className={videoReady ? 'q-hero-new__video q-hero-new__video--ready' : 'q-hero-new__video'}
          >
            <source src="/demo-quadra.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

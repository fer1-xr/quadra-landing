import React from 'react'
import { LOGIN_URL, SIGNUP_URL } from '../config'

export default function Footer() {
  return (
    <footer className="q-footer">
      <div className="q-container">
        <div className="q-footer__content">
          <div className="q-footer__section">
            <h4 className="q-footer__title">QUΔDRA</h4>
            <p className="q-footer__desc">
              Conciliación automática inteligente para contadores.
            </p>
            <div className="q-footer__socials">
              <a href="#" title="Facebook" aria-label="Facebook">f</a>
              <a href="#" title="Instagram" aria-label="Instagram">📷</a>
              <a href="#" title="LinkedIn" aria-label="LinkedIn">in</a>
              <a href="mailto:contacto@quadra.com.py" title="Email" aria-label="Email">✉</a>
            </div>
          </div>

          <div className="q-footer__section">
            <h5 className="q-footer__heading">Producto</h5>
            <ul>
              <li><a href="#como-funciona">Cómo funciona</a></li>
              <li><a href="#precios">Precios</a></li>
              <li><a href="#beneficios">Características</a></li>
              <li><a href="#">Roadmap</a></li>
            </ul>
          </div>

          <div className="q-footer__section">
            <h5 className="q-footer__heading">Empresa</h5>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="q-footer__section">
            <h5 className="q-footer__heading">Legal</h5>
            <ul>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Política de cookies</a></li>
              <li><a href="#">Seguridad</a></li>
            </ul>
          </div>

          <div className="q-footer__section q-footer__section--cta">
            <h5 className="q-footer__heading">Comienza ahora</h5>
            <a href={SIGNUP_URL} className="q-btn q-btn--primary q-btn--lg">Prueba gratis</a>
            <p className="q-footer__text-small">
              ¿Ya tienes cuenta? <a href={LOGIN_URL} className="q-footer__link">Inicia sesión</a>
            </p>
          </div>
        </div>

        <div className="q-footer__bottom">
          <p>&copy; 2026 QUΔDRA. Todos los derechos reservados.</p>
          <p className="q-footer__made-with">
            Hecho con ❤️ para contadores
          </p>
        </div>
      </div>
    </footer>
  )
}

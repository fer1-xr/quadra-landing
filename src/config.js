// Único lugar donde se define a dónde apuntan los botones hacia la SaaS.
// Se cambia con la variable VITE_APP_URL (archivo .env o panel de Vercel).
const APP_URL = (import.meta.env.VITE_APP_URL || 'http://localhost:5173').replace(/\/$/, '')

export const LOGIN_URL = `${APP_URL}/login`
export const SIGNUP_URL = `${APP_URL}/login?registro=1`

# QUΔDRA — Landing (sitio público)

Proyecto independiente de la SaaS. Los botones "Ingresar" y "Probar gratis"
llevan a la SaaS usando la variable `VITE_APP_URL`.

## Correr en tu PC
1. `npm install`
2. Copiá `.env.example` a `.env` (el valor por defecto sirve para desarrollo)
3. `npm run dev` → http://localhost:5174
   (La SaaS debe estar corriendo en http://localhost:5173)

## Publicar
- Hosting: Vercel (framework Vite, se detecta solo)
- Variable de entorno en Vercel: `VITE_APP_URL` = URL pública de la SaaS

## Estructura
- `src/config.js`  → a dónde apuntan los botones hacia la SaaS
- `src/components/Navbar.jsx` → menú flotante
- `src/App.jsx` → secciones de la página (se completan por fases)
- `src/styles/landing.css` → estilos y tokens de diseño

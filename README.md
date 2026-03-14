# ADEEMA

Landing institucional de ADEEMA desarrollada con React, Vite y Tailwind CSS.

## Scripts

- `npm run dev`: inicia el entorno local.
- `npm run build`: genera la build de producción en `dist`.
- `npm run lint`: ejecuta ESLint.
- `npm run preview`: sirve la build local para validación final.

## Publicación en GitHub Pages

El repositorio queda preparado para deploy automático con GitHub Actions.

### Habilitación inicial

1. Entrar a `Settings > Pages` del repositorio.
2. En `Build and deployment`, elegir `GitHub Actions`.
3. Hacer push a `main`.

### Publicación automática

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, instala dependencias con `npm ci`, corre `npm run build` y publica `dist/` en GitHub Pages.

### URL pública esperada

Si el repositorio sigue siendo `Nuhe/adeema`, la web quedará disponible en:

`https://nuhe.github.io/adeema/`

## Notas de deploy

- `vite.config.js` usa `base: '/adeema/'`, necesario para que assets y rutas estáticas funcionen en GitHub Pages.
- Antes de publicar cambios futuros conviene correr `npm run lint` y `npm run build`.

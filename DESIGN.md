---
name: ASITI
description: Sitio de ASITI, comunidad tecnológica de Huehuetenango; el afiche del congreso 2026 hecho página.
colors:
  cyan: "#1cc9dc"
  on-cyan: "#16233a"
  purple-ink: "#5c237a"
  purple-deep: "#44155d"
  indigo: "#241539"
  grad: "linear-gradient(135deg, #2b79a6 0%, #3f66a0 34%, #4a5497 60%, #5c237a 100%)"
  sky: "#e9f6fa"
  sky-2: "#dbe8f6"
  white: "#ffffff"
  text: "#2b2340"
  text-2: "#463c5e"
  muted: "#5f5675"
  foot-text: "#cfc3de"
typography:
  display:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline-section:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.6vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.3
  title-card:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  stat:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1
    fontFeature: "tnum"
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  lead:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.65
  caption:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  focus: "4px"
  skip: "8px"
  button: "16px"
  panel: "18px"
  card: "22px"
  name-box: "0.3em"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  container: "1180px"
  section: "clamp(4rem, 9vw, 7rem)"
  hero: "clamp(3.5rem, 8vw, 6rem)"
  split-gap: "clamp(2rem, 5vw, 4rem)"
  nav-height: "68px"
  card-pad: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.purple-ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "0.75rem 1.5rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.purple-deep}"
    textColor: "{colors.white}"
  button-small:
    backgroundColor: "{colors.purple-ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "0.55rem 1.1rem"
    height: "42px"
  button-vote:
    backgroundColor: "{colors.purple-ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "0.7rem 1.6rem 0.7rem 1.2rem"
    height: "64px"
  chip-fact:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.indigo}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1rem 0.55rem 0.6rem"
  chip-fact-icon:
    backgroundColor: "{colors.purple-ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
    size: "34px"
  pill-topic:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.indigo}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.95rem"
  tag-pending:
    backgroundColor: "{colors.white}"
    textColor: "{colors.indigo}"
    rounded: "{rounded.pill}"
    padding: "0.05rem 0.55rem"
  agenda-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "1.1rem 1.4rem"
  name-box:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.on-cyan}"
    typography: "{typography.display}"
    rounded: "{rounded.name-box}"
    padding: "0.12em 0.5em 0.08em"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "1.75rem"
  card-soft:
    backgroundColor: "{colors.sky}"
    rounded: "{rounded.card}"
    padding: "clamp(1.75rem, 4vw, 2.5rem)"
  event-row:
    backgroundColor: "{colors.white}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "1.1rem 1.4rem"
  social-button:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.purple-ink}"
    rounded: "{rounded.circle}"
    size: "46px"
  social-button-hover:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.white}"
  nav-link:
    textColor: "{colors.indigo}"
    typography: "{typography.label}"
  input-footer:
    textColor: "{colors.white}"
    rounded: "{rounded.button}"
    padding: "0 1rem"
    height: "46px"
---

# Design System: ASITI

## Overview

**Creative North Star: "El afiche que convoca"**

El sistema es el afiche del congreso 2026 convertido en página: un hero con el degradado diagonal azul→morado del afiche y el titular en blanco, y debajo el resto en claro, con manchas y engrane del logo, retículas de puntos, titulares Poppins 800 en índigo y una caja cian con el nombre del evento. Es una marca de comunidad tecnológica: cercana, directa y con una sola acción grande a la vista.

La densidad es baja y aireada. Cada sección tiene un solo mensaje, alterna fondo blanco y celeste (`sky`) y se apoya en piezas redondeadas: píldoras, fichas con ícono en círculo azul, tarjetas de esquinas amplias y fotos circulares de personas reales. La profundidad viene de sombras suaves teñidas de azul, nunca de bordes duros.

Rechazos confirmados: el aspecto de mapa topográfico o geología (el usuario lo descartó por no parecer de tecnología) y el morado/rosa de la plantilla Colorlib, que solo sobrevive en las páginas archivadas (`2023.html`, `2025.html`, `flisol2026.html`). Ese morado de plantilla no tiene nada que ver con el morado del afiche 2026, que sí es de la campaña.

**Key Characteristics:**
- Degradado del afiche en el hero; blanco dominante en el resto; cian como acento y morado tinta para texto y botones.
- Una sola familia tipográfica: Poppins autoalojada (400 a 800).
- Formas redondeadas en todo: píldoras de 999px, tarjetas de 22px, botones de 16px, fotos circulares.
- Decoración tomada del afiche y del logo: manchas, engrane, puntos, subrayado curvo, chispas.
- Personas reales (ponentes 2025) como prueba, unidas como los nodos del logo.
- Movimiento mínimo: solo el engrane gira, muy lento, y se detiene con `prefers-reduced-motion`.

## Colors

Un azul de marca con su versión de tinta para texto, un azul marino para la voz y dos celestes para superficies; todo sobre blanco.

### Primary
- **Cian** (`cyan`): el acento del afiche. Caja del nombre del evento y botón del hero (siempre con `on-cyan` encima, 9.9:1), chispas, subrayado curvo, íconos de las fichas del hero, puntos de la red. Sobre blanco da 1.9:1: **nunca lleva texto encima ni se usa como texto**.
- **Morado tinta** (`purple-ink`): el morado del afiche, y la versión legible de la paleta. Botones fuera del hero, enlaces, horas del programa, años de eventos, cifras y anillo de foco. Sobre blanco 10.4:1, sobre `sky` 9.4:1; texto blanco encima 10.4:1.
- **Morado profundo** (`purple-deep`): solo el hover de los botones.

### Secondary
- **Índigo** (`indigo`): titulares, texto de navegación, texto de píldoras y fondo del pie de página. Sobre blanco 14.9:1.
- **Degradado** (`grad`): fondo del hero, a 135°, del azul del afiche al morado. Su punto más claro da 4.8:1 con blanco, de modo que el texto de cuerpo en blanco pasa AA en toda la superficie; el cian puro del afiche no se usa de fondo porque da 1.9:1.

### Neutral
- **Blanco** (`white`): fondo de página, hero, tarjetas y sección de contacto; texto sobre azul.
- **Celeste** (`sky`): fondo de secciones alternas, fichas, píldoras de temas, panel de la pregunta, tarjeta de patrocinio, botones de redes, borde de 5px de las fotos y relleno del engrane.
- **Celeste 2** (`sky-2`): pista de las barras, líneas de la red de ponentes, puntos de las retículas, punto secundario de la red.
- **Texto** (`text`): cuerpo de texto (12.94:1 sobre blanco).
- **Texto 2** (`text-2`): párrafos de entrada y lede (8.57:1 sobre blanco, 7.66:1 sobre `sky`).
- **Atenuado** (`muted`): metadatos, cargos, etiquetas de datos, fuentes (5.93:1 sobre blanco, 5.3:1 sobre `sky`).
- **Texto del pie** (`foot-text`): texto secundario sobre `navy` (8.56:1).
- Líneas: borde de tarjeta `rgba(2, 136, 206, 0.16)`, línea de navegación `rgba(19, 41, 75, 0.08)`, líneas del pie `rgba(255, 255, 255, 0.16)`, campo del pie `rgba(255, 255, 255, 0.06)`, navegación translúcida `rgba(255, 255, 255, 0.88)`.

### Named Rules
**The Ink-for-Text Rule.** El cian pinta superficies, acentos y decoración, nunca texto; todo texto de color y todo fondo con texto blanco usa morado tinta o el degradado. Piso de contraste del sistema: 4.5:1 para texto, 3:1 para texto grande y para gráficos que comunican.

**The Navy Voice Rule.** Sobre claro los titulares hablan en índigo; sobre el degradado, en blanco. El cian queda para la caja del nombre del evento, el botón del hero y las palabras que se resaltan.

**The Two-Logo Rule.** El logo azul va tal cual sobre fondos blancos o claros; sobre azul marino u otro fondo oscuro va la versión blanca (`img/asiti-logo-2026-white.webp`). Nunca se recolorea el logo.

## Typography

**Display Font:** Poppins (con system-ui, sans-serif)
**Body Font:** Poppins (con system-ui, sans-serif)

**Character:** Una sola geométrica redonda, como en el afiche: 800 apretado (-0.02em) para titulares con presencia de cartel, 400 a 600 para un texto amable y claro. Archivos woff2 autoalojados en `fonts/` con licencia OFL; se precargan 800 y 400.

### Hierarchy
- **Display** (800, clamp(2.75rem, 8vw, 5rem), 1): solo el nombre del evento dentro de la caja azul del hero.
- **Headline** (800, clamp(2rem, 5vw, 3.25rem), 1.08): la línea del hero bajo la caja, en azul marino.
- **Headline de sección** (800, clamp(2rem, 4.2vw, 3rem), 1.1): un `h2` por sección, con `text-wrap: balance`.
- **Title** (600, clamp(1.25rem, 2.6vw, 1.6rem), 1.3): la pregunta del sondeo y el correo de contacto.
- **Title de tarjeta** (800, 1.5rem): `h3` dentro de tarjetas; nombres de eventos y personas usan 1.125rem/1.0625rem con la misma familia.
- **Stat** (700, clamp(2.25rem, 5vw, 3rem), 1): cifras grandes en azul tinta; números tabulares en las barras.
- **Body** (400, 1rem, 1.65): texto corrido.
- **Lead** (400, 1.125rem, 1.65): entrada de sección y lede del hero, máximo 54 a 56ch, en `text-2`.
- **Label** (500 a 600, 0.9375rem): navegación, píldoras, metadatos, etiquetas de datos.
- **Caption** (0.8125rem): fuentes de datos y la línea pequeña del botón de voto.

### Named Rules
**The One Family Rule.** Todo es Poppins; la jerarquía sale del peso (800 / 700 / 600 / 500 / 400) y del tamaño, nunca de una segunda familia.

## Layout

Columna centrada de hasta 1180px con margen lateral `clamp(16px, 4vw, 40px)`. Secciones con relleno vertical `clamp(4rem, 9vw, 7rem)` que alternan blanco y `sky`. El patrón de contenido es el split: dos columnas `1.05fr 1fr` desde 900px (texto a la izquierda, tarjeta o gráfica a la derecha), una sola columna debajo, con espacio `clamp(2rem, 5vw, 4rem)`.

**Composición del hero.** Fondo con el degradado del afiche; decoración en blanco al 8–10 % de opacidad: mancha en la esquina superior izquierda (clamp(160px, 22vw, 320px), opacidad 0.95) y otra en el borde derecho inferior; el engrane del logo en `sky` (clamp(320px, 42vw, 620px)) asomando a la derecha; una retícula de puntos `sky-2` (círculos de 3px cada 24px) abajo a la izquierda. A la izquierda, el copy (máx. 760px): caja azul con el nombre del evento y chispas a su derecha; línea en azul marino con subrayado curvo azul bajo una palabra clave que nunca parte en dos; lede; fichas de fecha, horario y modalidad; botón de inscripción con nota de tiempo. A la derecha, desde 1040px, la red de ponentes: columnas `1.3fr 1fr`, una foto central grande y cuatro alrededor unidas por líneas `sky-2` de 3px, con dos puntos sueltos (uno azul, uno `sky-2`), como los nodos del logo. Bajo 700px las manchas se reducen (140px y 96px), los puntos suben a la esquina superior derecha y las chispas se ocultan.

La navegación es fija arriba (68px), blanca translúcida con desenfoque; los enlaces se ocultan bajo 860px y queda el logo (128px) con el botón pequeño de votar. La acción principal siempre está a un toque. Los anclajes compensan la barra con `scroll-padding-top: 84px`.

Puntos de quiebre: 520px (fichas y barras compactas, fotos en 2 columnas, botón de voto a todo el ancho), 700px (hero compacto), 860px (navegación), 900px (splits y pie a dos columnas), 1040px (red de ponentes visible).

Fuera del hero, la decoración se repite con moderación: retícula de puntos arriba a la derecha de una sección tintada y el engrane celeste asomando en la esquina inferior izquierda de contacto.

## Elevation & Depth

Superficies planas con sombras suaves, largas y teñidas de azul o azul marino, siempre con dispersión negativa para que la sombra quede debajo del objeto y no alrededor. No hay sombras duras ni desplazadas.

### Shadow Vocabulary
- **Brillo de botón** (`box-shadow: 0 14px 28px -14px rgba(2, 112, 173, 0.75)`): todos los botones.
- **Brillo de la caja del nombre** (`box-shadow: 0 20px 40px -24px rgba(2, 112, 173, 0.9)`): solo la caja del nombre del evento.
- **Tarjeta** (`box-shadow: 0 26px 50px -34px rgba(2, 90, 140, 0.55)`): tarjetas en reposo y filas de eventos en hover.
- **Foto en la red** (`box-shadow: 0 18px 36px -18px rgba(19, 41, 75, 0.6)`): fotos de la red de ponentes, con borde blanco de 5px.

### Named Rules
**The Blue Glow Rule.** Toda sombra está teñida del azul de la marca o del marino y cae hacia abajo; ninguna es gris neutro ni desplazada en diagonal.

## Shapes

Todo es redondeado, como el logo y el afiche. Píldoras completas (999px) para fichas, temas, etiquetas y pistas de barras; círculos para íconos de fichas, redes sociales y fotos de personas; 22px para tarjetas y filas; 18px para el panel de la pregunta; 16px para botones y campos; 0.3em para la caja del nombre. Las fotos de personas son círculos con borde de 5px (`sky` en la cuadrícula, blanco en la red). Las formas orgánicas (manchas) solo aparecen en los bordes del hero. Los íconos son SVG de trazo en retícula 24×24, trazo 1.8 (1.6 en el panel de pregunta), extremos redondeados.

## Components

### Buttons
Sólidos, generosos y con brillo azul; el botón es la acción del momento.
- **Shape:** esquinas suaves (16px), alto mínimo 48px.
- **Primary:** fondo azul tinta, texto blanco Poppins 600 1rem, relleno 0.75rem 1.5rem, ícono a 1.25em con 0.75rem de separación.
- **Hover / Focus:** fondo azul profundo y sube 2px con `cubic-bezier(0.16, 1, 0.3, 1)` en 0.2s; `:active` vuelve a 0. Foco global: contorno de 3px azul ASITI con separación de 3px.
- **Small:** 42px de alto, relleno 0.55rem 1.1rem, 0.9375rem; en la navegación y el pie.
- **Acción principal** (clase `btn--vote`): 64px de alto, 700 a 1.375rem, ícono de 34px separado por una línea vertical de 1.5px, y una línea pequeña (0.8125rem, 500) encima de la llamada. A todo el ancho bajo 520px.

### Chips
- **Fichas:** píldora `sky` con texto marino 600 y un ícono blanco dentro de un círculo azul tinta de 34px a la izquierda.
- **Temas:** píldora `sky` con texto marino 500 a 0.9375rem, sin borde.
- **Etiqueta "por decidir":** píldora blanca con borde punteado de 1px en el color del texto (marino), 0.75rem 600, junto a un dato pendiente. Sin uso mientras no haya datos sin confirmar.

### Cards / Containers
- **Corner Style:** 22px.
- **Background:** blanco; la tarjeta de patrocinio en contacto va en `sky` sin borde ni sombra.
- **Shadow Strategy:** sombra de tarjeta (ver Elevation & Depth).
- **Border:** 1px `rgba(2, 136, 206, 0.16)`.
- **Internal Padding:** 1.75rem; patrocinio clamp(1.75rem, 4vw, 2.5rem).
- **Lista de datos:** filas con etiqueta de 7rem en `muted` y valor marino 500, separadas por la línea de tarjeta; apiladas bajo 520px.

### Inputs / Fields
- **Style:** en el pie sobre marino: 46px de alto, 16px de radio, borde `rgba(255, 255, 255, 0.16)`, fondo `rgba(255, 255, 255, 0.06)`, texto blanco, placeholder en `foot-text`; el botón pequeño va al lado.
- **Focus:** el contorno global de 3px azul ASITI.

### Navigation
Barra fija de 68px, blanca al 88% con `saturate(1.4) blur(10px)` y línea inferior marina al 8%. Logo azul a 150px a la izquierda, enlaces marinos 500 a 0.9375rem que pasan a azul tinta en hover, y el botón pequeño de votar a la derecha. Bajo 860px solo quedan logo y botón.

### Fila del programa
Fila tarjeta de 22px en cuadrícula `4.75rem 76px 1fr`: hora en Poppins 700 1.25rem azul tinta con cifras tabulares, foto circular de 76px con borde `sky` de 3px (o círculo `sky` con iniciales o el engrane cuando no hay foto), título de la charla en Poppins 700 1.0625rem marino, ponente en 600 `text-2` y cargo con país en caption `muted`. Bajo 640px la hora pasa a su propia línea y la foto baja a 60px.

### Gráfica de barras
Tarjeta con título 600 marino, filas de nombre (8.5rem), pista `sky-2` de 10px en píldora con relleno azul ASITI proporcional (mínimo 6px) y número tabular a la derecha; fuente en caption `muted` al pie.

### Red de ponentes y cuadrícula de personas
La red (solo escritorio, decorativa, `aria-hidden`) repite la cuadrícula: fotos circulares reales unidas por líneas como los nodos del logo. La cuadrícula usa `auto-fit` de mínimo 170px, nombres en Poppins 1.0625rem marino y cargo en `muted`, centrados; dos columnas en celular con fotos de hasta 150px.

### Filas de eventos
Fila tarjeta de 22px: año en Poppins 700 1.5rem azul tinta, nombre y detalle, flecha azul a la derecha. En hover sube 2px, el borde pasa a azul ASITI y aparece la sombra de tarjeta (0.25s, misma curva).

### Redes sociales
Círculos `sky` de 46px con ícono de 21px en azul tinta; en hover, fondo azul ASITI e ícono blanco.

### Movimiento
El único movimiento ambiental es el engrane del hero: `rotate(360deg)` en 90s lineal e infinito. Las transiciones de estado duran 0.2 a 0.25s con `cubic-bezier(0.16, 1, 0.3, 1)`. Con `prefers-reduced-motion: reduce` se anulan todas las animaciones y transiciones (el engrane queda quieto) y el desplazamiento suave.

## Do's and Don'ts

### Do:
- **Do** dejar el degradado solo en el hero y alternar el resto entre blanco y `sky`, con titulares Poppins 800 en índigo.
- **Do** poner todo texto de color y todo fondo con texto blanco en morado tinta; reservar el cian para la caja del nombre, el botón del hero, puntos, subrayados y chispas.
- **Do** medir el contraste sobre el degradado antes de publicar: el texto de cuerpo en blanco necesita 4.5:1 contra el punto más claro del hero.
- **Do** mantener el piso de contraste: 4.5:1 para texto, 3:1 para gráficos que comunican.
- **Do** tomar la decoración del afiche y del logo (manchas en las esquinas, engrane celeste, retícula de puntos, subrayado curvo, chispas) y dejarla en los bordes, detrás del contenido y con `aria-hidden`.
- **Do** construir con las piezas existentes: botón azul tinta de 16px con brillo azul, fichas y píldoras `sky`, etiqueta punteada para lo pendiente, tarjetas blancas de 22px.
- **Do** mostrar personas reales en círculos con borde de 5px; nunca fotos de banco.
- **Do** dejar la acción del momento a un toque en la navegación y en el hero, a todo el ancho en celular.
- **Do** detener el engrane y toda transición con `prefers-reduced-motion`.
- **Do** usar el logo azul sobre fondos claros y el logo blanco sobre azul marino.

### Don't:
- **Don't** volver al aspecto de mapa topográfico, curvas de nivel o geología: ASITI es tecnología.
- **Don't** copiar estilos de `2023.html`, `2025.html` o `flisol2026.html`: ese morado y ese rosa son de la plantilla Colorlib, no de la campaña.
- **Don't** recolorear el logo azul ni ponerlo sobre fondos que no sean blancos o claros.
- **Don't** usar el cian para texto ni como fondo de texto (1.9:1 sobre blanco), ni empezar el degradado en el cian del afiche.
- **Don't** agregar una segunda familia tipográfica ni fuentes del sistema como display.
- **Don't** usar sombras grises, duras o desplazadas; ni esquinas rectas en botones, tarjetas o fichas.
- **Don't** agregar movimiento ambiental además del engrane.

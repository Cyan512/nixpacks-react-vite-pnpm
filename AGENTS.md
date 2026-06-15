# Proyecto: Escuela de Posgrado UNSAAC

## Objetivo del sistema
Desarrollar un sitio web institucional moderno para la Escuela de Posgrado UNSAAC, enfocado en informar, comunicar y mostrar programas académicos de forma clara y profesional.

---

# 🎨 Sistema de Diseño: Tipografía y Paleta de Colores "Editorial Warm"

El proyecto utiliza una combinación tipográfica híbrida y sofisticada junto con un enfoque estricto en tokens semánticos basados en `oklch` (Tailwind CSS v4). Queda estrictamente prohibido hardcodear valores hexadecimales directos en los componentes (como `bg-[#FDF9F5]`). En su lugar, se deben usar los tokens de interfaz o clases de opacidad sobre los colores base para mantener la coherencia y el soporte nativo de modo oscuro (`dark:`).

## 📌 Reglas de Fuentes y Textos

- **Títulos e Institucionales (H1, H2, H3):**
  - Utilizar obligatoriamente la clase `font-heading` (mapeada en el CSS a la fuente **Serif** del sistema: `var(--font-serif)`).
  - Combinar con pesos ligeros, mayúsculas sostenidas y tracking según la escala tipográfica obligatoria abajo.

- **Párrafos, Citas y Contenido General:**
  - Utilizar obligatoriamente la clase `font-sans` (mapeada a **'Geist Variable', sans-serif**).
  - Peso `font-light` combinado con `leading-relaxed` para máxima legibilidad.

- **Botones, Tags y Elementos de Interfaz (CTA):**
  - Utilizar `font-sans`, texto en mayúsculas (`uppercase`), tamaño `text-xs` y tracking `tracking-widest`.

---

## 📏 Escala tipográfica obligatoria

Cada tipo de elemento TIENE UN TAMAÑO FIJO. No se permite variar tamaños entre componentes del mismo tipo.

| Elemento | Clase exacta | Dónde se usa |
|---|---|---|
| H1 página (hero) | `font-heading text-4xl font-light uppercase tracking-wide sm:text-5xl` | Comunicados, ProcesoAdmision, ProgramList |
| H1 hero institucional | `font-heading text-4xl font-light uppercase tracking-wide sm:text-5xl lg:text-6xl` | HeroSection (única excepción) |
| H1 error/empty state | `font-heading text-4xl font-light uppercase tracking-wide sm:text-5xl` | "Comunicado no encontrado", "Programa no encontrado" |
| H2 sección Home | `font-heading text-3xl font-light uppercase tracking-wide sm:text-4xl` | RectorMessage, AdmissionCTA, LatestComunicados, FeaturedPrograms, StudentFAQ, AdmissionTimeline, ProcesoAdmision CTA |
| H3 card título | `font-heading text-lg font-light uppercase tracking-wide` | Card de noticia destacada, Card en Comunicados/ProgramList |
| H3 step título | `font-heading text-sm font-light uppercase tracking-wide` | Timeline step title |
| H4 card secundario | `font-heading text-xs font-light uppercase tracking-wide` | Noticia secundaria, eventos |
| Subtítulo sección (debajo H2) | `font-sans text-base font-light leading-relaxed text-muted-foreground` | Descripción debajo de H2 en secciones |
| Subtítulo hero (debajo H1) | `font-sans text-lg font-light leading-relaxed text-muted-foreground` | Debajo de H1 en HeroSection |
| Párrafo largo | `font-sans text-sm font-light leading-relaxed text-muted-foreground` | Cuerpo de texto, cards |
| Párrafo quote | `font-sans text-base font-light leading-relaxed text-muted-foreground` | Cita del rector, descripciones |
| Nombre autoridad | `font-heading text-lg` | "Dr. Eleazar Crucinta Ugarte" |
| Cargo autoridad | `font-sans text-xs uppercase tracking-widest text-muted-foreground/80` | "Rector de la UNSAAC" |
| Badge metadata | `font-sans text-xs uppercase tracking-widest` | Fechas, duración, modalidad |
| Nav link | `font-sans text-xs uppercase tracking-widest` | Desktop nav + mobile nav |
| Footer título sección | `font-heading text-xs font-light uppercase tracking-widest` | "Programas", "Información" |
| Footer link | `font-sans text-sm` | Links de programas/información |
| Footer copyright | `font-sans text-xs` | © año... |
| Step pill | `font-heading text-xs font-light` | Números de paso en timeline mobile |
| Nombre programa (card home) | `font-heading text-sm font-light uppercase tracking-wide` " `sm:text-xl sm:group-hover:text-2xl` | FeaturedPrograms mobile→desktop |
| Count programas | `font-sans text-xs font-light` " `sm:text-sm` | "12 programas disponibles" |
| Events date day | `font-heading text-2xl font-light` | Día numérico en sidebar eventos |
| Events date month | `font-sans text-xs font-light` | "JUL", "AGO" en sidebar eventos |

---

## 🚫 Prohibiciones de texto hardcodeado

- Prohibido usar `text-[10px]`, `text-[15px]`, `text-[0.8rem]` o cualquier `text-[X]` arbitrario.
- Solo usar tokens estándar: `text-xs` (12px), `text-sm` (14px), `text-base` (16px), `text-lg` (18px), `text-xl` (20px), `text-2xl` (24px), `text-3xl` (30px), `text-4xl` (36px), `text-5xl` (48px), `text-6xl` (60px).
- Si el diseño requiere un tamaño intermedio, ajustar al token más cercano.

---

## 🎨 Mapeo Semántico de la Paleta de Colores (Cálidos / Terracota)

Para recrear la estética minimalista, cálida y editorial del diseño guía, se deben utilizar las variables del tema de la siguiente manera:

| Elemento de Diseño | Equivalente Semántico en Código (Modo Claro) |
| :--- | :--- |
| **Fondos Principales** *(Fondo crema / #FDF9F5)* | `bg-background` o `bg-card` (para contenedores tipo tarjeta). |
| **Títulos Principales** *(Negro orgánico / #2D2B2A)* | `text-foreground` (utilizando la fuente `font-heading`) |
| **Textos y Párrafos** *(Gris tierra / #5A5451)* | `text-muted-foreground` (utilizando la fuente `font-sans`) |
| **Detalles y Arcos Decorativos** *(Rosa viejo / #EAD7CF)* | `bg-muted` o `bg-secondary` con opacidad sutil (Ej: `bg-muted/60` o `bg-primary/10`). |
| **Botones Principales (CTA)** *(Terracota suave / #D9B4A7)* | `bg-primary` con estados de hover controlados por opacidad (`hover:bg-primary/90`). |
| **Líneas y Bordes de Acento** *(Borde sutil / #EAD7CF)* | `border-border` o `border-primary/20` |

---

## 🔴 Reglas de color — usos y prohibiciones

| Token | Usar para | NO usar para |
|---|---|---|
| `bg-foreground` | ❌ | PROHIBIDO como fondo de cualquier elemento (card, sección, contenedor) |
| `text-foreground` | Texto de títulos, `font-heading` contenido | Texto secundario, texto sobre `bg-primary` |
| `text-muted-foreground` | Párrafos, descripciones, metadata | Títulos principales |
| `text-primary` | Texto de botones invertidos, enlaces "Leer más" | Párrafos largos |
| `bg-background` | Fondo de página, contenedores sin card | Fondos decorativos |
| `bg-card` | Fondos de cards (se hereda de shadcn Card) | Secciones CTA |
| `bg-primary` | Secciones CTA completas, botones primarios | Texto, fondos decorativos |
| `bg-primary-foreground` | Botones invertidos sobre `bg-primary` (color blanco/crema) | Fondos de sección |
| `bg-muted` | Fondos decorativos con opacidad | Fondos de botones primarios |
| `bg-muted/30` | Secciones con fondo suave alterno (FeaturedPrograms, AdmissionTimeline) | — |
| `bg-muted/50` | Footer, hover states de triggers | — |
| `bg-muted/60` | Badges de metadata, fondos placeholder | — |

---

## 🌓 Regla de Oro para el Modo Oscuro
Ningún componente debe quedar "bloqueado" en un color claro. Si un elemento decorativo (como el arco de fondo del rector) utiliza un tono cálido, en modo oscuro debe atenuarse usando clases de opacidad (`opacity-40 dark:opacity-10`) o mutar hacia el color de tarjeta (`bg-card`), asegurando una transición suave que no fatigue la vista del usuario y respete la estética limpia estilo *Notion / Vercel*.

---

## 🖼️ Regla de Imágenes Institucionales
- Usar `<img>` tag, nunca `background-image` CSS.
- El atributo `alt` es obligatorio y debe describir el contenido de la imagen.
- Para imágenes decorativas sin valor semántico, usar `alt=""`.

---

## 🎯 Regla de Hover States

Nunca usar `hover:underline` como hover state principal. Cada contexto tiene su clase específica:

| Contexto | Clase correcta | Ejemplo |
|---|---|---|
| Links de texto (nav, footer, "Leer más", "Volver") | `hover:text-foreground` | Header nav links, Footer links, "Ver programa" |
| Botón CTA primario (`bg-primary`) | `hover:bg-primary/90` | Botón primario por defecto (shadcn heredado) |
| Botón CTA invertido (`bg-primary-foreground`) | `hover:bg-primary-foreground/90` | Botón primario sobre fondo `bg-primary` |
| Botón outline sobre fondo primary | `hover:bg-primary-foreground/10` | Botón secundario en secciones CTA |
| Botón outline default | `hover:bg-muted` | Botón outline estándar (shadcn heredado) |
| Accordion trigger, nav triggers | `hover:bg-muted/50` / `dark:hover:bg-muted/20` | Accordion, Sheet trigger |
| Link variant (button, badge) | `hover:bg-muted` (NO `hover:underline`) | button variant="link", badge variant="link" |
| Card hover (elevación) | `hover:shadow-sm` o `hover:shadow-md` | Cards en Comunicados, ProgramList |

---

## 🖱️ Regla de Botones CTA

### Tamaño de texto obligatorio
- **Botones CTA** (`size="lg"`, `size="default"`, `size="sm"`): usar **`text-sm`** (14px) como mínimo.
- **`text-xs`** (12px) solo se permite en botones `size="icon"`, `size="icon-sm"` o badges/etiquetas.
- `text-xs` sobre un botón CTA genera texto desproporcionadamente pequeño e ilegible.

### Outline buttons sobre `bg-primary`
Cuando un `variant="outline"` se coloca dentro de una sección con fondo `bg-primary` (terracota, CTA sections), **siempre** agregar `bg-transparent` al className. Sin esto, el outline hereda `bg-background` (crema) del variant y el texto `text-primary-foreground` (crema) queda invisible sobre fondo crema.

```
// ❌ MAL — texto invisible (crema sobre crema)
<Button variant="outline" className="border-primary-foreground/30 text-primary-foreground ...">

// ✅ BIEN — fondo transparente, texto crema visible sobre bg-primary del padre
<Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground ...">
```

### Resumen rápido

| Contexto | Clase de texto | Clase de fondo del botón |
|---|---|---|
| Botón primario sobre `bg-primary` | `text-primary` | `bg-primary-foreground` |
| Botón outline sobre `bg-primary` | `text-primary-foreground` | **`bg-transparent`** + `border-primary-foreground/30` |
| Botón outline default (fondo claro) | `text-foreground` | `bg-background` (heredado del variant) |

---

## 📐 Regla de Layout Split (Secciones Divididas)
- Secciones con imagen + texto (RectorMessage, FAQ) usar grid `lg:grid-cols-12`.
- Distribución estándar: imagen 5 columnas (`lg:col-span-5`), texto 7 columnas (`lg:col-span-7`).
- En mobile ambas columnas apilan (la imagen arriba por defecto).

---

## 🎭 Regla de Elementos Decorativos
- Arcos, elipses, shapes decorativos de fondo: usar `bg-muted` con opacidad controlada.
- Modo claro: `opacity-60`.
- Modo oscuro: `dark:opacity-20` (nunca dejar opacidad fija que brille en oscuro).

---

## 👤 Regla de Nombres Propios Institucionales
- Nombres, cargos y firmas de autoridades (rector, directores, decanos): usar `font-heading`.
- El cargo debajo del nombre: `font-sans text-xs uppercase tracking-widest text-muted-foreground/80`.

---

## 📋 Patrón de sección CTA (obligatorio)

Toda sección CTA en el sitio debe seguir este patrón exacto:

```
<section className="bg-primary">
  <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
    <h2 className="font-heading text-3xl font-light uppercase tracking-wide text-primary-foreground sm:text-4xl">
      TÍTULO
    </h2>
    <p className="mx-auto mt-3 max-w-2xl font-sans text-base font-light leading-relaxed text-primary-foreground/80">
      DESCRIPCIÓN
    </p>
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Button asChild size="lg" className="bg-primary-foreground font-sans text-sm uppercase tracking-widest text-primary hover:bg-primary-foreground/90">
        <Link to="...">BOTÓN PRIMARIO</Link>
      </Button>
      <Button asChild variant="outline" size="lg" className="bg-transparent border-primary-foreground/30 font-sans text-sm uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground/10">
        <Link to="...">BOTÓN SECUNDARIO</Link>
      </Button>
    </div>
  </div>
</section>
```

Implementaciones actuales: `AdmissionCTA.tsx`, `ProcesoAdmision.tsx` (CTA final).

---

## 📛 Patrón de Badge

- Badge de fecha/metadata: `bg-muted/60 font-sans text-xs uppercase tracking-widest text-muted-foreground dark:bg-muted/20`
- Badge outline: `font-sans text-xs uppercase tracking-widest`
- Prohibido usar `text-[10px]` — siempre `text-xs`

---

## 🧩 Componentes shadcn/ui modificados

Los siguientes componentes base de shadcn/ui han sido personalizados para heredar los tokens de diseño del sistema:

### Accordion (`src/components/ui/accordion.tsx`)

| Elemento | Cambio aplicado |
| :--- | :--- |
| `AccordionTrigger` | `font-heading text-sm tracking-wide`, hover con `bg-muted/50` (claro) / `dark:bg-muted/20` (oscuro), íconos `ChevronDownIcon` / `ChevronUpIcon` |
| `AccordionContent` | `font-sans font-light leading-relaxed text-muted-foreground` |
| `AccordionItem` | `not-last:border-b border-border` |

**Regla de uso:** No es necesario agregar clases de tipografía manualmente al usar estos componentes.

### Card (`src/components/ui/card.tsx`)

| Elemento | Cambio aplicado |
| :--- | :--- |
| `CardTitle` | `font-heading text-base leading-snug font-medium` |
| `CardDescription` | `text-sm text-muted-foreground` |

**Regla de uso:** Los títulos dentro de Cards ya utilizan `font-heading` por defecto. Si se necesita una variante (como `font-light tracking-wide uppercase`), aplicar clases adicionales mediante `className`.

### Card Structure - ProgramList (`src/pages/ProgramList.tsx`)

**Patrón de card para listado de programas (`/:tipo`):**

| Elemento | Clase exacta | Descripción |
|---|---|---|
| Card wrapper | `group h-full overflow-hidden !pt-0 transition-shadow hover:shadow-md` | Card completo, envuelto en `<Link>` |
| Imagen placeholder | `relative aspect-video w-full bg-muted` | Área de imagen con position relative |
| Badge convocatoria | `absolute left-1/2 top-3 z-10 -translate-x-1/2 bg-primary font-sans text-xs uppercase tracking-widest text-primary-foreground` | Solo si `enConvocatoria === true` |
| CardTitle | `font-heading text-lg font-light uppercase tracking-wide` | Nombre del programa |
| CardDescription | `font-sans text-xs uppercase tracking-widest text-muted-foreground/80` | Nombre de la facultad |
| CardFooter | `border-t border-border/40 bg-transparent transition-colors duration-300 group-hover:border-primary/30` | Borde animado en hover |
| Línea izquierda | `h-px flex-1 origin-left scale-x-0 bg-primary/40 transition-transform duration-500 ease-out group-hover:scale-x-100` | Crece desde el centro |
| Texto CTA | `font-sans text-xs uppercase tracking-widest text-primary/60 transition-colors duration-300 group-hover:text-primary` | "Ver programa" |
| Línea derecha | `h-px flex-1 origin-right scale-x-0 bg-primary/40 transition-transform duration-500 ease-out group-hover:scale-x-100` | Crece desde el centro |

**Estructura de datos:**

```ts
{
  slug: string
  title: string           // Nombre del programa
  facultad: string        // Nombre de la facultad
  duration: string        // Duración (ej: "2 años")
  modality: string        // Modalidad (ej: "Presencial")
  description: string     // Descripción breve
  enConvocatoria: boolean // Si está en convocatoria activa
}
```

**Reglas de card para `/:tipo`:**
- Badge "En convocatoria": solo se muestra si `enConvocatoria === true`, centrado sobre la imagen con `absolute left-1/2 top-3 -translate-x-1/2`
- `CardTitle`: `font-heading text-lg font-light uppercase tracking-wide`
- `CardDescription` (facultad): `font-sans text-xs uppercase tracking-widest text-muted-foreground/80`
- `CardFooter`: animación de líneas que crecen desde el centro en hover (`scale-x-0 → scale-x-100`)
- El card completo debe ser clickeable (envuelto en `<Link>`)
- Hover state: `hover:shadow-md` (elevación)

### Card Structure - Comunicados (`src/pages/Comunicados.tsx`)

**Patrón de card para listado de comunicados (`/comunicados`):**

La página tiene un layout de grilla `lg:grid-cols-3`. Los comunicados ocupan `lg:col-span-2` y el sidebar de eventos la tercera columna.
El comunicado destacado (primer elemento) se muestra más grande que los secundarios.

**Card destacado (principal, más grande):**

| Elemento | Clase exacta | Descripción |
|---|---|---|
| Card wrapper | `flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md` | Card completo, envuelto en `<Link>` |
| Imagen | `relative h-48 overflow-hidden bg-muted md:h-56` | Imagen grande con gradiente overlay |
| Gradient overlay | `absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent` | Degradado sobre la imagen |
| Título (H3) | `font-heading text-lg font-light uppercase tracking-wide` | Título del comunicado |
| Fecha | `font-sans text-xs uppercase tracking-widest text-muted-foreground` | Fecha del comunicado |
| CTA | `inline-flex items-center gap-1 font-sans text-xs uppercase tracking-widest text-primary transition-colors hover:text-foreground` | "Leer más" con flecha |

**Card secundario (horizontal, más pequeño):**

| Elemento | Clase exacta | Descripción |
|---|---|---|
| Card wrapper | `flex overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md` | Card horizontal, envuelto en `<Link>` |
| Imagen | `w-1/3 shrink-0 bg-muted` | Imagen a la izquierda (33%) |
| Contenedor texto | `flex w-2/3 flex-col justify-between p-3` | Texto a la derecha (66%) |
| Fecha | `font-sans text-xs uppercase tracking-widest text-muted-foreground` | Fecha del comunicado |
| Título (H4) | `font-heading text-xs font-light uppercase tracking-wide line-clamp-2` | Título del comunicado |
| CTA | `mt-2 inline-flex items-center gap-1 font-sans text-xs uppercase tracking-widest text-primary transition-colors hover:text-foreground` | "Leer más" con flecha |

**Sidebar de eventos:**

| Elemento | Clase exacta | Descripción |
|---|---|---|
| Sidebar wrapper | `flex flex-col justify-between rounded-2xl bg-primary p-6 shadow-sm` | Contenedor con fondo primary |
| Título sección | `border-b border-primary-foreground/20 pb-3 font-heading text-lg font-light uppercase tracking-wide text-primary-foreground` | "Próximos eventos" |
| Día del evento | `font-heading text-2xl font-light text-primary-foreground` | Número del día |
| Mes del evento | `font-sans text-xs font-light text-primary-foreground/80` | Mes abreviado |
| Nombre evento | `font-heading text-xs font-light uppercase tracking-wide text-primary-foreground` | Título del evento |
| Metadata | `font-sans text-xs font-light text-primary-foreground/70` | Fecha y hora |
| Lugar | `font-sans text-xs font-light text-primary-foreground/60` | Ubicación |

**Estructura de datos:**

```ts
// Comunicado
{
  slug: string
  title: string    // Título del comunicado
  date: string     // Fecha de publicación (ej: "15 de junio, 2026")
  imagen: string   // URL de la imagen
  destacada?: boolean // Si es el comunicado principal
}

// Evento
{
  id: number
  dia: string      // Día numérico (ej: "15")
  mes: string      // Mes abreviado (ej: "JUL")
  titulo: string   // Título del evento
  fechaCompleta: string // Fecha completa
  hora: string     // Hora del evento
  lugar: string    // Ubicación
}
```

**Reglas de card para `/comunicados`:**
- El primer comunicado del array debe tener `destacada: true` para mostrarse más grande
- Los comunicados secundarios usan layout horizontal (imagen 1/3, texto 2/3) y se apilan verticalmente
- El sidebar de eventos usa `bg-primary` con textos en `text-primary-foreground`
- Fechas en `font-sans text-xs uppercase tracking-widest`
- Títulos siguen la escala tipográfica obligatoria (H3 destacado, H4 secundarios)

### Button (`src/components/ui/button.tsx`)

| Elemento | Cambio aplicado |
| :--- | :--- |
| `link` variant | `hover:bg-muted` (cambiado de `hover:underline`) |
| `sm` size | `text-xs` (cambiado de `text-[0.8rem]`) |

### Badge (`src/components/ui/badge.tsx`)

| Elemento | Cambio aplicado |
| :--- | :--- |
| `link` variant | `hover:bg-muted` (cambiado de `hover:underline`) |

### Sheet (`src/components/ui/sheet.tsx`)

| Elemento | Cambio aplicado |
| :--- | :--- |
| `SheetTitle` | `font-heading text-base font-medium text-foreground` |
| `SheetDescription` | `text-sm text-muted-foreground` |

---

## 📋 Convención para modificar componentes base shadcn/ui

1. Los componentes en `src/components/ui/` pueden modificarse para heredar los tokens de diseño (tipografía, colores, dark mode).
2. No eliminar props de accesibilidad (focus-visible, disabled, aria-*).
3. Preferir `hover:bg-muted/50` y `dark:bg-muted/20` para estados hover sobre `hover:underline`.
4. Mantener la estructura Radix UI original (Primitive.*).
5. Documentar en AGENTS.md cualquier modificación significativa a los componentes base.

---

## 🏠 Secciones del Home — orden y fondos

Orden exacto de secciones en `Home.tsx` y su fondo correspondiente:

| Sección | Fondo | Archivo |
|---|---|---|
| HeroSection | `relative overflow-hidden border-b` (imagen + gradiente overlay, sin bg extra) | `HeroSection.tsx` |
| RectorMessage | `bg-background` (sin clase de fondo en section) | `RectorMessage.tsx` |
| AdmissionCTA | `bg-primary` | `AdmissionCTA.tsx` |
| LatestComunicados | `bg-background` (sin clase de fondo en section) | `LatestComunicados.tsx` |
| FeaturedPrograms | `border-y bg-muted/30` | `FeaturedPrograms.tsx` |
| StudentFAQ | `bg-background` (sin clase de fondo en section) | `StudentFAQ.tsx` |

Patrón de layout de sección estándar:
```
<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
```

Padding: `py-16` siempre en secciones normales (hero usa `py-24 sm:py-32`).

---

# 🧭 Estructura de rutas del sistema

## 🏠 Inicio
- `/`
- Página principal del sistema institucional. Presenta información general, accesos rápidos y contenido destacado.

### Secciones:

- **Hero institucional**
  - Título principal de la Escuela de Posgrado UNSAAC.
  - Descripción breve institucional.
  - 1 botón principal (CTA): "Ver comunicados" ➔ Redirige a `/comunicados`.

- **Mensaje del Rector**
  - Imagen del rector, nombre, cargo y mensaje institucional completo.
  - Diseño de sección dividida (imagen a la izquierda con arco decorativo de fondo + texto a la derecha).

- **Ruta de admisión (CTA)**
  - Sección tipo CTA que invita a conocer el proceso de admisión completo.
  - Botón: "Inscribirme ahora" ➔ Redirige a `/proceso-admision`.

- **Últimos comunicados (Carrusel)**
  - Muestra los 4 comunicados más recientes en formato carrusel horizontal.
  - Cada card incluye: Título, Fecha, Resumen corto e Imagen.
  - Botón final: “Ver todos los comunicados” ➔ Redirige a `/comunicados`.

- **Programas destacados**
  - Sección con 4 cards principales: Maestrías, Doctorados, Residentado médico, Segundas especialidades.
  - Cada card incluye: Imagen de fondo completa (cover), nombre del tipo de programa y cantidad disponible.
  - Interacción: Click en card ➔ redirige a `/:tipo`.

- **Servicios al estudiante (FAQ)**
  - Imagen principal de la sección junto a una lista de consultas frecuentes en formato expandible (accordion).
  - Ejemplos: Consultas de matrícula, Pagos, Certificados, Requisitos, Soporte académico.

---

## 📢 Comunicados
- `/comunicados` ➔ Listado dinámico de todos los comunicados ordenados por fecha o relevancia.
- `/comunicados/:slug` ➔ Detalle extendido e individual de un comunicado específico accesible por slug.

---

## 📋 Proceso de Admisión
- `/proceso-admision` ➔ Página estática que muestra el timeline completo del proceso de admisión (Registro ➔ Inscripción ➔ Pago ➔ Examen ➔ Resultados).
- Incluye timeline zigzag en desktop y vertical en mobile.
- Al final incluye CTA con botones a convocatorias y programas.

---

## 🎓 Tipos de programas (rutas dinámicas)
El sistema **NO** utiliza una página estática `/programas`. Los tipos de programas son rutas dinámicas de primer nivel:
- `/:tipo` ➔ Listado de programas según el tipo seleccionado.
- Ejemplos válidos según categorías destacadas en la Home: `/maestrias`, `/doctorados`, `/residentado-medico`, `/segundas-especialidades`.

---

## 📄 Detalle de programa
- `/:tipo/:slug` ➔ Muestra el detalle completo, dinámico, escalable y reutilizable de un programa específico dependiendo de su categoría y su slug único.

---

## Stack tecnológico
* **Framework:** React + Vite
* **Lenguaje:** TypeScript
* **Gestor de paquetes:** pnpm
* **Estilos:** Tailwind CSS v4
* **Componentes UI:** shadcn/ui (radix-nova style)

---

## Estilo del sitio
* Diseño institucional moderno inspirado en SaaS limpios (estilo Vercel / Notion).
* Interfaz minimalista, ordenada y sin distracciones con alta legibilidad.
* Diseño 100% responsive (*mobile-first*).
* Uso de espacios amplios, márgenes limpios y jerarquía visual tipográfica clara.

---

## Reglas generales de desarrollo
* **Tipado estricto:** Nunca usar `any`.
* **Paradigma:** Componentes funcionales y Hooks en `PascalCase`.
* **Modularidad y Simplicidad:** Preferir componentes pequeños, reutilizables (SOLID y DRY), evitando lógica compleja dentro de los elementos puramente visuales.

---

## Arquitectura del proyecto
* `/pages` ➔ Páginas principales del sistema (Inicio, Comunicados, etc.).
* `/components` ➔ Componentes visuales reutilizables (Botones, Cards, Navbars).
* `/layouts` ➔ Estructuras base de las páginas (Layout institucional).
* `/hooks` ➔ Lógica y estado reutilizable.
* `/services` ➔ Consumo y llamadas a APIs externas.
* `/types` ➔ Tipos y contratos globales de TypeScript.

---

## Principios del sistema
* **Separación de responsabilidades:** Separar la lógica de negocio de la UI.
* **Mantenibilidad:** Estructura pensada para que el proyecto crezca de forma ordenada a largo plazo.
* **Enfoque institucional:** Identidad seria, académica y profesional (evitar un estilo marcadamente comercial o de startup agresiva).

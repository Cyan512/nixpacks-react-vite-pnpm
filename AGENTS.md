# Proyecto: Escuela de Posgrado UNSAAC

## Objetivo del sistema
Desarrollar un sitio web institucional moderno para la Escuela de Posgrado UNSAAC, enfocado en informar, comunicar y mostrar programas académicos de forma clara y profesional.

---

# 🎨 Sistema de Diseño: Tipografía y Paleta de Colores "Editorial Warm"

El proyecto utiliza una combinación tipográfica híbrida y sofisticada junto con un enfoque estricto en tokens semánticos basados en `oklch` (Tailwind CSS v4). Queda estrictamente prohibido hardcodear valores hexadecimales directos en los componentes (como `bg-[#FDF9F5]`). En su lugar, se deben usar los tokens de interfaz o clases de opacidad sobre los colores base para mantener la coherencia y el soporte nativo de modo oscuro (`dark:`).

## 📌 Reglas de Fuentes y Textos

- **Títulos Principales e Institucionales (H1, H2, H3):**
  - Utilizar obligatoriamente la clase `font-heading` (la cual está mapeada en el CSS a la fuente **Serif** del sistema: `var(--font-serif)`).
  - Para emular una estética elegante, limpia y de alta gama, combinar con pesos ligeros, tracking abierto o controlado y mayúsculas sostenidas según diseño: `font-heading font-light tracking-wide uppercase`.
  
- **Párrafos, Textos de Citas y Contenido General:**
  - Utilizar obligatoriamente la clase `font-sans` (mapeada a **'Geist Variable', sans-serif**).
  - Para el cuerpo de texto se prefiere un peso ligero o regular (`font-light` o `font-normal`) combinado con un interlineado cómodo (`leading-relaxed`) para máxima legibilidad.

- **Botones, Tags y Elementos de Interfaz (CTA):**
  - Utilizar `font-sans` (Geist), texto en mayúsculas (`uppercase`), tamaño reducido (`text-xs` o `text-sm`) y un tracking espaciado (`tracking-widest`) para denotar una estructura limpia y moderna.

---

## 🎨 Mapeo Semántico de la Paleta de Colores (Cálidos / Terracota)
Para recrear la estética minimalista, cálida y editorial del diseño guía, se deben utilizar las variables del tema de la siguiente manera:

| Elemento de Diseño | Equivalente Semántico en Código (Modo Claro) | Comportamiento en Modo Oscuro (`dark:`) |
| :--- | :--- | :--- |
| **Fondos Principales** *(Fondo crema / #FDF9F5)* | `bg-background` o `bg-card` (para contenedores tipo tarjeta). | Cambia automáticamente a `bg-background` u `bg-card` oscuro (`oklch(0.145 0 0)`). |
| **Títulos Principales** *(Negro orgánico / #2D2B2A)* | `text-foreground` (utilizando la fuente `font-heading`) | Cambia automáticamente a un blanco suave (`oklch(0.985 0 0)`). |
| **Textos y Párrafos** *(Gris tierra / #5A5451)* | `text-muted-foreground` (utilizando la fuente `font-sans`) | Pasa a un tono gris legible optimizado para pantallas oscuras. |
| **Detalles y Arcos Decorativos** *(Rosa viejo / #EAD7CF)* | `bg-muted` o `bg-secondary` con opacidad sutil (Ej: `bg-muted/60` o `bg-primary/10`). | Utilizar opacidades controladas (`dark:bg-muted/20`) para que los acentos no brillen en exceso. |
| **Botones Principales (CTA)** *(Terracota suave / #D9B4A7)* | `bg-primary` con estados de hover controlados por opacidad (`hover:bg-primary/90`). | El botón se adapta de forma nativa a `bg-primary` del modo oscuro, manteniendo la consistencia visual. |
| **Líneas y Bordes de Acento** *(Borde sutil / #EAD7CF)* | `border-border` o `border-primary/20` | Se adaptan al borde de contraste tenue del modo oscuro. |

---

## 🌓 Regla de Oro para el Modo Oscuro
Ningún componente debe quedar "bloqueado" en un color claro. Si un elemento decorativo (como el arco de fondo del rector) utiliza un tono cálido, en modo oscuro debe atenuarse usando clases de opacidad (`opacity-40 dark:opacity-10`) o mutar hacia el color de tarjeta (`bg-card`), asegurando una transición suave que no fatigue la vista del usuario y respete la estética limpia estilo *Notion / Vercel*.

---

# 🧭 Estructura de rutas del sistema

## 🏠 Inicio
- `/`
- Página principal del sistema institucional. Presenta información general, accesos rápidos y contenido destacado.

### Secciones:

- **Hero institucional**
  - Título principal de la Escuela de Posgrado UNSAAC.
  - Descripción breve institucional.
  - 1 botón principal (CTA): “Ver comunicados” ➔ Redirige a `/comunicados`.

- **Mensaje del Rector**
  - Imagen del rector, nombre, cargo y mensaje institucional completo.
  - Diseño de sección dividida (imagen a la izquierda con arco decorativo de fondo + texto a la derecha).

- **Ruta de admisión (Timeline)**
  - Sección tipo línea de tiempo (step-by-step) clara y visual, ya sea vertical u horizontal.
  - Explica el proceso de admisión: Registro ➔ Inscripción ➔ Pago ➔ Examen de admisión ➔ Resultados.

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

## 🎓 Tipos de programas (rutas dinámicas)
El sistema **NO** utiliza una página estática `/programas`. Los tipos de programas son rutas dinámicas de primer nivel:
- `/:tipo` ➔ Listado de programas según el tipo seleccionado.
- Ejemplos válidos según categorías destacadas: `/maestrias`, `/doctorados`, `/residentado-medico`, `/segundas-especialidades`.

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

## 🧩 Componentes shadcn/ui modificados

Los siguientes componentes base de shadcn/ui han sido personalizados para heredar los tokens de diseño del sistema:

### Accordion (`src/components/ui/accordion.tsx`)

| Elemento | Cambio aplicado |
| :--- | :--- |
| `AccordionTrigger` | `font-heading text-sm tracking-wide`, hover con `bg-muted/50` (claro) / `dark:bg-muted/20` (oscuro), íconos `ChevronDownIcon` / `ChevronUpIcon` |
| `AccordionContent` | `font-sans font-light leading-relaxed text-muted-foreground` |
| `AccordionItem` | `not-last:border-b border-border` |

**Regla de uso:** Al usar `<AccordionTrigger>` y `<AccordionContent>`, no es necesario agregar clases de tipografía manualmente. El componente ya hereda los tokens del sistema.

### Card (`src/components/ui/card.tsx`)

| Elemento | Cambio aplicado |
| :--- | :--- |
| `CardTitle` | `font-heading text-base leading-snug font-medium` |

**Regla de uso:** Los títulos dentro de Cards ya utilizan `font-heading` por defecto. Si se necesita una variante (como `font-light tracking-wide uppercase`), aplicar clases adicionales mediante `className`.

---

## 📋 Convención para modificar componentes base shadcn/ui

1. Los componentes en `src/components/ui/` pueden modificarse para heredar los tokens de diseño (tipografía, colores, dark mode).
2. No eliminar props de accesibilidad (focus-visible, disabled, aria-*).
3. Preferir `hover:bg-muted/50` y `dark:bg-muted/20` para estados hover sobre `hover:underline`.
4. Mantener la estructura Radix UI original (Primitive.*).
5. Documentar en AGENTS.md cualquier modificación significativa a los componentes base.

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
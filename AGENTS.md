# Proyecto: Escuela de Posgrado UNSAAS

## Objetivo del sistema
Desarrollar un sitio web institucional moderno para la Escuela de Posgrado UNSAAC, enfocado en informar, comunicar y mostrar programas académicos de forma clara y profesional.

---
# 🎨 Sistema de Diseño: Tipografía y Paleta de Colores "Editorial Warm"
El proyecto utiliza **Tailwind CSS v4** junto con la fuente **Geist** y un enfoque estricto en tokens semánticos basados en `oklch`. Queda prohibido hardcodear valores hexadecimales directos en los componentes (como `bg-[#FDF9F5]`). En su lugar, se deben usar los tokens de interfaz o clases de opacidad sobre los colores base para mantener la coherencia y el soporte nativo de modo oscuro (`dark:`).

## 📌 Reglas de Fuentes y Textos
- **Títulos Principales e Institucionales (H1, H2, H3):** - Utilizar obligatoriamente la clase `font-heading`.
  - Para emular una estética elegante, minimalista y tipo "editorial/SaaS", combinar con pesos ligeros y tracking ajustado: `font-light tracking-tight` o `font-extralight`.
  - Estilo de letra: Mayúsculas controladas (`uppercase`) según diseño de secciones como "Mensaje del Rector".
- **Párrafos, Textos de Bloque y Contenido General:**
  - Utilizar obligatoriamente la clase `font-sans` (mapeada a `Geist Variable`).
  - Peso regular o ligero: `font-normal` o `font-light` con un interlineado cómodo (`leading-relaxed`).
- **Botones, Tags y Elementos de Interfaz (CTA):**
  - Utilizar `font-sans`, texto en mayúsculas (`uppercase`), tamaño reducido (`text-xs` o `text-sm`) y tracking espaciado (`tracking-widest` o `tracking-wider`) para denotar modernidad.

---

## 🎨 Mapeo Semántico de la Paleta de Colores (Cálidos / Terracota)
Para recrear la estética minimalista, cálida y editorial del diseño guía, se deben utilizar las variables del tema de la siguiente manera:

| Elemento de Diseño | Equivalente Semántico en Código (Modo Claro) | Comportamiento en Modo Oscuro (`dark:`) |
| :--- | :--- | :--- |
| **Fondo General de Sección** *(Fondo crema / #FDF9F5)* | `bg-background` (que hereda el tono puro/claro base) o `bg-muted/30` para contrastar. | Cambia automáticamente a `bg-background` oscuro (`oklch(0.145 0 0)`). |
| **Títulos Principales** *(Negro orgánico / #2D2B2A)* | `text-foreground` | Cambia automáticamente a un blanco suave (`oklch(0.985 0 0)`). |
| **Textos y Párrafos** *(Gris tierra / #5A5451)* | `text-muted-foreground` | Pasa a un tono gris legible optimizado para pantallas oscuras. |
| **Detalles y Arcos Decorativos** *(Rosa viejo / #EAD7CF)* | `bg-muted` o `bg-secondary` con opacidad sutil (Ej: `bg-muted/60` o `bg-primary/10`). | Utilizar opacidades controladas (`dark:bg-muted/20`) para que el arco no brille en exceso sobre el fondo oscuro. |
| **Botones Principales (CTA)** *(Terracota suave / #D9B4A7)* | `bg-primary` con estados de hover controlados por opacidad (`hover:bg-primary/90`). | El botón se invierte de forma nativa a `bg-primary` del modo oscuro, manteniendo la consistencia de un sistema SaaS. |
| **Líneas y Bordes de Acento** *(Borde sutil / #EAD7CF)* | `border-border` o `border-primary/20` | Se adaptan al borde de contraste tenue del modo oscuro. |

---

## 🌓 Regla de Oro para el Modo Oscuro
Ningún componente debe quedar "bloqueado" en un color claro. Si un elemento decorativo (como el arco de fondo del rector) utiliza un tono cálido, en modo oscuro debe atenuarse usando clases de opacidad (`opacity-40 dark:opacity-10`) o mutar hacia el color de tarjeta (`bg-card`), asegurando una transición suave que no fatigue la vista del usuario y respete la estética limpia estilo *Notion / Vercel*.

---

# 🌓 Directrices de Color y Modo Oscuro (Tokens Oklch)
Queda prohibido hardcodear colores en hexadecimal (Ej: `bg-[#FDF9F5]`). Todos los componentes deben ser construidos utilizando los tokens semánticos definidos en el archivo de temas:
- **Fondos principales:** `bg-background` o `bg-card`.
- **Textos:** `text-foreground` para títulos y `text-muted-foreground` para descripciones/párrafos.
- **Detalles y Acentos:** Utilizar opacidades sobre los colores del sistema (Ej: `bg-muted/40`, `text-primary/10`) para elementos decorativos como arcos de fondo, siluetas o comillas de citas. Esto garantiza compatibilidad nativa con el modo oscuro (`dark:`).

---

# 🧭 Estructura de rutas del sistema

## 🏠 Inicio
- `/`
- Página principal del sistema institucional
- Presenta información general, accesos rápidos y contenido destacado

### Secciones:

- **Hero institucional**
  - Título principal de la Escuela de Posgrado UNSAAC
  - Descripción breve institucional
  - 1 botón principal (CTA)
  
  ✔ Botón:
  - “Ver comunicados”
  - Redirige a `/comunicados`

- **Mensaje del Rector**
  - Imagen del rector
  - Nombre del rector
  - Cargo
  - Mensaje institucional completo

  ✔ Diseño tipo card destacada o sección dividida (imagen + texto)

- **Ruta de admisión (Timeline)**

    Sección tipo línea de tiempo (step-by-step)
    
    Explica el proceso de admisión:
  - Registro
  - Inscripción
  - Pago
  - Examen de admisión
  - Resultados

  ✔ Formato visual tipo timeline vertical u horizontal  
  ✔ Cada paso debe ser claro y visual

- **Últimos comunicados (Carrusel)**
  - Muestra los 4 comunicados más recientes
  - Formato carrusel horizontal

  ✔ Cada card incluye:
  - Título
  - Fecha
  - Resumen corto
  - Imagen

  ✔ Botón final:
  - “Ver todos los comunicados”
  - Redirige a `/comunicados`

- **Programas destacados**

  Sección con 4 cards principales:
  - Maestrías
  - Doctorados
  - Residentado médico
  - Segundas especialidades
  
  ✔ Cada card incluye:
  - Imagen de fondo completa (cover)
  - Nombre del tipo de programa
  - Cantidad de programas disponibles
  
  ✔ Interacción:
  - Click en card → redirige a `/:tipo`

- **Servicios al estudiante (FAQ)**
  - Imagen principal de la sección
  - Lista de consultas frecuentes
  
  Ejemplos:
  - Consultas de matrícula
  - Pagos
  - Certificados
  - Requisitos
  - Soporte académico
  
  ✔ Formato tipo FAQ expandible (accordion)
  ✔ Diseño limpio e institucional
---

## 📢 Comunicados

- `/comunicados` → listado de todos los comunicados
- `/comunicados/:slug` → detalle de un comunicado específico

✔ Cada comunicado es una entidad individual accesible por slug  
✔ El listado debe ser dinámico y ordenado por fecha o relevancia

---

## 🎓 Tipos de programas (rutas dinámicas)

El sistema NO utiliza una página `/programas`.

Los tipos de programas son rutas dinámicas de primer nivel:

- `/:tipo`  
  → listado de programas según el tipo seleccionado

Ejemplos:
- `/maestrias`
- `/diplomados`
- `/especializaciones`

✔ Cada ruta representa una categoría principal de programas  
✔ No existe una página estática de “programas”  
✔ El sistema se organiza completamente por tipos dinámicos 

---

## 📄 Detalle de programa

- `/:tipo/:slug`

✔ Muestra el detalle completo de un programa específico  
✔ Depende del tipo (maestrías, diplomados, etc.) y su slug  
✔ Contenido dinámico, escalable y reutilizable  


---

## Stack tecnológico
* **Framework:** React + Vite
* **Lenguaje:** TypeScript
* **Gestor de paquetes:** pnpm
* **Estilos:** Tailwind CSS
* **Componentes UI:** shadcn/ui

---

## Estilo del sitio
* Diseño institucional moderno.
* Inspirado en SaaS limpios (estilo Vercel / Notion).
* Interfaz minimalista, ordenada y sin distracciones.
* Alta legibilidad y jerarquía visual clara.
* Diseño 100% responsive (*mobile-first*).
* Uso de espacios amplios, márgenes limpios y tipografía clara.

---

## Reglas generales de desarrollo
* **Tipado estricto:** Nunca usar `any`.
* **Paradigma:** Usar componentes funcionales y Hooks.
* **Nomenclatura:** Usar `PascalCase` para los nombres de los componentes.
* **Modularidad:** Preferir componentes pequeños y reutilizables.
* **Buenas prácticas:** Seguir los principios SOLID y mantener un código limpio/escalable.
* **Simplicidad:** Evitar lógica compleja o pesada dentro de los componentes visuales.

---

## Arquitectura del proyecto
* `/pages` ➔ Páginas principales del sistema (Inicio, Comunicados, etc.).
* `/components` ➔ Componentes visuales reutilizables (Botones, Cards, Navbars).
* `/layouts` ➔ Estructuras base de las páginas (Layout institucional, Layout limpio).
* `/hooks` ➔ Lógica y estado reutilizable.
* `/services` ➔ Consumo y llamadas a APIs externas.
* `/types` ➔ Tipos y contratos globales de TypeScript.

---

## Principios del sistema
* **Separación de responsabilidades:** Separar la lógica de negocio de la UI.
* **Máxima reutilización:** Evitar la duplicidad de código (*DRY - Don't Repeat Yourself*).
* **Mantenibilidad:** Estructura pensada para que el proyecto crezca de forma ordenada a largo plazo.
* **Enfoque institucional:** Identidad seria, académica y profesional (evitar un estilo marcadamente comercial o de startup agresiva).
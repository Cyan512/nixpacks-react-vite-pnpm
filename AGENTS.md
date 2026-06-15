# Proyecto: Escuela de Posgrado UNSAAS

## Objetivo del sistema
Desarrollar un sitio web institucional moderno para la Escuela de Posgrado UNSAAC, enfocado en informar, comunicar y mostrar programas académicos de forma clara y profesional.

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
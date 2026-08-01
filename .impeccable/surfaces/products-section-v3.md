# Surface brief — Nuestros Productos (Fase 3 / V3)

## 1. Job y audiencia
- Quien llega: un visitante B2B (cafetería, restaurante, bar, evento) evaluando si SOLUZIO fabrica el vaso que necesita, dentro de la home original de soluzio.cl.
- Momento: justo bajo el hero, primer bloque de prueba de producto. Hoy ve dos emojis (☕ 🥤) en vez del vaso real, lo que debilita credibilidad comercial.
- Modo de superficie: **Persuade** (heredado de la home; esta sección es evidencia de producto dentro de un flujo de decisión, no una herramienta operativa).

## 2. Resultado y prueba
- Acción primaria: que el visitante entienda que SOLUZIO vende vasos reales y siga hacia el formulario de cotización (`#contact`), sin que esta sección lo intercepte.
- Prueba real disponible: dos renders de producto genéricos ya aprobados (`ASSET_MAP_PRODUCTOS_V3.json`): vaso café 340 ml beige con tapa, vaso frosted 500 ml translúcido con tapa clásica. Nada más se genera ni se fotografía.
- Verdad de producto que debe quedar textualmente correcta: material polipropileno, 340 ml / 500 ml, tapa "según configuración disponible" (no "hermética"), reutilizable para uso comercial/promocional (no "100% reciclable"), serigrafía y variante IML premium (película integrada en el moldeo, no serigrafía).

## 3. Dirección seleccionada
- Autoridad visual: el HTML/CSS incumbente de la home (`.product-card`, tarjeta oscura, radio 20px, acento rojo `--color-primary`, checks `✓`). Es evidencia y autoridad, no un lienzo en blanco.
- Tesis estructural: sustituir el glifo emoji (`.product-icon`, font-size 7xl) por una fotografía de producto real dentro de un marco neutro cálido (no blanco clínico) para que el fondo blanco horneado de los renders no choque contra la tarjeta oscura — se lee como una ficha de producto enmarcada, no como un sticker pegado.
- Momento focal: la imagen del vaso es el elemento dominante de cada tarjeta (antes lo era el título); el marco debe tener alto estable (mismo aspect-ratio en ambas tarjetas) para que ambos productos se perciban comparables.
- Consecuencia de implementación: `<picture>` con WebP + PNG de respaldo, `srcset`/`sizes`/`width`/`height` explícitos, `loading="lazy"` (la sección queda bajo el primer viewport de 100vh del hero).

## 4. Alcance y límites
- Objetivo: solo `<section class="products" id="products">` en `index.html`, sus reglas CSS asociadas (`.product-icon` → nueva clase de imagen) y los 8 archivos de assets copiados a `assets/img/`.
- Anti-objetivo explícito: no es un rediseño de home. No se toca hero, nav, footer, formulario, proceso, benefits, tipografías globales, paleta global, ni Analytics/canonical/Worker `/brochure*`.
- Prohibido: glassmorphism nuevo, gradientes decorativos nuevos, upscaling de imágenes, imágenes generadas, fotos de clientes, Sky Costanera, logos privados.
- No se crean `PRODUCT.md`/`DESIGN.md` de raíz para este alcance mínimo (existe una versión de Fase 2 en stash que corresponde a un rediseño completo distinto y no aplica aquí).

## 5. Estados y rangos
- Contenido fijo (no dinámico): dos tarjetas, cada una con imagen + título + descripción (sin cambios) + 5 bullets.
- Responsive: 360 px (una columna, imagen visible cerca del título, sin scroll horizontal), 768 px (grid ya definido por `.products-grid` — no se toca), 1440 px (ambas tarjetas comparables en escala).
- Sin estados de carga/error propios de esta sección (no hay interactividad nueva).

## 6. Interacción y layout
- Jerarquía dentro de la tarjeta: imagen → título → descripción → bullets (igual que hoy, solo cambia el nodo del ícono).
- Sin nuevas afordancias interactivas (no hay enlaces ni botones dentro de las tarjetas de producto).
- El grid (`.products-grid`, `repeat(auto-fit, minmax(350px, 1fr))`) no se modifica.

## 7. Restricciones y decisiones cerradas
- Stack: HTML/CSS/JS estático, sin build step, sin framework nuevo.
- No generación de imágenes (aunque `generate-image.mjs` está disponible en esta sesión, la regla del handoff lo prohíbe explícitamente para esta fase).
- Bullets de copy: usar exactamente las 5 líneas aprobadas por tarjeta del handoff (`01_PLAN_MAESTRO_V3_PRODUCTOS_REALES.md` §4 y `HANDOFF...md` §7), eliminando "libre de BPA", "tapa hermética", "100% reutilizable y reciclable".
- `section-subtitle` del bloque productos ("Vasos de polipropileno, libre de BPA, reutilizables, reciclables y ecológicos.") también está dentro del alcance porque vive dentro de `#products` y repite tres términos prohibidos por el claim gate.
- No se usa la variante IML (`iml_500_translucido_tapa_clasica`, `iml_negro_tapa_negra`) como imagen adicional: se menciona solo como bullet de texto en la tarjeta 500 ml, para no convertir la tarjeta en una tercera tarjeta encubierta (riesgo señalado explícitamente en la dirección visual V3).

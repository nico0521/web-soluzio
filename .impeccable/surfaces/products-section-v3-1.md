# Surface brief — Corrección V3.1 (productos + nav superior)

## 1. Job y audiencia
- Continuación quirúrgica sobre la Fase 3 (V3), ya en producción. Mismo visitante B2B evaluando si SOLUZIO fabrica el vaso que necesita.
- V3 dejó los productos con marco claro/beige tipo sticker; esta corrección los integra en una zona oscura fotográfica, más grande y protagonista, y agrega una barra de navegación superior que hoy no existe en el DOM.
- Modo de superficie: **Persuade** (heredado).

## 2. Resultado y prueba
- Acción primaria sin cambios: llegar a `#contact` y cotizar. La nav superior es una ayuda de orientación, no un nuevo objetivo.
- Prueba real: dos fotos de producto nuevas, ya aprobadas por el usuario (`producto_vaso_cafe_340_beige_v3_1`, `producto_vaso_500_frosted_v3_1`), ambas con fondo de estudio oscuro integrado (sin marco blanco) — resuelven el defecto visual señalado en el diagnóstico V3.1.
- Verdad de producto: 340 ml / 500 ml, polipropileno, personalización por serigrafía; el 500 ml es frosted/translúcido. Nada de BPA, hermeticidad, 100%, certificaciones.

## 3. Dirección seleccionada
- Autoridad visual: el HTML/CSS incumbente (tarjeta oscura, radio 20px, acento rojo como línea superior de 4px, no como borde completo). Se conserva.
- Tesis del cambio: la zona de imagen dentro de cada tarjeta pasa de "marco claro con producto flotando" a "ventana fotográfica oscura" — el fondo de estudio de las nuevas fotos (gris casi negro con viñeta) se funde con un `radial-gradient` propio de la tarjeta, calibrado por muestreo de color real de cada foto (bordes ~#222–#262626).
- Escala medida, no estimada: se midió por umbral de brillo el alto real del producto dentro de cada foto (café ≈73,1% del lienzo; frosted ≈82,9%). Para cumplir "500 ml más alto, café ≈78% del 500 ml" con ambos dentro de zonas de imagen visibles (no a sangre completa), se aplica `transform: scale()` con origen inferior-centro a cada `<img>`: frosted a 0.87 (→ ≈72,1% de su zona), café a 0.77 (→ ≈56,3% de su zona; ratio resultante 78,1%, dentro de tolerancia ±4%). Ambas zonas comparten el mismo `aspect-ratio` (1122/1402, igual al de las fuentes) y el mismo ancho de columna del grid, por lo que las bases quedan alineadas por construcción, sin JS.
- Nav superior: barra estática (no sticky) como primer hijo de `<header>`, antes del `<section class="hero">`. Solo enlaces centrados — sin logo duplicado ni CTA propio — para minimizar el riesgo de que compita con el CTA central del hero, que permanece intacto.

## 4. Alcance y límites
- Objetivo: `#products` (imagen, chips, features, alineación de texto) + nueva `.site-nav` + assets estrictamente necesarios.
- Anti-objetivo explícito: no es rediseño general. Hero permanece igual salvo la nav agregada arriba (efecto colateral aceptado: el contenido centrado del hero baja ligeramente por la altura de la nav, comportamiento estándar de cualquier top-bar). No se toca formulario, proceso, footer, canonical, Analytics, Worker `/brochure*`.
- Adaptación reportada: el handoff sugiere enlaces "Personalización" y "Nosotros o Proceso", pero el DOM real no tiene sección de personalización ni "Nosotros". Se usan los 4 anclajes reales existentes: Productos (`#products`), Beneficios (`#benefits`), Proceso (`#process`), Contacto (`#contact`) — evita enlaces rotos o mal etiquetados.
- Prohibido: iconos nuevos en los chips (se evita para no introducir assets gráficos no aprobados), glassmorphism, gradientes decorativos ajenos a la paleta ya existente, recorte/deformación de las fotos fuente.

## 5. Estados y rangos
- Contenido fijo: 2 tarjetas, mismo patrón (imagen → acento rojo existente → título → descripción corta → chips → hasta 3 características).
- Nav: 4 links, mismo comportamiento en todas las resoluciones (wrap sin scroll horizontal en 360 px).

## 6. Interacción y layout
- Chips: lista compacta tipo pill, sin interactividad.
- Nav: enlaces con `:hover`/`:focus-visible` en rojo SOLUZIO, foco visible con outline.
- Grid de productos sin cambios (`repeat(auto-fit, minmax(350px, 1fr))`).

## 7. Restricciones y decisiones cerradas
- No generación de imágenes; los dos renders ya vienen aprobados por el usuario con fondo integrado.
- Copy: exactamente el texto del handoff V3.1 §6 (chips y hasta 3 características por tarjeta).
- Claim gate: mismos términos prohibidos que V3, verificados de nuevo tras el cambio.
- Verificación de escala por captura real (no solo cálculo CSS), documentada en el reporte de Gate 1.

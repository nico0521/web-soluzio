# Surface brief — Corrección V3.2 (beneficios + iconografía)

## 1. Job y audiencia
- Mismo visitante B2B que ya vio hero, nav y productos V3.1. Llega a `#benefits` después de ver los productos, buscando argumentos de decisión (por qué elegir SOLUZIO y no otro proveedor).
- Hoy la sección usa 4 emojis (📈💚🤝💰) como iconografía — se ve genérica y desalineada con la mejora ya hecha en productos.
- Modo de superficie: **Persuade** (heredado).

## 2. Resultado y prueba
- Acción: ningún cambio de comportamiento — la sección sigue siendo contenido estático, no interactivo, que refuerza la decisión de bajar hasta el formulario.
- Prueba real: 4 iconos 3D encargados y aprobados por el usuario, ya con fondo negro integrado, uno por beneficio, sin genéricos de librería.
- Verdad de contenido: el copy (eyebrow, H2, bajada, 4 títulos + 4 párrafos) es contenido bloqueado del usuario — no se audita, no se reescribe, no se resume. La palabra "ecológica" es intencional aquí y no activa el claim gate de productos (ese gate es exclusivo de `#products`).

## 3. Dirección seleccionada
- Autoridad visual primaria: `referencia_seccion_por_que_elegir_soluzio_v3_2.png` (mockup interno, no publicable) — grilla 2×2, tarjetas grafito horizontales, icono protagonista a la izquierda, glow rojo tenue en el borde superior, acento rojo corto bajo cada H3, cabecera centrada con eyebrow/H2/bajada.
- Autoridad de continuidad: la V3.1 real en localhost (paleta, radios, tipografía, tono de las product-card ya usa esquema "grafito con borde neutro" — reutilizable conceptualmente, pero se implementa con clases propias de beneficios, no reutilizando `.product-card`).
- Tesis del media well: cada JPG (1254×1254, fondo #000 puro) se aloja en un contenedor negro (`background:#000` o casi) del mismo tono, con un `border-radius` compartido con la tarjeta y una transición de tono muy corta entre el negro del media well y el grafito de la tarjeta (no un salto duro) — igual principio que la máscara radial usada en productos V3.1, pero más simple porque aquí el fondo del JPG ya es negro puro, no una foto con vignette: alcanza con que el "pozo" tenga el mismo negro que el JPG y un borde/transición suave hacia el grafito.
- Layout: `>=768px` → grid 2 columnas, cada `<article>` en fila horizontal (icono izquierda, texto derecha); `<768px` → una columna, icono arriba a la izquierda, texto debajo, sin centrar.

## 4. Alcance y límites
- Objetivo: únicamente `<section id="benefits">` (markup interno) + CSS nuevo con prefijo propio (`.benefit-*` ya existe parcialmente — se revisa y se reemplaza/extiende solo dentro de reglas ya scopeadas a `.benefit-*`, nunca tocando `.section-title`, `.section-subtitle`, `.container`) + los 4 iconos derivados.
- Anti-objetivo explícito: no es rediseño global. Hero, nav V3.1, productos V3.1, proceso, formulario, footer, canonical, Analytics, Worker `/brochure*` quedan bit-a-bit intactos.
- Prohibido: emojis, iconos de librería, recorte/recolor/vectorización/IA sobre los JPG, `mix-blend-mode`, cursor pointer o transformaciones de hover que simulen clic, glassmorphism, bordes rojos completos.
- No se crean PRODUCT.md/DESIGN.md de raíz — alcance demasiado acotado para justificarlo, igual que V3 y V3.1.

## 5. Estados y rangos
- Contenido fijo, sin estados de carga/error (no hay JS, no hay interactividad).
- Responsive: 360 (1 columna), 768 y 1440 (grid 2×2) — verificado por captura real, no solo por CSS.

## 6. Interacción y layout
- Tarjetas no clicables: sin `cursor:pointer`, sin `scale`/`tilt`/`translateY` en hover. Hover opcional solo cambia borde/glow mínimamente.
- Icono: `alt=""` (decorativo, el H3 ya nombra el beneficio), `loading="lazy"`, `decoding="async"`, `<picture>` con WebP 256/384 + fallback JPEG 384.
- Un solo H1 en la página (hero); esta sección usa H2 (ya existente, no se toca el id) y H3 por tarjeta.

## 7. Restricciones y decisiones cerradas
- Iconos: WebP 256×256, WebP 384×384, JPEG 384×384 fallback, generados con ImageMagick desde el JPG estable, sin crop/trim/transparencia, manteniendo sRGB, objetivo ≤45KB por WebP 384 (documentar si algún ícono lo excede por fidelidad).
- Verificación de hash SHA-256 y dimensiones (1254×1254) de los 4 JPG + el mockup ya hecha antes de este brief; todos coinciden con `ASSET_MAP_BENEFICIOS_V3_2.json`.
- Correspondencia exacta: `icono_visibilidad_constante_v3_2` → Visibilidad Constante, `icono_sustentabilidad_v3_2` → Sustentabilidad, `icono_fidelizacion_v3_2` → Fidelización, `icono_producto_vendible_v3_2` → Producto Vendible.

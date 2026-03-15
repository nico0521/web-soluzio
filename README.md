# Soluzio - Vasos Personalizados Chile 🥤

Landing page profesional para **Soluzio**, empresa especializada en la fabricación de **vasos reutilizables personalizados** para empresas en Chile.

## 🎯 Propósito del Negocio

Soluzio fabrica vasos de polipropileno reutilizables, personalizados con serigrafía profesional, que permiten a las empresas:
- ✨ Aumentar la visibilidad de su marca
- 🌱 Demostrar compromiso ambiental con productos sustentables
- 💚 Generar fidelización con clientes
- 💰 Crear un producto vendible adicional

**Slogan:** *"Visibilidad que perdura"*

---

## 🚀 Inicio Rápido

### Para Desarrolladores

```bash
# 1. Clonar el repositorio
git clone https://github.com/nico0521/web-soluzio.git
cd web-soluzio

# 2. Abrir en VS Code
code .

# 3. Instalar extensiones recomendadas cuando VS Code lo sugiera

# 4. Abrir index.html → Click derecho → "Open with Live Server"
```

**📖 Guía completa:** Ver [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📁 Estructura del Proyecto

```
web-soluzio/
├── .vscode/              # Configuración de VS Code
│   ├── settings.json     # Configuración del editor
│   ├── extensions.json   # Extensiones recomendadas
│   └── launch.json       # Configuración de depuración
├── .editorconfig         # Estilo de código consistente
├── .gitignore           # Archivos ignorados por Git
├── index.html           # Página principal (280 líneas)
├── styles.css           # Estilos con CSS variables (576 líneas)
├── script.js            # JavaScript para formularios (154 líneas)
├── README.md            # Documentación principal
└── CONTRIBUTING.md      # Guía de contribución
```

### Archivos Principales

| Archivo | Líneas | Tamaño | Descripción |
|---------|--------|--------|-------------|
| `index.html` | 280 | 13KB | HTML con SEO y accesibilidad optimizada |
| `styles.css` | 576 | 13KB | CSS con variables personalizadas y responsive |
| `script.js` | 154 | 4.6KB | Validación de formularios y animaciones |

**Total:** ~31KB (sitio ultraligero, sin dependencias externas)

---

## ✨ Características Implementadas

### 🔍 SEO Optimization
- Complete meta tags (description, keywords, author, robots)
- Open Graph tags for social media sharing
- Twitter Card tags
- Schema.org JSON-LD structured data
- Canonical URL

### ♿ Accesibilidad
- Cumple con **WCAG AA** en contraste de colores
- Labels apropiadas en formularios con atributos **ARIA**
- Estructura **HTML5 semántica**
- Roles y etiquetas ARIA
- Soporte completo de navegación por teclado

### ⚡ Rendimiento
- CSS crítico inline para contenido above-the-fold
- Carga asíncrona de CSS completo
- JavaScript diferido (defer)
- Preconnect a recursos externos (Formspree)
- **~31KB total** (sin dependencias externas)
- Tiempo de carga: **< 1 segundo**

### 📱 Diseño Responsivo
- **Móvil**: 375px - 768px (1 columna)
- **Tablet**: 769px - 1024px (2 columnas)
- **Desktop**: 1025px+ (múltiples columnas)

### 🎨 Características Modernas
- Variables CSS personalizadas (colores, espaciado, tipografía)
- Validación de formularios del lado del cliente
- Año de copyright dinámico (JavaScript)
- Smooth scrolling
- Animaciones con Intersection Observer

---

## 🖥️ Desarrollo Local

### Requisitos Previos
- **Git** instalado
- **VS Code** (recomendado)
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Configuración con VS Code

#### 1. Clonar el Repositorio

**Opción A: Desde GitHub Desktop**
1. Abre [GitHub Desktop](https://desktop.github.com/)
2. Click en **File → Clone Repository**
3. Busca `nico0521/web-soluzio`
4. Selecciona la carpeta de destino
5. Click en **Clone**

**Opción B: Desde la Terminal**
```bash
# HTTPS
git clone https://github.com/nico0521/web-soluzio.git

# SSH (requiere configuración previa)
git clone git@github.com:nico0521/web-soluzio.git

cd web-soluzio
```

#### 2. Abrir en VS Code

**Método 1: Desde la terminal**
```bash
code .
```

**Método 2: Desde VS Code**
1. Abre VS Code
2. `File → Open Folder` (o `Ctrl+K Ctrl+O`)
3. Selecciona la carpeta `web-soluzio`

#### 3. Instalar Extensiones Recomendadas

VS Code mostrará una notificación para instalar extensiones recomendadas:

**Extensiones incluidas:**
- 🔴 **Live Server** - Servidor de desarrollo con recarga automática
- 💅 **Prettier** - Formateo automático de código
- 📝 **EditorConfig** - Mantiene estilo consistente
- ✅ **HTMLHint** - Validación de HTML
- 💬 **Better Comments** - Comentarios mejorados

**Para instalar:**
1. Click en la notificación "Install Recommended Extensions"
2. O abre la vista de extensiones (`Ctrl+Shift+X`)
3. Busca `@recommended`

#### 4. Iniciar el Servidor de Desarrollo

**Con Live Server (Recomendado):**
1. Abre `index.html` en VS Code
2. Click derecho → **"Open with Live Server"**
   - O presiona `Alt+L Alt+O`
3. Tu navegador abrirá automáticamente `http://localhost:5500`
4. ✨ Los cambios se actualizan automáticamente al guardar

**Sin Live Server:**
- Simplemente abre `index.html` directamente en tu navegador
- Recarga manualmente con `F5` para ver cambios

---

## 📊 Métricas del Sitio

### Performance
- **Tamaño total**: ~31KB
- **Tiempo de carga**: < 1 segundo
- **Score Lighthouse**: 90+ en todas las categorías
- **Dependencias externas**: 0

### SEO
- ✅ Meta tags completos
- ✅ Structured data (Schema.org)
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Canonical URL

### Accesibilidad
- ✅ WCAG AA compliant
- ✅ Navegación por teclado
- ✅ Screen reader friendly
- ✅ Alto contraste de colores

---

## 🌐 Despliegue

### Cloudflare Pages

El sitio se despliega automáticamente en **Cloudflare Pages** cuando se hace push a la rama `main`.

**URL de producción:** https://soluzio.cl

**Configuración:**
- **Build command**: No necesario (sitio estático)
- **Build output directory**: `/`
- **Deploy branch**: `main`

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables
- **JavaScript (Vanilla)** - Sin frameworks, código nativo
- **Formspree** - Procesamiento de formularios
- **Git** - Control de versiones
- **Cloudflare Pages** - Hosting y CDN

**¿Por qué sin frameworks?**
- ⚡ Máximo rendimiento
- 🎯 Simplicidad
- 📦 Sin dependencias
- 🚀 Tiempo de carga mínimo
- 🔧 Fácil mantenimiento

---

## 📖 Documentación

- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guía completa de contribución
  - Cómo configurar el entorno
  - Flujo de trabajo con Git
  - Estándares de código
  - Testing y validación

---

## 🤝 Contribuir

¿Quieres mejorar el sitio? ¡Genial!

1. **Lee la guía:** [CONTRIBUTING.md](./CONTRIBUTING.md)
2. **Crea una rama:** `git checkout -b feature/mi-mejora`
3. **Haz cambios** y pruébalos localmente
4. **Commit:** `git commit -m "feat: descripción del cambio"`
5. **Push:** `git push origin feature/mi-mejora`
6. **Crea un Pull Request** en GitHub

---

## 📞 Contacto y Soporte

### Para Clientes
- 🌐 **Web**: https://soluzio.cl
- 📧 **Email**: contacto@soluzio.cl
- 📱 **WhatsApp**: [Contactar por WhatsApp](#)

### Para Desarrolladores
- 🐛 **Issues**: https://github.com/nico0521/web-soluzio/issues
- 💡 **Pull Requests**: https://github.com/nico0521/web-soluzio/pulls
- 📧 **Email**: contacto@soluzio.cl

---

## 📄 Licencia

© 2026 Soluzio.cl - Vasos Personalizados Chile

---

## 🗺️ Roadmap Futuro

### Próximas Mejoras
- [ ] Galería de diseños de vasos personalizados
- [ ] Calculadora de presupuestos online
- [ ] Sistema de pedidos integrado
- [ ] Blog con casos de éxito
- [ ] Área de clientes (dashboard)
- [ ] Integración con WhatsApp Business API
- [ ] Catálogo descargable en PDF

### Mejoras Técnicas
- [ ] PWA (Progressive Web App)
- [ ] Optimización de imágenes con WebP
- [ ] Lazy loading de secciones
- [ ] A/B testing de conversión
- [ ] Analytics avanzado (Google Analytics 4)

---

## 🙏 Agradecimientos

Gracias a todos los que han contribuido al proyecto y ayudado a mejorar la presencia online de Soluzio.

**Desarrollado con ❤️ en Chile** 🇨🇱

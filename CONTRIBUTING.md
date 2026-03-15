# 🚀 Guía de Contribución - Soluzio

## 📋 Tabla de Contenidos
- [Configuración del Entorno](#configuración-del-entorno)
- [Desarrollo Local](#desarrollo-local)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Estándares de Código](#estándares-de-código)

---

## 🛠️ Configuración del Entorno

### Prerequisitos
- **Git**: Instalado en tu sistema ([Descargar Git](https://git-scm.com/downloads))
- **VS Code**: Editor recomendado ([Descargar VS Code](https://code.visualstudio.com/))
- **Navegador moderno**: Chrome, Firefox, Safari o Edge

### 1️⃣ Clonar el Repositorio

```bash
# Opción 1: HTTPS (recomendado para principiantes)
git clone https://github.com/nico0521/web-soluzio.git

# Opción 2: SSH (requiere configuración de claves SSH)
git clone git@github.com:nico0521/web-soluzio.git

# Navegar al directorio del proyecto
cd web-soluzio
```

### 2️⃣ Abrir en VS Code

#### Desde la Terminal:
```bash
# Abrir VS Code en el directorio actual
code .
```

#### Desde VS Code:
1. Abre VS Code
2. Ve a **File → Open Folder** (o `Ctrl+K Ctrl+O` / `Cmd+K Cmd+O`)
3. Selecciona la carpeta `web-soluzio`
4. Click en **Select Folder**

### 3️⃣ Instalar Extensiones Recomendadas

Cuando abras el proyecto por primera vez, VS Code te preguntará si quieres instalar las extensiones recomendadas:

**Extensiones incluidas:**
- ✅ **Live Server**: Para visualizar cambios en tiempo real
- ✅ **Prettier**: Formateo automático de código
- ✅ **EditorConfig**: Mantiene consistencia de estilo
- ✅ **HTMLHint**: Validación de HTML
- ✅ **Better Comments**: Mejora la legibilidad de comentarios

**Instalar extensiones:**
1. Click en la notificación **"Install Recommended Extensions"**
2. O ve a la vista de extensiones (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Busca `@recommended` y selecciona "Workspace Recommendations"

---

## 💻 Desarrollo Local

### Opción 1: Live Server (Recomendado)

1. **Instala la extensión Live Server** (si no lo hiciste antes)
2. **Abre** `index.html` en VS Code
3. **Click derecho** en el archivo → **"Open with Live Server"**
   - O usa el atajo: `Alt+L Alt+O`
4. Tu navegador se abrirá automáticamente en `http://localhost:5500`
5. ✨ **Los cambios se actualizan automáticamente** al guardar archivos

### Opción 2: Abrir Directamente en el Navegador

1. Navega a la carpeta del proyecto en tu explorador de archivos
2. Doble click en `index.html`
3. Se abrirá en tu navegador predeterminado
4. **Nota**: Necesitarás recargar manualmente (`F5`) para ver cambios

### Opción 3: Python HTTP Server

```bash
# Python 3
python -m http.server 8000

# Abrir en navegador: http://localhost:8000
```

---

## 📁 Estructura del Proyecto

```
web-soluzio/
├── .vscode/                    # Configuración de VS Code
│   ├── settings.json          # Configuración del editor
│   ├── extensions.json        # Extensiones recomendadas
│   └── launch.json            # Configuración de depuración
├── .editorconfig              # Configuración de estilo de código
├── .gitignore                 # Archivos ignorados por Git
├── index.html                 # Página principal del sitio
├── styles.css                 # Estilos CSS con variables
├── script.js                  # JavaScript para validación e interactividad
├── README.md                  # Documentación principal
└── CONTRIBUTING.md            # Esta guía
```

### Descripción de Archivos

| Archivo | Propósito | Líneas |
|---------|-----------|--------|
| `index.html` | HTML principal con SEO y accesibilidad | ~280 |
| `styles.css` | CSS con variables y responsive design | ~576 |
| `script.js` | Validación de formularios y animaciones | ~154 |

---

## 🔄 Flujo de Trabajo

### Crear una Nueva Rama

```bash
# Actualizar main
git checkout main
git pull origin main

# Crear nueva rama
git checkout -b feature/nombre-descriptivo

# Ejemplos:
# git checkout -b feature/actualizar-footer
# git checkout -b fix/corregir-formulario
# git checkout -b docs/mejorar-readme
```

### Hacer Cambios

1. **Edita** los archivos en VS Code
2. **Guarda** (`Ctrl+S` / `Cmd+S`)
3. **Visualiza** los cambios en Live Server
4. **Verifica** que todo funcione correctamente

### Confirmar Cambios (Commit)

```bash
# Ver cambios
git status

# Agregar archivos
git add .
# O agregar archivos específicos
git add index.html styles.css

# Hacer commit
git commit -m "feat: descripción breve del cambio"

# Ejemplos de mensajes:
# git commit -m "feat: añadir sección de testimonios"
# git commit -m "fix: corregir validación de email"
# git commit -m "style: mejorar espaciado en móvil"
# git commit -m "docs: actualizar README con nuevas instrucciones"
```

### Subir Cambios

```bash
# Subir rama al repositorio remoto
git push origin feature/nombre-descriptivo

# Primera vez (establecer upstream)
git push -u origin feature/nombre-descriptivo
```

### Crear Pull Request

1. Ve a GitHub: https://github.com/nico0521/web-soluzio
2. Verás un banner **"Compare & pull request"** → Click
3. Completa:
   - **Título**: Descripción concisa del cambio
   - **Descripción**: Detalles de qué cambió y por qué
4. Click en **"Create pull request"**

---

## 📏 Estándares de Código

### HTML

```html
<!-- ✅ Bueno: Semántico, con ARIA -->
<section id="products" aria-labelledby="products-title">
  <h2 id="products-title">Nuestros Productos</h2>
  <p>Descripción de productos...</p>
</section>

<!-- ❌ Malo: No semántico, sin accesibilidad -->
<div class="products">
  <span class="title">Nuestros Productos</span>
  <div>Descripción de productos...</div>
</div>
```

### CSS

```css
/* ✅ Bueno: Usar variables CSS */
.button {
  padding: var(--spacing-md);
  color: var(--color-text);
  background: var(--color-primary);
}

/* ❌ Malo: Valores hardcodeados */
.button {
  padding: 2rem;
  color: #ffffff;
  background: #ff0000;
}
```

### JavaScript

```javascript
// ✅ Bueno: Nombres descriptivos, validación clara
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ❌ Malo: Nombre críptico, lógica poco clara
function v(e) {
  return e.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}
```

---

## 🧪 Testing

### Checklist Antes de Commit

- [ ] El sitio se ve bien en Chrome, Firefox y Safari
- [ ] Responsive funciona en móvil (375px), tablet (768px) y desktop (1920px)
- [ ] El formulario valida correctamente
- [ ] Las animaciones funcionan suavemente
- [ ] No hay errores en la consola del navegador
- [ ] Los links funcionan correctamente
- [ ] El SEO está correcto (meta tags, títulos, etc.)

### Probar en Diferentes Tamaños

**En Chrome DevTools:**
1. Abre DevTools (`F12` o `Ctrl+Shift+I`)
2. Click en el ícono de dispositivo móvil (`Ctrl+Shift+M`)
3. Prueba diferentes tamaños:
   - **Móvil**: 375x667 (iPhone SE)
   - **Tablet**: 768x1024 (iPad)
   - **Desktop**: 1920x1080

---

## 📝 Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>: <descripción breve>

[cuerpo opcional]

[footer opcional]
```

**Tipos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan el código)
- `refactor`: Refactorización de código
- `perf`: Mejoras de rendimiento
- `test`: Añadir o corregir tests
- `chore`: Cambios en herramientas o configuración

**Ejemplos:**
```bash
git commit -m "feat: añadir sección de testimonios de clientes"
git commit -m "fix: corregir validación de formulario en Safari"
git commit -m "docs: actualizar guía de instalación en README"
git commit -m "style: mejorar espaciado en sección de productos"
git commit -m "refactor: simplificar lógica de validación de email"
```

---

## 🆘 Ayuda y Soporte

### Problemas Comunes

**Live Server no funciona:**
- Asegúrate de tener la extensión instalada
- Reinicia VS Code
- Verifica que no haya otro servidor en el puerto 5500

**Git no reconoce cambios:**
- Verifica que estés en la rama correcta: `git branch`
- Asegúrate de haber guardado los archivos en VS Code

**Conflictos de merge:**
```bash
# Actualizar desde main
git fetch origin
git merge origin/main

# Resolver conflictos en VS Code (aparecerán marcados)
# Después de resolver:
git add .
git commit -m "merge: resolver conflictos con main"
```

### Recursos Útiles

- 📚 [Documentación de HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- 🎨 [Documentación de CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- ⚡ [Documentación de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- 🔧 [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- 💡 [VS Code Tips](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

### Contacto

Para preguntas sobre el desarrollo:
- 📧 Email: contacto@soluzio.cl
- 🐛 Issues: https://github.com/nico0521/web-soluzio/issues

---

## ✨ ¡Gracias por contribuir!

Tu trabajo ayuda a mejorar la presencia online de Soluzio y a generar más oportunidades de negocio.

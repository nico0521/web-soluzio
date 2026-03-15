# 🚀 Guía Rápida: Abrir el Proyecto en VS Code

Esta guía te ayudará a configurar el proyecto **Soluzio** en tu computadora personal usando Visual Studio Code.

---

## 📋 Paso a Paso

### 1️⃣ Instalar Herramientas Necesarias

#### A. Instalar Git

**Windows:**
1. Descarga Git desde: https://git-scm.com/download/win
2. Ejecuta el instalador
3. Usa las opciones por defecto (solo da click en "Next")
4. En "Choosing the default editor" selecciona "VS Code" si aparece

**Mac:**
1. Abre Terminal
2. Escribe: `git --version`
3. Si no está instalado, macOS te pedirá instalarlo automáticamente

**Linux:**
```bash
sudo apt-get update
sudo apt-get install git
```

**Verificar instalación:**
```bash
git --version
# Debería mostrar: git version 2.x.x
```

#### B. Instalar Visual Studio Code

1. Ve a: https://code.visualstudio.com/
2. Descarga la versión para tu sistema operativo
3. Instala siguiendo las instrucciones
4. Abre VS Code para verificar

---

### 2️⃣ Clonar el Repositorio

#### Opción A: Usando GitHub Desktop (Más Fácil)

1. **Instalar GitHub Desktop**
   - Descarga: https://desktop.github.com/
   - Instala y ábrelo

2. **Iniciar sesión**
   - Click en "Sign in to GitHub.com"
   - Ingresa tus credenciales de GitHub

3. **Clonar el repositorio**
   - Click en **"File" → "Clone repository"**
   - Busca: `nico0521/web-soluzio`
   - Selecciona dónde guardarlo (por ejemplo: `C:\Users\TuUsuario\Projects\`)
   - Click en **"Clone"**

4. **Abrir en VS Code**
   - En GitHub Desktop, click en **"Repository" → "Open in Visual Studio Code"**
   - ¡Listo! El proyecto se abrió en VS Code

#### Opción B: Usando la Terminal (Más Técnico)

**Windows (PowerShell o CMD):**
```bash
# Navega a donde quieres guardar el proyecto
cd C:\Users\TuNombre\Documents

# Clona el repositorio
git clone https://github.com/nico0521/web-soluzio.git

# Entra a la carpeta
cd web-soluzio

# Abre en VS Code
code .
```

**Mac/Linux (Terminal):**
```bash
# Navega a donde quieres guardar el proyecto
cd ~/Documents

# Clona el repositorio
git clone https://github.com/nico0521/web-soluzio.git

# Entra a la carpeta
cd web-soluzio

# Abre en VS Code
code .
```

**Si `code .` no funciona:**
1. Abre VS Code manualmente
2. Ve a **File → Open Folder**
3. Busca y selecciona la carpeta `web-soluzio`

---

### 3️⃣ Instalar Extensiones de VS Code

Cuando abras el proyecto por primera vez, verás una notificación en la esquina inferior derecha:

```
"This workspace has extension recommendations"
[Install All] [Show Recommendations]
```

**Click en "Install All"** - Esto instalará:
- ✅ Live Server (servidor de desarrollo)
- ✅ Prettier (formateo de código)
- ✅ EditorConfig (estilo consistente)
- ✅ HTMLHint (validación de HTML)
- ✅ Better Comments (comentarios mejorados)

**Si no aparece la notificación:**
1. Presiona `Ctrl+Shift+X` (Windows/Linux) o `Cmd+Shift+X` (Mac)
2. En el buscador escribe: `@recommended`
3. Verás "Workspace Recommendations"
4. Click en el ícono de la nube con flecha ↓ junto a cada extensión

---

### 4️⃣ Iniciar el Servidor de Desarrollo

#### Con Live Server (Recomendado):

1. **Abre el archivo `index.html`**
   - En el explorador de archivos de VS Code (lado izquierdo)
   - Click en `index.html`

2. **Inicia Live Server**
   - **Método 1**: Click derecho en `index.html` → **"Open with Live Server"**
   - **Método 2**: Click en el botón **"Go Live"** en la barra inferior
   - **Método 3**: Presiona `Alt+L Alt+O`

3. **Tu navegador se abrirá automáticamente**
   - URL: `http://localhost:5500` o `http://127.0.0.1:5500`
   - ✨ Los cambios se actualizan automáticamente al guardar archivos

#### Sin Live Server:

1. Abre el explorador de archivos de tu sistema
2. Navega a la carpeta del proyecto
3. Doble click en `index.html`
4. Se abrirá en tu navegador predeterminado
5. Para ver cambios, recarga con `F5`

---

### 5️⃣ Hacer Cambios

#### Editar Archivos

1. **Abre el archivo** que quieres editar en VS Code
2. **Haz tus cambios**
3. **Guarda** con `Ctrl+S` (Windows/Linux) o `Cmd+S` (Mac)
4. **Si usas Live Server**, los cambios aparecen automáticamente en el navegador
5. **Si no**, recarga el navegador con `F5`

#### Archivos principales:

- **`index.html`** - Contenido y estructura del sitio
- **`styles.css`** - Estilos visuales
- **`script.js`** - Funcionalidad (formularios, animaciones)

---

### 6️⃣ Guardar Cambios en Git

#### Desde VS Code (Interfaz Gráfica):

1. **Ver cambios**
   - Click en el ícono de "Source Control" (lado izquierdo) o presiona `Ctrl+Shift+G`
   - Verás todos los archivos modificados

2. **Preparar cambios (Stage)**
   - Click en el `+` junto a cada archivo
   - O click en el `+` grande arriba para preparar todos

3. **Hacer commit**
   - Escribe un mensaje descriptivo en el cuadro de texto
   - Ejemplo: `"feat: actualizar sección de productos"`
   - Presiona `Ctrl+Enter` o click en el ✓ (checkmark)

4. **Subir cambios (Push)**
   - Click en los tres puntos `...` arriba
   - Selecciona **"Push"**
   - Tus cambios se subirán a GitHub

#### Desde la Terminal en VS Code:

1. **Abrir terminal**
   - Presiona ``Ctrl+` `` (backtick) o
   - Ve a **Terminal → New Terminal**

2. **Comandos Git:**
```bash
# Ver estado de cambios
git status

# Agregar todos los archivos modificados
git add .

# Hacer commit
git commit -m "feat: descripción del cambio"

# Subir a GitHub
git push
```

---

## 🎯 Atajos de Teclado Útiles

### VS Code General
| Atajo | Acción |
|-------|--------|
| `Ctrl+S` / `Cmd+S` | Guardar archivo |
| `Ctrl+P` / `Cmd+P` | Buscar archivo |
| `Ctrl+Shift+P` / `Cmd+Shift+P` | Paleta de comandos |
| `Ctrl+B` / `Cmd+B` | Mostrar/ocultar sidebar |
| ``Ctrl+` `` | Abrir/cerrar terminal |
| `Ctrl+Shift+E` | Explorador de archivos |
| `Ctrl+Shift+G` | Control de versiones (Git) |

### Edición de Código
| Atajo | Acción |
|-------|--------|
| `Ctrl+/` / `Cmd+/` | Comentar/descomentar línea |
| `Alt+↑/↓` | Mover línea arriba/abajo |
| `Shift+Alt+↑/↓` | Duplicar línea |
| `Ctrl+D` / `Cmd+D` | Seleccionar siguiente ocurrencia |
| `Ctrl+Shift+L` / `Cmd+Shift+L` | Seleccionar todas las ocurrencias |

### Live Server
| Atajo | Acción |
|-------|--------|
| `Alt+L Alt+O` | Abrir con Live Server |
| `Alt+L Alt+C` | Cerrar Live Server |

---

## 🔍 Estructura de Carpetas en VS Code

```
📁 WEB-SOLUZIO
├── 📁 .vscode/                    ← Configuración de VS Code
│   ├── settings.json             ← Configuración del editor
│   ├── extensions.json           ← Extensiones recomendadas
│   └── launch.json               ← Configuración de depuración
├── 📄 .editorconfig              ← Estilo de código
├── 📄 .gitignore                 ← Archivos ignorados por Git
├── 📄 index.html                 ← ⭐ Página principal
├── 📄 styles.css                 ← ⭐ Estilos CSS
├── 📄 script.js                  ← ⭐ JavaScript
├── 📄 README.md                  ← Documentación principal
├── 📄 CONTRIBUTING.md            ← Guía de contribución
└── 📄 SETUP-VSCODE.md            ← Esta guía
```

**⭐ Archivos principales** que editarás más frecuentemente

---

## ✅ Checklist de Verificación

Marca cada paso cuando lo completes:

- [ ] ✅ Git instalado y funcionando (`git --version`)
- [ ] ✅ VS Code instalado y abierto
- [ ] ✅ Repositorio clonado en mi computadora
- [ ] ✅ Proyecto abierto en VS Code
- [ ] ✅ Extensiones recomendadas instaladas
- [ ] ✅ Live Server funcionando
- [ ] ✅ Puedo ver el sitio en `http://localhost:5500`
- [ ] ✅ Hice un cambio de prueba y se ve en el navegador
- [ ] ✅ Sé cómo guardar cambios con Git

---

## 🆘 Problemas Comunes y Soluciones

### ❌ "git no se reconoce como comando"

**Solución (Windows):**
1. Reinstala Git
2. Durante la instalación, asegúrate de marcar "Add Git to PATH"
3. Reinicia VS Code y la terminal

**Solución (Mac/Linux):**
```bash
# Instalar Git
sudo apt-get install git  # Linux
brew install git           # Mac (requiere Homebrew)
```

### ❌ "code no se reconoce como comando"

**Solución:**
1. Abre VS Code
2. Presiona `Ctrl+Shift+P` (Windows/Linux) o `Cmd+Shift+P` (Mac)
3. Escribe: `Shell Command: Install 'code' command in PATH`
4. Presiona Enter
5. Reinicia la terminal

### ❌ Live Server no funciona

**Solución:**
1. Verifica que la extensión esté instalada:
   - `Ctrl+Shift+X` → Busca "Live Server"
   - Debería decir "Installed" (Instalado)
2. Reinicia VS Code
3. Verifica que no haya otro servidor en el puerto 5500:
   - Cierra otras instancias de VS Code
   - Detén Live Server en otros proyectos

### ❌ Los cambios no se ven en el navegador

**Solución:**
1. **Si usas Live Server:**
   - Guarda el archivo (`Ctrl+S`)
   - Espera 1-2 segundos
   - El navegador se actualiza automáticamente

2. **Si abriste el HTML directamente:**
   - Guarda el archivo (`Ctrl+S`)
   - Recarga el navegador (`F5` o `Ctrl+R`)

3. **Si persiste:**
   - Limpia caché del navegador: `Ctrl+Shift+R` (Windows/Linux) o `Cmd+Shift+R` (Mac)

### ❌ Git me pide usuario y contraseña constantemente

**Solución (usar SSH):**
1. Genera una clave SSH: https://docs.github.com/es/authentication/connecting-to-github-with-ssh
2. Cambia el remote a SSH:
```bash
git remote set-url origin git@github.com:nico0521/web-soluzio.git
```

**Solución alternativa (usar credenciales guardadas):**
```bash
git config --global credential.helper store
```

---

## 📚 Recursos Adicionales

### Tutoriales
- 📖 [VS Code para principiantes](https://code.visualstudio.com/docs/introvideos/basics)
- 🎥 [Git y GitHub para principiantes (YouTube)](https://www.youtube.com/results?search_query=git+github+tutorial+español)
- 📘 [Documentación oficial de Git](https://git-scm.com/doc)

### Documentación del Proyecto
- 📄 **README.md** - Información general del proyecto
- 📄 **CONTRIBUTING.md** - Guía detallada de desarrollo

### Ayuda
- 🐛 **Issues**: https://github.com/nico0521/web-soluzio/issues
- 📧 **Email**: contacto@soluzio.cl

---

## 🎉 ¡Listo!

Ahora tienes todo configurado para trabajar en el proyecto Soluzio.

**Próximos pasos:**
1. Familiarízate con la estructura del código
2. Lee [CONTRIBUTING.md](./CONTRIBUTING.md) para conocer las mejores prácticas
3. Haz pequeños cambios de prueba
4. ¡Empieza a desarrollar!

**¿Tienes dudas?** Consulta los recursos adicionales o contacta al equipo.

---

**Desarrollado con ❤️ para Soluzio** 🥤

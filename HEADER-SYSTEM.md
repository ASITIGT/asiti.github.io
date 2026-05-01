# Sistema de Header Compartido

Este sistema permite compartir el mismo header (navegación) entre todos los archivos HTML del sitio web.

## 🎯 **Archivos del Sistema**

### 📁 **Archivos principales:**
- `includes/header.html` - Header compartido maestro
- `js/shared-header.js` - Script que maneja la carga dinámica
- Archivos HTML individuales con `<div id="shared-header">`

## 🚀 **Cómo usar en archivos nuevos**

### **1. Incluir el script**
En la sección `<head>` de tu HTML:
```html
<link rel="stylesheet" href="css/style.css">

<!-- Script para header compartido -->
<script src="js/shared-header.js"></script>
```

### **2. Usar el contenedor del header**
Reemplazar el `<header>` existente con:
```html
<!--================ Header Menu Area start =================-->
<div id="shared-header">
  <!-- El header se carga aquí dinámicamente -->
  <!-- Header de respaldo para cuando no se puede cargar el compartido -->
  <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <!-- ... contenido básico del header ... -->
      </nav>
    </div>
  </header>
</div>
<!--================ Header Menu Area =================-->
```

## ⚙️ **Funcionalidades automáticas**

### **🎯 Navegación inteligente:**
- Detecta automáticamente la página actual
- Marca el elemento de navegación correspondiente como "activo"
- Ajusta enlaces ancla según la página (ej: `#section_speakers` vs `index.html#section_speakers`)

### **📱 Compatibilidad:**
- Funciona con JavaScript deshabilitado (header de respaldo)
- Compatible con GitHub Pages
- No requiere configuración de servidor

## 🔧 **Personalización**

### **Editar navegación:**
Para cambiar la navegación en **todos los archivos**, edita solo:
```
includes/header.html
```

### **Agregar nueva página:**
1. Crear el archivo HTML con la estructura del header compartido
2. Opcionalmente agregar el mapeo en `js/shared-header.js`:
```javascript
const pageMap = {
  'mi-nueva-pagina.html': 'mi-pagina',
  // ... otros mapeos
};
```

### **Estilos dinámicos:**
Usar las funciones globales disponibles:
```javascript
// Cambiar título dinámicamente
HeaderUtils.setTitle('Mi Nuevo Título');

// Cambiar meta description
HeaderUtils.setDescription('Nueva descripción SEO');
```

## 🎨 **Ventajas del sistema**

### **✅ Mantenimiento centralizado:**
- Un solo archivo para editar navegación
- Cambios instantáneos en todo el sitio
- Consistencia garantizada

### **✅ SEO optimizado:**
- Headers de respaldo para indexación
- Títulos y descripciones dinámicas
- Enlaces internos consistentes

### **✅ Performance:**
- Carga asíncrona del header
- Fallback instantáneo si falla la carga
- Cache del navegador para `header.html`

## 📋 **Archivos ya actualizados:**
- ✅ `index.html` - Página principal FLISOL 2026
- ✅ `2025.html` - Página ASITI 2025
- ✅ `2023.html` - Página ASITI 2023

## 🚀 **Próximos pasos:**
Para actualizar otros archivos HTML existentes, seguir la estructura mostrada arriba. El sistema es totalmente compatible con la arquitectura actual del sitio.
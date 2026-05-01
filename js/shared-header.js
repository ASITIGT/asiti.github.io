/**
 * Shared Header Manager
 * Carga y gestiona el header compartido para todo el sitio
 */
class HeaderManager {
  constructor() {
    this.currentPage = this.getCurrentPage();
    this.loadHeader();
  }

  /**
   * Determina la página actual basada en la URL
   */
  getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    // Mapeo de archivos a páginas
    const pageMap = {
      'index.html': 'index',
      '2023.html': '2023',
      '2025.html': '2025', 
      'contact.html': 'contact',
      'about.html': 'about',
      'blog.html': 'blog',
      'speaker.html': 'speaker'
    };
    
    return pageMap[filename] || 'index';
  }

  /**
   * Carga el header desde el archivo compartido
   */
  async loadHeader() {
    try {
      const response = await fetch('includes/header.html');
      if (response.ok) {
        const headerHTML = await response.text();
        const headerContainer = document.getElementById('shared-header');
        
        if (headerContainer) {
          headerContainer.innerHTML = headerHTML;
          this.setActiveNavigation();
          this.adjustNavigationLinks();
        }
      } else {
        console.warn('No se pudo cargar el header compartido, usando header local');
      }
    } catch (error) {
      console.warn('Error cargando header compartido:', error);
    }
  }

  /**
   * Marca el elemento de navegación activo
   */
  setActiveNavigation() {
    // Remover clases activas existentes
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Agregar clase activa al elemento correspondiente
    const currentNavItem = document.querySelector(`[data-page="${this.currentPage}"]`);
    if (currentNavItem) {
      currentNavItem.classList.add('active');
    }
  }

  /**
   * Ajusta los enlaces de navegación según la página actual
   */
  adjustNavigationLinks() {
    const speakersLink = document.querySelector('a[href="index.html#section_speakers"]');
    const cronoLink = document.querySelector('a[href="index.html#section_crono"]');

    // Si estamos en index.html, usar enlaces ancla directos
    if (this.currentPage === 'index') {
      if (speakersLink) speakersLink.setAttribute('href', '#section_speakers');
      if (cronoLink) cronoLink.setAttribute('href', '#section_crono');
    }
  }

  /**
   * Actualiza el título de la página dinámicamente
   */
  static setPageTitle(title) {
    document.title = title;
  }

  /**
   * Actualiza el meta description dinámicamente
   */
  static setPageDescription(description) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
  }
}

// Auto-inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new HeaderManager();
});

// Función global para inicializar desde cualquier página
window.initSharedHeader = () => {
  new HeaderManager();
};

// Funciones utilitarias globales
window.HeaderUtils = {
  setTitle: HeaderManager.setPageTitle,
  setDescription: HeaderManager.setPageDescription
};
// Función para cargar contenido en un elemento
async function loadContent(selector, file) {
  const container = document.querySelector(selector);
  const res = await fetch(file);
  const html = await res.text();
  container.innerHTML = html;
}

// Cargar cabecera y pie de página al iniciar
loadContent('#header', 'header.html');
loadContent('#footer', 'footer.html');

// Función para cargar vistas
function loadViewFromHash() {
  const view = location.hash.slice(1) || 'index';
  loadContent('#content', `views/${view}.html`);
}

// Cargar vista inicial
window.addEventListener('DOMContentLoaded', loadViewFromHash);
// Cargar vista al cambiar el hash (menú)
window.addEventListener('hashchange', loadViewFromHash);

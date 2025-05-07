function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}
function cargarHTML() {
    fetch('html.html')  // Aquí debes poner la ruta de tu archivo HTML
      .then(response => response.text())  // Convierte la respuesta en texto
      .then(html => {
        document.getElementById('contenido').innerHTML = html;  // Inserta el HTML en el div
      })
      .catch(error => {
        console.error('Hubo un error al cargar el archivo HTML:', error);
      });
  }

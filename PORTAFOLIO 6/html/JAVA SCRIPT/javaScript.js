document.addEventListener('DOMContentLoaded', () => {

    // Función para mostrar la sección seleccionada y ocultar las demás
    window.mostrarSeccion = (id) => {
        // Obtiene todas las secciones con la clase 'seccion'
        const secciones = document.querySelectorAll('.seccion');

        // Oculta todas las secciones
        secciones.forEach(seccion => {
            seccion.classList.remove('activa');
        });

        // Muestra solo la sección con el ID proporcionado
        const seccionAMostrar = document.getElementById(id);
        if (seccionAMostrar) {
            seccionAMostrar.classList.add('activa');
        }
    };

    // Oculta todas las secciones excepto la de 'Sobre Mí' al cargar la página
    // Como 'Sobre Mí' no es una <section>, se mantiene visible por defecto en el HTML
    // y solo necesitamos ocultar las otras.
    // Aunque el CSS ya las oculta, esta función asegura el estado inicial si la página se recarga
    // con una sección activa.
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // --- Lógica del formulario de contacto ---
    const formulario = document.getElementById('contactForm');
    const mensajeAgradecimiento = document.getElementById('mensajeAgradecimiento');

    formulario.addEventListener('submit', (e) => {
        // Previene el envío del formulario por defecto
        e.preventDefault();

        // Obtiene los valores de los campos
        const nombre = document.getElementById('nombreCompleto').value;
        const email = document.getElementById('email').value;

        // Validaciones básicas
        if (nombre.trim() === '' || email.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Muestra el mensaje de agradecimiento
        mensajeAgradecimiento.textContent = `¡Gracias por tu mensaje, ${nombre}! Te contactaré pronto.`;
        mensajeAgradecimiento.style.display = 'block';

        // Opcional: Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            mensajeAgradecimiento.style.display = 'none';
        }, 5000);

        // Limpia el formulario
        formulario.reset();
    });

});

// --- Lógica para el modo claro/oscuro ---
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', () => {
        // Alterna la clase 'light-mode' en el body
        document.body.classList.toggle('light-mode');

        // Opcional: Guarda la preferencia en el localStorage del navegador
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Opcional: Carga la preferencia de modo al recargar la página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        document.body.classList.add('light-mode');
    }
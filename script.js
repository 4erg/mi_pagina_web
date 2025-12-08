// Partículas
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#00ffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#00ffff", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
    }
});

// Cursor personalizado
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// Scroll suave + animaciones al aparecer
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

cards.forEach(card => observer.observe(card));

// === SCROLL A SECCIÓN ===
function scrollToSection(id) {
    // Ocultar todas las secciones
    document.querySelectorAll('.full-section').forEach(sec => {
        sec.classList.remove('active');
    });

    // Mostrar la sección elegida
    const target = document.getElementById(id);
    target.classList.add('active');

    // MOSTRAR EL BOTÓN (con ID para que nunca falle)
    const btn = document.getElementById('backBtn');
    if (btn) btn.classList.add('visible');

    // Scroll suave
    target.scrollIntoView({ behavior: 'smooth' });
}

// === VOLVER ARRIBA ===
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Ocultar secciones y botón
    document.querySelectorAll('.full-section').forEach(sec => {
        sec.classList.remove('active');
    });
    
    const btn = document.getElementById('backBtn');
    if (btn) btn.classList.remove('visible');
}

// === ASEGURAR QUE EL BOTÓN ESTÉ LISTO ===
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('backBtn');
    if (btn) {
        btn.style.display = 'flex'; // fuerza que esté visible en el DOM
    }
});

// =============== LIGHTBOX PARA IMÁGENES ===============
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // evita scroll de fondo
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Hacer que todas las imágenes de certificados sean clicables
document.querySelectorAll('.certificados-grid img').forEach(img => {
    img.onclick = function() {
        openLightbox(this.src);
    };
});
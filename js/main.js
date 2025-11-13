// Verificación de Edad
document.addEventListener('DOMContentLoaded', function() {
    const ageModal = document.getElementById('age-verification');
    const ageConfirm = document.getElementById('age-confirm');
    const ageDeny = document.getElementById('age-deny');
    
    // Verificar si ya confirmó la edad
    if (!localStorage.getItem('ageVerified')) {
        ageModal.style.display = 'flex';
    }
    
    ageConfirm.addEventListener('click', function() {
        localStorage.setItem('ageVerified', 'true');
        ageModal.style.display = 'none';
    });
    
    ageDeny.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });
    
    // Navegación entre secciones
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover active de todos los links
            navLinks.forEach(l => l.classList.remove('active'));
            // Agregar active al link clickeado
            this.classList.add('active');
            
            // Ocultar todas las secciones
            sections.forEach(section => section.classList.remove('active'));
            
            // Mostrar sección correspondiente
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
    
    // Menú móvil toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isActive = navMenu.classList.contains('active');
            if (isActive) {
                navMenu.classList.remove('active');
            } else {
                navMenu.classList.add('active');
            }
        });
    }
    
    // Cerrar menú móvil al hacer click en un link
    const mobileLinks = document.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});

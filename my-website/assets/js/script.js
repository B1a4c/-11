document.addEventListener('DOMContentLoaded', function() {
    // Анимация для навигационного меню
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.transition = 'color 0.3s ease';
        });
    });

    // Обработка формы
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.');
            this.reset();
        });
    }
});
// Configuração do ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// Revelar elementos gradualmente
const elementsToReveal = [
    '.home-title', '.about-text', '.button', '.home-img', '.home-social', '.scroll',
    '.home-text', '.home-text-color', '.home-text-color1',
    '.about-img', '.about-subtitle',
    '.skills-subtitle', '.skills-text', '.skills-data', '.skills-img',
    '.nome', '.email', '.msg', '.work-img', '.contact-input'
];

// Aplicar ScrollReveal a cada elemento com atraso personalizado
elementsToReveal.forEach((selector, index) => {
    sr.reveal(selector, { delay: 100 + (index * 50) });
});

// Configuração específica para vídeos e seções
sr.reveal('.video-container', { interval: 200 });
sr.reveal('.about-container', { delay: 300 });
sr.reveal('.button-container', { delay: 400 });
sr.reveal('.footer', { delay: 500 });

console.clear();

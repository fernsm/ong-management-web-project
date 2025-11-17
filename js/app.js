/* * app.js: Inicializa a aplicação, SPA e Dark Mode
 */
import { router, navigateTo } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SPA: Intercepta cliques em links
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));
        }
    });

    // 2. Navegação do Browser (Voltar/Avançar)
    window.addEventListener('popstate', router);

    // 3. Carrega conteúdo inicial
    router();

    // 4. Configurações de UI (Menu, Modal e Dark Mode)
    setupGlobalUI();
    setupDarkMode(); // <--- Novo!
});

function setupGlobalUI() {
    // Modal
    const modalOverlay = document.getElementById('doar-modal');
    const btnOpenModal = document.getElementById('btn-doar-modal');
    const btnCloseModal = document.getElementById('modal-close');

    if(btnOpenModal) {
        btnOpenModal.addEventListener('click', () => modalOverlay.classList.add('active'));
        btnCloseModal.addEventListener('click', () => modalOverlay.classList.remove('active'));
        modalOverlay.addEventListener('click', (e) => {
            if(e.target === modalOverlay) modalOverlay.classList.remove('active');
        });
    }

    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
}

function setupDarkMode() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se o usuário já tinha escolhido antes
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.innerText = '☀️ Modo Claro';
    }

    // Evento de clique
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                toggleBtn.innerText = '☀️ Modo Claro';
            } else {
                localStorage.setItem('theme', 'light');
                toggleBtn.innerText = '🌙 Modo Escuro';
            }
        });
    }
}
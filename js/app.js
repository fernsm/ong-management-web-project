/* * app.js: Inicializa a aplicação e eventos globais
 */
import { router, navigateTo } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intercepta cliques em links com 'data-link' para fazer a SPA funcionar
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault(); // Impede o link normal
            navigateTo(e.target.getAttribute('href')); // Usa nosso roteador
        }
    });

    // 2. Lida com os botões de Voltar/Avançar do navegador
    window.addEventListener('popstate', router);

    // 3. Carrega a página inicial
    router();

    // 4. Lógica do Modal (Global) e Menu Mobile
    setupGlobalUI();
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
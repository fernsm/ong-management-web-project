/* * ARQUIVO: main.js
 * Contém o JS das máscaras (Entrega I) 
 * + JS do Menu Hambúrguer (Entrega II)
 * + JS do Modal (Entrega II)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Requisito: Máscaras de Input (da Entrega I) ---
    const applyMask = (element, maskFunction) => {
        if (element) {
            element.addEventListener('input', (event) => {
                const value = event.target.value;
                event.target.value = maskFunction(value);
            });
        }
    };
    const maskCPF = (value) => {
        return value.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').substring(0, 14);
    };
    const maskPhone = (value) => {
        return value.replace(/\D/g, '').replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{4,5})(\d{4})/, '$1-$2').substring(0, 15);
    };
    const maskCEP = (value) => {
        return value.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2').substring(0, 9);
    };
    
    applyMask(document.getElementById('cpf'), maskCPF);
    applyMask(document.getElementById('telefone'), maskPhone);
    applyMask(document.getElementById('cep'), maskCEP);


    // --- Requisito: Menu Hambúrguer (Entrega II) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }

    
    // --- Requisito: Modal de Feedback (Entrega II) ---
    const modalOverlay = document.getElementById('doar-modal');
    const btnOpenModal = document.getElementById('btn-doar-modal');
    const btnCloseModal = document.getElementById('modal-close');

    if (modalOverlay && btnOpenModal && btnCloseModal) {
        // Abrir o modal
        btnOpenModal.addEventListener('click', () => {
            modalOverlay.classList.add('active');
        });
        
        // Fechar o modal
        const closeModal = () => {
            modalOverlay.classList.remove('active');
        };
        
        btnCloseModal.addEventListener('click', closeModal);
        
        // Fechar clicando fora do modal (no overlay)
        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
    }

});
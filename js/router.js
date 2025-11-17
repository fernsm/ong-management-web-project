/* * router.js: Gerencia a troca de conteúdo sem recarregar
 */
import { homeTemplate, projetosTemplate, cadastroTemplate } from './templates.js';
import { initFormValidation } from './validation.js';

const routes = {
    '/': homeTemplate,
    '/projetos': projetosTemplate,
    '/cadastro': cadastroTemplate
};

const contentDiv = document.getElementById('app-content');

export const router = () => {
    // Pega o caminho da URL (ex: /cadastro) ou usa '/' como padrão
    const path = window.location.pathname === '/index.html' ? '/' : window.location.pathname;
    
    // Seleciona o template baseado na rota ou volta para home se não existir
    const template = routes[path] || homeTemplate;

    // Manipulação do DOM: Injeta o HTML
    contentDiv.innerHTML = template;

    // Se carregamos a página de cadastro, precisamos reativar o JS do formulário
    if (path === '/cadastro') {
        initFormValidation();
    }
};

export const navigateTo = (url) => {
    window.history.pushState({}, "", url); // Muda a URL no navegador
    router(); // Carrega o conteúdo
};
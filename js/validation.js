/* * validation.js: Lógica de formulário e máscaras
 */

export function initFormValidation() {
    const form = document.getElementById('form-cadastro');
    const feedbackBox = document.getElementById('form-feedback');

    // Se não estivermos na página de cadastro, paramos por aqui
    if (!form) return;

    // 1. Aplicar Máscaras (Reutilizando lógica da entrega anterior)
    const cpfInput = document.getElementById('cpf');
    const cepInput = document.getElementById('cep');

    cpfInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .substring(0, 14);
    });

    cepInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .substring(0, 9);
    });

    // 2. Verificação de Consistência no Submit
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita o reload da página
        
        const nome = document.getElementById('nome').value;
        const cpf = cpfInput.value;

        // Simulação de validação lógica
        let errors = [];

        if (nome.split(' ').length < 2) {
            errors.push("Por favor, digite seu nome completo (Nome e Sobrenome).");
        }

        if (cpf.length < 14) {
            errors.push("O CPF está incompleto.");
        }

        // Exibe Feedback Visual
        if (errors.length > 0) {
            feedbackBox.style.display = 'block';
            feedbackBox.className = 'alert alert-danger';
            feedbackBox.innerHTML = `<strong>Erro!</strong><br>${errors.join('<br>')}`;
        } else {
            feedbackBox.style.display = 'block';
            feedbackBox.className = 'alert alert-success';
            feedbackBox.innerHTML = `<strong>Sucesso!</strong> Cadastro realizado. Bem-vindo, ${nome}!`;
            form.reset();
        }
    });
}
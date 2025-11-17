/* * Script simples para aplicar máscaras de input (CPF, Telefone, CEP)
 * Este é um requisito técnico que complementa a validação HTML5.
 */

// Função genérica para aplicar máscara
const applyMask = (element, maskFunction) => {
    element.addEventListener('input', (event) => {
        const value = event.target.value;
        event.target.value = maskFunction(value);
    });
};

// Máscara de CPF (000.000.000-00)
const maskCPF = (value) => {
    return value
        .replace(/\D/g, '') // Remove tudo que não é dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o 3º dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Coloca ponto após o 6º dígito
        .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Coloca hífen após o 9º dígito
        .substring(0, 14); // Limita ao tamanho máximo do CPF formatado
};

// Máscara de Telefone (00) 90000-0000
const maskPhone = (value) => {
    return value
        .replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '($1) $2') // Coloca parênteses nos dois primeiros dígitos
        .replace(/(\d{4,5})(\d{4})/, '$1-$2') // Coloca hífen
        .substring(0, 15); // Limita ao tamanho máximo
};

// Máscara de CEP (00000-000)
const maskCEP = (value) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2') // Coloca hífen após o 5º dígito
        .substring(0, 9); // Limita ao tamanho
};

// Seleciona os inputs quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    const inputCPF = document.getElementById('cpf');
    const inputPhone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    if (inputCPF) {
        applyMask(inputCPF, maskCPF);
    }
    if (inputPhone) {
        applyMask(inputPhone, maskPhone);
    }
    if (inputCEP) {
        applyMask(inputCEP, maskCEP);
    }
});
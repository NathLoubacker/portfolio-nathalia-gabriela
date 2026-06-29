// Espera a página carregar para ativar o script
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formContato");
    
    // Se o form existir na tela, fica ouvindo o clique de enviar
    if (formulario) {
        formulario.addEventListener("submit", validarFormulario);
    }
});

function validarFormulario(evento) {
    // Impede a página de recarregar sozinha
    evento.preventDefault();

    // Pega os valores que o usuário digitou e tira os espaços em branco
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se tem algum campo vazio
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos!");
        return; // Para a execução do código aqui
    }

    // Validação bem simples para ver se o email tem o "@" e o "."
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Por favor, digite um e-mail válido!");
        return;
    }

    // Se chegou até aqui, deu tudo certo
    alert("Mensagem enviada com sucesso!");
    
    // Limpa os campos do formulário
    document.getElementById("formContato").reset();
}

// Variável do valor padrão que é inicializada com 0
let valorPadrao = 0;

// Busca a tag "valor" usando o DOM para ser modificada
let valorElement = document.getElementById("valor");

// Função para atualizar o valor exibido na página usando o DOM
function atualizarValor() {
    valorElement.textContent = valorPadrao;
}

// Função para aumentar o valor em 1
function aumentarValor() {
    valorPadrao++;
    atualizarValor(); // Chama a função para atualizar o valor exibido
}

// Função para diminuir o valor em 1, se for maior que 0
function diminuirValor() {
    if (valorPadrao > 0) {
        valorPadrao--;
    }
    atualizarValor(); // Chama a função para atualizar o valor exibido
}

// Função para resetar o valor para o valor padrão (0)
function resetarValor() {
    valorPadrao = 0;
    atualizarValor(); // Chama a função para atualizar o valor exibido
}

// Chama a função para inicializar o valor exibido na página com o valor padrão
atualizarValor();

/*
    EXERCÍCIO FEITO PARA TREINAR FUNÇÕES E OPERAÇÕES NO JAVASCRIPT.
    FEITO NO DIA 25/07/2023.
    FEITO POR LUIZ GUILHERME.
*/

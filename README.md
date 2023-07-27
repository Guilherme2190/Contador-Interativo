<h1 align="center"> 🔢 Contador - HTML, CSS, and JavaScript ⚙️ </h1>

Este é um simples aplicativo de contador desenvolvido com HTML, CSS e JavaScript. Ele exibe um número na tela e oferece três botões: "Aumentar", "Diminuir" e "Resetar", que permitem interagir com o contador. 📈📉

## Como funciona? 🔄
Ao carregar a página, você verá um número 0 no centro da tela e três botões abaixo dele. Ao clicar no botão "Aumentar", o número será incrementado em 1. Ao clicar em "Diminuir", o número será reduzido em 1 (se for maior que zero). E ao clicar em "Resetar", o número voltará ao valor inicial, que é 0. 📊

## HTML 🌐
O código HTML é responsável por estruturar o aplicativo e possui os seguintes elementos:

- Um elemento h1 com o título "Contador".
- Um elemento p com o id "valor" que exibe o número do contador.
- Três botões, cada um com um id correspondente ("aumentar", "diminuir" e "resetar") e um atributo "onclick" que chama as funções JavaScript correspondentes.

## CSS 🎨
O código CSS estiliza a aparência do aplicativo e inclui as seguintes definições:

- Define o estilo do corpo da página, incluindo a fonte, alinhamento e cor do texto.
- O elemento de classe "container" é estilizado com margem superior para espaçamento.
- O título <h1> é estilizado com tamanho de fonte e cor.
- O elemento <p> que exibe o valor do contador é estilizado com tamanho de fonte e margem inferior.
- Os botões são estilizados com preenchimento, tamanho de fonte, margem direita, cursor personalizado e efeito de sombra quando o mouse passa sobre eles.

## JavaScript 🧮
O código JavaScript é responsável pela lógica do aplicativo e contém as seguintes funções:

- `atualizarValor()`: Atualiza o valor exibido na página com o valor atual do contador.
- `aumentarValor()`: Incrementa o contador em 1 e chama `atualizarValor()` para exibir o novo valor.
- `diminuirValor()`: Decrementa o contador em 1 (se o valor for maior que zero) e chama `atualizarValor()` para exibir o novo valor.
- `resetarValor()`: Reseta o contador para o valor padrão (0) e chama `atualizarValor()` para exibir o novo valor.

## Informações de Contato 📞📧
- Número: +55 74981336921.
- Email: guilhermedec6@gmail.com.

## Sobre o Projeto 🚀
Este projeto foi desenvolvido como um exercício para treinar funções e operações em JavaScript. A prática com JavaScript permitiu aprimorar a lógica de programação e o uso do DOM para interagir com elementos HTML. Além disso, a experiência com CSS e HTML auxiliou no entendimento de estilização e estruturação de páginas web.

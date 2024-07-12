let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//chama a função para exibir a mensagem inicial
exibirMensagemInicial();

//exemplos de códigos que devem ser alterados para o código abaixo
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// devemos utilizar funções para evitar códigos repetidos
function exibirTextoNaTela() {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//Código omitido

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();

    }
}

//exemplo de função para exibir mensagem inicial
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

//exemplo de função de retorno de número aleatório
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

//exemplo de função para limpar campo
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//exemplo de função para reiniciar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    exibirMensagemInicial();
    limparCampo();
}
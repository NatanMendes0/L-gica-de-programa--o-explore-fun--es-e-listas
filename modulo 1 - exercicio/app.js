let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function cliqueConsole() {
    console.log('O botão foi clicado!')
    titulo.innerHTML = 'O botão Console foi clicado!';
}

function cliqueAlerta() {
    alert('Eu amo JS!')
    titulo.innerHTML = 'O botão Alerta foi clicado!';
}

function cliquePrompt() {
    let nomeCidade = prompt('Diga o nome de uma cidade do Brasil');
    titulo.innerHTML = `Estive em ${nomeCidade} e lembrei de você!`;
}

function cliqueSoma(){
    let numero1 = prompt('Digite um número');
    let numero2 = prompt('Digite outro número');
    let resultado = parseInt(numero1) + parseInt(numero2);
    titulo.innerHTML = `A soma dos números é ${resultado}`;
}
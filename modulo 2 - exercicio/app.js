// exercicio 1
exibirOlaMundo();
function exibirOlaMundo() {
    console.log('Olá mundo!');
}

//exercicio 2
let nome = prompt('Qual é o seu nome?');
exibirNome(nome);
function exibirNome(nome) {
    alert(`Olá, ${nome}!`);
    console.log(`Olá, ${nome}!`);
}

//exercicio 3
let numero = parseInt(prompt('Digite um número'));
calculaDobro(numero);
function calculaDobro(numero) {
    let soma = numero*2;
    alert(`O dobro do número é ${soma}`);
    console.log(`O dobro do número é ${soma}`);
}

//exercicio 4
let numero1 = parseInt(prompt('Digite o primeiro número'));
let numero2 = parseInt(prompt('Digite o segundo número'));
let numero3 = parseInt(prompt('Digite o terceiro número'));

let media = calculaMedia(numero1, numero2, numero3);
console.log(`A média dos números é ${media}`);

function calculaMedia(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

//exercicio 5
let maiorNumero = retornaMaior(numero1, numero2);
console.log(`O maior número é ${maiorNumero}`);

function retornaMaior(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

//exercicio 6
calculaMultiplicacao(numero);
function calculaMultiplicacao(numero) {
    return numero * numero;
}
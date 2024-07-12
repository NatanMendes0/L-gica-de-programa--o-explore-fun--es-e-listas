// exercicio 1
function calcularIMC(altura, peso) {
    return peso / (altura * altura);
}

// exercicio 2
function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// exercicio 3
function converterDolarParaReal(valorDolar) {
    const cotacaoDolar = 4.80;
    return valorDolar * cotacaoDolar;
}

// exercicio 4
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}

// exercicio 5
function calcularAreaPerimetroSalaCircular(raio) {
    const pi = 3.14;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
}

// exercicio 6
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
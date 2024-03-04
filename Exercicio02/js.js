function saudacao(nome) {
    return `olá, ${nome}`;
}


function somaQuadrado(n1, n2) {


    let soma = n1 + n2;
    let quadradoSoma = soma * soma;
    return [soma, quadradoSoma];
}

function concatenaPalavras(p1, p2) {
    return p1 + p2;
}



function primeiroUltimoCaractere(str) {
    return str[0] + str[str.length - 1];

}


function comparacaoNumeros(n1, n2) {
    if (n1 > n2) {
        return `${n1} é maior que ${n2}.`;

    } else if (n2 > n1) {
        return `${n2} é maior que ${n1}.`;
    } else {
        return "Os números são iguais.";
    }

}


function testeEscopo() {
    let dentroFuncao = "Variável dentro da função.";
    return dentroFuncao;
}

let foraFuncao = "Variável fora da função.";

console.log(testeEscopo());
console.log(foraFuncao);

 
function calcularMedia(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        
    }

    return soma / numeros.length;
}




function fatorial(numero) {
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

function executaCallback(saudacao) {
    saudacao();
}


function aguardarSegundos(segundos) {

    setTimeout(function() {
        console.log(`Passaram-se ${segundos} segundos.`);
    }, segundos * 1000);


}

function ehNumero(n) {

    return !isNaN(n);
}
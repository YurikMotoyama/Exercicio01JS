
let nome = "Yurik";
let idade = 21;
console.log(` Eu sou ${nome}, tenho ${idade} anos.`);


let numero1 = 1;
let numero2 = 2;
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);


let palavra1 = "teste";
let palavra2 = "teste2";
let concat = palavra1 + " " + palavra2;
console.log(concat);
let string = "Teste";
console.log("Primeiro caractere:", string.charAt(0));
console.log("Último caractere:", string.charAt(string.length - 1));

let x = 5;
let y = 10;

console.log(`${x} é maior que ${y}?`, x > y);
console.log(`${x} é menor que ${y}?`, x < y);

let externa = "externa";

function testEscopo() {
    let interna = "interna";
    console.log("Dentro da função:", externa); 
    console.log("Dentro da função:", interna); 
}
testEscopo();
console.log("Fora da função:", externa);

console.log("mensagem de log");
console.warn("Mensagem de aviso");
console.error("Mensagem de erro");
console.info("mensagem de informação");

let numeroString = "42";
let numeroInteiro = parseInt(numeroString);
console.log("numero inteiro:", numeroInteiro);

if (typeof window !== 'undefined') {
    console.log("Executando no ambiente do navegador");
} else {
    console.log("Executando no ambiente do Node.js");
}


function somaDoisNumeros(a, b) {
    return a + b;
}

let resultadoSoma = somaDoisNumeros(8, 4);
console.log("Resultado da soma:", resultadoSoma);

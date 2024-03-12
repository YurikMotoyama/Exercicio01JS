const lista = new Array()
lista.push("1","3","8","2","4")

function printaArray(lista){
    lista.sort()
    console.log(lista)
}
printaArray(lista)








/*function achar(lista, numero){
    for (let i = 0; i< lista.lenght; i++){
        if ((i -1) == lista.lenght){
            if (numero == lista[i]){
                console.log(numero)
        }
        else {
            console.log(-1)
        }
    }
        else if (numero == lista[i]){
            console.log(numero)
        }
    }
}
achar(lista, 3)*/

function achar(lista, numero) {
    let encontrado = false; 

    for (let i = 0; i < lista.length; i++) {
        if (numero == lista[i]) {
            encontrado = true;
            console.log(numero);
            break; 
        }
    }

    if (!encontrado) {
        console.log(-1); 
    }
}

achar(lista, 345)







function concatArray (array1,array2){
    let array3 = new Array();
    for(i = 0; i < array1.length; i++){
        array3.push(array1[i])
    }
    for(i = 0; i < array2.length;i++){
        array3.push(array2[i])
    }
    console.log(array3)
}







teste = [1,2,3,4,5]
teste.reverse()
console.log(teste)








const listaDeObjetos = [
    { nome: "João", idade: 25, cidade: "São Paulo" },
    { nome: "Maria", idade: 30, cidade: "Rio de Janeiro" },
    { nome: "Pedro", cidade: "Salvador" },
    { nome: "Ana", idade: 35, cidade: "Fortaleza" }
];

function filtrarObjetos(lista, propriedade){
    let retorno = []

    lista.forEach(objeto => {
        if(objeto[propriedade]){
            retorno.push(objeto)
        }
    })

    return retorno
}

console.log(filtrarObjetos(listaDeObjetos, "idade"))








function par(Array){
    const pares= []

    array.forEach(elemento => {

        if (elemento % 2 === 0) {
            numerosPares.push(elemento);
        }
        
    })
    console.log(pares)
}







function juntarComDelimitador(array, delimitador) {
    return array.join(delimitador);
}








function calcularMedias(alunos){
    let mediaGeral = 0
    let maiorMedia = null
    let menorMedia = null
    alunos.forEach(aluno => {
        aluno.media = 0
        aluno.notas.forEach(nota => {
            aluno.media += nota
        })
        aluno.media /= aluno.notas.length

        mediaGeral += aluno.media

        if(menorMedia == null){
            menorMedia = aluno.media
        }else{
            if(aluno.media < menorMedia){
                menorMedia = aluno.media
            }
        }

        if(maiorMedia == null){
            maiorMedia = aluno.media
        }else{
            if(aluno.media > maiorMedia){
                maiorMedia = aluno.media
            }
        }
    })
    mediaGeral /= alunos.length

    return {
        "mediaGeral" : mediaGeral, 
        "menorMedia" : menorMedia, 
        "maiorMedia" : maiorMedia
    }
}







function dividirConjuntos(elementos, tamanho) {
    const conjuntos = [];
    let conjuntoAtual = [];

    elementos.forEach(elemento => {
        conjuntoAtual.push(elemento);

        if (conjuntoAtual.length === tamanho) {
            conjuntos.push(conjuntoAtual);
            conjuntoAtual = [];
        }
    });

    if (conjuntoAtual.length > 0) {
        conjuntos.push(conjuntoAtual);
    }

    console.log(conjuntos); // Imprime os conjuntos no console
}









let objetoQualquer = {
    propriedade1: "Conteúdo 01",
    propriedade2: "conteúdo 02",
    juntaPropriedades: function(){
        return this.propriedade1 + " - " + this.propriedade2
    },
    juntaPropriedadesQueNaoFunciona: () => {
        return this.propriedade1 + " - " + this.propriedade2
    }
}
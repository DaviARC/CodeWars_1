function descendingOrder(n){
    if(n < 0){
        return console.log(`O número ${n} é negativo!`)
    }

    let j = 1;
    let stringN = String(n);
    let arrayN = [];

    for(let i = 0;i < stringN.length; i++){
        arrayN.push(stringN.substring(i,j));
        j++;
    }

    let resultado ="";
    for(let i = 0; i < arrayN.length; i++){
        let maiorNumero = 0;
        let index = 0;
            for(let j = 0; j< arrayN.length; j++){
                if(arrayN[j] > maiorNumero){
                    maiorNumero = arrayN[j];
                    index = j;
                }
            }
            resultado += String(maiorNumero);
            arrayN[index] = 0;
            maiorNumero = 0;
    }
    return resultado;
}

console.log(descendingOrder(145263));

// Sua tarefa é criar uma função que possa receber qualquer número inteiro não negativo como argumento e retorná-lo com seus dígitos em ordem decrescente. Essencialmente, reorganize os dígitos para criar o número mais alto possível.

// Exemplos:
// Entrada: 42145 Saída: 54421

// Entrada: 145263 Saída: 654321
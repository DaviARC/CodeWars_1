function deleteNth(arr,n){
    let objetos = [];
    let diferentes = [arr[0]]
    arr.forEach((numero) => {
        let igual = true;
        for(let j = 0; j < diferentes.length; j++){
            if(diferentes[j] === numero){
                igual = false;
                break;
            }
        }
        if(igual){
            diferentes.push(numero);
        }
    });

    diferentes.forEach(numero =>{
        objetos.push(new Numero(numero));
    })

    let resultado = [];
    arr.forEach(num => {
        let bool = false;
        for(let i = 0; i < objetos.length; i++){

            if(objetos[i].numero === num && objetos[i].cont < n){
                objetos[i].cont++;
                bool = true;
            }   
        } 
        if(bool){
            resultado.push(num);
        }
    })

    return resultado;
}

function Numero(numero) {
    this.numero = numero;
    this.cont = 0;
  }

deleteNth([1,1,3,3,7,2,2,2,2], 3)

//Dada uma lista e um número, crie uma nova lista que contenha cada número da lista no máximo N vezes, sem reordenar.

// Por exemplo, se o número de entrada for 2 e a lista de entrada for [1,2,3,1,2,1,2,3], você pega [1,2,3,1,2], descarta o próximo [ 1,2], pois isso levaria a 1 e 2 a aparecerem 3 vezes no resultado e, em seguida, a 3, o que leva a [1,2,3,1,2,3].

// Com a lista [20,37,20,21] e o número 1, o resultado seria [20,37,21].
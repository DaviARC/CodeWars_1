function accum(s){  
    let letras = s.split("");
    let resultado = "";
    letras.forEach((letra, i) =>{
        resultado += letra.toUpperCase();
        for(let j = 0; j < i; j++){
            resultado += letra.toLowerCase();
        }
        if(i !== (letras.length - 1)){
            resultado += "-";
        }
    })
    return(resultado);
}

accum("ZpglnRxqenU"); 

// Desta vez, sem história, sem teoria. Os exemplos abaixo mostram como escrever uma função acumular:

// Exemplos:
// acumular("abcd") -> "A-Bb-Ccc-Dddd"
// acumular("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// acumular("cwAt") -> "C-Ww-Aaa-Tttt"
// Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
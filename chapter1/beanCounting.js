/*
Pseudocódigo paara contarBs

declarar función que recibe cadena
declarar contador;
iterar sobre cada caracter de la cadena
    si el caracter es === "B"
        Sumar 1 a contador
    retornar contador
*/

/*
let countBs = Cadena => {
    let contador = 0;
    for(let posicion = 0; posicion < Cadena.length; posicion ++){
        if(Cadena[posicion] === "B"){
            contador = contador + 1;             
        }
    }
    return contador;
}

console.log(countBs("BOB"));
// → 2
*/

/*
declarar función que recibe 2 argumentos, 'cadena' a iterar y 'caracter a contar'
declarar contador;
Iterar sobre el la cadena
    Si caracter === 'caracter a contar'
        Sumar 1 a contador;
retornar contador
*/

let countChar = (Str, Char) => {
    let counter = 0;
    for(let position = 0; position < Str.length; position ++){
        if(Str[position] === Char){
            counter = counter + 1;
        }
    }
    return counter;
}

console.log(countChar("kakkerlak", "k"));
// → 4
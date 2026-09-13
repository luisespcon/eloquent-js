let tamano = 11
let tablero = ""

for(filas = 0; filas < tamano; filas ++){
    for(columnas = 0; columnas < tamano; columnas ++){
        if((filas + columnas) % 2 === 0){
            tablero += " ";
        }   else {
            tablero += "#";            
        }
    }
    tablero += "\n";
}

console.log(tablero);

/*

1.- Definir una variable para el tamaño (dinámica)
2.- Definir una variable string vacía para el tablero
3.- Implementar for para el crecimiento de las filas respecto al tamaño
4.- Anidar un for para el crecimiento de las columnas respecto al tamaño
5.- Anidar un if para sumar fila + columna y modular a 0
6.- Si es par escribir " "
7.- Si no "#"
8.- Ejecutar salto de linea despues del if
9.- Imprimir tablero

*/


// Otra implementación
/*
For que itere 8 veces para imprimir las filas
if para definir si la fila es impar o par
  si la fila es impar comienza con space
    for que imprime los caracteres si la fila es impar
      suma a acumulador de caracteres
    imprime caracter
  si la fila es par comienza con hash
    for que imprime los caracteres si la fila es par
      suma a acumulador de caracteres
    imprime caracter
suma uno a acumulador de fila
*/

let sizeChess = 8;

for (let counterRows = 0; counterRows < sizeChess; counterRows++) {
  if (counterRows % 2 == 0) {
    let hashRow = "";
    for (let counterHash = 0; counterHash < sizeChess / 2; counterHash++) {
      hashRow = hashRow + " #";
    }
    console.log(hashRow);
  } else {
    let spaceRow = "";
    for (let counterSpace = 0; counterSpace < sizeChess / 2; counterSpace++) {
      spaceRow = spaceRow + "# ";
    }
    console.log(spaceRow);
  }
}
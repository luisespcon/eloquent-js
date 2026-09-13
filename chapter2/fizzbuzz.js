for(number = 1; number <= 100; number ++){
    if (number % 3 == 0 && number % 5 == 0){
        console.log("FizzBuzz");
    } else if(number % 3 == 0){
        console.log("Fizz");
    } else if (number % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(number);
    }
}

/* 
1.- Declarar un ciclo for con una variable iniciada en 0 llamada number y extención 
    de 99
2.- Verificar con un if si el numero es divisible entre 3 y 5 e imprimir "FizzBuzz"
3.- Verificar con un if si el numero es divisible entre 3 e imprimir "Fizz"
4.- Verificar con un if si el numero es divisible entre 5 e imprimir "Buzz"
5.- Si no se cumple ninguna de las anteriores imprimir el número
*/


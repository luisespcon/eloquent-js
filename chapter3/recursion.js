/*
Primero maneja el caso del número negativo
Luego los dos casos base (0 y 1)
Luego el caso recursivo
*/

// Your code here.

const isEven = N => {
    if(N < 0){
        N = N * -1
    } else if (N === 1){
        return false
    } else if (N === 0){
        return true
    } else {
        N = N - 2
    }
    return isEven(N)
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
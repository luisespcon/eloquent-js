// Your code here.
const min = function(a, b) {
  if(a < b){
      return a
  } else if (b < a) {
    return b
  } else {
    return (`${a} y ${b} son iguales`)
  }
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
/*
reverseArray

Declare myArray
Declare function reverseArray which takes an array as argument "myArray"
    Declare newArray as empty array
    Declare a for of loop that iterates thru each position from array
    unshift each value into newArray
Return newArray
*/

let myArray = ["A", "B", "C"];

function reverseArray(array){
    let newArray = [];
    for(const value of array){
        newArray.unshift(value);
    }
    return newArray;
}
console.log(myArray);
console.log(reverseArray(myArray));

/*reverseArrayInPlace

Declare arrayValue as an array to be mutated
Declare a function that receive an array as input
Declare a classic for loop to iterate thru the half of the size of the array (math.floor(array.length / 2))
    declare a binding to hold the mirror value which is mirror = (array.length - i) - 1 (length counts elements, mirror is for position, thats why -1)
    declare a temporal binding to hold the mirror value
    declare a temporal binding to hold the i value
    array[mirror value binding] = temporal i value
    array[i value binding] = temporal mirror value
return array
*/

let arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(array){
    for (let i = 0; i < Math.floor(array.length / 2); i++){
        let mirror = (array.length - i) - 1;
        let tempMirror = array[mirror];
        let tempI = array[i];
        array[mirror] = tempI;
        array[i] = tempMirror;
    }
    return array;
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/*
q. which variant do you expect to be useful in more situations? 
a. It depends on the situation, reverseArray is a pure function, so it doesn't modify anything else beyond itself,
   but since it uses unshift method it reindexed every value of the array which takes n² effort, on the other hand reverseArrayInPlace
   does not reindexed anything thru each iteration, which means n effort even when it hold 2 temp values and then assign them.

   If reverseArray use .push instead .unshift it wouldn't reindexed anything and the effort would be equivalent to reverseArrayInPlace; since it's 
   a pure function i think reverseArray could be useful in more situations.

q. Which one runs faster?
a. Since reverseArrayInPlace took the half iterations of reverseArray i could say reverseArrayInPlace, even when it has to do the temp binding assignments
   it doesn't have to do the reindexed work.
*/
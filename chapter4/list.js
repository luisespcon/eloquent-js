function arrayToList(a){
    let list = null;
    for (let i = a.length - 1; 0 <= i; i--){
        list = {value: a[i], rest: list};
    }
    return list;
}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}


function listToArray(L){
    let a = [];
    for(let actual = L; actual !== null ; actual = actual.rest){
    a.push(actual.value);
    }
    return a;
}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function prepend(valPrep, list){
    let newList = {value: valPrep, rest: list};
    return newList;
}
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}


function nth(L, position){
    let node = L;
    for (let i = 0; i <  position; i++){
    node = node.rest;
    }
    return node.value;
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

function nthRecursive(L, position){
    if(L === null) return undefined;
    if(position === 0) return L.value;
    return nthRecursive(L.rest, position -1);
}

console.log(nthRecursive(arrayToList([10, 20, 30]), 1));
console.log(nthRecursive(arrayToList([10, 20, 30]), 0));
console.log(nthRecursive(arrayToList([10, 20, 30]), 5));
console.log(nthRecursive(null, 0));
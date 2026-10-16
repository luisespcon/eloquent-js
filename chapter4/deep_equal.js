function deepEqual(objectA, objectB){
    if (objectA === objectB){
        return true;
    }   else if   ((typeof(objectA) != "object" || objectA == null)  || (typeof(objectB) != "object" || objectB == null)) {
        return false;
    }
    let llavesA = Object.keys(objectA);
    let llavesB = Object.keys(objectB);

    if (llavesA.length !== llavesB.length){
        return false;
    }
    for (let llave of llavesA) {
        if (!llavesB.includes(llave) || !deepEqual(objectA[llave], objectB[llave])) {
            return false;
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
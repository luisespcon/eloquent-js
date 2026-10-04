//----------Step implementation----------

/* 
Declare a "range" function and ask for 3 arguments (begin, end, step)
Declare an empty array called collection
Declare a for loop that iterates from begin to end
for (let i = begin; i <= end; i + step)
insert i into collection
Return collection
Declare a "sum" function that takes collection as argument
Declare accumulator = 0
Declare a for of loop that iterates thru each position from the collection and sum each value from each position
for (let valueCollection of collection)
accumulator = accumulator + valueCollection
Return accumulator
*/

function range(begin, end, step = 1){
    let collection = [];
    if (step >= 1){
        for (let i = begin; i <= end; i += step){
            collection.push(i);
        }
        return collection;
    }else{
        for (let i = begin; i >= end; i += step){
            collection.push(i);
        }
        return collection;
    }
}

function sum(collection){
    let accumulator = 0;
    for (let valueCollection of collection){
        accumulator = accumulator + valueCollection;
    }
    return accumulator;
}

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// → 55








//----------No step implementation----------

/* 
Declare a "range" function and ask for 2 arguments (begin, end)
Declare an empty array called collection
Declare a for loop that iterates from begin to end
for (let i = begin; i <= end; i++)
insert i into collection
Return collection
Declare a "sum" function that takes collection as argument
Declare accumulator = 0
Declare a for of loop that iterates thru each position from the collection and sum each value from each position
for (let valueCollection of collection)
accumulator = accumulator + valueCollection
Return accumulator
*/

/*function range(begin, end){
    let collection = [];
    for (let i = begin; i <= end; i++){
        collection.push(i);
    }
    return collection;
}

function sum(collection){
    let accumulator = 0;
    for (let valueCollection of collection){
        accumulator = accumulator + valueCollection;
    }
    return accumulator;
}*/

//console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(sum(range(1, 10)));
// → 55
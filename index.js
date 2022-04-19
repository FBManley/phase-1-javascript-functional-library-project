
function myEach(collection, callback){
    for(let accessor in collection) { //both arrays & objects
        callback(collection[accessor])
    }  
    return collection; // return //original collection
}

function myMap(collection, callback){
    let modifiedArray = []
    for(let accessor in collection) { 
        modifiedArray.push(callback(collection[accessor]))
   }
   return modifiedArray;
}

function myReduce(collection, callback, acc){
    let copy = [...collection]
    acc = acc || copy.shift();
    for(let accessor in copy) { 
        acc = callback(acc, copy[accessor], copy)
    } 
    return acc;
}
// function myReduce(collection, callback, acc) {
//     let newCollection = standardizeInput(collection);
//     if(!acc){
//         acc=newCollection[0];
//         newCollection = newCollection.slice(1);
//     }
//     //const len = newCollection.length;
//     for(let i = 0; i < newCollection.length; i++) {
//         acc = callback(acc, newCollection[i], newCollection);
//     }
//     return acc;
// }


function myFind(collection, callback){
    for(let accessor in collection) { 
        let element = collection[accessor]
        if (callback(element)){
         return element;   
        }
        
    }  
}

function myFilter(collection, callback){
    let selectedArray = [];
    for(let accessor in collection) { 
        let element = collection[accessor]
        if (callback(element)){
            selectedArray.push(element);
          
        }
    }  
    return selectedArray;  
}

function mySize(collection){
    return Object.keys(collection).length
}

function myFirst(collection, n = 1){
    let count = 1;
    let array = [];
    for(let accessor in collection){
        if(count <= n){
            array.push(collection[accessor]);
            count++
        }
    }
    return array.length > 1 ? array : array[0]
}

function myLast(collection, n = 1 ){
    let startingIndex = collection.length - n;
    return n > 1 ? collection.slice(startingIndex, collection.length) : collection[startingIndex]
}

function mySortBy(array, callback){
    return[...array].sort((a, b) => callback(a) - callback(b));
}

function myFlatten(array, oneLevel) {
    if(oneLevel){
        return array.flat();
    }
    const stack = [...array];
    const res = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    return res.reverse();
}

function myKeys(collection){
    const keys = [];
    for(let key in collection){
        keys.push(key);
    }
    return keys;
}

function myValues(obj){
    const values = [];
    for (let key in obj){
        values.push(obj[key])
    }
    return values;
}


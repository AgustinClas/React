//Array

const array = [1,2,3];
//array.push(1);
//array.push(2);
//array.push(3);

console.log(array);

let array2 = [...array,5];
array2.push(5);

console.log(array);
console.log(array2);

const array3 = array2.map(function(x){
    return x * 2
});

console.log(array);
console.log(array2);
console.log(array3);
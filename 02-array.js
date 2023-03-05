'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits.length); // 2
console.log(fruits[0]); // apple
console.log(fruits[fruits.length - 1]); // banana

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
    // apple
    // banana

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
    // apple
    // banana

// c. forEach (배역의 value마다 함수를 전달하는 구나!)
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
})
    // apple 0 (2) ['apple', 'banana']
    // banana 1 (2) ['apple', 'banana']

fruits.forEach((fruit) => console.log(fruit))
    // apple
    // banana 

// 4. Addition, deletion, dopy
// push: add an item to the end
fruits.push('orange','peach');
console.log(fruits); // ['apple', 'banana', 'orange', 'peach']

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits); // ['apple', 'banana']

// unshift: add an item to the beginning
fruits.unshift('orange','peach');
console.log(fruits); // ['orange', 'peach', 'apple', 'banana']

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits); // ['apple', 'banana']

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('orange','peach','lemon');
console.log(fruits); // ['apple', 'banana', 'orange', 'peach', 'lemon']
fruits.splice(1, 1);
console.log(fruits); // ['apple', 'orange', 'peach', 'lemon']
fruits.splice(1, 1, 'watermelon', 'kiwi');
console.log(fruits); // ['apple', 'watermelon', 'kiwi', 'peach', 'lemon']

// combine two arrays
const fruits2 = ['lime', 'yuja'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ['apple', 'watermelon', 'kiwi', 'peach', 'lemon', 'lime', 'yuja']

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits); // ['apple', 'watermelon', 'kiwi', 'peach', 'lemon']
console.log(fruits.indexOf('apple')); // 0
console.log(fruits.indexOf('lime')); // -1

// includes
console.log(fruits.includes('lemon')); // true
console.log(fruits.includes('lime')); // false

// lastIndexOf
fruits.push('apple');
console.log(fruits.lastIndexOf('apple')); // 5
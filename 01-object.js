// Objects

// 1. Literal and properties
const obj1 = {}; // "object literal syntax"
const obj2 = new Object(); // object constructor syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const me = {name: "sohyun", age: 20};
print(me) // sohyun 20

// dynamically typed language
// can add properties later
me.hobby = "exercise"; 
console.log(me.hobby); // exercise

// can delete properties later
delete me.hobby
console.log(me.hobby); // undefined

// 2. Computed Properties 
// key에 상응하는 value를 받아와야 할 때
console.log(me['name']); // sohyun, key should be always string
me['hobby'] = "exercise";
console.log(me.hobby); // exercise

function printValue1(obj, key) {
    console.log(obj[key]); 
}
printValue1(me,"name"); // sohyun

function printValue2(obj, key) {
    console.log(obj.key); 
}
printValue2(me,"name"); // undefined

// 3. Property value shorthand
function makePerson(name,age) {
    return {
        name, // key 와 value가 동일할 때 생략가능
        age
    };
}
const person1 = makePerson('steve', 30);
console.log(person1); // {name: 'steve', age: 30}

// 4. Constructor Function
// 함수로 Object를 만들 때
function Person(name,age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}
const person2 = new Person('steve', 30);
console.log(person2); // Person {name: 'steve', age: 30}

// 5. in operator (key in obj)
console.log('name' in me); // true
console.log('job' in me); // false
console.log(me.notDefinedKey); // undefined

// 6. for..in vs for..of
// for (key in obj)
for (key in me) {
    console.log(key); 
}
    // name
    // age
    // hobby

// for(value of iterable)
const array = [1,2,3,4];
for(value of array) {
    console.log(value);
}
    // 1
    // 2
    // 3
    // 4

// 7. Cloning
const user1 = {name: 'sohyun', age: 30};
const user2 = user1; // user2의 reference는 user1

console.log(user2.name); // sohyun
user2.name = 'developer';
console.log(user1.name); // developer

// Object clone way
// Old way
const user3 = {};
for (key in user1) {
    user3[key] = user1[key]; // key is value of user1
}
console.log(user3); // {name: 'developer', age: 30}

// Object.assign()
// 자바스크립트의 모든 객체는 Object를 상속한다.
const user4 = {};
Object.assign(user4, user1);
    // const user4 = Object.assign(user4, user1);
console.log(user4); // {name: 'developer', age: 30}

const fruit1 = {color: "red"};
const fruit2 = {color: "blue", size: "big"};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
    // blue, property 를 덮어씌움
    // big

const fruit3 = {color: "pink", size: "medium"}
const mixed2 = Object.assign({}, mixed, fruit3)
console.log(mixed2.color);
console.log(mixed2.size);
    // pink
    // medium
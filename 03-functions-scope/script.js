// function sayHello(name = "thuan", age = "22") {
//     console.log(`hello các bạn ${name}, tôi ${age} tuổi`);
// }
// sayHello("nam");

// function number  (a,b) {return a+b}
// js arrow function () => {}

// const addNumber = (a, b) => {
//     return a + b;
// }

// cách 2
// const addNumber =(a,b) => a+b; return a+b

// console.log(addNumber(9, 10));

// Arrays as params
// function getRandom(arr) {
//     const randomIndex = Math.floor(Math.random() * arr.length);

//     const item = arr[randomIndex];

//     console.log(item);
// }

// getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// const x = 100;

// An If statement is a block
// if (true) {
//     console.log(x);
//     const y = 200;
//     console.log(x + y);
// }

// console.log(y); // ReferenceError: y is not defined

// A loop is a block
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// console.log(i); // ReferenceError: i is not defined

// Using var
// if (true) {
//     const a = 500;
//     let b = 600;
//     var c = 700;
// }
// console.log(c);

// var IS function scoped
// function run() {
//     var d = 100;
//     console.log(d);
// }

// run();
// console.log(d);


// const foo = 1;
// var bar = 2; // Put on the window object

// function first() {
//     const x = 100;

//     function second() {
//         const y = 200;
//         console.log(x + y);
//     }

//     // console.log(y);
//     second();
// }

// first();

// if (true) {
//     const x = 100;

//     if (x === 100) {
//         const y = 200;
//         console.log(x + y);
//     }
//     console.log(y);
// }

// Khai bao ham
// function addDollarSign(value) {
//     return '$' + value;
// }

// When using declarations, you can invoke the function before the declaration. With expressions, you can not
// console.log(addDollarSign(100));

// // Function Expression
// const addPlusSign = function (value) {
//     return '+' + value;
// };

// console.log(addPlusSign(200));

//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
// const add = (a, b) => {
//     return a + b;
// };

// Implicit Return
// const subtract = (a, b) => a - b;

// Can leave off () with a single param
// const double = (a) => a * 2;

// Returning an object
// const createObj = () => ({
//     name: 'Brad',
// });

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (n) {
//     console.log(n);
// });

// Arrow function in a callback
// numbers.forEach((n) => console.log(n));

// console.log(add(1, 2));
// console.log(subtract(10, 5));
// console.log(double(10));
// console.log(createObj());

//  Go to 'sources' tab and add a breakpoint at the first line and step through to see the execution phase in action
// const x = 100;
// const y = 50;

// function getSum(n1, n2) {
//   const sum = n1 + n2;
//   return sum;
// }

// const sum1 = getSum(x, y);
// const sum2 = getSum(10, 5);

// console.log(sum1, sum2);



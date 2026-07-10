

// console.log(a);

// let a = 5;
// console.log(a);


// function outer() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// const increment = outer();

// console.log(increment());
// console.log(increment());


// (function () {
//     console.log("Hello");
// })();

// (function () {
//     console.log("IIFE Function called");
// })();


function greet(name) {
    console.log("Hello " + name);
}
greet("John");
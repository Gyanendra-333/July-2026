

// let n = 4;

// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= n; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }

// console.log("Pattern Break");

// let num = 5;
// function pattern(num) {
//     for (let i = 1; i <= num; i++) {
//         let str = "";
//         for (let j = 1; j <= i; j++) {
//             str += "* ";
//         }
//         console.log(str);
//     }
// }
// pattern(num);



// let n = 6;
// function pattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "$ ";
//         }
//         console.log(row);
//     }
// }
// pattern(n);


// let n = 5;

// for (let i = n; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }


let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    // Spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // Stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }

    console.log(row);
}
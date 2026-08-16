//Let's go!∞∞∞∞∞∞∞

//Adding in Functions;

function Aryan(a, b) {
    console.log(a + b)
}
console.log(45 + 47)

//Multiplication in Functions; 🔴   

function Aryan(a, b) {
    console.log(a * b)
}
console.log(Aryan(2, 5))
//Arrow Function in javaScript! 🟢

const Me = (a, b) => {
    return (a * b)
}
console.log(Me(3, 3))

function Aryan(str) {
    let count = 0;
    for (const num of str) {
        if (
            num === "a" || num === "e" || num === "i" || num === "o" || num === "u"
        ) {
            count++;
        }
    }
    return count;
}
console.log(Aryan("aryan singh"))

function VovelsCounter(string) {
    let Counter = 0;
    for (const Vovels of string) {
        if (Vovels === "a" || Vovels === "A" || Vovels === "e" || Vovels === "E" || Vovels === "i" || Vovels === "I" || Vovels === "o" || Vovels === "O" || Vovels === "u" || Vovels === "U") {
            Counter++;
        }

    }
    return Counter;
}


const vc = (string) => {
      let Counter = 0;
    for (const Vovels of string) {
        if (Vovels === "a" || Vovels === "A" || Vovels === "e" || Vovels === "E" || Vovels === "i" || Vovels === "I" || Vovels === "o" || Vovels === "O" || Vovels === "u" || Vovels === "U") {
            Counter++;
        }

    }
    return Counter;
}

// Pratice Questions↓; 🔵

let arr = [1, 2, 3, 4, 5];
arr.forEach((Sq) => {
    console.log(Sq * Sq);
});
arr = [1, 2, 3, 4, 5, 6, 7, 8, 90, 54, 456, 78, 887, 6543, 232, 4546];
  let array = arr.filter((val) => {
    return val % 2 > 0;
})
console.log(array)
// practice Questions↓; 🔵
let scores = [60, 75, 80, 90, 91, 95, 99, 92];
let Graterninty = scores.filter((val) => {
    return val > 90;
})
console.log(Graterninty);
// practice Questions↓; 🔵

let n = prompt("Enter a Number: ")

let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr)
let sum = arr.reduce((result, current) => {
    return result + current
});
console.log("sum: ", sum)

let Factorial = arr.reduce((result, current) => {
    return result * current
})
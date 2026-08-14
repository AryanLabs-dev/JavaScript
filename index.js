//Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

//let's start

let array = [250, 645, 300, 900, 50]
let i = 0
for (let value of array) {
    let offer = value / 10;
    array[i] = array[i] - offer
    console.log(`Value after offer ${array[i]}`)
    i++
}

let Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(Companies.shift())
console.log(Companies.splice(1,1,"Ola"))
console.log(Companies.push("Amazon"))
console.log(Companies);

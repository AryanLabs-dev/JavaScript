let mode = document.querySelector("#btn")
let mymode = "lighter"
let body = document.querySelector("body")

mode.addEventListener("click", () => {
    if (mymode === "lighter") {
        mymode = "darkar"
        document.body.classList.add("darkar")
    }
    else{
        mymode = "lighter"
        document.body.classList.remove("darkar")
    }
    console.log(mymode)
})

 let dev = document.querySelector("btn");
dev.addEventListener("click", () => {
    console.log("You are trying to change mode")

})

// let mode = document.querySelector("#btn")

// let mymode = "lighter"

// let body = document.querySelector("body")

// mode.addEventListener("click", () => {

//     if (mymode === "lighter") {

//         mymode = "darkar"

//         document.body.classList.add("darkar")
//     }
//     else {
//         mymode = "lighter";

//         document.body.classList.remove("darkar")
//     }
//     // console.log("You're trying to changing the mode")
//     console.log(mymode)
// })
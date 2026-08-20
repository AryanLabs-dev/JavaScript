// Practice Q1. 🟡
// let div = document.createElement("h1")
// div.innerHTML = "<i>Hello, Aryan sir!</i>"
// document.querySelector("body").prepend(div)

//Practice Q2. 🟢
let div = document.createElement("button")
div.innerHTML = "Click me"
document.querySelector("body").prepend(div)
div.style.color = "white"
div.style.backgroundColor = "red"

//Practice Q3. 🔴
let parahs = document.querySelector("p")
parahs.classList.add("content")
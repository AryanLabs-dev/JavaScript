// //Hey Now we're learnig about the DOM's in JS!
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " Apna College Student";

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "New Unique Value 1"
// divs[1].innerText = "New Unique Value 2"
// divs[2].innerText = "New Unique Value 2"

// IT also make it. like this!
let divs = document.querySelectorAll(".box")
let me = 1;
for (div of divs) {
    div.innerText = `New Unique Value ${me}`;
    me++;
}
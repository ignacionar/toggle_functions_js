const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const body = document.querySelector("body");

let array = ["color2", "color3", "color4", "color1"];
let number = 0;

let array2 = ["slow", "medium", "fast"];
let number2 = 0;

let classes = btn3.classList;

function toggleFunc() {
    btn.className = array[number];
    number++;
    if (number == 4) {
        number = 0;
    }
}

function toggleFunc2() {
    console.log(array2[number2]);
    number2++;
    if (number2 == 3) {
        number2 = 0;
    }
}

function funcion() {
    classes.toggle("off")
    if (classes.value === "on") {
        body.style.backgroundColor = "white"
    } else {
        body.style.backgroundColor = "black"
    }
}

btn.addEventListener("click", toggleFunc);
btn2.addEventListener("click", toggleFunc2);
btn3.addEventListener("click", funcion);
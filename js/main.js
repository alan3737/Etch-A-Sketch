//for loop 16 times to create 16 rows where each row contian 16 divs
//each box is 2px; box-sizing = border-box; box has shadow and black border

const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const black = document.querySelector(".black");
const rainbow = document.querySelector(".rainbow");
const erase = document.querySelector(".erase");
const color = document.querySelector("#color");

container.setAttribute("style", "display:flex; flex-direction:column; border: 1px solid black; height:500px; width:500px;")


function color_rainbow (e) {
    let arr = ["red", "lightcoral", "orange", "yellow", "green", "aquamarine", "blue", "indigo", "violet", "black"];
    this.style.backgroundColor = arr[Math.floor(Math.random() * 10)];
}

function color_white(e) {
    this.style.backgroundColor = "white";
}

function color_black(e) {
    this.style.backgroundColor = "black";
}

function color_color(e) {
    this.style.backgroundColor = color.value;
}

function turn_color(e) {
    const pix = container.querySelectorAll("div");
    pix.forEach(p => {p.removeEventListener("mouseover", color_rainbow); p.removeEventListener("mouseover", color_black);
            p.removeEventListener("mouseover", color_color); p.addEventListener("mouseover", color_color)}); 
}
function turn_white(e) {
    const pix = container.querySelectorAll("div");
    pix.forEach(p => {p.removeEventListener("mouseover", color_rainbow); p.removeEventListener("mouseover", color_black);
            p.removeEventListener("mouseover", color_color); p.addEventListener("mouseover", color_white)}); 
}

function turn_black(e) {
    const pix = container.querySelectorAll("div");
    pix.forEach(p => {p.removeEventListener("mouseover", color_rainbow); p.removeEventListener("mouseover", color_black); 
            p.removeEventListener("mouseover", color_color); p.addEventListener("mouseover", color_black)}); 
}

function turn_rainbow(e) {
    const pix = container.querySelectorAll("div");
    pix.forEach(p => {p.removeEventListener("mouseover", color_rainbow); p.removeEventListener("mouseover", color_black); 
            p.removeEventListener("mouseover", color_color); p.addEventListener("mouseover", color_rainbow)});
}



function clear_canvas(e) {
    const r = container.querySelectorAll(".row");
    r.forEach(p =>container.removeChild(p));
    let size = prompt("choose a size for the canvas");
    //numbers only
    createCanvas(size, size);
}



function createCanvas(row, column) {
    for(let i = 0; i < row; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("style", "display:flex; flex-grow:1;")
        for(let j = 0; j < column; j++) {
            const column = document.createElement("div");
            row.classList.add("col");
            column.setAttribute("style", "flex-grow:1; background-color: white");
            column.addEventListener("mouseover", color_black)
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}

let row = 16;
let column = 16;

createCanvas(row, column);
color.addEventListener("click", turn_color);
clear.addEventListener("click", clear_canvas);
rainbow.addEventListener("click", turn_rainbow);
black.addEventListener("click", turn_black);
erase.addEventListener("click", turn_white);




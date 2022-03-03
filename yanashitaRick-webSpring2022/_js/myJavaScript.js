let myName = "Rick"
console.log(myName)

console.log("Hello World")

function init() {
    changeHeading();
    greeting();
    createImage();
}

function changeHeading() {
    let myHeading = document.querySelector('h1');
    myHeading = document.querySelector('h2');
    myHeading.textContent = 'Javascript Changed This Heading';
    // this function logs a line of text in the browser
    // This is a method, and the "console" is called an object
    // alert ("welcome to the most obnoxious function in javascript....."); <-- Popup alert when the website loads in the browser
    
    // const = var = let; means the variable can never change
    // use 'let' the most, const creates errors when overridden
    
    // myHeading = 'Hello'; 
    
    // Javascript overrode the original h2 text by assigning new textContent (Javascript has more power than HTML in this situation)

}

let greetingPrefix = "Hello there, ";


function greeting(){
    const para = document.createElement("p");
    para.innerText = greetingPrefix + myName;
    document.body.appendChild(para);
}

function createImage(){
    const img = document.createElement("img");
    img.src = "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80";
    document.body.appendChild(img);
}
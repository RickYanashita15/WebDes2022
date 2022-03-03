/*

User Interface discussion...

How do you interact with the screen?

Clicking on buttons
Keyboard
Images on the screen
Mouse
Finger

*/

// let user = prompt("choose: rock, paper, or scissors...");
let user;
let choices = ["rock", "paper", "scissors"];

function userChoice(choice) {
    user = choice;
    compare();
}

function randNum(things){
    return Math.floor(Math.random() * things.length);
}

function cpuChoice(){
    //cpu will be the same value all the time
    return choices[randNum(choices)];
}

function drawImg(pic, width, height, alt, id){
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    x.setAttribute("alt", alt);
    // document.body.appendChild(x);

    document.getElementById(id).appendChild(x);
}
// I got this from https://www.javascripttutorial.net/javascript-dom/javascript-removechild/
function removeChild(id){
    let identity = document.getElementById(id);
    while (identity.firstChild) {
        identity.removeChild(identity.firstChild);
    }
}

// console.log("the user choice is " + user);
// console.log("the randnum is " + randnum);
// console.log("the computer choice is " + cpu);

function compare(){
    let cpu = cpuChoice();

    removeChild('player');
    removeChild('cpu'); 

    if (user == "rock"){
        drawImg("_images/rock.jpg", "100", "100", "rock", "player");
    }
    if (user == "paper"){
        drawImg("_images/paper.png", "100", "100", "paper", "player");
    }
    if (user == "scissors"){
        drawImg("_images/scissors.png", "100", "100", "scissors", "player");
    }
    if (cpu == "rock"){
        drawImg("_images/rock.jpg", "100", "100", "rock", "cpu");
    }
    if (cpu == "paper"){
        drawImg("_images/paper.png", "100", "100", "paper", "cpu");
    }
    if (cpu == "scissors"){
        drawImg("_images/scissors.png", "100", "100", "scissors", "cpu");
    }
    if (user == "rock" && cpu == "scissors" ||
    user == "paper" && cpu == "rock" ||
    user == "scissors" && cpu == "paper") {
    console.log("user wins the game...");
    }
    else if (cpu == "rock" && user == "scissors" ||
    cpu == "paper" && user == "rock" ||
    cpu == "scissors" && user == "paper") {
    console.log("user loses the game...");
    }
    else if (cpu == user){
    console.log("tie game...");
    }
    else {
    console.log("something went wrong");
    }
}





























































// // let choices = ["rock", "paper", "scissors"];
// // let cpu = Math.floor(Math.random()*choices.length);
// //arrays are a collection of elements that are referenced by an index
// // call rock by asking for choices[0]

// console.log("Hello World, This is my new Rock Paper Scissor Website");
// // let choice = prompt("Please choose rock, paper, or scissors");
// // console.log("The computer chose " + cpu) <--- used before to make sure cpu/rps code was correct

// function playRps(choice){
//     while (true){
//         if (choice == "rock"){
//             onRock();
//         }
//         else if (choice == "paper"){
//             onPaper();
//         }
//         else if (choice == "scissors"){
//             onScissors();
//         }
//         else{
//             console.log("Something went wrong...")
//         }
//     }
// }
// //This function called when user selects Rock button
// function onRock(){
//     let choices = ["rock", "paper", "scissors"];
//     let cpu = Math.floor(Math.random()*choices.length);
//     if (choices[cpu] == "rock"){
//         createResult("It's a tie, play again!"); //Go through each possibility, return result as paragraph
//     } //createResult is still in development, doesn't display paragraph yet
//     else if (choices[cpu] == "paper"){
//         createResult("Computer chose paper, Computer wins! Try again"); 
//     }
//     else{
//         createResult("Computer chose scissors, You win. Congrats!");
//     }
// }
// //Same function as onRock, but for the paper button
// function onPaper(){
//     let choices = ["rock", "paper", "scissors"];
//     let cpu = Math.floor(Math.random()*choices.length);
//     if (choices[cpu] == "rock"){
//         createResult("Computer chose rock, You win. Congrats!");
//     }
//     else if (choices[cpu] == "'paper"){
//         createResult("It's a tie, play again!");
//     }
//     else{
//         createResult("Computer chose scissors, Computer wins!. Try again");
//     }
// }
// //Same function as onRock, but for the paper button
// function onScissors(){
//     let choices = ["rock", "paper", "scissors"];
//     let cpu = Math.floor(Math.random()*choices.length);
//     if (choices[cpu] == "rock"){
//         createResult("Computer chose rock, Computer wins! Try again"); 
//     }
//     else if (choices[cpu] == "paper"){
//         createResult("Computer chose paper, You win. Congrats!"); 
//     }
//     else{
//         createResult("It's a tie, play again!"); 
//     }
// }
// function createResult(content){ //Haven't solved how to display the result text yet, this function doesn't seem to be working
//         const para = document.createElement("p"); //create an element of paragraph
//         para.innerText = content; //whatever is put in for the content parameter will be displayed as a newly created element
//         document.body.appendChild(para);
// }
// function createImage(){ // https://www.w3schools.com/jsref/dom_obj_image.asp
//     var x = document.createElement("IMG")
//     x.setAttribute("src", "_images/nokia.jpg"); //FINISH THIS
//     x.setAttribute("width", "304");
//     x.setAttribute("height", "228");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.body.appendChild(x); 
// }
// //creates the image using createElement js method, can be called in earlier/later code to create an image.
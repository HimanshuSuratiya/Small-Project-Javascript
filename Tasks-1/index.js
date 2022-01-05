console.log("Task-1");
let movediv = document.getElementById("div-1");
let button1 = document.querySelector(".moveright");
button1.addEventListener("click", function(){
    movediv.style.backgroundColor = 'green';
    movediv.style.borderRadius = "25px";
    movediv.style.position = "relative";
    movediv.style.left = "1200px";
    movediv.style.animationName = "slide";
});

let button2 = document.querySelector(".movemid");
button2.addEventListener("click", function(){
    movediv.style.backgroundColor = 'red';
    movediv.style.borderRadius = "25px";
    movediv.style.height = "150px";
    movediv.style.width = "150px";
    movediv.style.position = "relative";
    movediv.style.left = "590px";
});

let button3 = document.querySelector(".moveleft");
button3.addEventListener("click", function(){
    movediv.style.backgroundColor = 'green';
    movediv.style.borderRadius = "25px";
    movediv.style.height = "150px";
    movediv.style.width = "150px";
    movediv.style.position = "relative";
    movediv.style.left = "0px";
});
console.log("Task-2");
let movediv = document.getElementById("div-1");
let button1 = document.querySelector(".Rotate");
button1.addEventListener("click", function(){
    movediv.style.backgroundColor = 'green';
    movediv.style.borderRadius = "25px";
    movediv.style.position = "relative";
    movediv.style.animationName = "himanshu";
    movediv.style.animationDuration = "4s";
});
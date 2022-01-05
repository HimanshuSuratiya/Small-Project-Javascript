// Dice Game
console.log("My First Dice Game in javascript");

function random() {
    var min = 1;
    var max = 7;
    var h1 = (document.getElementById("h1").innerHTML = Math.floor(
        Math.random() * (max - min) + min
    ));
    var h2 = (document.getElementById("h2").innerHTML = Math.floor(
        Math.random() * (max - min) + min
    ));
    if (h1 === h2)
        document.getElementById("p1").innerHTML =
            "Hurry Yor are Win Same Number on Two dice";
    else
        document.getElementById("p1").innerHTML =
            "Sorry Yor Loss The Game Because Not Same Number on Two dice";
}

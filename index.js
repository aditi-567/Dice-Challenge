var n1 = Math.random();
n1 = n1*6;
n1 = Math.floor(n1)+1;

var randomDiceImage = "dice" + n1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var n2 = Math.random();
n2 = n2*6;
n2 = Math.floor(n2)+1;

var randomDiceImage2 = "dice" + n2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(n1>n2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(n1<n2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
function diceROll(){
    let a=Math.random();
    b=a*6+1;
    c=Math.floor(b);
    return c;
    }
    
let d =diceROll();
let Player1=d;
if(Player1===1){
    document.querySelector(".img1").src="./images/dice1.png"
}
if(Player1===2){
    document.querySelector(".img1").src="./images/dice2.png"
}
if(Player1===3){
    document.querySelector(".img1").src="./images/dice3.png"
}
if(Player1===4){
    document.querySelector(".img1").src="./images/dice4.png"
}
if(Player1===5){
    document.querySelector(".img1").src="./images/dice5.png"
}
if(Player1===6){
    document.querySelector(".img1").src="./images/dice6.png"
}

let e =diceROll();
let Player2=e;
if(Player2===1){
    document.querySelector(".img2").src="./images/dice1.png"
}
if(Player2===2){
    document.querySelector(".img2").src="./images/dice2.png"
}
if(Player2===3){
    document.querySelector(".img2").src="./images/dice3.png"
}
if(Player2===4){
    document.querySelector(".img2").src="./images/dice4.png"
}
if(Player2===5){
    document.querySelector(".img2").src="./images/dice5.png"
}
if(Player2===6){
    document.querySelector(".img2").src="./images/dice6.png"
}


if (d>e){
    document.querySelector("footer").innerHTML="Player 1 has won"
    document.querySelector(".footer").style.visibility = "visible";
}

if (d<e){
    document.querySelector("footer").innerHTML="Player 2 has won"
    document.querySelector(".footer").style.visibility = "visible";
}
if(d===e){
    document.querySelector("footer").innerHTML="Both  have won"
    document.querySelector(".footer").style.visibility = "visible";
}




let counter = 0;
const points = 20;
let score = 0;
let cookiebtn = document.getElementById("map");
var multiplier = 1;
let multiplierprice =80;
var multiplierbtn = document.getElementById("multiplier-btn");
multiplierbtn.disabled = true;
let test =50;

addClick = () => {
    counter = counter +1;
    document.getElementById("counter-lbl").innerHTML = counter;
}
addScore = () => {
    score = score + points;
    document.getElementById("score-lbl").innerHTML = score; 
    addMultiplier();
}

cookiebtn.addEventListener("click", () => {   
    addClick();
    addScore();   
 });
 
 addMultiplier = () => {
    if (score >= multiplierprice) {
       multiplierbtn.setAttribute("style", "background-color: rgb(2, 34, 61)"); 
      
       multiplierbtn.disabled = false;
    }
    else {
       multiplierbtn.removeAttribute("style");
     
       multiplierbtn.disabled = true;
    }
 }
 addScore2 = () => {
    score = score +test ;
    counter =counter+1;
    document.getElementById("score-lbl").innerHTML = score; 
    document.getElementById("counter-lbl").innerHTML = counter;

    addMultiplier();
}


 multiplierbtn.addEventListener("click", () => {
    addScore2();
       
    })


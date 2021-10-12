let counter = 0;
let points = 20;
let score = 0;
let cookiebtn = document.getElementById("map");
let multiplier = 1;
let multiplierprice = 80;
let multiplierbtn = document.getElementById("multiplier-btn");
multiplierbtn.disabled = true;
let test =50;
var autoclick = 0;
var autoclickprice = 500;
var autoclickInterval;
var autoclickbtn = document.getElementById("autoclick-btn");
autoclickbtn.disabled = true;
var bonusbtn=document.getElementById("bonusbtn");
bonusbtn.disabled = true;
let bonusprice =1000;

addClick = () => {
    counter = counter +1;
    document.getElementById("counter-lbl").innerHTML = counter;
}
addScore = () => {
    score = score + points;
    document.getElementById("score-lbl").innerHTML = score; 
    addMultiplier();
    autoClickVer();
    addBonus();
}

cookiebtn.addEventListener("click", () => {   
    addClick();
    addScore();   
 });
 
 addMultiplier = () => {
    if (score == multiplierprice) {
      
       multiplierbtn.setAttribute("style", "background-color: rgb(163,109,84)"); 
      
      
       multiplierbtn.disabled = false;
       
    }
   
 }
 addScore2 = () => {
 
    document.getElementById("score-lbl").innerHTML = score; 
    document.getElementById("counter-lbl").innerHTML = counter;

    addMultiplier();
    autoClickVer();
    addBonus();
}
 multiplierbtn.addEventListener("click", () => {
  
    addScore2();
    if(score>=multiplierprice){
      points*=3;
    score = score - multiplierprice;
    document.getElementById("score-lbl").innerHTML = score; 
   }
   
   
       
   });

    autoClickVer = () => {
        if (score >= autoclickprice) {
           autoclickbtn.setAttribute("style", "background-color: rgb(163,109,84)");
           autoclickbtn.disabled = false;
        }
        
     }
   
   autoclickbtn.addEventListener("click", () => {
      if (score >= autoclickprice) {
         
         score = score - autoclickprice;
    document.getElementById("score-lbl").innerHTML = score; }
    
         
         
         autoclickInterval = setInterval(autoclickOn, (1000));
         function autoclickOn() {
            console.log(score);
            score = score + 1;
            document.getElementById("score-lbl").innerHTML = score;
         }
   
    })
    addBonus = () => {
      if (score >=bonusprice) {
         bonusbtn.setAttribute("style", "background-color: rgb(163,109,84)"); 
         
         bonusbtn.disabled = false;
      }
      
   }


   incScore= () => {
      if(score>=bonusprice){
          points=points+100;
         score = score - bonusprice;
         document.getElementById("score-lbl").innerHTML = score; 
        }
     
      
  }
  
  
   bonusbtn.addEventListener("click", () => {
      incScore();
         
      });
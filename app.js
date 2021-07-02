//create the array of card value sets, const for buttons,const displays

const cardValues=[2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,1,1,1,1];
const hit=document.querySelector(".btn__hit");
const settle=document.querySelector(".btn__settle");
const ace=document.querySelector(".btn__ace");
const dealerDisplay=document.querySelector(".display-d");
const playerDisplay=document.querySelector(".display-p");
const dealerM=document.querySelector(".display-dm");
const playerM=document.querySelector(".display-pm");

//pick random item from array
//let randomItem=cardValues[Math.floor(Math.random()*cardValues.length)];
//console.log(randomItem);
//-------------------------------------------------------------

//use hit button to add random item on display
//add current random item to smaller display


const getRandomItem=(item)=>`<p>${item}<p>`;

hit.addEventListener('click', function() {
  let randomItem=cardValues[Math.floor(Math.random()*cardValues.length)];
  let newDisplayP = '';

  newDisplayP += [getRandomItem(randomItem)];
 // playerDisplay.innerHTML = newDisplayP;
  console.log(playerDisplay.innerHTML);
  

  //covert innerhtml to array
  addValueP=[newDisplayP];
  console.log(addValueP);

  let parsedValue = [getRandomItem(randomItem)].map(item=>parseInt(item.replace("<p>","").replace("</p>","")));
  console.log(parsedValue);

  let parsedValue2=addValueP.map(item=>parseInt(item.replace("<p>","").replace("</p>","")));
  console.log(parsedValue2);
 //add current value to total


if(playerDisplay.innerHTML===playerM.innerHTML){
  
  playerDisplay.innerHTML = newDisplayP;
  playerM.innerHTML=parsedValue;
  console.log(playerM.innerHTML);

}else if(addValueP[0]!=playerDisplay.innerHTML){
let sum=eval(parsedValue[0]+parsedValue[0]);
playerM.innerHTML=sum;
console.log("yes");

}



//let sum=eval(parsedValue[0]+parsedValue[0]);
//return playerM.innerHTML=sum;




  });

 




 



















//create 1-2 player slots
//game has 3 buttons for each player
//one button calls for card, another one states that you are finished and ace card button
//dealer randomly adds cards till it contains over 17 in value
//poin of game is to not go over 21 value
//if players have more than dealer in value not exeeding 21 they win


//card numbers represent added value
//any letter is worth 10
//ace is worth 1 or 11, if player gets it, player chooses
//after 1 or two players done, dealer automatically draws cards with randomiser till it exeeds 17
//if it goes over 21, players win, if it is 17-21, results are compared

//the code
//standart black jack contains 6x sets of 52 cards
//however 10 values gonna be assigned in total 2-10 and ace card
//if player presses call button it gets random value from array containing 6sets of 52 card  values
//value is displayed on screen
//if player calls again random value adds up with current value
//if value exeeds 21, player lost, display game over
//if value does no exeed 21 and player presses hold, result is saved as different variable
//if player don't exeed 21 and holds, dealer runs function to get own result
// results are compared and closest to 21 wins

//reset button, resets the game and array to its original form


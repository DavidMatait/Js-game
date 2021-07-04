"use strict";

//create the array of card value sets, const for buttons,const displays
//define const
var cardValues = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1];
var hit = document.querySelector(".btn__hit");
var settle = document.querySelector(".btn__settle");
var ace = document.querySelector(".btn__ace");
var dealerDisplay = document.querySelector(".display-d");
var playerDisplay = document.querySelector(".display-p");
var dealerM = document.querySelector(".display-dm");
var playerM = document.querySelector(".display-pm");
var btnLeft = document.querySelector(".btn__left");

var getRandomItem = function getRandomItem(item) {
  return "<p>".concat(item, "<p>");
}; //define variables


var added = '';
var added2 = ''; //use hit button to add random item on display + add current random item to smaller display

hit.addEventListener('click', function () {
  //pick random item from array
  var randomItem = cardValues[Math.floor(Math.random() * cardValues.length)];
  var newDisplayP = '';
  newDisplayP += [getRandomItem(randomItem)];
  addValueP = [newDisplayP];
  var parsedValue2 = addValueP.map(function (item) {
    return parseInt(item.replace("<p>", "").replace("</p>", ""));
  }); //add current value to total + determine when player lost

  if (playerDisplay.innerHTML === playerM.innerHTML && added <= 21) {
    added = parsedValue2[0];
    playerDisplay.innerHTML = addValueP;
    playerM.innerHTML = added;
  } else if (addValueP != parsedValue2 && added <= 21) {
    console.log(added);
    added = added + parsedValue2[0];
    playerDisplay.innerHTML = addValueP;
    playerM.innerHTML = added;

    if (added > 21) {
      playerM.innerHTML = 0;
      playerDisplay.innerHTML = "You lost!";
    }
  }
}); // create settle button to run automatically after player decided own result

settle.addEventListener('click', function () {
  // make button self clicking
  function clickButton(event) {
    if (added2 <= 17) {
      settle.click();
    } else {
      event.preventDefault();
    }
  }

  setTimeout(clickButton, 1 * 1500); //pick random item from array

  var randomItem = cardValues[Math.floor(Math.random() * cardValues.length)];
  var newDisplayD = '';
  newDisplayD += [getRandomItem(randomItem)];
  addValueD = [newDisplayD];
  var parsedValue2 = addValueD.map(function (item) {
    return parseInt(item.replace("<p>", "").replace("</p>", ""));
  }); //add current value to total + determine when player lost

  if (dealerDisplay.innerHTML === dealerM.innerHTML && added2 <= 21) {
    added2 = parsedValue2[0];
    dealerDisplay.innerHTML = addValueD;
    dealerM.innerHTML = added2;
  } else if (addValueD != parsedValue2 && added2 <= 21) {
    added2 = added2 + parsedValue2[0];
    dealerDisplay.innerHTML = addValueD;
    dealerM.innerHTML = added2; //compare results

    if (added > added2 && added2 >= 17 && added2 <= 21) {
      dealerM.innerHTML = added2;
      dealerDisplay.innerHTML = 0;
      playerM.innerHTML = added;
      playerDisplay.innerHTML = "You won!";
    } else if (added === added2 && added2 >= 17 && added2 <= 21) {
      dealerM.innerHTML = added2;
      dealerDisplay.innerHTML = "Draw!";
      playerM.innerHTML = added;
      playerDisplay.innerHTML = "Draw!";
    } else if (added < added2 && added2 >= 17 && added2 <= 21) {
      dealerM.innerHTML = added2;
      dealerDisplay.innerHTML = 0;
      playerM.innerHTML = added;
      playerDisplay.innerHTML = "You lost!";
    } else if (added2 > 21 && added <= 21) {
      dealerM.innerHTML = added2;
      dealerDisplay.innerHTML = 0;
      playerM.innerHTML = added;
      playerDisplay.innerHTML = "You won!";
    }
  }
}); //change theme of the website

btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === "Dark") {
    btnLeft.innerHTML = "Light";
    btnLeft.style.backgroundColor = "white";
    btnLeft.style.color = "navy";
    btnLeft.style.border = "2px solid navy";
  }
}); //create 1-2 player slots
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
"use strict";

//create the array of card value sets, const for buttons,const displays
//define const
var cardValues = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1];
var hit = document.querySelector(".btn__hit");
var settle = document.querySelector(".btn__settle");
var ace1 = document.querySelector(".ace__1");
var ace11 = document.querySelector(".ace__11");
var dealerDisplay = document.querySelector(".display-d");
var playerDisplay = document.querySelector(".display-p");
var dealerM = document.querySelector(".display-dm");
var playerM = document.querySelector(".display-pm");
var btnLeft = document.querySelector(".btn__left");
var btnRight = document.querySelector(".btn__right");
var headerR = document.querySelector(".rules");
var listR = document.querySelector(".list");
var listItem = document.querySelectorAll(".li__left");

var getRandomItem = function getRandomItem(item) {
  return "<p>".concat(item, "<p>");
}; //define variables


var added = '';
var added2 = ''; //prevent page refresh

window.onbeforeunload = function () {
  return "Pls stay and play!";
}; //use hit button to add random item on display + add current random item to smaller display


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
    added = added + parsedValue2[0];
    playerDisplay.innerHTML = addValueP;
    playerM.innerHTML = added;

    if (added > 21) {
      playerM.innerHTML = 0;
      playerDisplay.innerHTML = "You lost!";

      if (playerDisplay.innerHTML === "You lost!") {
        playerDisplay.style.fontSize = "30px";
      }
    }
  }
}); // create settle button to run automatically after player decided own result

settle.addEventListener('click', function () {
  // make button self clicking
  function clickButton(event) {
    if (added2 <= 17) {
      settle.click();
    } else if (added2 > 17 && added2 <= 21) {
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
      playerDisplay.innerHTML = "You won!"; //style

      if (playerDisplay.innerHTML === "You won!") {
        playerDisplay.style.fontSize = "30px";
      }
    } else if (added === added2 && added2 >= 17 && added2 <= 21) {
      dealerM.innerHTML = added2;
      dealerDisplay.innerHTML = "Draw!";
      playerM.innerHTML = added;
      playerDisplay.innerHTML = "Draw!"; //style

      if (playerDisplay.innerHTML === "Draw!") {
        playerDisplay.style.fontSize = "30px";
        dealerDisplay.style.fontSize = "30px";
      }
    } else if (added < added2 && added2 >= 17 && added2 <= 21) {
      dealerM.innerHTML = added2;
      dealerDisplay.innerHTML = 0;
      playerM.innerHTML = added;
      playerDisplay.innerHTML = "You lost!"; //style

      if (playerDisplay.innerHTML === "You lost!") {
        playerDisplay.style.fontSize = "30px";
      }
    } else if (added2 > 21 && added <= 21) {
      dealerM.innerHTML = added2;
      dealerDisplay.innerHTML = 0;
      playerM.innerHTML = added;
      playerDisplay.innerHTML = "You won!"; //style

      if (playerDisplay.innerHTML === "You won!") {
        playerDisplay.style.fontSize = "30px";
      }
    }
  }
}); //Create reset button

btnRight.addEventListener('click', function () {
  added = 0;
  added2 = 0;
  playerDisplay.innerHTML = 0;
  dealerDisplay.innerHTML = 0;
  playerM.innerHTML = 0;
  dealerM.innerHTML = 0;
  playerDisplay.style.fontSize = "110px";
  dealerDisplay.style.fontSize = "110px";
}); //ace buttons

ace1.addEventListener('click', function () {
  if (playerDisplay.innerHTML == "Ace" && playerM.innerHTML == 0) {
    playerDisplay.innerHTML = 1;
    playerM.innerHTML = 1;
    added = 1;
  } else if (playerDisplay.innerHTML == "Ace") {
    playerDisplay.innerHTML = 1;
    added = added + 1;
  }
}); //  rgb(255, 64, 207)
//  rgb(27,27,27)
//change theme of the website

btnLeft.addEventListener('click', function () {
  if (btnLeft.innerHTML === "Dark") {
    // nav bar
    btnLeft.innerHTML = "Light";
    btnLeft.style.backgroundColor = "rgb(255, 64, 207)";
    btnLeft.style.color = "rgb(27,27,27)";
    btnLeft.style.border = " 2px solid rgb(27,27,27)";
    document.querySelector(".nav").style.backgroundColor = "rgb(255, 64, 207)";
    document.querySelector(".h1").style.color = "rgb(27,27,27)";
    btnRight.style.backgroundColor = "rgb(255, 64, 207)";
    btnRight.style.color = "rgb(27,27,27)";
    btnRight.style.border = " 2px solid rgb(27,27,27)"; //main section

    document.querySelector(".left").style.backgroundColor = "rgb(255, 64, 207)";
    headerR.style.color = "rgb(27,27,27)";
    listR.style.border = "2px solid rgb(27,27,27)";
    listItem.style.color = "rgb(27,27,27)";
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
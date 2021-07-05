"use strict";

//create the array of card value sets, const for buttons,const displays
//define const
var cardValues = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 1, 1, 1];
var hit = document.querySelector(".btn__hit");
var settle = document.querySelector(".btn__settle");
var ace1 = document.querySelector(".ace__1");
var ace11 = document.querySelector(".ace__2");
var dealerDisplay = document.querySelector(".display-d");
var playerDisplay = document.querySelector(".display-p");
var dealerM = document.querySelector(".display-dm");
var playerM = document.querySelector(".display-pm");
var btnLeft = document.querySelector(".btn__left");
var btnRight = document.querySelector(".btn__right"); //const for styling

var headerR = document.querySelector(".rules");
var listR = document.querySelector(".list");
var listItem = document.getElementsByClassName("li__left");
var mainP = document.querySelector(".main");
var dealerStyle = document.querySelector(".dealer-display");
var cardD = document.querySelector(".div__card-dealer");
var playerStyle = document.querySelector(".div__display");
var cardP = document.querySelector(".div__card-player");
var headerH = document.getElementsByClassName("h22")[0];
var listH = document.getElementsByClassName("top10")[0];
var leaderboard = document.getElementsByClassName("top"); //get random item event -> display item

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
    if (playerDisplay.innerHTML === "<p>1</p><p></p>" || playerDisplay.innerHTML === "1") {
      playerDisplay.innerHTML = addValueP;
      playerM.innerHTML = added;
    } else if (playerDisplay.innerHTML === "<p>11</p><p></p>") {
      playerDisplay.innerHTML = addValueP;
      playerM.innerHTML = added;
    } else {
      added = parsedValue2[0];
      playerDisplay.innerHTML = addValueP;
      playerM.innerHTML = added;
    }
  } else if (addValueP != parsedValue2 && added <= 21) {
    if (playerDisplay.innerHTML === "<p>1</p><p></p>" || playerDisplay.innerHTML === "<p>11</p><p></p>") {
      playerDisplay.innerHTML = addValueP;
      playerM.innerHTML = added;
    } else if (playerDisplay.innerHTML === "<p>11</p><p></p>") {
      playerDisplay.innerHTML = addValueP;
      playerM.innerHTML = added;
    } else {
      added = added + parsedValue2[0];
      playerDisplay.innerHTML = addValueP;
      playerM.innerHTML = added;
    }

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
  var li = document.createElement("li");
  li.classList.add("lis");
  li.appendChild(document.createTextNode(playerDisplay.innerHTML));
  listH.appendChild(li);
  added = 0;
  added2 = 0;
  playerDisplay.innerHTML = 0;
  dealerDisplay.innerHTML = 0;
  playerM.innerHTML = 0;
  dealerM.innerHTML = 0;
  playerDisplay.style.fontSize = "110px";
  dealerDisplay.style.fontSize = "110px";
  console.log(li);

  if (btnLeft.innerHTML === "Dark") {
    li.style.color = "rgb(255, 64, 207)";
  } else if (btnLeft.innerHTML === "Light") {
    li.style.color = "rgb(27,27,27)";
  }
}); //ace buttons

ace1.addEventListener('click', function () {
  if (playerDisplay.innerHTML === "<p>1</p><p></p>") {
    added = added + 11;
    playerM.innerHTML = added;
    playerDisplay.innerHTML = "<p>11</p><p></p>";
  } else if (playerDisplay.innerHTML === "<p>11</p><p></p>") {
    added = added - 11 + 1;
    playerM.innerHTML = added;
    playerDisplay.innerHTML = "1";
  } else if (playerDisplay.innerHTML === "1") {
    added = added + 11 - 1;
    playerM.innerHTML = added;
    playerDisplay.innerHTML = "<p>11</p><p></p>";
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
    btnLeft.style.border = " 3px solid rgb(27,27,27)";
    document.querySelector(".nav").style.backgroundColor = "rgb(255, 64, 207)";
    document.querySelector(".h1").style.color = "rgb(27,27,27)";
    btnRight.style.backgroundColor = "rgb(255, 64, 207)";
    btnRight.style.color = "rgb(27,27,27)";
    btnRight.style.border = " 3px solid rgb(27,27,27)"; //main section

    document.querySelector(".left").style.backgroundColor = "rgb(255, 64, 207)";
    headerR.style.color = "rgb(27,27,27)";
    listR.style.border = "3px solid rgb(27,27,27)";
    listItem[0].style.color = "rgb(27,27,27)";
    listItem[1].style.color = "rgb(27,27,27)";
    listItem[2].style.color = "rgb(27,27,27)";
    listItem[3].style.color = "rgb(27,27,27)";
    listItem[4].style.color = "rgb(27,27,27)";
    listItem[5].style.color = "rgb(27,27,27)";
    listItem[6].style.color = "rgb(27,27,27)";
    mainP.style.backgroundColor = "rgb(255, 64, 207)";
    dealerStyle.style.border = "3px solid rgb(27,27,27)";
    dealerStyle.style.backgroundColor = "rgb(255, 64, 207)";
    cardD.style.backgroundColor = "rgb(255, 64, 207)";
    cardD.style.border = "3px solid rgb(27,27,27)";
    dealerDisplay.style.color = "rgb(27,27,27)";
    dealerM.style.color = "rgb(27,27,27)";
    playerStyle.style.border = "3px solid rgb(27,27,27)";
    playerStyle.style.backgroundColor = "rgb(255, 64, 207)";
    cardP.style.backgroundColor = "rgb(255, 64, 207)";
    cardP.style.border = "3px solid rgb(27,27,27)";
    playerDisplay.style.color = "rgb(27,27,27)";
    playerM.style.color = "rgb(27,27,27)";
    hit.style.color = "rgb(27,27,27)";
    hit.style.backgroundColor = "rgb(255, 64, 207)";
    hit.style.border = "3px solid rgb(27,27,27)";
    settle.style.color = "rgb(27,27,27)";
    settle.style.backgroundColor = "rgb(255, 64, 207)";
    settle.style.border = "3px solid rgb(27,27,27)";
    ace1.style.color = "rgb(27,27,27)";
    ace1.style.backgroundColor = "rgb(255, 64, 207)";
    ace1.style.border = "3px solid rgb(27,27,27)";
    document.querySelector(".right").style.backgroundColor = "rgb(255, 64, 207)";
    document.querySelector(".h22").style.color = "rgb(27,27,27)";
    listH.style.backgroundColor = "rgb(255, 64, 207)";
    listH.style.border = "3px solid rgb(27,27,27)";
  } else if (btnLeft.innerHTML === "Light") {
    // nav bar
    btnLeft.innerHTML = "Dark";
    btnLeft.style.backgroundColor = "";
    btnLeft.style.color = "";
    btnLeft.style.border = "";
    document.querySelector(".nav").style.backgroundColor = "";
    document.querySelector(".h1").style.color = "";
    btnRight.style.backgroundColor = "";
    btnRight.style.color = "";
    btnRight.style.border = ""; //main section

    document.querySelector(".left").style.backgroundColor = "";
    headerR.style.color = "";
    listR.style.border = "";
    listItem[0].style.color = "";
    listItem[1].style.color = "";
    listItem[2].style.color = "";
    listItem[3].style.color = "";
    listItem[4].style.color = "";
    listItem[5].style.color = "";
    listItem[6].style.color = "";
    mainP.style.backgroundColor = "";
    dealerStyle.style.border = "";
    dealerStyle.style.backgroundColor = "";
    cardD.style.backgroundColor = "";
    cardD.style.border = "";
    dealerDisplay.style.color = "";
    dealerM.style.color = "";
    playerStyle.style.border = "";
    playerStyle.style.backgroundColor = "";
    cardP.style.backgroundColor = "";
    cardP.style.border = "";
    playerDisplay.style.color = "";
    playerM.style.color = "";
    hit.style.color = "";
    hit.style.backgroundColor = "";
    hit.style.border = "";
    settle.style.color = "";
    settle.style.backgroundColor = "";
    settle.style.border = "";
    ace1.style.color = "";
    ace1.style.backgroundColor = "";
    ace1.style.border = "";
    document.querySelector(".right").style.backgroundColor = "";
    headerH.style.color = "";
    listH.style.backgroundColor = "";
    leaderboard[0].style.color = "";
    leaderboard[1].style.color = "";
    leaderboard[2].style.color = "";
    leaderboard[3].style.color = "";
    leaderboard[4].style.color = "";
    leaderboard[5].style.color = "";
    leaderboard[6].style.color = "";
    leaderboard[7].style.color = "";
    leaderboard[8].style.color = "";
    leaderboard[9].style.color = "";
    listH.style.border = "";
  }
});
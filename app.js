
//create the array of card value sets, const for buttons,const displays
//define const

const cardValues=[2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,1,1,1,1];
const hit=document.querySelector(".btn__hit");
const settle=document.querySelector(".btn__settle");
const ace1=document.querySelector(".ace__1");
const ace11=document.querySelector(".ace__11");
const dealerDisplay=document.querySelector(".display-d");
const playerDisplay=document.querySelector(".display-p");
const dealerM=document.querySelector(".display-dm");
const playerM=document.querySelector(".display-pm");
const btnLeft=document.querySelector(".btn__left");
const btnRight=document.querySelector(".btn__right");
const headerR=document.querySelector(".rules");
const listR=document.querySelector(".list");
const listItem=document.getElementsByClassName("li__left");
const mainP=document.querySelector(".main");
const dealerStyle=document.querySelector(".dealer-display");
const cardD=document.querySelector(".div__card-dealer");
const getRandomItem=(item)=>`<p>${item}<p>`;

//define variables
let added='';
let added2='';

//prevent page refresh
window.onbeforeunload = function() {
  return "Pls stay and play!"
};

//use hit button to add random item on display + add current random item to smaller display
hit.addEventListener('click', function() {

 //pick random item from array
  let randomItem=cardValues[Math.floor(Math.random()*cardValues.length)];
  let newDisplayP = '';
  newDisplayP += [getRandomItem(randomItem)];
  addValueP=[newDisplayP];
  let parsedValue2=addValueP.map(item=>parseInt(item.replace("<p>","").replace("</p>","")));

 //add current value to total + determine when player lost
if(playerDisplay.innerHTML===playerM.innerHTML && added<=21){
 
  added=parsedValue2[0];
  playerDisplay.innerHTML = addValueP;
  playerM.innerHTML=added;

}else if(addValueP!=parsedValue2 && added<=21 ){

  added=added+parsedValue2[0];
  playerDisplay.innerHTML =addValueP;
  playerM.innerHTML=added;

  if(added>21){
    playerM.innerHTML=0;
    playerDisplay.innerHTML="You lost!";
    if(playerDisplay.innerHTML==="You lost!"){
      playerDisplay.style.fontSize="30px";
    }
  }
}
  });

// create settle button to run automatically after player decided own result
settle.addEventListener('click', function() {

// make button self clicking
  function clickButton(event) {
    if(added2<=17){
  settle.click();
  }else if(added2>17 && added2<=21){
    event.preventDefault()
  }}
 setTimeout(clickButton,1*1500);

  //pick random item from array
   let randomItem=cardValues[Math.floor(Math.random()*cardValues.length)];
   let newDisplayD = '';
   newDisplayD += [getRandomItem(randomItem)];
   addValueD=[newDisplayD];
   let parsedValue2=addValueD.map(item=>parseInt(item.replace("<p>","").replace("</p>","")));
 
  //add current value to total + determine when player lost
 if(dealerDisplay.innerHTML===dealerM.innerHTML && added2<=21){
   added2=parsedValue2[0];
   dealerDisplay.innerHTML = addValueD;
   dealerM.innerHTML=added2;

 }else if(addValueD!=parsedValue2 && added2<=21 ){

   added2=added2+parsedValue2[0];
   dealerDisplay.innerHTML =addValueD;
   dealerM.innerHTML=added2;

//compare results
   if(added>added2 && added2>=17 && added2<=21){
    dealerM.innerHTML=added2;
    dealerDisplay.innerHTML=0;
    playerM.innerHTML=added;
    playerDisplay.innerHTML="You won!";
    //style
    if(playerDisplay.innerHTML==="You won!"){
      playerDisplay.style.fontSize="30px";
    }
  } else if(added===added2 && added2>=17 && added2<=21){
    dealerM.innerHTML=added2;
    dealerDisplay.innerHTML="Draw!";
    playerM.innerHTML=added;
    playerDisplay.innerHTML="Draw!";
    //style
    if(playerDisplay.innerHTML==="Draw!"){
      playerDisplay.style.fontSize="30px";
      dealerDisplay.style.fontSize="30px";
    }
  } else if(added<added2 && added2>=17 && added2<=21){
    dealerM.innerHTML=added2;
    dealerDisplay.innerHTML=0;
    playerM.innerHTML=added;
    playerDisplay.innerHTML="You lost!";
    //style
    if(playerDisplay.innerHTML==="You lost!"){
      playerDisplay.style.fontSize="30px";
    }
  } else if(added2>21 && added<=21) {
    dealerM.innerHTML=added2;
    dealerDisplay.innerHTML=0;
    playerM.innerHTML=added;
    playerDisplay.innerHTML="You won!";
    //style
    if(playerDisplay.innerHTML==="You won!"){
      playerDisplay.style.fontSize="30px";
    }
  }
 }
   });


//Create reset button
btnRight.addEventListener('click', function(){
  added=0;
  added2=0;
  playerDisplay.innerHTML=0;
  dealerDisplay.innerHTML=0;
  playerM.innerHTML=0;
  dealerM.innerHTML=0;
  playerDisplay.style.fontSize="110px";
  dealerDisplay.style.fontSize="110px";
})

   //ace buttons


   ace1.addEventListener('click', function(){

    if(playerDisplay.innerHTML=="Ace" && playerM.innerHTML==0){
      playerDisplay.innerHTML=1;
      playerM.innerHTML=1;
      added=1;
    }else if(playerDisplay.innerHTML=="Ace"){
      playerDisplay.innerHTML=1;
      added=added+1;
    }
   })

 //  rgb(255, 64, 207)
 //  rgb(27,27,27)

   //change theme of the website
   btnLeft.addEventListener('click', function(){

    if(btnLeft.innerHTML==="Dark"){
// nav bar
    btnLeft.innerHTML="Light";
    btnLeft.style.backgroundColor="rgb(255, 64, 207)";
    btnLeft.style.color="rgb(27,27,27)";
    btnLeft.style.border= " 3px solid rgb(27,27,27)";
    document.querySelector(".nav").style.backgroundColor="rgb(255, 64, 207)";
    document.querySelector(".h1").style.color="rgb(27,27,27)";
    btnRight.style.backgroundColor="rgb(255, 64, 207)";
    btnRight.style.color="rgb(27,27,27)";
    btnRight.style.border= " 3px solid rgb(27,27,27)";
//main section
  document.querySelector(".left").style.backgroundColor="rgb(255, 64, 207)";
  headerR.style.color="rgb(27,27,27)";
  listR.style.border="3px solid rgb(27,27,27)";
  listItem[0].style.color="rgb(27,27,27)";
  listItem[1].style.color="rgb(27,27,27)";
  listItem[2].style.color="rgb(27,27,27)";
  listItem[3].style.color="rgb(27,27,27)";
  listItem[4].style.color="rgb(27,27,27)";
  listItem[5].style.color="rgb(27,27,27)";
  listItem[6].style.color="rgb(27,27,27)";
  mainP.style.backgroundColor="rgb(255, 64, 207)";
  dealerStyle.style.border="3px solid rgb(27,27,27)";
  dealerStyle.style.backgroundColor="rgb(255, 64, 207)";
  cardD.style.backgroundColor="rgb(255, 64, 207)";
  cardD.style.border="3px solid rgb(27,27,27)";
  dealerDisplay.style.color="rgb(27,27,27)";
  dealerM.style.color="rgb(27,27,27)";
    }else if(btnLeft.innerHTML==="Light"){
    // nav bar
    btnLeft.innerHTML="Dark";
    btnLeft.style.backgroundColor="";
    btnLeft.style.color="";
    btnLeft.style.border= "";
    document.querySelector(".nav").style.backgroundColor="";
    document.querySelector(".h1").style.color="";
    btnRight.style.backgroundColor="";
    btnRight.style.color="";
    btnRight.style.border= "";
    //main section
      document.querySelector(".left").style.backgroundColor="";
      headerR.style.color="";
      listR.style.border="";
      listItem[0].style.color="";
      listItem[1].style.color="";
      listItem[2].style.color="";
      listItem[3].style.color="";
      listItem[4].style.color="";
      listItem[5].style.color="";
      listItem[6].style.color="";
      mainP.style.backgroundColor="";
      dealerStyle.style.border="";
      dealerStyle.style.backgroundColor="";
      cardD.style.backgroundColor="";
      cardD.style.border="";
      dealerDisplay.style.color="";
      dealerM.style.color="";
    }

   });

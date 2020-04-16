var timeLeft = +window.localStorage.getItem('timeRemaining');
var moves = window.localStorage.getItem('userMoves');
var name = window.localStorage.getItem('userName');
timeLeft+= 3;
var timeElapsed = 300 - timeLeft;

setTimeout(function () {
  document.getElementById("title").style.borderRight = "none";
  $('#bigTitle').append("<h1>of Oxygen...</h1>");
}, 2500);

setTimeout(function () {
  document.getElementById("playAgain").style.visibility = "visible";
}, 4000);

function getFormattedTime(time) {
  let min = Math.floor(time/60);
  let sec = time % 60;
  if(sec.length === 1){
    sec += "0";
  }
  if (sec < 10 ) {
    sec = "0"+sec;
  }
  let formattedTime = min+":"+sec;
  return formattedTime;
}

function redirect() {
  window.location = '../Pages/HomePage.html';
}

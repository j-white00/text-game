var timeLeft = +window.localStorage.getItem('timeRemaining');
var moves = window.localStorage.getItem('userMoves');
var name = window.localStorage.getItem('userName');
timeLeft+= 3;
var timeElapsed = 300 - timeLeft;

setTimeout(function () {
  document.getElementById("title").style.borderRight = "none";
  $('#bigTitle').append("<h1>CONFINEMENT</h1>");
}, 3000);

setTimeout(function () {
  document.getElementById("stats").style.borderTop = ".15em solid white";
  document.getElementById("playAgain").style.visibility = "visible";
  $('#stats').append("<p><u>"+name+"\'s Stats</u></p>");
  $('#stats').append("<p>Time Taken: <u>"+getFormattedTime(timeElapsed)+"</u></p>");
  $('#stats').append("<p>Time Left: <u>"+getFormattedTime(timeLeft)+"</u></p>");
  $('#stats').append("<p>Number of Moves: <u>"+moves+"</u></p>");
}, 6000);

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

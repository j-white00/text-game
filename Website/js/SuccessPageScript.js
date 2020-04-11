var time = window.localStorage.getItem('timeRemaining');

$('#stats').append("Time remaining "+time);

setTimeout(function () {
  document.getElementById("title").style.borderRight = "none";
  $('#bigTitle').append("<h1>CONFINEMENT</h1>");

}, 3000);

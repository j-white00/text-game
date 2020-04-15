var darkMode = false;
window.onload = function() {
  $("#modeText").html("Light Mode");
}

function confirmAge() {
  var r = confirm("Confirm you are over the age of 12");
  if (r == true) {
    document.getElementById("ui").style.display = "block";
    document.getElementById("age").style.display = "none";
  }
  else{
    document.getElementById("age").style.display = "none";
    document.getElementById("notOfAge").style.display = "block";
  }
}
function modeSlider() {
  if(darkMode === false){
    darkMode = true;
    $("#modeText").html("Dark Mode");
    document.getElementById("modeText").style.transform = "translateX(-2vh)";
    document.getElementById("modeText").style.color= "white";
  }
  else{
    darkMode = false;
    $("#modeText").html("Light Mode");
    document.getElementById("modeText").style.transform = "translateX(2vh)";
    document.getElementById("modeText").style.color= "black";
  }
}
function getName() {
  var userName = document.getElementById('name').value;
  window.localStorage.setItem('userName', userName);
  window.localStorage.setItem('darkMode', darkMode);
}

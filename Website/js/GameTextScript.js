var name = window.localStorage.getItem('userName');
var start = [
  name + "... ",
  "<p>You wake up in a <strong>dim</strong>, obscure room and gloomy room. </p>",
  "<p>You have no recollection of how you ended up here, yet here you are. </p>",
  "<p>You have no recollection of why you are here, yet there you are. </p>",
  "-----MORE TEXT TO BE INSERTED HERE-----",
  "<p>On the floor in front of you, there is a carving, it spells, <strong>\"Escape\"</strong>...</p>",
  "<p>You now feel eerie, like a presence of evil possesses the room. <strong>There is no God here.</strong></p>"
];

var locs = {
  "north":{
    "desc": "<p>You are at the Northern Wall</p>"
  },
  "south":{
    "desc": "<p>You are at the Southern Wall</p>"
  },
  "east":{
    "desc": "<p>You are at the Eastern Wall</p>"
  },
  "west":{
    "desc": "<p>You are at the Western Wall</p>"
  }
}

var currentLoc = "";

function moveLoc(direction){
  if(currentLoc === direction){
    $('#gameText').append("<p>I am already here...</p>");
  }
   else{
     $('#gameText').append("<p>" + locs[direction].desc + "</p>");
   }
}

$(document).ready(function(){
  var index = 0;
  setInterval(function(){
    if(index < start.length){
      $('#gameText').append(start[index]);
      index++;
    }else
      return;
  }, 1);

  $(document).on('keypress',function(e) {
    if(e.which === 13 && $('#userInput').is(':focus')) {
      var input = $('#userInput').val().toLowerCase();
      switch(input){
        case "north":
          moveLoc("north");
          break;
        case "south":
          moveLoc("south");
          break;
        case "east":
          moveLoc("east");
        break;
        case "west":
          moveLoc("west");
          break;
        default:
          $('#gameText').append("<p><i>>Invalid Command</i></p>");
      }
    }
  });
})

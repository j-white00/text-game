var name = window.localStorage.getItem('userName');
var start = [
  name + "... ",
  "<p>You wake up in a <strong>dim</strong>, obscure room and gloomy room. </p>",
  "<p>You have no recollection of how you ended up here, yet here you are. </p>",
  "<p>You have no recollection of why you are here, yet here you are. </p>",
  "As you start to come to, you take notice of your surroundings.",
  "<p>On the floor in front of you, there is a carving, it spells, <strong>\"Escape\"</strong>...</p>",
  "<p>You now feel eerie, like a presence of evil possesses the room. <strong>There is no God here.</strong></p>",
  "<p>...</p>",
  "<p>In the room there is cabinet.</p>",
  "<p>There is a <strong>cupboard</strong> in the room.</p>",
  "<p>There is also a <strong>door</strong> in the room, as you may presume, this is locked with a <strong>padlock</strong>.</p>",
  "<p>The objective is to <strong>unlock</strong> this <strong>door</strong> and escape confinement!</p>"
];

var locs = {
  "cupboard":{
    "desc": "<p>In the cupboard you find a piece of paper with the number <strong>85</strong> scrawled on it.</p>"
  },
  "cabinet":{
    "desc": "<p>There are <strong>3 draws</strong> in the Cabinet, <strong>A, B,</strong> and drawer <strong>C</strong>.\
            There is also a <strong>framed picture</strong> on the cabinet.</p>"
  },
  "drawerA":{
    "desc": "<p>In drawer A you find a word carved into the wood, it reads <strong>\"To Sum\"</strong>. </p>"
  },
  "drawerB":{
    "desc": "<p>In drawer B you find a <strong>calculator</strong>, it feels light, you feel something on the back of the calculator.</p>"
  },
  "drawerC":{
    "desc": "<p>In draw C you find a card with the letters <strong>LVI</strong> embossed into it.</p>"
  },
  "calculator":{
    "desc": "<p>The calculator does not turn on, on the back you notice a <strong>battery is missing</strong> from its socket</p>"
  }

  // Add another location

}
var invalid = "<p><i>>Invalid Command</i></p>";

var inv = [];

var currentLoc = "";

function locCheck(request){
  if(currentLoc === request){
    $('#gameText').append("<p>I can't do that...</p>");
  }
   else{
     $('#gameText').append("<p>" + locs[request].desc + "</p>");
     currentLoc = request;
     $('input').val('');
   }
}


/*
function goToSwitch(command){
  switch(command){
    case "mirror":
      goTo("mirror");
      break;
    case "chair":
      goTo("chair");
      break;
    default:
      $('#gameText').append(invalid);
  }
}


function useSwitch(command){
  switch(command){
    case "torch":
      use("torch");
      break;
    default:
      $('#gameText').append("<p><i>>Invalid Command</i></p>");
  }
}
*/

function takeSwitch(item) {
  switch (item) {
    case "calculator":
      inv.push("calculator");
      break;

    case "paper":
      inv.push("calculator");
      break;

    case "card":
      inv.push("card");
      break;

    case "battery":
      inv.push("battery");
      break;

    default:
  }
    $('#gameText').append("<p>-"+item+" placed in inventory.</p>");s
    $('input').val('');
}

function searchSwitch(command){
  switch(command){
    case "cupboard":
      locCheck("cupboard");
      break;

    case "cabinet":
      locCheck("cabinet");
      break;

    case "a":
      locCheck("drawerA");
      break;

    case "b":
      locCheck("drawerB");
      break;

    case "b":
      locCheck("drawerB");
      break;

    case "c":
      locCheck("drawerC");
      break;

    case "calculator":
      locCheck("calculator");
      break;

    default:
      $('#gameText').append(invalid);
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
  }, 1500); //Adjust Wait Time between into lines

  $(document).on('keypress',function(e) {
    if(e.which === 13 && $('#userInput').is(':focus')) {
      var input = $('#userInput').val().toLowerCase();
      var inputSplit = input.split(" ");
      switch(inputSplit[0]){
        case "search":
          searchSwitch(inputSplit[inputSplit.length - 1]);
          break;

        case "take":
          takeSwitch(inputSplit[inputSplit.length - 1]);
          break;

        default: $('#gameText').append(invalid);
      }

      // if(inputSplit[0] === "search"){
      //
      // }
      // else if (inputSplit[0] === "use") {
      //   useSwitch(inputSplit[inputSplit.length - 1]);
      // }
      //
      // else if (inputSplit[0] === "pickup") {
      //   useSwitch(inputSplit[inputSplit.length - 1]);
      // }
      //
      // else{
      //   $('#gameText').append("<p><i>>Invalid Command</i></p>");
      //
      // }

    }
  });
})

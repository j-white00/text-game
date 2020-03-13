var name = window.localStorage.getItem('userName');
var start = [
  name + "... ",
  "<p>You wake up in a <strong>dim</strong>, obscure, gloomy room. </p>",
  "<p>You have no recollection of how you ended up here, yet here you are. </p>",
  "<p>You have no recollection of why you are here, yet here you are. </p>",
  "<p>As you start to come to, you take notice of your surroundings.</p>",
  "<p>On the floor in front of you, there is a carving, it spells, <strong>\"Escape\"</strong>...</p>",
  "<p>You now feel eerie, like a presence of evil possesses the room.</p>",
  "<p><strong>There is no God here.</strong></p>",
  "<p>...</p>",
  "<p>In the room there is <strong>cabinet</strong>.</p>",
  "<p>There is a <strong>wardrobe</strong> in the room.</p>",
  "<p>A tall, dirty <strong>mirror</strong> lingers hunched.</p>",
  "<p>Fixed to the ceiling corner is a flashing red light...</p>",
  "<p>You are being watched...</p>",
  "<p>There is also a <strong>door</strong> in the room, as you may presume, this is locked with a <strong>padlock</strong>.</p>",
  "<p>The objective is to <strong>unlock</strong> this <strong>door</strong> and escape confinement!</p>"
];

var locs = {
  "wardrobe":{
    "desc": "<p>In the wardrobe you find a piece of paper.</p>"
  },
  "cabinet":{
    "desc": "<p>There are <strong>3 drawers</strong> in the Cabinet, <strong>A, B,</strong> and drawer <strong>C</strong>.\
    There is also a <strong>framed picture</strong> on the cabinet.</p>"
  },
  "drawerA":{
    "desc": "<p>In drawer A you find a word carved into the wood, it reads <strong>\"To Sum\"</strong>. </p>"
  },
  "drawerB":{
    "desc": "<p>In drawer B you find a <strong>calculator</strong>, it feels light, you feel something on the back of the calculator.</p>"
  },
  "drawerC":{
    "desc": "<p>In draw C you find a thicker, more dense peice of paper, perhaps card?</p>"
  },
  "mirror":{
    "desc": "<p>Beneath the mirror is a screwdriver covered in rust.</p>"
  }

  // Add another location
}

var help = ["search", "take", "inspect", "look", "combine", "help"]
var invalid = "<p><i>>Invalid Command</i></p>";

var inv = [];

var currentLoc = "";

var calcTurnedOn = false;

function updateScroll(){
    var element = document.getElementById("gameText");
    element.scrollTop = element.scrollHeight;
}

function showHelp() {
  $('#gameText').append("<p>Commands that can be used:</p>");
  $('#gameText').append("<p>");
  for(i=0; i<help.length; i++){
    $('#gameText').append("<li>"+help[i]+"</li>");
  }
  $('#gameText').append("</p>");
}

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

function takeSwitch(item) {
  if(inv.includes(item)){
    $('#gameText').append("<p>-"+item+" already in invetory</p>");
  }
  else{
    switch (item) {
      case "":
      $('#gameText').append(invalid);
      break;

      case "calculator":
      $('#gameText').append("<p>-"+item+" placed in inventory.</p>");
      inv.push("calculator");
      $('#img2').prepend('<img src="../Images/CalculatorOff.png" />');
      break;

      case "paper":
      $('#gameText').append("<p>-"+item+" placed in inventory.</p>");
      inv.push("paper");
      $('#img1').prepend('<img src="../Images/paper.png" />');
      break;

      case "card":
      $('#gameText').append("<p>-"+item+" placed in inventory.</p>");
      inv.push("card");
      break;

      case "picture":
      $('#gameText').append("<p>-"+item+" placed in inventory.</p>");
      inv.push("picture");
      break;

      case "battery":
      $('#gameText').append("<p>-"+item+" placed in inventory.</p>");
      inv.push("battery");
      $('#img6').prepend('<img src="../Images/battery.png" />');
      break;

      case "screwdriver":
      $('#gameText').append("<p>-"+item+" placed in inventory.</p>");
      inv.push("screwdriver");
      $('#img4').prepend('<img src="../Images/screwdriver.png" />');
      break;

      default:
      $('#gameText').append(invalid);
    }
  }
  $('input').val('');
}

function searchSwitch(command){
  switch(command){
    case "wardrobe":
    locCheck("wardrobe");
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

    case "mirror":
    locCheck("mirror");
    break;

    default:
    $('#gameText').append(invalid);
  }
}

function inspectSwitch(item) {
  switch (item) {
    case "calculator":
      if(!calcTurnedOn){
        $('#gameText').append("<p>The calculator does not turn on, on the\
        back you notice a <strong>battery is missing</strong> from its socket.</p>");
      }
      else{
        $('#gameText').append("<p>The calculator is on and is ready to use</p>");
        $('#gameText').append("<p>Enter a sum: </p>");
      }
    break;

    case "paper":
    $('#gameText').append("<p>The paper has the number <strong>85</strong> scrawled on it.</p>");
    break;

    case "card":
    $('#gameText').append("<p>The playing card has the the letters <strong>LVI</strong> embossed into it.</p>");
    break;

    case "picture":
    $('#gameText').append("<p>The picture denotes a picture of a married couple on their wedding day, \
    their faces have been <strong>blackened out</strong>. Their appears to be some <strong>writing<\strong> \
    in the corner of the picture, but the frame fastened with screws is blocking it.</p>"); //implement tools to remove frame
    break;

    case "door":
    $('#gameText').append("<p>The door is locked with a <strong>padlock</strong>. You notice the padlock is \
    a combination of <strong>numbers</strong>, the correct combination must <strong>open the door</strong>. \
    There is also a note on the door, it reads: \"<strong>Beneath</strong> that of which we hang our \
    <strong>costumes</strong>, lies the final piece of the puzzle.\"</p><p>What could this mean? </p>");
    break;

    case "padlock":
    $('#gameText').append("<p>The door is locked with a <strong>padlock</strong>. You notice the padlock is \
    a combination of <strong>numbers</strong>, the correct combination must <strong>open the door</strong>. \
    There is also a note on the door, it reads: \"<strong>Beneath</strong> that of which we hang our \
    <strong>costumes</strong>, lies the final piece of the puzzle.\"</p><p>What could this mean? </p>");
    break;

    case "battery":
    $('#gameText').append("<p>It looks like it may <strong>fit somewhere</strong>.</p>");
    break;

    case "screwdriver":
    $('#gameText').append("<p>The scewdriver is in bad condition but seems <strong>usable</strong>.</p>");
    break;

    default:
    $('#gameText').append(invalid);
  }
  $('input').val('');
}

function lookSwitch(place) {
  switch (place) {
    case "wardrobe":
    $('#gameText').append("<p>Here you find a <strong>battery</strong>.</p>");
    break;

    case "mirror":
    $('#gameText').append("<p>The mirror is in bad condition, however, you can see that your once clothes,\
    are now torn to rags and socked in an indistinguishable substance. Your face is badly cut. <strong>YOU \
    HAVE TO ESCAPE!</strong></p>");
    break;

    case "door":
    $('#gameText').append("<p>The door is locked with a padlock. You notice the padlock is a combination of \
    numbers, the correct combination must open the door. There is also a note on the door, it reads: \" <strong>Beneath</strong> \
    that of which we hang our <strong>costumes</strong>, lies the final piece of the puzzle.\" What could this mean?</p>");
    break;

    default:
    $('#gameText').append(invalid);
  }
  $('input').val('');
}

function combineSwitch(item1, item2) {
  var noItems = "<p>You don't have the items for that action.</p>";
  if((item1 == "battery" && item2 == "calculator")||
    (item1 == "calculator" && item2 == "battery")){
    if(inv.includes("battery") && inv.includes("calculator")){
      $('#gameText').append("<p>The calculator has turned on.</p>");
      calcTurnedOn = true;
      let x = inv.indexOf("battery");
      let y = inv.indexOf("calculator");
      inv.splice(x, 1);
      inv.splice(y, 1);
      // let elementToBeRemoved = document.getElementById('img2');
      // (elementToBeRemoved).parentNode.removeChild(elementToBeRemoved);
      // elementToBeRemoved = document.getElementById('img6');
      // elementToBeRemoved.parentNode.removeChild('elementToBeRemoved');
    }
    else { $('#gameText').append(noItems);}
  }
  else if((item1 == "screwdriver" && item2 == "picture")||
    (item1 == "picture" && item2 == "screwdriver")){
    if(inv.includes("picture") && inv.includes("screwdriver")){
      $('#gameText').append("<p>The picture has been removed from its frame.</p>");
      let x = inv.indexOf("picture");
      let y = inv.indexOf("screwdriver");
      inv.splice(x, 1);
      inv.splice(y, 1);
    }
    else { $('#gameText').append(noItems);}
  }
  else { $('#gameText').append(noItems);}
  $('input').val('');

}

$(document).ready(function(){
  var index = 0;
  setInterval(updateScroll,1000);
  setInterval(function(){
    if(index < start.length){
      $('#gameText').append(start[index]);
      index++;
    }
    else if (index == start.length) {
      showHelp();
      index++;
    }
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

        case "inspect":
        inspectSwitch(inputSplit[inputSplit.length - 1]);
        break;

        case "look":
        lookSwitch(inputSplit[inputSplit.length - 1]);
        break;

        case "combine":
        combineSwitch(inputSplit[1],inputSplit[inputSplit.length - 1]);
        break;

        case "help":
        showHelp();
        break;

        default: $('#gameText').append(invalid);
      }
    }
  });
})

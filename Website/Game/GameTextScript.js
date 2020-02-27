var name = window.localStorage.getItem('userName');
var start = [
  "<p>" + name + "... You wake up in a <strong>dim</strong>, obscure room and gloomy room. </p>",
  "<p>You have no recollection of how you ended up here, yet here you are. </p>",
  "<p>You have no recollection of why you are here, yet here you are. </p>",
  "-----MORE TEXT TO BE INSERTED HERE-----",
  "<p>You have no recollection of why you are here, yet here you are. </p>",
  "<p>On the floor in front of you, there is a carving, it spells, <strong>\"Escape\"</strong>...</p>",
  "<p>You now feel eerie, like a presence of evil possesses the room. <strong>There is no god here.</strong></p>"
];

$(document).ready(function(){

  var index = 0;
  setInterval(function(){
    if(index < start.length){

      $('#gameText').append(start[index]);
      index++;
    }else
      return;
  }, 500);

  $(document).on('keypress',function(e) {
    if(e.which === 13 && $('#userInput').is(':focus')) {
      var input = $('#userInput').val();
      alert(input);
    }
  });
})


var name = window.localStorage.getItem('userName');
var input = $('#userInput').val();

$(document).on('keypress',function(e) {
    if(e.which === 13) {
        alert('You pressed enter!');
    }
});

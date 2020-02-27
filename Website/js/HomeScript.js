
function getName() {
  var userName = document.getElementById('name').value;
  window.localStorage.setItem('userName', userName);
}

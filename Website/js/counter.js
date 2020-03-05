


  setTimeout(function () {
    var secRemain = 300;
    setInterval(function(){
      if(secRemain > 0){
        let width = (secRemain/3)+"%";
        document.getElementById('timeLeft').setAttribute("style","width:"+width);
        let min = Math.floor(secRemain/60);
        let sec = secRemain % 60;
        document.getElementById('timeText').innerHTML = "Oxygen Remaining: "+min+":"+sec;
        secRemain--;
      }
      return;
    }, 1000);

  }, 0)//25000)

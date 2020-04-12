var secRemain = 0;
  setTimeout(function () {
    secRemain = 300;
    setInterval(function(){
      if(secRemain > 0){
        window.localStorage.setItem('timeRemaining', secRemain);
        let width = (secRemain/3)+"%";
        document.getElementById('timeLeft').setAttribute("style","width:"+width);
        let min = Math.floor(secRemain/60);
        let sec = secRemain % 60;
        if(sec.length === 1){
          sec += "0";
        }
        if (sec < 10 ) {
          sec = "0"+sec;
        }
        document.getElementById('timeText').innerHTML = "Oxygen: "+min+":"+sec;
        secRemain--;
      }
      else if (secRemain === 0) {
        window.location = '../Pages/FailPage.html';
      }
      return;
    }, 1000);//1000

  }, 25000)//25000)

 window.onload = function() {
    var list = document.getElementById('list');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var container = document.getElementById('container');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');

    var twentyFourHours = 24 * 60 * 60;
    Timer(twentyFourHours);

    var index = 1;
    var width = 1200;

    function animate(offset) {
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        list.style.transition='300ms ease';
        if(newLeft < -10800){
        	list.style.left = 0 + 'px';
        }
        if(newLeft > 0){
        	list.style.left = -10800 + 'px';
        }
    }

    function showButton() {
      buttons[index-1].className = 'on';
    }

    prev.onclick = function() {   
        index-=1;
        if(index < 1) {
        index = 5;
    }
        showButton();
        animate(width);
    }
    next.onclick = function() {  
        index+=1;
        if(index > 5){
        index = 1;
        }
        showButton();
        animate(-width);
    }
    for(var i = 0;i<buttons.length;i++) {
        buttons[i].onclick = function() {
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = width*(index - clickIndex);
            animate(offset);
            index = clickIndex;
            showButton();
        }
    }


}

 function Timer(duration) {

    var timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = parseInt((timer /3600)%24, 10)
        minutes = parseInt((timer / 60)%60, 10)
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.getElementById('countdownimer').innerHTML=hours +":"+minutes + ":" + seconds;

        --timer;
    }, 1000);
}

window.onscroll = scrollFunction;

function scrollFunction() { 
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("top").style.display = "block";
  } else {
    document.getElementById("top").style.display = "none";
  }
}


function goTop() {
  document.documentElement.scrollTop = 0;
}
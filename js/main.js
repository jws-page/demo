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

    pre.onclick = function() {   
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
    for(var i=0; i<buttons.length; i++) {
        buttons[i].onclick = function() {
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = width*(index - clickIndex);
            animate(offset);
            index = clickIndex;
            showButton();
        }
    }
    
    function Timer(duration) {

        var timer = duration, hours, minutes, seconds;
        setInterval(function () {
            hours = parseInt((timer /3600) % 24, 10)
            minutes = parseInt((timer / 60) % 60, 10)
            seconds = parseInt(timer % 60, 10);

            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            document.getElementById('countdownimer').innerHTML=hours +":"+minutes + ":" + seconds;

            --timer;
        }, 1000);
    }
}

function goTop() {
  document.documentElement.scrollTop = 0;
}

var searchWord = document.getElementById('search');
searchWord.addEventListener('change', search);

function search() {
    var value = this.value.toLowerCase();
    if (!value) {
        document.getElementById('m-search').innerHTML ="";
        return;
    }; 
    document.getElementById('m-search').innerHTML ='.wrap:not([data-name*="' + value + '"]) {display: none;}';
}

function select(sel) {
  var value = sel.toLowerCase();
  if (!value) {
    document.getElementById('m-select').innerHTML ="";
    return;
  }; 
  document.getElementById('m-select').innerHTML ='.wrap:not([data-type*="' + value + '"]) {display: none;}';
}

 /* dialog */
var dialog=document.getElementById("dialog"); 
var desc=document.getElementById("dialog-content"); 
var btclose=document.getElementById("close"); 

function popup(index, name) {
    dialog.style.display="block"; 
    desc.style.display="block"; 
    document.getElementById("dialog-img").src = "img/product/" + index + ".jpg";
    document.getElementById("dialog-desc").innerHTML = name;
}

btclose.onclick=function() { 
    dialog.style.display="none"; 
    desc.style.display="none"; 
} 
var action;
var timeremaing;
document.getElementById("a").onclick=function(){
	alert("ss")

timeremaing=60
action = setInterval(function(){
timeremaing = timeremaing-1;
document.getElementById("a").innerHTML=timeremaing;


 },1000);
} 
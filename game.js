var playing = false;
var score;
var action;
var timeremaing;
var correctanswer;
document.getElementById("startreset").onclick =function(){

	if(playing == true){
		location.reload();
	}
	else{
		playing = true;
		score = 0;
		document.getElementById("Scorevalue").innerHTML=score;
		// document.getElementById("Timeremaining").style.display="block";
		show("Timeremaining");
	    timeremaing=60;
		document.getElementById("startreset").innerHTML="Reset Game";
		document.getElementById("remainvalue").style.innerHTML = timeremaing;
		 startCountdown();
		 hide("gameover");
		 genrateQA();

	}

}
for(i=1;i<5;i++)
{
document.getElementById("Choice"+i).onclick=function(){
	if(this.innerHTML == correctanswer)
	{
		score=score+1
		document.getElementById("Scorevalue").innerHTML=score
		show("Correct")
		setTimeout(function(){
			hide("Correct")
		},1000)
		genrateQA();
	}
	else{
		show("Wrong")
		setTimeout(function(){
			hide("Wrong")
		},1000)
	}
}

}


function startCountdown(){
action = setInterval(function(){
timeremaing = timeremaing-1;
document.getElementById("remainvalue").innerHTML=timeremaing;

	 if (timeremaing == 0){
	 	stopCountdown();
		document.getElementById("gameover").style.display="block";
		document.getElementById("gameover").innerHTML="<p>Game Over..!</p><p>Your Score is "+score+"</p>";
		hide("Timeremaining");
		hide("Correct");
 		hide("Wrong");
 		playing =false;
 		document.getElementById("startreset").innerHTML="Start Game";
	}

 },1000);

 }

 function stopCountdown(){
 	clearInterval(action);
 }

function hide(Id){
 	document.getElementById(Id).style.display="none";
 }
function show(Id){
 	document.getElementById(Id).style.display="block"; 
 }
 function genrateQA()
  		{
 			var i;
  			var x= 1+Math.round(30*Math.random());
  			var y=1+Math.round(30*Math.random());
  			correctanswer=x*y;
  			document.getElementById("Questionbox").innerHTML=x+"x"+y;
  			var correctbox=1+Math.round(3*Math.random());
  			document.getElementById("Choice"+correctbox).innerHTML=correctanswer;
  			for(i=1;i<4;i++){
  				if(correctbox!=i)
  				{
  					document.getElementById("Choice"+i).innerHTML=1+Math.round(50*Math.random());
 
  				}
  				else{
  					continue;
  				}

			}

 }
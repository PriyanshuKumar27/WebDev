var p1Button=document.querySelector("#p1");
var p2Button=document.getElementById("p2");
var resetButton=document.getElementById("p3");
var numInput=document.querySelector("input");
var p1Score=0;
var p2Score=0;
var gameOver=false;
var winningScore=5;
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var winningScoreDisplay=document.querySelector("p span");

p1Button.addEventListener("click",function(){
	if(!gameOver)
	{
		p1Score++;
		if(p1Score === winningScore)
		{
			p1Display.classList.add("winner");
			gameOver=true;
		}
		p1Display.textContent=p1Score;
	}
	
});

p2Button.addEventListener("click",function(){
	if(!gameOver)
	{
		p2Score++;
		if(p2Score === winningScore)
		{
			p2Display.classList.add("winner");
			gameOver=true;
		}
		p2Display.textContent=p2Score;
	}
});

resetButton.addEventListener("click",function(){
	reset();	
});

numInput.addEventListener("change",function(){
	winningScoreDisplay.textContent=this.value;//numInput.value extracts the value from the input screen
	winningScore=Number(numInput.value);		   //type cast it from string to number 
	reset();//to reset the values whenever new data is entered in the input area
});

function reset()
{
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver=false;
}
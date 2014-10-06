var count=0;
var w=10;
var h=10;
var ecount=0;
function doFirst()
{
	var canvas=document.getElementById('canvas');
	context=canvas.getContext('2d');
	window.addEventListener("mousemove",next,false);
	

	cs=document.getElementById("clear_all");
	cs.addEventListener("mouseover",allclean,false);
	
	cl=document.getElementById('color');
	cl.addEventListener("mouseover",change_color,false);
	
	th=document.getElementById('thick');
	th.addEventListener("mouseover",thick,false);
	
	er=document.getElementById('eraser');
	er.addEventListener("mouseover",erase,false);
	

}

function erase(e)
{

var xPos=e.clientX;
var yPos=e.clientY;

context.clearRect(xPos-200,yPos-165,w,h);

	
	window.addEventListener("mousemove",erase,false);

	}
function allclean()
{context.clearRect(0,0,990,990);
}

function thick()
{w=w+10;
h=h+10;
	
	if(w>40&&h>40)
{w=10;h=10;}	
	
	}

function change_color(){
count++;

	}

function next(e)
{

var xPos=e.clientX;
var yPos=e.clientY;

if(count==0)
context.fillStyle="blue";
else if(count ==1)
context.fillStyle="yellow";
else if(count ==2)
context.fillStyle="red";
else if(count ==3)
context.fillStyle="orange";
else if(count >3)
count=0;
context.fillRect(xPos-200,yPos-165,w,h);
	

}

window.addEventListener("load",doFirst,false);

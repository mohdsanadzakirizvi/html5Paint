var count=0;
var w=10;
var h=10;
var ecount=0;
var textX=40,textY=40;
 var flag=0;
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
	
    sm=document.getElementById('help');
	sm.addEventListener("mouseover",help,false);
	
}
function help()
{   
	
	allclean();
	var img=new Image();
	img.onload=function(){context.drawImage(img,0,0);};
	img.src="https://cloud.githubusercontent.com/assets/8193234/4618534/bd59ac30-530a-11e4-8af7-09558ae565c2.png";


	

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

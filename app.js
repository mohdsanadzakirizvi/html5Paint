var count = 0,
    w = 10,
    h = 10,
    ecount = 0,
    textX = 40,
    textY = 40,
    flag = 0;

function doFirst() {
    var pe = document.getElementById('color'),
	    cs = document.getElementById('clear_all'),
	    cl = document.getElementById('color'),
	    th = document.getElementById('thick'),
	    er = document.getElementById('eraser'),
	    sm = document.getElementById('help'),
	    dw = document.getElementById('download');

    pe.addEventListener('mouseover', next, false);
    cs.addEventListener('mouseover', allclean, false);
    cl.addEventListener('mouseover', change_color, false);
    th.addEventListener('mouseover', thick, false);
    er.addEventListener('mouseover', erase, false);
    sm.addEventListener('mouseover', help, false);
    dw.addEventListener('mouseover',download,false);
}

function help() {
	var canvas = document.getElementById('canvas'),
	    context = canvas.getContext('2d');
    allclean();
    var img = new Image();
    img.onload = function() {
        context.drawImage(img, 0, 0);
    };
    img.src = 'help.png';



}

function erase(e) {
	var canvas = document.getElementById('canvas'),
	    context = canvas.getContext('2d');	
    window.addEventListener('mousemove', function(e) {
        var xPos = e.clientX,
            yPos = e.clientY;
        context.clearRect(xPos - 200, yPos - 169, w, h);
    }, false);


}

function allclean() {
	var canvas = document.getElementById('canvas'),
	    context = canvas.getContext('2d');
    context.clearRect(0, 0, 1000, 990);
}

function thick() {
    w = w + 10;
    h = h + 10;

    if (w > 40 && h > 40) {
        w = 10;
        h = 10;
    }

}

function change_color() {
    count++;

}

function next(e) {

	var canvas = document.getElementById('canvas'),
	    context = canvas.getContext('2d');

    window.addEventListener('mousemove', function(e) {
        var xPos = e.clientX;
        var yPos = e.clientY;

        if (count == 0)
            context.fillStyle = 'blue';
        else if (count == 1)
            context.fillStyle = 'yellow';
        else if (count == 2)
            context.fillStyle = 'red';
        else if (count == 3)
            context.fillStyle = 'orange';
        else if (count > 3)
            count = 0;
        context.fillRect(xPos - 200, yPos - 169, w, h);
    }, false);


}

function download(){
	var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'), 
	    a = document.getElementById('dw_link'),
        data = context.getImageData(0, 0, 1000, 800),
        compositeOperation = context.globalCompositeOperation;
    
    //set the canvas background to white
    context.globalCompositeOperation = 'destination-over';
    context.fillStyle = 'white';
    context.fillRect(0,0,1000,800);
    
    //extract image 

    var src = canvas.toDataURL('image/png');
    a.setAttribute('href',src);
    
    //clear the canvas background
    context.clearRect (0,0,1000,800);
    context.putImageData(data, 0,0);        
    context.globalCompositeOperation = compositeOperation;

}

window.addEventListener('load', doFirst, false);

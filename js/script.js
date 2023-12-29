
var radius = 240;
var autoRotate = true;
var rotateSpeeed= -60;
var imgWidth =120;
var imgHeigth = 170;

setTimeout (init,1000);

var odrag=document.getElementById('drag-container');
var ospin=document.getElementById('spin-contianer');
var aImg= ospin.getElementsByTagName('img');
var aEle = [aImg];

ospin.style.width=imgWidth + " px";
ospin.style.height = imgHeigth + " px";

var g = document.getElementById('ground');
g.style.width = radius * 3 + " px";
g.style.height = radius * 3 + " px";


var l= aEle.length;


function init(delayTime) {
    for(var i=0;i <l; i++){
        aEle[i].style.transform = "rotateY(" + ( i * (360/l)) + "deg) translateZ(240 px)";
        aEle[i].style.transition="transform 1s";
        aEle[i].style.transitionDelay=delayTime || ( l - i )/4 + "s";
   
   
    }
}
function appplyTransform (obj){
    if(tY>180) tY=180;
    if(tY < 0) tY=0;

    obj.style.transform = "rotateX(" + (-tY) + "deg)  rotateY( " + (tX) + "deg"


}

(yes?'running':'paused');
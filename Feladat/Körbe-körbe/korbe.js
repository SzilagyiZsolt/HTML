//const kijelzo=document.querySelector("#kijelzo");
//var szam=0;
//function szamol()
//{
//    kijelzo.innerHTML=szam.toString();
//    szam+=1;
//}
//setInterval(szamol,1000)
//const szel=window.screen.width;
//const mag=window.screen.height;

//
//function megy(){
//    
//}
const kep=document.querySelector("#kep");
kep.addEventListener("mouseover", move_img)
var seb=1;
function move_img() {
    var step=1;
    var y=document.getElementById('kep').offsetLeft;
    var x=document.getElementById('kep').offsetTop;
    if(y<1720 && x<770){
        y= y + step;
        document.getElementById('kep').style.left= y + "px";
    }
    else if(y==1720 && x<770){
        x= x + step;
        document.getElementById('kep').style.top= x + "px";
        step=2;
    }
    else if(y<=1720 && x<=770 && y!=0){
        y= y - step;
        document.getElementById('kep').style.left= y + "px";
    }
    else if(y==0 && x<=850 ){
        x= x -step;
        document.getElementById('kep').style.top= x + "px";
    }
}
setInterval(move_img,seb);
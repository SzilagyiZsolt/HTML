const g5=document.querySelector('#g5');
const szel=window.screen.width;
const mag=window.screen.height;

g5.addEventListener("mouseenter",mozgat);

function mozgat(){
    X=Math.random()*szel;
    Y=Math.random()*mag;
    console.log(X,Y);
}
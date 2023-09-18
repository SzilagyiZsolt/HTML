const g5=document.querySelector('#g5');
//const szel=window.screen.width;
//const mag=window.screen.height;

g5.addEventListener("mouseover",change);

function change()
{
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    g5.style.left = i+"px";
    g5.style.top = j+"px";
}
//function mozgat()
//{
//    X=Math.random()*szel;
//    Y=Math.random()*mag;
//    console.log(X,Y);
//    g5.style.position="absolute";
//    g5.style.clientX= X+'px';
//    g5.style.clientY= Y+'px';
//}//
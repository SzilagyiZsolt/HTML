var a_input=document.getElementById("a_szam");
var b_input=document.querySelector("#b_szam");
var kijelzo=document.getElementById("eredmeny");

function osszead(){
    a=parseFloat(a_input.value);
    b=parseFloat(b_input.value);
    kijelzo.innerHTML="Összeadva: "+(a+b).toString();
}

function kivon(){
    a=parseFloat(a_input.value);
    b=parseFloat(b_input.value);
    kijelzo.innerHTML="Kivonva: "+(a-b).toString();
}

function kivon(){
    a=parseFloat(a_input.value);
    b=parseFloat(b_input.value);
    kijelzo.innerHTML="Kivonva: "+(a-b).toString();
}
//globális konstantok és változók megadása
const kep=document.querySelector('#kep');
const gomb=document.querySelector('#szinesGomb');
var allapot="feketefeher";

//esemény hozzárendelése
gomb.addEventListener('click',kepcsere);
kep.addEventListener('mouseover',szines);

//esemény létrehozása
function kepcsere()
{
    if(allapot=="feketefeher")
    {
        kep.src="szines.png"
        gomb.innerHTML="Feketefehér";
        allapot="színes";
    }
    else{
        kep.src="feketefeher.png"
        gomb.innerHTML="Színes";
        allapot="feketefeher";
    }
    
}

function szines()
{
    if(allapot=="feketefeher")
    {
        kep.src="szines.png"
        gomb.innerHTML="Feketefehér";
        allapot="színes";
    }
    else{
        kep.src="feketefeher.png"
        gomb.innerHTML="Színes";
        allapot="feketefeher";
    }
}
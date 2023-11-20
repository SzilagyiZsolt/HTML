const inputid=document.querySelector("#id");
const inputusername=document.querySelector("#username");
const inputdarab=document.querySelector("#darab");
const buttonread=document.querySelector("#read");
const body=document.getElementsByTagName("body")[0];
const cards=document.querySelectorAll("#cards");

body.addEventListener("load", getAllUsers); 
buttonread.addEventListener("click",getAllUsers);

async function getAllUsers(){
    let endpoint="https://retoolapi.dev/Hfa9uy/data";
    //let head={method: "GET", mode: "no-cors", cache:"no-cache", headers: {"Content-Type": "application/json"}, body: JSON.stringify()};
    try{
        const response = await fetch(endpoint);
        const users = await response.json();
        showAllUsers(users);
    }
    catch(error){
        console.log(error);
    }
}
function showAllUsers(params){
    params.forEach(user => {
        appendcard(user);
    });
}

function appendcard(user){
    cards
    card="<div class=\"card\" style=\"width: 18rem;\"><img src=\"noimages.png\" class=\"card-img-top\" alt=\"...\"><div class=\"card-body\"><h5 class=\"card-title\">Card title</h5><h5>"+user.id+"</h5>";
}
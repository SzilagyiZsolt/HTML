const inputid = document.querySelector("#id");
const inputUsername = document.querySelector("#username");
const inputDarab = document.querySelector("#darab");
const buttonRead = document.querySelector("#read");
const divCards = document.querySelector("#cards");
const create = document.querySelector("#create");
const update = document.querySelector("#update");
const Delete = document.querySelector("#delete");

window.addEventListener("load", getAllUsers); //-- a lap betöltésekor is ...
buttonRead.addEventListener("click", getAllUsers);

async function getAllUsers() {
    let endpoint = "https://retoolapi.dev/Hfa9uy/data";
    try {
        const response = await fetch(endpoint);
        const users = await response.json();
        showAllUsers(users);    
    } catch (error) {
        console.log(error);
    }   
}

function showAllUsers(users){
    let html="";
    users.forEach(
        user => { html += 
        `
        <div class="card" style="width: 18rem;">
        <img src="noimages.png" class="card-img-top" alt="noimage.jpg">
            <div class="card-body">
                <h5 class="card-title">${user.id}. ${user.username}</h5>
                <p class="card-text">${user.darab}</p>
                <button href="#" class="btn btn-primary" onclick="betoltInputMezobe(${user.id})">Kiválaszt</button>
            </div>
        </div>
        `;
    });
    divCards.innerHTML=html;
}
async function betoltInputMezobe(id){
    let url=`https://retoolapi.dev/Hfa9uy/data/${id}`;
    try {
        const response = await fetch(url);
        const users = await response.json();
        inputid.value=users.id;
        inputUsername.value=users.username;
        inputDarab.value=users.darab;
        location.href="#formEleje";
    } catch (error) {
        console.log(error);
    }
    fetch(url);
}

create.addEventListener("click", async ()=>{
    let url=`https://retoolapi.dev/Hfa9uy/data`;
    let data={
        username: inputUsername.value,
        darab: inputDarab.value
    };
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const user = await response.json();
        console.log(user);
        beviteliMezokAlap();
        getAllUsers();
    }
    catch(error){
        console.log(error);
    }
});

Delete.addEventListener("click", async ()=>{
    let url=`https://retoolapi.dev/Hfa9uy/data/${inputid.value}`;
    try {
        const response = await fetch(url, {
            method: "DELETE"
        });
        const user = await response.json();
        console.log(user);
        beviteliMezokAlap();
        getAllUsers();
    }
    catch(error){
        console.log(error);
    }
});

update.addEventListener("click", async ()=>{
    let url=`https://retoolapi.dev/Hfa9uy/data/${inputid.value}`;
    let data={
        username: inputUsername.value,
        darab: inputDarab.value
    };
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const user = await response.json();
        console.log(user);
        beviteliMezokAlap();
        getAllUsers();
    }
    catch(error){
        console.log(error);
    }
});

function beviteliMezokAlap(){
    inputid.value="";
    inputDarab.value="1";
    inputUsername.value="";
}
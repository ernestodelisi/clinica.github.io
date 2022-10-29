
/*
const iconoMenu = document.querySelector('#origin-menu');
const menu = document.querySelector('#listMenu');


iconoMenu.addEventListener('click', (e)=>{
    
    if (menu.style.display == "flex")
    {
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }

    
});
*/

const nombre = document.getElementById("name");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = "";
    entrar = false;
    let regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if(nombre.value.length <3){
        warnings += `Nombre no valido<br>`;
        entrar = true;
    }
    if(mensaje.value.length <10){
        warnings += `Mensaje no valido <br>`;
        entrar = true;
    }
    
    if(!regex_email.test(email.value)){
        warnings += `Email no valido <br>`;
        entrar = true;
    }
    if (entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
    }
    
});


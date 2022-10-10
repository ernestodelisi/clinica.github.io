const iconoMenu = document.querySelector('#origin-menu');
const menu = document.querySelector('#listMenu');

iconoMenu.addEventListener('click', (e)=>{
    
    if (menu.style.display == "flex")
    {
        menu.style.display = "none";
    }else{
        menu.style.display = "flex";
    }

    
})
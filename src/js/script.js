// toggle menu script
const toggleMenuEl = document.getElementById('js-toggle-menu');
const toggleableMenuEl = document.getElementById('js-toggleable-menu');
const menu = document.getElementById('menu');
let isOpen = false;

toggleMenuEl?.addEventListener('click', function(){
    toggleableMenuEl?.classList.toggle('active');
    if(isOpen){
        menu.src = "src/img/burger-bar.png";
    }
    else{
        menu.src = "src/img/arrow.png";
    }
    isOpen = !isOpen; // change condition
})
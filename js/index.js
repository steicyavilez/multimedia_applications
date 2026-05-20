// Cambiar idioma
var check=document.querySelector(".languaje .check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/index.html";
    }else{
        location.href="../index.html";
    }
}

// Scroll abajo
function scrollAbajo() {
    window.scrollBy({
        top: 400,        // ← cantidad de píxeles que baja
        behavior: 'smooth'
    });
}

// Hamburguesa — toggle del menú en móvil
const menuToggle = document.querySelector('.menu-toggle');
const navbar     = document.querySelector('.navbar');
const languaje   = document.querySelector('.languaje');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('open');
        languaje.classList.toggle('open'); // ← línea nueva
    });
}
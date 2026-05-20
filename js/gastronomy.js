var check=document.querySelector(".languaje .check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/gastronomy.html";
    }else{
        location.href="../gastronomy.html";
    }
}

// Hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navbar     = document.querySelector('.navbar');
const languaje   = document.querySelector('.languaje');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('open');
        languaje.classList.toggle('open');
    });
}
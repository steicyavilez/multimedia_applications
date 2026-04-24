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

function scrollAbajo() {
    window.scrollBy({
        top: 400,        // ← cantidad de píxeles que baja
        behavior: 'smooth'
    });
}
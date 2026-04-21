var check=document.querySelector(".languaje .check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/festivals.html";
    }else{
        location.href="../festivals.html";
    }
}
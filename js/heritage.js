var check=document.querySelector(".languaje .check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/heritage.html";
    }else{
        location.href="../heritage.html";
    }
}
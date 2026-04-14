var check=document.querySelector(".languaje .check");
check.addEventListener("click",idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="subsecciones es/festivals.html";
    }else{
        location.href="../festivals.html";
    }
}
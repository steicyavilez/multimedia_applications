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


const data = {
    fandango: {
      img:   "../images/events/fandango-de-reyes-1.jpg",
      title: "Fandango de Reyes",
      p1:    "El Fandango de Reyes es una de las festividades mas importantes de Tierralta y se celebra en el mes de enero, además, este evento reúne desfiles de comparsas, presentaciones de bandas musicales y el tradicional baile de la pollera, además, los participantes lucen trajes típicos como el sombrero vueltiao y bailan al rito del fandango, muchas veces acompañados de velas encendidas.",
      p2:    "También se destacan la participación de niños en el fandango infantil, lo que garantiza la transmisión de esta tradición a las nuevas generaciones.",
    },
    corralejas: {
      img:   "../images/events/fiesta-de-corralejas-1.jpg",
      title: "Fiestas de Corralejas",
      p1:    "Celebradas en marzo en honor a San José, las corralejas son una de las festividades mas representativas de la región.",
      p2:    "Este evento incluye actividades relacionadas con la tradición ganadera, así como espectáculos artísticos, conciertos y presentaciones folclóricas, además, su gran convocatoria y ambiente festivo la convierte en una experiencia cultural única para quienes visitan Tierralta es esta época.",
    },
    aniversario: {
      img:   "../images/events/aniversario-de-tierralta-1.jpg",
      title: "Aniversario de Tierralta",
      p1:    "En el mes de noviembre se celebra el aniversario del municipio con una amplia programación cultural y recreativa.",
      p2:    "Durante esta festividad se realizan conciertos gratuitos, presentaciones artísticas y actividades para toda la familia, además, la música vallenata, tropical y folclórica es protagonista, creando un ambiente de celebración e identidad local.",
    },
    turismo: {
      img:   "../images/events/festival-del-turismo-y-la-cultura-1.jpg",
      title: "Festival del Turismo y la Cultura",
      p1:    "Este festival tiene como objetivo promover el turismo sostenible y resaltar el patrimonio cultural de Tierralta.",
      p2:    "Incluyendo espacios de dialogo sobre turismo comunitario, muestras artísticas, ferias gastronómicas con sabores locales, exhibiciones de artesanías, danzas y comparsas, por eso, es una excelente oportunidad para conocer la diversidad cultural y natural del municipio.",
    },
};

function abrirModal(lugar) {
    const d = data[lugar];
    document.getElementById('modal-img').src       = d.img;
    document.getElementById('modal-img').alt       = d.title;
    document.getElementById('modal-titulo').textContent  = d.title;
    document.getElementById('modal-texto-1').textContent = d.p1;
    document.getElementById('modal-texto-2').textContent = d.p2;

    const overlay = document.getElementById('modal');
    overlay.scrollTop = 0;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.style.overflow = '';
}

function handleOverlayClick(e) {
    // close only if clicking the dark background, not the modal box
    if (!document.getElementById('modalBox').contains(e.target)) {
      cerrarModal();
    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') cerrarModal();
});

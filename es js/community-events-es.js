var check=document.querySelector(".languaje .check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/community-events.html";
    }else{
        location.href="../community-events.html";
    }
}


const data = {
    maraton: {
      img:   "../images/events/media-maraton-dorada-1.jpg",
      title: "Media maratón dorada",
      p1:    "Este evento deportivo y solidario tuvo como propósito apoyar una causa social importante, la cual es, la construcción de la Casa Hogar de Macondo, un refugio para niños con cáncer y sus cuidadores.",
      p2:    "La participación de la comunidad permitió recaudar fondos y demostrar el compromiso social de los habitantes en Tierralta, combinado deporte, solidaridad y esperanza.",
    },
    gastronomico: {
      img:   "../images/events/festival-gastronomico-saberes-y-fogones-1.jpg",
      title: "Festival gastronómico saberes y fogones ",
      p1:    "Este festival resalta la riqueza culinaria del Alto Sinú a través de concursos de cocina tradicional y participación de restaurantes locales.",
      p2:    "Incluyendo música en vivo, muestras gastronómicas, buffet de comida típica y un mercado campesino donde se pueden adquirir productos frescos y locales, por eso, es un espacio ideal para disfrutar de la cultura a través de los sabores.",
    },
    biblioteca: {
      img:   "../images/events/talleres-en-la-biblioteca-municipal-1.jpg",
      title: "Talleres en la biblioteca municipal",
      p1:    "La biblioteca municipal organiza talleres dirigido a niños y jóvenes entre 8 y 16 años, promoviendo el aprendizaje y la creatividad.",
      p2:    "Entre las actividades se incluyen danza, lectura, teatro, pintura y música, contribuyendo al desarrollo cultural y educativo de la comunidad.",
    },
    comfacor: {
      img:   "../images/events/actividades-de-comfacor-1.jpg",
      title: "Actividades de Comfacor ",
      p1:    "La Caja de Compensación Familiar de Córdoba (Comfacor) también impulsa actividades para niños, niñas y jóvenes en el municipio.",
      p2:    "Estas incluyen talleres de pintura, festivales culturales, actividades deportivas, manualidades y espacios recreativos que fomentan el talento, la creatividad y el uso adecuado del tiempo libre.",
    }
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

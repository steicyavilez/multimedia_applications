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
      img:   "images/events/fandango de reyes 1.jpg",
      title: "Fandango de Reyes (Three Kings’ Day Festival)",
      p1:    "The Fandango of the Three Kings is one of Tierralta’s most important festivities and is celebrated in January. This event features parades, musical performances, and the traditional pollera dance. Participants wear typical costumes such as the vueltiao hat and dance to the rhythm of the fandango, often accompanied by lit candles.",
      p2:    "The participation of children in the children’s fandango is also a highlight, ensuring the transmission of this tradition to new generations. "
    },
    corralejas: {
      img:   "images/events/fiesta de corralejas 1.jpg",
      title: "Corralejas Festival",
      p1:    "Celebrated in March in honor of Saint Joseph, the corralejas are one of the region’s most representative festivities.",
      p2:    "This event includes activities related to cattle ranching traditions, as well as artistic performances, concerts, and folkloric presentations. Its large crowds and festive atmosphere make it a unique cultural experience for those visiting Tierralta at this time of year."
    },
    aniversario: {
      img:   "images/events/aniversario de tierralta 1.jpg",
      title: "Tierralta Anniversary",
      p1:    "In November, the municipality celebrates its anniversary with a wide-ranging cultural and recreational program.",
      p2:    "During this celebration, free concerts, artistic performances, and activities for the whole family take place. Vallenato, tropical, and folk music are featured, creating an atmosphere of celebration and local identity."
    },
    turismo: {
      img:   "images/events/festival del turismo y la cultura 1.jpg",
      title: "Tourism and Culture Festival",
      p1:    "This festival aims to promote sustainable tourism and highlight Tierralta’s cultural heritage.",
      p2:    "It includes spaces for dialogue on community-based tourism, artistic displays, food fairs featuring local flavors, craft exhibitions, dances, and parades. Therefore, it is an excellent opportunity to discover the municipality’s cultural and natural diversity."
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

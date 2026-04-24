var check=document.querySelector(".languaje .check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/community events.html";
    }else{
        location.href="../community events.html";
    }
}

const data = {
    maraton: {
      img:   "images/events/media-maraton-dorada-1.jpg",
      title: "Golden Half Marathon",
      p1:    "This sporting and charitable event aimed to support an important social cause: the construction of the Macondo Children’s Home, a shelter for children with cancer and their caregivers.",
      p2:    "Community participation raised funds and demonstrated the social commitment of Tierralta’s residents, combining sport, solidarity, and hope.",
    },
    gastronomico: {
      img:   "images/events/festival-gastronomico-saberes-y-fogones-1.jpg",
      title: "Gastronomic Festival: Knowledge and Stives",
      p1:    "This festival highlights the culinary richness of the Alto Sinú region through traditional cooking competitions and the participation of local restaurants.",
      p2:    "Featuring live music, food tastings, a buffet of traditional dishes, and a farmers’ market where you can buy fresh, local products, it’s the perfect place to enjoy culture through its flavors.",
    },
    biblioteca: {
      img:   "images/events/talleres-en-la-biblioteca-municipal-1.jpg",
      title: "Workshops at the Municipal Library",
      p1:    "The municipal library organizes workshops for children and young people between the ages of 8 and 16, promoting learning and creativity.",
      p2:    "Activities include dance, reading, theater, painting, and music, contributing to the cultural and educational development of the community.",
    },
    comfacor: {
      img:   "images/events/actividades-de-comfacor-1.jpg",
      title: "Comfacor Activities",
      p1:    "The Córdoba Family Compensation Fund (Comfacor) also promotes activities for children and young people in the municipality.",
      p2:    "These include painting workshops, cultural festivals, sports activities, crafts, and recreational spaces that foster talent, creativity, and the constructive use of free time.",
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

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

const data = {
    museum: {
      img:   "images/culture/museo-arqueologico-zenu-1.jpg",
      title: "Zenú Archaeological Museum ",
      p1:    "This museum is a fundamental space for learning about the history of the region, as it houses an important collection of ceramic pieces made by the Zenú culture, as well as stone tools, bone remains, photographs, and other historical artifacts.",
      p2:    "A visit to this museum allows one to understand the practices, beliefs, and ways of life of the territory’s ancient inhabitants, strengthening the value of cultural heritage.",
    },
    artesanias: {
      img:   "images/culture/artesanias-1.jpg",
      title: "Crafts ",
      p1:    "The crafts of the Tierralta area are a living expression of cultural identity, especially those made by the Embera Neka Artisans Association of the Upper Sinú.",
      p2:    "These products include bracelets, necklaces, backpacks, hats, and bags, created using traditional techniques passed down through generations. Therefore, each piece reflects creativity, symbolism, and a deep connection with nature, combining ancestral wisdom with touches of innovation.",
    },
    danza: {
      img:   "images/culture/danza-embera-katio-1.jpg",
      title: "Embera Katio Dance ",
      p1:    "The dances of the Embera Katio people are an ancestral tradition that is still preserved today. These cultural expressions are deeply connected to nature, rituals, and the worldview of this indigenous community.",
      p2:    "Through their movements, music, and clothing, these dances convey teachings about respect for the environment, spirituality, and the importance of maintaining balance with nature.",
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

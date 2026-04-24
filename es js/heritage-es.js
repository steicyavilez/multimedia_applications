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
      img:   "../images/culture/museo arqueologico zenu 1.jpg",
      title: "Museo arqueológico zenú",
      p1:    "Este museo es un espacio fundamental para conocer la historia de la región, ya que, alberga una importante colección de piezas de cerámica elaboradas por la cultura Zenú, así como herramientas líticas, restos óseo, fotografías y otros elementos históricos.",
      p2:    "La visita a este museo permite comprender las practicas, creencias y formas de vida de los antiguos habitantes del territorio, fortaleciendo el valor del patrimonio cultural.",
    },
    artesanias: {
      img:   "../images/culture/artesanias 1.jpg",
      title: "Artesanías",
      p1:    "Las artesanías de Tierralta son una expresión viva de la identidad cultural, especialmente las elaboradas por la Asociación de Artesanos Embera Neka del Alto Sinú.",
      p2:    "Estos productos incluyen pulseras, collares, mochilas, sombrero y bolsos, creados a partir de técnicas tradicionales transmitidas de generación en generación, por eso, cada pieza refleja creatividad, simbolismo y una conexión profunda con la naturaleza, combinado lo ancestral con toques de innovación.",
    },
    danza: {
      img:   "../images/culture/danza embera katio 1.jpg",
      title: "Danza Embera Katio",
      p1:    "Las danzas del pueblo Embera Katio son una manifestación ancestral que aun se conserva en la actualidad. Estas expresiones culturales están profundamente conectadas con la naturaleza, los rituales y la cosmovisión de esta comunidad indígena.",
      p2:    "A través de sus movimientos, música y vestimenta, estas danzas transmiten enseñanzas sobre el respeto por el entorno, la espiritualidad y la importancia de mantener el equilibrio con la naturaleza.",
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

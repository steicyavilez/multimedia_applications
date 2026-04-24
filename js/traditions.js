var check=document.querySelector(".languaje .check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/traditions.html";
    }else{
        location.href="../traditions.html";
    }
}

const data = {
    fandango: {
      img:   "images/culture/fandango-1.jpg",
      title: "Fandango",
      p1:    "The fandango is one of the region's most representative cultural expressions, performed by folk bands and featured prominently in parades, dance troupes, and popular celebrations.",
      p2:    "During this dance, the women wear colorful blouses, and the men wear the traditional vueltiao hat. It also features a characteristic element: the use of lit candles, which create a symbolic and festive atmosphere. Furthermore, this tradition involves people of all ages, allowing it to remain alive through time."
    },
    cumbia: {
      img:   "images/culture/cumbia-1.jpg",
      title: "Cumbia",
      p1:    "Cumbia is a dance that combines rhythm, elegance, and symbolism. It is danced in pairs with a courtship style, where the woman, wearing a wide skirt, makes circular movements while holding lit candles.",
      p2:    "The man accompanies her with smooth, coordinated steps, circling the musical group counterclockwise. This dance represents cultural unity and is one of the most important expressions of regional folklore."
    },
    vallenato: {
      img:   "images/culture/vallenato-1.jpg",
      title: "Vallenato",
      p1:    "Vallenato is an emblematic musical genre of the Caribbean region that also has a strong presence in Tierralta, as it is performed with traditional instruments such as the accordion, the caja (a type of drum), and the guacharaca (a percussion instrument).",
      p2:    "Its main rhythms include paseo, merengue, son, and puya, and its lyrics often tell stories of daily life, love, and popular culture. The dance is performed in pairs and is characterized by smooth, rhythmic movements that reflect closeness and emotional expression."
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

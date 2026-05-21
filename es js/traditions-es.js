// Cambiar idioma
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
      img:   "../images/culture/fandango-1.jpg",
      title: "Fandango",
      p1:    "El fandango es una de las expresiones culturales más representativas de la región, ya que se interpreta con bandas folclóricas y es protagonista en desfiles, comparsas y celebraciones populares.",
      p2:    "Durante este baile, las mujeres lucen coloridas poleras y los hombres el tradicional sombrero vueltiao, también, cuenta con un elemento característico, el cual, es el uso de velas encendidas que aportan un ambiente simbólico y festivo, además, esta tradición involucra a personas de todas las edades, lo que permute que se mantenga viva a través del tiempo.",
    },
    cumbia: {
      img:   "../images/culture/cumbia-1.jpg",
      title: "Cumbia",
      p1:    "La cumbia es una danza que combina ritmo, elegancia y simbolismo, se baila en pareja con un estilo de cortejo, donde la mujer, con una falda amplia, realiza movimientos circulares mientas sostiene velas encendidas.",
      p2:    "El hombre la acompaña con pasos suaves y coordinado, girando alrededor del grupo musical en sentido contrario a las manecillas del reloj, esta danza representa la unión cultural y es una de las manifestaciones mas importantes del folclor regional.",
    },
    vallenato: {
      img:   "../images/culture/vallenato-1.jpg",
      title: "Vallenato",
      p1:    "El vallenato es un genero musical emblemático de la región Caribe que también tiene gran presencia en Tierralta, ya que, se interpreta con instrumentos tradicionales como el acordeón, la caja y la guacharaca. ",
      p2:    "Sus ritmos principales incluyen el paseo, merengue, son y puya, y sus letras suelen contar historias de la vida cotidiana, el amor y la cultura popular, por eso, el baile es en pareja y se caracteriza por movimientos suaves y cadenciosos que reflejan cercanía y expresión emocional.",
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

// Hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navbar     = document.querySelector('.navbar');
const languaje   = document.querySelector('.languaje');

if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('open');
        languaje.classList.toggle('open');
    });
}

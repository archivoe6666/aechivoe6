/* ==========================================
   ARCHIVO E-SEIS
   SCRIPT PRINCIPAL
========================================== */



// ==========================================
// NAVEGACIÓN ENTRE SECCIONES
// ==========================================


function mostrarSeccion(id){


const secciones = document.querySelectorAll(".seccion");



secciones.forEach(seccion=>{

seccion.classList.remove("activa");

});



const seccion = document.getElementById(id);



if(seccion){

seccion.classList.add("activa");

}



window.scrollTo({

top:0,

behavior:"smooth"

});


}
const menu=document.getElementById("menu");

if(menu){

menu.classList.remove("activo");

}






// ==========================================
// WHATSAPP
// ==========================================


function abrirWhatsapp(){



const numero = "593000000000";



const mensaje = 
"Hola Archivo E-SEIS, quiero obtener información sobre la revista.";



const url = 

"https://wa.me/" +

numero +

"?text=" +

encodeURIComponent(mensaje);



window.open(url,"_blank");


}







// ==========================================
// SISTEMA DE MODALES
// ==========================================


function abrirModal(id){


const modal = document.getElementById(id);



if(modal){


modal.style.display="flex";


}


}





function cerrarModal(id){


const modal=document.getElementById(id);



if(modal){


modal.style.display="none";


}


}





// cerrar al presionar fuera


window.addEventListener(
"click",

function(e){


const modales=document.querySelectorAll(".modal");



modales.forEach(modal=>{


if(e.target===modal){


modal.style.display="none";


}


});


}

);









// ==========================================
// POLÍTICAS DE PRIVACIDAD
// ==========================================


function abrirPoliticas(){


abrirModal("modalPoliticas");


}








// ==========================================
// REVISTA EDICIÓN 0
// ==========================================



function abrirVistaPrevia(){



abrirModal("modalRevista");


}






function abrirBloqueo(){


cerrarModal("modalRevista");


abrirModal("modalPassword");


}









// ==========================================
// DESBLOQUEAR REVISTA
// ==========================================



function desbloquear(){



const password =

document.getElementById("password").value;



const claveCorrecta = "e6666";





if(password === claveCorrecta){



cerrarModal("modalPassword");



abrirModal("modalCompleto");



}

else{


alert(

"La contraseña ingresada es incorrecta."

);


}



}









// ==========================================
// DESCARGA PDF
// ==========================================

// ==========================================
// DESCARGAR PDF REVISTA
// ==========================================

function descargarPDF(){

    const archivo = "pdf/ArchivoESEISN1.pdf";

    const enlace = document.createElement("a");

    enlace.href = archivo;

    enlace.download = "ArchivoESEISN1.pdf";

    document.body.appendChild(enlace);

    enlace.click();

    document.body.removeChild(enlace);

}








// ==========================================
// ARTÍCULOS COMPLETOS
// ==========================================
const contenidoArticulos = {


1:{


imagen:"assets/img/1.jpg",


titulo:"El PULULAHUA SIDERAL FEST V",


subtitulo:"Donde la música vuelve a encontrarse con el volcán",


texto:`

<h2>Una experiencia fuera del tiempo</h2>

<p>
En medio del paisaje volcánico que rodea al Pululahua, la música encontró nuevamente un espacio para reunirse, experimentar y resistir. El Pululahua Sideral Fest V se consolidó como una celebración independiente que reúne sonidos alternativos, arte visual y una comunidad que busca vivir la cultura fuera de los circuitos tradicionales.
</p>


<p>
Más que un festival, Pululahua Sideral representa un punto de encuentro para artistas y públicos que entienden la música como una experiencia colectiva. Entre montañas, naturaleza y escenarios improvisados, diferentes propuestas musicales construyen una atmósfera donde conviven géneros, generaciones y formas distintas de expresión.
</p>


<h2>Un escenario construido por la naturaleza</h2>


<p>
El festival nace desde una necesidad: crear espacios propios para la escena independiente ecuatoriana. En un contexto donde muchos proyectos culturales dependen de la autogestión, estos encuentros funcionan como plataformas de visibilidad para músicos emergentes y propuestas experimentales que difícilmente encuentran lugar en escenarios comerciales.
</p>




<h2>Más que un festival, un recuerdo</h2>


<p>
Durante su quinta edición, el festival reunió bandas y artistas que representan la diversidad sonora actual de Quito y Ecuador. El público no solo asistió a conciertos, sino que participó de una experiencia completa donde la fotografía, el diseño, la convivencia y el paisaje forman parte del espectáculo.

Cada edición deja un registro de una escena que está en constante transformación. Sin embargo, gran parte de esta memoria queda dispersa entre publicaciones temporales en redes sociales, fotografías personales y archivos difíciles de encontrar con el paso del tiempo.

Por eso, documentar eventos como Pululahua Sideral Fest es conservar una parte de la identidad cultural contemporánea de Quito. Cada imagen, cada presentación y cada encuentro representan fragmentos de una historia que continúa escribiéndose desde la independencia y la creatividad.
</p>

`,


imagenes:[

"assets/img/4.jpg",

"assets/img/2.jpg",

"assets/img/3.jpg"

]


},



2:{


imagen:"assets/img/m1.jpg",


titulo:"LA MADRE TIRANA + ESTAMOS PERDIDOS",


subtitulo:"Dos proyectos, una misma energía",


texto:`

<h2>la nueva resistencia del rock quiteño</h2>


<p>
La escena alternativa de Quito continúa creando espacios donde la música funciona como una forma de expresión, crítica y encuentro. La presentación conjunta de La Madre Tirana y Estamos Perdidos representa una muestra de cómo las nuevas generaciones mantienen vivo el espíritu independiente de la ciudad.

En un escenario marcado por la experimentación y la búsqueda de nuevos lenguajes, ambas bandas demostraron que el rock ecuatoriano sigue evolucionando. Lejos de repetir fórmulas conocidas, sus propuestas exploran sonidos intensos, letras personales y una identidad construida desde las experiencias urbanas.




</p>


<h2>Una escena que sigue creciendo</h2>


<p>
La Madre Tirana destaca por una propuesta cargada de fuerza y actitud. Su sonido combina elementos del rock alternativo con una presencia escénica que transforma el concierto en una experiencia emocional. La banda representa una generación que utiliza la música para cuestionar, expresar frustraciones y convertir experiencias individuales en mensajes colectivos.

Por otro lado, Estamos Perdidos refleja una sensibilidad distinta, marcada por la introspección y la exploración sonora. Su propuesta conecta con una juventud que enfrenta incertidumbres, cambios constantes y una realidad donde encontrar espacios de expresión se vuelve fundamental.

El encuentro entre ambos proyectos evidencia la importancia de los escenarios independientes como lugares de construcción cultural. Pequeños espacios, bares y centros culturales se convierten en plataformas donde nacen comunidades alrededor de la música.

Estos conciertos también revelan una problemática constante: muchas presentaciones quedan únicamente registradas en historias de Instagram o publicaciones pasajeras. Sin un archivo permanente, momentos importantes de la escena desaparecen con el tiempo.
</p>


`,


imagenes:[

"assets/img/m1.jpg",

"assets/img/m4.jpg",

"assets/img/m3.jpg"

]


},



3:{


imagen:"assets/img/r1.jpg",


titulo:"EL PRIMER REBELDE DE AMÉRICA X NÁUSEAS",


subtitulo:"Una experiencia sonora entre memoria",


texto:`

<h2>Identidad y caos creativo</h2>


<p>
En la escena independiente ecuatoriana existen proyectos que buscan romper estructuras y explorar nuevos caminos. La presentación de El Primer Rebelde de América junto a Náuseas fue un encuentro donde la música se convirtió en una experiencia cargada de energía, experimentación y libertad artística.

Ambos proyectos representan una generación que entiende el arte como un espacio de exploración. Más allá de crear canciones, sus propuestas construyen atmósferas donde el sonido, la imagen y la actitud forman parte de un mismo lenguaje.

El Primer Rebelde de América plantea una identidad marcada por la irreverencia y la búsqueda de nuevas formas de expresión. Su nombre funciona como una declaración de principios: cuestionar lo establecido y utilizar la música como herramienta de ruptura frente a las convenciones.

Por su parte, Náuseas desarrolla una propuesta intensa y visceral, donde los sonidos transmiten emociones difíciles de definir. Su música refleja una realidad urbana llena de contradicciones, ansiedad y experiencias personales transformadas en creación artística.

El encuentro entre ambas bandas muestra una característica esencial de la escena quiteña: la colaboración entre proyectos que comparten una misma necesidad de experimentar. En estos espacios no existen únicamente espectadores y artistas; existe una comunidad que construye identidad alrededor de la música.

Estos eventos representan momentos únicos que pocas veces quedan documentados de manera permanente. Las fotografías, grabaciones y testimonios permiten conservar una memoria que normalmente queda limitada a archivos personales.

Archivo E-SEIS busca recuperar estos fragmentos de la cultura contemporánea para demostrar que la escena independiente también forma parte de la historia artística de Quito.
</p>


`,


imagenes:[

"assets/img/r1.jpg",

"assets/img/r2.jpg",

"assets/img/r3.jpg"

]


}


};

function abrirArticulo(numero){


const articulo = contenidoArticulos[numero];


if(!articulo)return;



document.getElementById("imagenArticulo").src =
articulo.imagen;



document.getElementById("tituloArticulo").innerHTML =
articulo.titulo;



document.getElementById("textoArticulo").innerHTML =
articulo.texto;




const galeria =
document.getElementById("galeriaArticulo");



galeria.innerHTML="";



articulo.imagenes.forEach(img=>{


galeria.innerHTML +=

`
<img src="${img}">
`;



});



abrirModal("modalArticulo");


}





// ==========================================
// FORMULARIO SUSCRIPCIÓN
// ==========================================



const formulario = document.querySelector(".formulario");



if(formulario){


formulario.addEventListener(

"submit",

function(e){



e.preventDefault();



alert(

"Gracias por registrarte en Archivo E-SEIS. Revisaremos tu solicitud."

);



formulario.reset();



}


);


}









// ==========================================
// CERRAR MODAL CON ESC
// ==========================================


document.addEventListener(

"keydown",

function(e){



if(e.key==="Escape"){



document.querySelectorAll(".modal")

.forEach(modal=>{


modal.style.display="none";


});



}



}

);









// ==========================================
// ANIMACIÓN INICIAL
// ==========================================



window.addEventListener(

"load",

()=>{


document.body.classList.add("cargado");


}

);
/*=====================================================
MODALES
======================================================*/

function abrirFormularioGratis(){

document.getElementById("modalGratis").style.display="flex";

}

function abrirMetodosPago(){

document.getElementById("modalPago").style.display="flex";

}

function abrirTransferencia(){

cerrarModal("modalPago");

document.getElementById("modalTransferencia").style.display="flex";

}

function abrirTarjeta(){

cerrarModal("modalPago");

document.getElementById("modalTarjeta").style.display="flex";

}

function cerrarModal(id){

document.getElementById(id).style.display="none";

}




/*=====================================================
CERRAR MODAL AL HACER CLICK FUERA
======================================================*/

window.onclick=function(e){

const modales=document.querySelectorAll(".modal");

modales.forEach(function(modal){

if(e.target===modal){

modal.style.display="none";

}

});

}




/*=====================================================
FORMULARIO GRATUITO
======================================================*/

const formGratis=document.getElementById("formGratis");

if(formGratis){

formGratis.addEventListener("submit",function(e){

e.preventDefault();

cerrarModal("modalGratis");

document.getElementById("modalExito").style.display="flex";

formGratis.reset();

});

}




/*=====================================================
PAGO CON TARJETA
======================================================*/

const formTarjeta=document.getElementById("formTarjeta");

if(formTarjeta){

formTarjeta.addEventListener("submit",function(e){

e.preventDefault();

cerrarModal("modalTarjeta");

mostrarPagoExitoso();

formTarjeta.reset();

});

}




/*=====================================================
MODAL PAGO EXITOSO
======================================================*/

function mostrarPagoExitoso(){

let modal=document.createElement("div");

modal.className="modal";

modal.style.display="flex";

modal.innerHTML=`

<div class="ventana exito">

<h1>✓</h1>

<h2>Pago realizado correctamente</h2>

<p>

Gracias por apoyar Archivo E-SEIS.

En unos minutos recibirás un correo con:

<br><br>

• La contraseña de acceso.

<br>

• El enlace para leer la revista completa.

</p>

<button onclick="cerrarPago()">

Aceptar

</button>

</div>

`;

document.body.appendChild(modal);

}




function cerrarPago(){

const modal=document.querySelector(".modal:last-child");

if(modal){

modal.remove();

}

}




/*=====================================================
BOTÓN WHATSAPP
======================================================*/

function abrirWhatsapp(){

const telefono="593999999999"; // CAMBIAR

const mensaje=

`Hola.

Acabo de realizar la transferencia para adquirir una edición de Archivo E-SEIS.

Adjunto el comprobante de pago.`;

window.open(

`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,

"_blank"

);

}




/*=====================================================
VALIDACIÓN TARJETA
======================================================*/

const numero=document.querySelector('input[placeholder="Número de tarjeta"]');

if(numero){

numero.addEventListener("input",function(){

this.value=this.value

.replace(/\D/g,'')

.replace(/(.{4})/g,'$1 ')

.trim();

});

}




const cvv=document.querySelector('input[placeholder="CVV"]');

if(cvv){

cvv.addEventListener("input",function(){

this.value=this.value.replace(/\D/g,'');

});

}




const fecha=document.querySelector('input[placeholder="MM/AA"]');

if(fecha){

fecha.addEventListener("input",function(){

this.value=this.value

.replace(/\D/g,'')

.replace(/(\d{2})(\d)/,"$1/$2")

.substring(0,5);

});

}




/*=====================================================
EFECTO BOTONES PLANES
======================================================*/

const botones=document.querySelectorAll(".plan button");

botones.forEach(function(btn){

btn.addEventListener("mouseenter",function(){

btn.style.transform="scale(1.03)";

});

btn.addEventListener("mouseleave",function(){

btn.style.transform="scale(1)";

});

});




/*=====================================================
ANIMACIÓN DE ENTRADA DE PLANES
======================================================*/

const planes=document.querySelectorAll(".plan");

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

planes.forEach(function(plan){

plan.style.opacity="0";

plan.style.transform="translateY(60px)";

plan.style.transition=".8s";

observer.observe(plan);

});
// ==========================================
// IR A EDICIÓN FÍSICA DESDE MODAL PASSWORD
// ==========================================

function irEdicionFisica(){

    // cerrar modal del código
    cerrarModal("modalPassword");

    // abrir sección edición física
    mostrarSeccion("fisica");

}
// ==========================================
// MENU HAMBURGUESA
// ==========================================


function abrirMenu(){


const menu=document.getElementById("menu");


menu.classList.toggle("activo");


}
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


function descargarPDF(){



const archivo = 

"pdf/Archivo-E-SEIS-Edicion-0.pdf";



const enlace = document.createElement("a");



enlace.href = archivo;



enlace.download = 

"Archivo-E-SEIS-Edicion-0.pdf";



document.body.appendChild(enlace);



enlace.click();



document.body.removeChild(enlace);



}









// ==========================================
// ARTÍCULOS COMPLETOS
// ==========================================
// ==========================================
// ARTÍCULOS COMPLETOS
// ==========================================

const contenidoArticulos = {

1:{

    imagen:"assets/img/articulo1.jpg",

    titulo:"Memoria sonora de Quito",

    subtitulo:"La escena independiente como archivo vivo de una ciudad.",

    texto:`
    <p>
    Quito posee una escena musical independiente
    que constantemente crea nuevos lenguajes,
    espacios y formas de expresión.
    </p>

    <p>
    Desde pequeños escenarios hasta encuentros
    autogestionados, artistas construyen una memoria
    cultural que muchas veces permanece fuera
    de los registros tradicionales.
    </p>

    <p>
    Archivo E-SEIS busca documentar estos procesos,
    conservar sus historias y mostrar las conexiones
    entre música, identidad y territorio.
    </p>
    `,

    imagenesInterior:[
        "assets/img/1.jpg",
        "assets/img/2.jpg",
        "assets/img/3.jpg",
        "assets/img/5.jpg"
    ]

},

2:{

    imagen:"assets/img/articulo2.jpg",

    titulo:"Sonidos experimentales",

    subtitulo:"Nuevas formas de entender la creación musical.",

    texto:`
    <p>
    La experimentación sonora permite romper
    las estructuras tradicionales de composición.
    </p>

    <p>
    Artistas contemporáneos mezclan electrónica,
    grabaciones ambientales, instrumentos
    tradicionales y tecnología digital.
    </p>

    <p>
    Estos procesos generan nuevas maneras
    de escuchar y comprender la música.
    </p>
    `,

    imagenesInterior:[
        "assets/img/r1.jpg",
        "assets/img/r2.jpg",
        "assets/img/r3.jpg"
    ]

},

3:{

    imagen:"assets/img/articulo3.jpg",

    titulo:"Arte visual contemporáneo",

    subtitulo:"La imagen como registro de memoria cultural.",

    texto:`
    <p>
    Las artes visuales funcionan como documentos
    que reflejan pensamientos, conflictos
    y transformaciones sociales.
    </p>

    <p>
    Cada fotografía, ilustración o intervención
    artística conserva una parte de la época
    en la que fue creada.
    </p>

    <p>
    Archivo E-SEIS entiende la imagen como
    una forma de preservar aquello que podría
    desaparecer.
    </p>
    `,

    imagenesInterior:[
        "assets/img/m1.jpg",
        "assets/img/m2.jpg",
        "assets/img/m3.jpg",
        "assets/img/m4.jpg"
    ]

}

};









function abrirArticulo(numero){



const articulo = contenidoArticulos[numero];



if(!articulo){

return;

}





document.getElementById(
"imagenArticulo"
).src = articulo.imagen;





document.getElementById(
"tituloArticulo"
).innerHTML = articulo.titulo;





document.getElementById(
"subtituloArticulo"
).innerHTML = articulo.subtitulo;





document.getElementById(
"textoArticulo"
).innerHTML = articulo.texto;





document.getElementById(
"imagenInterior"
).src = articulo.imagenInterior;





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
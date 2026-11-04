const formulario = document.getElementById("formulario-contacto");
const divMensajes = document.getElementById("mensajes");

if (formulario) 
{
    formulario.addEventListener("submit",function(evento){
        evento.preventDefault();
        divMensajes.innerHTML = "";
        let nombre=document.getElementById("nombre").value.trim();
        let email=document.getElementById("email").value.trim();
        let telefono=document.getElementById("telefono").value.trim();
        let errores=[];

        if (nombre.length<3)errores.push("El nombre debe tener al menos 3 letras");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))errores.push("Correo invalido");
        if (!/^[0-9]{8,15}$/.test(telefono))errores.push("El telefono debe tener entre 8 y 15 numeros");
        if (errores.length>0)
        {
            errores.forEach(function(error) {
                let pError=document.createElement("p");
                pError.className="error";
                pError.textContent=error;
                divMensajes.appendChild(pError);
            });
        } else {
            let resumen=document.createElement("div");
            resumen.style.color="#669bfc";
            resumen.innerHTML=`<h3>Mensaje enviado!</h3><p>Nombre:${nombre}</p><p>Email:${email}</p><p>Tel:${telefono}</p>`;
            divMensajes.appendChild(resumen);
            formulario.reset();
        }
    });
}

//carrusle
const imgCarrusel=document.getElementById("imagen-carrusel");
const btnAtras=document.getElementById("btn-atras");
const btnAdelante=document.getElementById("btn-adelante");

if (imgCarrusel){
    const imagenes=[
        "https://ubuinvestiga.es/wp-content/uploads/2024/09/Agujero-negro.jpg",
        "https://imagenes.20minutos.es/files/image_1280_720/uploads/imagenes/2019/04/10/GRot7.jpg",
        "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_1280.jpg"
    ];
    let posicion=0;

    btnAdelante.addEventListener("click",function() {
        posicion++;
        if (posicion>=imagenes.length){
    posicion=0;}
        imgCarrusel.src=imagenes[posicion];
    });

    btnAtras.addEventListener("click",function() {
        posicion--;
        if (posicion < 0){
        posicion=imagenes.length-1; 
        }
        imgCarrusel.src=imagenes[posicion];
    });
}


const reproductorMusica=document.getElementById("musica-fondo");
if (reproductorMusica){
reproductorMusica.volume=0.3;
}
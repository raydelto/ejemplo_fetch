function obtenerDatos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(function (respuesta)  {
        return respuesta.json();
    }).then(function (respuesta){
        var nombre = document.getElementById('nombre');
        nombre.innerHTML = respuesta[1].nombre;
    })
}

function guardar(){
    var nombre = document.getElementById('txtNombre');
    var apellido = document.getElementById('txtApellido');
    var telefono = document.getElementById('txtTelefono');
    var detalle = {
        method: "POST",
        body: JSON.stringify({
            "nombre" : nombre.value,
            "apellido": apellido.value,
            "telefono": telefono.value
        })
    }
    fetch("http://www.raydelto.org/agenda.php", detalle)
    .then(function (respuesta){
        return respuesta.json();
    })
    .then(function(respuesta){
        var estado = document.getElementById('estado');
        if(respuesta.exito === true){
            estado.innerHTML = "EXITO";
        }else{
            estado.innerHTML = "Hubo un problema al enviar datos";
        }
    });

}

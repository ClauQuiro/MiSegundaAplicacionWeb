$.get("/Periodo/listarperiodo", function (data) {
    crearListado(data);
}
);


var nombre = document.getElementById("txtnombre");
    nombre.onkeyup = function () {
        //alert("hola");
        var nombrePeriodo = document.getElementById("txtnombre").value;
        $.get("/Periodo/BuscarPeriodoPorNombre/?nombre=" + nombrePeriodo, function (data) {
            crearListado(data);
        });
}


//var btnBuscar = document.getElementById("btnBuscar");
//btnBuscar.onclick = Function(){
//    $.get("Periodo/BuscarPeriodoPorNombre/?nombre=" + nombre, function (data) {
//        crearListado(data);
//    }
//    );
//}


//var btnlimpiar = document.getElementById("btnLimpiar");
//btnlimpiar.onclick = function () {
//    $.get("Periodo/listarperiodo", function (data) {
//        crearListado(data);
//    }
//    );
    
//    document.getElementById("txtnombre").value = "";
//}


function crearListado(data) {
    var contenido = "";
    contenido += "<table id='tabla-periodo' class ='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<td>Id Periodo</td>";
    contenido += "<td>Nombre</td>";
    contenido += "<td>Fecha Inicio</td>";
    contenido += "<td>Fecha fin</td>"
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";

    for (var i = 0; i < data.length; i++) {

        contenido += "<tr>";
        contenido += "<td>" + data[i].IIDPERIODO + "</td>";
        contenido += "<td>" + data[i].NOMBRE + "</td>";
        contenido += "<td>" + data[i].FECHAINICIO + "</td>";
        contenido += "<td>" + data[i].FECHAFIN + "</td>";

    }

    contenido += "</tbody>";
    contenido += "</table>";

    document.getElementById("tabla").innerHTML = contenido;
    $("#tabla-periodo").dataTable(
        {
            searching: false
        }
    );

}
$.get("/Curso/ListarCurso", function (data) {
    crearListado(data);
}
);


var btnBuscar = document.getElementById("btnBuscar");
btnBuscar.onclick = function () {
    var nombre = document.getElementById("txtnombre").value;

    $.get("/Curso/BuscarCursoPorNombre/?nombre="+ nombre, function (data) {
        crearListado(data);
    }
    );
}


var btnlimpiar = document.getElementById("btnLimpiar");
btnlimpiar.onclick = function () {
    $.get("/Curso/ListarCurso", function (data) {
        crearListado(data);
    }
    );
    document.getElementById("txtnombre").value = "";
    }
  




function crearListado(data) {
    var contenido = "";
    contenido += "<table id='tabla-curso' class ='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<td>Id Curso</td>";
    contenido += "<td>Nombre</td>";
    contenido += "<td>Descripcion</td>";
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody>";

    for (var i = 0; i < data.length; i++) {

        contenido += "<tr>";
        contenido += "<td>" + data[i].IIDCURSO + "</td>";
        contenido += "<td>" + data[i].NOMBRE + "</td>";
        contenido += "<td>" + data[i].DESCRIPCION + "</td>";

    }

    contenido += "<tbody>";
    contenido += "</table>";

    document.getElementById("tabla").innerHTML = contenido;
    $("#tabla-curso").dataTable(
        {
            searching: false
        }
    );


}
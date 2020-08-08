$.get("/Alumno/ListarAlumnos", function (data) {
    crearListado(["Id","Nombre","Apellido Paterno","Apellido Materno","Telefono Padre"],data);
}
);

$.get("/Alumno/listarSexo", function (data) {
    llenarCombo(data,document.getElementById("cboSexo"))

}
)

function llenarCombo(data, control) {
    var contenido = "";
    for (var i = 0; i < data.length; i++) {
        contenido += "<option value = '" + data[i].IID + "'>";
        contenido += data[i].NOMBRE;
        contenido += "</option>";
    }
    control.innerHTML = contenido;
}



function crearListado(arrayColumnas, data) {
    var contenido = "";
    contenido += "<table id='tabla-alumno' class ='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    for (var i = 0; i < arrayColumnas.length; i++) {
        contenido += "<td>";
        contenido += arrayColumnas[i];
        contenido += "</td>";
    }

    contenido += "</tr>";
    contenido += "</thead>";
    var llaves = Object.keys(data[0]);//saca los nombres de los campos de la tabla alumno
    // alert(llaves);
    contenido += "<tbody>";
    for (var i = 0; i < data.length; i++) {

        contenido += "<tr>";
        for (var j = 0; j < llaves.length; j++) {
            var valorLLaves = llaves[j];
            contenido += "<td>";
            contenido += data[i][valorLLaves];
            contenido += "</td>";
        }
         contenido += "</tr>";
     }
        contenido += "</tbody>";
        contenido += "</table>";
        document.getElementById("tabla").innerHTML = contenido;
        $("#tabla-alumno").dataTable(
            {
                searching: false
            }
        );
    }



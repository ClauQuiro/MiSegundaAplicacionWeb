
$.get("RepasoHTML/llenarComboPersona", function (data) {
   // alert(JSON.stringify(data));
    var contenido = " ";
    var nroregistros = data.length;

    for (var i = 0; i < nroregistros; i++) {

        contenido += "<option value = '"+ data[i].idpersona + "'>";
        contenido += data[i].nombre;
        contenido += "</option>";
    }
    document.getElementById("cboPersona").innerHTML = contenido;

});
function verificar(){
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var domicilio = document.getElementById("domicilio");
    var telefono = document.getElementById("telefono");
    var dni = document.getElementById("dni");
    var correo = document.getElementById("correo");
    var domicilio = document.getElementById("domicilio");
    var edad = document.getElementById("edad");
    var materia = document.getElementsByName("materia");
    var flag = false;

    caracteres(nombre,"nombre");
    caracteres(apellido,"apellido");
    caracteres(domicilio,"domicilio");
    caracteres(telefono,"telefono");
    caracteres(dni,"DNI");
    caracteres(correo,"correo");

    if(!correo.value.includes("@") || !correo.value.includes("@")){
        correo.value = "";
        correo.setAttribute("placeholder","El "+"correo"+" debe tener el siguiente formato: 'X@X.X'");
        correo.setAttribute("style","border-color:red; border-width:3px;");
    }else{
        correo.setAttribute("style","border-color:green; border-width:5px;");
    }

    if(edad.value < 10 || edad.value > 120){
        edad.value = "";
        edad.setAttribute("placeholder","Ingrese una edad valida (10-120)");
        edad.setAttribute("style","border-color:red; border-width:3px;");
    }else{
        edad.setAttribute("style","border-color:green; border-width:5px;");
    }

    if(materia[0] == true || materia[1] == true || materia[2] == true){
        flag = true;
    }else{
        alert("Elija una materia");
    }
    if(flag == false){
        if(materia[0].checked){
            //BD
        }else{
            if(materia[1].checked){
                //Redes
            }else{
                //Web
            }
        }
    }

}

function caracteres(id,label){
    if(id.value.length < 4){
        id.value = "";
        id.setAttribute("placeholder","El "+label+" debe tener al menos 4 caracteres");
        id.setAttribute("style","border-color:red; border-width:3px;");
    }else{
        id.setAttribute("style","border-color:green; border-width:5px;");
    }
}
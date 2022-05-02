var productos = [];

function agregar(){
    aux = verificar();
    if(aux != false){
        productos.push(aux);
        alert("Producto agregado con exito");
        window.open('empleado.html','_self');
    }
}

function verificar(){
    var i = 0;
    var nombre = document.getElementById("nombre");
    var desc = document.getElementById("desc");
    var precio = document.getElementById("precio");
    var cant = document.getElementById("cant");
    var iva = document.getElementsByName("iva");

    if(isEmpty(nombre) || isEmpty(desc) || isEmpty(precio) || isEmpty(cant)){
        alert("Debe llenar todos los campos");
        return false;
    }
    if(cant.value.toString().includes(".")){
        alert("La cantidad no puede contener decimales");
        cant.setAttribute("style","border-color:red; border-width:3px;");
        return false;
    }
    if(iva[0].checked == false && iva[1].checked == false){
        alert("Debe seleccionar una opcion de IVA");
        return false;
    }
    if(iva[0].checked == true)
        i = 0;
    else
        i = 1;
    return {codigo:productos.length,nombre:nombre.value,desc:desc.value,precio:parseFloat(precio.value),cant:parseInt(cant.value),iva:parseFloat(iva[i].value)};
}
function isEmpty(elemento){
    var flag = true;
    if(elemento.value != ""){
        flag = false;
        elemento.setAttribute("style","border-color:green; border-width:5px;");
    }else{
        elemento.setAttribute("style","border-color:red; border-width:3px;");
    }

    return flag;
}
